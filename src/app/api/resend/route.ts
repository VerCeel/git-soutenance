import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../../components/email/email-template';
import { Resend } from 'resend';
import { render } from '@react-email/render';

// Fonction pour obtenir l'instance Resend (lazy initialization)
function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY not configured');
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: NextRequest) {
  try {

    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation des champs requis
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'required fields' },
        { status: 400 }
      );
    }

    // Validation du format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email' },
        { status: 400 }
      );
    }

    // Protection contre les injections : limiter la longueur des champs
    if (name.length > 100 || email.length > 255 || phone?.length > 20 || message.length > 2000) {
      return NextResponse.json(
        { error: 'too long' },
        { status: 400 }
      );
    }

    // Nettoyer les données (protection XSS basique)
    const sanitize = (str: string) => str.trim().replace(/[<>]/g, '');
    const sanitizedName = sanitize(name);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedPhone = phone ? sanitize(phone) : 'Not Indicated';
    const sanitizedMessage = sanitize(message);

    // Convertir le composant React en HTML
    const emailHtml = await render(
      EmailTemplate({
        name: sanitizedName,
        email: sanitizedEmail,
        phone: sanitizedPhone,
        message: sanitizedMessage,
      })
    );

    // Initialiser Resend seulement quand nécessaire (lazy initialization)
    const resend = getResend();

    const { data, error } = await resend.emails.send({
      from: 'Contact [VerCeel]<hirich62@gmail.com>',
      to: ['hirich62@gmail.com'],
      subject: `New client ${sanitizedName}`,
      html: emailHtml,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error('Erreur détaillée:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi de l\'email',
        message: error?.message || 'Erreur inconnue',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
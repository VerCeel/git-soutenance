interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function EmailTemplate({ name, email, phone, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#0F2F44', fontSize: '24px', marginBottom: '20px' }}>
        Nouvelle demande de contact
      </h1>
      
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ color: '#0F2F44', fontSize: '18px', marginBottom: '15px' }}>Contact Informations</h2>
        
        <p style={{ margin: '8px 0', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Full Name :</strong> {name}
        </p>
        
        <p style={{ margin: '8px 0', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Email :</strong> <a href={`mailto:${email}`} style={{ color: '#0F2F44' }}>{email}</a>
        </p>
        
        <p style={{ margin: '8px 0', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Phone :</strong> {phone}
        </p>
      </div>
      
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#0F2F44', fontSize: '18px', marginBottom: '15px' }}>Message</h2>
        <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
          {message}
        </p>
      </div>
      
      <p style={{ marginTop: '20px', fontSize: '12px', color: '#666', textAlign: 'center' }}>
        From Github-soutenance
      </p>
    </div>
  );
}
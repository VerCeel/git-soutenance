import DarkVeil from "../DarkVeil";

const Background = ({ children } : { children: React.ReactNode }) => {
  return (
    <div>
      <div className="absolute min-h-screen w-full select-none ">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <div className=" z-10">{children}</div>
    </div>
  );
};

export default Background;

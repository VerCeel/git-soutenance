import DarkVeil from "../DarkVeil";

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="absolute min-h-screen w-full select-none ">
        <div className="fixed inset-0 -z-10">
          <DarkVeil
            hueShift={1}
            noiseIntensity={0}
            scanlineIntensity={1}
            speed={1}
            scanlineFrequency={0}
            warpAmount={0.5}
          />
        </div>
      </div>
      <div className=" z-10">{children}</div>
    </div>
  );
};

export default Background;

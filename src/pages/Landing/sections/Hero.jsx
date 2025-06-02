import svg from "/src/pages/Landing/sections/Logo/Vector 1.svg";
import svg2 from "/src/pages/Landing/sections/Logo/Ellipse 11.svg";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white">
      {/* SVG Images - Positioned at the top */}
      <div className="absolute inset-x-0 top-0 z-0">
        <img
          src={svg}
          alt="svg"
          className="absolute right-0 top-0 bottom-10 z-5"
        />
        <img
          src={svg2}
          alt="svg2"
          className="absolute right-0 top-10 z-10"
        />
      </div>
      {/* Main Content */}
      <div className="relative z-20 text-center max-w-3xl px-4">
        <h1 className="font-['Hind_Vadodara'] font-bold text-[86px] leading-[100%] text-[#052F72] tracking-[0%]">
          ProTrack:{' '}
          <span className="font-light text-[64px]">
            Manage your projects intelligently, effectively avoid fines and violations
          </span>
        </h1>
        {/* Additional Text */}
        <p
          className="mt-6 font-['Hind_Vadodara'] font-semibold text-[24px] leading-[146%] tracking-[2%] text-[#331B3BA8]"
        >
          ProTrack combines the power of comprehensive project management with advanced violation tracking tools, helping you stay compliant and avoid costly delays.
        </p>
      </div>
     
    </div>
  );
}
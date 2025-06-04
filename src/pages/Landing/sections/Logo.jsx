import Image from "/src/pages/Landing/sections/Logo/Frame 15.svg"; 


export default function Logo() {
    // Centered Image - Moved lower
    return (
      <div className="mt-12 flex justify-center">
        <img
          src={Image}
          alt="ProTrack Feature"
          className="max-w-full h-auto"
        />
      </div>
    );
}
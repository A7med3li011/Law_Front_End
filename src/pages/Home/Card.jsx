export default function Card({ number, color, text }) {
  return (
    <div
      className={`
            w-[300px] h-[100px] rounded-lg border border-gray-300
            relative p-2.5 box-border m-2.5
            
          `}
      style={{ backgroundColor: color }}
    >
      <div
        className="absolute top-2.5 right-2.5 font-bold"
        style={{ color: "#495180" }}
      >
        {text}
      </div>
      <div className="absolute bottom-2.5 left-2.5 text-lg text-gray-600">
        {number}
      </div>
    </div>
  );
}

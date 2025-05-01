import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const info = [
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-phone" />,
    text: "رقم الجوال",
    value: "9200343222",
  },
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-comment" />,
    text: "رسائل",
    value: "199099",
  },
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-envelope" />,
    text: "الايميل",
    value: "help@company.sa",
  },
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-envelope" />,
    text: "فكس",
    value: "00966-11-434-6654",
  },
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-location-dot" />,
    text: "موقع",
    value: "Riyadh",
  },
];

export default function SupportInfo() {
  return (
    <div className="text-black border-[1px] border-[#AEB9E1]  bg-[#F5F6FB] self-stretch   w-full md:w-2/6  my-10 rounded-lg pe-5 py-3 ms-auto">
      <p className="text-right  text-lg   tracking-wide">صل ألينا</p>
      <ul className="">
        {info.map((ele, index) => (
          <li
            className="flex  my-1 items-center gap-x-3 flex-row-reverse"
            key={index}
          >
            <p className="text-[#AEB9E1] text-lg">{ele.icon}</p>
            <p className="flex flex-col text-right">
              <span className="text-sm text-primary py-1">{ele.text}</span>
              <span className="text-sm text-primary py-1">{ele.value}</span>
            </p>
          </li>
        ))}
      </ul>
      <div>
        <h5 className="text-right tracking-wide my-4">تابعنا</h5>
        <div className="px-5">
          <div className="flex items-center gap-x-3 text-primary border-b-[1px] border-b-[#AEB9E1] pb-6  ">
            <span className=" cursor-pointer">
              <FontAwesomeIcon icon="fab fa-twitter" />
            </span>
            <span className=" cursor-pointer">
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </span>
            <span className=" cursor-pointer">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

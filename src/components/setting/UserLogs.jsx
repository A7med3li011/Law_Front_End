const logs = [
  {
    city: "كيبف",
    conuntry: "اوكرانيا",
    device: "iphone13",
  },
  {
    city: "كيبف",
    conuntry: "اوكرانيا",
    device: "iphone13",
  },
  {
    city: "كيبف",
    conuntry: "اوكرانيا",
    device: "iphone13",
  },
];
export default function UserLogs() {
  return (
    <div className="text-black text-right px-3">
      <div className="py-3 border-y-[1px] border-y-light">
        <h4 className="text-primary font-semibold">آخر تسجيل دخول</h4>
        <p className="text-light my-2">اليوم at 18:34, Safary 198.123.23.23</p>
      </div>
      <div className="py-3">
        <h4>إجمالي الجلسات النشطة </h4>
        <ul className="text-primary font-semibold">
          {logs.map((ele, index) => (
            <li
              className="flex items-center justify-end text-right gap-x-3  border-b-[1px] py-3 border-b-light"
              key={index}
            >
              <span className=" inline-block">. {ele.city}</span>
              <span className=" inline-block">. {ele.conuntry}</span>
              <span className=" inline-block">. {ele.device}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

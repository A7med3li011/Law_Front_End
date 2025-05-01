import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../ui/Avatar";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const links = [
  {
    name: "الصفحه الرئيسية",
    icon: <FontAwesomeIcon icon="fa-solid fa-house" />,
    to: "",
  },
  {
    name: "المشروعات",
    icon: <FontAwesomeIcon icon="fa-solid fa-chart-simple" />,
    to: "",
  },
  {
    name: "الملفات",
    icon: <FontAwesomeIcon icon="fa-solid fa-folder-open" />,
    to: "",
  },
  {
    name: "الفواتير",
    icon: <FontAwesomeIcon icon="fa-solid fa-sack-dollar" />,
    to: "",
  },
  {
    name: "الدردشة",
    icon: <FontAwesomeIcon icon="fa-solid fa-comment" />,
    to: "",
  },
  {
    name: "التواصل و الدعم",
    icon: <FontAwesomeIcon icon="fa-solid fa-phone-volume" />,
    to: "/support",
  },
  {
    name: "الاعدادات",
    icon: <FontAwesomeIcon icon="fa-solid fa-gear" />,
    to: "/setting",
  },
];

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const user = useSelector((store) => store.user.user);
  const userCurrentImage = useSelector((store) => store.user.currentImage);

  return (
    <div className="w-fit  py-5 px-1 h-[100vh] bg-primary hidden md:block ">
      <div className="flex flex-row-reverse items-center ">
        <Avatar
          src={userCurrentImage || user?.image?.secure_url || null}
          alt={"profilePic"}
          deco={`${toggle ? "" : "me-5 "} rounded-full  h-[40px] w-[40px]`}
        />

        <div
          className={`text-right mx-1 transition-all duration-500 overflow-hidden ${
            toggle ? "opacity-100 max-w-[200px] ms-2" : "opacity-0 max-w-0"
          }`}
        >
          <p className="text-xs"> {user?.name}</p>
          <p className="text-xs">{user?.email}</p>
        </div>

        <div
          onClick={() => setToggle((prev) => !prev)}
          className={`${toggle ? "me-1 ms-2" : "ms-3"}  text-xs cursor-pointer`}
        >
          {toggle ? (
            <FontAwesomeIcon icon="fa-solid fa-angles-right" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-angles-left" />
          )}
        </div>
      </div>

      <ul className="text-right my-6">
        {links.map((ele, index) => (
          <li
            className="group"
            onClick={(e) => {
              // e.preventDefault();
              setSearchParams({ index });
            }}
            key={index}
          >
            <Link
              to={ele.to}
              className={` px-1 py-3 flex justify-end gap-x-2 ${
                searchParams.get("index") == index ? " scale-110 px-3" : ""
              }`}
            >
              <span
                className={`transition-all duration-500 overflow-hidden  whitespace-nowrap group-hover:text-white ${
                  toggle
                    ? "opacity-100 max-w-[200px] pe-2 scale-100"
                    : "opacity-0 max-w-0 scale-95"
                } ${
                  searchParams.get("index") == index
                    ? "text-white"
                    : "text-light"
                }`}
              >
                {ele.name}
              </span>
              <span
                className={`transition-all duration-500  flex items-center justify-center group-hover:text-secondary ${
                  toggle ? "w-[24px]" : "w-[50px] text-xl"
                } ${
                  searchParams.get("index") == index
                    ? " text-secondary"
                    : "text-light"
                }`}
              >
                {ele.icon}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

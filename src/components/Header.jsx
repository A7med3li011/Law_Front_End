import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex  justify-between items-center py-3 px-4 flex-row-reverse">
      <div className="py-1 px-3  bg-white rounded-full text-primary">LOGO</div>
      <div className="flex items-center gap-x-4 border-white border-[1px] px-3 py-1 rounded-xl">
        <input
          type="text"
          className="bg-transparent px-3  focus:outline-none"
        />
        <span className=" cursor-pointer">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </span>
      </div>
      <div className="text-white flex items-center flex-row-reverse gap-x-3 text-xl ">
        <span>
          <FontAwesomeIcon icon="fa-solid fa-bell" />
        </span>
        <span>
          <FontAwesomeIcon icon="fa-solid fa-gear" />
        </span>
        <button onClick={logOut}>
          <LogoutIcon sx={{ fontSize: { xs: 20, sm: 25 } }} />
        </button>
      </div>
    </div>
  );
}

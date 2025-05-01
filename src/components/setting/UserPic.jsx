import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import any from "../../utilities/assets/avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateCurrentImage } from "../../redux/UserSlice";

export default function UserPic({ setCurrentImage }) {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCurrentImage(file);
      setPreviewImage(imageUrl);
      dispatch(updateCurrentImage(imageUrl));
    }
  };
  return (
    <div className="  ms-auto h-[100px]  relative rounded-full overflow-hidden me-10 w-[100px] ">
      <img
        className="w-full"
        src={previewImage || user?.image?.secure_url || any}
        alt="userImage"
      />

      <label
        className="w-full text-center flex justify-center  absolute bottom-[0px] cursor-pointer bg-[#abacaddf] py-2 text-white"
        htmlFor="image"
      >
        <FontAwesomeIcon icon="fa-solid fa-camera" />
      </label>
      <input
        onChange={handleImageChange}
        className="hidden"
        accept="image/*"
        type="file"
        id="image"
      />
    </div>
  );
}

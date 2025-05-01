import { useState } from "react";
import SettingFrom from "../components/setting/SettingFrom";
import UserLogs from "../components/setting/UserLogs";
import UserPic from "../components/setting/UserPic";

export default function Setting() {
  const [currentImage, setCurrentImage] = useState(null);
  return (
    <div>
      <div className="flex text-black justify-between items-center flex-row-reverse">
        <h2 className="text-xl font-semibold">الاعدادات</h2>
      </div>
      <div className="text-black w-full flex items-center justify-center flex-col  max-w-6xl mx-auto px-3 py-2 my-10 shadow-lg">
        <UserPic setCurrentImage={setCurrentImage} />
        <SettingFrom
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      </div>
      <UserLogs />
    </div>
  );
}

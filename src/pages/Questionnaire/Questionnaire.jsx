import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useQuery } from "react-query";
import { getCategories } from "../../utilities/Apis";
import { useSelector } from "react-redux";
import Popup from "../../components/Questionnaire/Popup";

export default function Questionnaire() {
  const user = useSelector((store) => store.user);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategories(user.token),
    enabled: !!user.token,
  });
  const openPopup = () => setIsPopupOpen(true);

  return (
    <>
      <div className="text-black px-3">
        <div className="flex items-center justify-between flex-row-reverse">
          <h4 className="text-lg font-semibold">الاستبيانات</h4>
          <button
            onClick={openPopup}
            className="bg-primary text-white py-2 px-3 rounded-lg flex items-center gap-x-3 "
          >
            <span>إنشاء استبيان</span>
            <span className="text-sm">
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </span>
          </button>
        </div>
      </div>

      {isPopupOpen && (
        <Popup setIsPopupOpen={setIsPopupOpen} data={data?.data} />
      )}
    </>
  );
}

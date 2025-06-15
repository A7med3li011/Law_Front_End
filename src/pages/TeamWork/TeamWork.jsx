import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader.jsx";
import { getEmployees } from "../../utilities/Apis.js";
import { useNavigate } from "react-router-dom";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";

export default function TeamWork() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: employees = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: () => getEmployees(token),
    enabled: !!token,
  });
  const filteredEmployees = searchTerm
    ? employees.filter((employee) =>
        employee?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : employees;

  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between flex-row-reverse mb-8 pb-3 border-b-2 ">
          <h1 className="text-2xl font-bold text-primary">فريق العمل</h1>

          <button
            onClick={() => {
              navigate("/addEmployee");
            }}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            <span> إضافة عضو جديد</span>
            <FontAwesomeIcon icon={faPlus} className="text-sm" />
          </button>
        </div>
        <div
          dir="rtl"
          className="flex items-center self-end gap-x-4 border-primary max-w-48 border-[1px] px-3 py-1 rounded-xl  text-black"
        >
          <input
            type="text"
            className="bg-transparent px-3  focus:outline-none"
            placeholder="اكتب اسم العضو"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 ">
          {filteredEmployees?.map((employee) => {
            return (
              <div
                key={employee.id}
                onClick={() => navigate(`/editEmployee/${employee.id}`)}
                className="col-span-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:shadow-md transition"
              >
                {employee?.image?.secure_url ||
                employee?.branch?.image?.secure_url ? (
                  <img
                    className="rounded-t-lg w-full h-48 object-cover"
                    src={
                      employee?.image?.secure_url
                        ? employee.image.secure_url.substring(
                            0,
                            employee.image.secure_url.lastIndexOf(".")
                          )
                        : employee.branch.image.secure_url.substring(
                            0,
                            employee.branch.image.secure_url.lastIndexOf(".")
                          )
                    }
                    alt="Employee"
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 bg-gray-100 text-gray-500">
                    <ImageIcon style={{ fontSize: 50 }} />
                  </div>
                )}
                <div className="p-5 text-center">
                  <div className="flex justify-between items-center">
                    <h5 className="mb-2 tracking-tight text-gray-900 dark:text-white">
                      {employee?.companyName}
                    </h5>
                    <h5 className="text-black">: اسم الشركة</h5>
                  </div>
                  <div className="flex justify-between items-center">
                    <h5 className="mb-2 tracking-tight text-gray-900 dark:text-white">
                      {employee?.branch?.branchName}
                    </h5>
                    <h5 className="text-black">: اسم الفرع</h5>
                  </div>
                  <div className="flex justify-between items-center">
                    <h5 className="mb-2 tracking-tight text-gray-900 dark:text-white">
                      {employee?.name}
                    </h5>
                    <h5 className="text-black">: اسم الموظف</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

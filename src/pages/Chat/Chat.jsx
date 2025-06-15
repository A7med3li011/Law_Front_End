import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
export default function Chat() {
  return (
    <div className="flex flex-col gap-5 h-screen antialiased text-gray-800">
      {/* Header */}
      <div className="flex flex-row-reverse justify-between border-b-2 p-2 border-gray-200">
        <h2 className="font-semibold text-2xl">الرسائل </h2>
        <div className="flex justify-between gap-5 items-center">
          <div>
            <button className="bg-primary rounded-md text-white py-2 px-4">
              رسالة جديدة
            </button>
          </div>
          <div className="flex items-center gap-x-4 border-gray-300 text-primary border-[1px] px-3 py-1 rounded-md">
            <input
              type="text"
              className="bg-transparent px-3 focus:outline-none text-right"
              placeholder="بحث"
            />
            <span className="text-primary">
              <SearchIcon />
            </span>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        {/* Chat Area */}
        <div className="flex flex-col flex-auto h-full px-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 pt-0 ">
            <div className="flex flex-row-reverse items-center gap-2  py-4 border-b border-primary">
              <div className="text-xl font-semibold text-gray-800 ">
                <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full text-sm">
                  م
                </div>
              </div>
              <div className="ml-2 text-base font-semibold">محمد خليل </div>
            </div>
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  {/* recieve */}
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-start gap-3">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        ا
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="relative text-sm bg-white py-2 px-4 shadow rounded-xl ">
                          <div>
                            مـاثـل بين قوة إدارة المشاريع المتكاملة وأدوات
                            متقدمة لمتابعة
                          </div>
                        </div>
                        <span className="text-light text-sm">8:00 AM</span>
                      </div>
                    </div>
                  </div>

                  {/* sender */}
                  <div className="col-start-13 col-end-6 p-3 rounded-lg">
                    <div className="flex flex-row-reverse items-start gap-3">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        م
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="relative text-sm bg-indigo-300 py-2 px-4 shadow rounded-xl ">
                          <div>
                            مـاثـل بين قوة إدارة المشاريع المتكاملة وأدوات
                            متقدمة لمتابعة
                          </div>
                        </div>
                        <span className="text-light text-sm text-right">
                          8:00 AM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div className="flex-grow ">
                <div className="flex flex-row-reverse gap-3">
                  <input
                    type="text"
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pr-4 h-10 text-right "
                    placeholder="كتابة نص"
                  />
                  <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <AttachFileIcon />
                  </button>
                  <button className="flex items-center justify-center bg-indigo-400 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                    <SendIcon className="transform rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="flex flex-col py-8 pl-6 pr-2 w-2/4 md:w-1/4 bg-white flex-shrink-1 border-2 border-gray-100 rounded-md">
          <div className="flex flex-row items-center justify-center  w-full">
            <button className="bg-secondary py-2 text-white rounded-lg  w-full">
              إنشاء مجموعة
            </button>
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex flex-col space-y-1 overflow-y-auto">
              <button className="flex flex-col md:flex-row-reverse  gap-2 items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center justify-center h-12 w-12 bg-indigo-200 rounded-full">
                  م
                </div>
                <div className="flex flex-col gap-1">
                  <div className="ml-2 text-base font-semibold">محمد خليل </div>
                  <div className="ml-2 text-sm ">الوظيفة </div>
                </div>
              </button>
              {/* More user buttons here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

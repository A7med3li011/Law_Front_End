import React from "react";

export default function ViolationsChart({ data = [] }) {
  // Process data to get categories
  const categories = data?.map((ele) => ele?.questionId?.categoryId?.title);
  const uniqueCategories = Array.from(new Set(categories));

  let categoryData = Array.from(
    { length: uniqueCategories.length },
    (_, i) => ({
      title: uniqueCategories[i],
      items: [],
    })
  );

  // Group data by category
  categoryData?.forEach((category, index) => {
    data.forEach((item) => {
      if (item?.questionId?.categoryId?.title === category.title) {
        categoryData[index].items.push(item);
      }
    });
  });

  // Calculate percentages for pie chart
  const totalItems = data.length || 1;
  const violationPercentage =
    Math.round(
      (data?.filter((ele) => ele.answer?.value === "نعم").length / totalItems) *
        100
    ) || 0;

  const passedPercentage =
    Math.round(
      (data?.filter((ele) => ele.answer?.value === "لا").length / totalItems) *
        100
    ) || 0;

  const notApplicablePercentage =
    Math.round(
      (data?.filter((ele) => ele.answer?.value === "لا ينطبق").length /
        totalItems) *
        100
    ) || 0;

  // SVG circle calculations
  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  const violationOffset =
    circumference - (violationPercentage / 100) * circumference;
  const passedOffset = circumference - (passedPercentage / 100) * circumference;
  const notApplicableOffset =
    circumference - (notApplicablePercentage / 100) * circumference;

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Pie Chart Section */}
        <div className="w-full md:w-1/4 flex flex-col items-center justify-center border-r border-gray-200 pr-4">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">
            المخالفات
          </h3>

          {/* Pie Chart */}
          <div className="relative w-40 h-40 mb-4">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 42 42"
              className="transform -rotate-90"
            >
              {/* Background circle */}
              <circle
                cx="21"
                cy="21"
                r="18"
                stroke="#eee"
                strokeWidth="3"
                fill="none"
              />

              {/* Violations (outer ring) */}
              <circle
                cx="21"
                cy="21"
                r="18"
                stroke="#AEB9E1"
                strokeWidth="3"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={violationOffset}
                strokeLinecap="round"
              />

              {/* Passed (middle ring) */}
              <circle
                cx="21"
                cy="21"
                r="15"
                stroke="#052F72"
                strokeWidth="3"
                fill="none"
                strokeDasharray={circumference * 0.83}
                strokeDashoffset={passedOffset * 0.83}
                strokeLinecap="round"
              />

              {/* Not Applicable (inner ring) */}
              <circle
                cx="21"
                cy="21"
                r="12"
                stroke="#D1D5DB"
                strokeWidth="3"
                fill="none"
                strokeDasharray={circumference * 0.67}
                strokeDashoffset={notApplicableOffset * 0.67}
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Statistics */}
          <div className="w-full space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{violationPercentage}%</span>
              <div className="flex items-center space-x-2">
                <span className="text-black">عدد المخالفات</span>
                <div className="w-4 h-4 bg-[#AEB9E1] mr-2"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{passedPercentage}%</span>
              <div className="flex items-center space-x-2">
                <span className="text-black">المخالفات المجتازة</span>
                <div className="w-4 h-4 bg-blue-900 mr-2"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{notApplicablePercentage}%</span>
              <div className="flex items-center space-x-2">
                <span className="text-black">عدد المخالفات التي لم تنطبق</span>
                <div className="w-4 h-4 bg-gray-200 mr-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div className="w-full md:w-3/4">
          {/* Header */}
          <div className="flex items-center justify-end mb-4">
            <h3 className="text-lg font-semibold text-blue-900 mr-2">
              جهات المخالفات
            </h3>
            <svg
              className="text-blue-900 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
            </svg>
          </div>

          {/* Stacked Bar Chart */}
          <div className="w-full h-64 flex px-4 overflow-x-auto">
            <div className="flex items-end gap-3 flex-1 min-w-max">
              {categoryData.map((category, index) => {
                const totalCategoryItems = category.items.length || 1;
                const categoryViolations = category.items.filter(
                  (item) => item?.answer?.value === "نعم"
                ).length;
                const categoryPassed = category.items.filter(
                  (item) => item?.answer?.value === "لا"
                ).length;
                const categoryNotApplicable = category.items.filter(
                  (item) => item?.answer?.value === "لا ينطبق"
                ).length;

                const violationHeight =
                  (categoryViolations / totalCategoryItems) * 200;
                const passedHeight =
                  (categoryPassed / totalCategoryItems) * 200;
                const notApplicableHeight =
                  (categoryNotApplicable / totalCategoryItems) * 200;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center min-w-[60px] flex-1"
                  >
                    {/* Stacked Bar */}
                    <div
                      className="w-8 flex flex-col-reverse"
                      style={{ height: "200px" }}
                    >
                      {/* Violations */}
                      {violationHeight > 0 && (
                        <div
                          className="w-full bg-[#AEB9E1] rounded-full"
                          style={{ height: `${violationHeight}px` }}
                        />
                      )}

                      {/* Passed */}
                      {passedHeight > 0 && (
                        <div
                          className="w-full bg-blue-900 rounded-full"
                          style={{ height: `${passedHeight}px` }}
                        />
                      )}

                      {/* Not Applicable */}
                      {notApplicableHeight > 0 && (
                        <div
                          className="w-full bg-gray-200 rounded-full"
                          style={{ height: `${notApplicableHeight}px` }}
                        />
                      )}
                    </div>

                    {/* Category Label */}
                    <div className="mt-2 text-center">
                      <span className="text-xs text-gray-600 block w-full leading-tight">
                        {category.title || `الجهة ${index + 1}`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center mt-6 gap-6 flex-wrap">
            <div className="flex items-center">
              <span className="text-sm text-black">عدد المخالفات المتجازة</span>
              <div className="w-4 h-4 bg-blue-900 ml-2 space-x-2"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-black">عدد المخالفات</span>
              <div className="w-4 h-4 bg-[#AEB9E1] ml-2"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-black">
                عدد المخالفات التي لم تنطبق
              </span>
              <div className="w-4 h-4 bg-gray-200 ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

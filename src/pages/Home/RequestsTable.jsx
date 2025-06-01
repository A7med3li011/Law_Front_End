import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Autorenew as AutorenewIcon,
  ReportProblem as ReportProblemIcon,
} from "@mui/icons-material";

import Row from "./Row";

// Constants
// const TABLE_HEADERS = [
//   "رقم المخالفة",
//   "الايضاحات",
//   "قيمة الغرامة",
//   "تاريخ المخالفة",
//   "الإجراء في حال التكرار",
//   "العقوبة",
//   "الوحدة",
//   "المخالفة",
//   "الحالة",
// ];

// const STATUS_CONFIG = {
//   completed: {
//     icon: CheckCircleIcon,
//     color: "#0EC105",
//     text: "تم الحل",
//   },
//   inProgress: {
//     icon: AutorenewIcon,
//     color: "#EAA40A",
//     text: "جاري العمل",
//   },
//   pending: {
//     icon: ReportProblemIcon,
//     color: "#D30C00",
//     text: "معلق",
//   },
// };

// const SAMPLE_DATA = [
//   {
//     status: "completed",
//     clarification: "مع التصحيح المخالفة",
//     fineAmount: "$ 1,099.24",
//     date: "30 يناير 2024",
//     repeatAction: "تضاعف الغرامة",
//     penalty: "اغلاق محل المنشئة الي حين الترخيص",
//     unit: "المنشئة",
//     violation: "ممارسة نشاط دون اذن البلدية",
//     violationNumber: "#1532",
//   },
//   {
//     status: "inProgress",
//     clarification: "مع التصحيح المخالفة",
//     fineAmount: "$ 1,099.24",
//     date: "30 يناير 2024",
//     repeatAction: "تضاعف الغرامة",
//     penalty: "اغلاق محل المنشئة الي حين الترخيص",
//     unit: "المنشئة",
//     violation: "ممارسة نشاط دون اذن البلدية",
//     violationNumber: "#1532",
//   },
//   {
//     status: "pending",
//     clarification: "مع التصحيح المخالفة",
//     fineAmount: "$ 1,099.24",
//     date: "30 يناير 2024",
//     repeatAction: "تضاعف الغرامة",
//     penalty: "اغلاق محل المنشئة الي حين الترخيص",
//     unit: "المنشئة",
//     violation: "ممارسة نشاط دون اذن البلدية",
//     violationNumber: "#1532",
//   },
// ];

// Helper Components
// const StatusIndicator = ({ status }) => {
//   const { icon: Icon, color, text } = STATUS_CONFIG[status];

//   return (
//     <Box sx={{ display: "flex", alignItems: "center" }}>
//       <Icon sx={{ color, mr: 1 }} />
//       <span>{text}</span>
//     </Box>
//   );
// };

// const TableHeaderCell = ({ children }) => (
//   <TableCell
//     sx={{
//       color: "#052F72",
//       fontWeight: "bold",
//       borderBottom: "2px solid #052F72",
//     }}
//   >
//     {children}
//   </TableCell>
// );

// const TableBodyCell = ({ children }) => (
//   <TableCell sx={{ borderBottom: "1px solid #e0e0e0" }}>{children}</TableCell>
// );

// Main Component
const RequestsTable = ({ data }) => {
  console.log(data);
  const today = new Date().toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-200 text-primary">
          <tr>
            <th className="border px-4 py-2">ايضاحات/ملاحظات</th>
            <th className="border px-4 py-2">الحاله</th>

            <th className="border px-4 py-2">الجهه</th>
            <th className="border px-4 py-2">التاريخ</th>
            <th className="border px-4 py-2">العقوبه</th>
            <th className="border px-4 py-2">المخالفه</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(
            (ele, index) => ele?.answer?.value == "نعم" && <Row data={ele} />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsTable;

import React from 'react';
import { 
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography, 
  Button 
} from '@mui/material';
import { 
  CheckCircle as CheckCircleIcon,
  Autorenew as AutorenewIcon,
  ReportProblem as ReportProblemIcon 
} from '@mui/icons-material';

// Constants
const TABLE_HEADERS = [
  'رقم المخالفة',
  'الايضاحات',
  'قيمة الغرامة',
  'تاريخ المخالفة',
  'الإجراء في حال التكرار',
  'العقوبة',
  'الوحدة',
  'المخالفة',
  'الحالة'
];

const STATUS_CONFIG = {
  completed: {
    icon: CheckCircleIcon,
    color: '#0EC105',
    text: 'تم الحل'
  },
  inProgress: {
    icon: AutorenewIcon,
    color: '#EAA40A',
    text: 'جاري العمل'
  },
  pending: {
    icon: ReportProblemIcon,
    color: '#D30C00',
    text: 'معلق'
  }
};

const SAMPLE_DATA = [
  {
    status: 'completed',
    clarification: 'مع التصحيح المخالفة',
    fineAmount: '$ 1,099.24',
    date: '30 يناير 2024',
    repeatAction: 'تضاعف الغرامة',
    penalty: 'اغلاق محل المنشئة الي حين الترخيص',
    unit: 'المنشئة',
    violation: 'ممارسة نشاط دون اذن البلدية',
    violationNumber: '#1532'
  },
  {
    status: 'inProgress',
    clarification: 'مع التصحيح المخالفة',
    fineAmount: '$ 1,099.24',
    date: '30 يناير 2024',
    repeatAction: 'تضاعف الغرامة',
    penalty: 'اغلاق محل المنشئة الي حين الترخيص',
    unit: 'المنشئة',
    violation: 'ممارسة نشاط دون اذن البلدية',
    violationNumber: '#1532'
  },
  {
    status: 'pending',
    clarification: 'مع التصحيح المخالفة',
    fineAmount: '$ 1,099.24',
    date: '30 يناير 2024',
    repeatAction: 'تضاعف الغرامة',
    penalty: 'اغلاق محل المنشئة الي حين الترخيص',
    unit: 'المنشئة',
    violation: 'ممارسة نشاط دون اذن البلدية',
    violationNumber: '#1532'
  },
];

// Helper Components
const StatusIndicator = ({ status }) => {
  const { icon: Icon, color, text } = STATUS_CONFIG[status];
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Icon sx={{ color, mr: 1 }} />
      <span>{text}</span>
    </Box>
  );
};

const TableHeaderCell = ({ children }) => (
  <TableCell sx={{ 
    color: '#052F72', 
    fontWeight: 'bold', 
    borderBottom: '2px solid #052F72' 
  }}>
    {children}
  </TableCell>
);

const TableBodyCell = ({ children }) => (
  <TableCell sx={{ borderBottom: '1px solid #e0e0e0' }}>
    {children}
  </TableCell>
);

// Main Component
const RequestsTable = () => {
  const today = new Date().toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Box sx={{ 
      direction: 'rtl', 
      p: 2, 
      bgcolor: 'white', 
      borderRadius: 2, 
      boxShadow: 3 
    }}>
      {/* Header Section */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 2 
      }}>
        <Typography variant="h6" sx={{ 
          color: '#052F72', 
          textAlign: 'right', 
          fontWeight: 'bold' 
        }}>
          المخالفات
        </Typography>
        <Button variant="contained" sx={{ 
          bgcolor: '#052F72', 
          '&:hover': { bgcolor: '#052F72' },
          fontWeight: 'bold'
        }}>
          {today}
        </Button>
      </Box>

      {/* Table Section */}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="violations table">
          <TableHead>
            <TableRow sx={{ bgcolor: '#f5f5f5' }}>
              {TABLE_HEADERS.map((header) => (
                <TableHeaderCell key={header}>{header}</TableHeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {SAMPLE_DATA.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:hover': { bgcolor: '#f0f0f0' } }}
              >
                <TableBodyCell>{row.violationNumber}</TableBodyCell>
                <TableBodyCell>{row.clarification}</TableBodyCell>
                <TableBodyCell>{row.fineAmount}</TableBodyCell>
                <TableBodyCell>{row.date}</TableBodyCell>
                <TableBodyCell>{row.repeatAction}</TableBodyCell>
                <TableBodyCell>{row.penalty}</TableBodyCell>
                <TableBodyCell>{row.unit}</TableBodyCell>
                <TableBodyCell>{row.violation}</TableBodyCell>
                <TableBodyCell>
                  <StatusIndicator status={row.status} />
                </TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RequestsTable;
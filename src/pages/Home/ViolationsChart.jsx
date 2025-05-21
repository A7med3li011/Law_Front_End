import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import FourCardsComponent from './FourCardsComponent';

const data = [
  { day: 'الجهة 1', completed: 4, inProgress: 3, ongoing: 2 },
  { day: 'الجهة 2', completed: 5, inProgress: 2, ongoing: 3 },
  { day: 'الجهة 3', completed: 4, inProgress: 4, ongoing: 2 },
  { day: ' الجهة4', completed: 6, inProgress: 2, ongoing: 3 },
  { day: 'الجهة 5', completed: 5, inProgress: 3, ongoing: 2 },
  { day: 'الجهة 6', completed: 5, inProgress: 4, ongoing: 2 },
  { day: 'الجهة 7', completed: 6, inProgress: 3, ongoing: 1 },
  { day: 'الجهة 8', completed: 5, inProgress: 2, ongoing: 2 },
  { day: 'الجهة 9', completed: 4, inProgress: 3, ongoing: 2 },
  { day: 'الجهة 10', completed: 3, inProgress: 4, ongoing: 3 },
];

export default function ViolationsChart() {
  const maxValue = Math.max(...data.map(round => round.completed + round.inProgress + round.ongoing));
  const yAxisTicks = Array.from({ length: maxValue + 1 }, (_, i) => i);

  return (
    <Box>
      
      <Box className="flex flex-col md:flex-row gap-2 p-2 bg-white rounded-xl shadow-md">
        
        <Box className="w-full md:w-1/4 flex flex-col items-center justify-center border-r">
          <Typography variant="h6" gutterBottom sx={{ color: '#8D9092' }}>المخالفات</Typography>
          <Box 
            className="relative flex items-center justify-center"
            style={{ 
              width: '150px',
              height: '150px',
              left: '28.62px',
              borderRadius: '0.67px'
            }}
          >
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 42 42" 
              className="transform -rotate-90"
            >
              <circle
                cx="21"
                cy="21"
                r="18"
                stroke="#eee"
                strokeWidth="5"
                fill="none"
              />
              <circle
                cx="21"
                cy="21"
                r="14"
                stroke="#2EB352"
                strokeWidth="5"ء
                fill="none"
                strokeDasharray="90"
                strokeDashoffset="20"
              />
              <circle
                cx="21"
                cy="21"
                r="18"
                stroke="#052F72"
                strokeWidth="5"
                fill="none"
                strokeDasharray="113"
                strokeDashoffset="40"
              />
              <circle
                cx="21"
                cy="21"
                r="10"
                stroke="#F7B21B"
                strokeWidth="5"
                fill="none"
                strokeDasharray="62"
                strokeDashoffset="15"
              />
            </svg>
            <Typography 
              variant="h6" 
              className="absolute text-xl font-bold" 
              sx={{ color: '#8D9092' }}
            >
              150k
            </Typography>
          </Box>
          <Stack spacing={1} mt={2} className="text-sm w-full px-4">
            <Box className="flex justify-between">
              <Typography color="black">إنجازات</Typography>
              <Typography sx={{ color: '#8D9092' }}>50%</Typography>
            </Box>
            <Box className="flex justify-between">
              <Typography color="black">تم الحل</Typography>
              <Typography sx={{ color: '#8D9092' }}>30%</Typography>
            </Box>
            <Box className="flex justify-between">
              <Typography color="black">جارٍ العمل</Typography>
              <Typography sx={{ color: '#8D9092' }}>20%</Typography>
            </Box>
            <Box className="flex justify-between">
              <Typography color="black">فئة جديدة</Typography>
              <Typography sx={{ color: '#8D9092' }}>10%</Typography>
            </Box>
          </Stack>
        </Box>

        {/* الشارت والفلتر */}
        <Box className="w-full md:w-3/4">
          {/* العنوان والفلتر */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '16px' }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: '#052F72',
                textAlign: 'right',
              }}
            >
              جهات المخالفات
            </Typography>
            <TimerIcon sx={{ color: '#052F72', ml: 1 }} />
          </div>

          {/* مخطط الأعمدة المكدسة مع المحور الرأسي */}
          <Box className="w-full h-64 flex px-4 overflow-x-auto relative">
            {/* المحور الرأسي */}
            <Box className="flex flex-col justify-between h-[200px] w-10 mr-2">
              {yAxisTicks.slice().reverse().map((tick) => (
                <Typography key={tick} variant="caption" sx={{ color: '#8D9092' }}>
                  {tick}
                </Typography>
              ))}
            </Box>

            {/* الأعمدة */}
            <Box className="flex items-end gap-2 flex-1">
              {data.map((round, index) => (
                <Box key={index} className="flex-1 flex flex-col items-center min-w-[40px]">
                  <Box className="w-1/3 flex flex-col" style={{ height: '200px' }}>
                    {/* جارٍ العمل */}
                    <Box 
                      className="w-full" 
                      style={{ 
                        height: `${(round.ongoing / maxValue) * 100}%`,
                        backgroundColor: '#F6F7F7',
                        borderRadius: "44px",
                        border: '5px solid #F6F7F7'
                      }}
                    />
                    {/* تم الحل */}
                    <Box 
                      className="w-full" 
                      style={{ 
                        height: `${(round.inProgress / maxValue) * 100}%`,
                        backgroundColor: '#052F72',
                        borderRadius: '44px' ,
                        border: '5px solid #052F72'
                      }}
                    />
                    {/* إنجازات */}
                    <Box 
                      className="w-full" 
                      style={{ 
                        height: `${(round.completed / maxValue) * 100}%`,
                        backgroundColor: '#AEB9E1',
                        borderRadius:  "44px",
                        border: '5px solid #AEB9E1'
                      }}
                    />
                  </Box>
                  <Typography variant="caption" className="mt-2" sx={{ color: '#8D9092' }}>{round.day}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* وسيلة إيضاح الألوان */}
          <Box className="flex justify-center mt-4 gap-6">
            <Box className="flex items-center">
              <Box className="w-4 h-4 bg-[#052F72] mr-2" />
              <Typography variant="caption" color="black">إنجازات</Typography>
            </Box>
            <Box className="flex items-center">
              <Box className="w-4 h-4 bg-[#AEB9E1] mr-2" />
              <Typography variant="caption" color="black">تم الحل</Typography>
            </Box>
            <Box className="flex items-center">
              <Box className="w-4 h-4 bg-[#F6F7F7] mr-2" />
              <Typography variant="caption" color="black">جارٍ العمل</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <RequestsTable data={data} /> */}
    </Box>
  );
}
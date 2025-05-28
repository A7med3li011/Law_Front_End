  
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box, Typography, Button, Card, CardContent, LinearProgress,
  Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import { PieChart, LineChart } from '@mui/x-charts';
import { AttachFile, Comment, InsertDriveFile } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { TextField, MenuItem } from '@mui/material';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState(dayjs());

  // Violations data state
  const [violations, setViolations] = useState([
    { 
      id: 1, 
      title: 'تأخير تسليم المهمة 1', 
      date: '2025-05-15',
      unit: 'وحدة 1', 
      penalty: 'تخصيص مهمة إضافية', 
      recurrenceAction: 'إيقاف مؤقت', 
      deadline: '2025-05-20', 
      fineAmount: '1000 ريال', 
      notes: 'تأخير غير مبرر', 
      description: 'تأخر في تسليم المهمة الأولى'
    },
    { 
      id: 2, 
      title: 'عدم اكتمال المهمة 2', 
      date: '2025-05-18',
      unit: 'وحدة 2', 
      penalty: 'إنذار كتابي', 
      recurrenceAction: 'خصم مالي', 
      deadline: '2025-05-23', 
      fineAmount: '500 ريال', 
      notes: 'عدم اكتمال المطلوب', 
      description: 'المهمة الثانية غير مكتملة'
    },
    { 
      id: 3, 
      title: 'جودة غير مقبولة للمهمة 3', 
      date: '2025-05-20',
      unit: 'وحدة 3', 
      penalty: 'إعادة العمل', 
      recurrenceAction: 'إيقاف نهائي', 
      deadline: '2025-05-25', 
      fineAmount: '2000 ريال', 
      notes: 'جودة دون المستوى', 
      description: 'جودة المهمة الثالثة غير مقبولة'
    },
  ]);

  // Project data
  const projectData = {
    id: id,
    name: `مشروع ${id}`,
    description: 'هذا وصف مفصل للمشروع...',
    status: 'جاري العمل',
    progress: 65,
    startDate: '2025-05-01',
    endDate: '2025-06-30',
    teamMembers: [
      { id: 1, name: 'محمد أحمد', role: 'مدير المشروع' },
      { id: 2, name: 'أحمد علي', role: 'مطور' },
    ],
  };

  // Chart data
  const pieChartData = [
    { id: 0, value: 35, label: 'مكتمل', color: '#2EB352' },
    { id: 1, value: 25, label: 'متأخر', color: '#052F72' },
    { id: 2, value: 40, label: 'جاري العمل', color: '#F7B21B' },
  ];

  const lineChartData = {
    xAxis: [{ 
      data: ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
      scaleType: 'band'
    }],
    series: [
      {
        data: [20, 30, 45, 60, 45, 30, 20],
        showMark: ({ index }) => index % 2 === 0,
        color: '#052F72',
        area: false,
      },
    ],
  };

  // Navigation to tasks page
  const handleAddTasks = () => {
    navigate(`/projects/${id}/tasks`);
  };

  return (
    <Box sx={{ padding: { xs: 1, sm: 2 }, direction: 'rtl' }}>
      {/* Header Section with Project Name and Add Tasks Button */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        justifyContent: 'space-between', 
        alignItems: { xs: 'flex-start', sm: 'center' }, 
        mb: { xs: 2, sm: 4 },
        gap: 2,
      }}>
        <Typography 
          variant='h5' 
          sx={{ 
            color: '#1B2128', 
            fontFamily: 'Tajawal', 
            fontWeight: 'bold',
            textAlign: 'right',
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }} 
        >
          {projectData.name}
        </Typography>

        <Button
          variant="contained"
           onClick={handleAddTasks}
          sx={{
            backgroundColor: '#052F72',
            color: 'white',
            fontFamily: 'Tajawal',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            height: { xs: 36, sm: 40 },
            px: { xs: 2, sm: 3 },
            '&:hover': {
              backgroundColor: '#04215A'
            }
          }}
        >
          اضافة مهام
        </Button>
      </Box>

      {/* Main Content and Sidebar Layout */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: { xs: 2, sm: 3 } 
      }}>
        {/* Main Content Section */}
        <Box sx={{ flex: { xs: 'auto', md: 2 }, width: '100%' }}>
          {/* Stats Cards Row */}
          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mb: { xs: 2, sm: 4 } }}>
            <Grid item xs={6} sm={4} md={3}>
              <StatsCard title="المهام المكتملة" value="24" />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <StatsCard title="المتبقي" value="12" />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <StatsCard title="الأعضاء" value={projectData.teamMembers.length} />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card sx={{ 
                height: '100%',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px'
              }}>
                <CardContent sx={{ textAlign: 'right' }}>
                  <Typography 
                    variant="subtitle2" 
                    color="text.secondary"
                    sx={{ fontFamily: 'Tajawal', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                  >
                    التقدم
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={projectData.progress} 
                        sx={{ 
                          height: 8, 
                          borderRadius: 4,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: '#052F72'
                          }
                        }}
                      />
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontFamily: 'Tajawal',
                        fontWeight: 'bold',
                        minWidth: 40,
                        fontSize: { xs: '0.75rem', sm: '0.875rem' }
                      }}
                    >
                      {projectData.progress}%
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Charts Row */}
          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <ChartContainer title="توزيع المهام">
                <Box sx={{ minWidth: { xs: 200, sm: 300 }, minHeight: 200, width: '100%' }}>
                  <PieChart
                    series={[{
                      data: pieChartData,
                      innerRadius: 50,
                      outerRadius: 100,
                      paddingAngle: 5,
                      cornerRadius: 5,
                    }]}
                    height={250}
                    sx={{ direction: 'rtl', width: '100%' }}
                    slotProps={{
                      legend: { direction: 'row', position: { vertical: 'bottom', horizontal: 'middle' } }
                    }}
                  />
                </Box>
              </ChartContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <ChartContainer title="تقدم المشروع">
                <Box sx={{ minWidth: { xs: 200, sm: 400 }, minHeight: 200, width: '100%' }}>
                  <LineChart
                    xAxis={lineChartData.xAxis}
                    series={lineChartData.series}
                    height={250}
                    margin={{ left: 70, right: 30 }}
                    sx={{ direction: 'rtl', width: '100%' }}
                  />
                </Box>
              </ChartContainer>
            </Grid>
          </Grid>

          {/* Violations Section */}
          <ViolationsSection violations={violations} />
        </Box>

        {/* Sidebar Section */}
        <Box sx={{ 
          flex: { xs: 'auto', md: 1 }, 
          display: 'flex', 
          flexDirection: 'column', 
          gap: { xs: 2, sm: 3 },
          width: '100%',
          maxWidth: { md: 400 }
        }}>
          <ActionButtons />
          <CalendarSection date={date} setDate={setDate} violations={violations} />
          <RecentActivitySection />
        </Box>
      </Box>
    </Box>
  );
}

// Reusable Stats Card Component
function StatsCard({ title, value }) {
  return (
    <Card sx={{ 
      height: '100%',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px'
    }}>
      <CardContent sx={{ textAlign: 'right' }}>
        <Typography 
          variant="subtitle2" 
          color="text.secondary"
          sx={{ fontFamily: 'Tajawal', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
        >
          {title}
        </Typography>
        <Typography 
          variant="h4" 
          sx={{ 
            fontFamily: 'Tajawal',
            fontWeight: 'bold',
            textAlign: 'left',
            mt: 1,
            fontSize: { xs: '1.5rem', sm: '2rem' }
          }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

// Reusable Chart Container Component
function ChartContainer({ title, children }) {
  return (
    <Paper sx={{ 
      p: { xs: 1, sm: 2 }, 
      height: { xs: 300, sm: 350, md: 400 }, 
      borderRadius: '12px',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          fontFamily: 'Tajawal',
          textAlign: 'right',
          mb: 2,
          fontSize: { xs: '1rem', sm: '1.25rem' }
        }}
      >
        {title}
      </Typography>
      <Box sx={{ flex: 1, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </Box>
    </Paper>
  );
}

// Violations Section Component
function ViolationsSection({ violations }) {
  return (
    <Paper sx={{ 
      p: { xs: 1, sm: 2 }, 
      mt: { xs: 2, sm: 3 }, 
      borderRadius: '12px', 
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' 
    }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        justifyContent: 'space-between', 
        alignItems: { xs: 'flex-start', sm: 'center' }, 
        mb: 2,
        gap: 2
      }}>
        <Typography 
          variant="h5" 
          sx={{ 
            fontFamily: 'JF Flat bold', 
            color: '#052F72',
            textAlign: 'right',
            fontSize: { xs: '1.25rem', sm: '1.5rem' }
          }}
        >
          المخالفات
        </Typography>
        <Button 
          sx={{ 
            backgroundColor: '#052F72', 
            color: 'white', 
            fontFamily: 'JF Flat', 
            fontWeight: 'bold',
            padding: { xs: '6px 12px', sm: '8px 16px' },
            borderRadius: '8px',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            '&:hover': {
              backgroundColor: '#04245A'
            }
          }}
        >
          تسجيل مخالفة
        </Button>
      </Box>
      
      <Box sx={{ overflowX: 'auto' }}>
        <TableContainer component={Paper} sx={{
          maxHeight: 300,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px', 
          border: '1px solid #AEB9E199'
        }}>
          <Table sx={{ minWidth: { xs: 800, sm: 650 } }} aria-label="violations table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontFamily: 'JF Flat', fontWeight: 'bold', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>ID</TableCell>
                <TableCell sx={{ fontFamily: 'JF Flat', fontWeight: 'bold', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>مخالفة</TableCell>
                <TableCell sx={{ fontFamily: 'JF Flat', fontWeight: 'bold', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>الوحدة</TableCell>
                <TableCell sx={{ fontFamily: 'JF Flat', fontWeight: 'bold', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>العقوبة</TableCell>
                <TableCell sx={{ fontFamily: 'JF Flat', fontWeight: 'bold', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>الإجراء في حال التكرار</TableCell>
                <TableCell sx={{ fontFamily: 'JF Flat', fontWeight: 'bold', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>المهلة</TableCell>
                <TableCell sx={{ fontFamily: 'JF Flat', fontWeight: 'bold', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>قيمة الغرامة</TableCell>
                <TableCell sx={{ fontFamily: 'JF Flat', fontWeight: 'bold', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>إيضاحات</TableCell>
                <TableCell sx={{ fontFamily: 'JF Flat', fontWeight: 'bold', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {violations.map((violation) => (
                <TableRow key={violation.id}>
                  <TableCell sx={{ fontFamily: 'Tajawal', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{violation.id}</TableCell>
                  <TableCell sx={{ fontFamily: 'Tajawal', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{violation.title}</TableCell>
                  <TableCell sx={{ fontFamily: 'Tajawal', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{violation.unit}</TableCell>
                  <TableCell sx={{ fontFamily: 'Tajawal', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{violation.penalty}</TableCell>
                  <TableCell sx={{ fontFamily: 'Tajawal', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{violation.recurrenceAction}</TableCell>
                  <TableCell sx={{ fontFamily: 'Tajawal', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{violation.deadline}</TableCell>
                  <TableCell sx={{ fontFamily: 'Tajawal', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{violation.fineAmount}</TableCell>
                  <TableCell sx={{ fontFamily: 'Tajawal', textAlign: 'right', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{violation.notes}</TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#05C168',
                        color: 'white',
                        fontFamily: 'Tajawal',
                        fontSize: { xs: '0.625rem', sm: '0.75rem' },
                        padding: { xs: '2px 6px', sm: '4px 8px' },
                        '&:hover': {
                          backgroundColor: '#04A557'
                        }
                      }}
                    >
                      تم الحل
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* New Project Data Section */}
      <Box sx={{ 
        mt: { xs: 2, sm: 3 },
        p: { xs: 1, sm: 3 },
        border: '1px solid #AEB9E1',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'JF Flat bold',
            color: '#052F72',
            textAlign: 'right',
            mb: 2,
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          بيانات المشروع
        </Typography>
        
        <TextField
          fullWidth
          label="الوصف"
          variant="outlined"
          multiline
          rows={3}
          sx={{ 
            mb: { xs: 2, sm: 3 },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#AEB9E1' },
              '&:hover fieldset': { borderColor: '#AEB9E1' },
            },
            direction: 'rtl',
            fontSize: { xs: '0.75rem', sm: '0.875rem' }
          }}
        />
        
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, sm: 2 },
          mb: { xs: 2, sm: 3 },
          direction: 'rtl'
        }}>
          <TextField
            fullWidth
            label="تاريخ البدء"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#AEB9E1' },
                '&:hover fieldset': { borderColor: '#AEB9E1' },
              },
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          />
          <TextField
            fullWidth
            label="تاريخ الانتهاء"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#AEB9E1' },
                '&:hover fieldset': { borderColor: '#AEB9E1' },
              },
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          />
        </Box>
        
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, sm: 2 },
          direction: 'rtl'
        }}>
          <TextField
            fullWidth
            label="اختر فريق العمل"
            select
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#AEB9E1' },
                '&:hover fieldset': { borderColor: '#AEB9E1' },
              },
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          >
            <MenuItem value="">اختر فريق العمل</MenuItem>
            <MenuItem value="team1">فريق 1</MenuItem>
            <MenuItem value="team2">فريق 2</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="اختر الهيئة"
            select
            sx={{ 
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#AEB9E1' },
                '&:hover fieldset': { borderColor: '#AEB9E1' },
              },
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          >
            <MenuItem value="">اختر الهيئة</MenuItem>
            <MenuItem value="authority1">الهيئة 1</MenuItem>
            <MenuItem value="authority2">الهيئة 2</MenuItem>
          </TextField>
        </Box>
      </Box>
    </Paper>
  );
}

// Action Buttons Component
function ActionButtons() {
  return (
    <Paper sx={{ 
      padding: { xs: 1, sm: 2 },
      borderRadius: '12px',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={{ xs: 1, sm: 2 }} 
        sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}
      >
        <Button 
          startIcon={<InsertDriveFile sx={{ marginRight: '8px' }} />}
          sx={{
            backgroundColor: '#ffffff33',
            color: '#1B2128',
            fontFamily: 'Tajawal',
            flex: 1,
            minWidth: 0,
            margin: { xs: '4px', sm: '7px' },
            padding: { xs: '6px 12px', sm: '8px 16px' },
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            '&:hover': {
              backgroundColor: '#AEB9E14D'
            }
          }}
        >
          تصدير
        </Button>
        <Button 
          startIcon={<AttachFile sx={{ marginRight: '8px' }} />}
          sx={{
            backgroundColor: '#ffffff33',
            color: '#1B2128',
            fontFamily: 'Tajawal',
            flex: 1,
            minWidth: 0,
            margin: { xs: '4px', sm: '7px' },
            padding: { xs: '6px 12px', sm: '8px 16px' },
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            '&:hover': {
              backgroundColor: '#AEB9E14D'
            }
          }}
        >
          المرفقات
        </Button>
        <Button 
          startIcon={<Comment sx={{ marginRight: '8px' }} />}
          sx={{
            backgroundColor: '#ffffff33',
            color: '#1B2128',
            fontFamily: 'Tajawal',
            flex: 1,
            minWidth: 0,
            margin: { xs: '4px', sm: '7px' },
            padding: { xs: '6px 12px', sm: '8px 16px' },
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            '&:hover': {
              backgroundColor: '#AEB9E14D'
            }
          }}
        >
          التعليقات
        </Button>
      </Stack>
    </Paper>
  );
}

// Calendar Section Component
function CalendarSection({ date, setDate, violations }) {
  return (
    <Paper sx={{ 
      p: { xs: 1, sm: 2 }, 
      borderRadius: '12px',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={date}
          onChange={(newDate) => setDate(newDate)}
          views={['month', 'day']}
          sx={{ 
            width: '100%',
            maxWidth: { xs: 300, sm: 350 },
            mx: 'auto',
            '& .MuiPickersCalendarHeader-root': {
              direction: 'rtl',
            },
            '& .MuiPickersCalendarHeader-label': {
              fontFamily: 'Tajawal',
              fontSize: { xs: '0.875rem', sm: '1rem' },
            },
            '& .MuiDayCalendar-weekDayLabel': {
              fontFamily: 'Tajawal',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
            }
          }}
        />
      </LocalizationProvider>

      <Typography 
        variant="h6" 
        sx={{ 
          fontFamily: 'Tajawal',
          fontWeight: 'bold',
          mb: 2,
          mt: 2,
          fontSize: { xs: '1rem', sm: '1.25rem' }
        }}
      >
        المخالفات
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2,
        borderRadius: '8px', 
        overflow: 'hidden' 
      }}>
        {violations.map((violation) => (
          <Box 
            key={violation.id} 
            sx={{
              borderRight: '4px solid #F7B21B',
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', sm: 'row' },
              p: { xs: 1, sm: 0 }
            }}
          >
            <Paper
              sx={{
                p: { xs: 1, sm: 2 },
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                flex: 1,
                width: '100%'
              }}
            >
              <Typography 
                sx={{ 
                  fontFamily: 'Tajawal', 
                  fontWeight: 'bold', 
                  textAlign: 'right',
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              >
                {violation.title}
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: 'Tajawal', 
                  color: 'text.secondary', 
                  fontSize: { xs: '0.75rem', sm: '0.8rem' }, 
                  textAlign: 'right'
                }}
              >
                {violation.description || 'وصف المخالفة'} 
              </Typography>
            </Paper>
            <Typography 
              sx={{ 
                fontFamily: 'Tajawal', 
                color: 'text.secondary', 
                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                minWidth: { xs: 'auto', sm: '100px' },
                textAlign: 'right'
              }}
            >
              {violation.date}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

// Recent Activity Component
function RecentActivitySection() {
  return (
    <Box sx={{
      p: { xs: 2, sm: 3 },
      borderRadius: '12px',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      width: '100%',
      maxWidth: { xs: '100%', md: 400 }
    }}>
      <Typography sx={{
        color: '#090909',
        fontFamily: 'JF Flat',
        fontWeight: 400,
        fontSize: { xs: '1.25rem', sm: '1.5rem' },
        textAlign: 'right',
        mb: 3
      }}>
        النشاط الأخير
      </Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        {[
          { activity: "تم تسجيل الدخول إلى النظام", time: "10:30 ص" },
          { activity: "تم تحديث البيانات الشخصية", time: "09:45 ص" },
          { activity: "تم إنشاء تقرير جديد", time: "08:15 ص" },
          { activity: "تم إرسال رسالة إلى الدعم الفني", time: "الأمس 05:20 م" }
        ].map((item, index, array) => (
          <Box key={index} sx={{
            display: 'flex',
            alignItems: 'flex-start',
            pb: index !== array.length - 1 ? 3 : 0,
            position: 'relative',
            minHeight: '60px'
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mr: { xs: 2, sm: 3 },
              width: '22px'
            }}>
              <Box sx={{
                width: '22px',
                height: '22px',
                borderRadius: '120px',
                backgroundColor: '#F7B21B',
                flexShrink: 0,
                zIndex: 2
              }} />
              
              {index !== array.length - 1 && (
                <Box sx={{
                  width: '2px',
                  backgroundColor: '#A098AE',
                  flexGrow: 1,
                  minHeight: '20px',
                  mt: '4px'
                }} />
              )}
            </Box>

            <Box sx={{
              textAlign: 'right',
              flexGrow: 1,
              mr: 2
            }}>
              <Typography sx={{
                fontFamily: 'JF Flat',
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                color: '#090909',
                mb: 0.5
              }}>
                {item.activity}
              </Typography>
              <Typography sx={{
                fontFamily: 'JF Flat',
                fontSize: { xs: '0.625rem', sm: '0.75rem' },
                color: '#A098AE'
              }}>
                {item.time}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

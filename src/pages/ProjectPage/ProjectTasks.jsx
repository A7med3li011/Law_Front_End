import { useParams } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  TextField, 
  IconButton, 
  Tabs, 
  Tab, 
  Card, 
  CardContent, 
  Divider, 
  useMediaQuery, 
  Button, 
  Chip, 
  InputAdornment 
} from '@mui/material';
import { 
  Search, 
  FilterList, 
  Add, 
  Comment, 
  AttachFile, 
  MoreVert, 
  Delete, 
  Edit, 
  Send 
} from '@mui/icons-material';
import { useState } from 'react';

export default function ProjectTasks() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(1);
  const [selectedTask, setSelectedTask] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  
  const tasks = {
    completed: [
      { 
        id: 1, 
        text: "إكمال التقرير الشهري", 
        company: "شركة التقنية", 
        date: "2023-05-15",
        priority: "high",
        status: "completed",
        owner: "أحمد محمد",
        responsible: "علي محمود",
        description: "هذا هو وصف المهمة الذي يشرح تفاصيل العمل المطلوب إنجازه",
        attachments: ["ملف1.pdf", "ملف2.docx"],
        comments: [
          { id: 1, text: "هذا تعليق تجريبي", author: "أحمد محمد", date: "2023-05-10" }
        ]
      }
    ],
    inProgress: [
      { 
        id: 2, 
        text: "تصميم الواجهة الجديدة", 
        company: "شركة التصميم", 
        date: "2023-05-17",
        priority: "high",
        status: "inProgress",
        owner: "خالد سمير",
        responsible: "مريم أحمد",
        description: "تصميم واجهة المستخدم حسب المواصفات المطلوبة",
        attachments: [],
        comments: []
      }
    ],
    delayed: [
      { 
        id: 3, 
        text: "تسليم المشروع النهائي", 
        company: "شركة التقنية", 
        date: "2023-05-10",
        priority: "critical",
        status: "delayed",
        owner: "أحمد محمد",
        responsible: "علي محمود",
        description: "تسليم جميع أجزاء المشروع للعميل",
        attachments: ["تقرير.pdf"],
        comments: []
      }
    ]
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const closeTaskDetails = () => {
    setSelectedTask(null);
  };

  return (
    <Box sx={{ 
      padding: 2, 
      direction: 'rtl',
      maxWidth: 1400,
      margin: '0 auto',
      display: 'flex',
      gap: 3,
      flexDirection: isSmallScreen ? 'column' : 'row'
    }}>
      {/* الجزء الرئيسي */}
      <Box sx={{ 
        flex: 1,
        width: '100%'
      }}>
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: 4
        }}>
          <Typography variant="h4" sx={{ 
            color: '#1B2128', 
            fontWeight: 'bold',
            fontSize: '1.8rem'
          }}>
            مهام مشروع {id}
          </Typography>
          
          <Button
            variant="outlined"
            startIcon={<Add />}
            sx={{
              border: '0.6px solid #052F72',
              borderRadius: '8px',
              color: '#ffffff',
              backgroundColor: '#052F72',
              fontSize: '1rem',
              px: 3,
              py: 1,
              '&:hover': {
                backgroundColor: '#052F72',
              }
            }}
          >
            إضافة مهمة
          </Button>
        </Box>

        {/* Search and Filter */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'start', 
          gap: 2, 
          mb: 3,
          flexDirection: isSmallScreen ? 'column' : 'row' 
        }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton sx={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px'
            }}>
              <FilterList fontSize="small" />
            </IconButton>
            <TextField
              placeholder="بحث..."
              size="small"
              InputProps={{ 
                startAdornment: <Search />,
                sx: { borderRadius: '8px' } 
              }}
              sx={{ 
                width: isSmallScreen ? '100%' : 350,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px'
                }
              }}
            />
          </Box>
        </Box>

        {/* Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Tabs 
            value={activeTab} 
            onChange={(e, val) => setActiveTab(val)} 
            sx={{ 
              mb: 3,
              '& .MuiTab-root': {
                borderRadius: '8px 8px 0 0'
              }
            }}
          >
            <Tab label="القائمة" />
            <Tab label="اللوحة" />
          </Tabs>
        </Box>

        {/* Columns */}
        {activeTab === 1 && (
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            overflowX: 'auto',
            pb: 2,
            flexDirection: isSmallScreen ? 'column' : 'row',
            justifyContent: 'center'
          }}>
            {/* Completed Column */}
            <Box sx={{ 
              minWidth: 300,
              maxWidth: 350,
              backgroundColor: '#E4E4E4',
              p: 2,
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mb: 2,
                p: 1,
                width: '100%'
              }}>
                <Typography variant="subtitle1" sx={{ color: '#049949' }}>
                  مكتمل
                </Typography>
                <IconButton size="small" sx={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px'
                }}>
                  <Add fontSize="small" />
                </IconButton>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                {tasks.completed.map(task => (
                  <TaskCard key={task.id} task={task} onClick={() => handleTaskClick(task)} />
                ))}
              </Box>
            </Box>

            {/* In Progress Column */}
            <Box sx={{ 
              minWidth: 300,
              maxWidth: 350,
              backgroundColor: '#E4E4E4',
              p: 2,
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mb: 2,
                p: 1,
                width: '100%'
              }}>
                <Typography variant="subtitle1" sx={{ color: '#F7B21B' }}>
                  جاري العمل
                </Typography>
                <IconButton size="small" sx={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px'
                }}>
                  <Add fontSize="small" />
                </IconButton>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                {tasks.inProgress.map(task => (
                  <TaskCard key={task.id} task={task} onClick={() => handleTaskClick(task)} />
                ))}
              </Box>
            </Box>

            {/* Delayed Column */}
            <Box sx={{ 
              minWidth: 300,
              maxWidth: 350,
              backgroundColor: '#E4E4E4',
              p: 2,
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                mb: 2,
                p: 1,
                width: '100%'
              }}>
                <Typography variant="subtitle1" sx={{ color: '#E32628' }}>
                  متأخر
                </Typography>
                <IconButton size="small" sx={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px'
                }}>
                  <Add fontSize="small" />
                </IconButton>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                {tasks.delayed.map(task => (
                  <TaskCard key={task.id} task={task} onClick={() => handleTaskClick(task)} />
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      {/* Task Details Popup */}
      {selectedTask && (
        <Box sx={{ 
          color: '#1B2128',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
          p: 3,
          width: isSmallScreen ? '90%' : '500px',
          maxHeight: '90vh',
          overflowY: 'auto',
          zIndex: 1000,
          direction: 'rtl'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {selectedTask.text}
            </Typography>
            <IconButton onClick={closeTaskDetails}>
              <MoreVert />
            </IconButton>
          </Box>
          
          <Divider sx={{ my: 2, backgroundColor: '#E4E4E4' }} />
          
          {/* Task Details */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {selectedTask.description}
            </Typography>
            
            {/* Priority */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body2">الأولوية</Typography>
              <Chip 
                label={selectedTask.priority === 'high' ? 'عالية' : 
                       selectedTask.priority === 'critical' ? 'حرجة' : 'متوسطة'} 
                sx={{ 
                  backgroundColor: selectedTask.priority === 'high' ? '#FFEBEE' : 
                                  selectedTask.priority === 'critical' ? '#F44336' : '#FFF8E1',
                  color: selectedTask.priority === 'high' ? '#D32F2F' : 
                       selectedTask.priority === 'critical' ? 'white' : '#FF8F00',
                  fontWeight: 'bold'
                }}
              />
            </Box>
            
            {/* Status */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body2">الحالة</Typography>
              <Chip 
                label={selectedTask.status === 'completed' ? 'مكتمل' : 
                      selectedTask.status === 'inProgress' ? 'جاري العمل' : 'متأخر'} 
                sx={{ 
                  backgroundColor: selectedTask.status === 'completed' ? '#E8F5E9' : 
                                  selectedTask.status === 'inProgress' ? '#FFF8E1' : '#FFEBEE',
                  color: selectedTask.status === 'completed' ? '#2E7D32' : 
                       selectedTask.status === 'inProgress' ? '#F57F17' : '#C62828',
                  fontWeight: 'bold'
                }}
              />
            </Box>
            
            {/* Owner */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body2">المالك</Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{selectedTask.owner}</Typography>
            </Box>
            
            {/* Responsible */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body2">المسؤول</Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{selectedTask.responsible}</Typography>
            </Box>
            
            {/* Due Date */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body2">تاريخ الاستحقاق</Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{selectedTask.date}</Typography>
            </Box>
          </Box>
          
          <Divider sx={{ my: 2, backgroundColor: '#E4E4E4' }} />
          
          {/* Attachments */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'bold' }}>المرفقات</Typography>
            
            {selectedTask.attachments.length > 0 ? (
              selectedTask.attachments.map((file, index) => (
                <Box key={index} sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  mb: 1,
                  p: 1,
                  backgroundColor: '#F5F5F5',
                  borderRadius: '4px'
                }}>
                  <AttachFile fontSize="small" />
                  <Typography variant="body2">{file}</Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>لا توجد مرفقات</Typography>
            )}
            
            <Button
              variant="outlined"
              startIcon={<Add />}
              sx={{
                mt: 2,
                border: '0.6px solid #052F72',
                borderRadius: '8px',
                color: '#ffffff',
                backgroundColor: '#052F72',
                fontSize: '0.9rem',
                px: 2,
                py: 0.5,
                '&:hover': {
                  backgroundColor: '#052F72',
                }
              }}
            >
              إضافة مرفق
            </Button>
          </Box>
          
          <Divider sx={{ my: 2, backgroundColor: '#E4E4E4' }} />
          
          {/* Description */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>الوصف</Typography>
            <TextField
              multiline
              rows={4}
              fullWidth
              value={selectedTask.description}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#F3F4F6'
                }
              }}
            />
          </Box>
          
          <Divider sx={{ my: 2, backgroundColor: '#E4E4E4' }} />
          
          {/* Comments */}
          <Box>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 'bold' }}>التعليقات</Typography>
            
            {selectedTask.comments.length > 0 ? (
              selectedTask.comments.map(comment => (
                <Box key={comment.id} sx={{ mb: 2, p: 2, backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{comment.author}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>{comment.date}</Typography>
                  </Box>
                  <Typography variant="body2">{comment.text}</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 1 }}>
                    <Button 
                      startIcon={<Edit />} 
                      sx={{ 
                        color: '#05C168', 
                        textTransform: 'none',
                        fontSize: '0.8rem',
                        p: 0,
                        minWidth: 0
                      }}
                    >
                      تعديل
                    </Button>
                    <Button 
                      startIcon={<Delete />} 
                      sx={{ 
                        color: '#E32628', 
                        textTransform: 'none',
                        fontSize: '0.8rem',
                        p: 0,
                        minWidth: 0
                      }}
                    >
                      حذف
                    </Button>
                  </Box>
                </Box>
              ))
            ) : (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>لا توجد تعليقات</Typography>
            )}
            
            <TextField
              placeholder="أضف تعليق..."
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <Send />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: '8px',
                  backgroundColor: '#F3F4F6'
                }
              }}
              sx={{ mt: 2 }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

// Task Card Component
function TaskCard({ task, onClick }) {
  return (
    <Card 
      sx={{ 
        width: '100%',
        maxWidth: 300,
        borderRadius: '8px',
        boxShadow: 'none',
        border: '1px solid #ddd',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
        }
      }}
      onClick={onClick}
    >
      <CardContent>
        <Typography sx={{ fontSize: '1.05rem' }}>{task.text}</Typography>
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
          {task.company}
        </Typography>
        <Divider sx={{ my: 1, backgroundColor: '#E4E4E4' }} />
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}>
          <Typography variant="caption" sx={{ fontSize: '0.95rem' }}>
            {task.date}
          </Typography>
          <Box>
            <IconButton size="small" sx={{ borderRadius: '4px' }}>
              <Comment fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ borderRadius: '4px' }}>
              <AttachFile fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
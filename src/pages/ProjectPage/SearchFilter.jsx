import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Divider, Modal, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';

export default function ProjectsHeader() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      {/* الخط العلوي */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 2 
      }}>
        <Button
          variant="contained"
          // startIcon={<AddIcon />}
          onClick={handleOpen}
          sx={{
            backgroundColor: '#052F72',
            color: 'white',
            fontFamily: 'Tajawal',
            fontSize: { xs: '14px', sm: '16px' },
            height: { xs: 40, sm: 36 },
            whiteSpace: 'nowrap',
            px: { xs: 2, sm: 3 },
            '&:hover': {
              backgroundColor: '#04215A'
            }
          }}
        >
          اضافة مشروع
        </Button>

           <Typography 
          variant="h5" 
          sx={{ 
            fontFamily: 'Tajawal', 
            fontWeight: 'bold',
            color: '#052F72'
          }}
        >
          المشروعات
        </Typography>
      </Box>
      
      {/* الخط الأزرق */}
      <Divider sx={{ backgroundColor: '#052F72', height: 2, mb: 3 }} />
      
      {/* مربع البحث والفلترة */}
      <Box sx={{ 
        display: 'flex', 
        alignItems:'start',
        flexDirection: { xs: 'column', sm: 'row' }, 
        gap: { xs: 2, sm: 2 }, 
        alignItems: { xs: 'stretch', sm: 'center' }, 
        mb: { xs: 2, sm: 3 },
        justifyContent: 'flex-end'
      }}>
        <TextField
          placeholder="ابحث هنا..."
          variant="outlined"
          size="small"
          sx={{
            flexGrow: 1,
            maxWidth: '300px',
            '& .MuiInputBase-root': {
              fontFamily: 'Tajawal',
              fontSize: { xs: '14px', sm: '16px' },
              height: { xs: 40, sm: 36 },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ccc'
            }
          }}
        />
        
           <Button
          variant="contained"
          startIcon={<FilterListIcon />}
          sx={{
            backgroundColor: '#ffffff',
            
            color: '#052F72',
            border: '2px solid #052F72',
            fontFamily: 'Tajawal',
            fontSize: { xs: '14px', sm: '16px' },
            height: { xs: 40, sm: 36 },
            whiteSpace: 'nowrap',
            px: { xs: 2, sm: 3 },
            '&:hover': {
              // backgroundColor: '#04215A'
            }
          }}
        >
          فلترة

        </Button>
      </Box>
      
      {/* Modal لإضافة مشروع جديد */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Tajawal'
        }}
      >
        <Box sx={{
          backgroundColor: 'white',
          p: 3,
          borderRadius: 2,
          width: { xs: '90%', sm: '60%', md: '40%' },
          maxWidth: '500px'
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
            إنشاء مشروع جديد
          </Typography>
          
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
       
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="اسم المشروع"
                variant="outlined"
                fullWidth
                size="small"
              />
              
              <FormControl fullWidth size="small">
                <InputLabel>اختر الفرع</InputLabel>
                <Select label="اختر الفرع">
                  <MenuItem value="">اختر الفرع</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel>اختر الهيئة التابع لها</InputLabel>
                <Select label="اختر الهيئة التابع لها">
                  <MenuItem value="">اختر الهيئة</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth size="small">
                <InputLabel>اختر أعضاء الفريق</InputLabel>
                <Select label="اختر أعضاء الفريق">
                  <MenuItem value="">اختر الأعضاء</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
           
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="تاريخ البداية"
                variant="outlined"
                fullWidth
                size="small"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
              
              <TextField
                label="تاريخ الانتهاء"
                variant="outlined"
                fullWidth
                size="small"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            
            {/* وصف المشروع */}
            <TextField
              label="وصف المشروع"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              size="small"
            />
            
            {/* الأزرار */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Button 
                variant="outlined" 
                onClick={handleClose}
                sx={{ fontFamily: 'Tajawal' }}
              >
                إعادة تعيين
              </Button>
              
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#052F72', 
                  color: 'white',
                  fontFamily: 'Tajawal',
                  '&:hover': {
                    backgroundColor: '#04215A'
                  }
                }}
              >
                حفظ
              </Button>
            </Box>
          </Box>
          
          <Typography sx={{ mt: 1, textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
            تعرف على المزيد حول المشاريع من خلال مشاهدة الفردية التعليمية.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
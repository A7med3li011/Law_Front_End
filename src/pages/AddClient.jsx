import { Box, Button, Typography, TextField, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Checkbox, FormGroup } from '@mui/material';

export default function AddClient() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#04275D',
            color: 'white',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '138px',
            marginLeft: '20px',
            height: '44px',
            '&:hover': {
              backgroundColor: '#04275D',
            },
          }}
        >
          حفظ
        </Button>
        <Typography
          sx={{
            color: 'black',
            fontSize: '20px',
            fontWeight: '700',
            marginTop: '10px',
            textAlign: 'right',
          }}
        >
          اضافة عضو جديد
        </Typography>
      </Box>
      <Box sx={{ width: '100%', height: '3px', backgroundColor: '#E4E4E4', margin: '10px 0' }} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          padding: '20px',
          gap: { xs: 2, md: 0 },
        }}
      >
        {/* Right Side Inputs */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: { xs: '100%', md: '48%' } }}>
          <TextField
            label="الاسم"
            fullWidth
            variant="outlined"
          />
          <TextField
            label="العنوان"
            fullWidth
            variant="outlined"
          />
          <TextField
            label="رقم الهاتف"
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <Select value="+966" sx={{ minWidth: 80, border: 'none', '& fieldset': { border: 'none' } }}>
                  <MenuItem value="+966">+966</MenuItem>
                </Select>
              ),
            }}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel>الوظيفة</InputLabel>
            <Select label="الوظيفة">
              <MenuItem value="SEO">SEO</MenuItem>
              {/* Add more job titles as needed */}
            </Select>
          </FormControl>
        </Box>

        {/* Left Side Inputs */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: { xs: '100%', md: '48%' } }}>
          <TextField
            label="البريد الإلكتروني"
            fullWidth
            variant="outlined"
          />
          <TextField
            label="تاريخ الميلاد"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="تاريخ الانضمام"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel>الفرع</InputLabel>
            <Select label="الفرع">
              <MenuItem value="branch1">الفرع 1</MenuItem>
              {/* Add more branches as needed */}
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Permissions Section - Aligned to the right */}
      <Box sx={{ padding: '0 20px 20px', display: 'flex', justifyContent: 'flex-end' }}>
        <Box>
          <Typography sx={{ fontWeight: 'bold', marginBottom: 1, color: "#04275D", fontSize: '20px', textAlign: 'right' }}>
            الصلاحيات
          </Typography>
          <FormGroup sx={{ display: 'flex', gap: 2, color: "#344054" }}>
            <FormControlLabel
              label="قراءة البيانات"
              control={<Checkbox />}
              sx={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end', marginRight: 0 }}
            />
            <FormControlLabel
              label="إضافة البيانات"
              control={<Checkbox />}
              sx={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end', marginRight: 0 }}
            />
            <FormControlLabel
              label="تعديل البيانات"
              control={<Checkbox />}
              sx={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end', marginRight: 0 }}
            />
          </FormGroup>
        </Box>
      </Box>
    </Box>
  );
}
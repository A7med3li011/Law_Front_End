import { Box, Button, Typography, Link } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import img from '../utilities/assets/istockphoto-1423336300-612x612.jpg'
// TeamMemberCard component
function TeamMemberCard({ name, role, email, image }) {
  return (
    <Box
      sx={{
        width: '236.3578643798828px',
        height: '297px',
        borderRadius: '12px',
        border: '1px solid #AEB9E1',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        component="img"
        src={img}
        alt="Team Member"
        sx={{
          width: '100%',
          height: '148.5px',
          borderRadius: '2px',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          flexGrow: 1,
        }}
      >
        <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold' }}>
          Member Name
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
          {role}
        </Typography>
        <Link
          href={`mailto:${email}`}
          sx={{
            fontSize: '14px',
            color: '#1E88E5',
            textDecoration: 'underline',
            marginTop: 'auto',
          }}
        >
          Contact via Gmail
        </Link>
      </Box>
    </Box>
  );
}

// TeamWork component
export default function TeamWork() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Placeholder data (same as original)
  const placeholderData = [
    {
      id: 1,
      name: 'Ahmed Osama',
      role: 'Team Role',
      email: 'example@gmail.com',
      image:{img} , 
    },
    {
      id: 2,
      name: 'Ahmed Osama',
      role: 'Team Role',
      email: 'example@gmail.com',
      image:{img} ,
    },
{
      id: 3,
      name: 'Ahmed Osama',
      role: 'Team Role',
      email: 'example@gmail.com',
      image:{img} ,
    },
    {
      id: 4,
      name: 'Ahmed Osama',
      role: 'Team Role',
      email: 'example@gmail.com',
      image:{img} ,
    },
    {
      id: 5,
      name: 'Ahmed Osama',
      role: 'Team Role',
      email: 'example@gmail.com',
      image: {img},
    },
    {
      id: 6,
      name: 'Ahmed Osama',
      role: 'Team Role',
      email: 'example@gmail.com',
      image: {img},
    },
  ];

  // Simulate API fetch with useEffect
  useEffect(() => {
    async function fetchMembers() {
      try {
        // Replace this with your actual API endpoint
        // const response = await fetch('https://your-api-endpoint/members');
        // const data = await response.json();
        // setMembers(data);

        // For now, use placeholder data
        setTimeout(() => {
          setMembers(placeholderData);
          setLoading(false);
        }, 1000); // Simulate network delay
      } catch (err) {
        setError('فشل تحميل البيانات');
        setLoading(false);
      }
    }
    fetchMembers();
  }, []);

  return (
    <Box>
      {/* Title Section (same as original) */}
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
          endIcon={<AddIcon />}
        >
          إضافة عضو
        </Button>
        <Typography
          sx={{
            color: 'black',
            fontSize: '28px',
            fontWeight: '700',
            marginTop: '-20px',
            textAlign: 'right',
          }}
        >
          فرق العمل
        </Typography>
      </Box>
      {/* Horizontal Line */}
      <Box sx={{ width: '100%', height: '3px', backgroundColor: '#E4E4E4', margin: '10px 0' }} />

      {/* Cards Section */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          padding: '20px',
          '@media (max-width: 900px)': {
            justifyContent: 'space-around',
          },
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        {loading ? (
          <Typography>جارٍ التحميل...</Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          members.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              email={member.email}
              image={member.image}
            />
          ))
        )}
      </Box>
    </Box>
  );
}
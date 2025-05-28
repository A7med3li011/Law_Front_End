import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchFilter from './SearchFilter';
import FilterTabs from './FilterTabs';
import ProjectCard from './ProjectCard';
import img from '../../utilities/assets/img.jpg';

export default function FilterSearchPage() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('الكل');
  const [projects, setProjects] = useState([]);
  const filters = ['الكل', 'جاري العمل', 'جاهز', 'متأخر', 'معلق'];

  // fake data
  const mockData = [
    {
      id: 1,
      image: img,
      name: 'مشروع تطوير النظام',
      status: 'جاري العمل',
      members: [
        { id: 1, avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: 2, avatar: 'https://i.pravatar.cc/150?img=2' },
      ],
      date: '2025-05-20',
      progress: 65
    },
    {
      id: 2,
      image: img,
      name: 'مشروع التصميم الجديد',
      status: 'جاهز',
      members: [
        { id: 3, avatar: 'https://i.pravatar.cc/150?img=3' },
        { id: 4, avatar: 'https://i.pravatar.cc/150?img=4' },
      ],
      date: '2025-05-19',
      progress: 100
    },
    {
      id: 3,
      image: img,
      name: 'مشروع التسويق',
      status: 'متأخر',
      members: [
        { id: 5, avatar: 'https://i.pravatar.cc/150?img=5' },
      ],
      date: '2025-05-18',
      progress: 30
    },
    {
      id: 4,
      image: img,
      name: 'مشروع التدريب',
      status: 'معلق',
      members: [
        { id: 6, avatar: 'https://i.pravatar.cc/150?img=6' },
      ],
      date: '2025-05-17',
      progress: 0
    },
    {
      id: 5,
      image: img,
      name: 'مشروع التطوير',
      status: 'جاري العمل',
      members: [
        { id: 7, avatar: 'https://i.pravatar.cc/150?img=7' },
      ],
      date: '2025-05-16',
      progress: 45
    },
    {
      id: 6,
      image: img,
      name: 'مشروع الاختبار',
      status: 'جاهز',
      members: [
        { id: 8, avatar: 'https://i.pravatar.cc/150?img=8' },
      ],
      date: '2025-05-15',
      progress: 100
    }
  ];

  // fetch data
  useEffect(() => {
    setProjects(mockData);
  }, []);

  // select filter
  const filteredProjects = selectedFilter === 'الكل' 
    ? projects 
    : projects.filter(project => project.status === selectedFilter);

  // عند النقر على فلتر
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  // عند النقر على مشروع
  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <Box sx={{ 
      maxWidth: { xs: '100%', sm: 600, md: 900, lg: 1200 }, 
      margin: '0 auto', 
      p: { xs: 2, sm: 3 }, 
      width: '100%', 
      boxSizing: 'border-box',
      fontFamily: 'Tajawal, sans-serif'
    }}>
      <SearchFilter />
      <FilterTabs 
        filters={filters} 
        selectedFilter={selectedFilter} 
        onFilterClick={handleFilterClick} 
      />
      
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Box 
              onClick={() => handleProjectClick(project.id)}
              sx={{ 
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease'
                }
              }}
            >
              <ProjectCard project={project} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
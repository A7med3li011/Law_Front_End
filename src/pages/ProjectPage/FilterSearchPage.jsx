import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import SearchFilter from './SearchFilter';
import FilterTabs from './FilterTabs';
import ProjectCard from './ProjectCard';
import img from '../../utilities/assets/img.jpg';

export default function FilterSearchPage() {
  const [selectedFilter, setSelectedFilter] = useState('الكل');
  const [projects, setProjects] = useState([]);
  const filters = ['الكل', 'جاري العمل', 'جاهز', 'متأخر', 'معلق'];

  // Mock data (to be replaced with API data)
  const mockData = [
    {
      id: 1,
      image: img,
      name: 'مشروع 1',
      members: [
        { id: 1, avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: 2, avatar: 'https://i.pravatar.cc/150?img=2' },
      ],
      date: '2025-05-20',
    },
    {
      id: 2,
      image: img,
      name: 'مشروع 2',
      members: [
        { id: 3, avatar: 'https://i.pravatar.cc/150?img=3' },
        { id: 4, avatar: 'https://i.pravatar.cc/150?img=4' },
        { id: 5, avatar: 'https://i.pravatar.cc/150?img=5' },
      ],
      date: '2025-05-19',
    },
    {
      id: 3,
      image: img,
      name: 'مشروع 3',
      members: [
        { id: 6, avatar: 'https://i.pravatar.cc/150?img=6' },
      ],
      date: '2025-05-18',
    },
    {
      id: 4,
      image: img,
      name: 'مشروع 4',
      members: [
        { id: 7, avatar: 'https://i.pravatar.cc/150?img=7' },
      ],
      date: '2025-05-18',
    },
    {
      id: 5,
      image: img,
      name: 'مشروع 5',
      members: [
        { id: 8, avatar: 'https://i.pravatar.cc/150?img=8' },
      ],
      date: '2025-05-18',
    },
    {
      id: 6,
      image: img,
      name: 'مشروع 6',
      members: [
        { id: 9, avatar: 'https://i.pravatar.cc/150?img=9' },
      ],
      date: '2025-05-18',
    },
  ];

  // Fetch data from an endpoint (replace with your endpoint)
  useEffect(() => {
    // Simulate API call with mock data
    setProjects(mockData);

    // Uncomment and replace with your endpoint
    /*
    fetch('YOUR_ENDPOINT_URL')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching data:', error));
    */
  }, []);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    // Optionally filter projects based on selectedFilter
    // Example: setProjects(mockData.filter(project => project.status === filter));
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
      <FilterTabs filters={filters} selectedFilter={selectedFilter} onFilterClick={handleFilterClick} />
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function FilterTabs({ filters, selectedFilter, onFilterClick }) {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: { xs: 1, sm: 2 }, 
      justifyContent: { xs: 'flex-start', sm: 'center' }, 
      mb: 3 
    }}>
      {filters.map((filter) => (
        <Box
          key={filter}
          onClick={() => onFilterClick(filter)}
          sx={{
            cursor: 'pointer',
            px: { xs: 1, sm: 2 },
            py: 0.5,
            position: 'relative',
            transition: 'all 0.3s ease'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Tajawal',
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              fontWeight: 500,
              color: selectedFilter === filter ? '#F7B21B' : '#000',
              textAlign: 'center'
            }}
          >
            {filter}
          </Typography>
          {selectedFilter === filter && (
            <Box
              sx={{
                position: 'absolute',
                bottom: -2,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: '#F7B21B'
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
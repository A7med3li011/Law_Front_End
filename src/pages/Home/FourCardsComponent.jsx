
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
const FourCardsComponent = ({
  cards = [
    { id: 1200, text: 'اجمالي الغرامات', bgColor: 'bg-blue-50', textColor: '#495180' },
    { id: 12, text: 'اجمالي المخالفات', bgColor: 'bg-pink-50', textColor: '#495180' },
    { id: 756, text: 'اجمالي المهام', bgColor: 'bg-green-50', textColor: '#495180' },
    { id: 756, text: 'اجمالي المشاريع', textColor: '#495180' }
  ],
}) => {
  return (
    <div className="flex flex-wrap justify-center p-5 rtl font-sans">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`
            w-[250px] h-[100px] rounded-lg border border-gray-300
            relative p-2.5 box-border m-2.5
            ${card.bgColor || 'bg-gray-50'}
          `}
        >
          <div 
            className="absolute top-2.5 right-2.5 font-bold" 
            style={{ color: card.textColor || '#495180' }} 
          >
            {card.text}
          </div>
          <div className="absolute bottom-2.5 left-2.5 text-lg text-gray-600">
            {card.id}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourCardsComponent;
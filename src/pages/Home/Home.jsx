import React from 'react';
import FourCardsComponent from '../Home/FourCardsComponent';
import RequestsTable from './RequestsTable';
import ViolationsChart from './ViolationsChart';
//----------------------------------------------
export default function Home() {
  return (
    <>       
        <FourCardsComponent /> 
       <ViolationsChart /> 
      <RequestsTable />
    </>
  );
}
import React, { useState,useEffect } from 'react'
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

import Alldatacovid from '../components/Alldatacovid'

  
const queryClient = new QueryClient()


 const ChartWrapper = () => {
    return(
    <QueryClientProvider client={queryClient}>
    <Alldatacovid />
    </QueryClientProvider>

    )
 }

const Chartmap : React.FC = () => {
   
  return (

    <div className='w-[100%] flex justify-center flex-row'>
   
   </div>
 
  )
}

export default ChartWrapper;
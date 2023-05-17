import Sidebar from './sidebar'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react';
import { Doughnut} from 'react-chartjs-2'
import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ArcElement,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js'

// register chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ArcElement,
    Tooltip,
    Filler,
    Legend
)

// type of chartdata
type ChartData = {
    labels: string[];
     datasets: {
     label: string;
     data: any[];
     backgroundColor: string[];
   }[];
 };


function Alldatacovid() {
    const [chartData, setChartData] = useState<ChartData | null>(null)
    let label: string[] = [];
    let dataset: any[] = [];

    // fetching wordldwide covid data
    const { status,isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://disease.sh/v3/covid-19/all').then(
            (res) => res.json(),
          ),
      })


      if(data){
        let dataKeyArray = Object.keys(data);
        dataKeyArray.slice(1,10).map((item: string, i: number) => {
        label.push(item);
        dataset.push(data[item]);
        });
      }

      useEffect(() => {
        // checking status and calling setter function (to store the data in state)
        if (status === 'success') {
                setChartData({
                labels: label,
                datasets: [
                {
                    label: 'Worldwide',
                    data: dataset,
                    backgroundColor: [
                        '#2271d0',
                        '#ffbb11',
                        '#ffaa11',
                        '#ffaaf1',
                        '#3a7111',
                        '#ecf0f1',
                        '#FF0000',
                        '#f3ba2f',
                        '#2a11d0',
                        '#1a71d0',
                     ],
                  },
                ],
             });        }
      }, [status, data]); 
    

  return (

    
    <div className='w-[100%] flex justify-center flex-col lg:flex-row'>
    <div className='left-section w-[300px] hidden lg:block'><Sidebar /></div>
        <div className='bg-indigo-100 flex justify-start p-3 lg:hidden'>
            <Link to='/' className='text-indigo-700 cursor-pointer'>Contact</Link>
            <Link to='/chart-map' className='text-indigo-700 ml-5 cursor-pointer'>Chart and Map</Link>
        </div>
       <div className='right-section flex-grow-1 w-[100%] bg-indigo-50 h-screen overflow-y-scroll'>
           <div className='flex flex-col justify-between px-5'>
           <div className='flex justify-left flex-row mt-5 gap-x-3'>
                <Link to='/chart-map' className='py-2 px-8 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded'>Map</Link>
                <Link to='/chart' className='py-2 px-8 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded'>Chart</Link>
                <Link to='/graph' className='py-2 px-8 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded'>Graph</Link>
            </div>
            <h2 className='my-10 text-3xl font-bold'>World wide covid data of cases</h2>
           <div className='map mb-10 w-full sm:w-[60%] lg:w-[40%] mx-auto dough'>
           { chartData && <Doughnut data={chartData} className='h-80' />} 
            </div>
           </div>
       </div>
   </div>
  )
}

export default Alldatacovid;
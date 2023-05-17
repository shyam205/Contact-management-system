import Sidebar from './sidebar'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
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

// register chart js

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

// type of graphdata

type GraphData = {
    labels: string[];
     datasets: {
     fill:boolean,
     label: string;
     data: any[];
     borderColor:string,
     pointBackgroundColor:string,
     pointRadius:number,
     borderWidth:any,
     backgroundColor: string;
   }[];
 };

 export const options = {
    responsive: true,
    tension:0.4
  };

function Alldatacovid() {
    const [graphData, setGraphData] = useState<GraphData | null>(null)
    let label: string[] = [];
    let dataset: any[] = [];
    let dataset2: any[] = [];
    let dataset3: any[] = [];

    // fetching datewise covid data 
    const { status,isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then(
            (res) => res.json(),
          ),
      })

      if(data){
        let dataKeyArray = Object.entries(data.cases);
        dataKeyArray.map((item: any, i: number) => {
        label.push(item[0]);
        dataset.push(item[1]);
        });
        
        Object.entries(data.deaths).map((item: any, i: number) => {
            dataset2.push(item[1]);
            });

            Object.entries(data.recovered).map((item: any, i: number) => {
                dataset3.push(item[1]);
                });
      }

      

      useEffect(() => {

        // checking status and calling setter function (to store data in state)
        if(status === 'success'){
        setGraphData({
                labels: label,
                datasets: [
                    {
                        fill: true,
                        label: 'World wide covid data of cases',
                        data: dataset,
                        borderColor:'#d3a2ef',
                        pointBackgroundColor:'#d3a2ef',
                        pointRadius:1,
                        borderWidth:'1',
                        backgroundColor:'#e9d0f7',
                    },
                    {
                        fill: true,
                        label: 'World wide covid data of death cases',
                        data: dataset2,
                        borderColor:'#1c1d20',
                        pointBackgroundColor:'#484549',
                        pointRadius:1,
                        borderWidth:'1',
                        backgroundColor:'#5f5963',
                    },
                    {
                        fill: true,
                        label: 'World wide covid data of recover cases',
                        data: dataset3,
                        borderColor:'#19d332',
                        pointBackgroundColor:'#0cc30f',
                        pointRadius:1,
                        borderWidth:'1',
                        backgroundColor:'#5cdb51',
                    },
            ],
            })
        }
      },[status, data])
    
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
           <div className='map mb-10 w-full mx-auto linegraph'>

            {/* line chart for total cases, death cases and recovered cases */}
           {graphData && <Line data={graphData} options={options} className='h-80  w-[100%]' />}
            </div>
           </div>
       </div>
   </div>
  )
}

export default Alldatacovid;
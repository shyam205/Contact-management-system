import React, { useState,useEffect } from 'react' 
import axios from 'axios'
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
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import Chart from '../components/Chart'
  
const queryClient = new QueryClient()

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

export const options = {
    responsive: true,
    tension:0.4
  };

type ChartData = {
     labels: string[];
      datasets: {
      label: string;
      data: any[];
      backgroundColor: string[];
    }[];
  };

  type LineChartData = {
    labels?: string[];
     datasets?: {
     fill?:boolean,
     label?: string;
     data?: any[];
     borderColor?:string,
     pointBackgroundColor?:string,
     pointRadius?:number,
     borderWidth?:string,
     backgroundColor?: string;
   }[];
 };

 const ChartMapWrapper = () => {
    return(
    <QueryClientProvider client={queryClient}>
    <Chart />
    </QueryClientProvider>

    )
 }

const Chartmap : React.FC = () => {
   const [chartgraphData, setchartgraphData] = useState<LineChartData | null>(null)
   const [chartData, setChartData] = useState<ChartData | null>(null)

  
    const casesdatewaise = async() => {
        let label: string[] = [];
        let dataset: any[] = [];
        const res = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
        //console.log("res ",res.data)
        let dataKeyArray = Object.keys(res.data.cases);
        dataKeyArray.map((item: string, i: number) => {
        label.push(item);
        dataset.push(res.data.cases[item]);
        });
        // setCasesdatewaisedata(res.data)
        setchartgraphData({
            labels: label,
            datasets: [
                {
                    fill: true,
                    label: '',
                    data: dataset,
                    borderColor:'#d3a2ef',
                    pointBackgroundColor:'#d3a2ef',
                    pointRadius:3,
                    borderWidth:'3',
                    backgroundColor:'#e9d0f7',
                        // '#f6ecfb'
                    
                },
            ],
        })
    }

    useEffect(() => {
    
        casesdatewaise()
    },[])
  return (

    <div className='w-[100%] flex justify-center flex-row'>
   
   </div>
 
  )
}

export default ChartMapWrapper;
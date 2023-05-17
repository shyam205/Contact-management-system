import React from 'react'
import Sidebar from './sidebar'
import { useQuery } from '@tanstack/react-query'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { Link } from 'react-router-dom';

function Chart() {

    // fetching covid cases detail of all country by using react query
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://disease.sh/v3/covid-19/countries').then(
            (res) => res.json(),
          ),
      })
     
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
            <h2 className='my-10 text-3xl font-bold'>Country Specific covid data of cases</h2>
           <div className='map mb-10'>
           <MapContainer center={{ lat: 28.6139, lng: 77.2090 } as LatLngExpression} zoom={4} scrollWheelZoom={false} attributionControl={false}>
                <TileLayer
                
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {/* popup for specific country's covid data */}
                { 
                data && data.map((x:any,i:number) => (
                
                <Marker position={[Number(`${x.countryInfo.lat}`), Number(`${x.countryInfo.long}`)]} key={i}>
                    <Popup>
                    <div className='h-max'>
                     <p>Country : {x.country}</p>
                     <p>Active cases : {x.active.toLocaleString('en')}</p>
                     <p>Recovered cases : {x.recovered.toLocaleString('en')}</p>
                     <p>Death cases : {x.deaths.toLocaleString('en')}</p>
                    </div>
                    </Popup>
                </Marker>

                ))
}
                </MapContainer>
                </div>
           </div>
       </div>
   </div>
  )
}

export default Chart
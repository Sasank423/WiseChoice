'use client';
import React,{useContext,useState} from 'react';
import BarChart from './BarChart';
import Datagrid from './Datagrid';
import { UtilityCons } from '../providers/utilityprovider';

const MoreInfo = () => {
  const { moreInfo,setMoreInfo,data, setData} =  useContext(UtilityCons);
  // const [moreInfo,setMoreInfo] = useState()
  return (
    <>
    {
      moreInfo && <div className="grid grid-cols-2 h-full w-full gap-2 p-4 ">
      <div className="grid grid_r2 gap-2">
        <div className="p-4 bg-white h-full shadow-sm rounded-lg overflow-hidden">
          <h1 className="font-bold text-xl">Price Analysis</h1>
          <iframe
            src={data[0].url}
            // src={`https://pricehistoryapp.com/embed/${}`}
            width="100%"
            height="100%"
            frameborder="0"
            allowtransparency="true"
            scrolling="no"
            
          ></iframe>
        </div>
        <div className="h-full bg-white shadow-sm rounded-lg p-4">
          <BarChart counts={data[1].counts}/>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-lg p-4 h-full">
        <Datagrid data={data[1].data} />
      </div>
      <div className="flex ">
        <button onClick={(e) => setMoreInfo(false)} className='absolute bottom-5 px-3 h-fit py-2 bg-brand mt-24 rounded-lg text-white'>Go Back</button>
      </div>
    </div>
    }
    </>
  );
};

export default MoreInfo;

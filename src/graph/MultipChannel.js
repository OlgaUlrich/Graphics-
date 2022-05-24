import React, { useEffect } from "react";
import { ContainerMulti } from "./MultiChannelStyles";
import SocialMulti from './SocialCardMetricsForMulti';
import MetricCard from './MetricCardForTop'
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";



import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'January',
    instagram: 5,
    facebook: 4,
    twitter: 10,
    linkedin: 5,
  },
  {
    name: 'February',
    instagram: 12,
    facebook: 10,
    twitter: 31,
    linkedin: 15,

  },
 
];

  const commonInfo = [
        {   'meaning':'posts',
            'count':'62',
           
        },
        {
            'meaning':'likes',
            'count':'66',
           
        },
        {
        'meaning': 'shares',
        'count':'38',
        
        },
        {
        'meaning': 'comments',
        'count':'32',
       
        },
  ] 

  const SocialsInfo = [
    {   'meaning':'Facebook',
        'count':'10',
        
    },
    {
        'meaning':'Instagram',
        'count':'12',
      
    },
    {
    'meaning': 'Twitter',
    'count':'31',
  
    },
    {
    'meaning': 'Linkedin',
    'count':'15',

    },
] 

  const returnDate = (arg) =>{
    const myDate = new Date(arg)
    let month = myDate.getMonth() + 1 <10 ?  `0${myDate.getMonth()+1}` :  `${myDate.getMonth()+1}`
    let day = myDate.getDate()<10 ? `0${myDate.getDate()}` : `${myDate.getDate()}`
    return day+ '/' + month + '/'+ myDate.getFullYear()
  }

const MultipChannel = () =>{
  const history = useHistory();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      history.push(`/auth`);
    }
    
  })

    return(
        <ContainerMulti>

<div className='MainWrapperMulti'>
<div className="reportText">Reporting period: {data[1].name}</div> 
  <div className='InfoArea' style={{'display':'flex', 'width':'100%', 'height':'120px', 'justify-content':'center'}}>
  {
        commonInfo.map((item, i) =>
            <MetricCard marg='2rem' width='230px' key={i} meaning={item.meaning} count={item.count} count_last_week={item.count_last_week} />
            )

        }

  </div>
      <div className='ChartWrapper' style={{'width':'100%', 'height':'500px'}}>
        <h3>COUNT OF LIKES - COMPARISON DIAGRAM WITH THE LAST MONTH</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={800}
          height={380}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="instagram" stackId="1" stroke="#8884d8" fill="#A4B0C7" />
          <Area type="monotone" dataKey="facebook" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="twitter" stackId="1" stroke="#EBB1B1" fill="#EBB1B1" />
          <Area type="monotone" dataKey="linkedin" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>

      <div className='bottom' style={{'display':'flex', 'width':'70%', 'margin':'auto'}}>
      <div className='InfoArea' style={{'display':'flex', 'width':'100%', 'height':'120px', 'marginTop':'2rem'}}>
      {
        SocialsInfo.map((item, i) =>
            <SocialMulti key={i} meaning={item.meaning} count={item.count} />
            )

        }

  </div>


      </div>



      </div>
      </div>
    </ContainerMulti>
  );
};

export default MultipChannel;

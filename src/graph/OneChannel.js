import React, {useEffect, useState } from 'react';
import * as global from '../globalStyle'
import { Container } from "./ReportStyles";
import { DatePickerWrapper } from "./ReportStyles";
import MetricCard from './MetricCard';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { info } from './data'
import twitterIcon from './svg/twitter-square-brands.svg';
import { useHistory } from "react-router";


import {
  BarChart, 
  Bar,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,

} from 'recharts';

     
  const commonInfo = [
        {   'meaning':'posts',
            'count':'122',
            'count_last_week':'189',
        },
        {
            'meaning':'likes',
            'count':'77',
            'count_last_week':'80',
        },
        {
            'meaning': 'shares',
            'count':'59',
            'count_last_week':'17',
        },
        {
          'meaning': 'comments',
          'count':'77',
          'count_last_week':'33',
        },
  ] 

  const returnDate = (arg) =>{
    const myDate = new Date(arg)
    return myDate.toLocaleDateString("en-US")
  }

  const returnDateWord = (arg)=>{
    const date = new Date(arg);  // 2009-11-10
const num = date.getDate();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();
return(`${num} ${month} ${year}`)
  }

const OneChannel = () =>{
 
    const [range, setRange] = useState(info)
    const [startDate, setStartDate] = useState(new Date(range[0].date));
    const [endDate, setEndDate] = useState(new Date(range[range.length-1].date));
    const history = useHistory();

    useEffect(()=>{
      if(!localStorage.getItem('token')){
        history.push(`/auth`);
      }
      
    })

  const getRangeOfDates = () =>{
    fetch('/report/data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
      slicing(myJson.data)
      })
  

  }

  const slicing = (arg) =>{
    let startIndex = arg.map(a => new Date(a.date).getDate()).indexOf(startDate.getDate())
    let endIndex = arg.map(a => new Date(a.date).getDate()).indexOf(endDate.getDate())

    let result = arg.slice(startIndex, endIndex+1)
  setRange(result)

  }


  const getSumOfMetrics = (arg) =>{
    let likes = 0
    let posts = 0
    let shares = 0
    let comments = 0
    let resArr = []

     arg.map(item =>{
     likes += item.likes 
     posts += item.posts 
     shares += item.retweets
     comments += item.comments  
   
    })
    let obj = {}
    obj.meaning = "likes"
    obj.count = likes
    resArr.push(obj)

    let obj1 = {}
    obj1.meaning = "posts"
    obj1.count = posts
    resArr.push(obj1)

    let obj2 = {}
    obj2.meaning = "retweets"
    obj2.count = shares
    resArr.push(obj2)

    let obj3 = {}
    obj3.meaning = "comments"
    obj3.count = comments
    resArr.push(obj3)
return resArr

  }


  
        return(
        <Container>
    
 <DatePickerWrapper>
 <div className="reportText"><img src={twitterIcon}/>Reporting period: {returnDateWord(range[0].date)} - {returnDateWord(range[range.length-1].date)}</div>
     <div className='InputArea'>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        wrapperClassName="datePicker"
        placeholder='Start date'
        
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        wrapperClassName="datePicker"
        placeholder='End date'
      />

<button onClick={()=>getRangeOfDates(info)}>Select</button>
      </div>
  
     
    </DatePickerWrapper>



<div className='MainWrapper'>
            <div className='Left'>
                <div className='Top'>
                  <div className='info'>
                <div className='infoWrapper'>
        {
      getSumOfMetrics(range).map((item, i) =>
            <MetricCard key={i} meaning={item.meaning} count={item.count} count_last_week={item.count_last_week}/>
            )

        }
              </div>
              </div>
                </div>
                <div className='Bottom'>
                <div className='diagram_wrapper'>
                <h3>Count of likes and retweets in dynamic</h3>
              
                <ResponsiveContainer width="100%" height="80%" >
                    <AreaChart
                        width={400}
                        height={500}
                        data={range}
                        syncId="anyId"
                      
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date"  tickFormatter = {returnDateWord}/>
                        <YAxis   type="number" domain={[0, 3]}/>
                        <CartesianGrid strokeDasharray="3 3" />
                         <Tooltip />
                        <Area type="monotone" dataKey="likes" stroke="#685098" fill="#685098" />
                        <Area type="monotone" dataKey="retweets" stroke="#506398" fill={`${global.colorGrA}`} />
                       
                        <Legend verticalAlign="middle" align="right" layout="vertical" />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
                </div>
  
            </div>

            <div className='Right'>
                <div className='Top'>
                <div className='diagram_wrapper'>
                <h3>Comparison chart</h3>
                <ResponsiveContainer width="100%" height="100%">
                <BarChart width={400} height={500} data={getSumOfMetrics(range)} >
                    <CartesianGrid />
                    <XAxis dataKey="meaning" />
                    <YAxis />
                    <Bar dataKey="count" stackId="a" fill={`${global.colorGrA}`}  barSize={20} />
                    <Bar dataKey="count_last_week" stackId="a" fill="#EBB1B1"   barSize={20}/>
                 </BarChart>
                 </ResponsiveContainer>
                 </div>
                </div>
           
                <div className='Bottom'>
                <div className='diagram_wrapper'>
                <h3>Count of posts in dynamic</h3>
                <ResponsiveContainer width="100%" height="100%">
                <LineChart width={400} height={300} data={range}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"  tickFormatter = {returnDateWord}/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="posts"
                    stroke={`${global.colorGrA}`}
                    activeDot={{ r: 8 }}
                />

                </LineChart>
                </ResponsiveContainer>
                </div>
                </div>
            </div>
</div>
        </Container>

    )


}

export default OneChannel

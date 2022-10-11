import React from 'react';
import './Statics.css'
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,   } from 'recharts';





const Statics = () => {
    const data = useLoaderData().data
   
    return (
       <div className="cart-content">
        <div className='chart-container'>
            <h2>Quiz analysis</h2>
            <p>Quiz analysis show which kinds of quiz Of all every topics... And show this Data visually</p>
        </div>
         <div>
         <ResponsiveContainer width="100%" height={400}>
<AreaChart
  width={500}
  height={500}
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
  <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
</AreaChart>
</ResponsiveContainer>
  

</div>
       </div>
    );
};

export default Statics;
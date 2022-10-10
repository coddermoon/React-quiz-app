import React from 'react';
import './Statics.css'
import {PieChart,Pie } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statics = () => {
    const data = useLoaderData().data
    const {name,total}=data
    console.log(data)
    return (
        <div>
            <h2>Question Analitics</h2>
            <div className="chart">
            <PieChart width={730} height={250}>
  <Pie data={name} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={total} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart> 
            </div>
        </div>
    );
};

export default Statics;
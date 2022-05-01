import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend, Tooltip } from 'recharts'
const data = [
    {
        label: "COurse 1",
        numberStd: 100
    },
    {
        label: "COurse 2",
        numberStd: 150
    },
    {
        label: "COurse 3",
        numberStd: 1000
    },
    {
        label: "COurse 4",
        numberStd: 566
    },
    {
        label: "COurse 5",
        numberStd: 44
    },
    {
        label: "COurse 6",
        numberStd: 44
    },
    {
        label: "COurse 7",
        numberStd: 44
    }
]



const TrendingTechLineChart = () => {

    return (

        <ResponsiveContainer width='100%' aspect={3}>
            <LineChart data={data} width={20} height={20} >
                <XAxis dataKey='label' interval='preserveStartEnd' />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '10px' }} />
                <Legend />
                <Line dataKey="numberStd" stroke='red' activeDot={{ r: 8 }} type="monotone" />

            </LineChart>
        </ResponsiveContainer>

    )
}




export default TrendingTechLineChart
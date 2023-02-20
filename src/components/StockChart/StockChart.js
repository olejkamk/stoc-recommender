import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const StockChart = ({ stockPrices }) => {
    const filtersObject = stockPrices.filter((o) => o.date).reverse();

    return (
        <div className={'stockChart'}>
            <LineChart width={600} height={300} data={filtersObject} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type='monotone' dataKey='price' stroke='#8884d8' />
                <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
                <XAxis dataKey='date' />
                <YAxis dataKey='price' />
                <Tooltip />
            </LineChart>

        </div>
    );
};


export default StockChart;

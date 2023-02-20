import React from 'react';
import StockTable from '../StockTable/StockTable';
import StockChart from '../StockChart/StockChart';

const StockDetails = ({ stock }) => {
    const { symbol } = stock;
    return (
        <div className='stockDetails'>
            <p className='stockDetails__title'>${symbol}</p>
            <div className='stockDetails__info'>
                <StockTable stock={stock} />
                <StockChart stockPrices={stock.stockPrices} />
            </div>
        </div>
    );
};


export default StockDetails;

import React, { useContext } from 'react';
import {StockMarketContext} from '../../context/StockMarketContext';
import StockDetails from '../StockDetails/StockDetails'


const Listing = () => {
    const { stocksData, selectedStockSymbol } = useContext(StockMarketContext);
    const newStocksData = selectedStockSymbol ? stocksData.filter((item) => item.symbol === selectedStockSymbol) : stocksData;

    return (
        <div className='listing'>
            {newStocksData?.map((item) => (
                <StockDetails stock={item} key={item.id} />
            ))}
        </div>
    );
};


export default Listing;

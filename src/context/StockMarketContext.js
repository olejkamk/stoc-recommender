import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import initialData from '../data/data.json';
import { getStockData } from '../services/getData';
export const StockMarketContext = createContext();

export const StockMarketProvider = ({ children }) => {
  const [stocksData, setStocksData] = useState();
  const [stockSymbols, setStockSymbols] = useState(initialData.stockSymbols);
  const [selectedStockSymbol, setSelectedStockSymbol] = useState()
  const [selectedStockData, setSelectedStockData] = useState()
  const [fetchHasFailed, setFetchHasFailed] = useState(false);
  const fetchData = async () => {
    return await getStockData();
  };

  //   On load, set stocksData when component mounted
  useEffect(() => {
    (async () => {
      try {
        const response = await fetchData();
        setStocksData(response);
      } catch (error) {
        console.error(error);
        setFetchHasFailed(true);
      }
    })();
  }, []);

    useEffect(() => {
        const newStockData = selectedStockSymbol
            ? stocksData.filter((item) => item.symbol === selectedStockSymbol)
            : stocksData;
        setSelectedStockData (newStockData)
    }, [selectedStockSymbol]);


  return (
    <StockMarketContext.Provider
      value={{
        stocksData,
        setStocksData,
        stockSymbols,
        setStockSymbols,
        selectedStockSymbol,
        setSelectedStockSymbol,
        selectedStockData,
        setSelectedStockData,
        fetchHasFailed,
        setFetchHasFailed
      }}
    >
      {children}
    </StockMarketContext.Provider>
  );
};

StockMarketProvider.propTypes = {
  children: PropTypes.node,
};

import React, {useContext, useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {StockMarketContext} from '../../context/StockMarketContext';

const Form = () => {
    const {  stockSymbols, setSelectedStockSymbol, } = useContext(StockMarketContext);
    const [inputValue, setInputValue] = useState('');

    return (
        <div className='form'>
            <Autocomplete
                className='form__input'
                value={inputValue}
                onChange={(event, newValue) => {
                    setSelectedStockSymbol(newValue);
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                inputValue={inputValue}
                options={stockSymbols}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label='Please select the Stock' />}
            />
        </div>
    );
};

export default Form;

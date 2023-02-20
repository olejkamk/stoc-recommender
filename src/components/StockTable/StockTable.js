import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StockTable = ({ stock }) => {

    const currentDate = new Date().getDate();

    return (
        <div className='stockTable'>
            <TableContainer className='stockTable__container' component={Paper}>
                <Table aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Social Media</TableCell>
                            <TableCell align='right'>Price for today({currentDate})</TableCell>
                            <TableCell align='right'>Social media rating on the last 10 days:</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stock?.socialMediaCount.map((row) => ( row?.name &&
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component='th' scope='row'>
                                    {row.name}
                                </TableCell>
                                <TableCell align='right'>{stock.stockPrices[0].price}$</TableCell>
                                <TableCell align='right'>{row.bestTrend}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {stock?.socialMediaCount[4].totalBuyRating && (
                <p>Total for Buy: {stock?.socialMediaCount[4].totalBuyRating}</p>
            )}
            {stock?.socialMediaCount[5].totalHoldRating && (
                <p>Total for Hold: {stock?.socialMediaCount[5].totalHoldRating}</p>
            )}
            {stock?.socialMediaCount[6].totalSellRating && (
                <p>Total for Sell: {stock?.socialMediaCount[6].totalSellRating}</p>
            )}

            <h3>Recommendation: {stock?.socialMediaCount[7].bestTrend}</h3>
        </div>
    );
};


export default StockTable;

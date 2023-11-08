import React from 'react';
import { CustomerInfo, CustomerProfileInfo, CustomerDetailInfo } from '../interface/interfaces';
import { TableCell, TableRow } from '@mui/material';

function Customer(props: CustomerInfo) {
    return <TableRow>
        <TableCell>{props.id}</TableCell>
        <TableCell><img src={props.image} alt='profile'></img></TableCell>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.birthday}</TableCell>
        <TableCell>{props.sex}</TableCell>
        <TableCell>{props.job}</TableCell>
    </TableRow>
}


export default Customer;
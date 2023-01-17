import React, { useState } from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Typography,
    Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const mockedReservations = [
    { id: 1, roomNumber: '101', startDate: '01/01/2021', endDate: '01/03/2021' },
    { id: 2, roomNumber: '102', startDate: '01/05/2021', endDate: '01/07/2021' },
    { id: 3, roomNumber: '103', startDate: '01/09/2021', endDate: '01/11/2021' }
];

const PastReservations = () => {
    const history = useHistory();

    const handleShow = userId => {
        history.push(`/user-details/${userId}`);
    };

    return (
        <>
            <Typography variant="h4" component="h4">
                Past Reservations
            </Typography>
            <List>
                {mockedReservations.map(reservation => (
                    <ListItem key={reservation.id}>
                        <ListItemText
                            primary={`Room #${reservation.roomNumber}`}
                            secondary={`${reservation.startDate} - ${reservation.endDate}`}
                        />
                        <Button variant="contained" color="primary" onClick={() => handleShow(reservation.id)}>
                            Show
                        </Button>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default PastReservations;

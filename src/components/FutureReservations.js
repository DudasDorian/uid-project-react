import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Typography,
    IconButton,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '20px 0',
    },
});

const mockedReservations = [
    { id: 1, startDate: '01/01/2021', endDate: '01/03/2021', username: 'John Doe' },
    { id: 2, startDate: '01/05/2021', endDate: '01/07/2021', username: 'Jane Smith' },
    { id: 3, startDate: '01/09/2021', endDate: '01/11/2021', username: 'Bob Johnson' }
];

const FutureReservations = () => {
    const classes = useStyles();
    const [reservations, setReservations] = useState(mockedReservations);

    const handleCancel = id => {
        setReservations(reservations.filter(reservation => reservation.id !== id));
    };

    return (
        <>
            <Typography variant="h4" component="h4">
                Future Reservations
            </Typography>
            <List className={classes.root}>
                {reservations.map(reservation => (
                    <ListItem key={reservation.id}>
                        <ListItemText
                            primary={reservation.username}
                            secondary={`${reservation.startDate} - ${reservation.endDate}`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="cancel" onClick={() => handleCancel(reservation.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default FutureReservations;

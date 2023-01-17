import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Typography,
    Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '20px 0',
    },
    button: {
        margin: '10px',
    },
});

const HotelDetails = ({ hotel }) => {
    const classes = useStyles();
    const history = useHistory();

    const handlePastReservations = () => {
        history.push('/past-reservations');
    };
    const handleFutureReservations = () => {
        history.push('/future-reservations');
    };;
    const handleRoomsList = () => {
        history.push('/rooms');
    };
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {hotel.name}
                </Typography>
                <Typography variant="body2" component="p">
                    Address: {hotel.address}
                </Typography>
            </CardContent>
            <Button variant="contained" color="primary" className={classes.button} onClick={handleRoomsList}>
                Edit Rooms
            </Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={handleFutureReservations}>
                Future Reservations
            </Button>
            <Button variant="contained" className={classes.button} onClick={handlePastReservations}>
                Past Reservations
            </Button>
        </Card>
    );
};

export default HotelDetails;

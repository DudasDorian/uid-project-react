import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Card,
    CardContent,
    Typography
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '20px 0',
    },
});

const mockedHotel = {
    name: 'Hotel A',
    description: 'Luxury hotel with great views'
};

const HotelReservation = () => {
    const classes = useStyles();
    const history = useHistory();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [people, setPeople] = useState(1);

    const handleConfirmReservation = () => {
        console.log(`Hotel Name: ${mockedHotel.name}`);
        console.log(`Start Date: ${startDate}`);
        console.log(`End Date: ${endDate}`);
        console.log(`Number of People: ${people}`);
        history.push('/hotels');
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {mockedHotel.name}
                </Typography>
                <Typography color="textSecondary">
                    {mockedHotel.description}
                </Typography>
                <TextField
                    className={classes.root}
                    label="Start Date"
                    type="date"
                    value={startDate}
                    onChange={event => setStartDate(event.target.value)}
                />
                <TextField
                    className={classes.root}
                    label="End Date"
                    type="date"
                    value={endDate}
                    onChange={event => setEndDate(event.target.value)}
                />
                <FormControl className={classes.root}>
                    <InputLabel id="people-label">Number of People</InputLabel>
                    <Select
                        labelId="people-label"
                        id="people-select"
                        value={people}
                        onChange={event => setPeople(event.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" onClick={handleConfirmReservation}>
                    Confirm Reservation
                </Button>
            </CardContent>
        </Card>
    );
};

export default HotelReservation;

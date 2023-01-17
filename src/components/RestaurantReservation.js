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

const mockedRestaurant = {
    name: 'Restaurant A',
    foodType: 'Italian',
    location: 'New York City'
};

const RestaurantReservation = () => {
    const classes = useStyles();
    const history = useHistory();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [people, setPeople] = useState('');

    const handleSubmit = () => {
        console.log(`Restaurant Name: ${mockedRestaurant.name}`);
        console.log(`Food Type: ${mockedRestaurant.foodType}`);
        console.log(`Location: ${mockedRestaurant.location}`);
        console.log(`Date: ${date}`);
        console.log(`Time: ${time}`);
        console.log(`Number of People: ${people}`);
        history.push('/restaurants');
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {mockedRestaurant.name}
                </Typography>
                <Typography color="textSecondary">
                    {mockedRestaurant.foodType} - {mockedRestaurant.location}
                </Typography>
                <TextField
                    className={classes.root}
                    label="Date"
                    type="date"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                />
                <TextField
                    className={classes.root}
                    label="Time"
                    type="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
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
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Confirm Reservation
                </Button>
            </CardContent>
        </Card>
    );
};

export default RestaurantReservation;



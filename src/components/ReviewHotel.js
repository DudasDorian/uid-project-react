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
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '20px 0',
    },
});

const mockedHotel = {
    name: 'Hotel A',
};

const ReviewHotel = () => {
    const classes = useStyles();
    const history = useHistory();
    const [observations, setObservations] = useState('');
    const [overall, setOverall] = useState('');
    const [food, setFood] = useState('');
    const [service, setService] = useState('');
    const [cleanliness, setCleanliness] = useState('');

    const handleSubmit = () => {
        console.log(`Hotel Name: ${mockedHotel.name}`);
        console.log(`Observations: ${observations}`);
        console.log(`Overall Rating: ${overall}`);
        console.log(`Food Rating: ${food}`);
        console.log(`Service Rating: ${service}`);
        console.log(`Cleanliness Rating: ${cleanliness}`);
        history.push('/hotels');
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {mockedHotel.name}
                </Typography>
                <TextField
                    className={classes.root}
                    label="Observations"
                    multiline
                    rows={4}
                    value={observations}
                    onChange={event => setObservations(event.target.value)}
                />
                <FormControl className={classes.root}>
                    <InputLabel id="overall-label">Overall</InputLabel>
                    <Select
                        labelId="overall-label"
                        id="overall-select"
                        value={overall}
                        onChange={event => setOverall(event.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel id="food-label">Food</InputLabel>
                    <Select
                        labelId="food-label"
                        id="food-select"
                        value={food}
                        onChange={event => setFood(event.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel id="service-label">Service</InputLabel>
                    <Select
                        labelId="service-label"
                        id="service-select"
                        value={service}
                        onChange={event => setService(event.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.root}>
                    <InputLabel id="cleanliness-label">Cleanliness</InputLabel>
                    <Select
                        labelId="cleanliness-label"
                        id="cleanliness-select"
                        value={cleanliness}
                        onChange={event => setCleanliness(event.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit Review
                </Button>
            </CardContent>
        </Card>
    );
};

export default ReviewHotel;


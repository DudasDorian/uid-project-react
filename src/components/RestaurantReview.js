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
    name: 'Restaurant A'
};

const ReviewRestaurant = () => {
    const classes = useStyles();
    const history = useHistory();
    const [observations, setObservations] = useState('');
    const [overall, setOverall] = useState('');
    const [food, setFood] = useState('');
    const [service, setService] = useState('');

    const handleSubmit = () => {
        console.log(`Restaurant Name: ${mockedRestaurant.name}`);
        console.log(`Observations: ${observations}`);
        console.log(`Overall: ${overall}`);
        console.log(`Food: ${food}`);
        console.log(`Service: ${service}`);
        history.push('/restaurants');
    };
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {mockedRestaurant.name} Review
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
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Confirm Review
                </Button>
            </CardContent>
        </Card>
    );
};

export default ReviewRestaurant;




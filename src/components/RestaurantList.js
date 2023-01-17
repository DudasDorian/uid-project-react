import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    List,
    Card,
    CardContent,
    Typography,
    IconButton,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Restaurant, RateReview } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '20px 0',
    },
});

const mockedRestaurants = [
    {
        id: 1,
        name: 'Restaurant A',
        foodType: 'Italian',
        location: 'New York City',
        priceRange: '$'
    },
    {
        id: 2,
        name: 'Restaurant B',
        foodType: 'Chinese',
        location: 'Los Angeles',
        priceRange: '$$'
    },
    {
        id: 3,
        name: 'Restaurant C',
        foodType: 'Mexican',
        location: 'Chicago',
        priceRange: '$$$'
    },
    {
        id: 4,
        name: 'Restaurant D',
        foodType: 'Japanese',
        location: 'Houston',
        priceRange: '$$'
    },
    {
        id: 5,
        name: 'Restaurant E',
        foodType: 'French',
        location: 'Philadelphia',
        priceRange: '$$$'
    }
];

const RestaurantList = () => {
    const classes = useStyles();
    const history = useHistory();
    const [searchFoodType, setSearchFoodType] = useState('');
    const [searchName, setSearchName] = useState('');

    const handleMakeReservation = (id) => {
        history.push(`/reserve-restaurant`);
    }
    const handleReview = () => {
        history.push(`/review-restaurant`);
    }
    const filteredRestaurants = mockedRestaurants.filter(restaurant =>
        restaurant.foodType.toLowerCase().includes(searchFoodType.toLowerCase()) &&
        restaurant.name.toLowerCase().includes(searchName.toLowerCase())
    );

    return (
        <div>
            <TextField
                className={classes.root}
                variant="standard"
                label="Search by Food Type"
                value={searchFoodType}
                onChange={event => setSearchFoodType(event.target.value)}
            />
            <TextField
                className={classes.root}
                variant="standard"
                label="Search by Name"
                value={searchName}
                onChange={event => setSearchName(event.target.value)}
            />
            <List>
                {filteredRestaurants.map(restaurant => (
                    <Card key={restaurant.id}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {restaurant.name}
                            </Typography>
                            <Typography color="textSecondary">
                                {restaurant.foodType} - {restaurant.location} - {restaurant.priceRange}
                            </Typography>
                            <IconButton onClick={() => handleMakeReservation(restaurant.id)}>
                                <Restaurant />
                            </IconButton>
                            <IconButton onClick={() => handleReview()}>
                                <RateReview />
                            </IconButton>
                        </CardContent>
                    </Card>
                ))}
            </List>
        </div>
    );
};

export default RestaurantList;

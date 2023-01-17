import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Typography,
    IconButton,
    TextField,
    Card,
    CardContent,
    CardActions,
} from '@material-ui/core';
import { Edit, Hotel, RateReview } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import useStorage from "../hooks/useStorage";
import HotelDetails from "./HotelDetails";

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '20px 0',
    },
});

const mockedHotels = [
    { id: 1, name: 'Hotel A', description: 'Luxury hotel with great views', location: 'New York', price: '$200' },
    { id: 2, name: 'Hotel B', description: 'Budget hotel with basic amenities', location: 'Los Angeles', price: '$100' },
    { id: 3, name: 'Hotel C', description: 'Mid-range hotel with modern amenities', location: 'Chicago', price: '$150' },
    { id: 4, name: 'Hotel D', description: 'Luxury hotel with high-end services', location: 'Houston', price: '$250' },
    { id: 5, name: 'Hotel E', description: 'Budget hotel with limited services', location: 'Philadelphia', price: '$80' },
    { id: 6, name: 'Hotel F', description: 'Mid-range hotel with comfortable rooms', location: 'Phoenix', price: '$120' },
];

const HotelList = () => {
    const {role} = useStorage();
    const classes = useStyles();
    const history = useHistory();
    const [hotels, setHotels] = useState(mockedHotels);
    const [searchName, setSearchName] = useState('');
    const [searchPrice, setSearchPrice] = useState('');

    const handleSearchName = event => {
        setSearchName(event.target.value);
        setHotels(mockedHotels.filter(hotel => hotel.name.toLowerCase().includes(event.target.value.toLowerCase())));
    };

    const handleSearchPrice = event => {
        setSearchPrice(event.target.value);
        setHotels(mockedHotels.filter(hotel => hotel.price.toLowerCase().includes(event.target.value.toLowerCase())));
    };

    const handleManage = hotelId => {
        history.push(`/hotel-details`);
    };

    const handleReserve = hotelId => {
        history.push(`/reserve-hotel`);
    };
    const handleReview = () => {
        history.push(`/review-hotel`);
    };
    return (
        <>
            <TextField
                className={classes.root}
                label="Search by Hotel Name"
                value={searchName}
                onChange={handleSearchName}
            />
            <TextField
                className={classes.root}
                label="Search by Price"
                value={searchPrice}
                onChange={handleSearchPrice}
            />
            <List>
                {hotels.map(hotel => (
                    <Card key={hotel.id}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {hotel.name}
                            </Typography>
                            <Typography color="textSecondary">
                                {hotel.description}
                            </Typography>
                            <Typography color="textSecondary">
                                {hotel.location} - {hotel.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {role === 'host' && <IconButton onClick={() => handleManage(hotel.id)}>
                                <Edit />
                            </IconButton>}
                            {role === 'client' && <IconButton onClick={() => handleReserve(hotel.id)}>
                                <Hotel />
                            </IconButton>}
                            {role === 'client' && <IconButton onClick={() => handleReview(hotel.id)}>
                                <RateReview />
                            </IconButton>}
                        </CardActions>
                    </Card>
                ))}
            </List>
        </>
    );
};

export default HotelList;


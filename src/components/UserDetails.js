import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
} from '@material-ui/core';
import {Rating} from "@mui/material";

import { useHistory } from 'react-router-dom';

const mockedUsers = [
    { id: 1, name: 'John Doe', rating: 3, age: 30 },
    { id: 2, name: 'Jane Smith', rating: 4, age: 25 },
    { id: 3, name: 'Bob Johnson', rating: 5, age: 35 }
];

const UserDetails = ({ userId }) => {
    const history = useHistory();
    const [selectedUser] = mockedUsers.filter(user => user.id === userId);
    const [rating, setRating] = useState(0);

    const handleBack = () => {
        history.goBack();
    };

    const handleSubmit = () => {
        setRating((rating + selectedUser.rating) / 2);
        //console.log(`New rating for ${selectedUser.name}: ${newRating}`);
        //handleBack();
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {selectedUser.name}
                </Typography>
                <Typography variant="body2" component="p">
                    Age: {selectedUser.age}
                </Typography>
                <Typography variant="body2" component="p">
                    Rating: {selectedUser.rating}
                </Typography>
                <Rating
                    name="rating"
                    value={rating}
                    onChange={(event, newValue) => setRating(newValue)}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit Rating
                </Button>
                <Button variant="contained" onClick={handleBack}>
                    Back
                </Button>
            </CardContent>
        </Card>
    );
};

export default UserDetails;

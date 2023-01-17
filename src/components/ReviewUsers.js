import React, { useState } from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    TextField,
    Button
} from '@material-ui/core';
import {Rating} from "@mui/material";

const mockedUsers = [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' },
    { id: 3, username: 'user3' }
];

const ReviewUsers = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleUserSelect = user => {
        setSelectedUser(user);
    };

    const handleReviewChange = event => {
        setReview(event.target.value);
    };

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const handleSubmit = () => {
        console.log(`Review for ${selectedUser.username}: ${review}`);
        console.log(`Rating for ${selectedUser.username}: ${rating}`);
        setSelectedUser(null);
        setReview('');
        setRating(0);
    };

    return (
        <List>
            {mockedUsers.map(user => (
                <ListItem key={user.id} button onClick={() => handleUserSelect(user)}>
                    <ListItemAvatar>
                        <Avatar>{user.username[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.username} />
                </ListItem>
            ))}
            {selectedUser && (
                <>
                    <TextField
                        label="Leave a review"
                        value={review}
                        onChange={handleReviewChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <Rating
                        name="rating"
                        value={rating}
                        onChange={handleRatingChange}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit Review
                    </Button>
                </>
            )}
        </List>
    );
};

export default ReviewUsers;
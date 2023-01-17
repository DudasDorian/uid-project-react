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

const mockedRooms = [
    { id: 1, roomNumber: '101', people: 2, beds: 1, price: '$100', other: 'Smoking Room' },
    { id: 2, roomNumber: '102', people: 4, beds: 2, price: '$150', other: 'Non-Smoking Room' },
    { id: 3, roomNumber: '103', people: 3, beds: 2, price: '$200', other: 'Sea View Room' },
];

const RoomEdit = ({ roomId }) => {
    const classes = useStyles();
    const history = useHistory();
    const [selectedRoom] = mockedRooms.filter(room => room.id === roomId);
    const [people, setPeople] = useState(selectedRoom.people);
    const [beds, setBeds] = useState(selectedRoom.beds);
    const [price, setPrice] = useState(selectedRoom.price);
    const [other, setOther] = useState(selectedRoom.other);

    const handleSave = () => {
        console.log(`Edited Room: ${selectedRoom.roomNumber}`);
        console.log(`People: ${people}`);
        console.log(`Beds: ${beds}`);
        console.log(`Price: ${price}`);
        console.log(`Other: ${other}`);
        history.goBack();
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Room #{selectedRoom.roomNumber}
                </Typography>
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
                <FormControl className={classes.root}>
                    <InputLabel id="beds-label">Number of Beds</InputLabel>
                    <Select
                        labelId="beds-label"
                        id="beds-select"
                        value={beds}
                        onChange={event => setBeds(event.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    className={classes.root}
                    label="Price"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />
                <TextField
                    className={classes.root}
                    label="Other Information"
                    value={other}
                    onChange={event => setOther(event.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Save
                </Button>
            </CardContent>
        </Card>
    );
};

export default RoomEdit;


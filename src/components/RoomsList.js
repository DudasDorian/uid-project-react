import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Typography,
    IconButton,
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '20px 0',
    },
});

const mockedRooms = [
    { id: 1, roomNumber: '101' },
    { id: 2, roomNumber: '102' },
    { id: 3, roomNumber: '103' },
];

const RoomsList = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleEdit = roomId => {
        history.push(`/edit-room/${roomId}`);
    };

    return (
        <>
            <Typography variant="h4" component="h4">
                Rooms List
            </Typography>
            <List className={classes.root}>
                {mockedRooms.map(room => (
                    <ListItem key={room.id}>
                        <ListItemText primary={`Room #${room.roomNumber}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(room.id)}>
                                <Edit />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default RoomsList;

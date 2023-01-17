import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Card,
    CardContent,
    Typography,
    TextField,
    Paper,
} from '@material-ui/core';
import { Button } from '@material-ui/core';

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#fafafa',
    },
    chatBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px 0',
    },
    chatWindow: {
        height: '300px',
        width: '100%',
        overflow: 'auto',
        padding: '10px',
        margin: '10px 0',
    },
}));

const mockedGuides = [
    {
        name: 'John',
        activity: 'Kayaking',
        price: '$50',
        messages: []
    },
    {
        name: 'Jane',
        activity: 'Vine Tasting',
        price: '$75',
        messages: []
    },
    {
        name: 'Bob',
        activity: 'Hiking',
        price: '$40',
        messages: []
    }
];

const LocalGuides = () => {
    const classes = useStyles();
    const [selectedGuide, setSelectedGuide] = useState(null);
    const [message, setMessage] = useState('');

    const handleGuideSelection = (guide) => {
        setSelectedGuide(guide);
    }

    const handleSendMessage = () => {
        if (!selectedGuide) return;
        selectedGuide.messages.push({
            sent: true,
            message
        });
        setMessage('');
    }

    return (
        <div>
            <List className={classes.root}>
                {mockedGuides.map((guide) => (
                    <ListItem button key={guide.name} onClick={() => handleGuideSelection(guide)}>
                        <ListItemText primary={guide.name} secondary={'${guide.activity} - ${guide.price}'} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="chat" onClick={() => handleGuideSelection(guide)}>
                                <ChatBubbleOutlineIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            {selectedGuide && (
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Chat with {selectedGuide.name}
                        </Typography>
                        <div className={classes.chatWindow}>
                            {selectedGuide.messages.map((message, index) => (
                                <Paper key={index}>
                                    <Typography>
                                        {message.sent ? 'You: ' : '${selectedGuide.name}:' }
                                        {message.message}
                                    </Typography>
                                </Paper>
                            ))}
                        </div>
                        <div className={classes.chatBox}>
                            <TextField
                                label="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <Button variant="contained" color="primary" onClick={handleSendMessage}>
                                Send
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default LocalGuides;

import React, {useRef, useState} from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Box, Checkbox, Divider, FormControl, FormGroup, FormLabel, Stack, TextField, Typography} from "@mui/material";

export default function ConfirmationDialog(props) {
    const { onClose, open, suggestion, ...other } = props;
    const [verdict, setVerdict] = useState("");
    const radioGroupRef = useRef(null);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(suggestion, verdict);
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >
            <DialogTitle>Moderate suggestion</DialogTitle>
            <DialogContent>
                <FormControl>
                    <FormGroup>
                        {verdict && <Typography color={(verdict === "Ok" ? "darkgreen" : "darkred")}
                                                variant={"subtitle2"}>
                            {"Current verdict: " + (verdict === "Ok" ? "Approved" : "Rejected")}
                        </Typography>}
                        <Divider />
                        <Typography variant="h5">{suggestion.name}</Typography>
                        <Typography variant={"body1"}>{suggestion.description}</Typography>
                        <Divider />
                        <TextField multiline name={"Feedback"} />
                        <Stack direction={"row"}>
                            <Button onClick={() => setVerdict("Ok")}>Approve suggestion</Button>
                            <Button onClick={() => setVerdict("Remove")}>Remove suggestion</Button>
                        </Stack>
                    </FormGroup>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}
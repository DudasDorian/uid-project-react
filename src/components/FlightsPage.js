import React, {useState} from "react";
import {Box, Button, Divider, List, ListItem, ListItemText, TextField, Typography} from "@mui/material";

const mockedFlights = [
    { name: "KH-89104U", description: "Lorem ipsum dolor sit amet.", destination: "New York", departure: "21-03-2023" },
    { name: "JSA-7149KS", description: "Lorem ipsum dolor sit amet.", destination: "Chicago", departure: "21-03-2023" },
    { name: "PRL-1NUW82", description: "Lorem ipsum dolor sit amet.", destination: "Philadelphia", departure: "21-03-2023" },
    { name: "OS-093MMC", description: "Lorem ipsum dolor sit amet.", destination: "Houston", departure: "21-03-2023" },
    { name: "MSK-72931", description: "Lorem ipsum dolor sit amet.", destination: "Phoenix", departure: "21-03-2023" },
]

function FlightsPage() {
    const [flightsList, setFlightsList] = useState(mockedFlights)
    const [searchDestination, setSearchDestination] = useState('');

    const handleSearchDestination = event => {
        setSearchDestination(event.target.value);
        setFlightsList(mockedFlights.filter(flight => flight.destination.toLowerCase().includes(event.target.value.toLowerCase())));
    };


    return <Box sx={{ width: "850px", marginLeft: "50px" }}>
        <Typography variant={"h2"}>Flights</Typography>
        <Divider />
        <TextField
            variant="standard"
            label="Search by Destination"
            value={searchDestination}
            onChange={handleSearchDestination}
        />
        <List>
            <ListItem divider>
                <ListItemText sx={{ width: "150px", color: "gray" }} primary={"Flight"} />
                <ListItemText sx={{ color: "gray" }} primary={"Destination"} />
            </ListItem>
            {flightsList.map((f, index) => (
                <ListItem divider key={index} secondaryAction={
                    <Button edge="end" onClick={() => window.location.replace('https://wizzair.com/')}>
                        Buy Tickets
                    </Button>
                }>
                    <ListItemText primary={f.name} secondary={f.description} />
                    <ListItemText primary={f.destination} secondary={f.departure} />
                </ListItem>
            ))}
        </List>
    </Box>
}

export default FlightsPage
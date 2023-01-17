import React from "react";
import {Box, Grid, List, ListItem, Stack, Typography} from "@mui/material";

const mockedFlights = [
    { name: "KH-89104U", description: "Lorem ipsum dolor sit amet.", flight: "Cluj-Napoca - New York", time: "21-03-2023 12:00 - 21-03-2023 21:00" },
    { name: "JSA-7149KS", description: "Lorem ipsum dolor sit amet.", flight: "Cluj-Napoca - Chicago", time: "21-03-2023 12:00 - 21-03-2023 21:00" },
    { name: "MSK-72931", description: "Lorem ipsum dolor sit amet.", flight: "Cluj-Napoca - Phoenix", time: "21-03-2023 12:00 - 21-03-2023 21:00" },
]

const mockedHotels = [
    { id: 1, name: 'Hotel A', description: 'Luxury hotel with great views', location: 'New York', price: '$200' },
    { id: 6, name: 'Hotel F', description: 'Mid-range hotel with comfortable rooms', location: 'Phoenix', price: '$120' },
]

const mockedAttractions = [
    { name: "Attraction 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: "Attraction 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
]

function MyAccountPage() {
    return <Grid container justifyContent="center" spacing={15}  marginTop={-10}>
        <Grid item>
            <Box padding={2} border={1} borderColor={"black"} sx={{ borderRadius: '16px', height: '500px', width: '290px' }}>
                <Typography variant={"h4"}>Hotel reservations</Typography>
                <List>
                    {mockedHotels.map((f, index) => (
                        <ListItem divider key={index}>
                            <Stack>
                                <Typography variant={"h5"}>{f.name + " - " + f.location}</Typography>
                                <Typography variant={"subtitle1"}>{f.description}</Typography>
                            </Stack>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Grid>
        <Grid item>
            <Box padding={2} border={1} borderColor={"black"} sx={{ borderRadius: '16px', height: '500px', width: '290px' }}>
                <Typography variant={"h4"}>Flight information</Typography>
                <List>
                    {mockedFlights.map((f, index) => (
                        <ListItem divider key={index}>
                            <Stack>
                                <Typography variant={"h5"}>{f.flight}</Typography>
                                <Typography variant={"h6"}>{f.name}</Typography>
                                <Typography variant={"subtitle2"}>{f.time}</Typography>
                            </Stack>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Grid>
        <Grid item>
            <Box padding={2} border={1} borderColor={"black"} sx={{ borderRadius: '16px', height: '500px', width: '290px' }}>
                <Typography variant={"h4"}>Attractions list</Typography>
                <List>
                    {mockedAttractions.map((f, index) => (
                        <ListItem divider key={index}>
                            <Stack>
                                <Typography variant={"h5"}>{f.name}</Typography>
                                <Typography variant={"subtitle1"}>{f.description}</Typography>
                            </Stack>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Grid>
    </Grid>
}

export default MyAccountPage
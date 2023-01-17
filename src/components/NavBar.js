import React from "react";
import {
    Button,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import List from "@mui/material/List";
import {useHistory} from "react-router-dom";
import {Work} from "@material-ui/icons";

const navItems = [
    {name: 'Home', path: ''},
    {name: 'Hotels', path: '/hotels'},
    {name: 'Restaurants', path: '/restaurants'},
    {name: 'Attractions', path: '/nearby-attractions'},
    {name: 'Flights', path: '/flights'},
    {name: 'Local Guides', path: '/local-guides'},
];

function NavBar() {
    const history = useHistory();

    return <Toolbar onClick={() => {}} sx={{ textAlign: 'center', paddingLeft: "20px", justifyContent: "space-between", backgroundColor: "palegoldenrod" }}>
        <Stack direction={"row"}>
            <Typography variant="h6" sx={{ my: 2, marginRight: "20px" }}>
                <Work />
                Travel Buddy
            </Typography>
            <List component={Stack} direction="row">
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding sx={{ width: "auto" }}>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => history.push(item.path)}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
        <Stack direction={"row"} spacing={3}>
            <ListItemButton onClick={() => {
                history.push('/my-account')
            }}>My Account</ListItemButton>
            <Button variant={"contained"} onClick={() => {
                window.location.replace('http://localhost:3000/');
                sessionStorage.clear();
            }}>Log out</Button>
        </Stack>
    </Toolbar>
}

export default NavBar
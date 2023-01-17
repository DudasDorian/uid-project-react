import React, {useState} from "react";
import useStorage from "../hooks/useStorage";
import {
    Box,
    Button,
    Divider, FormControlLabel,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Stack, Switch,
    TextField,
    Typography
} from "@mui/material";
import ConfirmationDialog from "./DialogComponent";
import {AddCircle, Edit} from "@material-ui/icons";

function NearbyAttractions() {
    const { role } = useStorage()
    const [attractionList, setAttractionList] = useState([
        { name: "Attraction 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Attraction 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Attraction 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Attraction 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { name: "Attraction 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ])

    const [state, setState] = useState("Initial");
    const [suggestions, setSuggestions] = useState([
        { name: "Suggestion 1", description: "Description" },
    ]);

    const [openDialog, setOpenDialog] = useState("");

    const handleClose = (suggestion, verdict) => {
        setOpenDialog("");

        if(verdict === "Ok") {
            setAttractionList([...attractionList, suggestion])
            setSuggestions(suggestions.filter((s) => s !== suggestion))
        }
        if(verdict === "Remove") {
            setSuggestions(suggestions.filter((s) => s !== suggestion))
        }
    }

    const [onlyLocalRecommendations, setOnlyLocalRecommendations] = useState(false)
    const [localRecommendations] = useState([
        { name: "Local Recommendation 1", description: "Description" },
        { name: "Local Recommendation 2", description: "Description" },
        { name: "Local Recommendation 3", description: "Description" },
    ])

    function NearbyAttractionsList() {
        return <Box sx={{ width: "850px", marginLeft: "50px" }}>
            <Typography variant={"h2"}>Nearby Attractions</Typography>
            <Divider />
            <FormControlLabel control={
                <Switch checked={onlyLocalRecommendations}
                        onChange={(e) => setOnlyLocalRecommendations(e.target.checked)} />
            } label={"See Only Local Recommendations"} />
            <List>
                {(onlyLocalRecommendations ?
                    localRecommendations :
                    [...attractionList, ...localRecommendations]).map((a, index) => (
                    <ListItem divider key={index} secondaryAction={
                        <IconButton edge="end">
                            <AddCircle />
                        </IconButton>
                    }>
                        <ListItemText primary={a.name} secondary={a.description} />
                    </ListItem>
                ))}
            </List>
            <Stack marginTop={"20px"} direction={"row"} spacing={2}>
                <Button variant={"contained"} onClick={() => setState("Suggestion")}>Add a suggestion</Button>
                {role === 'admin' && <Button variant={"outlined"} onClick={() => setState("Moderate")}>Moderate suggestions</Button>}
            </Stack>
        </Box>
    }

    function AddSuggestion() {
        const [currentSuggestion, setCurrentSuggestion] = useState({name: "", description: ""});

        return <Box sx={{ width: "650px", marginLeft: "50px" }}>
            <Typography variant={"h3"}>Add Suggestion</Typography>
            <Box marginTop={"10px"} border={1} borderColor={"black"} height={"400px"} padding={"10px"}>
                <Stack sx={{ width: '25ch', fontSize: 'large' }} spacing={2}>
                    <TextField label="Suggestion Name" value={currentSuggestion.name}
                               onChange={(e) => setCurrentSuggestion({...currentSuggestion, name: e.target.value})} />
                    <TextField sx={{width: '628px'}} multiline
                               label="Suggestion Description" value={currentSuggestion.description}
                               onChange={(e) => setCurrentSuggestion({...currentSuggestion, description: e.target.value})} />
                </Stack>
            </Box>
            <Button onClick={() => {
                setState("Initial")
                setSuggestions([...suggestions, currentSuggestion])
            }}>Add suggestion</Button>
        </Box>
    }

    function SuggestionsList() {
        return <Box sx={{ width: "850px", marginLeft: "50px" }}>
            <Typography variant={"h2"}>Suggested Attractions</Typography>
            <Divider />
            <List>
                {suggestions.map((s, index) => (
                    <ListItem divider key={index} secondaryAction={
                        <IconButton edge="end" onClick={() => setOpenDialog(s.name)}>
                            <Edit />
                        </IconButton>
                    }>
                        <ListItemText primary={s.name} secondary={s.description} />
                        <ConfirmationDialog
                            keepMounted
                            open={openDialog === s.name}
                            suggestion={s}
                            onClose={handleClose}
                        />
                    </ListItem>
                ))}
            </List>
            <Button onClick={() => setState("Initial")}>Back</Button>
        </Box>
    }

    return <div>
        {
            {
                "Initial": <NearbyAttractionsList />,
                "Suggestion": <AddSuggestion />,
                "Moderate": <SuggestionsList />,
            }[state]
        }
    </div>
}

export default NearbyAttractions;
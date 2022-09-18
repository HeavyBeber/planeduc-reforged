import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { CustomerListMenu } from './CustomerListMenu';
import { BottomNavigation, BottomNavigationAction, Card, CardActions, CardContent, createTheme, Paper, ThemeProvider } from '@mui/material';
import { Add, Event } from '@mui/icons-material';
import theme from './theme';


const values = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
function CustomerList() {
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {values.map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                        <ListItem key={value} component="div" disablePadding>
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} 
                                    primary={`Line item ${value + 1}`}  
                                    secondary={'Secondary text'}
                                />
                            </ListItemButton>
                            <CustomerListMenu />
                        </ListItem>);
                    })}
                </List>
            </CardContent>
            <CardActions>
                <ThemeProvider theme={theme}>
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: 'background.default' }} elevation={3}>
                        <BottomNavigation>
                            <BottomNavigationAction label="Nouveau client" icon={<Add />} />
                            <BottomNavigationAction label="Ajouter au cours" icon={<Event />}/>
                        </BottomNavigation>
                    </ Paper>
                </ThemeProvider>
            </CardActions>
        </Card>
    );
}

export { CustomerList }
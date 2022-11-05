import * as React from 'react';
import { 
  Card, 
  CardActions, 
  CardContent,
  Button, 
  Typography, 
} from '@mui/material';
import CustomerList from '../CustomerPage/CustomerList';


function CourseDetails(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{display:"flex", flexDirection:"column"}}>
        <Typography sx={{ fontSize: 26 }} color="text.primary" gutterBottom>
          Participants
        </Typography>
        <CustomerList customers={props.course.extendedProps.participants}/>
      </CardContent>
      <CardActions>
        <Button /*variant="outlined" disabled*/ variant="contained">Ajouter</Button>
        <Button /*variant="outlined" disabled*/ variant="contained">Supprimer</Button>
      </CardActions>
    </Card>
  );
}

export { CourseDetails }
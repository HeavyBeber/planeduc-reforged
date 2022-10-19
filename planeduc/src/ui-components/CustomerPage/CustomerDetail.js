import * as React from 'react';
import { 
  Card, 
  CardActions, 
  CardContent,
  Button, 
  Typography, 
  TextField 
} from '@mui/material';


function CustomerDetail() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{display:"flex", flexDirection:"column"}}>
        <Typography sx={{ fontSize: 26 }} color="text.primary" gutterBottom>
          Customer display name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Puppys name
        </Typography>
        <TextField id="lastname-field" label="Nom" variant="standard" />
        <TextField id="firstname-field" label="Prénom" variant="standard" />
        <TextField id="puppy-field" label="Chiot" variant="standard" />
        <TextField id="puppy-race-field" label="Race" variant="standard" />
        <TextField id="puppy-birthdate-field" label="Date de naissance" variant="standard" />
        <TextField id="email-field" label="Email" variant="standard" />
        <TextField id="phone-number-field" label="Tel." variant="standard" />
        <TextField id="commentary-field" label="Commentaires" variant="standard" />
      </CardContent>
      <CardActions>
        <Button color="success" /*variant="outlined" disabled*/ variant="contained">Sauvegarder</Button>
      </CardActions>
    </Card>
  );
}

export { CustomerDetail }
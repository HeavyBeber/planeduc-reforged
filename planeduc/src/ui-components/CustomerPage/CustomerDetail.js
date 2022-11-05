import * as React from 'react';
import { 
  Card, 
  CardActions, 
  CardContent,
  Button, 
  Typography, 
  TextField 
} from '@mui/material';


function CustomerDetail(customer) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{display:"flex", flexDirection:"column"}}>
        <Typography sx={{ fontSize: 26 }} color="text.primary" gutterBottom>
          Customer display name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Puppys name
        </Typography>
        <TextField id="lastname-field" label="Nom" variant='standard' defaultValue={customer.lastName}/>
        <TextField id="firstname-field" label="Prénom" variant="standard" defaultValue={customer.firstName} />
        <TextField id="puppy-field" label="Chiot" variant="standard"  defaultValue={customer.puppy}/>
        <TextField id="puppy-race-field" label="Race" variant="standard"  defaultValue={customer.race}/>
        <TextField id="puppy-birthdate-field" label="Date de naissance" variant="standard" defaultValue={customer.birthdate}/>
        <TextField id="email-field" label="Email" variant="standard"  defaultValue={customer.email}/>
        <TextField id="phone-number-field" label="Tel." variant="standard"  defaultValue={customer.phone}/>
        <TextField id="commentary-field" label="Commentaires" variant="standard"  defaultValue={customer.comments}/>
      </CardContent>
      <CardActions>
        <Button /*variant="outlined" disabled*/ variant="contained">Modifier</Button>
      </CardActions>
    </Card>
  );
}

export { CustomerDetail }
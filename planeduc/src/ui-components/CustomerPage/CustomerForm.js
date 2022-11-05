import * as React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    TextField,
    Modal
} from '@mui/material';


function CustomerForm(props) {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Card
                sx={style}>
                <CardContent style={{ display: "flex", flexDirection: "column" }}>
                    {
                        (props.customer.lastName || props.customer.firstName )&&
                        <Typography sx={{ fontSize: 26 }} color="text.primary" gutterBottom>
                            Customer display name
                        </Typography>
                    }
                    {
                        props.customer.puppy &&
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Puppys name
                        </Typography>

                    }
                    <TextField id="lastname-field" label="Nom" variant='standard' defaultValue={props.customer.lastName} />
                    <TextField id="firstname-field" label="Prénom" variant="standard" defaultValue={props.customer.firstName} />
                    <TextField id="puppy-field" label="Chiot" variant="standard" defaultValue={props.customer.puppy} />
                    <TextField id="puppy-race-field" label="Race" variant="standard" defaultValue={props.customer.race} />
                    <TextField id="puppy-birthdate-field" label="Date de naissance" variant="standard" defaultValue={props.customer.birthdate} />
                    <TextField id="email-field" label="Email" variant="standard" defaultValue={props.customer.email} />
                    <TextField id="phone-number-field" label="Tel." variant="standard" defaultValue={props.customer.phone} />
                    <TextField id="commentary-field" label="Commentaires" variant="standard" defaultValue={props.customer.comments} />
                </CardContent>
                <CardActions>
                    <Button color="success" onClick={props.handleClose} /*variant="outlined" disabled*/ variant="contained">Sauvegarder</Button>
                </CardActions>
            </Card>
        </Modal>
    );
}

export { CustomerForm }
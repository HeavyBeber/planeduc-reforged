
import { CustomerTable } from './CustomerTable';
import { Stack } from '@mui/system';
import { CustomerForm } from './CustomerForm';
import * as React from 'react';

function CustomerPage() {
    const [customer, setCustomer] = React.useState({lastName:"456"});
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false)

    const setCustomerCallback = (customer) => {setCustomer(customer); setOpen(true)}


    return (
        <Stack
          position="sticky"
          margin={"16px"}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={"16px"}
        >
            <CustomerTable setCustomerCallback={setCustomerCallback}/>
            {/* <CustomerDetail />  */}
            <CustomerForm customer={customer} open={open} handleClose={handleClose}/>
        </Stack>
    );
}

export { CustomerPage }
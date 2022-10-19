
import { CustomerList } from './CustomerList';
import { CustomerDetail } from './CustomerDetail';
import { Stack } from '@mui/system';

function CustomerPage() {

    return (
        <Stack
          position="sticky"
          margin={"16px"}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={"16px"}
        >
            <CustomerList />
            <CustomerDetail />
        </Stack>
    );
}

export { CustomerPage }
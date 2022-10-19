import { Stack } from "@mui/material";
import { Calendar } from "./Calendar";

function CoursePage() {

    return (
        <Stack
          position="sticky"
          margin={"16px"}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={"16px"}
        >
            <Calendar />
        </Stack>
    );
}

export { CoursePage }
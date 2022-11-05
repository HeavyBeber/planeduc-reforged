import { Stack } from "@mui/material";
import React from "react";
import { Calendar } from "./Calendar";
import { CourseDetails } from "./CourseDetails";

function CoursePage() {

    const [selectedCourse, setSelectedCourse] = React.useState({extendedProps: {participants: []}});

    const setSelectedCourseCallback = (course) => {setSelectedCourse(course)}

    return (
        <Stack
          position="sticky"
          margin={"16px"}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={"16px"}
        >
        <Calendar setSelectedCourseCallback={setSelectedCourseCallback}/>
        <CourseDetails course={selectedCourse}/>
        </Stack>
    );
}

export { CoursePage }
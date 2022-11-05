import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import list from '@fullcalendar/list' // a plugin!
import frLocale from '@fullcalendar/core/locales/fr';
import { BottomNavigation, BottomNavigationAction, Button, Card, CardActions, Input, Modal, Paper, Popover } from '@mui/material';
import { Add } from '@mui/icons-material';

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarPicker } from '@mui/x-date-pickers';

export const Calendar = (props) => {

  // Liste des cours
  const [events, setEvents] = React.useState([
    { title: 'Cours 16h ', date: '2022-11-10', participants: [{ name: "Un gars" }, { name: "Une fille" }] },
    { title: 'Cours 17h', date: '2022-11-10', participants: [{ name: "Deux gars" }, { name: "Deux filles" }] }
  ]);

  // Ajouter un cours
  const addEvent = (ev) => {
    setEvents([...events, ev])
  }

  // Date du date picker (ajouter un cours)
  const defaultDate = dayjs(new Date());
  const [date, setDate] = React.useState(defaultDate);

  // anchor du date picker
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClickPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;


  const defaultModalInputValue = "Cours"
  const [openModal, setOpenModal] = React.useState(false);
  const [modalInputValue, setModalInputValue] = React.useState(defaultModalInputValue)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => {
    setModalInputValue(defaultModalInputValue)
    setDate(defaultDate)
    setOpenModal(false)
  }

  const handleModalInputChange = (event) => {
    setModalInputValue(event.target.value);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    padding: '16px',
    boxShadow: 24,
    p: 4,
  };

  const createCourse = (title, date) => {
    addEvent(
      { title: title, date: date.format('YYYY-MM-DD'), participants: [{ name: "Un gars" }, { name: "Une fille" }] }
    );
    handleCloseModal()
  }

  return (
    <Card sx={{
      padding: "16px",
      width: "70%",
      maxHeight: "770px",
      overflow: "auto",
    }}>
      <FullCalendar
        plugins={[dayGridPlugin, list]}
        locales={[frLocale]}
        locale='fr'
        initialView="dayGridMonth"
        eventContent={renderEventContent}
        weekends={true}
        views={{
          dayGridMonth: {
            aspectRatio: 2,
            eventClick: ((event) => props.setSelectedCourseCallback(event.event)),
            showNonCurrentDates: false,
          },
          listWeek: {
            eventClick: ((event) => props.setSelectedCourseCallback(event.event)),
            allDayText: ""
          },
        }}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,listWeek'
        }}
        events={events}
      />
      <CardActions>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation showLabels>
            <BottomNavigationAction onClick={handleClickPopover
              /* addEvent({ title: 'Cours 1', date: '2022-11-10' })*/} label="Nouveau cours" icon={<Add />} />

            <Popover
              id={id}
              open={openPopover}
              anchorEl={anchorEl}
              onClose={handleClosePopover}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CalendarPicker date={date} onChange={(newDate) => {
                  setDate(newDate);
                  handleOpenModal();
                  handleClosePopover()
                }} />
              </LocalizationProvider>
            </Popover>
            <Modal
              open={openModal}
              onKeyUp={
                (event) => {
                  if (event.key === "Enter") {
                    createCourse(modalInputValue, date)
                  }
                }
              }
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Card style={modalStyle}>
                <Input id="course-name" value={modalInputValue} onChange={handleModalInputChange} label="Nom du cours" variant="outlined" />
                <CardActions >
                  <Button variant="contained" onClick={() => createCourse(modalInputValue, date)}>Valider</Button>
                  <Button /*variant="outlined" disabled*/ onClick={handleCloseModal} variant="contained">Annuler</Button>
                </CardActions>
              </Card>
            </Modal>

          </BottomNavigation>
        </ Paper>
      </CardActions>
    </Card>
  )
}



function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
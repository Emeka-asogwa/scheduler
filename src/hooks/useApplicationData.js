import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  //use Effect to update state received from server updates or request made to server
  useEffect(() => {
    //request to server
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  // function to the spots remaining for schedule booking
  function updateSpotsRemaining(day, days, appointments) {
    const selectedDay = days.find((element) => element.name === day);
    const updatedSpots = selectedDay.appointments.filter(
      (appointmentId) => !appointments[appointmentId].interview
    ).length;
    const newDays = [...days];
    return newDays.map((e) =>
      e.name === day ? { ...e, spots: updatedSpots } : e
    );
  }

  //Function to send add/ update interview request to server
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = updateSpotsRemaining(state.day, state.days, appointments);

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      setState({ ...state, days, appointments });
    });
  }

  //function to cancel selected interview
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = updateSpotsRemaining(state.day, state.days, appointments);

    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({ ...state, days, appointments });
    });
  }

  return { bookInterview, cancelInterview, state, setDay };
}

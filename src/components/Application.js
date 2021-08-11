import React from "react";
import useApplicationData from "hooks/useApplicationData";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment/index";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

export default function Application(props) {

  const { state, setDay, bookInterview, cancelInterview } = useApplicationData();
  // const setDays = (days) => {
  //   setState({ ...state, days });
  // }


  const appointmentsDay = getAppointmentsForDay(state, state.day);

  const interviewersForDay = getInterviewersForDay(state, state.day);

  // const interviewersForDay = [];


  // const setAppointment = appointments => setState({
  //   ...state,
  //   appointments
  // });


  const schedule = appointmentsDay.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        {...appointment}
        interview={interview}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
        interviewers={interviewersForDay}
      />
    );
  });
  return (

    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */
        }

      </section>
      <section className="schedule">
        <section className="schedule">
          {schedule}
          <Appointment key="last" time="5pm" />
        </section>
      </section>
    </main>
  );
}

//retrieve appointments for given day
export function getAppointmentsForDay(state, day) {
  const dayObj = state.days.find((val) => {
    return val.name === day;
  });
  if (dayObj === undefined || state.days.length === 0 || !dayObj) {
    return [];
  }
  const foundAppointment = dayObj.appointments.map((ap) => {
    return state.appointments[ap];
  });
  return foundAppointment;
}

//retrieve interviewers for given day
export function getInterviewersForDay(state, day) {
  const found = state.days.find((d) => day === d.name);

  if (state.days.length === 0 || found === undefined || !found) return [];

  return found.interviewers.map((id) => state.interviewers[id]);
}

//retrieve interviewer information from list of interviewers
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  } else {
    const student = interview.student;
    const interviewer = state.interviewers[interview.interviewer];
    const interviewObj = { student, interviewer };
    return interviewObj;
  }
}

import React from "react";
import useVisualMode from "hooks/useVisualMode";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Confirm from "./Confirm";
import Status from "./Status";
import Form from "./Form";
import Error from "./Error";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const DELETING = "DELETING";
  const EDIT = "EDIT";
  const CONFIRM = "CONFIRM";
  const SAVING = "SAVING";
  const CREATE = "CREATE";
  const ERROR_DELETE = "ERROR_DELETE";
  const ERROR_SAVE = "ERROR_SAVE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(result => {

        transition(SHOW)

      })
      .catch((error) => {
        transition(ERROR_SAVE, true);
      })
  }

  function cancel(event) {
    transition(DELETING, true);
    props.cancelInterview(props.id)
      .then(result => {
        transition(EMPTY)

      })
      .catch((error) => {
        transition(ERROR_DELETE, true);
      })
  }

  // {
  //   mode === SHOW && (
  //     <Show
  //       student={props.interview.student}
  //       interviewer={props.interview.interviewer}
  //     />
  //   )
  // }

  return (
    <article className="appointment" data-testid="appointment">
      < Header id={props.id} time={props.time} />

      {mode === SHOW && (
        <Show
          interviewer={props.interview.interviewer}
          student={props.interview.student}
          // id={props.id}
          onDelete={() => {
            transition(CONFIRM)
            // .then((result => {
            //   transition(deleteAppointment(props.id))


            // }));
          }}
          onEdit={() => {
            transition(EDIT);
          }}

        />)}

      {mode === EMPTY && (
        <Empty
          onAdd={() => {
            transition(CREATE);
          }}
        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => {
            back();
          }}
        />
      )}

      {
        mode === DELETING && (
          <Status message={"Deleting"} />
        )
      }

      {
        mode === SAVING && (
          <Status message={"Saving"} />
        )
      }
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onConfirm={cancel}
          onCancel={back}
        />
      )}

      {mode === EDIT && (
        <Form
          name={props.interview.student}
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id}
          onSave={(name, interviewer) => save(name, interviewer)}
          onCancel={() => back()}
        />
      )}

      {(mode === ERROR_DELETE || mode === ERROR_SAVE) && (
        <Error
          message={
            mode === ERROR_SAVE
              ? "Server Error: could not save appointment"
              : "Server Error: could not delete appointment"
          }
          onClose={back}
        />
      )}


    </article>)
};
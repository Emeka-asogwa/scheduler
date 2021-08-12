import { useState } from "react";

//custom hook to maintain mode and mode history for appointment component
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // function to handle change of mode
  function transition(valueTo, skipPrevious) {
    if (!skipPrevious) {
      setHistory((prev) => [...prev, mode]);
    }
    setMode(valueTo);
  }

  //function to reverse mode to previous state
  function back() {
    if (history.length >= 1) {
      setMode(history[history.length - 1]);
      setHistory((prev) => [...prev.slice(0, -1)]);
    }
  }
  return { mode, transition, back };
}

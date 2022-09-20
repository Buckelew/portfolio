import { useState } from "react";

const useToggle = (initialState) => {
  const [state, setState] = useState(initialState ? true : false);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};

export default useToggle;

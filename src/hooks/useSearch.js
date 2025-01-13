import { useState } from "react";

export const useSearch = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return { input, handleChange };
};

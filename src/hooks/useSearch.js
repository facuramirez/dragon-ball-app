import { useState } from "react";
import { navigate } from "wouter/use-browser-location";

const initialFilters = {
  gender: "",
  race: "",
  affiliation: "",
};

export const useSearch = () => {
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState(initialFilters);

  const handleChange = (e) => {
    const { value } = e.target;
    navigate("/", {
      replace: true,
    });
    setInput(value);
  };

  const resetInput = () => {
    setInput("");
  };

  const handleFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return { input, handleChange, filters, handleFilters, resetInput };
};

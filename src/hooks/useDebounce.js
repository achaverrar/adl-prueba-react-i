import { useRef } from "react";

export const useDebouce = (callback, delay) => {
  const debounceRef = useRef();

  const debounceChange = (value) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      callback(value);
    }, delay);
  };
  return debounceChange;
};

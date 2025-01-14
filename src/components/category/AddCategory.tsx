import React, { useState } from "react";
interface Props {
  onNewCategory: (newValue: string) => void;
}
export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((values) => [...values, inputValue]);
    onNewCategory(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Buscar gifs"
      />
    </form>
  );
};

import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Samurai X"]);
  const onAddCategory = (category: string) => {
    if (categories.includes(category)) return;
    setCategories([...categories, category]);
  };
  return (
    <>
      <h1>Gif's App</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category: any) => (
        <GiftGrid category={category} key={`img-container-${category}`} />
      ))}
    </>
  );
};

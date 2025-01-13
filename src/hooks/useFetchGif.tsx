import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [images, setImages] = useState<[]>([]);
  const getImages = async (): Promise<void> => {
    setIsLoading(true);
    const newImages = await getGifs(category);
    if (!newImages) return;
    setImages(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    try {
      getImages();
    } catch (error) {
      console.error("Error en useFetchGif: ", error);
    }
  }, [category]);

  return {
    // data
    isLoading,
    images,
    // methods
  };
};

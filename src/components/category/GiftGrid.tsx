import { GiftItem } from "./GiftItem";
import { useFetchGif } from "../../hooks/useFetchGif";

interface Props {
  category: string;
}

export const GiftGrid = ({ category }: Props) => {
  const { isLoading, images } = useFetchGif(category);

  return (
    <>
      {isLoading && <h1>Cargando...</h1>}
      <h2 className="titleCategory">{category}</h2>
      <div className="gifContainer">
        {images?.map((imagen: any) => (
          <GiftItem key={imagen.id} {...imagen} />
        ))}
      </div>
    </>
  );
};

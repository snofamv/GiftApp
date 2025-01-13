export interface Props {
  url: string;
  title: string;
  id: string | number;
}

export const GiftItem = ({ id, title, url }: Props) => {
  return (
    <div className="card">
      <img src={url} alt={`img-${title}-${id}`} className="gif" />
      <p>{title}</p>
    </div>
  );
};

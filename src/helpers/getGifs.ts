export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=yrC1cVLn8RufqczY6KJx1cpjHdmsCfql&q=${category}&limit=4`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const { data } = await res.json();
  const gifs = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
};

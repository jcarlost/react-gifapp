export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=100&api_key=m04Cva2vZyLJKuXZXtqapfVZ1NYcmvM7`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      url: img.images?.downsized_medium.url,
      title: img.title,
    };
  });
  return gifs;
};
export default getGifs;

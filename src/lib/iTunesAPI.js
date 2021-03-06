export const itunesSearch = async function (search) {
  try {
    return await fetch(
      `https://itunes.apple.com/search?term=${search}&entity=album`
    ).then((res) => res.json());
  } catch (e) {
    console.error("itunesSearch failed!");
    console.error(e);
    return {};
  }
};

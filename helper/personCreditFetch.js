import axios from "axios";

export async function getPersonCredit(id) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=3f3667e5e01a1fb0634517c27ebbdb9e&language=en-US`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

import axios from "axios";

export async function getSimilarMovies(id) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=3f3667e5e01a1fb0634517c27ebbdb9e&page=1`
    );
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
}

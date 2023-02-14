import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  type,
  selecetedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) => {
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      { genres && genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
        />
      ))}
    </div>
  );
};

export default Genres;

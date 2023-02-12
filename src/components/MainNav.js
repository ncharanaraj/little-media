import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    if(value === 0) navigate("/");
    else if(value === 1) navigate("/movies");
    else if(value === 2) navigate("/Series");
    else if(value === 3) navigate("/Search");

  }, [value, navigate])


  return (
    <Box
      sx={{ width: "100%",
      position: "fixed",
      bottom: 0,
      zIndex: 100,
    }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color: "#0369a1"}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color: "#0369a1"}} label="Movies" icon={<MovieCreationIcon />} />
        <BottomNavigationAction style={{color: "#0369a1"}} label="Tv Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color: "#0369a1"}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}

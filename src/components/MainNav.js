import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

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

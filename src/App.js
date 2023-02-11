import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./pages/Movies/Movies";
import Search from "./pages/Search/Search";
import Series from "./pages/Series/Series";
import Trending from "./pages/Trending/Trending";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/series" element={<Series />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;

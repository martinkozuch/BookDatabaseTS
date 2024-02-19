import { Routes, Route } from "react-router-dom";
import BookList from "./COMPONENTS/BookList/BookList";
import BookDetails from "./COMPONENTS/BookDetails/BookDetails";
import Favourites from "./COMPONENTS/Favourites/Favourites";
import Navbar from "./COMPONENTS/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;

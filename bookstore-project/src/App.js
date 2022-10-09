import React, { lazy, Suspense, useMemo, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
// import { appConfig } from "./appConfig";
import AllBooksContext from "./contexts/AllBooksContext";
import SelectedBookContext from "./contexts/SelectedBookContext";
import SearchInputValueContext from "./contexts/SearchInputValueContext";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const BookDetailsPage = lazy(() =>
  import("./pages/BookDetailsPage/BookDetailsPage")
);
const AddBookPage = lazy(() => import("./pages/AddBookPage/AddBookPage"));

function App() {
  //All Books Provider
  const [allBooks, setAllBooks] = useState(AllBooksContext);

  const ProviderAllBooks = useMemo(
    () => ({ allBooks, setAllBooks }),
    [allBooks, setAllBooks]
  );

  //Search Input Value Provider
  const [searchInputValue, setSearchInputValue] = useState("");

  const ProviderSearchInputValue = useMemo(
    () => ({ searchInputValue, setSearchInputValue }),
    [searchInputValue, setSearchInputValue]
  );

  //Selected Book Provider
  const [selectedBook, setSelectedBook] = useState({});
  const ProviderSelectedBook = useMemo(
    () => ({ selectedBook, setSelectedBook }),
    [selectedBook, setSelectedBook]
  );
  return (
    <>
      <Router>
        <Navbar />

        <AllBooksContext.Provider value={ProviderAllBooks}>
          <SearchInputValueContext.Provider value={ProviderSearchInputValue}>
            <SelectedBookContext.Provider value={ProviderSelectedBook}>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route index path="/" element={<HomePage />} />
                  <Route path="/searchPage" element={<SearchPage />} />
                  <Route path="/search/:isbn" element={<BookDetailsPage />} />
                  <Route path="/addBook" element={<AddBookPage />} />
                </Routes>
              </Suspense>
            </SelectedBookContext.Provider>
          </SearchInputValueContext.Provider>
        </AllBooksContext.Provider>
      </Router>
    </>
  );
}

export default App;

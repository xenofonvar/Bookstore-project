import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
// import { appConfig } from "./appConfig";
import { AppProvider } from "./contexts/BookContext";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));

const App = () => (
  <>
    <AppProvider>
      <Router>
        <Navbar />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/searchPage" element={<SearchPage />} />
          </Routes>
        </Suspense>
      </Router>
    </AppProvider>
  </>
);

export default App;

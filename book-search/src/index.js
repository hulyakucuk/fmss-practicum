import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='favorite' element={<Favorite />} />
    <Route path='book' element={<BookList/>} />
    <Route path='/book/:id' element={<BookDetails/>} />

  </Routes>
  </BrowserRouter>
);


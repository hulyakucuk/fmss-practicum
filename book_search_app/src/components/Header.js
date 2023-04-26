import React from "react";
import { FaSearch } from "react-icons/fa";
import Card from "./Card";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A reader lives a thousand
            <br />
            lives before he dies . . . <br />
            The man who never reads <br />
            lives only one.
          </h1>
        </div>
        <div className="row2">
          <h2>Search Your Book</h2>
          <div className="search">
            <input type="text" placeholder="Enter your book name" />
            <button>
              <FaSearch className="text-purple" size={32} />
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <Card />
      </div>
    </>
  );
};

export default Header;

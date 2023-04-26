import React from "react";
import CardDetail from "./CardDetail";

const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map((item) => {
       let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
       let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
       if(thumbnail!= undefined && amount !=undefined)
       return (
          <>
            <div className="card">
              <img src={thumbnail}/>
              <div className="bottom">
                <h3 className="title">React.js</h3>
                <p className="amount">&8377;3290</p>
              </div>
            </div>
            <CardDetail />
          </>
        );
      })}
    </>
  );
};

export default Card;

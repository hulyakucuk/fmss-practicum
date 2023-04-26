import React,{useState} from "react";
import CardDetail from "./CardDetail";

const Card = ({ book }) => {
// console.log(book);

  const [show,setShow]=useState(false);
// this state will keep track of whether the cardDetail component should be visible or not

  const [selectedItem,setSelectedItem]=useState();
// define a state variable called 'selectedItem' to keep track of the currently clicked item in the 'book' array

  return (
    <>
      {book.map((item) => {
       let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
       let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
       if(thumbnail!= undefined && amount !=undefined)
       return (
          <>
            <div className="card" onClick={()=>setShow(true);setSelectedItem(item)}>
              <img src={thumbnail}/>
              <div className="bottom">
                <h3 className="title">React.js</h3>
                <p className="amount">&8377;3290</p>
              </div>
            </div>
            <CardDetail show={show} item={selectedItem} onClose={()=>setShow(false)} />
          </>
        );
      })}
    </>
  );
};

export default Card;

import React from "react";
import { CartContext } from "../../../context/cartContext";
const ItemCart = (props) => {

  const {
    amountProduct,
    setAmountProduct,
    order,
    setOrder,
    totalOrder,
    setTotalOrder,
  } = React.useContext(CartContext);

  let acum = 0;
  amountProduct.forEach(element => {
    if (props.id === element) {
      acum += 1
    }
  });





  //agrega el producto de uno en uno 
  const addProduct = () => {
    setAmountProduct(
      [...amountProduct, props.id,
      ])
    setTotalOrder(parseInt(totalOrder) + parseInt(props.price))
  }

  //elimina el producto de uno en uno 
  const restProduct = () => {
    let restOneProduct = [...amountProduct]
    const myIndex = restOneProduct.indexOf(props.id);
    if (myIndex !== -1) {
      restOneProduct.splice(myIndex, 1)
    }
    setAmountProduct(restOneProduct)
    let repeat = [...amountProduct]
    repeat = repeat.filter(element => element === props.id);
    if (repeat.length === 1) {
      let results = [...order]
      results = results.filter(element => element.id !== props.id);
      setOrder(results)
    }
    setTotalOrder(parseInt(totalOrder) - parseInt(props.price))
  }


  return (
    <div className="cartItem">

      <img src={props.image} alt={props.name} />
      <div className="dataContainer">
        <div className="left">
          <p>{props.name}</p>
          <div className="right">
            <div className="btnGroup">
              <button className="btnAdd" onClick={addProduct}>
                +
              </button>
              <div className="acum">{acum}</div>
              <button className="btnRest" onClick={restProduct}>
                -
              </button>
            </div>
            <div >
              <p>Total: $ {acum * props.price}</p>
            </div>

          </div>
        </div>
        {/* <div className="right">
          <div>{amount}</div>
          <p>Total: ${amount * price}</p>
        </div> */}
      </div>
    </div>
  );
};

export { ItemCart }
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce( (acc,curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
        (<div className="flex justify-around pt-10">

          <div className="flex flex-col  gap-5">
            {
              cart.map( (item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>

          <div className="flex flex-col">
            <div>
              <div className=" font-bold text-green-500 text-lg pb-5">Your Cart</div>
              <div className=" font-bold uppercase ">Summary</div>
              <p className=" font-bold">
                <span>Total Items : {cart.length}</span>
              </p>
            </div>

            <div>
              <p className=" font-bold pb-5">Total Amount : ${totalAmount}</p>
              <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                CheckOut Now
              </button>
            </div>
          </div>

        </div>) :
        (<div className="flext flex-col justify-center items-center">
          <h1 className=" font-bold">Cart Empty</h1>
          <Link to="/">
            <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  );
};


export default Cart;

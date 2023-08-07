import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from  "../redux/Slices/CartSlice";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex justify-between gap-10">

      <div>
        <img alt="" src={item.image} className="w-[100px] h-[100px]"/>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-gray-700 font-semibold text-left truncate text-lg w-40 mt-1">{item.title}</h1>
        <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
        <div className="flex justify-between gap-10">
          <p>${item.price}</p>
          <div 
          className=" text-lg"
          onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>
      </div>


    </div>
  );
};


export default CartItem;

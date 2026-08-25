import { useDispatch, useSelector } from "react-redux";
import {
  orderIceCream,
  restockIcecream,
} from "../redux/icecreamStore/icecreamStoreActions";

export const OrderIceCream = () => {
  const icecreams = useSelector((state) => state.icecream.icecreams);

  const dispatch = useDispatch();

  return (
    <div className="mx-auto w-full max-w-sm rounded-xl border border-gray-700 bg-gray-900 p-6 text-center shadow-lg">
      <h2 className="text-2xl font-bold text-white">Ice Cream Shop</h2>

      <p className="mt-6 text-gray-400">Ice Creams Available</p>

      <div className="mt-2 text-5xl font-bold text-white">{icecreams}</div>

      <button
        onClick={() => dispatch(orderIceCream())}
        className="mt-6 cursor-pointer rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Order Cake
      </button>

      <button
        onClick={() => dispatch(restockIcecream())}
        className="mt-6 cursor-pointer rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Restock Cake
      </button>
    </div>
  );
};

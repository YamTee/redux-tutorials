import { useDispatch, useSelector } from "react-redux";
import { orderCake, restockCake } from "../redux/cakeStore/cakeStoreActions";
import { bindActionCreators } from "@reduxjs/toolkit";

export const OrderCake = () => {
  const cakes = useSelector((state) => state.cake?.cakes);

  const dispatch = useDispatch();

  const actions = bindActionCreators({ orderCake, restockCake }, dispatch);

  return (
    <div className="mx-auto w-full max-w-sm rounded-xl border border-gray-700 bg-gray-900 p-6 text-center shadow-lg">
      <h2 className="text-2xl font-bold text-white">Cake Shop</h2>

      <p className="mt-6 text-gray-400">Cakes Available</p>

      <div className="mt-2 text-5xl font-bold text-white">{cakes}</div>

      <button
        onClick={() => actions.orderCake()}
        className="mt-6 cursor-pointer rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Order Cake
      </button>

      <button
        onClick={() => actions.restockCake()}
        className="mt-6 cursor-pointer rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Restock Cake
      </button>
    </div>
  );
};

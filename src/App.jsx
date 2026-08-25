import "./App.css";
import { OrderCake } from "./components/OrderCake";
import { OrderIceCream } from "./components/OrderIceCream";

function App() {
  return (
    <>
      <section id="center">
        <OrderCake />
        <OrderIceCream />
      </section>
    </>
  );
}

export default App;

import "./App.css";
import { OrderCake } from "./components/OrderCake";
import { OrderIceCream } from "./components/OrderIceCream";
import { Users } from "./components/Users";

function App() {
  return (
    <>
      <section id="center">
        <OrderCake />
        <OrderIceCream />

        <Users />
      </section>
    </>
  );
}

export default App;

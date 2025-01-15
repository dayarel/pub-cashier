import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { addItem, order } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black text-white">
          Mr. Pub Cashier
        </h1>
      </header>

      <main className="container mx-auto py-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl text-slate-600 text-center font-bold text- text-">
            Menu
          </h2>
          <div className="menu-wrapper grid grid-cols-2 md:grid-cols-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-slate-600 text-center font-bold text- text-">
            Order
          </h2>
          <div className="order-wrapper grid gap-3 mt-10">
            {order.length
              ? order.map((item) => <OrderContent key={item.id} item={item} />)
              : "No articles added to order"}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

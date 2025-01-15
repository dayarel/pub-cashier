import type { OrderItem } from "../types";

type OrderItemProps = {
  item: OrderItem;
};

export default function OrderContent({ item }: OrderItemProps) {
  return (
    <div className="order-item flex align-top">
      <div className="basis-[70px] relative pt-[70px] w-full">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`./assets/${item.img}.jpg`}
          alt={item.name}
        />
      </div>

      <div className="order-item-info relative flex-grow border border-slate-400 p-2">
        <p className="text-slate-600 text-lg font-extrabold">{item.name}</p>
        <p className="font-semibold text-lime-600">£{item.price}</p>
        {item.quantity > 1 && (
          <p className="translate-x-[50%] translate-y-[-50%] absolute flex align-center justify-center top-0 right-0 w-5 h-5 rounded-full bg-teal-500 text-white text-sm">
            {item.quantity}
          </p>
        )}
      </div>
    </div>
  );
}

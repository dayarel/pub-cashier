export default function OrderItem() {
    return (
        <div className="order-item flex align-top">
            <div className="basis-[60px] relative pt-[60px] w-full">
                <img className="absolute top-0 left-0 w-full h-full object-cover" src="./assets/shots.jpg" alt="" />
            </div>
           
            <div className="order-item-info relative flex-grow border border-slate-400 p-2">
                <p className="text-slate-600 text-lg font-extrabold">Single Shot</p>
                <p className="font-semibold text-lime-600">£4.5</p>
                <p className="translate-x-[50%] translate-y-[-50%] absolute flex align-center justify-center top-0 right-0 w-5 h-5 rounded-full bg-teal-500 text-white text-sm">2</p>
            </div>
        </div>
    )
}
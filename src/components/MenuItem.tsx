import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item:MenuItem) => void
}



export default function MenuItem({item,addItem}: MenuItemProps){

    return (
        <button onClick={() => addItem(item)} className="menu-item relative h-0 pb-[100%] cursor-pointer">
            <img className="absolute w-full h-full object-cover" src={`./assets/${item.img}.jpg`} alt={item.name} />
            <div className="menu-item-info absolute w-full bottom-0 pt-20 z-10 bg-gradient-to-t from-black to-transparent linear">
                <p className="text-white px-4 py-2 text-lg text-center">{item.name}</p>
            </div>
        </button>
    )
}
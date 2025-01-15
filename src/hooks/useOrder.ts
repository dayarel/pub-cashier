import {useState} from 'react'
import type { OrderItem,MenuItem } from '../types'
export default function useOrder() {
    const [order,setOrder] = useState<OrderItem[]>([])


    const addItem = (item:MenuItem) => {
       const newOrderItem: OrderItem = {...item, quantity: 1}

       setOrder([...order, newOrderItem]);
    }

    console.log(order);
    return {
        addItem
    }
}
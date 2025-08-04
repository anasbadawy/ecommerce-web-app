"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { CartItem } from './cart-context'

export interface ShippingInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Order {
  id: string
  items: CartItem[]
  shippingInfo: ShippingInfo
  subtotal: number
  shipping: number
  tax: number
  total: number
  orderDate: Date
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
}

interface OrderContextType {
  orders: Order[]
  addOrder: (order: Omit<Order, 'id' | 'orderDate' | 'status'>) => void
  getOrderById: (id: string) => Order | undefined
  updateOrderStatus: (id: string, status: Order['status']) => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([])

  const addOrder = (orderData: Omit<Order, 'id' | 'orderDate' | 'status'>) => {
    const newOrder: Order = {
      ...orderData,
      id: Date.now().toString(),
      orderDate: new Date(),
      status: 'pending'
    }
    setOrders(prev => [newOrder, ...prev])
  }

  const getOrderById = (id: string) => {
    return orders.find(order => order.id === id)
  }

  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders(prev => prev.map(order => 
      order.id === id ? { ...order, status } : order
    ))
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        getOrderById,
        updateOrderStatus
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrders() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider')
  }
  return context
}
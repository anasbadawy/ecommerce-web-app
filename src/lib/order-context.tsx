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
  orderNumber: string
  customerName: string
  customerEmail: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  orderDate: string
  shippedDate?: string
  deliveredDate?: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  shippingAddress: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  paymentMethod: string
  trackingNumber?: string
}

export interface OrderItem {
  id: string
  productId: string
  productName: string
  brand: string
  price: number
  quantity: number
  total: number
}

interface OrderContextType {
  orders: Order[]
  addOrder: (orderData: { items: CartItem[], shippingInfo: ShippingInfo, subtotal: number, shipping: number, tax: number, total: number }) => string
  getOrderById: (id: string) => Order | undefined
  updateOrderStatus: (id: string, status: Order['status']) => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([])

  const addOrder = (orderData: { items: CartItem[], shippingInfo: ShippingInfo, subtotal: number, shipping: number, tax: number, total: number }) => {
    const orderId = Date.now().toString()
    const orderNumber = `ORD-${new Date().getFullYear()}-${orderId.slice(-6)}`
    
    const newOrder: Order = {
      id: orderId,
      orderNumber,
      customerName: `${orderData.shippingInfo.firstName} ${orderData.shippingInfo.lastName}`,
      customerEmail: orderData.shippingInfo.email,
      status: 'pending',
      orderDate: new Date().toISOString(),
      items: orderData.items.map((item, index) => ({
        id: `item_${Date.now()}_${index}`,
        productId: item.product?.id || '',
        productName: item.product?.name || '',
        brand: item.product?.brand || '',
        price: item.product?.price || 0,
        quantity: item.quantity,
        total: (item.product?.price || 0) * item.quantity
      })),
      subtotal: orderData.subtotal,
      shipping: orderData.shipping,
      tax: orderData.tax,
      total: orderData.total,
      shippingAddress: {
        street: orderData.shippingInfo.address,
        city: orderData.shippingInfo.city,
        state: orderData.shippingInfo.state,
        zipCode: orderData.shippingInfo.zipCode,
        country: orderData.shippingInfo.country
      },
      paymentMethod: 'Credit Card'
    }
    setOrders(prev => [newOrder, ...prev])
    return newOrder.id
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
"use client"

import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product } from './dummy-data'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

type CartAction = 
  | { type: 'ADD_TO_CART'; product: Product; quantity: number }
  | { type: 'REMOVE_FROM_CART'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' }

interface CartContextType extends CartState {
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  return { totalItems, totalPrice }
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === action.product.id
      )
      
      let newItems: CartItem[]
      
      if (existingItemIndex > -1) {
        // Update existing item quantity
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        )
      } else {
        // Add new item
        newItems = [...state.items, { product: action.product, quantity: action.quantity }]
      }
      
      const totals = calculateTotals(newItems)
      return {
        items: newItems,
        ...totals
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.product.id !== action.productId)
      const totals = calculateTotals(newItems)
      return {
        items: newItems,
        ...totals
      }
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.product.id === action.productId
          ? { ...item, quantity: Math.max(0, action.quantity) }
          : item
      ).filter(item => item.quantity > 0)
      
      const totals = calculateTotals(newItems)
      return {
        items: newItems,
        ...totals
      }
    }
    
    case 'CLEAR_CART': {
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0
      }
    }
    
    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  
  const addToCart = (product: Product, quantity: number) => {
    dispatch({ type: 'ADD_TO_CART', product, quantity })
  }
  
  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId })
  }
  
  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity })
  }
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
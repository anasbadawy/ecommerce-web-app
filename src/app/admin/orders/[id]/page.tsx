"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { adminOrders, type Order } from "@/lib/dummy-data/orders"
import { 
  ArrowLeft, 
  Package, 
  User, 
  MapPin, 
  CreditCard, 
  Truck, 
  Calendar,
  Edit,
  Save,
  X
} from "lucide-react"

interface OrderDetailsPageProps {
  params: Promise<{ id: string }>
}

export default function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null)
  const [order, setOrder] = useState<Order | null>(null)
  const [isEditingStatus, setIsEditingStatus] = useState(false)
  const [newStatus, setNewStatus] = useState<Order['status']>('pending')

  // Resolve params Promise for Next.js 15
  useEffect(() => {
    params.then(setResolvedParams)
  }, [params])

  // Find order when params are resolved
  useEffect(() => {
    if (resolvedParams) {
      const foundOrder = adminOrders.find(o => o.id === resolvedParams.id)
      if (foundOrder) {
        setOrder(foundOrder)
        setNewStatus(foundOrder.status)
      }
    }
  }, [resolvedParams])

  if (!resolvedParams) {
    return <div className="container mx-auto p-6">Loading...</div>
  }

  if (!order) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <p className="text-gray-600 mb-6">The order you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild>
            <Link href="/admin/orders">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      case 'shipped':
        return 'bg-purple-100 text-purple-800'
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleStatusUpdate = () => {
    // Update the order status (in a real app, this would be an API call)
    const updatedOrder = { ...order, status: newStatus }
    setOrder(updatedOrder)
    setIsEditingStatus(false)
    
    // Show success message (you could use a toast library here)
    alert(`Order status updated to ${newStatus}`)
  }

  const cancelStatusEdit = () => {
    setNewStatus(order.status)
    setIsEditingStatus(false)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/admin/orders">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{order.orderNumber}</h1>
            <p className="text-gray-600">Order ID: {order.id}</p>
          </div>
        </div>
        
        {/* Status Section */}
        <div className="flex items-center gap-3">
          {isEditingStatus ? (
            <div className="flex items-center gap-2">
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value as Order['status'])}
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <Button size="sm" onClick={handleStatusUpdate}>
                <Save className="h-3 w-3 mr-1" />
                Save
              </Button>
              <Button size="sm" variant="outline" onClick={cancelStatusEdit}>
                <X className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <>
              <Badge className={getStatusColor(order.status)}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </Badge>
              <Button size="sm" variant="outline" onClick={() => setIsEditingStatus(true)}>
                <Edit className="h-3 w-3 mr-1" />
                Change Status
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Summary */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Order Timeline */}
            <div>
              <h3 className="font-medium mb-3">Order Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <div>
                    <span className="font-medium">Order Placed:</span>
                    <span className="ml-2 text-gray-600">{formatDate(order.orderDate)}</span>
                  </div>
                </div>
                {order.shippedDate && (
                  <div className="flex items-center gap-3">
                    <Truck className="h-4 w-4 text-blue-500" />
                    <div>
                      <span className="font-medium">Shipped:</span>
                      <span className="ml-2 text-gray-600">{formatDate(order.shippedDate)}</span>
                      {order.trackingNumber && (
                        <span className="ml-4 text-sm text-blue-600">
                          Tracking: {order.trackingNumber}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                {order.deliveredDate && (
                  <div className="flex items-center gap-3">
                    <Package className="h-4 w-4 text-green-500" />
                    <div>
                      <span className="font-medium">Delivered:</span>
                      <span className="ml-2 text-gray-600">{formatDate(order.deliveredDate)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            {/* Products */}
            <div>
              <h3 className="font-medium mb-4">Products Ordered</h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.productName}</h4>
                      <p className="text-sm text-gray-600 mb-1">{item.brand}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${item.total.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Order Totals */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{order.shipping === 0 ? 'FREE' : `$${order.shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>${order.tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-medium">
                <span>Total:</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer & Shipping Info */}
        <div className="space-y-6">
          {/* Customer Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Customer Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium">{order.customerName}</p>
                <p className="text-sm text-gray-600">{order.customerEmail}</p>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-1">
                <p>{order.shippingAddress.street}</p>
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                </p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{order.paymentMethod}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
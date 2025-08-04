"use client"

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { adminOrders, type Order } from "@/lib/dummy-data/orders"
import { ChevronLeft, ChevronRight, Search, Filter, Eye } from "lucide-react"

const ITEMS_PER_PAGE = 10

export default function AdminOrdersPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [dateFromFilter, setDateFromFilter] = useState("")
  const [dateToFilter, setDateToFilter] = useState("")

  // Filter and search logic
  const filteredOrders = useMemo(() => {
    let filtered = adminOrders

    // Search functionality
    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(order => 
        order.orderNumber.toLowerCase().includes(search) ||
        order.customerName.toLowerCase().includes(search) ||
        order.customerEmail.toLowerCase().includes(search) ||
        order.items.some(item => item.productName.toLowerCase().includes(search))
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(order => order.status === statusFilter)
    }

    // Date range filter
    if (dateFromFilter) {
      filtered = filtered.filter(order => 
        new Date(order.orderDate) >= new Date(dateFromFilter)
      )
    }
    if (dateToFilter) {
      filtered = filtered.filter(order => 
        new Date(order.orderDate) <= new Date(dateToFilter)
      )
    }

    return filtered
  }, [searchTerm, statusFilter, dateFromFilter, dateToFilter])

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentOrders = filteredOrders.slice(startIndex, endIndex)

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, statusFilter, dateFromFilter, dateToFilter])

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
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const clearFilters = () => {
    setSearchTerm("")
    setStatusFilter("all")
    setDateFromFilter("")
    setDateToFilter("")
    setCurrentPage(1)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">All Orders</h1>
          <p className="text-gray-600 mt-1">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredOrders.length)} of {filteredOrders.length} orders
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <Label className="block text-sm font-medium mb-1">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Order ID, customer name, or product..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <Label className="block text-sm font-medium mb-1">Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date From */}
            <div>
              <Label className="block text-sm font-medium mb-1">From Date</Label>
              <Input
                type="date"
                value={dateFromFilter}
                onChange={(e) => setDateFromFilter(e.target.value)}
              />
            </div>

            {/* Date To */}
            <div>
              <Label className="block text-sm font-medium mb-1">To Date</Label>
              <Input
                type="date"
                value={dateToFilter}
                onChange={(e) => setDateToFilter(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Actions */}
          <div className="flex items-center gap-2 mt-4">
            <Button onClick={clearFilters} variant="outline" size="sm">
              Clear Filters
            </Button>
            <span className="text-sm text-gray-500">
              {filteredOrders.length !== adminOrders.length && 
                `${filteredOrders.length} of ${adminOrders.length} orders shown`
              }
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentOrders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center p-8 text-gray-500">
                      No orders found matching your criteria
                    </TableCell>
                  </TableRow>
                ) : (
                  currentOrders.map((order) => (
                    <TableRow key={order.id} className="hover:opacity-70 transition-colors duration-200">
                      <TableCell>
                        <div>
                          <div className="font-medium">{order.orderNumber}</div>
                          <div className="text-sm text-gray-500">#{order.id}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{order.customerName}</div>
                          <div className="text-sm text-gray-500">{order.customerEmail}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          {order.items.slice(0, 2).map((item, index) => (
                            <div key={index} className="text-sm">
                              {item.quantity}x {item.productName}
                            </div>
                          ))}
                          {order.items.length > 2 && (
                            <div className="text-xs text-gray-500">
                              +{order.items.length - 2} more items
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {formatDate(order.orderDate)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">${order.total.toFixed(2)}</div>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <Link href={`/admin/orders/${order.id}`}>
                            <Eye className="h-3 w-3" />
                            View
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }
                    
                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                        className="w-8 h-8 p-0"
                      >
                        {pageNum}
                      </Button>
                    )
                  })}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CreditCard, Lock, Truck, Package } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { useOrders, type ShippingInfo } from "@/lib/order-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalItems, totalPrice, clearCart } = useCart()
  const { addOrder } = useOrders()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Form state
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  })

  const [errors, setErrors] = useState<Partial<ShippingInfo>>({})
  
  // Redirect if cart is empty
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="text-center py-16 max-w-md mx-auto">
          <CardContent>
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-semibold mb-2">Cart is Empty</h1>
            <p className="text-muted-foreground mb-6">
              You need items in your cart to proceed to checkout.
            </p>
            <Link href="/products">
              <Button className="w-full">
                Browse Products
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const subtotal = totalPrice
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleInputChange = (field: keyof ShippingInfo, value: string) => {
    setShippingInfo(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ShippingInfo> = {}
    
    if (!shippingInfo.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!shippingInfo.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!shippingInfo.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(shippingInfo.email)) newErrors.email = 'Please enter a valid email'
    if (!shippingInfo.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!shippingInfo.address.trim()) newErrors.address = 'Address is required'
    if (!shippingInfo.city.trim()) newErrors.city = 'City is required'
    if (!shippingInfo.state.trim()) newErrors.state = 'State is required'
    if (!shippingInfo.zipCode.trim()) newErrors.zipCode = 'ZIP code is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Create order
      const orderId = addOrder({
        items: [...items],
        shippingInfo: { ...shippingInfo },
        subtotal,
        shipping,
        tax,
        total
      })

      // Clear cart
      clearCart()

      // Redirect to success page with order ID
      router.push(`/checkout/success?orderId=${orderId}`)
    } catch (error) {
      console.error('Order submission failed:', error)
      alert('Failed to submit order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link 
          href="/cart" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Link>
      </div>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Checkout</h1>
        <p className="text-lg text-muted-foreground">
          Complete your order with secure checkout
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={shippingInfo.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={shippingInfo.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={shippingInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Address Field */}
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className={errors.address ? "border-red-500" : ""}
                  />
                  {errors.address && (
                    <p className="text-sm text-red-500 mt-1">{errors.address}</p>
                  )}
                </div>

                {/* Location Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={errors.city ? "border-red-500" : ""}
                    />
                    {errors.city && (
                      <p className="text-sm text-red-500 mt-1">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={shippingInfo.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className={errors.state ? "border-red-500" : ""}
                    />
                    {errors.state && (
                      <p className="text-sm text-red-500 mt-1">{errors.state}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className={errors.zipCode ? "border-red-500" : ""}
                    />
                    {errors.zipCode && (
                      <p className="text-sm text-red-500 mt-1">{errors.zipCode}</p>
                    )}
                  </div>
                </div>

                {/* Country Field */}
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    value={shippingInfo.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    disabled
                    className="bg-muted"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-2">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.product.brand} • Qty: {item.quantity}
                        </p>
                      </div>
                      <div className="text-sm font-medium ml-2">
                        ${item.product.price.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Calculations */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600 font-medium">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Place Order
                    </>
                  )}
                </Button>

                {/* Security Notice */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                  <Lock className="h-3 w-3" />
                  <span>Secure SSL encryption</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}
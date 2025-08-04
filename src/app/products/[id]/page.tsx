"use client"

import { notFound } from "next/navigation"
import { ArrowLeft, Star, ShoppingCart, Shield, Truck, RotateCcw, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { bestSellingProducts } from "@/lib/dummy-data"
import { useCart } from "@/lib/cart-context"

interface ProductDetailsPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { addToCart, isInCart } = useCart()
  
  // Find the product by ID
  const product = bestSellingProducts.find(p => p.id === params.id)
  
  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart(product)
    // Show success feedback (could be a toast notification)
    const isNowInCart = !isInCart(product.id)
    alert(isNowInCart ? `Added ${product.name} to cart!` : `Removed ${product.name} from cart!`)
  }

  const savings = product.originalPrice ? product.originalPrice - product.price : 0
  const savingsPercentage = product.originalPrice ? Math.round((savings / product.originalPrice) * 100) : 0

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Link 
          href="/products" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-8">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                {product.image.startsWith('http') ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted rounded-lg">
                    <ShoppingCart className="h-24 w-24 text-muted-foreground" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Product Features */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Why Choose This Product?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Third-party tested for purity</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Premium quality ingredients</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">30-day money-back guarantee</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{product.category}</Badge>
              {product.isTopSeller && (
                <Badge variant="default">Best Seller</Badge>
              )}
              {!product.inStock && (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Pricing */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                    <Badge variant="destructive" className="text-sm">
                      Save {savingsPercentage}%
                    </Badge>
                  </>
                )}
              </div>
              
              {savings > 0 && (
                <p className="text-sm text-green-600 font-medium mb-6">
                  You save ${savings.toFixed(2)}!
                </p>
              )}

              {/* Add to Cart Button */}
              <Button 
                className="w-full mb-4" 
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                variant={isInCart(product.id) ? "destructive" : "default"}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {!product.inStock 
                  ? "Out of Stock" 
                  : isInCart(product.id) 
                    ? "Remove from Cart" 
                    : "Add to Cart"
                }
              </Button>
            </CardContent>
          </Card>

          {/* Stock Status */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Availability:</span>
                <span className={`text-sm font-medium ${
                  product.inStock 
                    ? "text-green-600" 
                    : "text-red-600"
                }`}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Product Description */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Product Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </CardContent>
      </Card>

      {/* Product Specifications */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Brand:</span>
                <span>{product.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Category:</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Rating:</span>
                <span>{product.rating}/5.0</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Reviews:</span>
                <span>{product.reviewCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Stock Status:</span>
                <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                  {product.inStock ? "Available" : "Out of Stock"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">SKU:</span>
                <span>SKU-{product.id.padStart(6, '0')}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Products */}
      <Card>
        <CardHeader>
          <CardTitle>Related Products</CardTitle>
          <CardDescription>
            Other products in the {product.category} category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bestSellingProducts
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  href={`/products/${relatedProduct.id}`}
                  className="block"
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                        <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h4 className="font-medium line-clamp-2 mb-2">
                        {relatedProduct.name}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">${relatedProduct.price}</span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                          {relatedProduct.rating}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
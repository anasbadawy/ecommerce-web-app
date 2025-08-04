"use client"

import { useState, useMemo } from "react"
import { Search, Grid, List, Star, ShoppingCart, Package, SlidersHorizontal, X } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { bestSellingProducts, type Product } from "@/lib/dummy-data"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"

type ViewMode = "grid" | "list"
type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc" | "rating" | "bestsellers"

export default function ProductsPage() {
  // State management
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })
  const [showBestSellers, setShowBestSellers] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>("bestsellers")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(bestSellingProducts.map(p => p.category)))]

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = bestSellingProducts.filter(product => {
      // Search filter
      const matchesSearch = searchTerm === "" || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())

      // Category filter
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory

      // Price range filter
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max

      // Best sellers filter
      const matchesBestSellers = !showBestSellers || product.isTopSeller

      return matchesSearch && matchesCategory && matchesPrice && matchesBestSellers
    })

    // Apply sorting
    filtered.sort((a, b) => {
      switch(sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "bestsellers":
          if (a.isTopSeller && !b.isTopSeller) return -1
          if (!a.isTopSeller && b.isTopSeller) return 1
          return b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, priceRange, showBestSellers, sortBy])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All")
    setPriceRange({ min: 0, max: 1000 })
    setShowBestSellers(false)
    setSortBy("bestsellers")
  }

  const activeFiltersCount = [
    searchTerm !== "",
    selectedCategory !== "All", 
    priceRange.min !== 0 || priceRange.max !== 1000,
    showBestSellers
  ].filter(Boolean).length

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">All Products</h1>
        <p className="text-lg text-muted-foreground">
          Discover our complete range of premium supplements and nutrition products
        </p>
        <div className="mt-4 text-sm text-muted-foreground">
          Showing {filteredAndSortedProducts.length} of {bestSellingProducts.length} products
        </div>
      </div>

      {/* Search and Controls */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by product name, description, or brand..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-8 w-8 p-0"
                    onClick={() => setSearchTerm("")}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-2 flex-wrap">
              {/* Sort Dropdown */}
              <div className="w-48">
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bestsellers">Best Sellers First</SelectItem>
                    <SelectItem value="name-asc">Name: A to Z</SelectItem>
                    <SelectItem value="name-desc">Name: Z to A</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Filters Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className={cn(activeFiltersCount > 0 && "border-primary text-primary")}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 text-xs">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>

              {/* View Mode */}
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters Panel */}
      {showFilters && (
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="font-medium mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Price Range Filter */}
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-muted-foreground">Min Price</Label>
                  <Input
                    type="number"
                    min="0"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                    placeholder="$0"
                  />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Max Price</Label>
                  <Input
                    type="number"
                    min="0"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                    placeholder="$1000"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Best Sellers Filter */}
            <div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="bestsellers"
                  checked={showBestSellers}
                  onChange={(e) => setShowBestSellers(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <label htmlFor="bestsellers" className="text-sm font-medium">
                  Show only best sellers
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Products Display */}
      {filteredAndSortedProducts.length === 0 ? (
        <Card className="text-center py-16">
          <CardContent>
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No products found</h2>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={clearFilters}>
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === "list" && (
            <div className="space-y-4">
              {filteredAndSortedProducts.map((product) => (
                <ProductListItem key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

// Product Card Component (Grid View)
function ProductCard({ product }: { product: Product }) {
  const { addToCart, isInCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.id}`}>
        <CardHeader className="p-4 cursor-pointer">
          <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
            <Package className="h-12 w-12 text-muted-foreground" />
          </div>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardDescription className="text-xs">{product.brand}</CardDescription>
              <CardTitle className="text-lg leading-tight line-clamp-2 hover:text-primary transition-colors">
                {product.name}
              </CardTitle>
            </div>
            {product.isTopSeller && (
              <Badge variant="default" className="ml-2">
                Best Seller
              </Badge>
            )}
          </div>
        </CardHeader>
      </Link>
      
      <CardContent className="p-4 pt-0">
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Category Badge */}
        <Badge variant="secondary" className="mb-4">
          {product.category}
        </Badge>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        <div className="w-full space-y-2">
          <Button 
            className="w-full" 
            onClick={handleAddToCart}
            disabled={!product.inStock}
            variant={isInCart(product.id) ? "destructive" : "default"}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {!product.inStock 
              ? "Out of Stock" 
              : isInCart(product.id) 
                ? "Remove from Cart" 
                : "Add to Cart"
            }
          </Button>
          <Link href={`/products/${product.id}`} className="block">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

// Product List Item Component (List View)
function ProductListItem({ product }: { product: Product }) {
  const { addToCart, isInCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-6">
          {/* Product Image */}
          <Link href={`/products/${product.id}`}>
            <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 cursor-pointer hover:bg-muted/80 transition-colors">
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
          </Link>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-muted-foreground">{product.brand}</span>
                  {product.isTopSeller && (
                    <Badge variant="default" className="text-xs">
                      Best Seller
                    </Badge>
                  )}
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Price and Actions */}
              <div className="text-right flex-shrink-0 ml-4">
                <div className="mb-4">
                  <div className="text-2xl font-bold">${product.price}</div>
                  {product.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Button 
                    className="w-full min-w-[120px]"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    variant={isInCart(product.id) ? "destructive" : "default"}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {!product.inStock 
                      ? "Out of Stock" 
                      : isInCart(product.id) 
                        ? "Remove from Cart" 
                        : "Add to Cart"
                    }
                  </Button>
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" className="w-full min-w-[120px]">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
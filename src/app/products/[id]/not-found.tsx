import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProductNotFound() {
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

      <Card className="text-center py-16 max-w-md mx-auto">
        <CardContent>
          <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-semibold mb-2">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            Sorry, we couldn&apos;t find the product you&apos;re looking for. It may have been removed or doesn&apos;t exist.
          </p>
          <div className="space-y-2">
            <Link href="/products">
              <Button className="w-full">
                Browse All Products
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full">
                Go to Homepage
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
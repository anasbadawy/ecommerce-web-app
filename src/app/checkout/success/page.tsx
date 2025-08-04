import Link from "next/link"
import { CheckCircle, Package, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CheckoutSuccessPageProps {
  searchParams: Promise<{ orderId?: string }>
}

export default async function CheckoutSuccessPage({ searchParams }: CheckoutSuccessPageProps) {
  const params = await searchParams
  const orderId = params.orderId
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="text-center py-16 max-w-lg mx-auto">
        <CardContent>
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for your order. You will receive a confirmation email shortly with your order details.
          </p>
          
          <div className="space-y-3">
            <Link href="/products">
              <Button className="w-full">
                <Package className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            {orderId ? (
              <Link href={`/admin/orders/${orderId}`}>
                <Button variant="outline" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  View Order Details
                </Button>
              </Link>
            ) : (
              <Link href="/admin/orders">
                <Button variant="outline" className="w-full">
                  View All Orders
                  <Eye className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
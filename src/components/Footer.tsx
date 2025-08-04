import Link from "next/link"
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">SupplementStore</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for premium supplements and nutrition products. 
              Quality guaranteed, results delivered.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/products" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                All Products
              </Link>
              <Link 
                href="/categories" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Categories
              </Link>
              <Link 
                href="/brands" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Brands
              </Link>
              <Link 
                href="/deals" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Special Deals
              </Link>
              <Link 
                href="/new-arrivals" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                New Arrivals
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Customer Service</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/help" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Help Center
              </Link>
              <Link 
                href="/shipping" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Shipping Info
              </Link>
              <Link 
                href="/returns" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Returns & Exchanges
              </Link>
              <Link 
                href="/faq" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>123 Health Street, Wellness City, WC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>support@supplementstore.com</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Store Hours:</p>
              <p>Mon-Fri: 9AM-8PM</p>
              <p>Sat-Sun: 10AM-6PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 SupplementStore. All rights reserved.
            </div>
            <nav className="flex flex-wrap items-center gap-6">
              <Link 
                href="/privacy" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/admin/orders" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Admin Portal
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
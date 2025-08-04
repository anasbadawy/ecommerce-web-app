import Link from "next/link";
import { ArrowRight, Shield, Truck, Award, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Premium Supplements for
            <span className="text-primary block mt-2">Peak Performance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our carefully curated selection of high-quality supplements designed to help you achieve your health and fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/categories" 
              className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-accent transition-colors"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SupplementStore?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing you with the highest quality supplements and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground text-sm">
                All products are third-party tested for purity and potency
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground text-sm">
                Free shipping on orders over $50, delivered within 2-3 days
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Approved</h3>
              <p className="text-muted-foreground text-sm">
                Products recommended by nutritionists and fitness experts
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">5-Star Reviews</h3>
              <p className="text-muted-foreground text-sm">
                Trusted by thousands of satisfied customers worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Categories</h2>
            <p className="text-lg text-muted-foreground">
              Explore our most popular supplement categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/categories/protein" className="group">
              <div className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">P</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Protein</h3>
                <p className="text-muted-foreground">
                  Whey, casein, and plant-based protein powders
                </p>
              </div>
            </Link>
            
            <Link href="/categories/vitamins" className="group">
              <div className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">V</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Vitamins</h3>
                <p className="text-muted-foreground">
                  Essential vitamins and minerals for daily health
                </p>
              </div>
            </Link>
            
            <Link href="/categories/pre-workout" className="group">
              <div className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-shadow border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">E</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Pre-Workout</h3>
                <p className="text-muted-foreground">
                  Energy and performance boosting supplements
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Health?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have achieved their fitness goals with our premium supplements.
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

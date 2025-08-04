import Link from "next/link"
import { ArrowRight, Users, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    id: "protein",
    name: "Protein Supplements",
    description: "Build and maintain muscle with our premium protein powders",
    icon: "💪",
    productCount: 45,
    trending: true,
    subcategories: ["Whey Protein", "Casein Protein", "Plant-Based", "Protein Bars"]
  },
  {
    id: "vitamins",
    name: "Vitamins & Minerals",
    description: "Essential nutrients for optimal health and wellness",
    icon: "🌟",
    productCount: 67,
    trending: false,
    subcategories: ["Multivitamins", "Vitamin D", "B-Complex", "Omega-3"]
  },
  {
    id: "pre-workout",
    name: "Pre-Workout",
    description: "Boost energy and performance before your workout",
    icon: "⚡",
    productCount: 28,
    trending: true,
    subcategories: ["Energy Boosters", "Focus Enhancers", "Pump Formulas", "Natural Pre-Workout"]
  },
  {
    id: "recovery",
    name: "Recovery & Post-Workout",
    description: "Speed up recovery and reduce muscle soreness",
    icon: "🔄",
    productCount: 32,
    trending: false,
    subcategories: ["BCAA", "Glutamine", "Recovery Drinks", "Sleep Support"]
  },
  {
    id: "weight-management",
    name: "Weight Management",
    description: "Support your weight loss and management goals",
    icon: "⚖️",
    productCount: 23,
    trending: true,
    subcategories: ["Fat Burners", "Appetite Control", "Metabolism Boosters", "Meal Replacements"]
  },
  {
    id: "health",
    name: "General Health",
    description: "Overall wellness and immune system support",
    icon: "🛡️",
    productCount: 41,
    trending: false,
    subcategories: ["Immune Support", "Digestive Health", "Heart Health", "Joint Support"]
  },
  {
    id: "performance",
    name: "Sports Performance",
    description: "Enhance athletic performance and endurance",
    icon: "🏃",
    productCount: 19,
    trending: true,
    subcategories: ["Creatine", "Beta-Alanine", "Nitric Oxide", "Endurance"]
  },
  {
    id: "specialty",
    name: "Specialty Supplements",
    description: "Targeted solutions for specific health goals",
    icon: "🎯",
    productCount: 15,
    trending: false,
    subcategories: ["Nootropics", "Beauty", "Anti-Aging", "Stress Relief"]
  }
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Categories</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of supplement categories designed to support every aspect of your health and fitness journey
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">8</CardTitle>
            <CardDescription>Main Categories</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">270+</CardTitle>
            <CardDescription>Total Products</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">50+</CardTitle>
            <CardDescription>Trusted Brands</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{category.icon}</div>
                <div className="flex gap-2">
                  {category.trending && (
                    <Badge variant="default" className="text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                  <Badge variant="secondary" className="text-xs">
                    <Users className="w-3 h-3 mr-1" />
                    {category.productCount}
                  </Badge>
                </div>
              </div>
              <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
              <CardDescription className="text-sm">
                {category.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium mb-2">Popular Subcategories:</h4>
                  <div className="flex flex-wrap gap-1">
                    {category.subcategories.slice(0, 3).map((sub) => (
                      <Badge key={sub} variant="outline" className="text-xs">
                        {sub}
                      </Badge>
                    ))}
                    {category.subcategories.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{category.subcategories.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <Link href={`/categories/${category.id}`}>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Browse Category
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-muted-foreground mb-6">
            Our nutrition experts are here to help you find the perfect supplements for your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Contact Our Experts
            </Button>
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
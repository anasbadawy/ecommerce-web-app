import { Award, Users, Globe, Heart, Shield, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About SupplementStore</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your trusted partner in health and fitness since 2018. We&apos;re dedicated to providing premium supplements that help you achieve your wellness goals.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To empower individuals on their wellness journey by providing the highest quality supplements, expert guidance, and exceptional customer service. We believe everyone deserves access to premium nutrition that supports their health and fitness goals.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To become the world&apos;s most trusted supplement retailer, known for our commitment to quality, transparency, and customer success. We envision a world where optimal health is accessible to everyone through science-backed nutrition.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Company Stats */}
      <Card className="mb-16">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Our Impact</CardTitle>
          <CardDescription>Trusted by customers worldwide</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Trusted Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Values */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Quality First</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Every product undergoes rigorous third-party testing for purity, potency, and safety. We never compromise on quality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Customer Success</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Your health goals are our priority. We provide expert guidance and support every step of your wellness journey.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Transparency</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Complete transparency in sourcing, manufacturing, and business practices. You deserve to know what you&apos;re putting in your body.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Story */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-3xl text-center mb-4">Our Story</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SupplementStore was founded in 2018 by a team of health enthusiasts and nutrition experts who were frustrated by the lack of transparency and quality in the supplement industry. We started with a simple mission: to provide access to the highest quality supplements backed by science.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What began as a small online store has grown into a trusted destination for health-conscious individuals worldwide. We&apos;ve built relationships with the industry&apos;s most reputable manufacturers and maintain the strictest quality standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we&apos;re proud to serve over 500,000 customers globally, but our commitment remains the same: to help you achieve your health and fitness goals with products you can trust.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Key Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="default">2018</Badge>
                  <span className="text-sm">Company founded</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="default">2019</Badge>
                  <span className="text-sm">First 10,000 customers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="default">2020</Badge>
                  <span className="text-sm">Launched third-party testing program</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="default">2022</Badge>
                  <span className="text-sm">Expanded to international markets</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="default">2024</Badge>
                  <span className="text-sm">500K+ satisfied customers</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Certifications & Partnerships</CardTitle>
          <CardDescription>Recognized by industry leaders for our commitment to quality</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-2" />
              <span className="text-sm font-medium">FDA Registered</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-2" />
              <span className="text-sm font-medium">GMP Certified</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-2" />
              <span className="text-sm font-medium">NSF Certified</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-2" />
              <span className="text-sm font-medium">ISO 9001</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
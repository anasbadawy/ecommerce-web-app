import { Mail, Phone, MapPin, Clock, MessageSquare, HeadphonesIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get in touch with our team. We&apos;re here to help you find the perfect supplements for your health and fitness goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeadphonesIcon className="h-5 w-5" />
                Get in Touch
              </CardTitle>
              <CardDescription>
                Choose the best way to reach us
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Phone Support</h3>
                  <p className="text-sm text-muted-foreground mb-1">+1 (555) 123-4567</p>
                  <p className="text-xs text-muted-foreground">Mon-Fri: 9AM-8PM EST</p>
                </div>
              </div>

              <Separator />

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-1">support@supplementstore.com</p>
                  <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                </div>
              </div>

              <Separator />

              {/* Live Chat */}
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-2">Available 24/7</p>
                  <Button size="sm" variant="outline">
                    Start Chat
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Store Location */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Store Location</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Health Street<br />
                    Wellness City, WC 12345
                  </p>
                </div>
              </div>

              <Separator />

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Store Hours</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Mon-Fri: 9AM-8PM</p>
                    <p>Sat-Sun: 10AM-6PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Card */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find quick answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View FAQ Section
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name *</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name *</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address *</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject *</label>
                  <Input placeholder="What is this regarding?" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea 
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <label className="text-sm text-muted-foreground">
                      I agree to receive email communications from SupplementStore regarding my inquiry
                    </label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Support Options */}
      <div className="mt-12">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Need Immediate Help?</CardTitle>
            <CardDescription>
              Explore these quick support options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Order Support</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Questions about your order, shipping, or returns
                </p>
                <Button variant="outline" size="sm">
                  Order Help
                </Button>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Product Advice</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Get expert recommendations for your goals
                </p>
                <Button variant="outline" size="sm">
                  Get Advice
                </Button>
              </div>

              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Business Inquiries</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Partnerships, wholesale, and press inquiries
                </p>
                <Button variant="outline" size="sm">
                  Contact Business
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
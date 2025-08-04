"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqData, type FAQItem } from "@/lib/dummy-data"
import { Button } from "@/components/ui/button"

export function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(faqData.map(item => item.category)))]

  const filteredFAQs = activeCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory)

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const expandAll = () => {
    setOpenItems(new Set(filteredFAQs.map(item => item.id)))
  }

  const collapseAll = () => {
    setOpenItems(new Set())
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our supplements, shipping, and policies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Expand/Collapse All Controls */}
        <div className="flex justify-end gap-2 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={expandAll}
            className="text-muted-foreground hover:text-primary"
          >
            Expand All
          </Button>
          <span className="text-muted-foreground">|</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={collapseAll}
            className="text-muted-foreground hover:text-primary"
          >
            Collapse All
          </Button>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>

        {/* No results message */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No FAQs found for the selected category.</p>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
          <h3 className="font-semibold text-lg mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Our customer support team is here to help you with any additional questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="/contact">
                Contact Support
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:support@supplementstore.com">
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ 
  item, 
  isOpen, 
  onToggle 
}: { 
  item: FAQItem
  isOpen: boolean
  onToggle: () => void 
}) {
  return (
    <div className="border border-border rounded-lg bg-card">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors rounded-lg"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <h3 className="font-semibold text-lg pr-4">{item.question}</h3>
          <span className="text-xs text-muted-foreground mt-1 inline-block">
            {item.category}
          </span>
        </div>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </button>
      
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-4">
          <div className="pt-2 border-t border-border">
            <p className="text-muted-foreground leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
# E-Commerce Web App

A modern, full-featured e-commerce web application built with Next.js 15, featuring product catalog, shopping cart, checkout process, and comprehensive admin order management system.

## 🚀 Features

### 🛍️ **Customer Experience**
- **Product Catalog**: Browse 18+ products with detailed information
- **Product Details**: Dynamic routing with comprehensive product pages
- **Shopping Cart**: Add/remove products with single quantity per item
- **Checkout Process**: Complete checkout with shipping information
- **Order Confirmation**: Success page with direct order access

### 👨‍💼 **Admin Management**
- **Orders Dashboard**: Comprehensive overview with key metrics
- **All Orders Page**: Paginated table with 25 dummy orders
- **Advanced Filtering**: Search by order ID, customer name, or product name
- **Status Management**: Real-time order status updates
- **Order Details**: Complete order information with timeline
- **Responsive Design**: Mobile-friendly admin interface

## 🛠️ **Technology Stack**

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Context API
- **Package Manager**: npm

## 📦 **Installation & Setup**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ecommerce-web-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ **Build & Production**

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 📁 **Project Structure**

```
src/
├── app/                          # Next.js App Router
│   ├── admin/                    # Admin pages
│   │   ├── orders/              # Orders management
│   │   │   ├── [id]/           # Order details page
│   │   │   └── page.tsx        # All orders page
│   │   └── page.tsx            # Admin dashboard
│   ├── products/                # Product pages
│   │   ├── [id]/               # Product details
│   │   └── page.tsx           # Product catalog
│   ├── cart/                   # Shopping cart
│   ├── checkout/               # Checkout process
│   │   ├── success/           # Order confirmation
│   │   └── page.tsx          # Checkout form
│   ├── about/                 # About page
│   ├── contact/              # Contact page
│   ├── categories/           # Categories page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Shadcn/ui components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── FAQ.tsx        # FAQ component
│   └── ProductCarousel.tsx # Product carousel
├── lib/                  # Utilities and contexts
│   ├── dummy-data/      # Organized dummy data
│   │   ├── products.ts # Product data (18 items)
│   │   ├── orders.ts  # Order data (25 orders)
│   │   ├── faq.ts    # FAQ data
│   │   └── index.ts  # Central exports
│   ├── cart-context.tsx    # Shopping cart state
│   ├── order-context.tsx   # Order management state
│   └── utils.ts           # Utility functions
└── README.md             # Project documentation
```

## 🎯 **Key Pages & Routes**

### **Public Pages**
- `/` - Homepage with featured products
- `/products` - Product catalog with grid/list views
- `/products/[id]` - Individual product details
- `/cart` - Shopping cart management
- `/checkout` - Checkout process
- `/checkout/success` - Order confirmation
- `/about` - About page
- `/contact` - Contact information
- `/categories` - Product categories

### **Admin Pages**
- `/admin` - Admin dashboard with metrics
- `/admin/orders` - All orders with pagination & filtering
- `/admin/orders/[id]` - Detailed order information

## 🛒 **Shopping Flow**

1. **Browse Products** → Product catalog or homepage carousel
2. **View Details** → Click any product for detailed information
3. **Add to Cart** → Single-click add/remove (1 qty per product)
4. **Review Cart** → Manage items, view summary
5. **Checkout** → Enter shipping information
6. **Confirm Order** → View order details immediately
7. **Admin Access** → Track order through admin panel

## 📊 **Admin Features**

### **Orders Management**
- **25 Dummy Orders** with realistic data
- **Pagination**: 10 orders per page
- **Search**: By order ID, customer name, or product name
- **Filters**: Status and date range filtering
- **Status Updates**: Change order status in real-time
- **Order Timeline**: Track order progress with visual indicators

### **Dashboard Metrics**
- Total Revenue calculation
- Order counts by status
- Recent orders display
- Quick navigation to order management

## 🎨 **UI/UX Features**

- **Responsive Design**: Mobile-first approach
- **Dark/Light Themes**: System preference detection
- **Loading States**: Smooth user experience
- **Error Handling**: Graceful error pages
- **Hover Effects**: Interactive feedback
- **Color-coded Status**: Visual order status indicators
- **Professional Layout**: Clean, modern design

## 📱 **Responsive Design**

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced for tablet viewing (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)
- **Large Screens**: Optimized for large displays (1440px+)

## 🚀 **Performance Features**

- **Static Generation**: Pre-rendered pages for fast loading
- **Dynamic Routes**: Efficient product and order pages
- **Optimized Images**: Next.js image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **TypeScript**: Full type safety and IntelliSense

## 🔧 **Development Features**

- **ESLint**: Code quality enforcement
- **TypeScript**: Full type checking
- **Tailwind CSS**: Utility-first styling  
- **Component Library**: Reusable Shadcn/ui components
- **Context API**: Efficient state management

## 📝 **Data Structure**

### **Products**
- 18 realistic supplement products
- Complete product information (name, price, description, etc.)
- Product categories and brands
- Stock status and ratings

### **Orders**
- 25 comprehensive dummy orders
- Order timeline with dates
- Customer information and shipping addresses
- Multiple order statuses and payment methods
- Realistic pricing with tax and shipping

## 🎯 **Future Enhancements**

- User authentication system
- Real database integration
- Payment processing
- Inventory management
- Customer reviews and ratings
- Email notifications
- Advanced analytics
- Multi-language support

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 **License**

This project is for demonstration purposes. See LICENSE file for details.

## 🆘 **Support**

For questions or issues:
1. Check the documentation above
2. Review the code structure
3. Test in development mode
4. Check browser console for errors

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
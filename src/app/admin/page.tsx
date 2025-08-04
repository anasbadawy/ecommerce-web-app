export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Admin Portal</h1>
      <p className="text-lg text-muted-foreground">
        Administrative interface for managing products, orders, customers, and store settings will be implemented here.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Product Management</h3>
          <p className="text-muted-foreground text-sm">Add, edit, and manage supplement inventory</p>
        </div>
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Order Management</h3>
          <p className="text-muted-foreground text-sm">Track and process customer orders</p>
        </div>
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Analytics</h3>
          <p className="text-muted-foreground text-sm">View sales reports and performance metrics</p>
        </div>
      </div>
    </div>
  )
}
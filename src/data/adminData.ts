export interface Order {
  id: string;
  orderId: string;
  customerName: string;
  totalAmount: string;
  deliveryStatus: "out_for_delivery" | "processing" | "delivered" | "ready_for_dispatch" | "order_confirmed";
  date: string;
}

export interface Payment {
  id: string;
  orderId: string;
  paymentId: string;
  customer: string;
  amount: string;
  date: string;
  status: "received" | "pending" | "failed";
  product?: string;
}

export interface Activity {
  id: string;
  title: string;
  time: string;
}

export const demoOrders: Order[] = [
  {
    id: "1",
    orderId: "ORD-2024-001",
    customerName: "Acme Corporation",
    totalAmount: "৳12,450,000/=",
    deliveryStatus: "out_for_delivery",
    date: "2024-01-14",
  },
  {
    id: "2",
    orderId: "ORD-2024-002",
    customerName: "BuildTech Ltd",
    totalAmount: "৳12,450,000/=",
    deliveryStatus: "processing",
    date: "2024-01-14",
  },
  {
    id: "3",
    orderId: "ORD-2024-003",
    customerName: "SafeWork Industries",
    totalAmount: "৳12,450,000/=",
    deliveryStatus: "delivered",
    date: "2024-01-13",
  },
  {
    id: "4",
    orderId: "ORD-2024-004",
    customerName: "Metro Builders",
    totalAmount: "৳8,750,000/=",
    deliveryStatus: "ready_for_dispatch",
    date: "2024-01-12",
  },
  {
    id: "5",
    orderId: "ORD-2024-005",
    customerName: "Prime Construction",
    totalAmount: "৳15,200,000/=",
    deliveryStatus: "order_confirmed",
    date: "2024-01-11",
  },
];

export const demoPayments: Payment[] = [
  {
    id: "1",
    orderId: "ORD-2024-001",
    paymentId: "PAY-001",
    customer: "Acme Corporation",
    amount: "৳450,000",
    date: "2024-01-14",
    status: "received",
    product: "4-Tier Chrome Wire Shelving Unit",
  },
  {
    id: "2",
    orderId: "ORD-2024-002",
    paymentId: "PAY-002",
    customer: "BuildTech Ltd",
    amount: "৳450,000",
    date: "2024-01-14",
    status: "pending",
    product: "Industrial Storage Rack",
  },
  {
    id: "3",
    orderId: "ORD-2024-003",
    paymentId: "PAY-003",
    customer: "SafeWork Industries",
    amount: "৳450,000",
    date: "2024-01-13",
    status: "received",
    product: "Heavy Duty Pallet Rack",
  },
];

export const demoActivities: Activity[] = [
  { id: "1", title: "New order placed", time: "2 minutes ago" },
  { id: "2", title: "Payment received", time: "15 minutes ago" },
  { id: "3", title: "Quote requested", time: "1 hour ago" },
  { id: "4", title: "Order delivered", time: "1 hour ago" },
];

export const orderStatusOptions = [
  { value: "all", label: "All Status" },
  { value: "out_for_delivery", label: "Out for Delivery" },
  { value: "processing", label: "Processing" },
  { value: "delivered", label: "Delivered" },
  { value: "ready_for_dispatch", label: "Ready for Dispatch" },
  { value: "order_confirmed", label: "Order Confirmed" },
];

export const demoOrderDetails = {
  id: "NU-ORD-2026-0041",
  orderType: "Online Purchase",
  orderDate: "15 Jan 2026",
  orderStatus: "processing" as const,
  customer: {
    name: "Md. Rahim Uddin",
    phone: "+8801XXXXXXXXX",
    email: "rahim@email.com",
  },
  product: {
    name: "4-Tier Chrome Wire Shelving Unit",
    category: "Industrial Storage Shelves",
    sku: "CW-4T-001",
    variations: [
      {
        name: "Option A",
        depth: '18"',
        width: '36"',
        height: '72"',
        unitPrice: "৳12,500",
        quantity: 2,
        subtotal: "৳25,000",
      },
      {
        name: "Option B",
        depth: '24"',
        width: '48"',
        height: '36"',
        unitPrice: "৳18,000",
        quantity: 1,
        subtotal: "৳18,000",
      },
    ],
  },
  pricing: {
    subtotal: "৳43,000",
    deliveryCharge: "৳2,000",
    tax: "৳0",
    total: "৳45,000",
  },
  payment: {
    status: "paid" as const,
    method: "Online",
  },
  delivery: {
    address: "House 12, Road 5, Mirpur, Dhaka",
    estimatedDate: "22-25 Jan 2026",
    timeline: [
      { status: "Order Confirmed", completed: true },
      { status: "Payment Received", completed: true },
      { status: "Processing", completed: false },
      { status: "Ready for Dispatch", completed: false },
      { status: "Delivered", completed: false },
    ],
  },
};

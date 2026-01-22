import AdminLayout from "@/components/admin/AdminLayout";
import DashboardStatsCard from "@/components/admin/DashboardStatsCard";
import { Button } from "@/components/ui/button";
import { demoActivities } from "@/data/adminData";
import {
  Wallet,
  Package,
  CheckCircle,
  MessageSquareQuote,
  Bell,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const earningsData = [
  { month: "Jan", value: 150000 },
  { month: "Feb", value: 220000 },
  { month: "Mar", value: 180000 },
  { month: "Apr", value: 280000 },
  { month: "May", value: 320000 },
  { month: "Jun", value: 250000 },
  { month: "Jul", value: 200000 },
  { month: "Aug", value: 280000 },
  { month: "Sept", value: 350000 },
];

const ordersVsQuotesData = [
  { month: "Jan", quotes: 120, orders: 80 },
  { month: "Feb", quotes: 150, orders: 100 },
  { month: "Mar", quotes: 200, orders: 156 },
  { month: "Apr", quotes: 180, orders: 140 },
  { month: "Mar", quotes: 160, orders: 120 },
];

const Dashboard = () => {
  return (
    <AdminLayout>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <DashboardStatsCard
          icon={Wallet}
          label="Total Revenue"
          value="৳12,450,000/="
        />
        <DashboardStatsCard
          icon={Package}
          label="Active Orders"
          value="156"
        />
        <DashboardStatsCard
          icon={CheckCircle}
          label="Completed Orders"
          value="1,247"
        />
        <DashboardStatsCard
          icon={MessageSquareQuote}
          label="Quote Requests"
          value="42"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Total Earnings Chart */}
        <div className="bg-background rounded-xl border border-border p-5">
          <h3 className="text-lg font-semibold mb-1">Total Earnings</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your total commission earned from managing PeerSave circles.
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={earningsData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders vs Quotes Chart */}
        <div className="bg-background rounded-xl border border-border p-5">
          <h3 className="text-lg font-semibold mb-1">Orders Vs Quotes</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Orders vs Quotes this month
          </p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ordersVsQuotesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="quotes" fill="hsl(var(--primary) / 0.3)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="orders" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-6 mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <MessageSquareQuote className="w-4 h-4 text-primary/50" />
              <div>
                <p className="text-xs text-muted-foreground">Quote Request</p>
                <p className="text-xl font-bold">200</p>
                <p className="text-xs text-muted-foreground">Quote Requests this month</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Orders</p>
                <p className="text-xl font-bold">156</p>
                <p className="text-xs text-muted-foreground">Active Orders this month.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-background rounded-xl border border-border p-5">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {demoActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between py-3 border-b border-border last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
              <Button size="sm">View Details</Button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;

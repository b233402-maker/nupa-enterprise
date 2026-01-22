import { Search, Bell } from "lucide-react";

const AdminTopbar = () => {
  return (
    <header className="sticky top-0 z-40 h-16 bg-muted/30 border-b border-border flex items-center justify-between px-6">
      {/* Left Spacer */}
      <div />

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2 w-80">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search here booking, guests..."
            className="bg-transparent border-none outline-none text-sm flex-1 placeholder:text-muted-foreground"
          />
        </div>

        {/* Notifications */}
        <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
          <Bell className="w-5 h-5" />
        </button>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, Pencil, Camera, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, reset } = useForm<ProfileFormData>({
    defaultValues: {
      name: "John Doe",
      email: "Example@gmail.com",
      phone: "+234 812 345 6789",
    },
  });

  const profileData = {
    name: "Minhaz Nokir",
    role: "admin",
    email: "yourname@gmail.com",
    phone: "+234 812 345 6789",
    kycStatus: "Completed",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  };

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile Update:", data);
    setIsEditing(false);
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <AdminLayout>
        <div className="max-w-2xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button onClick={handleCancel} className="hover:bg-muted p-2 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold">Edit Profile</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Profile Picture */}
            <div className="mb-8">
              <Label className="text-sm text-muted-foreground mb-4 block">Edit Profile Picture</Label>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 w-7 h-7 bg-muted rounded-full flex items-center justify-center border-2 border-background"
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div>
                  <p className="font-semibold">{profileData.name}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <BadgeCheck className="w-4 h-4 text-primary" />
                    <span>{profileData.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Form */}
            <div className="space-y-6">
              <h3 className="font-semibold">Edit Informations</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <div className="relative mt-2">
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register("name")}
                    />
                    <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="relative mt-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Example@gmail.com"
                      {...register("email")}
                    />
                    <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Mobile Number</Label>
                  <div className="relative mt-2">
                    <Input
                      id="phone"
                      placeholder="+234 812 345 6789"
                      {...register("phone")}
                    />
                    <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and settings.</p>
        </div>

        {/* Profile Card */}
        <div className="bg-background rounded-xl border border-border p-6">
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 w-6 h-6 bg-muted rounded-full flex items-center justify-center border-2 border-background">
                  <Camera className="w-3 h-3" />
                </button>
              </div>
              <div>
                <p className="text-lg font-semibold">{profileData.name}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  <span>{profileData.role}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" onClick={() => setIsEditing(true)} className="gap-2">
              <Pencil className="w-4 h-4" />
              Edit Profile
            </Button>
          </div>

          <Separator className="my-6" />

          {/* Profile Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">Email account</span>
              <span>{profileData.email}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-muted-foreground">Mobile number</span>
              <span>{profileData.phone}</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-muted-foreground">Kyc Status</span>
              <span>{profileData.kycStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Profile;

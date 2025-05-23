import React from 'react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

const AccountPage: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-semibold mb-4">Please sign in to view your account</h1>
          <Button 
            onClick={() => window.location.href = '/login'}
            variant="primary"
          >
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-500">Email</label>
                <p className="mt-1">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-500">Name</label>
                <p className="mt-1">{user.user_metadata?.name || 'Not set'}</p>
              </div>
              <Button variant="outline" size="sm">
                Edit Profile
              </Button>
            </div>
          </div>
          
          {/* Address Book */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <h2 className="text-xl font-semibold mb-4">Address Book</h2>
            <div className="space-y-4">
              <p className="text-neutral-600">No addresses saved yet.</p>
              <Button variant="outline" size="sm">
                Add New Address
              </Button>
            </div>
          </div>
          
          {/* Payment Methods */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
            <div className="space-y-4">
              <p className="text-neutral-600">No payment methods saved yet.</p>
              <Button variant="outline" size="sm">
                Add Payment Method
              </Button>
            </div>
          </div>
        </div>
        
        {/* Recent Orders */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
            <div className="p-6 text-center text-neutral-600">
              No orders found.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockOrders } from '@/lib/mockData';
import { Package, Clock, CheckCircle } from 'lucide-react';

export const Dashboard = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-secondary text-secondary-foreground';
      case 'pending':
        return 'bg-primary text-primary-foreground';
      case 'cancelled':
        return 'bg-destructive text-destructive-foreground';
      default:
        return '';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-4 w-4" />;
      case 'pending':
        return <Clock className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your order history
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Orders</p>
                  <p className="text-2xl font-bold">{mockOrders.length}</p>
                </div>
                <Package className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
                  <p className="text-2xl font-bold">
                    ${mockOrders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg Order Value</p>
                  <p className="text-2xl font-bold">
                    ${(mockOrders.reduce((sum, order) => sum + order.total, 0) / mockOrders.length).toFixed(2)}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order History */}
        <Card>
          <CardHeader>
            <CardTitle>Order History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockOrders.map((order) => (
                <div 
                  key={order.id}
                  className="border rounded-lg p-4 hover:shadow-card transition-smooth"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">{order.restaurantName}</h3>
                      <p className="text-sm text-muted-foreground">
                        Order #{order.id} • {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 mb-3">
                    {order.items.map((item, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {item.quantity}× {item.name}
                      </p>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-sm font-medium">Total</span>
                    <span className="font-bold text-primary">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

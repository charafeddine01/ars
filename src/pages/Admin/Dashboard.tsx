import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  FileText, 
  Users, 
  BarChart3, 
  Settings,
  Plus,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { SEO } from '../../utils/seo';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Products', value: '6', icon: Package, color: 'bg-blue-500' },
    { label: 'Content Sections', value: '4', icon: FileText, color: 'bg-green-500' },
    { label: 'Admin Users', value: '2', icon: Users, color: 'bg-purple-500' },
    { label: 'Site Views', value: '1.2k', icon: BarChart3, color: 'bg-orange-500' }
  ];

  const quickActions = [
    { 
      title: 'Add New Product', 
      description: 'Create a new sandwich panel product',
      icon: Plus,
      link: '/admin/products/new',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      title: 'Manage Products', 
      description: 'View and edit existing products',
      icon: Package,
      link: '/admin/products',
      color: 'bg-green-600 hover:bg-green-700'
    },
    { 
      title: 'Site Content', 
      description: 'Update homepage and page content',
      icon: FileText,
      link: '/admin/content',
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    { 
      title: 'Settings', 
      description: 'System configuration and preferences',
      icon: Settings,
      link: '/admin/settings',
      color: 'bg-slate-600 hover:bg-slate-700'
    }
  ];

  const recentProducts = [
    { id: 1, name: 'PIR Roof Panel Standard', type: 'Roof', status: 'Active', updated: '2 hours ago' },
    { id: 2, name: 'Rockwool Fire-Rated Panel', type: 'Fire-Rated', status: 'Active', updated: '1 day ago' },
    { id: 3, name: 'Cold Room Panel PIR', type: 'Cold Room', status: 'Draft', updated: '3 days ago' }
  ];

  return (
    <>
      <SEO
        title="Admin Dashboard | Core Clad Industries"
        description="Admin dashboard for managing products and content"
      />

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
                <p className="text-slate-600 mt-1">Welcome back, {user?.email}</p>
              </div>
              <Link
                to="/"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                View Site
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={action.link}
                    className={`block p-6 rounded-xl text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${action.color}`}
                  >
                    <action.icon className="h-8 w-8 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Products */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800">Recent Products</h2>
                <Link
                  to="/admin/products"
                  className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Product</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Type</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Updated</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentProducts.map((product) => (
                    <tr key={product.id} className="border-t border-slate-200 hover:bg-slate-50">
                      <td className="py-4 px-6">
                        <div className="font-medium text-slate-800">{product.name}</div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {product.type}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-600">{product.updated}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-slate-400 hover:text-blue-600 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-slate-400 hover:text-green-600 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-slate-400 hover:text-red-600 transition-colors">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
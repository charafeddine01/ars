import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Package,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Product } from '../../types';
import { SEO } from '../../utils/seo';

const ProductManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType !== 'all') {
      filtered = filtered.filter(product => product.type === filterType);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, filterType]);

  const handleSelectProduct = (productId: string) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map(p => p.id));
    }
  };

  const handleBulkDelete = () => {
    if (selectedProducts.length > 0) {
      const confirmed = window.confirm(`Are you sure you want to delete ${selectedProducts.length} product(s)?`);
      if (confirmed) {
        // In a real app, this would make API calls
        console.log('Deleting products:', selectedProducts);
        setSelectedProducts([]);
      }
    }
  };

  const productTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'roof', label: 'Roof Panels' },
    { value: 'wall', label: 'Wall Panels' },
    { value: 'cold-room', label: 'Cold Room' },
    { value: 'fire-rated', label: 'Fire-Rated' },
    { value: 'doors', label: 'Doors' },
    { value: 'accessories', label: 'Accessories' }
  ];

  return (
    <>
      <SEO
        title="Product Management | Admin Dashboard"
        description="Manage sandwich panel products"
      />

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-800">Product Management</h1>
                <p className="text-slate-600 mt-1">Manage your sandwich panel catalog</p>
              </div>
              <Link
                to="/admin/products/new"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center space-x-2 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Add Product</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Controls */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex flex-1 gap-4 w-full md:w-auto">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="pl-10 pr-8 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none bg-white"
                  >
                    {productTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-slate-600">
                  {filteredProducts.length} products found
                </span>
                
                {selectedProducts.length > 0 && (
                  <button
                    onClick={handleBulkDelete}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center space-x-2 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>Delete ({selectedProducts.length})</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <Package className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">No Products Found</h3>
                <p className="text-slate-500 mb-6">
                  {searchTerm || filterType !== 'all' 
                    ? 'Try adjusting your search or filter criteria'
                    : 'Get started by adding your first product'
                  }
                </p>
                <Link
                  to="/admin/products/new"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center space-x-2 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add First Product</span>
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left py-3 px-6">
                        <input
                          type="checkbox"
                          checked={selectedProducts.length === filteredProducts.length}
                          onChange={handleSelectAll}
                          className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                        />
                      </th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Product</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Type</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Core</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Thickness</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Status</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-slate-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product, index) => (
                      <motion.tr
                        key={product.id}
                        className="border-t border-slate-200 hover:bg-slate-50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <td className="py-4 px-6">
                          <input
                            type="checkbox"
                            checked={selectedProducts.includes(product.id)}
                            onChange={() => handleSelectProduct(product.id)}
                            className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                          />
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <div className="font-medium text-slate-800">{product.name}</div>
                              <div className="text-sm text-slate-500 line-clamp-1">{product.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {product.type.replace('-', ' ').toUpperCase()}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-medium text-slate-800">{product.core}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-slate-600">{product.thickness}mm</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Active
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManagement;
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Grid, List } from 'lucide-react';
import { products } from '../data/products';
import { FilterState } from '../types';
import ProductCard from '../components/UI/ProductCard';
import FilterSidebar from '../components/UI/FilterSidebar';
import { SEO } from '../utils/seo';

const Catalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    type: [],
    core: [],
    thicknessRange: [40, 200],
    facing: [],
    fireClass: [],
    color: [],
    profile: []
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      const searchMatch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));

      // Type filter
      const typeMatch = filters.type.length === 0 || filters.type.includes(product.type);

      // Core filter
      const coreMatch = filters.core.length === 0 || filters.core.includes(product.core);

      // Thickness filter
      const thicknessMatch = product.thickness >= filters.thicknessRange[0] && 
        product.thickness <= filters.thicknessRange[1];

      // Facing filter
      const facingMatch = filters.facing.length === 0 || filters.facing.includes(product.facing);

      // Fire class filter
      const fireClassMatch = filters.fireClass.length === 0 || 
        (product.fireClass && filters.fireClass.includes(product.fireClass));

      // Color filter
      const colorMatch = filters.color.length === 0 || 
        product.color.some(color => filters.color.includes(color));

      // Profile filter
      const profileMatch = filters.profile.length === 0 || filters.profile.includes(product.profile);

      return searchMatch && typeMatch && coreMatch && thicknessMatch && 
             facingMatch && fireClassMatch && colorMatch && profileMatch;
    });
  }, [products, searchTerm, filters]);

  const clearFilters = () => {
    setFilters({
      type: [],
      core: [],
      thicknessRange: [40, 200],
      facing: [],
      fireClass: [],
      color: [],
      profile: []
    });
    setSearchTerm('');
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": typeof window !== 'undefined' ? window.location.origin : ''
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Product Catalog",
        "item": typeof window !== 'undefined' ? window.location.origin + '/catalog' : ''
      }
    ]
  };

  return (
    <>
      <SEO
        title="Sandwich Panel Catalog | PIR, PUR, EPS & Rockwool Panels"
        description="Browse our complete catalog of sandwich panels. PIR roof panels, wall panels, cold room systems, fire-rated panels, and insulated doors. Request pricing today."
        keywords="sandwich panel catalog, PIR panels, PUR panels, EPS panels, rockwool panels, insulated panels, cold room panels, fire rated panels"
        canonical="/catalog"
        schemaData={breadcrumbSchema}
      />

      <div className="pt-20 min-h-screen bg-slate-50">
        <div className="flex">
          {/* Filter Sidebar */}
          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            filters={filters}
            onFilterChange={setFilters}
            onClearFilters={clearFilters}
          />

          {/* Main Content */}
          <div className="flex-1 lg:ml-0">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-slate-200">
              <div className="container mx-auto px-4 py-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                    Product Catalog
                  </h1>
                  <p className="text-xl text-slate-600 mb-6">
                    High-performance sandwich panels for every application. All prices available on request.
                  </p>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                    <p className="text-orange-800 font-medium text-center">
                      🎯 <strong>Prices on Request</strong> - Contact us via WhatsApp or Email for competitive pricing and technical specifications
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Controls */}
            <div className="bg-white shadow-sm">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                  {/* Search and Filter */}
                  <div className="flex flex-1 gap-4 w-full md:w-auto">
                    <button
                      onClick={() => setIsFilterOpen(true)}
                      className="lg:hidden flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Filter className="h-4 w-4" />
                      <span>Filters</span>
                    </button>
                    
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
                  </div>

                  {/* Results and View Toggle */}
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-slate-600">
                      {filteredProducts.length} products found
                    </span>
                    
                    <div className="flex items-center border border-slate-300 rounded-lg">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 ${viewMode === 'grid' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'} rounded-l-lg transition-colors`}
                      >
                        <Grid className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 ${viewMode === 'list' ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-slate-100'} rounded-r-lg transition-colors`}
                      >
                        <List className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto px-4 py-8">
              {filteredProducts.length === 0 ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="h-12 w-12 text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">No Products Found</h3>
                    <p className="text-slate-600 mb-6">
                      Try adjusting your search terms or filters to find what you're looking for.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className={`grid gap-8 ${
                  viewMode === 'grid' 
                    ? 'md:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {filteredProducts.map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      index={index} 
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile spacing for contact bar */}
        <div className="h-20 lg:hidden" />
      </div>
    </>
  );
};

export default Catalog;
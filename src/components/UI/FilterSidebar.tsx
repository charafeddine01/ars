import React from 'react';
import { X, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterState } from '../../types';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onClearFilters
}) => {
  const updateFilter = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = (key: keyof FilterState, value: string) => {
    const currentValues = filters[key] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    updateFilter(key, newValues);
  };

  const filterOptions = {
    type: [
      { value: 'roof', label: 'Roof Panels' },
      { value: 'wall', label: 'Wall Panels' },
      { value: 'cold-room', label: 'Cold Room' },
      { value: 'fire-rated', label: 'Fire-Rated' },
      { value: 'doors', label: 'Doors' },
      { value: 'accessories', label: 'Accessories' }
    ],
    core: [
      { value: 'PIR', label: 'PIR' },
      { value: 'PUR', label: 'PUR' },
      { value: 'EPS', label: 'EPS' },
      { value: 'Rockwool', label: 'Rockwool' }
    ],
    facing: [
      { value: 'Steel 0.5mm', label: 'Steel 0.5mm' },
      { value: 'Steel 0.6mm', label: 'Steel 0.6mm' },
      { value: 'Steel 0.7mm', label: 'Steel 0.7mm' },
      { value: 'Stainless Steel', label: 'Stainless Steel' }
    ],
    fireClass: [
      { value: 'A2-s1,d0', label: 'A2-s1,d0' },
      { value: 'B-s1,d0', label: 'B-s1,d0' }
    ],
    color: [
      { value: 'White', label: 'White' },
      { value: 'Grey', label: 'Grey' },
      { value: 'Blue', label: 'Blue' },
      { value: 'Brown', label: 'Brown' },
      { value: 'Cream', label: 'Cream' },
      { value: 'Stainless', label: 'Stainless' }
    ],
    profile: [
      { value: 'Trapezoidal', label: 'Trapezoidal' },
      { value: 'Micro-ribbed', label: 'Micro-ribbed' },
      { value: 'Flat', label: 'Flat' },
      { value: 'Tongue & Groove', label: 'Tongue & Groove' },
      { value: 'Sectional', label: 'Sectional' }
    ]
  };

  const activeFilterCount = Object.values(filters).reduce((count, value) => {
    if (Array.isArray(value)) {
      return count + value.length;
    }
    return count;
  }, 0);

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className={`fixed lg:sticky top-0 left-0 h-screen lg:h-auto w-80 lg:w-64 bg-white shadow-xl lg:shadow-none border-r border-slate-200 z-50 lg:z-auto overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 lg:pt-0">
          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-600" />
              <h2 className="text-lg font-semibold">Filters</h2>
              {activeFilterCount > 0 && (
                <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-600" />
              <h2 className="text-lg font-semibold">Filters</h2>
              {activeFilterCount > 0 && (
                <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={onClearFilters}
                className="text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            {/* Product Type */}
            <div>
              <h3 className="font-medium text-slate-800 mb-3">Product Type</h3>
              <div className="space-y-2">
                {filterOptions.type.map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.type.includes(option.value)}
                      onChange={() => toggleArrayFilter('type', option.value)}
                      className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm text-slate-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Core Material */}
            <div>
              <h3 className="font-medium text-slate-800 mb-3">Core Material</h3>
              <div className="space-y-2">
                {filterOptions.core.map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.core.includes(option.value)}
                      onChange={() => toggleArrayFilter('core', option.value)}
                      className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm text-slate-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Thickness Range */}
            <div>
              <h3 className="font-medium text-slate-800 mb-3">Thickness (mm)</h3>
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.thicknessRange[0]}
                    onChange={(e) => updateFilter('thicknessRange', [+e.target.value, filters.thicknessRange[1]])}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.thicknessRange[1]}
                    onChange={(e) => updateFilter('thicknessRange', [filters.thicknessRange[0], +e.target.value])}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <input
                  type="range"
                  min="40"
                  max="200"
                  step="10"
                  value={filters.thicknessRange[1]}
                  onChange={(e) => updateFilter('thicknessRange', [filters.thicknessRange[0], +e.target.value])}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Facing Material */}
            <div>
              <h3 className="font-medium text-slate-800 mb-3">Facing Material</h3>
              <div className="space-y-2">
                {filterOptions.facing.map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.facing.includes(option.value)}
                      onChange={() => toggleArrayFilter('facing', option.value)}
                      className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm text-slate-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Fire Classification */}
            <div>
              <h3 className="font-medium text-slate-800 mb-3">Fire Classification</h3>
              <div className="space-y-2">
                {filterOptions.fireClass.map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.fireClass.includes(option.value)}
                      onChange={() => toggleArrayFilter('fireClass', option.value)}
                      className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm text-slate-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Available Colors */}
            <div>
              <h3 className="font-medium text-slate-800 mb-3">Available Colors</h3>
              <div className="space-y-2">
                {filterOptions.color.map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.color.includes(option.value)}
                      onChange={() => toggleArrayFilter('color', option.value)}
                      className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                    />
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-4 h-4 rounded-full border border-slate-300"
                        style={{
                          backgroundColor: option.value.toLowerCase() === 'white' ? '#ffffff' :
                                         option.value.toLowerCase() === 'grey' ? '#9ca3af' :
                                         option.value.toLowerCase() === 'blue' ? '#3b82f6' :
                                         option.value.toLowerCase() === 'brown' ? '#a3562a' :
                                         option.value.toLowerCase() === 'cream' ? '#fef3c7' :
                                         option.value.toLowerCase() === 'stainless' ? '#cbd5e1' : '#e5e7eb'
                        }}
                      />
                      <span className="text-sm text-slate-700">{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Profile Type */}
            <div>
              <h3 className="font-medium text-slate-800 mb-3">Profile Type</h3>
              <div className="space-y-2">
                {filterOptions.profile.map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.profile.includes(option.value)}
                      onChange={() => toggleArrayFilter('profile', option.value)}
                      className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm text-slate-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Clear Button */}
          {activeFilterCount > 0 && (
            <div className="lg:hidden mt-8 pt-6 border-t border-slate-200">
              <button
                onClick={onClearFilters}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-lg font-medium transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default FilterSidebar;
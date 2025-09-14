import React from 'react';
import { MessageSquare, Mail, Download, Thermometer, Shield, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '../../types';
import { createWhatsAppUrl, createEmailUrl, getProductContactMessage } from '../../utils/contact';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const handleWhatsApp = () => {
    const message = getProductContactMessage(product.name);
    window.open(createWhatsAppUrl(message), '_blank');
  };

  const handleEmail = () => {
    const subject = `Inquiry - ${product.name}`;
    const body = getProductContactMessage(product.name);
    window.open(createEmailUrl(subject, body), '_blank');
  };

  const handleDatasheet = () => {
    if (product.datasheet) {
      window.open(product.datasheet, '_blank');
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {product.type.replace('-', ' ').toUpperCase()}
          </span>
        </div>
        {product.fireClass && (
          <div className="absolute top-4 left-4">
            <div className="bg-red-600 text-white px-2 py-1 rounded flex items-center space-x-1">
              <Shield className="h-3 w-3" />
              <span className="text-xs font-medium">{product.fireClass}</span>
            </div>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Key Specifications */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Layers className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600">Core & Thickness</span>
            </div>
            <span className="font-medium text-slate-800">
              {product.core} {product.thickness > 0 ? `${product.thickness}mm` : ''}
            </span>
          </div>

          {(product.rValue || product.uValue) && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Thermometer className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-slate-600">Thermal</span>
              </div>
              <span className="font-medium text-slate-800">
                {product.rValue ? `R${product.rValue}` : `U${product.uValue}`}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Facing</span>
            <span className="font-medium text-slate-800">{product.facing}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Profile</span>
            <span className="font-medium text-slate-800">{product.profile}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Colors</span>
            <div className="flex items-center space-x-1">
              {product.color.slice(0, 3).map((color, idx) => (
                <div
                  key={idx}
                  className="w-4 h-4 rounded-full border border-slate-300"
                  style={{
                    backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                                   color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#9ca3af' :
                                   color.toLowerCase() === 'blue' ? '#3b82f6' :
                                   color.toLowerCase() === 'brown' ? '#a3562a' :
                                   color.toLowerCase() === 'cream' ? '#fef3c7' :
                                   color.toLowerCase() === 'stainless' ? '#cbd5e1' : '#e5e7eb'
                  }}
                />
              ))}
              {product.color.length > 3 && (
                <span className="text-xs text-slate-500">+{product.color.length - 3}</span>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Notice */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
          <p className="text-orange-800 text-sm font-medium text-center">
            🎯 Prices on Request - Contact for Quote
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
          >
            <MessageSquare className="h-4 w-4" />
            <span>WhatsApp</span>
          </button>
          
          <button
            onClick={handleEmail}
            className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </button>
        </div>

        {product.datasheet && (
          <button
            onClick={handleDatasheet}
            className="w-full mt-3 flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Download Datasheet</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-orange-50 flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <motion.div
            className="text-8xl md:text-9xl font-bold text-slate-300 mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            404
          </motion.div>
          <motion.div
            className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Search className="h-12 w-12 text-orange-600" />
          </motion.div>
        </div>

        <motion.h1
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-lg text-slate-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to our products and solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            to="/"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            <Home className="h-5 w-5" />
            <span>Go Home</span>
          </Link>
          
          <Link
            to="/catalog"
            className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <Search className="h-5 w-5" />
            <span>Browse Catalog</span>
          </Link>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-slate-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-sm text-slate-500 mb-4">
            Looking for something specific? Try these popular sections:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link to="/catalog?type=roof" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">
              Roof Panels
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/catalog?type=wall" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">
              Wall Panels
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/catalog?type=cold-room" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">
              Cold Room
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/contact" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.button
          onClick={() => window.history.back()}
          className="mt-6 text-sm text-slate-500 hover:text-slate-700 inline-flex items-center space-x-1 hover:underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Go back to previous page</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFound;
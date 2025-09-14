import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createWhatsAppUrl, createEmailUrl } from '../../utils/contact';

const ContactBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your sandwich panels. Could you please provide more information about your products and pricing?";
    window.open(createWhatsAppUrl(message), '_blank');
  };

  const handleEmail = () => {
    const subject = "Inquiry - Sandwich Panels";
    const body = `Hello,

I'm interested in learning more about your sandwich panel solutions. Please provide information about:

- Product catalog and specifications
- Pricing information  
- Lead times
- Technical support

Thank you for your time.

Best regards,`;
    
    window.open(createEmailUrl(subject, body), '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+96178839001', '_self');
  };

  return (
    <>
      {/* Desktop Floating Contact */}
      <div className="hidden lg:block fixed right-6 bottom-6 z-40">
        <AnimatePresence>
          {!isExpanded ? (
            <motion.button
              onClick={() => setIsExpanded(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <MessageSquare className="h-6 w-6" />
            </motion.button>
          ) : (
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-4 w-64"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-800">Contact Us</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 hover:bg-slate-100 rounded"
                >
                  <X className="h-4 w-4 text-slate-500" />
                </button>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center space-x-3 w-full p-3 rounded-lg bg-green-50 hover:bg-green-100 text-green-700 transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span className="font-medium">WhatsApp</span>
                </button>
                
                <button
                  onClick={handleEmail}
                  className="flex items-center space-x-3 w-full p-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">Email</span>
                </button>
                
                <button
                  onClick={handlePhone}
                  className="flex items-center space-x-3 w-full p-3 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">Call Now</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Bottom Contact Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-slate-200 z-40">
        <div className="flex">
          <button
            onClick={handleWhatsApp}
            className="flex-1 flex items-center justify-center space-x-2 p-4 text-green-600 hover:bg-green-50 transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="font-medium text-sm">WhatsApp</span>
          </button>
          
          <button
            onClick={handleEmail}
            className="flex-1 flex items-center justify-center space-x-2 p-4 text-blue-600 hover:bg-blue-50 transition-colors border-l border-r border-slate-200"
          >
            <Mail className="h-5 w-5" />
            <span className="font-medium text-sm">Email</span>
          </button>
          
          <button
            onClick={handlePhone}
            className="flex-1 flex items-center justify-center space-x-2 p-4 text-orange-600 hover:bg-orange-50 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium text-sm">Call</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactBar;
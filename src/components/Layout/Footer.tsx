import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-600 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Core Clad Industries L.t.d</h3>
                <p className="text-sm text-slate-300">High-Performance Solutions</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading manufacturer of high-performance sandwich panels for industrial and commercial construction. 
              Quality, innovation, and reliability in every panel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-slate-300 hover:text-orange-400 transition-colors text-sm">
                Home
              </Link>
              <Link to="/catalog" className="block text-slate-300 hover:text-orange-400 transition-colors text-sm">
                Product Catalog
              </Link>
              <Link to="/about" className="block text-slate-300 hover:text-orange-400 transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-orange-400 transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <nav className="space-y-2">
              <Link to="/catalog?type=roof" className="block text-slate-300 hover:text-orange-400 transition-colors text-sm">
                Roof Panels
              </Link>
              <Link to="/catalog?type=wall" className="block text-slate-300 hover:text-orange-400 transition-colors text-sm">
                Wall Panels
              </Link>
              <Link to="/catalog?type=cold-room" className="block text-slate-300 hover:text-orange-400 transition-colors text-sm">
                Cold Room Panels
              </Link>
              <Link to="/catalog?type=fire-rated" className="block text-slate-300 hover:text-orange-400 transition-colors text-sm">
                Fire-Rated Panels
              </Link>
              <Link to="/catalog?type=doors" className="block text-slate-300 hover:text-orange-400 transition-colors text-sm">
                Insulated Doors
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-slate-300">+961 76 958 065</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-slate-300">info@coreclad.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-orange-400 mt-0.5" />
                <span className="text-slate-300">
                  As Sarafand, Lebanon<br />
                  Tebna Industrial City 
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="h-4 w-4 text-orange-400" />
                <span className="text-slate-300">Mon-Fri: 9AM-5PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Core Clad Industries L.t.d. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
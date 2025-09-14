import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { ContactFormData } from '../types';
import { createWhatsAppUrl, createEmailUrl, getQuoteContactMessage } from '../utils/contact';
import { SEO } from '../utils/seo';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    application: '',
    product: '',
    quantity: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        application: '',
        product: '',
        quantity: '',
        message: '',
        consent: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleWhatsAppQuote = () => {
    const message = getQuoteContactMessage(formData.product || undefined, formData.quantity || undefined);
    window.open(createWhatsAppUrl(message), '_blank');
  };

  const handleEmailQuote = () => {
    const subject = "Quote Request - Sandwich Panels";
    const body = getQuoteContactMessage(formData.product || undefined, formData.quantity || undefined);
    window.open(createEmailUrl(subject, body), '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+96178839001', '+96178839001'],
      action: () => window.open('tel:+96178839001'),
      actionText: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['sales@corecladindustries.com', 'support@corecladindustries.com'],
      action: () => window.open('mailto:sales@corecladindustries.com'),
      actionText: 'Send Email'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      details: ['Quick response', '24/7 support'],
      action: handleWhatsAppQuote,
      actionText: 'Chat Now'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Tebna Industrial City As Sarafand, Lebanon'],
      action: () => window.open('https://maps.google.com'),
      actionText: 'Get Directions'
    }
  ];

  const productTypes = [
    'Roof Panels',
    'Wall Panels', 
    'Cold Room Panels',
    'Fire-Rated Panels',
    'Insulated Doors',
    'Accessories',
    'Custom Solution'
  ];

  const applications = [
    'Industrial Warehouse',
    'Cold Storage',
    'Commercial Building',
    'Agricultural Structure',
    'Data Center',
    'Clean Room',
    'Other'
  ];

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
        "name": "Contact",
        "item": typeof window !== 'undefined' ? window.location.origin + '/contact' : ''
      }
    ]
  };

  return (
    <>
      <SEO
        title="Contact Us | Get Quote for Sandwich Panels"
        description="Contact our experts for sandwich panel quotes and technical support. Phone, email, WhatsApp available. 1-day response guaranteed on all inquiries."
        keywords="contact sandwich panel manufacturer, get quote, technical support, pricing information"
        canonical="/contact"
        schemaData={breadcrumbSchema}
      />

      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Ready to discuss your project? Our experts are here to help you find the perfect 
                sandwich panel solution for your needs.
              </p>
              <div className="inline-flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
                <Clock className="h-5 w-5" />
                <span>1-Day Response Guarantee</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Multiple Ways to Connect
              </h2>
              <p className="text-lg text-slate-600">
                Choose your preferred method to get in touch with our team
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-600 text-sm">{detail}</p>
                    ))}
                  </div>
                  <button
                    onClick={info.action}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
                  >
                    {info.actionText}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">
                  Need a Quick Quote?
                </h3>
                <p className="text-orange-700 mb-6">
                  Skip the form and contact us directly for immediate assistance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleWhatsAppQuote}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>WhatsApp Quote</span>
                  </button>
                  <button
                    onClick={handleEmailQuote}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Email Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  Detailed Project Inquiry
                </h2>
                <p className="text-lg text-slate-600">
                  Provide details about your project for a comprehensive quote and technical recommendations
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl shadow-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <h4 className="text-green-800 font-semibold">Thank you!</h4>
                      <p className="text-green-700 text-sm">Your inquiry has been submitted. We'll respond within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                    <div>
                      <h4 className="text-red-800 font-semibold">Submission Failed</h4>
                      <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="+96178839001"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                        Project Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="City, State/Country"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="application" className="block text-sm font-medium text-slate-700 mb-2">
                        Application Type
                      </label>
                      <select
                        id="application"
                        name="application"
                        value={formData.application}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Select application</option>
                        {applications.map(app => (
                          <option key={app} value={app}>{app}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                        Product Interest
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Select product type</option>
                        {productTypes.map(product => (
                          <option key={product} value={product}>{product}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">
                      Estimated Quantity / Area
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="e.g., 5000 sq ft, 200 panels, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Details & Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Please describe your project requirements, timeline, special considerations, etc."
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor="consent" className="text-sm text-slate-600">
                      I agree to receive communications regarding my inquiry and consent to the processing of my personal data for quote preparation and project consultation purposes. *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.consent}
                      className={`w-full px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-300 ${
                        isSubmitting || !formData.consent
                          ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                          : 'bg-orange-600 hover:bg-orange-700 text-white hover:shadow-lg transform hover:scale-105'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="h-5 w-5" />
                      )}
                      <span>{isSubmitting ? 'Submitting...' : 'Send Inquiry'}</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SLA Promise */}
        <section className="py-12 bg-gradient-to-r from-orange-600 to-orange-700">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Our Service Promise
              </h3>
              <p className="text-lg text-orange-100 mb-6">
                Every inquiry receives a detailed response within 24 hours during business days. 
                Our experts will provide technical recommendations, pricing information, and next steps.
              </p>
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                <Clock className="h-6 w-6 text-white" />
                <span className="text-white font-semibold">24-Hour Response Guarantee</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile spacing for contact bar */}
        <div className="h-20 lg:hidden" />
      </div>
    </>
  );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Factory, 
  Shield, 
  Target, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Briefcase,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../utils/seo';

const About: React.FC = () => {
  const achievements = [
    { number: '25+', label: 'Years Experience' },
    { number: '10,000+', label: 'Projects Completed' },
    { number: '50+', label: 'Countries Served' },
    { number: '500M+', label: 'Sq Ft Installed' }
  ];

  const capabilities = [
    {
      icon: Factory,
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art production facilities with automated systems and quality control at every stage.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 certified processes ensuring consistent quality and performance standards.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced engineers, designers, and technicians dedicated to innovative solutions.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide distribution network with local support and technical expertise.'
    }
  ];

  const qualityFeatures = [
    'ISO 9001:2015 Quality Management',
    'CE Marking & European Standards',
    'Fire Safety Certifications',
    'Thermal Performance Testing',
    'Environmental Impact Assessment',
    'Continuous Improvement Process'
  ];

  const teamMembers = [
    {
      name: 'Engineering Department',
      role: 'Product Development',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Innovative design and testing'
    },
    {
      name: 'Manufacturing Team',
      role: 'Production Excellence',
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Precision manufacturing processes'
    },
    {
      name: 'Quality Control',
      role: 'Standards Compliance',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Rigorous testing protocols'
    },
    {
      name: 'Technical Support',
      role: 'Customer Solutions',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert consultation services'
    }
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
        "name": "About Us",
        "item": typeof window !== 'undefined' ? window.location.origin + '/about' : ''
      }
    ]
  };

  return (
    <>
      <SEO
        title="About Us | Leading Sandwich Panel Manufacturer"
        description="Learn about our 25+ years of experience manufacturing high-performance sandwich panels. ISO certified quality, global reach, and innovative solutions for industrial construction."
        keywords="sandwich panel manufacturer, industrial construction, ISO certified, quality manufacturing, experienced team"
        canonical="/about"
        schemaData={breadcrumbSchema}
      />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1920)'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Built on Excellence
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8">
                Over 25 years of innovation in high-performance sandwich panel manufacturing, 
                serving industries worldwide with uncompromising quality.
              </p>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {achievements.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Founded in 1998, Core Clad Industries L.t.d began with a simple mission: to revolutionize 
                    the construction industry with high-performance, sustainable building solutions. 
                    What started as a small manufacturing operation has grown into a global leader 
                    in sandwich panel technology.
                  </p>
                  <p>
                    Our commitment to innovation has driven us to develop cutting-edge products 
                    that exceed industry standards. From our first PIR roof panel to today's 
                    comprehensive range of specialized solutions, we've consistently pushed the 
                    boundaries of thermal performance, fire safety, and structural integrity.
                  </p>
                  <p>
                    Today, our panels protect and insulate millions of square feet of industrial, 
                    commercial, and specialized facilities across 50+ countries. Every panel we 
                    manufacture carries forward our legacy of quality, innovation, and reliability.
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 mt-8">
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-orange-600" />
                    <span className="font-semibold text-slate-800">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-orange-600" />
                    <span className="font-semibold text-slate-800">CE Marked</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our Manufacturing Facility"
                  className="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-600 rounded-2xl -z-10" />
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-slate-200 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Our Capabilities
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From design to delivery, we maintain complete control over quality and performance 
                through integrated manufacturing and quality systems.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{capability.title}</h3>
                  <p className="text-slate-600">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Control */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Quality Control Testing"
                  className="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-600 rounded-2xl -z-10" />
              </motion.div>

              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
                  Quality Control
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Our commitment to quality is unwavering. Every panel undergoes rigorous testing 
                  and inspection to ensure it meets our exacting standards and international regulations.
                </p>
                
                <div className="space-y-4">
                  {qualityFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Target className="h-6 w-6 text-orange-600" />
                    <h3 className="text-lg font-bold text-orange-800">Our Quality Promise</h3>
                  </div>
                  <p className="text-orange-700">
                    Every panel comes with comprehensive documentation, performance guarantees, 
                    and full traceability from raw materials to final installation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team & Facility */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Expert Team & Modern Facility
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our success is built on the expertise of our people and the capability of our facilities. 
                Meet the teams that make excellence possible.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h3>
                    <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                    <p className="text-slate-600 text-sm">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Facility Stats */}
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-2">150,000</div>
                <p className="text-slate-600">Sq Ft Manufacturing Space</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-2">24/7</div>
                <p className="text-slate-600">Production Capability</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-2">5-10</div>
                <p className="text-slate-600">Days Lead Time</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800 to-orange-800">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Experience the Difference
              </h2>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                Ready to work with industry leaders? Let's discuss how our expertise 
                and quality can enhance your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  <Briefcase className="h-5 w-5" />
                  <span>Start Your Project</span>
                </Link>
                <Link
                  to="/catalog"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <span>View Products</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
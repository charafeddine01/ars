import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Thermometer, 
  Zap, 
  Award,
  Building2,
  Factory,
  Home as HomeIcon,
  Snowflake,
  Flame,
  DoorOpen
} from 'lucide-react';
import { SEO, organizationSchema } from '../utils/seo';

const Home: React.FC = () => {
  const categories = [
    {
      icon: Factory,
      title: 'Roof Panels',
      description: 'High-performance roofing solutions with superior weather resistance',
      link: '/catalog?type=roof',
      image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Factory,
      title: 'Wall Panels',
      description: 'Insulated wall systems for industrial and commercial buildings',
      link: '/catalog?type=wall',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Snowflake,
      title: 'Cold Room',
      description: 'Specialized panels for refrigeration and cold storage applications',
      link: '/catalog?type=cold-room',
      image: 'https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Flame,
      title: 'Fire-Rated',
      description: 'Non-combustible rockwool panels for maximum fire protection',
      link: '/catalog?type=fire-rated',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: DoorOpen,
      title: 'Insulated Doors',
      description: 'Heavy-duty doors with excellent thermal performance',
      link: '/catalog?type=doors',
      image: 'https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: HomeIcon,
      title: 'Accessories',
      description: 'Flashing, trims, and installation components',
      link: '/catalog?type=accessories',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'ISO certified manufacturing with rigorous quality control at every stage'
    },
    {
      icon: Thermometer,
      title: 'Superior Insulation',
      description: 'Industry-leading thermal performance with R-values up to 9.0'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick production cycles and efficient logistics network'
    },
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'Proven track record in industrial construction solutions'
    }
  ];

  const applications = [
    'Industrial Warehouses',
    'Cold Storage Facilities',
    'Commercial Buildings',
    'Agricultural Structures',
    'Data Centers',
    'Clean Room Facilities'
  ];

  const projects = [
    {
      title: 'Cold Storage Complex',
      location: 'Industrial District',
      image: 'https://images.pexels.com/photos/3992204/pexels-photo-3992204.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: '50,000 sq ft refrigeration facility'
    },
    {
      title: 'Manufacturing Plant',
      location: 'Tech Park',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'High-performance wall and roof system'
    },
    {
      title: 'Distribution Center',
      location: 'Logistics Hub',
      image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: '100,000 sq ft facility with fire-rated panels'
    },
    {
      title: 'Agricultural Complex',
      location: 'Rural Zone',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Multi-building farm storage solution'
    }
  ];

  return (
    <>
      <SEO
        title="Industrial Sandwich Panels | High-Performance Building Solutions"
        description="Leading manufacturer of PIR, PUR, EPS & Rockwool sandwich panels. Roof panels, wall panels, cold room solutions, fire-rated systems & insulated doors."
        keywords="sandwich panels manufacturer, PIR panels, rockwool panels, cold room panels, insulated doors, industrial construction"
        schemaData={organizationSchema}
      />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1920)'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  High-Performance
                  <span className="text-orange-400"> Sandwich Panels</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                  Premium insulated panels for industrial, commercial, and specialized applications. 
                  Superior thermal performance, fire safety, and architectural excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/catalog"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
                  >
                    <span>View Catalog</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Animated background elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-orange-400/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-400/10 rounded-full animate-bounce" />
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Our Product Range
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Complete solutions for every construction need. From high-performance roofing to specialized cold storage systems.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={category.link} className="block">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <category.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-slate-600 mb-4">{category.description}</p>
                        <div className="flex items-center text-orange-600 font-medium">
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
                Why Choose Our Panels?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Industry-leading performance, quality, and service backed by decades of manufacturing excellence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                      <feature.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
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
                  Versatile Applications
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Our sandwich panels are engineered for diverse industrial and commercial applications, 
                  providing reliable performance in demanding environments.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {applications.map((app, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-orange-600 rounded-full" />
                      <span className="text-slate-700 font-medium">{app}</span>
                    </motion.div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold"
                >
                  <span>Learn More About Our Capabilities</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Industrial Applications"
                  className="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-600 rounded-2xl -z-10" />
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-slate-200 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
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
                Recent Projects
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Discover how our sandwich panels have transformed industrial and commercial spaces worldwide.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-800 mb-1">{project.title}</h3>
                      <p className="text-orange-600 text-sm font-medium mb-2">{project.location}</p>
                      <p className="text-slate-600 text-sm">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                <span>View More Projects</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                Get expert consultation and competitive pricing for your sandwich panel requirements. 
                Our team is ready to help you find the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/catalog"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center transition-all duration-300"
                >
                  Browse Catalog
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
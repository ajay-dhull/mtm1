import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Target, Users, TrendingUp, Star, Calendar, Trophy, Phone, Lightbulb, Target as Aim } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const quickLinks = [
  { icon: BookOpen, title: 'About Us', to: '/about', color: 'bg-blue-500' },
  { icon: Target, title: 'Facilities', to: '/facilities', color: 'bg-green-500' },
  { icon: Users, title: 'Student Life', to: '/student-life', color: 'bg-purple-500' },
  { icon: TrendingUp, title: 'Contact Us', to: '/contact', color: 'bg-red-500' }
];

const facilities = [
  {
    title: 'Science Lab',
    image: '/assets/mtm science lab.jpg',
    description: 'Advanced science experimentation facilities',
    details: 'Fully equipped with modern apparatus, chemistry sets, biology specimens, and physics instruments for practical learning'
  },
  {
    title: 'Creative Arts Studio',
    image: '/assets/mtm art.jpg',
    description: 'A space for creativity and self-expression',
    details: 'Includes painting, sculpture, music, drama, and digital arts to encourage students’ artistic talents'
  },
  {
    title: 'Library',
    image: '/assets/mtm library.jpg',
    description: 'Extensive collection of books and resources',
    details: 'Over 3000 books, digital resources, and quiet study areas for focused learning'
  },
  {
    title: 'Playground',
    image: '/assets/mtm playground.jpg',
    description: 'Comprehensive sports facilities',
    details: 'Multiple sports courts, athletic track, and modern equipment for physical education'
  }

];

const testimonials = [
  {
    name: 'Priya Singh',
    role: 'Student',
    text: 'The school has provided me with incredible opportunities to grow both academically and personally.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    name: 'Amit Kumar',
    role: 'Parent',
    text: 'The dedication of teachers and focus on holistic development has been remarkable.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    name: 'Dr. Meena Sharma',
    role: 'Teacher',
    text: 'Teaching here has been rewarding. The school truly values innovation in education.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80'
  }
];

const events = [
  {
    title: 'Annual Sports Day',
    date: 'March 15, 2024',
    description: 'Celebrating athletic excellence'
  },
  {
    title: 'Science Exhibition',
    date: 'April 5, 2024',
    description: 'Showcasing innovative projects'
  },
  {
    title: 'Cultural Festival',
    date: 'May 20, 2024',
    description: 'Celebrating diversity through art'
  }
];

const achievements = [
  {
    icon: Trophy,
    title: 'National Level Sports Achievements',
    description: 'Our students have represented at national-level competitions in various sports',
    image: '/assets/sport k.jpg'
  },
  {
    icon: Star,
    title: 'Smart & Interactive Learning',
    description: 'Using digital tools, projectors, and modern teaching methods for better understanding',
    image: '/assets/technology learning.jpg'
  },
  {
    icon: Users,
    title: 'Affordable Quality Education',
    description: 'Providing the best education with low fees and scholarship opportunities',
    image: '/assets/education mtm.jpg'
  }

];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

const facilitySliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center"> {/* Height reduced from h-screen to h-[75vh] */}
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/assets/mtm hero home.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        {/* Content Section */}
        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              Welcome to MTM Sr. Sec. School
            </h1>
            <p className="text-2xl text-white/90 mb-8">
              Shaping Future, Building Dreams!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Discover More
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>




      {/* News Ticker */}
      <div className="bg-blue-900 text-white py-2 overflow-hidden">
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="whitespace-nowrap"
        >
          🎓 Excellence in Education & Sports • 🏆 Proud National Champions • 📚 Consistently Outstanding Board Results • 🎭 Get Ready for Our Grand Annual Fest!
        </motion.div>
      </div>

      {/* Headmaster's Message with Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Headmaster Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:sticky md:top-24 flex flex-col items-center md:items-start w-full"
            >
              <div className="w-full md:w-[90%] lg:w-[85%] h-[400px] md:h-[450px] overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-gray-100 to-gray-300 flex items-center justify-center">
                <img
                  src="/assets/headmaster2.png"
                  alt="Headmaster"
                  className="w-full h-full object-cover filter brightness-110 contrast-110 saturate-150"
                />
              </div>



              <div className="mt-4 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900">Rajender Dhull</h3>
                <p className="text-gray-600">Headmaster</p>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Welcome to MTM Sr. Sec. School
                </h2>
                <p className="text-gray-600 mb-4">
                  At **MTM Sr. Sec. School**, we go beyond academics, **nurturing young minds with values, skills, and a passion for learning**. Our commitment to **holistic education** ensures that students develop **intellectually, socially, and emotionally**, preparing them for a bright future.
                </p>
                <p className="text-gray-600">
                  We integrate **modern teaching techniques with strong ethical foundations**, fostering an environment where students **think critically, innovate fearlessly, and become responsible global citizens**.
                </p>
              </div>

              {/* Vision */}
              <div className="border-t pt-8">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  To create a **future-ready learning environment** where students develop a **growth mindset, embrace challenges, and contribute positively to the world** with knowledge, creativity, and leadership.
                </p>
              </div>

              {/* Mission */}
              <div className="border-t pt-8">
                <div className="flex items-center mb-4">
                  <Aim className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  We aim to **empower students through high-quality education, innovative learning methods, and strong moral values**. Our mission is to **instill confidence, creativity, and resilience**, ensuring every student is equipped to **excel in academics and life**.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>




      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  className="block group"
                >
                  <div className={`${link.color} rounded-lg p-6 transition-transform duration-300 group-hover:scale-105`}>
                    <link.icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{link.title}</h3>
                    <ArrowRight className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Facilities Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                  <div className="mt-4 h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-blue-600">{facility.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
                    <achievement.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What People Say</h2>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-6 object-cover ring-4 ring-blue-100"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm"
                    >
                      {testimonial.role}
                    </motion.div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in Touch with MTM Sr. Sec. School
            </h2>
            <p className="text-blue-100 mb-8">
              Have any questions? We're here to help!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-colors duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Computer, Library, FlaskRound as Flask, Trophy, BookOpen, LineChart, Lightbulb, GraduationCap, Users } from 'lucide-react';

const facilities = [
  {
    icon: Monitor,
    title: 'Smart Classes',
    description: 'Interactive digital learning environment equipped with the latest educational technology',
    details: [
      'Interactive whiteboards with touch capability',
      'High-definition projectors for clear visuals',
      'Integrated audio systems for multimedia learning',
      'Digital content library access'
    ],
    image: '/assets/technology learning.jpg',
    videoUrl: 'https://player.vimeo.com/video/123456789',
    stats: {
      classrooms: '25+',
      students: '1000+',
      subjects: 'All'
    }
  },
  {
    icon: Trophy,
    title: 'Playground & Sports',
    description: 'Comprehensive sports facilities for physical development and team activities',
    details: [
      'Multi-purpose sports ground',
      'Basketball and volleyball courts',
      'Athletics track',
      'Indoor games facility'
    ],
    image: '/assets/playground.jpg',
    videoUrl: 'https://player.vimeo.com/video/123456790',
    stats: {
      area: '5 Acres',
      sports: '10+',
      events: '20+'
    }
  },
  {
    icon: Computer,
    title: 'Computer Lab',
    description: 'Modern IT infrastructure with latest hardware and software resources',
    details: [
      'High-performance computers',
      'Coding and programming facilities',
      'Internet connectivity',
      'Digital learning resources'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    videoUrl: 'https://player.vimeo.com/video/123456791',
    stats: {
      computers: '50+',
      labs: '2',
      courses: '5+'
    }
  },
  {
    icon: Library,
    title: 'Library & Fun Room',
    description: 'Extensive collection of books and educational resources with dedicated reading spaces',
    details: [
      'Vast collection of books',
      'Digital library access',
      'Quiet study zones',
      'Educational games corner'
    ],
    image: '/assets/mtm library.jpg',
    videoUrl: 'https://player.vimeo.com/video/123456792',
    stats: {
      books: '10000+',
      seats: '100+',
      sections: '5'
    }
  },
  {
    icon: Flask,
    title: 'Science Lab',
    description: 'Well-equipped laboratory for practical learning and experiments',
    details: [
      'Modern lab equipment',
      'Safety gear and protocols',
      'Experiment stations',
      'Digital microscopes'
    ],
    image: '/assets/mtm science lab.jpg',
    videoUrl: 'https://player.vimeo.com/video/123456793',
    stats: {
      equipment: '200+',
      stations: '30',
      subjects: '3'
    }
  },
  {
    icon: LineChart,
    title: 'Financial Education',
    description: 'Stock market and financial literacy programs for practical knowledge',
    details: [
      'Real-time market tracking',
      'Trading simulations',
      'Financial planning workshops',
      'Expert guest lectures'
    ],
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80',
    videoUrl: 'https://player.vimeo.com/video/123456794',
    stats: {
      programs: '3+',
      workshops: '12+',
      partners: '5+'
    }
  }
];

const features = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Cutting-edge educational technology'
  },
  {
    icon: GraduationCap,
    title: 'Excellence',
    description: 'High academic standards'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Collaborative learning environment'
  },
  {
    icon: BookOpen,
    title: 'Resources',
    description: 'Comprehensive learning materials'
  }
];

export default function Facilities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              State-of-the-Art Facilities
            </h1>
            <p className="text-xl text-white/90">
              Experience modern education with our advanced infrastructure and learning resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Facilities */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <facility.icon className="w-10 h-10 text-blue-600" />
                    <h2 className="text-3xl font-bold">{facility.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600">{facility.description}</p>

                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(facility.stats).map(([key, value]) => (
                      <div key={key} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {facility.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-gray-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/90 text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg"
                      >
                        Watch Video
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Experience Our Facilities</h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a campus tour to see our world-class facilities in action
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              onClick={() => window.location.href = '/contact'} // 👈 Same Click Functionality
            >
              Book a Tour
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, BookOpen, Target, TrendingUp, GraduationCap, Award, Globe, Heart, Lightbulb, ClipboardCheck as ChalkboardTeacher, School, Trophy } from 'lucide-react';

const management = [
  {
    role: 'Headmaster',
    name: 'Rajender Dhull',
    bio: 'With over 20 years of experience in education, Mr. Dhull leads our institution with vision and dedication.',
    image: '/assets/headmaster.jpeg'
  },
  {
    role: 'Principal',
    name: 'Sudesh Devi',
    bio: 'A passionate educator committed to fostering academic excellence and student development.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80'
  },
  {
    role: 'Co-Principal',
    name: 'Suman Devi',
    bio: 'Brings innovative teaching methods and modern educational practices to our curriculum.',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80'
  },
  {
    role: 'Clerk',
    name: 'Bhushan',
    bio: 'Efficiently manages administrative operations ensuring smooth functioning of the school.',
    image: '/assets/clerk.png'
  }
];

const values = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Committed to highest standards of education',
    color: 'bg-blue-500'
  },
  {
    icon: Heart,
    title: 'Character Building',
    description: 'Fostering strong moral values and ethics',
    color: 'bg-red-500'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Preparing students for a global future',
    color: 'bg-green-500'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Embracing modern teaching methods',
    color: 'bg-purple-500'
  }
];

const achievements = [
  {
    icon: Trophy,
    title: 'Academic Excellence',
    description: 'Consistently achieving 100% board results with distinction'
  },
  {
    icon: Award,
    title: 'Sports Championships',
    description: 'Multiple state-level sports achievements'
  },
  {
    icon: GraduationCap,
    title: 'University Placements',
    description: 'Outstanding record of university admissions'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden">  {/* 👈 Added w-full & overflow-x-hidden */}
     {/* About Section Banner */}
<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: `url('/assets/hero3.jpg')`,
    }}
  />

  {/* Content Section */}
  <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white text-4xl md:text-5xl font-bold mb-4"
    >
      About MTM Sr. Sec. School
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-white text-lg md:text-2xl mb-6"
    >
      Excellence in Education, Leadership, and Innovation
    </motion.p>
  </div>
</section>



      {/* School Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy of Excellence</h2>
              <p className="text-gray-600">
                Founded with a vision to provide quality education, MTM Sr. Sec. School has been at the
                forefront of academic excellence for over two decades. Our institution stands as a
                beacon of learning, combining traditional values with modern educational practices.
              </p>
              <p className="text-gray-600">
                We believe in nurturing not just academic excellence, but fostering a holistic
                environment where every student can discover their unique potential. Our comprehensive
                approach to education combines rigorous academic standards with character development.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">1000+</h3>
                  <p className="text-gray-600">Students</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-bold text-green-600 mb-2">50+</h3>
                  <p className="text-gray-600">Faculty Members</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                '/assets/about1.jpg',
                '/assets/about3.jpg',
                '/assets/about2.jpg',
                '/assets/about4.jpg'
              ]
                .map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={image}
                      alt="School Life"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {management.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                  <p className="text-blue-200 mb-2">{person.role}</p>
                  <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {person.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`${value.color} rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300`}
              >
                <value.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-white/90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <achievement.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Campus Infrastructure
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <ChalkboardTeacher className="w-12 h-12 text-blue-600" />
              <h3 className="text-2xl font-semibold">Modern Classrooms</h3>
              <p className="text-gray-600">
                Smart classrooms equipped with digital learning tools and comfortable seating.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <School className="w-12 h-12 text-green-600" />
              <h3 className="text-2xl font-semibold">Sports Complex</h3>
              <p className="text-gray-600">
                Multi-purpose playground and dedicated areas for various sports activities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Lightbulb className="w-12 h-12 text-yellow-600" />
              <h3 className="text-2xl font-semibold">Innovation Labs</h3>
              <p className="text-gray-600">
                Well-equipped science and computer labs fostering practical learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
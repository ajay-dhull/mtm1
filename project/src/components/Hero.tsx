import { motion } from 'framer-motion';
import { GraduationCap, Book, Trophy, FlaskRound as Flask } from 'lucide-react';

const features = [
  "English Medium School | 12th Standard | Science, Commerce & Arts",
  "Playground | Smart Classes | Computer Lab | Library | Fun Room | Science Lab",
  "Stock Market & Financial Literacy Classes | Festivals & Events"
];

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <GraduationCap className="w-20 h-20 mx-auto mb-8" />
          <h1 className="text-6xl font-bold mb-4">MTM Sr. Sec. School</h1>
          <p className="text-2xl mb-8 text-blue-200">Shaping Future, Building Dreams!</p>

          {/* Animated Features */}
          <div className="space-y-4 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-lg text-blue-100"
              >
                {feature}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-400 hover:bg-blue-300 text-white px-8 py-4 rounded-full text-xl font-semibold transition-colors duration-300"
          >
            Explore Our School
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[Book, Trophy, Flask].map((Icon, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index,
            }}
            className="absolute text-blue-200 opacity-20"
            style={{
              top: `${20 + index * 30}%`,
              left: `${10 + index * 30}%`,
            }}
          >
            <Icon size={40} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, Users, Music, Palette, BookOpen, Trophy, Mic, Camera, FolderRoot as Football, Brain, Theater } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
  {
    title: 'Annual Function',
    description: 'A grand celebration of talent and achievements',
    image: '/assets/annualfunction.jpg',
    video: 'https://www.youtube.com/embed/example1'
  },
  {
    title: 'Sports Meet',
    description: 'Showcasing athletic excellence and team spirit',
    image: '/assets/sport2.jpg',
    video: 'https://www.youtube.com/embed/example2'
  },
  {
    title: 'Cultural Festival',
    description: 'Celebrating diversity through art and culture',
    image: '/assets/education mtm.jpg',
    video: 'https://www.youtube.com/embed/example3'
  },
  {
    title: 'Farewell Party',
    description: 'An emotional and joyful send-off for graduating students',
    image: '/assets/ferval.jpg',
    video: 'https://www.youtube.com/embed/example4'
  },
  {
    title: 'Diwali Celebration',
    description: 'A festival of lights celebrated with joy and enthusiasm',
    image: '/assets/diwali.jpg',
    video: 'https://www.youtube.com/embed/example5'
  },
  {
    title: 'Japanese Delegation Visit',
    description: 'Welcoming students from Japan and experiencing cultural exchange',
    image: '/assets/japanwelcome.jpg',
    video: 'https://www.youtube.com/embed/example6'
  },
  {
    title: 'Educational Tours',
    description: 'Taking students on enriching visits to historical and educational sites',
    image: '/assets/visit1.jpg',
    video: 'https://www.youtube.com/embed/example7'
  },
  {
    title: 'Best Student Awards',
    description: 'Recognizing and rewarding outstanding students for their achievements',
    image: '/assets/rewardmtm.jpg',
    video: 'https://www.youtube.com/embed/example8'
  }
];


const activities = [
  {
    icon: Music,  // Dance ka icon ke liye abhi Music use kar raha hoon
    title: 'Dance Club',
    description: 'Learn classical, folk, and contemporary dance forms',
    image: '/assets/dancegroup.jpeg'
  },
  {
    icon: Palette,
    title: 'Art & Craft',
    description: 'Creative expression workshops',
    image: '/assets/art1.jpg'
  },
  {
    icon: Theater,
    title: 'Drama Club',
    description: 'Theater and performance arts',
    image: '/assets/dramaclub.jpeg'
  },
  {
    icon: Brain,  // Self-defense ka icon ke liye abhi Brain use kar raha hoon
    title: 'Self-Defense',
    description: 'Karate, Taekwondo, and personal safety training',
    image: '/assets/selfd.jpg'
  },
  {
    icon: Camera,  // Science Club ke liye abhi Camera use kar raha hoon
    title: 'Science Club',
    description: 'Explore experiments, robotics, and STEM activities',
    image: '/assets/scienceart.jpg'
  },
  {
    icon: Football,
    title: 'Sports Teams',
    description: 'Competitive sports training',
    image: '/assets/sport2.jpg'
  }
];


const testimonials = [
  {
    name: 'Ajay Dhull',
    grade: 'Class XII',
    quote: 'The diverse range of activities has helped me discover my passion for business, entrepreneurship, and startups.',
    image: '/assets/ajay.jpg'
  },
  {
    name: 'Rahul Kumar',
    grade: 'Class XI',
    quote: 'Being part of the sports team taught me valuable lessons about teamwork and perseverance.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80'
  },
  {
    name: 'Anjali Singh',
    grade: 'Class X',
    quote: 'The music club has given me a platform to showcase my talent and grow as an artist.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80'
  },
  {
    name: 'Vikram Mehta',
    grade: 'Class XII',
    quote: 'The science club helped me explore my curiosity and conduct exciting experiments.',
    image: 'https://images.unsplash.com/photo-1581092336786-b951357f3bfc?auto=format&fit=crop&q=80'
  },
  {
    name: 'Sneha Sharma',
    grade: 'Class IX',
    quote: 'Self-defense classes have given me confidence and a sense of security.',
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80'
  },
  {
    name: 'Aryan Verma',
    grade: 'Class X',
    quote: 'The dance club has been an amazing place to express myself creatively and stay fit.',
    image: 'https://images.unsplash.com/photo-1561471180-3f4118f9b04e?auto=format&fit=crop&q=80'
  },
  {
    name: 'Neha Patel',
    grade: 'Class XI',
    quote: 'The entrepreneurship program at our school inspired me to start my own small business.',
    image: 'https://images.unsplash.com/photo-1573497019426-2828c7909a29?auto=format&fit=crop&q=80'
  },
  {
    name: 'Rohan Kapoor',
    grade: 'Class XII',
    quote: 'Being in the student council helped me develop leadership and decision-making skills.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80'
  }
];

const timeline = [
  {
    time: '8:00 AM',
    activity: 'Morning Assembly',
    icon: Users
  },
  {
    time: '8:30 AM',
    activity: 'Academic Classes',
    icon: BookOpen
  },
  {
    time: '1:00 PM',
    activity: 'Lunch Break',
    icon: Calendar
  },
  {
    time: '2:00 PM',
    activity: 'Club Activities',
    icon: Trophy
  },
  {
    time: '3:30 PM',
    activity: 'Sports Time',
    icon: Football
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Desktop
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // Large Tablets
      settings: {
        slidesToShow: 2, // Tablet par 2 testimonials
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Small Tablets & Large Mobiles
      settings: {
        slidesToShow: 1, // Mobile par 1 testimonial
        slidesToScroll: 1,
      },
    },
  ],
};


export default function StudentLife() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen w-full overflow-x-hidden"> {/* 👈 Fixed Scroll Issue */}
    {/* Hero Section */}
<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: `url('/assets/about4.jpg')`,
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
      Experience Vibrant Student Life
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white text-lg md:text-2xl mb-6"
    >
      Where learning meets fun, creativity, and personal growth
    </motion.p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
    >
      Explore Events
    </motion.button>
  </div>
</section>



      {/* Events & Festivals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-10"
          >
            Events & Celebrations
          </motion.h2>
          <Slider {...sliderSettings} slidesToShow={1} slidesToScroll={1}>
            {events.map((event, index) => (
              <div key={index} className="px-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="rounded-lg overflow-hidden h-[600px] w-full relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Hover pe Play Button */}
                    {event.video && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => window.open(event.video, "_blank")}
                          className="bg-black/60 text-white p-4 rounded-full hover:bg-black/80"
                        >
                          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">{event.title}</h3>
                      <p className="text-white/70 text-base">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </section>






      {/* Activities & Clubs */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Activities & Clubs
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <activity.icon className="w-8 h-8 text-white mb-2" />
                    <h3 className="text-xl font-semibold text-white">{activity.title}</h3>
                    <p className="text-white/80">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Student Voices</h2>
          <Slider {...sliderSettings} className="px-2 md:px-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4">
                <div className="bg-gray-50 p-6 rounded-xl shadow-md w-full max-w-lg mx-auto flex flex-col justify-between h-[200px]">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.grade}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic overflow-hidden text-ellipsis">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>


      {/* Day in the Life Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            A Day at MTM School
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } mb-8`}
              >
                <div className="w-5/12 p-4 bg-white rounded-lg shadow-md">
                  <item.icon className="w-6 h-6 text-blue-600 mb-2" />
                  <h4 className="text-lg font-semibold">{item.time}</h4>
                  <p className="text-gray-600">{item.activity}</p>
                </div>
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
            <h2 className="text-4xl font-bold mb-6">Join Our Vibrant Community</h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the perfect blend of academics and extracurricular activities
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule a Visit
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
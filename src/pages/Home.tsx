import Hero from '../components/Hero';
import { Trophy, Users, Calendar, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Trophy,
    title: 'Weekly Tournaments',
    description: 'Compete in exciting E-sports tournaments every Saturday',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a growing community of passionate gamers',
  },
  {
    icon: Calendar,
    title: 'Regular Events',
    description: 'Participate in various gaming events throughout the month',
  },
  {
    icon: DollarSign,
    title: 'Prize Pools',
    description: 'Win attractive prize pools in our tournaments',
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Void Production?</h2>
            <p className="mt-4 text-xl text-gray-600">Experience the best in competitive gaming</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-[#00bdd6] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Tournament</h2>
            <p className="mt-4 text-xl text-gray-600">Don't miss out on our next event</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Saturday Showdown</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-[#00bdd6]" />
                    Next Saturday, 2:00 PM
                  </li>
                  <li className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 mr-2 text-[#00bdd6]" />
                    Entry Fee: NRs 999/-
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Trophy className="h-5 w-5 mr-2 text-[#00bdd6]" />
                    Prize Pool: NRs 50,000/-
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#00bdd6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#4ccfe1] transition-colors"
                >
                  Register Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
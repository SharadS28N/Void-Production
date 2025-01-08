import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import esportsBgVideo from '../assets/esports-bg.mp4';


const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="#00bdd6"
        >
        <source src={esportsBgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Welcome to Void Production
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-6">
            Your trusted partner for organizing E-sports tournaments
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#00bdd6] bg-white hover:bg-gray-100 transition-colors"
            >
              Host Tournament
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/tournaments"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-[#00bdd6] transition-colors"
            >
              View Events
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
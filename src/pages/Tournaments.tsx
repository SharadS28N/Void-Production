import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, DollarSign } from 'lucide-react';
import type { Tournament } from '../types';

const tournaments: Tournament[] = [
  {
    id: 1,
    name: 'PUBG Mobile Championship',
    date: '2024-03-23',
    fee: 999,
    game: 'PUBG Mobile',
    slots: 25,
    registeredTeams: 18,
    prizePool: 50000
  },
  {
    id: 2,
    name: 'Valorant Showdown',
    date: '2024-03-30',
    fee: 999,
    game: 'Valorant',
    slots: 16,
    registeredTeams: 12,
    prizePool: 45000
  }
];

const Tournaments = () => {
  return (
    <div className="pt-16">
      <div className="bg-[#00bdd6] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Upcoming Tournaments</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tournament.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-[#00bdd6]" />
                    {new Date(tournament.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Trophy className="h-5 w-5 mr-2 text-[#00bdd6]" />
                    Game: {tournament.game}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-[#00bdd6]" />
                    Slots: {tournament.registeredTeams}/{tournament.slots} teams
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 mr-2 text-[#00bdd6]" />
                    Prize Pool: NRs {tournament.prizePool.toLocaleString()}/-
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-[#00bdd6] text-white px-4 py-2 rounded-md hover:bg-[#4ccfe1] transition-colors">
                    Register Now - NRs {tournament.fee}/-
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
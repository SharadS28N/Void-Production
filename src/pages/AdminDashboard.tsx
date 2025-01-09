import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, DollarSign, Search, Filter, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface RegisteredEvent {
  id: number;
  organizationName: string;
  organizationType: string;
  eventType: string;
  date: string;
  status: 'pending' | 'approved' | 'completed';
  participants: string;
  amount: number;
  contactPerson: string;
  phone: string;
  email: string;
}

const mockEvents: RegisteredEvent[] = [
  {
    id: 1,
    organizationName: "St. Xavier's College",
    organizationType: "college",
    eventType: "PUBG Mobile",
    date: "2024-03-25",
    status: "approved",
    participants: "100",
    amount: 999,
    contactPerson: "John Doe",
    phone: "+977 9812345678",
    email: "john@stxaviers.edu.np"
  },
  {
    id: 2,
    organizationName: "Trinity International College",
    organizationType: "college",
    eventType: "Valorant",
    date: "2024-03-28",
    status: "pending",
    participants: "50",
    amount: 999,
    contactPerson: "Jane Smith",
    phone: "+977 9898765432",
    email: "jane@trinity.edu.np"
  }
];

const AdminDashboard = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = 
      event.organizationName.toLowerCase().includes(search.toLowerCase()) ||
      event.eventType.toLowerCase().includes(search.toLowerCase()) ||
      event.contactPerson.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || event.status === filter;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    { icon: Calendar, label: 'Total Events', value: mockEvents.length },
    { icon: Users, label: 'Total Participants', value: mockEvents.reduce((acc, curr) => acc + parseInt(curr.participants), 0) },
    { icon: Trophy, label: 'Completed Events', value: mockEvents.filter(e => e.status === 'completed').length },
    { icon: DollarSign, label: 'Total Revenue', value: `NRs ${mockEvents.reduce((acc, curr) => acc + curr.amount, 0)}/-` }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-2">
                <stat.icon className="h-6 w-6 text-[#00bdd6] mr-2" />
                <h3 className="text-gray-600">{stat.label}</h3>
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by organization, event type, or contact person..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 w-full p-2 rounded-lg border bg-white"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 rounded-lg border bg-white"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Events Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Info</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEvents.map((event) => (
                <tr key={event.id}>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{event.organizationName}</div>
                    <div className="text-sm text-gray-500">{event.organizationType}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{event.contactPerson}</div>
                    <div className="text-sm text-gray-500">{event.phone}</div>
                    <div className="text-sm text-gray-500">{event.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{event.eventType}</div>
                    <div className="text-sm text-gray-500">Date: {new Date(event.date).toLocaleDateString()}</div>
                    <div className="text-sm text-gray-500">Participants: {event.participants}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${event.status === 'approved' ? 'bg-green-100 text-green-800' : 
                        event.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'}`}>
                      {event.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#00bdd6] hover:text-[#4ccfe1] font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
import { useState } from 'react';
import { motion } from 'framer-motion';
import type { OrganizationForm } from '../types';

const Register = () => {
  const [form, setForm] = useState<OrganizationForm>({
    organizationName: '',
    organizationType: 'school',
    contactPerson: '',
    email: '',
    phone: '',
    eventType: 'pubg',
    expectedParticipants: '',
    preferredDate: '',
    paymentMethod: 'esewa',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Handle payment gateway integration here
      if (form.paymentMethod === 'esewa') {
        // eSewa integration
        const path = 'https://uat.esewa.com.np/epay/main';
        const params: {
          [key: string]: string | number;
        } = {
          amt: 999,
          psc: 0,
          pdc: 0,
          txAmt: 0,
          tAmt: 999,
          pid: 'void-' + Date.now(),
          scd: 'EPAYTEST', // Merchant code
          su: 'http://localhost:5173/success',
          fu: 'http://localhost:5173/failed',
        };

        // Create form and submit
        const paymentForm = document.createElement('form');
        paymentForm.setAttribute('method', 'POST');
        paymentForm.setAttribute('action', path);

        for (const key in params) {
          const input = document.createElement('input');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', key);
          input.setAttribute('value', params[key].toString()); // Convert to string
          paymentForm.appendChild(input);
        }

        document.body.appendChild(paymentForm);
        paymentForm.submit();
      } else {
        // Khalti integration
        // Add Khalti payment logic here
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div className="pt-16">
      <div className="bg-[#00bdd6] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Host Your Tournament</h1>
          <p className="mt-4 text-xl text-white text-center">Let us help you organize a professional E-sports event</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Organization Name */}
            <div>
              <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
                Organization Name
              </label>
              <input
                type="text"
                id="organizationName"
                value={form.organizationName}
                onChange={(e) => setForm({ ...form, organizationName: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00bdd6] focus:ring-[#00bdd6]"
                required
              />
            </div>

            {/* Organization Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Organization Type</label>
              <select
                value={form.organizationType}
                onChange={(e) =>
                  setForm({ ...form, organizationType: e.target.value as 'school' | 'college' | 'organization' })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00bdd6] focus:ring-[#00bdd6]"
              >
                <option value="school">School</option>
                <option value="college">College</option>
                <option value="organization">Organization</option>
              </select>
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Event Type</label>
              <select
                value={form.eventType}
                onChange={(e) =>
                  setForm({
                    ...form,
                    eventType: e.target.value as 'pubg' | 'freefire' | 'valorant' | 'mobilelegends',
                  })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00bdd6] focus:ring-[#00bdd6]"
              >
                <option value="pubg">PUBG Mobile</option>
                <option value="freefire">Free Fire</option>
                <option value="valorant">Valorant</option>
                <option value="mobilelegends">Mobile Legends</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="expectedParticipants" className="block text-sm font-medium text-gray-700">Expected Participants</label>
                <input
                  type="number"
                  id="expectedParticipants"
                  value={form.expectedParticipants}
                  onChange={(e) => setForm({ ...form, expectedParticipants: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00bdd6] focus:ring focus:ring-[#00bdd6] focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  id="preferredDate"
                  value={form.preferredDate}
                  onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00bdd6] focus:ring focus:ring-[#00bdd6] focus:ring-opacity-50"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-[#00bdd6]">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="esewa"
                    checked={form.paymentMethod === 'esewa'}
                    onChange={(e) => setForm({ ...form, paymentMethod: e.target.value as 'esewa' | 'khalti' })}
                    className="mr-2"
                  />
                  <span>eSewa</span>
                </label>
                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-[#00bdd6]">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="khalti"
                    checked={form.paymentMethod === 'khalti'}
                    onChange={(e) => setForm({ ...form, paymentMethod: e.target.value as 'esewa' | 'khalti' })}
                    className="mr-2"
                  />
                  <span>Khalti</span>
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#00bdd6] text-white px-4 py-3 rounded-md hover:bg-[#4ccfe1] transition-colors font-medium"
              >
                Register & Pay NRs 999/-
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
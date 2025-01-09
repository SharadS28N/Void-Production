# Void Production - E-sports Tournament Management

Void Production is a professional E-sports tournament management company that helps schools, colleges, and organizations host their own E-sports events.

## Features

- **Tournament Registration**: Organizations can register to host their own E-sports tournaments
- **Multiple Game Support**: Support for popular games including PUBG Mobile, Free Fire, Valorant, and Mobile Legends
- **Online Payment Integration**: Secure payment processing through eSewa and Khalti
- **Responsive Design**: Works seamlessly across all devices
- **Admin Dashboard**: Track registrations, participants, and event status

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_ESEWA_MERCHANT_CODE=your_merchant_code
VITE_KHALTI_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── context/          # React context providers
├── pages/            # Page components
├── types/           # TypeScript type definitions
└── main.tsx         # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

- Email: contact@voidproduction.com
- Phone: +977 98XXXXXXXX
- Address: Kathmandu, Nepal
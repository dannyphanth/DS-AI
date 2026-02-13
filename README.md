# CPP Data Science and AI Club Website

A modern, responsive website for the Cal Poly Pomona Data Science and AI Club, built with React, TypeScript, and Tailwind CSS.

## Features

- Modern dark-themed UI with a navy/teal color palette and gradient text accents
- Smooth scroll-triggered animations and staggered reveals powered by Framer Motion
- Fully responsive layout with a mobile drawer navigation
- 3D parallax tilt cards with glare effects on hover
- Auto-playing image slideshows with manual controls
- Automated event object handling — events are automatically categorized as ongoing, upcoming, or past based on real-time date/time parsing with no manual sorting needed
- QR code badge generation for live meeting sign-ins


## Pages

- **Home** (`/`) — Landing page with hero, events preview, Datathon, Kaggle, Badges, and Membership cards
- **About** (`/about`) — Club mission, image slideshows, and partner connections
- **Events** (`/events`) — Upcoming/past events with RSVP links, QR sign-in, and deep-link support
- **Resources** (`/resources`) — Tabbed hub for Meeting Slides, Videos, Digital Badges, and Datathon
- **Team** (`/contact`) — Board member profiles with social links
- **Past Board** (`/board`) — Archive of previous board members

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Vite

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/cpp-dsai-website.git
cd cpp-dsai-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── assets/        # Static assets (images, etc.)
├── layouts/       # Layout components
└── App.tsx        # Main application component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please reach out to the club's board members or open an issue in the repository.

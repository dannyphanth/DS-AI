import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const upcomingEvents = [
    {
        id: 'general-meeting-1',
        title: 'General Meeting',
        date: 'April 11, 2024',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 9, Room 123',
        type: 'Regular Meeting',
        iconType: 'GroupIcon',
        image: 'Blue_White_Illustrative_Meet_and_Greet_Flyer.png',
        description: 'Join us for our weekly general meeting where we discuss upcoming events, share insights, and network with fellow data science enthusiasts.',
        registrationLink: '#'
    },
    {
        id: 'data-science-workshop',
        title: 'Data Science Workshop',
        date: 'April 18, 2024',
        time: '2:00 PM - 4:00 PM',
        location: 'Building 9, Room 123',
        type: 'Workshop',
        iconType: 'SchoolIcon',
        image: '/event4.png',
        description: 'Master the art of creating compelling data visualizations and learn advanced techniques for data analysis.',
        registrationLink: '#'
    },
    {
        id: 'spring-datathon',
        title: 'Spring Datathon',
        date: 'May 15-17, 2024',
        time: '48 Hours',
        location: 'CPP BSC, Ursa Major',
        type: 'Competition',
        iconType: 'EmojiEventsIcon',
        image: '/event3.png',
        description: 'Our biggest datathon of the semester! Compete with teams, apply your data science skills, and win amazing prizes.',
        registrationLink: '#'
    },
    {
        id: 'ai-ethics-panel',
        title: 'AI Ethics Panel',
        date: 'May 22, 2024',
        time: '3:00 PM - 5:00 PM',
        location: 'Building 9, Room 123',
        type: 'Panel Discussion',
        iconType: 'GroupIcon',
        image: '/michael-black-s6.jpg',
        description: 'Join industry experts for a thought-provoking discussion on the ethical implications of artificial intelligence.',
        registrationLink: '#'
    }
];

export const pastEvents = [
    {
        id: 'winter-datathon-2024',
        title: 'Winter 2024 Datathon',
        date: 'February 1-3, 2024',
        time: '48 Hours',
        location: 'CPP BSC, Ursa Major',
        type: 'Competition',
        iconType: 'EmojiEventsIcon',
        image: '/Past Datathon Cover.png',
        description: 'Our successful winter datathon that brought together students from across campus to solve real-world data challenges.',
        registrationLink: '#'
    },
    {
        id: 'ml-bootcamp-2024',
        title: 'Machine Learning Bootcamp',
        date: 'January 15, 2024',
        time: '9:00 AM - 5:00 PM',
        location: 'Building 9, Room 123',
        type: 'Workshop',
        iconType: 'SchoolIcon',
        image: '/event2.png',
        description: 'An intensive one-day bootcamp covering the fundamentals of machine learning and its practical applications.',
        registrationLink: '#'
    }
];

// Get the 3 most upcoming events for the CTA section
export const getUpcomingEventsForCTA = () => {
    return upcomingEvents.slice(0, 3);
}; 

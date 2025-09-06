import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const upcomingEvents = [
    {
        id: 'board-games-study',
        title: 'Board Games & Study',
        date: 'September 8, 2025',
        time: '5:30 PM - 8:00 PM',
        location: 'TBA',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/Social1.png',
        description: 'A perfect mix of fun and productivity - Meet new members, play games with friends, and study in a chill group setting',
        registrationLink: '#'
    },
    {
        id: 'intro-to-colab',
        title: 'Intro to Colab',
        date: 'September 11, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 1616',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/IntroToColab3.png',
        description: 'No setup, no stress. Explore coding ML projects in the cloud using Google Colab!',
        registrationLink: '#'
    },
    {
        id: 'intro-regression',
        title: 'Linear & Logistic Regression',
        date: 'September 18, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 1616',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/IntroToLinearAndLogisticRegression4.png',
        description: 'Build intuition for regression, interpret results, and see how these models power data-driven predictions',
        registrationLink: '#'
    },
    {
        id: 'reus-101',
        title: 'REUs 101',
        date: 'September 25, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 1616',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/REUs5.png',
        description: 'Learn what REUs are and why they matter in opening doors to research, mentorship, and future opportunities',
        registrationLink: '#'
    }
];

export const pastEvents = [
    {
        id: 'dsai-advisors-talk',
        title: 'DS&AI Advisor\'s Talk',
        date: 'September 4, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 1616',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/AdvisorTalk2.png',
        description: 'Learn about cutting-edge research directly from our faculty advisors and discover opportunities to get involved in active research projects!',
        registrationLink: '#'
    },
    {
        id: 'fall-intro-meeting',
        title: 'Fall Intro Meeting',
        date: 'August 28, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 1616',
        type: 'General Meeting',
        iconType: 'GroupIcon',
        image: '/Intro1.png',
        description: 'Kick off the fall semester with our introductory meeting! Learn how to get involved with DS&AI, meet the board members, discover upcoming events and projects, and connect with fellow data science enthusiasts. Perfect for new members and returning students alike!',
        registrationLink: '#'
    }
];

// Get the 3 most upcoming events for the CTA section
export const getUpcomingEventsForCTA = () => {
    return upcomingEvents.slice(0, 3);
}; 

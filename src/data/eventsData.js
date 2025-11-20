import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { parseEventDateTime } from '../utils/eventHelpers';

export const upcomingEvents = [
    {
        id: 'data-royale-datathon',
        title: 'Data Royale Datathon',
        date: 'November 10-14, 2025',
        time: 'Opening - Nov 11 @ 9 AM',
        location: 'BSC Ursa Minor',
        type: 'Datathon',
        iconType: 'EmojiEventsIcon',
        image: '/cr_datathon1.png',
        description: 'Join us for Data Royale, our semiannual 5-day datathon where competition meets learning! Whether you\'re a beginner or seasoned data scientist, compete with teams on analyzing and gaining insights on a given dataset, learn from industry professionals, and clash your way to become the data champion!',
        registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf7iKnOXf9E-PHIct8TEfXrnomIQzqF2ZZeaI8DEmLSGVp6GA/viewform'
    },
    {
        id: 'sql-workshop-nov13',
        title: 'SQL Workshop',
        date: 'November 13, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 8, Room 302',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/gm12-sql.png',
        description: 'Sharpen your database skills with a guided walkthrough of core SQL concepts, live query demos, and collaborative practice problems you can take back to your projects.',
        registrationLink: '#'
    },
    {
        id: 'boba-fundraiser-nov14',
        title: 'Boba Fundraiser',
        date: 'November 14, 2025',
        time: '11:00 AM - 11:00 PM',
        location: 'Goomo Tea Shop',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/social-boba2.png',
        description: 'Unwind after midterms and grab your favorite drink! A portion of every order supports our club!',
        registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScYXAEzvb3t6tbha2VMdx6q-xozjqrfelQq6LlCVzx-PMriuA/viewform'
    },
    {
        id: 'clash-royale-tournament',
        title: 'Clash Royale Tournament',
        date: 'November 10, 2025',
        time: '2:00 PM - 4:00 PM',
        location: 'BSC Ursa Minor',
        type: 'Datathon',
        iconType: 'EmojiEventsIcon',
        image: '/datathonEvent-clash_royale_tournament.png',
        description: 'After the Data Royale kickoff, we\'re hosting a Mini Clash Royale Tournament to close out the evening. Expect quick matches, friendly competition, and a chance to recharge with the community before the rest of Datathon week.',
        registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSefUxzK239EJhDfK04EShKj6RZu-d2tR-rzRMGvM79FPVl3mg/viewform'
    },
    {
        id: 'volleyball-social-nov17',
        title: 'Volleyball Social',
        date: 'November 17, 2025',
        time: '5:30 PM - 8:00 PM',
        location: 'BRIC Court 1 (MAC)',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/social9-volleyball.png',
        description: "Bump, set, hang out! It's volleyball night with DS&AI!",
        registrationLink: '#'
    },
    {
        id: 'interview-prep-nov20',
        title: 'Interview Prep',
        date: 'November 20, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 2636',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/gm13-interviewprep.png',
        description: 'Join us for our meeting covering interview preparation. Learn how to succeed in interviews, develop a portfolio, highlight strengths, and get the job you want!',
        registrationLink: '#'
    },
    {
        id: 'picnic-games-nov24',
        title: 'Picnic and Games',
        date: 'November 24, 2025',
        time: '5:30 PM - 8:00 PM',
        location: 'TBA',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/social10-picnic.png',
        description: 'Pack a blanket, grab some friends, and wind down with lawn games, snacks, and DS&AI community vibes.',
        registrationLink: '#'
    },
    {
        id: 'board-games-study-dec1',
        title: 'Board Games + Study',
        date: 'December 1, 2025',
        time: '5:30 PM - 8:00 PM',
        location: 'Building 3, Room 2636',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/social11-games&study.png',
        description: 'Bring homework, grab a game, and unwind with friends before finals.',
        registrationLink: '#'
    },
    {
        id: 'kaggle-presentations-dec4',
        title: 'Kaggle Presentations',
        date: 'December 4, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 2636',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/gm14-kagglepresentations.png',
        description: "Watch how our Kaggle teams transformed data into discovery! Join us for their presentations and learn how to get involved in next year's team.",
        registrationLink: '#'
    }
];

export const pastEvents = [
    {
        id: 'datathon-prep-workshop',
        title: 'Datathon Prep Workshop',
        date: 'November 6, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 2636',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/gm11-datathon_prep_workshop.png',
        description: 'This Datathon Prep Workshop covers key tools, competition prep, and teamwork tips to help you crush it at Data Royale.',
        registrationLink: '#'
    },
    {
        id: 'gm9-linear-regression-neural-networks',
        title: 'Creating Linear Regression Neural Networks',
        date: 'October 23, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 2636',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/gm9-creating_linear_regression_neural_networks.png',
        description: 'Dive deep into neural networks by building linear regression models from scratch. Understand the mathematics and implementation behind these powerful algorithms.',
        registrationLink: '#'
    },
    {
        id: 'halloween-social',
        title: 'Halloween Social',
        date: 'October 30, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'BSC URSA MINOR',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/social-halloween.png',
        description: 'Join us for a spooky Halloween social! Come dressed in costume, enjoy treats, and celebrate Halloween with your DS&AI community.',
        registrationLink: '#'
    },
    {
        id: 'boba-social-fundraiser',
        title: 'Boba Social + Fundraiser',
        date: 'October 20, 2025',
        time: '5:00 PM - 8:00 PM',
        location: 'Gooma Boba Tea Shop',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/Social-Boba_Social.png',
        description: 'Unwind after midterms and grab your favorite drink! A portion of every order supports our club!',
        registrationLink: '#'
    },
    {
        id: 'gm8-matlab',
        title: 'MATLAB Workshop',
        date: 'October 16, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Virtual Zoom',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/gm8-mathlab.png',
        description: 'Learn the fundamentals of MATLAB for data analysis and visualization. Perfect for beginners looking to expand their toolset.',
        registrationLink: '#'
    },
    {
        id: 'pool-day-social',
        title: 'Pool Day Social',
        date: 'October 13, 2025',
        time: '5:30 PM - 8:00 PM',
        location: 'BRIC Pool Area',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/social-pool_day.png',
        description: 'Join us for our Pool Day Social, a refreshing break from the semester rush. Relax, connect, and enjoy the sunshine with other club members—because balance and community are just as important!',
        registrationLink: '#'
    },
    {
        id: 'intro-regression',
        title: 'Linear & Logistic Regression',
        date: 'October 9, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 2636',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/IntroToLinearAndLogisticRegression4.png',
        description: 'Build intuition for regression, interpret results, and see how these models power data-driven predictions',
        registrationLink: '#'
    },
    {
        id: 'movie-trivia-social',
        title: 'Movie Trivia Social',
        date: 'October 6, 2025',
        time: '5:30 PM - 8:00 PM',
        location: 'SCI Building 3, Room 2636',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/social-movie_trivia.png',
        description: 'Think you know your movies? Team up and put your film knowledge to the test with trivia rounds covering everything from cult classics to box office hits. At the same time, 🎒 + 🎬 = the perfect night—bring your homework, kick back with friends, and enjoy a relaxed evening of studying, snacks, and trivia breaks. A fun way to unwind while still staying productive!',
        registrationLink: '#'
    },
    {
        id: 'gm6-what-is-data',
        title: 'What is Data?',
        date: 'October 2, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 2636',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/gm6-what_is_data.png',
        description: 'Explore the fundamentals of data science and learn what makes data valuable for analysis and insights.',
        registrationLink: '#'
    },
    {
        id: 'dodgeball-social',
        title: 'Dodgeball Social',
        date: 'September 29, 2025',
        time: '5:30 PM - 8:00 PM',
        location: 'BRIC Court 1 (MAC)',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/social4-dodgeball.png',
        description: 'We\'re teaming up with MISSA, SheCodes, CSS, FAST, SWIFT, SEA, SOC, GameDev, and GDGC for a joint dodgeball social. Come out, play a few games, and team up with members across the CS community!',
        registrationLink: 'https://forms.gle/dodgeball2025'
    },
    {
        id: 'reus-101',
        title: 'DS&AI Advisor\'s Talk',
        date: 'September 25, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 2636',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/REUs5.png',
        description: 'Learn what REUs are and why they matter in opening doors to research, mentorship, and future opportunities',
        registrationLink: '#'
    },
    {
        id: 'study-social',
        title: 'Study Social',
        date: 'September 22, 2025',
        time: '5:30 PM - 8:00 PM',
        location: 'Building 3, Room 2636',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/social3-board_game_and_study.png',
        description: 'A perfect mix of fun and productivity - Meet new members, play games with friends, and study in a chill group setting',
        registrationLink: 'https://forms.gle/ujERw1wK4y1ab2Tm7'
    },
    {
        id: 'colab-contd-python-competition',
        title: 'Colab Cont\'d & Python Competition',
        date: 'September 18, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 2636',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/gm4-python_competition.png',
        description: 'Colab continued, covering more hands-on practice. Finish off in a Python competition by testing your coding skills, solving fun challenges, and competing with other student teams',
        registrationLink: '#'
    },
    {
        id: 'pickle-ball-social',
        title: 'Tennis & Pickle Ball',
        date: 'September 15, 2025',
        time: '5:30 PM - 8:00 PM',
        location: 'CPP Tennis Courts (By P2)',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/picbkeBallSocial.png',
        description: 'Come hang out and play some pickleball and tennis with us! Other CS clubs will be there too, so it\'s a great chance to meet new people and chill.',
        registrationLink: '#'
    },
    {
        id: 'intro-to-colab',
        title: 'Intro to Colab',
        date: 'September 11, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 2636',
        type: 'General Meeting',
        iconType: 'SchoolIcon',
        image: '/IntroToColab3.png',
        description: 'No setup, no stress. Explore coding ML projects in the cloud using Google Colab!',
        registrationLink: '#'
    },
    {
        id: 'board-games-study',
        title: 'Board Games & Study',
        date: 'September 8, 2025',
        time: '5:30 PM - 8:00 PM',
        location: 'BSC Games Room',
        type: 'Social',
        iconType: 'GroupIcon',
        image: '/Social1.png',
        description: 'A perfect mix of fun and productivity - Meet new members, play games with friends, and study in a chill group setting',
        registrationLink: '#'
    },
    {
        id: 'dsai-advisors-talk',
        title: 'DS&AI Advisor\'s Talk',
        date: 'September 4, 2025',
        time: '12:00 PM - 1:00 PM',
        location: 'Building 3, Room 2636',
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
        location: 'Building 3, Room 2636',
        type: 'General Meeting',
        iconType: 'GroupIcon',
        image: '/Intro1.png',
        description: 'Kick off the fall semester with our introductory meeting! Learn how to get involved with DS&AI, meet the board members, discover upcoming events and projects, and connect with fellow data science enthusiasts. Perfect for new members and returning students alike!',
        registrationLink: '#'
    }
];

// Get the 3 most upcoming events for the CTA section
export const getUpcomingEventsForCTA = () => {
    const now = new Date();

    const sorted = [...upcomingEvents]
        .map(event => {
            const dateInfo = parseEventDateTime(event);
            return {
                event,
                startDate: dateInfo?.startDate ?? null
            };
        })
        .sort((a, b) => {
            if (!a.startDate && !b.startDate) return 0;
            if (!a.startDate) return 1;
            if (!b.startDate) return -1;
            return a.startDate.getTime() - b.startDate.getTime();
        });

    return sorted
        .filter(({ startDate }) => {
            if (!startDate) return true;
            return startDate >= now;
        })
        .slice(0, 3)
        .map(({ event }) => event);
}; 

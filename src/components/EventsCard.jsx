import { Box, Typography, Button, Card, CardContent, Chip } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUpcomingEventsForCTA } from '../data/eventsData';

const EventsCard = () => {
    const navigate = useNavigate();
    const [flippedCards, setFlippedCards] = useState({});
    const upcomingEvents = getUpcomingEventsForCTA();

    const handleEventClick = (event) => {
        // Navigate to events page with the specific event expanded
        navigate(`/events?event=${event.id}`);
    };

    // Create icon component based on iconType
    const getIconComponent = (iconType) => {
        switch (iconType) {
            case 'GroupIcon':
                return <GroupIcon sx={{ fontSize: 24, color: '#64ffda' }} />;
            case 'SchoolIcon':
                return <SchoolIcon sx={{ fontSize: 24, color: '#64ffda' }} />;
            case 'EmojiEventsIcon':
                return <EmojiEventsIcon sx={{ fontSize: 24, color: '#64ffda' }} />;
            default:
                return <GroupIcon sx={{ fontSize: 24, color: '#64ffda' }} />;
        }
    };

    const handleCardClick = (index) => {
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#026ca6"
            glarePosition="all"
            glareBorderRadius="12px"
            scale={1.01}
            transitionSpeed={1500}
        >
            <Box
                sx={{
                    py: 0,
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    mb: 4,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 4, md: 6 },
                        alignItems: { xs: 'stretch', md: 'flex-start' },
                    }}
                >
                    {/* Left Column: Title, Description, Button (top-aligned) */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Box
                                    sx={{
                                        height: 2,
                                        width: 32,
                                        borderRadius: 2,
                                        background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
                                        mr: 1,
                                    }}
                                />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        textShadow: '0 0 10px rgba(70, 255, 249, 0.3)',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    }}
                                >
                                    Events
                                </Typography>
                            </Box>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    mb: 3,
                                    lineHeight: 1.6,
                                    fontWeight: 300,
                                    letterSpacing: '0.02em',
                                }}
                            >
                                DS&AI has a plethora of different events planned for the rest of the semester. Our general meetings happen every Thursday during U-Hour (12pm - 1pm). Join us for workshops, competitions, networking events, and more!
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                variant="contained"
                                endIcon={<EventIcon />}
                                href="/events"
                                sx={{
                                    background: 'linear-gradient(135deg, #0a192f 0%,rgb(15, 76, 108) 50%, rgb(48, 164, 199) 100%)',
                                    color: '#white',
                                    fontWeight: 600,
                                    px: 3,
                                    py: 1.2,
                                    boxShadow: '0 0 12px rgba(70,255,249,0.18)',
                                    alignSelf: 'flex-start',
                                    mt: 1,
                                    border: '1px solid rgba(70,255,249,0.12)',
                                    '&:hover': {
                                        boxShadow: '0 0 10px #30a4c7',
                                    },
                                }}
                            >
                                View All Events
                            </Button>
                        </motion.div>
                    </Box>

                    {/* Right Column: Upcoming Events Cards */}
                    <Box sx={{
                        flex: 1.5,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: { md: '60%' },
                        pt: 0,
                        mt: 0,
                        paddingTop: 0,
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'white',
                                fontWeight: 600,
                                mb: 1.5,
                                textAlign: 'center',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            }}
                        >
                            Upcoming Events
                        </Typography>

                        <Box sx={{
                            position: 'relative',
                            width: '100%',
                            height: '320px',
                            minHeight: '320px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start', // changed from 'center'
                            overflow: 'visible',
                            perspective: '1200px',
                            transformStyle: 'preserve-3d',
                            minWidth: '720px',
                            pt: 0,
                            mt: 0,
                            paddingTop: 0,
                        }}>
                            {upcomingEvents.map((event, index) => (
                                <motion.div
                                    key={event.title}
                                    initial={{
                                        rotateY: -25,
                                        rotateZ: -8,
                                        x: -60 * index,
                                        y: -20 * index,
                                        zIndex: upcomingEvents.length - index,
                                        opacity: 0.7
                                    }}
                                    animate={{
                                        rotateY: index === 0 ? 30 : index === 2 ? -30 : 0,
                                        rotateZ: (index - 1) * 5,
                                        x: index * 240 - 240,
                                        y: index === 0 ? 10 : index === 2 ? 10 : 0,
                                        zIndex: index === 1 ? 1 : upcomingEvents.length - index,
                                        z: index === 1 ? -70 : 0,
                                        opacity: 1
                                    }}
                                    whileHover={{
                                        rotateY: index === 0 ? 20 : index === 2 ? -20 : 5,
                                        rotateZ: (index - 1) * 5 + 2,
                                        scale: 1.08,
                                        zIndex: 10,
                                        transition: { duration: 0.3 }
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.3,
                                        ease: "easeOut"
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: '220px',
                                        height: '260px',
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    <Card
                                        onClick={() => handleEventClick(event)}
                                        sx={{
                                            width: '220px',
                                            height: '260px',
                                            background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(17, 37, 64) 50%, rgb(48, 164, 199) 120%)',
                                            border: '1px solid rgb(48, 184, 199, 0.3)',
                                            borderRadius: 2,
                                            // boxShadow: `
                                            //     0 4px 20px rgba(0, 184, 187, 0.20),
                                            //     ${index * 3}px ${index * 3}px ${index * 6}px ${index * 6}px rgba(0, 0, 0, 0.4)
                                            // `,
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            transformStyle: 'preserve-3d',
                                            '&:hover': {
                                                boxShadow: `
                                                    0 8px 30px rgba(41, 105, 157, 0.8),
                                                    0 16px 64px rgba(0,0,0,0.4),
                                                    0 32px 128px rgba(0,0,0,0.3)
                                                `,
                                                borderColor: 'rgb(17, 29, 64)',
                                            },
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: index === 0 ?
                                                    'linear-gradient(135deg, rgba(70,255,249,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)' :
                                                    index === 2 ?
                                                        'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(70,255,249,0.1) 100%)' :
                                                        'linear-gradient(135deg, rgba(70,255,249,0.05) 0%, transparent 50%, rgba(70,255,249,0.05) 100%)',
                                                pointerEvents: 'none',
                                                zIndex: 2,
                                            },
                                        }}
                                        elevation={0}
                                    >
                                        {/* Event Image */}
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: '200px',
                                                backgroundImage: `url(${event.image.startsWith('/') ? event.image : '/' + event.image})`,
                                                backgroundSize: '100% 100%',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                position: 'relative',
                                                zIndex: 1,
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))',
                                                }
                                            }}
                                        />

                                        <CardContent sx={{ p: 1, position: 'relative', zIndex: 3 }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        color: 'white',
                                                        fontWeight: 700,
                                                        fontSize: '0.9rem',
                                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                        mb: 0,
                                                    }}
                                                >
                                                    {event.title}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <CalendarTodayIcon sx={{ fontSize: 14, color: '#9cebff' }} />
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            color: '#9cebff',
                                                            fontSize: '0.8rem',
                                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                        }}
                                                    >
                                                        {event.date.split(',')[0]} • {event.time}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Tilt>
    );
};

export default EventsCard; 

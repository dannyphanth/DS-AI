import { Box, Typography, Button, Card, CardContent, Chip, useTheme, useMediaQuery } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
// import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUpcomingEventsForCTA } from '../data/eventsData';

const EventsCard = () => {
    const navigate = useNavigate();
    const [flippedCards, setFlippedCards] = useState({});
    const upcomingEvents = getUpcomingEventsForCTA();
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const visibleEvents = isXs ? upcomingEvents.slice(0, 2) : upcomingEvents;
    const totalEvents = visibleEvents.length;
    const midIndex = (totalEvents - 1) / 2;

    const formatDateShort = (dateStr) => {
        if (!dateStr) return '';
        const first = dateStr.split(',')[0].trim();
        const [monthName, dayRaw] = first.split(/\s+/);
        const monthMap = {
            January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
            July: 7, August: 8, September: 9, October: 10, November: 11, December: 12
        };
        const month = monthMap[monthName];
        const day = parseInt(dayRaw, 10);
        if (month && Number.isFinite(day)) return `${month}/${day}`;
        return first;
    };

    const formatTimeCondensed = (timeStr) => {
        if (!timeStr) return '';
        const normalized = timeStr.replace(/\s+/g, ' ').trim();
        const split = normalized.split(/-|\u2013/); // hyphen or en dash
        if (split.length < 2) return normalized;
        let [start, end] = split.map(s => s.trim());
        const meridiem = (s) => {
            const m = s.match(/(am|pm)$/i);
            return m ? m[1].toUpperCase() : '';
        };
        const stripMeridiem = (s) => s.replace(/\s*(AM|PM)$/i, '');
        const startMer = meridiem(start);
        const endMer = meridiem(end);
        start = stripMeridiem(start);
        end = stripMeridiem(end);
        const mer = endMer || startMer;
        return `${start}\u2013${end}${mer ? ` ${mer}` : ''}`;
    };

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
            glareMaxOpacity={0.2}
            glareColor="#026ca6"
            glarePosition="all"
            glareBorderRadius="12px"
            scale={1.01}
            transitionSpeed={1500}
        >
            <Box
                sx={{
                    p: 3,
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    mb: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(10,25,47,0.45) 0%, rgba(17,37,64,0.40) 50%, rgba(48,164,199,0.07) 100%)',
                    border: '1px solid rgba(12, 71, 89, 0.14)',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'inherit',
                        pointerEvents: 'none',
                        background: `
                            radial-gradient(900px 340px at 15% -10%, rgba(48,164,199,0.10), transparent 60%),
                            radial-gradient(700px 280px at 110% 20%, rgba(70,255,249,0.08), transparent 60%)
                        `,
                        opacity: 1
                    },
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
                                    boxShadow: '0 0 12px rgba(10,25,47,0.8)',
                                    alignSelf: 'flex-start',
                                    mt: 1,
                                    border: '1px solid rgba(70,255,249,0.12)',
                                    '&:hover': {
                                        boxShadow: '0 0 12px rgba(10,25,47,0.95)',
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
                            height: { xs: '280px', sm: '320px' },
                            minHeight: { xs: '280px', sm: '320px' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            overflow: 'visible',
                            perspective: '1200px',
                            transformStyle: 'preserve-3d',
                            minWidth: { xs: '100%', sm: '720px' },
                            pt: 0,
                            mt: 0,
                            paddingTop: 0,
                        }}>
                            {visibleEvents.map((event, index) => (
                                <motion.div
                                    key={event.title}
                                    initial={{
                                        rotateY: -25,
                                        rotateZ: -8,
                                        x: -60 * index,
                                        y: -20 * index,
                                        zIndex: totalEvents - index,
                                        opacity: 0.7
                                    }}
                                    animate={{
                                        rotateY: isXs ? 0 : (index === 0 ? 30 : index === 2 ? -30 : 0),
                                        rotateZ: isXs ? ((index - midIndex) * 8) : ((index - 1) * 5),
                                        x: isXs ? ((index - midIndex) * 185) : (index * 230 - 240),
                                        y: isXs ? Math.abs(index - midIndex) * 12 : (index === 0 ? 8 : index === 2 ? 8 : 0),
                                        zIndex: index === 1 ? 1 : totalEvents - index,
                                        z: index === 1 ? -70 : 0,
                                        opacity: 1
                                    }}
                                    whileHover={{
                                        rotateY: isXs ? 0 : (index === 0 ? 20 : index === 2 ? -20 : 5),
                                        rotateZ: isXs ? ((index - midIndex) * 10 + 2) : ((index - 1) * 5 + 2),
                                        scale: isXs ? 1.03 : 1.08,
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
                                        width: isXs ? 180 : 216,
                                        height: isXs ? 220 : 260,
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    <Card
                                        onClick={() => handleEventClick(event)}
                                        sx={{
                                            width: { xs: '180px', sm: '216px' },
                                            height: { xs: '220px', sm: '260px' },
                                            background: 'linear-gradient(135deg, rgb(10, 25, 47) 0%, rgb(17, 37, 64) 50%, rgb(48, 164, 199) 120%)',
                                            border: '1px solid rgb(48, 184, 199, 0.3)',
                                            borderRadius: 2,
                                            boxShadow: '0 4px 20px rgb(1, 0, 0)',
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
                                                height: { xs: '160px', sm: '200px' },
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
                                                            background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                                            WebkitBackgroundClip: 'text',
                                                            backgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            color: 'transparent',
                                                            fontSize: '0.8rem',
                                                            textShadow: '0 0 12px rgba(156, 235, 255, 0.35)',
                                                            whiteSpace: { xs: 'nowrap', sm: 'normal' },
                                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                        }}
                                                    >
                                                        {formatDateShort(event.date)} • {formatTimeCondensed(event.time)}
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

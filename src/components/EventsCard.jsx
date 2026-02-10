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
    const isSm = useMediaQuery(theme.breakpoints.only('sm')); // 600px - 959px (tablet)
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 960px - 1279px
    const visibleEvents = isXs ? upcomingEvents.slice(0, 2) : upcomingEvents;
    const totalEvents = visibleEvents.length;
    const midIndex = (totalEvents - 1) / 2;
    const isSingleCard = totalEvents === 1;
    const isTwoCards = totalEvents === 2;

    // Scale function for different screen sizes
    const getScaleFactor = () => {
        if (isXs) return 1; // No scaling for mobile
        if (isSm) return 0.75; // Scale down for tablet screens (768px area)
        if (isMd) return 0.85; // Scale down for medium screens (1024px area)
        return 1; // Full size for large screens (1440px+)
    };

    const scaleFactor = getScaleFactor();

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
        console.log('Event clicked:', event.title, event.id);
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
                    background: 'linear-gradient(135deg, rgba(10,25,47,0.60) 0%, rgba(17,37,64,0.55) 50%, rgba(48,164,199,0.05) 100%)',
                    border: '1px solid rgba(12, 71, 89, 0.25)',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'inherit',
                        pointerEvents: 'none',
                        background: `
                            radial-gradient(900px 340px at 15% -10%, rgba(48,164,199,0.10), transparent 60%),
                            radial-gradient(700px 200px at 110% 20%, rgba(70,255,249,0.08), transparent 60%)
                        `,
                        opacity: 0,
                        transition: 'opacity 0.4s ease'
                    },
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(41, 105, 157, 0.35)',
                        '&::before': { opacity: 1 }
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
                                    background: 'linear-gradient(135deg, rgba(48, 164, 199, 0.9) 0%, rgba(30, 120, 170, 0.85) 100%)',
                                    color: '#fff',
                                    fontWeight: 600,
                                    px: 3,
                                    py: 1.2,
                                    boxShadow: 'none',
                                    alignSelf: 'flex-start',
                                    mt: 1,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, rgba(60, 180, 215, 0.95) 0%, rgba(48, 164, 199, 0.9) 100%)',
                                        boxShadow: '0 4px 20px rgba(48, 164, 199, 0.4)',
                                        transform: 'translateY(-2px)',
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

                        {visibleEvents.length === 0 ? (
                            /* No Upcoming Events State */
                            <Box sx={{
                                width: '100%',
                                height: { xs: '260px', sm: `${320 * scaleFactor}px` },
                                minHeight: { xs: '260px', sm: `${320 * scaleFactor}px` },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 1.5,
                                px: 3,
                                pt: { xs: 2, sm: 3 },
                            }}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                >
                                    <Box sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, rgba(48, 164, 199, 0.2) 0%, rgba(70, 255, 249, 0.1) 100%)',
                                        border: '2px solid rgba(48, 164, 199, 0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 1,
                                    }}>
                                        <CalendarTodayIcon sx={{ fontSize: 36, color: 'rgba(156, 235, 255, 0.7)' }} />
                                    </Box>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: 'rgba(156, 235, 255, 0.9)',
                                            fontWeight: 600,
                                            textAlign: 'center',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        }}
                                    >
                                        No Upcoming Events
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'rgba(156, 235, 255, 0.6)',
                                            textAlign: 'center',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                            maxWidth: 280,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        No upcoming events at the moment! Check back soon for exciting events.
                                    </Typography>
                                </motion.div>
                            </Box>
                        ) : (
                            <Box sx={{
                                position: 'relative',
                                width: '100%',
                                height: { xs: '260px', sm: `${320 * scaleFactor}px` },
                                minHeight: { xs: '260px', sm: `${320 * scaleFactor}px` },
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: isSingleCard ? 'center' : 'flex-start',
                                gap: isTwoCards ? 2 : 0,
                                overflow: 'visible',
                                perspective: '1200px',
                                // transformStyle: 'preserve-3d',
                                minWidth: { xs: '100%', sm: isSingleCard ? 'auto' : (isTwoCards ? '800px' : `${720 * scaleFactor}px`) },
                                pt: 0,
                                mt: 0,
                                paddingTop: 0,
                                px: { xs: 2, sm: 0 },
                            }}>
                                {visibleEvents.map((event, index) => (
                                    <motion.div
                                        key={event.title}
                                        initial={{
                                            rotateY: (isSingleCard || isTwoCards) ? 0 : -25,
                                            rotateZ: (isSingleCard || isTwoCards) ? 0 : -8,
                                            x: (isSingleCard || isTwoCards) ? 0 : -60 * index,
                                            y: (isSingleCard || isTwoCards) ? 0 : -20 * index,
                                            zIndex: totalEvents - index,
                                            opacity: 0.7
                                        }}
                                        animate={{
                                            rotateY: (isSingleCard || isTwoCards) ? 0 : ((isXs || isTwoCards) ? 0 : (index === 0 ? 30 : index === 2 ? -30 : 0)),
                                            rotateZ: isSingleCard ? 0 : (isTwoCards ? ((index - midIndex) * 6) : ((isXs || isTwoCards) ? ((index - midIndex) * 6) : ((index - 1) * 5))),
                                            x: (isSingleCard || isTwoCards) ? 0 : (isXs ? ((index - midIndex) * 165) : (index * 230 * scaleFactor - 240 * scaleFactor)),
                                            y: isSingleCard ? 0 : (isTwoCards ? Math.abs(index - midIndex) * 8 : ((isXs || isTwoCards) ? Math.abs(index - midIndex) * 8 : (index === 0 ? 8 : index === 2 ? 8 : 0))),
                                            zIndex: totalEvents - index,
                                            z: (isSingleCard || isTwoCards) ? 0 : (index === 1 ? -70 : 0),
                                            opacity: 1
                                        }}
                                        whileHover={{
                                            rotateY: (isSingleCard || isTwoCards) ? 0 : ((isXs || isTwoCards) ? 0 : (index === 0 ? 20 : index === 2 ? -20 : 5)),
                                            rotateZ: isSingleCard ? 0 : (isTwoCards ? ((index - midIndex) * 8 + 2) : ((isXs || isTwoCards) ? ((index - midIndex) * 8 + 2) : ((index - 1) * 5 + 2))),
                                            scale: (isSingleCard || isTwoCards) ? 1.02 : ((isXs || isTwoCards) ? 1.02 : 1.08),
                                            zIndex: 10,
                                            transition: { duration: 0.3 }
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            delay: index * 0.3,
                                            ease: "easeOut"
                                        }}
                                        style={{
                                            position: (isSingleCard || isTwoCards) ? 'relative' : 'absolute',
                                            width: isXs ? 160 : 216 * scaleFactor,
                                            height: isXs ? 200 : 260 * scaleFactor,
                                            transformStyle: 'preserve-3d',
                                        }}
                                    >
                                        <Card
                                            onClick={() => handleEventClick(event)}
                                            sx={{
                                                width: isXs ? '160px' : `${216 * scaleFactor}px`,
                                                height: isXs ? '200px' : `${260 * scaleFactor}px`,
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
                                                    height: '100%',
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

                                        </Card>
                                    </motion.div>
                                ))}
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </Tilt>
    );
};

export default EventsCard; 

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, ToggleButton, ToggleButtonGroup, Collapse, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { upcomingEvents, pastEvents } from '../data/eventsData';
import { useEventTimer } from '../hooks/useEventTimer';
import EventQRCodeBadge from './EventQRCodeBadge';
import EventQRCodePopup from './EventQRCodePopup';

// Global configuration for QR code and sign-in form
const SIGN_IN_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSedenKpxqNruUZzU81JdiCcwcz8tiKWx1zN-i3ccBFqJKdXzQ/viewform';
const QR_CODE_IMAGE_PATH = '/DSAI_Sign-In_QR_Code.png'; // Path to the QR code image

const Events = () => {
    const [searchParams] = useSearchParams();
    const expandedEventId = searchParams.get('event');

    // Internal clock system - updates every minute and categorizes events
    const { ongoingEvents, upcomingEvents: categorizedUpcoming, pastEvents: categorizedPast } = useEventTimer(upcomingEvents, pastEvents);

    // QR Code popup state
    const [qrPopupOpen, setQrPopupOpen] = useState(false);
    const [selectedEventForQR, setSelectedEventForQR] = useState(null);

    // Remove previous global scroll-to-top; per-card scroll is implemented below
    // useEffect(() => {
    //     if (expandedEventId) {
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //     }
    // }, [expandedEventId]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const [eventType, setEventType] = useState('upcoming');
    const [currentPage, setCurrentPage] = useState(1);
    const EVENTS_PER_PAGE = 9;

    // Calculate pagination for past events
    const totalPastPages = Math.ceil(categorizedPast.length / EVENTS_PER_PAGE);
    const paginatedPastEvents = categorizedPast.slice(
        (currentPage - 1) * EVENTS_PER_PAGE,
        currentPage * EVENTS_PER_PAGE
    );

    // Determine which events to display based on selected type
    const displayEvents = eventType === 'upcoming'
        ? [...ongoingEvents, ...categorizedUpcoming] // Show ongoing + upcoming
        : paginatedPastEvents;

    // Find the first upcoming social event
    const firstUpcomingSocial = categorizedUpcoming.find(e => e.type === 'Social') || ongoingEvents.find(e => e.type === 'Social');

    const handleEventTypeChange = (event, newEventType) => {
        if (newEventType !== null) {
            setEventType(newEventType);
            setCurrentPage(1); // Reset to first page when switching tabs
        }
    };

    // Pagination handlers
    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(totalPastPages, prev + 1));
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    // Handle QR code badge click
    const handleQRCodeClick = (event) => {
        setSelectedEventForQR(event);
        setQrPopupOpen(true);
    };

    // Check if event is ongoing and is a General Meeting
    const isOngoingGeneralMeeting = (event) => {
        return ongoingEvents.some(ongoing => ongoing.id === event.id) && event.type === 'General Meeting';
    };

    // Auto-fit text to one line by reducing font-size until it fits (down to a min)
    const AutoFitTypography = ({ children, maxRem, minRem, sx, ...props }) => {
        const textRef = useRef(null);
        const [fontSizeRem, setFontSizeRem] = useState(maxRem);

        useLayoutEffect(() => {
            const el = textRef.current;
            if (!el) return;

            const measureAndFit = () => {
                let size = maxRem;
                el.style.whiteSpace = 'nowrap';
                el.style.display = 'block';
                el.style.fontSize = `${size}rem`;

                const parent = el.parentElement;
                const parentWidth = parent ? parent.clientWidth : el.clientWidth;

                // Reduce font-size until it fits on one line or hits minRem
                while (el.scrollWidth > parentWidth && size > minRem) {
                    size = Math.max(minRem, +(size - 0.05).toFixed(2));
                    el.style.fontSize = `${size}rem`;
                }
                setFontSizeRem(size);
            };

            measureAndFit();
            window.addEventListener('resize', measureAndFit);
            return () => window.removeEventListener('resize', measureAndFit);
        }, [children, maxRem, minRem]);

        return (
            <Typography
                ref={textRef}
                sx={{
                    ...sx,
                    fontSize: `${fontSizeRem}rem`,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
                {...props}
            >
                {children}
            </Typography>
        );
    };

    const EventCard = ({ event, isPast = false, showRSVP = false, isOngoing = false, onQRCodeClick }) => {
        const [expanded, setExpanded] = useState(false);
        const detailsRef = useRef(null);

        // Expand based on URL param and scroll into view with offset
        useEffect(() => {
            if (expandedEventId === event.id) {
                setExpanded(true);
                // Wait a tick for expansion, then scroll to details
                const t = setTimeout(() => {
                    if (detailsRef.current) {
                        const rect = detailsRef.current.getBoundingClientRect();
                        const y = window.pageYOffset + rect.top - 450; // smaller offset
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }, 300);
                return () => clearTimeout(t);
            }
        }, [expandedEventId, event.id]);

        const handleExpandClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            setExpanded(!expanded);
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

        return (
            <motion.div variants={itemVariants}>
                <Card
                    elevation={0}
                    sx={{
                        minHeight: 410,
                        maxWidth: 350,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'linear-gradient(135deg, rgb(10, 25, 47) 0%, rgb(17, 37, 64) 50%, rgb(48, 164, 199) 120%)',
                        border: '1px solid rgb(48, 184, 199, 0.3)',
                        borderRadius: 2,
                        boxShadow: '0 4px 20px rgb(1, 0, 0)',
                        transition: 'transform 0.2s',
                        opacity: isPast ? 0.8 : 1,
                        position: 'relative', // Needed for absolute positioning of badge
                        overflow: 'visible', // Allow badge to extend beyond card border
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 8px 30px rgba(41, 105, 157, 0.8)'
                        }
                    }}
                >
                    {/* QR Code Badge - only show for ongoing General Meetings */}
                    {isOngoing && onQRCodeClick && (
                        <EventQRCodeBadge onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onQRCodeClick(event);
                        }} />
                    )}
                    <CardMedia
                        component="img"
                        height="350"
                        image={event.image}
                        alt={event.title}
                        sx={{
                            objectFit: 'fill',
                            objectPosition: 'center',
                            width: '100%',
                            backgroundColor: 'rgb(0, 0, 0)'
                        }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <Box
                        sx={{
                            height: 320,
                            backgroundColor: '#f5f5f5',
                            display: 'none',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#666'
                        }}
                    >
                        <Typography variant="h6">Event Image</Typography>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                            minHeight: 60
                        }}>
                            <Button
                                onClick={handleExpandClick}
                                variant="contained"
                                size="medium"
                                sx={{
                                    color: 'white',
                                    background: 'linear-gradient(135deg, rgba(48, 164, 199, 0.9) 0%, rgba(30, 120, 170, 0.85) 100%)',
                                    boxShadow: 'none',
                                    py: 1.5,
                                    px: 3,
                                    width: '95%',
                                    height: '90%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    textAlign: 'left',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, rgba(60, 180, 215, 0.95) 0%, rgba(48, 164, 199, 0.9) 100%)',
                                        boxShadow: '0 4px 20px rgba(48, 164, 199, 0.4)',
                                        transform: 'translateY(-2px)',
                                    }
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, width: '100%' }}>
                                    <AutoFitTypography
                                        maxRem={1.2}
                                        minRem={0.9}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#f5f5f5',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {event.type}
                                    </AutoFitTypography>
                                    <AutoFitTypography
                                        maxRem={1.0}
                                        minRem={0.85}
                                        sx={{
                                            color: '#e8e8e8',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {event.title}
                                    </AutoFitTypography>
                                </Box>
                                <ExpandMoreIcon
                                    sx={{
                                        transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s',
                                        color: '#f5f5f5',
                                        fontSize: '1.5rem'
                                    }}
                                />
                            </Button>
                        </Box>

                        <Collapse in={expanded} timeout={300}>
                            <Box sx={{ mt: 2 }} ref={detailsRef}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <CalendarTodayIcon sx={{
                                            mr: 1,
                                            fontSize: 14,
                                            color: '#9cebff',
                                            background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            textShadow: '0 0 12px rgba(0, 0, 0, 0.56)'
                                        }} />
                                        <Typography variant="body2" sx={{
                                            fontSize: '0.9rem',
                                            background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            textShadow: '0 0 12px rgba(0, 0, 0, 0.56)'
                                        }}>
                                            {event.date}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccessTimeIcon sx={{
                                            mr: 1,
                                            fontSize: 14,
                                            color: '#9cebff',
                                            background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            textShadow: '0 0 12px rgba(0, 0, 0, 0.56)'
                                        }} />
                                        <Typography variant="body2" sx={{
                                            fontSize: '0.9rem',
                                            background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            textShadow: '0 0 12px rgba(0, 0, 0, 0.56)'
                                        }}>
                                            {event.time}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <LocationOnIcon sx={{
                                            mr: 1,
                                            fontSize: 14,
                                            color: '#9cebff',
                                            background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            textShadow: '0 0 12px rgba(0, 0, 0, 0.56)'
                                        }} />
                                        <Typography variant="body2" sx={{
                                            fontSize: '0.9rem',
                                            background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            textShadow: '0 0 12px rgba(0, 0, 0, 0.56)'
                                        }}>
                                            {event.location}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        mb: 2,
                                        fontSize: '0.9rem',
                                        lineHeight: 1.4,
                                        background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        textShadow: '0 0 12px rgba(0, 0, 0, 0.56)'
                                    }}
                                >
                                    {event.description}
                                </Typography>

                                {(showRSVP || (event.registrationLink && event.registrationLink !== '#')) && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        fullWidth
                                        component="a"
                                        href={event.registrationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            background: 'linear-gradient(135deg, rgba(48, 164, 199, 0.9) 0%, rgba(30, 120, 170, 0.85) 100%)',
                                            color: 'white',
                                            boxShadow: 'none',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, rgba(60, 180, 215, 0.95) 0%, rgba(48, 164, 199, 0.9) 100%)',
                                                boxShadow: '0 4px 20px rgba(48, 164, 199, 0.4)',
                                                transform: 'translateY(-2px)',
                                            }
                                        }}
                                    >
                                        {event.type === 'Datathon' ? 'Register Now' : 'RSVP'}
                                    </Button>
                                )}

                                {/* Semester Label */}
                                {event.semester && (
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'block',
                                            textAlign: 'center',
                                            mt: 2,
                                            pt: 1.5,
                                            borderTop: '1px solid rgba(48, 184, 199, 0.2)',
                                            color: 'rgba(156, 235, 255, 0.6)',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                            fontSize: '0.75rem',
                                            letterSpacing: '0.5px',
                                        }}
                                    >
                                        {event.semester}
                                    </Typography>
                                )}
                            </Box>
                        </Collapse>
                    </CardContent>
                </Card>
            </motion.div>
        );
    };

    return (
        <Box sx={{ py: 10, backgroundColor: '#0a192f' }}>
            <Container maxWidth="lg">

                {/* <Typography
                    variant="h6"
                    align="center"
                    sx={{ mb: 2, maxWidth: 800, mx: 'auto', color: 'rgb(48, 164, 199)' }}
                >
                    Discover all the exciting events we have planned for this semester
                </Typography> */}

                {/* Event Type Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeOut"
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                        <ToggleButtonGroup
                            value={eventType}
                            exclusive
                            onChange={handleEventTypeChange}
                            sx={{
                                '& .MuiToggleButton-root': {
                                    color: 'rgb(70, 184, 219)',
                                    border: '1px solid rgb(70, 184, 219)',
                                    px: 3,
                                    py: 1,
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    boxShadow: '0 4px 20px rgb(1, 0, 0)',
                                    '&.Mui-selected': {
                                        background: 'rgb(70, 184, 219)',
                                        color: '#050a14',
                                        '&:hover': {
                                            background: 'rgb(70, 184, 219)',
                                        }
                                    },
                                    '&:hover': {
                                        background: 'rgba(70, 184, 219, 0.1)',
                                    }
                                }
                            }}
                        >
                            <ToggleButton value="upcoming">
                                Upcoming Events
                            </ToggleButton>
                            <ToggleButton value="past">
                                Past Events
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {displayEvents.length === 0 ? (
                        /* No Events Empty State */
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                pt: { xs: 4, md: 6 },
                                pb: { xs: 8, md: 10 },
                                px: 3,
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <Box
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, rgba(48, 164, 199, 0.15) 0%, rgba(70, 255, 249, 0.08) 100%)',
                                        border: '2px solid rgba(48, 164, 199, 0.25)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 2.5,
                                        position: 'relative',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            inset: -8,
                                            borderRadius: '50%',
                                            border: '1px solid rgba(48, 164, 199, 0.1)',
                                        },
                                    }}
                                >
                                    {eventType === 'upcoming' ? (
                                        <EventNoteIcon sx={{ fontSize: 44, color: 'rgba(156, 235, 255, 0.7)' }} />
                                    ) : (
                                        <CalendarTodayIcon sx={{ fontSize: 40, color: 'rgba(156, 235, 255, 0.7)' }} />
                                    )}
                                </Box>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: 'rgba(156, 235, 255, 0.95)',
                                        fontWeight: 700,
                                        textAlign: 'center',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        mb: 1.5,
                                    }}
                                >
                                    {eventType === 'upcoming' ? 'No Upcoming Events' : 'No Past Events'}
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(156, 235, 255, 0.6)',
                                        textAlign: 'center',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        maxWidth: 420,
                                        lineHeight: 1.7,
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    {eventType === 'upcoming'
                                        ? "No upcoming events at the moment! Stay tuned for exciting workshops, socials, and meetings coming soon."
                                        : "No past events to show yet. Check back after our first events!"}
                                </Typography>
                            </motion.div>
                        </Box>
                    ) : (
                        <Grid container spacing={3} justifyContent="center">
                            {displayEvents.map((event, index) => {
                                const isPast = categorizedPast.some(past => past.id === event.id);
                                const isOngoing = isOngoingGeneralMeeting(event);
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={event.id || index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <EventCard
                                            event={event}
                                            isPast={isPast}
                                            isOngoing={isOngoing}
                                            showRSVP={firstUpcomingSocial && firstUpcomingSocial.id === event.id}
                                            onQRCodeClick={handleQRCodeClick}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    )}

                    {/* Pagination Controls - Only show for past events with multiple pages */}
                    {eventType === 'past' && totalPastPages > 1 && (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mt: 5,
                                gap: 2,
                            }}
                        >
                            {/* Arrow Controls & Page Number */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                <IconButton
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                    sx={{
                                        color: currentPage === 1 ? 'rgba(156, 235, 255, 0.3)' : 'rgba(156, 235, 255, 0.9)',
                                        border: '1px solid',
                                        borderColor: currentPage === 1 ? 'rgba(48, 184, 199, 0.2)' : 'rgba(48, 184, 199, 0.5)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(48, 184, 199, 0.1)',
                                        },
                                        '&.Mui-disabled': {
                                            color: 'rgba(156, 235, 255, 0.3)',
                                        },
                                    }}
                                >
                                    <ChevronLeftIcon />
                                </IconButton>

                                <Typography
                                    sx={{
                                        color: 'rgba(156, 235, 255, 0.8)',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        fontSize: '0.95rem',
                                        minWidth: '100px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Page {currentPage} of {totalPastPages}
                                </Typography>

                                <IconButton
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPastPages}
                                    sx={{
                                        color: currentPage === totalPastPages ? 'rgba(156, 235, 255, 0.3)' : 'rgba(156, 235, 255, 0.9)',
                                        border: '1px solid',
                                        borderColor: currentPage === totalPastPages ? 'rgba(48, 184, 199, 0.2)' : 'rgba(48, 184, 199, 0.5)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(48, 184, 199, 0.1)',
                                        },
                                        '&.Mui-disabled': {
                                            color: 'rgba(156, 235, 255, 0.3)',
                                        },
                                    }}
                                >
                                    <ChevronRightIcon />
                                </IconButton>
                            </Box>

                            {/* Dot Indicators */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 1,
                                }}
                            >
                                {Array.from({ length: totalPastPages }, (_, i) => i + 1).map((page) => (
                                    <Box
                                        key={page}
                                        onClick={() => handlePageClick(page)}
                                        sx={{
                                            width: currentPage === page ? 24 : 10,
                                            height: 10,
                                            borderRadius: currentPage === page ? '5px' : '50%',
                                            backgroundColor: currentPage === page
                                                ? 'rgba(48, 184, 199, 0.9)'
                                                : 'rgba(48, 184, 199, 0.3)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: currentPage === page
                                                    ? 'rgba(48, 184, 199, 1)'
                                                    : 'rgba(48, 184, 199, 0.5)',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    )}
                </motion.div>

                {/* QR Code Popup Modal */}
                <EventQRCodePopup
                    open={qrPopupOpen}
                    onClose={() => setQrPopupOpen(false)}
                    event={selectedEventForQR}
                    qrCodeImagePath={QR_CODE_IMAGE_PATH}
                    signInFormUrl={SIGN_IN_FORM_URL}
                />
            </Container>
        </Box>
    );
};

export default Events; 
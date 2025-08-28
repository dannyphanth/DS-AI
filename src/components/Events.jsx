import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, ToggleButton, ToggleButtonGroup, Collapse, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect, useRef } from 'react';
import { upcomingEvents, pastEvents } from '../data/eventsData';

const Events = () => {
    const [searchParams] = useSearchParams();
    const expandedEventId = searchParams.get('event');

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

    const handleEventTypeChange = (event, newEventType) => {
        if (newEventType !== null) {
            setEventType(newEventType);
        }
    };

    const EventCard = ({ event, isPast = false }) => {
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
                        minHeight: 400,
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
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 8px 30px rgba(41, 105, 157, 0.8)'
                        }
                    }}
                >
                    <CardMedia
                        component="img"
                        height="340"
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
                                    background: 'rgba(48, 184, 199, 0.2)',
                                    border: '1px solid rgba(48, 184, 199, 0.5)',
                                    py: 1.5,
                                    px: 3,
                                    width: '95%',
                                    height: '90%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    '&:hover': {
                                        backgroundColor: 'rgba(48, 184, 199, 0.3)',
                                        borderColor: 'rgba(48, 184, 199, 0.7)',
                                    }
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0.5 }}>
                                    <Typography sx={{
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        color: '#f5f5f5',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                    }}>
                                        {event.type}
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: '1rem',
                                        color: '#e8e8e8',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                    }}>
                                        {event.title}
                                    </Typography>
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
                                        backgroundColor: 'rgba(48, 184, 199, 0.2)',
                                        color: 'white',
                                        border: '1px solid rgba(48, 184, 199, 0.5)',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            backgroundColor: 'rgba(48, 184, 199, 0.3)',
                                            borderColor: 'rgba(48, 184, 199, 0.7)',
                                            boxShadow: 'none'
                                        }
                                    }}
                                >
                                    Register Now
                                </Button>
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
                    <Grid container spacing={3} justifyContent="center">
                        {eventType === 'upcoming'
                            ? upcomingEvents.map((event, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <EventCard event={event} />
                                </Grid>
                            ))
                            : pastEvents.map((event, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <EventCard event={event} isPast={true} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Events; 
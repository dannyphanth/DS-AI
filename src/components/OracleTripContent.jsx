import { Box, Typography, Button, Divider, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HotelIcon from '@mui/icons-material/Hotel';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const OracleTripContent = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const slideshowImages = [
        { src: '/oracle_andackathon_flyer.png', alt: 'AnDackaThon 2026', fit: 'cover' },
        { src: '/oracle_summit_banner.png', alt: 'Analytics & Data Summit 2026', fit: 'contain' },
        { src: '/oracle_hq_exterior.png', alt: 'Oracle Headquarters', fit: 'cover' },
    ];

    const pastTripPhotos = [
        { src: '/oracle_trip_stage_group.png', alt: 'DSAI group at Summit 2025 stage' },
        { src: '/oracle_trip_group_mentor.png', alt: 'Students with Oracle mentor' },
        { src: '/oracle_trip_networking.png', alt: 'Networking at Oracle' },
        { src: '/summit3.jpg', alt: 'Summit 2025' },
        { src: '/oracle.JPG', alt: 'DSAI at Oracle' },
        { src: '/oracle_trip_gameroom.png', alt: 'Game room at Oracle' },
        { src: '/oracle_trip_booth.png', alt: 'Visiting sponsor booth' },
        { src: '/oracle_trip_keynote.png', alt: 'Keynote session' },
        { src: '/oracle_trip_reception.png', alt: 'Reception sponsors stage' },
        { src: '/oracle_trip_lake.png', alt: 'Students at Oracle lake' },
    ];

    const perks = [
        { icon: <ConfirmationNumberIcon />, label: 'Free Tickets' },
        { icon: <HotelIcon />, label: 'Free Lodging' },
        { icon: <GroupsIcon />, label: 'Networking' },
        { icon: <EmojiEventsIcon />, label: 'Competition' },
    ];

    const faqs = [
        {
            question: 'Is the trip free?',
            answer: 'Yes. The trip is fully sponsored for selected participants. This includes flights, lodging, event access, meals during event programming, and event materials and memorabilia.'
        },
        {
            question: 'What expenses are not covered?',
            answer: 'Students may be responsible for personal spending, optional meals outside scheduled programming, and souvenirs beyond provided materials.'
        },
        {
            question: 'Who can apply?',
            answer: 'Any students that are interested and have a membership at a supporting club! If you are looking for a quick membership, DSAI has a quick program to enter!'
        },
        {
            question: 'Do I need prior experience?',
            answer: 'No prior professional experience is required. Curiosity, commitment, and willingness to engage deeply with data are most important.'
        },
        {
            question: 'What is a datathon?',
            answer: 'A datathon is similar to a hackathon, but instead of building apps, teams focus on data analysis, model development, evidence-based insights, and clear communication of findings.'
        },
        {
            question: 'Will we receive mentorship?',
            answer: 'Yes. Students will have access to industry professionals, Oracle product experts, and data science mentors.'
        },
        {
            question: 'Where will students stay?',
            answer: 'Students will stay in arranged accommodations near Oracle headquarters. Specific lodging details will be shared prior to departure.'
        },
        {
            question: 'What is the daily schedule like?',
            answer: 'Students should expect structured programming during the day, collaborative team work time, networking events, and scheduled meals and breaks. A detailed itinerary will be provided in advance to students that pass the application portion.'
        },
    ];

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [enlargedImage, setEnlargedImage] = useState(null);
    const [galleryPage, setGalleryPage] = useState(0);
    const photosPerPage = 6;

    useEffect(() => {
        if (slideshowImages.length <= 1 || !isAutoPlay) return;
        const intervalId = setInterval(() => {
            setCurrentSlideIndex((prev) => (prev + 1) % slideshowImages.length);
        }, 4000);
        return () => clearInterval(intervalId);
    }, [slideshowImages.length, isAutoPlay]);

    const handleNextSlide = () => {
        setIsAutoPlay(false);
        setCurrentSlideIndex((prev) => (prev + 1) % slideshowImages.length);
    };

    const handlePrevSlide = () => {
        setIsAutoPlay(false);
        setCurrentSlideIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
    };

    const sectionTitleSx = {
        fontWeight: 800,
        fontSize: { xs: '1.25rem', sm: '1.58rem', md: '1.8rem' },
        background: 'linear-gradient(135deg, rgb(48, 164, 199) 0%, rgb(120, 200, 220) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '-0.01em',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    };

    const accentBarSx = {
        height: 1.6,
        width: 26,
        borderRadius: 1.6,
        background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
        mr: 0.8,
    };

    const cardBgSx = {
        background: 'linear-gradient(135deg, rgba(10,25,47,0.60) 0%, rgba(17,37,64,0.55) 50%, rgba(48,164,199,0.15) 100%)',
        border: '1px solid rgba(48, 184, 199, 0.3)',
        borderRadius: 2,
    };

    return (
        <Box sx={{ pb: 4, pt: 0 }}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* ─── ROW 1: Hero — Slideshow + Value Prop ─── */}
                <motion.div variants={itemVariants}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 3, md: 5 },
                        mb: 7.2,
                        alignItems: 'center',
                    }}>
                        {/* Slideshow */}
                        <Box sx={{
                            flex: { xs: 'none', md: '0 0 50%' },
                            width: { xs: '100%', md: '50%' },
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '10.8px',
                            boxShadow: '0 3.6px 18px rgba(0,0,0,0.3)',
                            background: 'rgba(10, 25, 47, 0.6)',
                            minHeight: { xs: 260, sm: 320, md: 360 },
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={slideshowImages[currentSlideIndex].src}
                                    src={slideshowImages[currentSlideIndex].src}
                                    alt={slideshowImages[currentSlideIndex].alt}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: slideshowImages[currentSlideIndex].fit || 'cover',
                                        borderRadius: '10.8px',
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                />
                            </AnimatePresence>
                            <Box sx={{
                                position: 'absolute',
                                bottom: 10,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: 1.35,
                            }}>
                                <IconButton
                                    size="small"
                                    onClick={handlePrevSlide}
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.45)',
                                        color: '#fff',
                                        border: '1px solid rgba(255,255,255,0.25)',
                                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.65)' },
                                    }}
                                    aria-label="Previous image"
                                >
                                    <ChevronLeftIcon fontSize="small" />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    onClick={handleNextSlide}
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.45)',
                                        color: '#fff',
                                        border: '1px solid rgba(255,255,255,0.25)',
                                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.65)' },
                                    }}
                                    aria-label="Next image"
                                >
                                    <ChevronRightIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>

                        {/* Value Prop */}
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: { xs: '1.6rem', sm: '2rem', md: '2.4rem' },
                                        background: 'linear-gradient(135deg, #e6fbff 0%, rgb(48, 164, 199) 50%, rgb(100, 200, 230) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        letterSpacing: '-0.02em',
                                        lineHeight: 1.2,
                                        mb: 1,
                                    }}
                                >
                                    A One-of-a-Kind Trip to Oracle HQ
                                </Typography>
                            </motion.div>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                                    lineHeight: 1.7,
                                    fontWeight: 300,
                                    letterSpacing: '0.02em',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                }}
                            >
                                DSAI and partner CS/CIS clubs on campus are organizing an inclusive and fully paid trip to Oracle HQ in Northern California for students who want to participate in their AnDackathon and Analytics & Data Summit from April 13-18, 2026!
                            </Typography>

                            {/* Oracle logo */}
                            <Box sx={{ mt: 1 }}>
                                <Box
                                    component="img"
                                    src="/oracleLogo.png"
                                    alt="Oracle"
                                    sx={{
                                        height: { xs: 28, sm: 34 },
                                        opacity: 0.8,
                                        filter: 'brightness(1.2)',
                                    }}
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </motion.div>

                <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 7.2 }} />

                {/* ─── ROW 2: AnDackaThon + Summit side by side ─── */}
                <motion.div variants={itemVariants}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 4, md: 0 },
                        mb: 7.2,
                        alignItems: 'stretch',
                    }}>
                        {/* AnDackaThon */}
                        <Box sx={{ flex: 1, px: { xs: 0, md: 3 } }}>
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <Typography variant="h4" sx={{ ...sectionTitleSx, mb: 4.5, textAlign: { xs: 'center', md: 'left' } }}>
                                    AnDackaThon 2026
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <CalendarMonthIcon sx={{ fontSize: 18, color: 'rgb(48, 164, 199)' }} />
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500, fontSize: '0.9rem' }}>
                                        April 16 – 18, 2026
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <LocationOnIcon sx={{ fontSize: 18, color: 'rgb(48, 164, 199)' }} />
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500, fontSize: '0.9rem' }}>
                                        Oracle Convention Center & SJSU
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.85)',
                                        fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                        lineHeight: 1.7,
                                        fontWeight: 300,
                                        letterSpacing: '0.02em',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        mb: 2.5,
                                        textAlign: { xs: 'center', md: 'left' },
                                    }}
                                >
                                    The AnDackaThon is a datathon-style competition where student teams construct meaningful applications using Oracle technology and real-world use cases. Oracle ACE Directors, Product Managers, and mentors work closely with participants. On the final day, teams present their results and are judged on innovation, completeness, accuracy, and imagination.
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Button
                                        variant="outlined"
                                        href="https://andouc.org/andackathon-2026/"
                                        target="_blank"
                                        endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                                        sx={{
                                            borderColor: 'rgb(48, 164, 199)',
                                            color: 'rgb(48, 164, 199)',
                                            fontWeight: 600,
                                            fontSize: '0.85rem',
                                            textTransform: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                borderColor: '#46fff9',
                                                color: '#46fff9',
                                                boxShadow: '0 0 18px rgba(48, 164, 199, 0.35)',
                                                transform: 'translateY(-2px)',
                                            },
                                        }}
                                    >
                                        Learn More & Schedule
                                    </Button>
                                </Box>
                            </motion.div>
                        </Box>

                        {/* Divider */}
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                borderColor: 'rgba(48, 184, 199, 0.3)',
                                display: { xs: 'none', md: 'block' },
                            }}
                        />
                        <Divider
                            sx={{
                                borderColor: 'rgba(48, 184, 199, 0.3)',
                                display: { xs: 'block', md: 'none' },
                            }}
                        />

                        {/* Summit */}
                        <Box sx={{ flex: 1, px: { xs: 0, md: 3 } }}>
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <Typography variant="h4" sx={{ ...sectionTitleSx, mb: 0.8, textAlign: { xs: 'center', md: 'left' } }}>
                                    Analytics & Data Summit 2026
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'rgba(48, 164, 199, 0.9)',
                                        fontStyle: 'italic',
                                        fontSize: { xs: '0.8rem', sm: '0.88rem' },
                                        mb: 2,
                                        fontWeight: 500,
                                        textAlign: { xs: 'center', md: 'left' },
                                    }}
                                >
                                    "Adaptive Frontiers: Pioneering Analytics in an Era of Continuous Change"
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <CalendarMonthIcon sx={{ fontSize: 18, color: 'rgb(48, 164, 199)' }} />
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500, fontSize: '0.9rem' }}>
                                        April 14 – 16, 2026
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <LocationOnIcon sx={{ fontSize: 18, color: 'rgb(48, 164, 199)' }} />
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500, fontSize: '0.9rem' }}>
                                        Oracle Conference Center, Redwood Shores, CA
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.85)',
                                        fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                        lineHeight: 1.7,
                                        fontWeight: 300,
                                        letterSpacing: '0.02em',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        mb: 2.5,
                                        textAlign: { xs: 'center', md: 'left' },
                                    }}
                                >
                                    The Analytics and Data Summit features keynotes from industry experts, hands-on trainings from experienced practitioners, and labs focusing on AI, Machine Learning, Analytics, Spatial and Graph, Business Intelligence, and Data Engineering. It's an intimate event with plenty of chances to connect and network with like-minded professionals.
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Button
                                        variant="outlined"
                                        href="https://andouc.org/analytics-and-data-summit-2026/"
                                        target="_blank"
                                        endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                                        sx={{
                                            borderColor: 'rgb(48, 164, 199)',
                                            color: 'rgb(48, 164, 199)',
                                            fontWeight: 600,
                                            fontSize: '0.85rem',
                                            textTransform: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                borderColor: '#46fff9',
                                                color: '#46fff9',
                                                boxShadow: '0 0 18px rgba(48, 164, 199, 0.35)',
                                                transform: 'translateY(-2px)',
                                            },
                                        }}
                                    >
                                        Learn More & Schedule
                                    </Button>
                                </Box>
                            </motion.div>
                        </Box>
                    </Box>
                </motion.div>

                <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 7.2 }} />

                {/* ─── SECTION: What's Provided ─── */}
                <motion.div variants={itemVariants}>
                    <Box sx={{ mb: 7.2 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3.6, justifyContent: 'center' }}>
                                <Box sx={accentBarSx} />
                                <Typography variant="h4" sx={sectionTitleSx}>
                                    What's Provided FREE for Participating Members
                                </Typography>
                            </Box>
                        </motion.div>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 2,
                            maxWidth: 700,
                            mx: 'auto',
                        }}>
                            {[
                                'Booked out itinerary and schedule of workshops, speakers, panels, working sessions, and presentations',
                                'Competition and conference fee covered',
                                'Lodging for the entire trip covered',
                                'Planning for driving and travel',
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2, width: '100%' }}>
                                    <Typography sx={{ color: 'rgb(48, 164, 199)', fontSize: '1.1rem', lineHeight: 1.7, flexShrink: 0 }}>
                                        ✓
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                                            lineHeight: 1.7,
                                            fontWeight: 300,
                                            letterSpacing: '0.02em',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </motion.div>

                <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 7.2 }} />

                {/* ─── SECTION: What Happened Last Year ─── */}
                <motion.div variants={itemVariants}>
                    <Box sx={{ mb: 7.2 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3.6, justifyContent: 'center' }}>
                                <Box sx={accentBarSx} />
                                <Typography variant="h4" sx={sectionTitleSx}>
                                    Last Year at Oracle
                                </Typography>
                            </Box>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.85)',
                                    fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    lineHeight: 1.7,
                                    fontWeight: 300,
                                    letterSpacing: '0.02em',
                                    maxWidth: 810,
                                    mx: 'auto',
                                    textAlign: 'center',
                                    mb: 4,
                                }}
                            >
                                Last year, DSAI members traveled to Oracle headquarters to attend the Analytics and Data Summit. Students networked with Oracle professionals, attended hands-on labs, and collaborated on real-world data challenges. It was an incredible learning experience that expanded everyone's horizons and built lasting connections.
                            </Typography>
                        </motion.div>

                        {/* Photo Gallery */}
                        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' },
                                gap: 2,
                            }}>
                                {pastTripPhotos.slice(galleryPage * photosPerPage, (galleryPage + 1) * photosPerPage).map((photo, idx) => (
                                    <motion.div
                                        key={`${galleryPage}-${idx}`}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    >
                                        <Box
                                            component="img"
                                            src={photo.src}
                                            alt={photo.alt}
                                            onClick={() => setEnlargedImage(photo)}
                                            sx={{
                                                width: '100%',
                                                height: { xs: 150, md: 200 },
                                                objectFit: 'cover',
                                                borderRadius: 2,
                                                border: '1px solid rgba(48, 164, 199, 0.3)',
                                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                                                transition: 'box-shadow 0.3s, transform 0.3s',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    boxShadow: '0 8px 30px rgba(48, 164, 199, 0.5)',
                                                    transform: 'scale(1.02)',
                                                },
                                            }}
                                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                        />
                                    </motion.div>
                                ))}
                            </Box>

                            {/* Pagination */}
                            {pastTripPhotos.length > photosPerPage && (
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 3 }}>
                                    <Button
                                        onClick={() => setGalleryPage(p => Math.max(0, p - 1))}
                                        disabled={galleryPage === 0}
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            borderColor: '#30a4c7',
                                            color: '#30a4c7',
                                            fontWeight: 600,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                borderColor: '#46fff9',
                                                color: '#46fff9',
                                                boxShadow: '0 0 18px rgba(48, 164, 199, 0.35)',
                                                transform: 'translateY(-2px)',
                                            },
                                            '&.Mui-disabled': {
                                                borderColor: 'rgba(48, 164, 199, 0.3)',
                                                color: 'rgba(48, 164, 199, 0.3)',
                                            },
                                        }}
                                    >
                                        Previous
                                    </Button>
                                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                        Page {galleryPage + 1} of {Math.ceil(pastTripPhotos.length / photosPerPage)}
                                    </Typography>
                                    <Button
                                        onClick={() => setGalleryPage(p => Math.min(Math.ceil(pastTripPhotos.length / photosPerPage) - 1, p + 1))}
                                        disabled={galleryPage >= Math.ceil(pastTripPhotos.length / photosPerPage) - 1}
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            borderColor: '#30a4c7',
                                            color: '#30a4c7',
                                            fontWeight: 600,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                borderColor: '#46fff9',
                                                color: '#46fff9',
                                                boxShadow: '0 0 18px rgba(48, 164, 199, 0.35)',
                                                transform: 'translateY(-2px)',
                                            },
                                            '&.Mui-disabled': {
                                                borderColor: 'rgba(48, 164, 199, 0.3)',
                                                color: 'rgba(48, 164, 199, 0.3)',
                                            },
                                        }}
                                    >
                                        Next
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </motion.div>

                <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 7.2 }} />

                {/* ─── SECTION 4: Interest Form CTA ─── */}
                <motion.div variants={itemVariants}>
                    <Box sx={{
                        mb: 7.2,
                        textAlign: 'center',
                        p: { xs: 3, md: 5 },
                        ...cardBgSx,
                    }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.1rem' },
                                    background: 'linear-gradient(135deg, #e6fbff 0%, rgb(48, 164, 199) 50%, rgb(100, 200, 230) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    mb: 2,
                                }}
                            >
                                Interested? Apply Now
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.85)',
                                    fontSize: { xs: '0.9rem', sm: '1rem' },
                                    lineHeight: 1.7,
                                    mb: 3.5,
                                    maxWidth: 600,
                                    mx: 'auto',
                                }}
                            >
                                Fill out the interest form below to be considered for this special opportunity. Spots are limited!
                            </Typography>

                            <Button
                                variant="contained"
                                href="https://forms.gle/eK46EbT8PCU5dec99"
                                target="_blank"
                                size="large"
                                sx={{
                                    background: 'linear-gradient(135deg, rgba(48, 164, 199, 0.9) 0%, rgba(30, 120, 170, 0.85) 100%)',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: { xs: '1rem', sm: '1.1rem' },
                                    px: { xs: 4, sm: 5 },
                                    py: 1.5,
                                    boxShadow: '0 4px 20px rgba(48, 164, 199, 0.3)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, rgba(60, 180, 215, 0.95) 0%, rgba(48, 164, 199, 0.9) 100%)',
                                        boxShadow: '0 8px 30px rgba(48, 164, 199, 0.5)',
                                        transform: 'translateY(-3px)',
                                    },
                                }}
                            >
                                Interest Form
                            </Button>
                        </motion.div>
                    </Box>
                </motion.div>

                <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 7.2 }} />

                {/* ─── SECTION 5: FAQ ─── */}
                <motion.div variants={itemVariants}>
                    <Box sx={{ mb: 7.2 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3.6, justifyContent: 'center' }}>
                                <Box sx={accentBarSx} />
                                <Typography variant="h4" sx={sectionTitleSx}>
                                    Frequently Asked Questions
                                </Typography>
                            </Box>
                        </motion.div>

                        <Box sx={{
                            ...cardBgSx,
                            overflow: 'hidden',
                        }}>
                            {faqs.map((faq, index) => (
                                <Box key={index}>
                                    <Box
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpenFaqIndex(openFaqIndex === index ? null : index); }}
                                        sx={{
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            p: 1.8,
                                            gap: 1.8,
                                            '&:hover': { backgroundColor: 'rgba(48, 164, 199, 0.05)' },
                                        }}
                                    >
                                        <Typography sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                                            {faq.question}
                                        </Typography>
                                        <ExpandMoreIcon
                                            sx={{
                                                color: 'rgb(48, 164, 199)',
                                                transform: openFaqIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s',
                                                flexShrink: 0,
                                            }}
                                        />
                                    </Box>
                                    <AnimatePresence initial={false}>
                                        {openFaqIndex === index && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <Box sx={{ px: 1.8, pb: 1.8 }}>
                                                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                                                        {faq.answer}
                                                    </Typography>
                                                </Box>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    {index < faqs.length - 1 && (
                                        <Box sx={{ mx: 2, height: 1, background: 'rgba(48, 164, 199, 0.2)' }} />
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </motion.div>

                <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 7.2 }} />

                {/* ─── Contact Footer ─── */}
                <motion.div variants={itemVariants}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography
                            variant="h5"
                            sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.35rem' }, mb: 1.8 }}
                        >
                            Have Questions?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: { xs: '0.85rem', sm: '0.95rem' } }}
                        >
                            Please contact us at{' '}
                            <Box
                                component="a"
                                href="mailto:cppdsaiclub@gmail.com"
                                sx={{
                                    color: 'rgb(48, 164, 199)',
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' },
                                }}
                            >
                                cppdsaiclub@gmail.com
                            </Box>
                        </Typography>
                    </Box>
                </motion.div>
            </motion.div>

            {/* Image Enlargement Modal */}
            <AnimatePresence>
                {enlargedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ position: 'fixed', inset: 0, zIndex: 1300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <motion.div
                            onClick={() => setEnlargedImage(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', cursor: 'zoom-out' }}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 240, damping: 28 }}
                            style={{ position: 'relative', maxWidth: '600px', maxHeight: '70vh' }}
                        >
                            <Box
                                component="img"
                                src={enlargedImage.src}
                                alt={enlargedImage.alt}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '70vh',
                                    objectFit: 'contain',
                                    display: 'block',
                                    borderRadius: 2,
                                    boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
                                }}
                                onClick={() => setEnlargedImage(null)}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
};

export default OracleTripContent;

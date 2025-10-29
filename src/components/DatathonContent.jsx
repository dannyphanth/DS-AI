import { Box, Container, Typography, Button, Grid, Accordion, AccordionSummary, AccordionDetails, Divider, Tabs, Tab, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import GroupsIcon from '@mui/icons-material/Groups';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Tilt from 'react-parallax-tilt';

const DatathonContent = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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

    const faqs = [
        {
            question: "Do I need prior data science experience?",
            answer: "Nope! All skill levels are welcome. We'll have beginner-friendly workshops and mentors to guide you through the process."
        },
        {
            question: "Do I need a team to register?",
            answer: "You can register solo — we'll help match you with a team at the kickoff event."
        },
        {
            question: "What tools can I use?",
            answer: "Any! Common choices include Python, R, Excel, Tableau, or Power BI. Just make sure your results can be shared and explained clearly."
        },
        {
            question: "Is this an overnight or remote event?",
            answer: "Data Royale is a five-day hybrid event — in-person sessions for kickoff, workshops, and finals, with flexible work time in between."
        },
        {
            question: "How are prizes awarded?",
            answer: "Awards will be given to top teams based on overall performance, creativity, and presentation quality. Bonus categories may include 'Best Visualization' and 'Most Underrated Insight.'"
        },
        {
            question: "Will there be food or merch?",
            answer: "Absolutely! Expect snacks, giveaways, and themed swag throughout the week 🎉"
        }
    ];

    // Memories/Gallery data structure per year
    const pastDatathons = [
        {
            year: 'Spring 2024',
            title: 'Bronco Datathon',
            dataset: 'Movie Industry Data',
            datasetDescription:
                'Participants analyzed movie industry data including box office performance, ratings, cast information, and genre trends to uncover insights about what makes movies successful.',
            flyer: '/datathonSpring2024.png',
            photos: [
                { src: '/datathon1.jpg', },
                { src: '/datathon2.jpg', },
                { src: '/datathon3.jpg', },
                { src: '/datathon4.jpg', },
                { src: '/datathon5.jpg', },
                { src: '/datathon1.jpg', },
                { src: '/datathon2.jpg', },
                { src: '/datathon3.jpg', },
                { src: '/datathon4.jpg', },
                { src: '/datathon5.jpg', },
                { src: '/datathon1.jpg', },
                { src: '/datathon2.jpg', },
                { src: '/datathon3.jpg', },
                { src: '/datathon4.jpg', },
                { src: '/datathon5.jpg', },
            ],
        },
        // Future entries can be appended here
        // {
        //   year: '2025',
        //   title: 'Data Royale: Spring 2025',
        //   dataset: 'Clash Royale Match Data',
        //   datasetDescription: '...',
        //   flyer: '/datathon-2025-flyer.png',
        //   photos: [...],
        // }
    ];

    // UI state for gallery section
    const [selectedDatathonIndex, setSelectedDatathonIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [enlargedImage, setEnlargedImage] = useState(null);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [imageRatio, setImageRatio] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const photosPerPage = 6;

    // Datathon hero data
    const datathonHero = {
        title: 'Data Royale Datathon Fall 2025',
        date: 'Nov 10-14',
        time: 'Opening - Nov 11 @ 9 AM',
        location: 'BSC Ursa Minor',
        description1: 'Welcome to the Data Royale, our semesterly datathon hosted by the CPP DS&AI Club!',
        description2: 'This year\'s theme takes inspiration from Clash Royale, combining strategy, creativity, and data science into one exciting week-long event. Whether you\'re a seasoned competitor or new to data, Data Royale is your chance to learn, collaborate, and show what you can do in the arena of analytics.',
        images: [
            '/cr_datathon1.png',
            '/cr_datathon2.png',
            '/cr_datathon3.png',
            '/cr_datathon4.png',
            '/cr_datathon5.png',
        ],
        registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf7iKnOXf9E-PHIct8TEfXrnomIQzqF2ZZeaI8DEmLSGVp6GA/viewform',
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % datathonHero.images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + datathonHero.images.length) % datathonHero.images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <Box sx={{ backgroundColor: '#0a192f', minHeight: '100vh' }}>
            {/* Hero Section with Event Card */}
            <Box sx={{ pt: { xs: 0, md: 0 }, pb: { xs: 4, md: 6 } }}>
                <Box
                    sx={{
                        background: 'transparent',
                        position: 'relative',
                        py: { xs: 2, md: 2 },
                        mt: { xs: 0, md: 0 },
                        '&::before': {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1,
                        }
                    }}
                >
                    <Container
                        maxWidth="lg"
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            color: 'white',
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            <Tilt
                                tiltMaxAngleX={2}
                                tiltMaxAngleY={2}
                                perspective={1000}
                                glareEnable={true}
                                glareMaxOpacity={0.05}
                                glareColor="#46fff9"
                                glarePosition="all"
                                glareBorderRadius="20px"
                                scale={1.01}
                                transitionSpeed={2000}
                            >
                                <Box
                                    sx={{
                                        background: 'linear-gradient(135deg, rgba(10,25,47,0.60) 0%, rgba(17,37,64,0.55) 50%, rgba(48,164,199,0.15) 100%)',
                                        border: '1px solid rgba(12, 71, 89, 0.25)',
                                        borderRadius: 2,
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                        position: 'relative',
                                        overflow: 'hidden',
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
                                            opacity: 1
                                        },
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                                        }
                                    }}
                                >
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 1.8, md: 3.5 }, alignItems: { xs: 'stretch', sm: 'center' } }}>
                                        {/* Left Column - Image Carousel */}
                                        <Box
                                            sx={{
                                                flex: { xs: 'none', sm: 'none' },
                                                width: { xs: '100%', sm: '225px', md: '340px' },
                                                maxWidth: { xs: '240px', sm: '225px', md: '315px' },
                                                height: { xs: 'auto', sm: 'auto', md: 'auto' },
                                                aspectRatio: imageRatio ? `${imageRatio}` : '4/3',
                                                mx: { xs: 'auto', sm: 0 },
                                                mt: { xs: 4, sm: 0 },
                                                pl: { xs: 0, sm: 3, md: 0 },
                                                pr: { xs: 0, sm: 3, md: 0 },
                                                position: 'relative',
                                                overflow: 'hidden',
                                                borderRadius: 1,
                                                backgroundColor: 'transparent'
                                            }}
                                        >
                                            <img
                                                src={datathonHero.images[currentSlide]}
                                                alt={datathonHero.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    objectPosition: 'center',
                                                    display: 'block',
                                                    transition: 'opacity 0.3s ease-in-out',
                                                }}
                                                onLoad={(e) => {
                                                    const { naturalWidth, naturalHeight } = e.currentTarget;
                                                    if (naturalWidth && naturalHeight) {
                                                        const ratio = naturalWidth / naturalHeight;
                                                        if (Number.isFinite(ratio)) {
                                                            setImageRatio(ratio);
                                                        }
                                                    }
                                                }}
                                            />

                                            {/* Navigation Arrows */}
                                            <IconButton
                                                onClick={prevSlide}
                                                size="small"
                                                sx={{
                                                    position: 'absolute',
                                                    left: 10,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                                                    color: 'white',
                                                    padding: '6px',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(0, 0, 0, 0.8)',
                                                    },
                                                }}
                                            >
                                                <ArrowBackIosNewIcon sx={{ fontSize: '16px' }} />
                                            </IconButton>
                                            <IconButton
                                                onClick={nextSlide}
                                                size="small"
                                                sx={{
                                                    position: 'absolute',
                                                    right: 10,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                                                    color: 'white',
                                                    padding: '6px',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(0, 0, 0, 0.8)',
                                                    },
                                                }}
                                            >
                                                <ArrowForwardIosIcon sx={{ fontSize: '16px' }} />
                                            </IconButton>

                                            {/* Dots Navigation */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    bottom: 10,
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    display: 'flex',
                                                    gap: 1,
                                                }}
                                            >
                                                {datathonHero.images.map((_, index) => (
                                                    <Box
                                                        key={index}
                                                        onClick={() => goToSlide(index)}
                                                        sx={{
                                                            width: currentSlide === index ? 24 : 8,
                                                            height: 8,
                                                            borderRadius: 4,
                                                            bgcolor: currentSlide === index ? 'rgb(48, 164, 199)' : 'rgba(255, 255, 255, 0.5)',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.3s',
                                                            '&:hover': {
                                                                bgcolor: currentSlide === index ? 'rgb(48, 164, 199)' : 'rgba(255, 255, 255, 0.8)',
                                                            },
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </Box>

                                        {/* Right Column - Info */}
                                        <Box sx={{ flex: { xs: 'none', sm: '1' }, width: { xs: '100%', sm: 'auto' }, py: { xs: 3, sm: 3.6 }, px: { xs: 3, sm: 0 }, pr: { xs: 3, sm: 1.8, md: 3.6 } }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.2, sm: 1.35, md: 1.8 } }}>
                                                {/* Event Title */}
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                                                    <Typography
                                                        variant="h4"
                                                        sx={{
                                                            color: 'white',
                                                            fontWeight: 'bold',
                                                            textShadow: '0 0 10px rgba(70, 255, 249, 0.3)',
                                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                            fontSize: { xs: '1.25rem', sm: '1.58rem', md: '1.8rem' }
                                                        }}
                                                    >
                                                        {datathonHero.title}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontSize: { xs: '1.25rem', sm: '1.35rem' },
                                                            ml: 0.9,
                                                        }}
                                                    >
                                                        🏆
                                                    </Typography>
                                                </Box>

                                                {/* Event Details */}
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: 'white',
                                                        fontSize: { xs: '0.85rem', sm: '1rem' },
                                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                        lineHeight: 1.6,
                                                        fontWeight: 300,
                                                        letterSpacing: '0.02em',
                                                    }}
                                                >
                                                    📅 {datathonHero.date} | ⏰ {datathonHero.time} | 📍 {datathonHero.location} | ⏳ Sign-ups close Nov 7
                                                </Typography>

                                                {/* Event Description 1 */}
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: 'white',
                                                        fontSize: { xs: '0.85rem', sm: '1rem' },
                                                        lineHeight: 1.6,
                                                        fontWeight: 300,
                                                        letterSpacing: '0.02em',
                                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                    }}
                                                >
                                                    {datathonHero.description1}
                                                </Typography>

                                                {/* Event Description 2 */}
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: 'white',
                                                        fontSize: { xs: '0.85rem', sm: '1rem' },
                                                        lineHeight: 1.6,
                                                        fontWeight: 300,
                                                        letterSpacing: '0.02em',
                                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                    }}
                                                >
                                                    {datathonHero.description2}
                                                </Typography>

                                                {/* Register Button */}
                                                <Button
                                                    component="a"
                                                    href={datathonHero.registrationLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    variant="contained"
                                                    sx={{
                                                        background: 'linear-gradient(135deg, #0a192f 0%,rgb(15, 76, 108) 50%, rgb(48, 164, 199) 100%)',
                                                        color: '#white',
                                                        fontWeight: 600,
                                                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                                        px: { xs: 2.4, sm: 2.7 },
                                                        py: { xs: 1, sm: 1.1 },
                                                        boxShadow: '0 0 12px rgba(10,25,47,0.8)',
                                                        alignSelf: 'flex-start',
                                                        mt: { xs: 0.5, sm: 0.9 },
                                                        border: '1px solid rgba(70,255,249,0.12)',
                                                        '&:hover': {
                                                            boxShadow: '0 0 16px rgba(10,25,47,0.95)',
                                                        },
                                                    }}
                                                >
                                                    Register Now!
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Tilt>
                        </motion.div>
                    </Container>
                </Box>
            </Box>

            <Container maxWidth="lg" sx={{ pb: 8 }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 8 }} />

                    {/* What Is a Datathon */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 7.2 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3.6, justifyContent: 'center' }}>
                                    <Box
                                        sx={{
                                            height: 1.6,
                                            width: 26,
                                            borderRadius: 1.6,
                                            background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
                                            mr: 0.8,
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '1.25rem', sm: '1.58rem', md: '1.8rem' },
                                            textShadow: '0 0 10px rgba(70, 255, 249, 0.3)',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        }}
                                    >
                                        What Is a Datathon?
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
                                        color: 'white',
                                        fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        lineHeight: 1.6,
                                        fontWeight: 300,
                                        letterSpacing: '0.02em',
                                        maxWidth: 810,
                                        mx: 'auto',
                                        textAlign: 'center'
                                    }}
                                >
                                    A datathon is like a hackathon — but focused on data. Teams of students use real-world datasets to analyze, build models, uncover insights, and tell compelling stories through data. You'll get a dataset, a challenge, and a few days to turn your findings into a clear, creative presentation. At the end of the week, teams present to judges and compete for prizes, recognition, and glory 🏆
                                </Typography>
                            </motion.div>
                        </Box>
                    </motion.div>

                    {/* Visual Journey Section */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 7.2, position: 'relative' }}>
                            {/* Timeline Container */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: { xs: 2.7, md: 0 },
                                position: 'relative'
                            }}>

                                {[
                                    {
                                        lottieUrl: 'https://lottie.host/67ae5381-4d1b-4a40-a157-e55a8043c905/ZiO8LVHtll.lottie',
                                        fallbackEmoji: '📊',
                                        title: 'Dataset',
                                        description: 'Real-world data ready to explore',
                                        animation: { y: [0, -10, 0] },
                                        delay: 0
                                    },
                                    {
                                        lottieUrl: 'https://lottie.host/ee4b534f-a65f-4fcb-92bf-b697cfc00835/WgcPzGStQv.lottie',
                                        fallbackEmoji: '🔍',
                                        title: 'Analysis',
                                        description: 'Discover patterns and insights',
                                        animation: { scale: [1, 1.05, 1] },
                                        delay: 0.2
                                    },
                                    {
                                        lottieUrl: 'https://lottie.host/a93217ae-b198-4325-9edc-4e330013aee0/P0lccbCXoP.lottie',
                                        fallbackEmoji: '🎯',
                                        title: 'Presentation',
                                        description: 'Share your story and insights',
                                        animation: { y: [0, -10, 0] },
                                        delay: 0.4
                                    }
                                ].map((step, index) => (
                                    <Box key={index} sx={{ display: 'contents' }}>
                                        {/* Step */}
                                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', zIndex: 1 }}>
                                            <motion.div
                                                initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0, y: index === 1 ? 50 : 0 }}
                                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: step.delay }}
                                            >
                                                <Box sx={{
                                                    textAlign: 'center',
                                                    maxWidth: 200
                                                }}>
                                                    <motion.div
                                                        animate={step.animation}
                                                        transition={{
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                            delay: index
                                                        }}
                                                        style={{
                                                            width: '162px',
                                                            height: '162px',
                                                            margin: '0 auto 14px',
                                                        }}
                                                    >
                                                        {/* Lottie Animation */}
                                                        {step.lottieUrl ? (
                                                            <DotLottieReact
                                                                src={step.lottieUrl}
                                                                loop
                                                                autoplay
                                                                style={{
                                                                    width: '100%',
                                                                    height: '100%',
                                                                }}
                                                            />
                                                        ) : (
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '3.6rem',
                                                                }}
                                                            >
                                                                {step.fallbackEmoji}
                                                            </Typography>
                                                        )}
                                                    </motion.div>
                                                    <Typography variant="h6" sx={{ color: 'rgb(48, 164, 199)', fontWeight: 600, mb: 0.9, fontSize: '1.05rem' }}>
                                                        {step.title}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.81rem' }}>
                                                        {step.description}
                                                    </Typography>
                                                </Box>
                                            </motion.div>
                                        </Box>

                                        {/* Arrow (don't render after last step) */}
                                        {index < 2 && (
                                            <Box sx={{ display: { xs: 'block', md: 'block' }, zIndex: 1, mx: { xs: 0, md: 2 } }}>
                                                <motion.div
                                                    animate={{
                                                        x: { xs: 0, md: [0, 10, 0] },
                                                        y: { xs: [0, 10, 0], md: 0 }
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: index * 0.5
                                                    }}
                                                >
                                                    <Typography sx={{
                                                        fontSize: '3rem',
                                                        color: 'rgb(48, 164, 199)',
                                                        fontWeight: 'bold',
                                                        transform: { xs: 'rotate(90deg)', md: 'none' }
                                                    }}>
                                                        →
                                                    </Typography>
                                                </motion.div>
                                            </Box>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </motion.div>

                    <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 8 }} />

                    {/* Past Datathon Photos */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 7.2 }}>
                            {/* Title */}
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.7, justifyContent: 'center' }}>
                                    <Box
                                        sx={{
                                            height: 1.6,
                                            width: 26,
                                            borderRadius: 1.6,
                                            background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
                                            mr: 0.8,
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '1.25rem', sm: '1.58rem', md: '1.8rem' },
                                            textShadow: '0 0 10px rgba(70, 255, 249, 0.3)',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        }}
                                    >
                                        Memories from Past Datathons
                                    </Typography>
                                </Box>
                            </motion.div>

                            {/* Year Tabs */}
                            <Tabs
                                value={selectedDatathonIndex}
                                onChange={(e, newValue) => {
                                    setSelectedDatathonIndex(newValue);
                                    setCurrentPage(0);
                                }}
                                sx={{
                                    mb: 3,
                                    '& .MuiTabs-indicator': { backgroundColor: 'rgb(48, 164, 199)' }
                                }}
                            >
                                {pastDatathons.map((d, i) => (
                                    <Tab
                                        key={i}
                                        label={`${d.year} - ${d.title}`}
                                        sx={{
                                            color: 'white',
                                            fontWeight: 300,
                                            textTransform: 'none',
                                            fontSize: { xs: '0.9rem', md: '1rem' },
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                            letterSpacing: '0.02em',
                                            '&.Mui-selected': { color: 'white' }
                                        }}
                                    />
                                ))}
                            </Tabs>

                            {/* Gallery: Desktop 4x2 Grid, Mobile stacked */}
                            {pastDatathons[selectedDatathonIndex] && (
                                <Box sx={{ p: 2.5 }}>
                                    {/* Flyer - Show first on mobile, integrated in grid on desktop */}
                                    {pastDatathons[selectedDatathonIndex].flyer && (
                                        <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 3 }}>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={pastDatathons[selectedDatathonIndex].flyer}
                                                    alt={`${pastDatathons[selectedDatathonIndex].title} Flyer`}
                                                    onClick={() => setEnlargedImage({ src: pastDatathons[selectedDatathonIndex].flyer, alt: `${pastDatathons[selectedDatathonIndex].title} Flyer` })}
                                                    sx={{
                                                        width: '100%',
                                                        maxWidth: { xs: '280px', sm: '400px' },
                                                        height: 'auto',
                                                        mx: 'auto',
                                                        display: 'block',
                                                        objectFit: 'cover',
                                                        borderRadius: 2,
                                                        border: '2px solid rgba(48, 164, 199, 0.3)',
                                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                                                        transition: 'box-shadow 0.3s, transform 0.3s',
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            boxShadow: '0 8px 30px rgba(48, 164, 199, 0.5)',
                                                            transform: 'scale(1.02)'
                                                        }
                                                    }}
                                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                                />
                                            </motion.div>
                                        </Box>
                                    )}

                                    {/* Photo Grid */}
                                    <Box
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                                            gridTemplateRows: { md: 'repeat(2, 1fr)' },
                                            gap: 2
                                        }}
                                    >
                                        {/* Photos */}
                                        {pastDatathons[selectedDatathonIndex].photos.slice(currentPage * photosPerPage, (currentPage + 1) * photosPerPage).map((photo, idx) => (
                                            <motion.div
                                                key={idx}
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
                                                        height: { xs: '150px', md: '150px' },
                                                        objectFit: 'cover',
                                                        borderRadius: 2,
                                                        border: '1px solid rgba(48, 164, 199, 0.3)',
                                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                                                        transition: 'box-shadow 0.3s, transform 0.3s',
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            boxShadow: '0 8px 30px rgba(48, 164, 199, 0.5)',
                                                            transform: 'scale(1.02)'
                                                        }
                                                    }}
                                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                                />
                                            </motion.div>
                                        ))}

                                        {/* Flyer in 4th column on desktop */}
                                        {pastDatathons[selectedDatathonIndex].flyer && (
                                            <Box sx={{ display: { xs: 'none', md: 'block' }, gridColumn: 4, gridRow: '1 / 3' }}>
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.98 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3 }}
                                                    style={{ height: '100%' }}
                                                >
                                                    <Box
                                                        component="img"
                                                        src={pastDatathons[selectedDatathonIndex].flyer}
                                                        alt={`${pastDatathons[selectedDatathonIndex].title} Flyer`}
                                                        onClick={() => setEnlargedImage({ src: pastDatathons[selectedDatathonIndex].flyer, alt: `${pastDatathons[selectedDatathonIndex].title} Flyer` })}
                                                        sx={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            borderRadius: 2,
                                                            border: '2px solid rgba(48, 164, 199, 0.3)',
                                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                                                            transition: 'box-shadow 0.3s, transform 0.3s',
                                                            cursor: 'pointer',
                                                            '&:hover': {
                                                                boxShadow: '0 8px 30px rgba(48, 164, 199, 0.5)',
                                                                transform: 'scale(1.02)'
                                                            }
                                                        }}
                                                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                                    />
                                                </motion.div>
                                            </Box>
                                        )}
                                    </Box>

                                    {/* Pagination Controls */}
                                    {pastDatathons[selectedDatathonIndex].photos.length > photosPerPage && (
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mt: 3 }}>
                                            <Button
                                                onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                                                disabled={currentPage === 0}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    borderColor: 'rgb(48, 164, 199)',
                                                    color: 'rgb(48, 164, 199)',
                                                    '&:hover': {
                                                        borderColor: 'rgb(48, 164, 199)',
                                                        backgroundColor: 'rgba(48, 164, 199, 0.1)'
                                                    },
                                                    '&.Mui-disabled': {
                                                        borderColor: 'rgba(48, 164, 199, 0.3)',
                                                        color: 'rgba(48, 164, 199, 0.3)'
                                                    }
                                                }}
                                            >
                                                Previous
                                            </Button>
                                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                                Page {currentPage + 1} of {Math.ceil(pastDatathons[selectedDatathonIndex].photos.length / photosPerPage)}
                                            </Typography>
                                            <Button
                                                onClick={() => setCurrentPage(p => Math.min(Math.ceil(pastDatathons[selectedDatathonIndex].photos.length / photosPerPage) - 1, p + 1))}
                                                disabled={currentPage >= Math.ceil(pastDatathons[selectedDatathonIndex].photos.length / photosPerPage) - 1}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    borderColor: 'rgb(48, 164, 199)',
                                                    color: 'rgb(48, 164, 199)',
                                                    '&:hover': {
                                                        borderColor: 'rgb(48, 164, 199)',
                                                        backgroundColor: 'rgba(48, 164, 199, 0.1)'
                                                    },
                                                    '&.Mui-disabled': {
                                                        borderColor: 'rgba(48, 164, 199, 0.3)',
                                                        color: 'rgba(48, 164, 199, 0.3)'
                                                    }
                                                }}
                                            >
                                                Next
                                            </Button>
                                        </Box>
                                    )}
                                </Box>
                            )}
                        </Box>
                    </motion.div>

                    <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 8 }} />

                    {/* How It Works */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 7.2 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3.6, justifyContent: 'center' }}>
                                    <Box
                                        sx={{
                                            height: 1.6,
                                            width: 26,
                                            borderRadius: 1.6,
                                            background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
                                            mr: 0.8,
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '2rem', sm: '1.58rem', md: '1.8rem' },
                                            textShadow: '0 0 10px rgba(70, 255, 249, 0.3)',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        }}
                                    >
                                        How It Works
                                    </Typography>
                                </Box>
                            </motion.div>

                            <Box sx={{ position: 'relative', maxWidth: '900px', mx: 'auto' }}>
                                {[
                                    {
                                        icon: <GroupsIcon sx={{ fontSize: { xs: 40, md: 48 }, color: 'rgb(48, 164, 199)' }} />,
                                        title: 'Form a Team',
                                        description: "Teams of up to 5 members collaborate to tackle a data-driven challenge. Don't have a team yet? No worries! We'll have team-matching opportunities at kickoff."
                                    },
                                    {
                                        icon: <FileDownloadIcon sx={{ fontSize: { xs: 40, md: 48 }, color: 'rgb(48, 164, 199)' }} />,
                                        title: 'Receive the Dataset',
                                        description: "On Day 1 of the competition, the dataset and challenge(s) are revealed. This year's dataset explores Clash Royale match data — featuring player decks, outcomes, and strategies."
                                    },
                                    {
                                        icon: <AnalyticsIcon sx={{ fontSize: { xs: 40, md: 48 }, color: 'rgb(48, 164, 199)' }} />,
                                        title: 'Analyze, Model, and Create',
                                        description: "Over the next few days, teams perform exploratory data analysis (EDA), build predictive models, and develop insights or visualizations that tell a story."
                                    },
                                    {
                                        icon: <PresentToAllIcon sx={{ fontSize: { xs: 40, md: 48 }, color: 'rgb(48, 164, 199)' }} />,
                                        title: 'Present to Judges',
                                        description: "On the final day, teams present their findings to a panel of judges composed of professors, data professionals, and mentors."
                                    }
                                ].map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: { xs: 'column', md: 'row' },
                                                alignItems: { xs: 'flex-start', md: 'center' },
                                                gap: { xs: 2, md: 3 },
                                                mb: 4,
                                                position: 'relative'
                                            }}
                                        >
                                            {/* Icon */}
                                            <Box
                                                sx={{
                                                    width: { xs: 60, md: 70 },
                                                    height: { xs: 60, md: 70 },
                                                    borderRadius: '50%',
                                                    background: 'rgba(48, 164, 199, 0.1)',
                                                    border: '2px solid rgb(48, 164, 199)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0
                                                }}
                                            >
                                                {step.icon}
                                            </Box>

                                            {/* Content */}
                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        color: 'rgb(48, 164, 199)',
                                                        fontWeight: 600,
                                                        mb: 1,
                                                        fontSize: { xs: '1.05rem', md: '1.5rem' }
                                                    }}
                                                >
                                                    {step.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: 'rgba(255, 255, 255, 0.8)',
                                                        lineHeight: 1.8,
                                                        fontSize: { xs: '0.85rem', md: '1rem' }
                                                    }}
                                                >
                                                    {step.description}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Divider between steps */}
                                        {index < 3 && (
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    height: '1px',
                                                    background: 'rgba(48, 164, 199, 0.2)',
                                                    mb: 4
                                                }}
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </Box>
                        </Box>
                    </motion.div>

                    <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 8 }} />

                    {/* What to Expect */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 7.2 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.7, justifyContent: 'center' }}>
                                    <Box
                                        sx={{
                                            height: 1.6,
                                            width: 26,
                                            borderRadius: 1.6,
                                            background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
                                            mr: 0.8,
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '1.25rem', sm: '1.58rem', md: '1.8rem' },
                                            textShadow: '0 0 10px rgba(70, 255, 249, 0.3)',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        }}
                                    >
                                        What to Expect as a Participant
                                    </Typography>
                                </Box>
                            </motion.div>
                            <Box sx={{
                                p: 3.6,
                                background: 'linear-gradient(135deg, rgba(48,164,199,0.15) 0%, rgba(17,37,64,0.55) 50%, rgba(10,25,47,0.60) 100%)',
                                border: '1px solid rgba(48, 184, 199, 0.3)',
                                borderRadius: 2
                            }}>
                                <Box component="ul" sx={{ pl: 2.7 }}>
                                    {[
                                        "A collaborative and supportive environment — not just competition",
                                        "Access to mentors, advisors, and workshop sessions throughout the week",
                                        "Opportunities to learn tools like Python, pandas, scikit-learn, and Tableau",
                                        "Friendly rivalry, creativity, and (of course) snacks 🍕 and swag 🎁"
                                    ].map((item, index) => (
                                        <Typography
                                            component="li"
                                            key={index}
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                                lineHeight: 2,
                                                mb: 0.9
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>

                    <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 8 }} />

                    {/* How to Best Prepare */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 7.2 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.7, justifyContent: 'center' }}>
                                    <Box
                                        sx={{
                                            height: 1.6,
                                            width: 26,
                                            borderRadius: 1.6,
                                            background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
                                            mr: 0.8,
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '1.25rem', sm: '1.58rem', md: '1.8rem' },
                                            textShadow: '0 0 10px rgba(70, 255, 249, 0.3)',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        }}
                                    >
                                        How to Best Prepare
                                    </Typography>
                                </Box>
                            </motion.div>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: { xs: '0.85rem', sm: '1.05rem' },
                                    lineHeight: 1.8,
                                    mb: 2.7,
                                    textAlign: 'center'
                                }}
                            >
                                Even if you're new to datathons, you can succeed by preparing a little ahead of time.
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', maxWidth: '1000px', mx: 'auto' }}>
                                {/* Technical Prep */}
                                <Box sx={{ flex: 1 }}>
                                    <Box
                                        sx={{
                                            p: 3,
                                            background: 'linear-gradient(135deg, rgba(10,25,47,0.60) 0%, rgba(17,37,64,0.55) 50%, rgba(48,164,199,0.15) 100%)',
                                            border: '1px solid rgba(48, 184, 199, 0.3)',
                                            borderRadius: 2,
                                            height: '100%'
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: 'rgb(48, 164, 199)',
                                                fontWeight: 600,
                                                fontSize: { xs: '1rem', sm: '1.25rem' },
                                                mb: 1.8
                                            }}
                                        >
                                            📚 Technical Prep
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2 }}>
                                            {[
                                                "Review basic Python or R for data manipulation",
                                                "Learn libraries like pandas, matplotlib, or seaborn for analysis & visualization",
                                                "Get familiar with machine learning basics (classification, regression, clustering)",
                                                "Explore free courses on Kaggle or YouTube for quick refreshers"
                                            ].map((item, index) => (
                                                <Typography
                                                    component="li"
                                                    key={index}
                                                    sx={{
                                                        color: 'rgba(255, 255, 255, 0.85)',
                                                        fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                                        lineHeight: 1.8,
                                                        mb: 0.9
                                                    }}
                                                >
                                                    {item}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Team & Strategy Prep */}
                                <Box sx={{ flex: 1 }}>
                                    <Box
                                        sx={{
                                            p: 3,
                                            background: 'linear-gradient(135deg, rgba(10,25,47,0.60) 0%, rgba(17,37,64,0.55) 50%, rgba(48,164,199,0.15) 100%)',
                                            border: '1px solid rgba(48, 184, 199, 0.3)',
                                            borderRadius: 2,
                                            height: '100%'
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: 'rgb(48, 164, 199)',
                                                fontWeight: 600,
                                                fontSize: { xs: '1rem', sm: '1.25rem' },
                                                mb: 1.8
                                            }}
                                        >
                                            🤝 Team & Strategy Prep
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2 }}>
                                            {[
                                                "Build a team with diverse skills — coding, analysis, visualization, presentation",
                                                "Decide how you'll collaborate (GitHub, Google Colab, Notion, Slack, etc.)",
                                                "Practice working with sample datasets"
                                            ].map((item, index) => (
                                                <Typography
                                                    component="li"
                                                    key={index}
                                                    sx={{
                                                        color: 'rgba(255, 255, 255, 0.85)',
                                                        fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                                        lineHeight: 1.8,
                                                        mb: 0.9
                                                    }}
                                                >
                                                    {item}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>

                    <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 8 }} />

                    {/* Tips for Success */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 7.2 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.7, justifyContent: 'center' }}>
                                    <Box
                                        sx={{
                                            height: 1.6,
                                            width: 26,
                                            borderRadius: 1.6,
                                            background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
                                            mr: 0.8,
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '1.25rem', sm: '1.58rem', md: '1.8rem' },
                                            textShadow: '0 0 10px rgba(70, 255, 249, 0.3)',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        }}
                                    >
                                        💡 Tips for Success
                                    </Typography>
                                </Box>
                            </motion.div>
                            <Box
                                sx={{
                                    p: 2.7,
                                    background: 'linear-gradient(135deg, rgba(10,25,47,0.60) 0%, rgba(17,37,64,0.55) 50%, rgba(48,164,199,0.15) 100%)',
                                    border: '1px solid rgba(48, 184, 199, 0.3)',
                                    borderRadius: 2,
                                }}
                            >
                                <Box component="ul" sx={{ pl: 2.7, mb: 0 }}>
                                    {[
                                        "Ask questions early — mentors love to help",
                                        "Don't try to solve everything. Focus on one strong story or insight",
                                        "Keep your notebook or presentation organized from the start",
                                        "Balance analysis with storytelling — data is only powerful when explained clearly",
                                        "Have fun! This is your chance to experiment and learn in a low-pressure environment"
                                    ].map((tip, index) => (
                                        <Typography
                                            component="li"
                                            key={index}
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                                lineHeight: 2,
                                                mb: 0.9
                                            }}
                                        >
                                            {tip}
                                        </Typography>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>

                    <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 8 }} />

                    {/* FAQs */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 7.2 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3.6, justifyContent: 'center' }}>
                                    <Box
                                        sx={{
                                            height: 1.6,
                                            width: 26,
                                            borderRadius: 1.6,
                                            background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
                                            mr: 0.8,
                                        }}
                                    />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '1.25rem', sm: '1.58rem', md: '1.8rem' },
                                            textShadow: '0 0 10px rgba(70, 255, 249, 0.3)',
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        }}
                                    >
                                        Frequently Asked Questions
                                    </Typography>
                                </Box>
                            </motion.div>
                            <Box sx={{
                                border: '1px solid rgba(48, 184, 199, 0.3)',
                                borderRadius: 2,
                                background: 'linear-gradient(135deg, rgba(10,25,47,0.60) 0%, rgba(17,37,64,0.55) 50%, rgba(48,164,199,0.15) 100%)',
                                overflow: 'hidden'
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
                                                '&:hover': { backgroundColor: 'rgba(48, 164, 199, 0.05)' }
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: 'white',
                                                    fontWeight: 600,
                                                    fontSize: { xs: '0.85rem', sm: '0.95rem' }
                                                }}
                                            >
                                                {faq.question}
                                            </Typography>
                                            <ExpandMoreIcon
                                                sx={{
                                                    color: 'rgb(48, 164, 199)',
                                                    transform: openFaqIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.3s'
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
                                                        <Typography
                                                            sx={{
                                                                color: 'rgba(255, 255, 255, 0.85)',
                                                                lineHeight: 1.8,
                                                                fontSize: { xs: '0.8rem', sm: '0.9rem' }
                                                            }}
                                                        >
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

                    <Divider sx={{ borderColor: 'rgba(48, 184, 199, 0.3)', mb: 8 }} />

                    {/* Call to Action - Need Help */}
                    <motion.div variants={itemVariants}>
                        <Box
                            sx={{
                                // p: 3.6,
                                textAlign: 'center',
                                // mb: 3.6
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.35rem' },
                                    mb: 1.8
                                }}
                            >
                                Need Help?
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.85)',
                                    // mb: 2.7,
                                    fontSize: { xs: '0.85rem', sm: '0.95rem' }
                                }}
                            >
                                Reach out to us anytime at{' '}
                                <Box
                                    component="a"
                                    href="mailto:cppdsaiclub@gmail.com"
                                    sx={{
                                        color: 'rgb(48, 164, 199)',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    cppdsaiclub@gmail.com
                                </Box>
                            </Typography>
                        </Box>
                    </motion.div>

                </motion.div>
            </Container>

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
                        {/* Backdrop */}
                        <motion.div
                            onClick={() => setEnlargedImage(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', cursor: 'zoom-out' }}
                        />
                        {/* Expanded image */}
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
                                    boxShadow: '0 12px 48px rgba(0,0,0,0.5)'
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

export default DatathonContent;


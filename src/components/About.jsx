import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const About = () => {

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

    // Slideshow configuration for left image column
    const slideshowImages = ['/summit3.jpg', '/oracle.JPG'];
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (slideshowImages.length <= 1) return;
        if (!isAutoPlay) return;
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

    return (
        <Box sx={{ py: { xs: 8, md: 9 }, backgroundColor: '#0a192f' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Header Section */}
                    <Box sx={{ textAlign: 'center', mb: 0 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut"
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 3.6,
                                    fontSize: { xs: '2.2rem', sm: '2.25rem', md: '2.7rem' },
                                    background: 'linear-gradient( rgb(48, 164, 199),rgb(119, 169, 184))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textShadow: '0 0 10px rgb(48, 164, 199, 0.3)',
                                    // fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }

                                }}
                            >
                                Our Story
                            </Typography>
                        </motion.div>
                        {/* <Typography
                            variant="h6"
                            sx={{ color: 'rgb(48, 164, 199)', fontStyle: 'italic', mb: 4 }}
                        >
                            Founded in 2022, DS&AI has grown into a vibrant community of data science enthusiasts
                        </Typography> */}
                    </Box>

                    {/* Mission Statement Section */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 7.2 }}>
                            <Box
                                sx={{
                                    background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, rgb(48, 164, 199, 0.4) 100%)',
                                    borderRadius: 2.7,
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2.7 }}>
                                    {/* Left Column - Image Slideshow */}
                                    <Box
                                        sx={{
                                            flex: { xs: 'none', md: '0 0 50%' },
                                            width: { xs: '100%', md: '50%' },
                                            position: 'relative',
                                            aspectRatio: '4 / 3',
                                            overflow: 'hidden',
                                            boxShadow: '0 3.6px 18px rgba(0,0,0,0.3)'
                                        }}
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={slideshowImages[currentSlideIndex]}
                                                src={slideshowImages[currentSlideIndex]}
                                                alt="DS&AI mission"
                                                style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '10.8px'
                                                }}
                                                initial={{ opacity: 0, scale: 1.02 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 1.0 }}
                                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                            />
                                        </AnimatePresence>
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 7.2,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                display: 'flex',
                                                gap: 1.35
                                            }}
                                        >
                                            <IconButton
                                                size="small"
                                                onClick={handlePrevSlide}
                                                sx={{
                                                    backgroundColor: 'rgba(0, 0, 0, 0.45)',
                                                    color: '#fff',
                                                    border: '1px solid rgba(255,255,255,0.25)',
                                                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.65)' }
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
                                                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.65)' }
                                                }}
                                                aria-label="Next image"
                                            >
                                                <ChevronRightIcon fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </Box>

                                    {/* Right Column - Content */}
                                    <Box sx={{ flex: { xs: 'none', md: '1' }, width: { xs: '100%', md: 'auto' }, py: { xs: 2.25, md: 2.7 }, pr: { xs: 0, md: 2.7 }, pl: { xs: 1.8, md: 0 }, display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    background: 'linear-gradient( rgb(48, 164, 199),rgb(119, 169, 184))',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                    fontWeight: 'bold',
                                                    fontSize: { xs: '1.215rem', sm: '1.35rem', md: '1.62rem' },
                                                    lineHeight: 1.2,
                                                    textShadow: '0 0 10px rgb(48, 164, 199, 0.3)',
                                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                }}
                                            >
                                                We are dedicated to advancing Data Science and Artificial Intelligence
                                            </Typography>

                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: 'white',
                                                    fontSize: { xs: '0.9rem', sm: '0.945rem', md: '0.99rem' },
                                                    lineHeight: 1.6,
                                                    fontWeight: 300,
                                                    textShadow: '0 0 10.8px rgb(0, 0, 0)',
                                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                }}
                                            >
                                                The Data Science and AI club at CPP is more than just workshops and technical projects. We want to build a community. While we host meetings, plan hands-on activities, and attend conferences together, at the heart of it all we’re simply a group of students who bond over a shared interest in Data Science, AI, and STEM as a whole. As a newer club, our goal isn’t just to strengthen technical skills, but to create a space where students can learn, collaborate, and grow together. Whether it’s tackling a data challenge, playing board games after a meeting, or traveling as a group to events like summits, we aim to provide both professional development and lasting friendships. Our vision is to bring out the best in one another, building knowledge, confidence, and community along the way.                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>

                    {/* Company Connections Section */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ textAlign: 'center', mb: 5.4 }}>
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{
                                    fontWeight: 'bold',
                                    background: 'linear-gradient( rgb(48, 164, 199),rgb(119, 169, 184))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textShadow: '0 0 10px rgb(48, 164, 199, 0.3)',
                                    mb: 1.8,
                                    fontSize: { xs: '1.8rem', sm: '2.025rem', md: '2.25rem' }
                                }}
                            >
                                Our Connections
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ color: 'white', mb: 3.6, fontSize: { xs: '1.08rem', sm: '1.17rem', md: '1.26rem' } }}
                            >
                                Partnering with industry leaders to advance data science education
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, rgb(48, 164, 199, 0.4) 100%)',
                                borderRadius: 2.7,
                                p: { xs: 1.8, sm: 2.7, md: 3.6 },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <Grid container spacing={{ xs: 1.8, sm: 2.7, md: 3.6 }} justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 1.8,
                                            p: 2.7,
                                            borderRadius: 1.8,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4.5px)',
                                                boxShadow: '0 7.2px 22.5px rgba(48, 164, 199, 0.2)'
                                            }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src="/oracleLogo.png"
                                            alt="Oracle"
                                            sx={{
                                                height: { xs: 54, sm: 63, md: 72 },
                                                width: 'auto',
                                                objectFit: 'contain',
                                                maxWidth: '200px'
                                            }}
                                            onError={(e) => {
                                                console.error('Failed to load Oracle logo:', e);
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                fontSize: { xs: '0.945rem', sm: '0.99rem' }
                                            }}
                                        >
                                            Oracle
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 1.8,
                                            p: 2.7,
                                            borderRadius: 1.8,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4.5px)',
                                                boxShadow: '0 7.2px 22.5px rgba(48, 164, 199, 0.2)'
                                            }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src="/rhaiLogo.webp"
                                            alt="Resonant Health AI"
                                            sx={{
                                                height: { xs: 54, sm: 63, md: 72 },
                                                width: 'auto',
                                                objectFit: 'contain',
                                                maxWidth: '200px'
                                            }}
                                            onError={(e) => {
                                                console.error('Failed to load Resonant Health AI logo:', e);
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                                fontSize: { xs: '0.945rem', sm: '0.99rem' }
                                            }}
                                        >
                                            Resonant Health AI
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 1.8,
                                            p: 2.7,
                                            borderRadius: 1.8,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4.5px)',
                                                boxShadow: '0 7.2px 22.5px rgba(48, 164, 199, 0.2)'
                                            }
                                        }}
                                    >




                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </motion.div>


                </motion.div>
            </Container>
        </Box >
    );
};

export default About; 
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
        <Box sx={{ py: 9, backgroundColor: '#050a14' }}>
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
                                    mb: 4,
                                    background: 'linear-gradient( rgb(48, 164, 199),rgb(119, 169, 184))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textShadow: '0 0 10px rgb(48, 164, 199, 0.3)',

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
                        <Box sx={{ mb: 8 }}>
                            <Box
                                sx={{
                                    background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, rgb(48, 164, 199, 0.4) 100%)',
                                    borderRadius: 3,
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                                    {/* Left Column - Image Slideshow */}
                                    <Box
                                        sx={{
                                            flex: { xs: 'none', md: '0 0 50%' },
                                            width: { xs: '100%', md: '50%' },
                                            position: 'relative',
                                            aspectRatio: '4 / 3',
                                            overflow: 'hidden',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
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
                                                    objectFit: 'cover'
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
                                                bottom: 8,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                display: 'flex',
                                                gap: 1.5
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
                                    <Box sx={{ flex: { xs: 'none', md: '1' }, width: { xs: '100%', md: 'auto' }, py: 3, pr: { xs: 2, md: 3 }, display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    background: 'linear-gradient( rgb(48, 164, 199),rgb(119, 169, 184))',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text',
                                                    fontWeight: 'bold',
                                                    fontSize: { xs: '1.5rem', md: '1.8rem' },
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
                                                    fontSize: '1.1rem',
                                                    lineHeight: 1.6,
                                                    fontWeight: 300,
                                                    textShadow: '0 0 12px rgb(0, 0, 0)',
                                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                }}
                                            >
                                                Founded in ????, the Data Science & AI Club (DS&AI) is a student-led organization that serves as a central hub for students interested in the data sciences and its multifaceted applications in the modern world. We aim to fulfill the needs of CPP students by providing opportunities to expand personal and professional networks, and hosting events with an aim to bolster relevant skills applicable to professional development. DS&AI organizes a wide range of initiatives such as social gatherings, competitions, development workshops, and collaborations with other CPP clubs.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>

                    {/* Company Connections Section */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                                    mb: 2
                                }}
                            >
                                Our Connections
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ color: 'white', mb: 4 }}
                            >
                                Partnering with industry leaders to advance data science education
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, rgb(48, 164, 199, 0.4) 100%)',
                                borderRadius: 3,
                                p: 4,
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <Grid container spacing={4} justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 2,
                                            p: 3,
                                            borderRadius: 2,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 8px 25px rgba(48, 164, 199, 0.2)'
                                            }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src="/oracleLogo.png"
                                            alt="Oracle"
                                            sx={{
                                                height: 80,
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
                                                textAlign: 'center'
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
                                            gap: 2,
                                            p: 3,
                                            borderRadius: 2,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 8px 25px rgba(48, 164, 199, 0.2)'
                                            }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src="/company-logo-2.png"
                                            sx={{
                                                height: 80,
                                                width: 'auto',
                                                objectFit: 'contain',
                                                filter: 'brightness(0) invert(1)'
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: 'white',
                                                fontWeight: 'bold',
                                                textAlign: 'center'
                                            }}
                                        >
                                            Company Name
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 2,
                                            p: 3,
                                            borderRadius: 2,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 8px 25px rgba(48, 164, 199, 0.2)'
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
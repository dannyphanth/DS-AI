import { Box, Typography, Button, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const KaggleCard = () => {
    const slideshowImages = [
        '/michael-black-s1.jpg',
        '/michael-black-s3.jpg',
        '/michael-black-s5.jpg',
        '/michael-black-s6.jpg'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInView, setIsInView] = useState(true);
    const [isPageVisible, setIsPageVisible] = useState(true);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const containerRef = useRef(null);

    // Observe visibility in viewport
    useEffect(() => {
        if (!containerRef.current) return undefined;
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.25 }
        );
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // Listen to page visibility changes
    useEffect(() => {
        const handler = () => setIsPageVisible(!document.hidden);
        document.addEventListener('visibilitychange', handler);
        return () => document.removeEventListener('visibilitychange', handler);
    }, []);

    // Auto-advance only when visible and autoplay is enabled
    useEffect(() => {
        if (slideshowImages.length <= 1) return undefined;
        if (!isInView || !isPageVisible || !isAutoPlay) return undefined;
        const id = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
        }, 4000);
        return () => clearInterval(id);
    }, [slideshowImages.length, isInView, isPageVisible, isAutoPlay]);

    // Preload next image
    useEffect(() => {
        const next = (currentIndex + 1) % slideshowImages.length;
        const img = new Image();
        img.src = slideshowImages[next];
    }, [currentIndex, slideshowImages]);

    const handlePrev = () => {
        setIsAutoPlay(false);
        setCurrentIndex((p) => (p - 1 + slideshowImages.length) % slideshowImages.length);
    };
    const handleNext = () => {
        setIsAutoPlay(false);
        setCurrentIndex((p) => (p + 1) % slideshowImages.length);
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
                    p: 3,
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
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
                                        background: 'linear-gradient(90deg,rgb(0, 195, 255),rgba(255, 98, 41, 0.97))',
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
                                    Kaggle Teams
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
                                What is the Data Science & AI Club (DS&AI) Kaggle Team? DS&AI is now recruiting club members to be part of the official DS&AI Kaggle Team. As a team member, you will be responsible for finding a dataset and entering a competition on the Kaggle website. For more information about the Kaggle Team, click on the sign-up button to the right.
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
                                endIcon={<InfoIcon />}
                                href="https://docs.google.com/document/d/1MZy2Prhi5-UqpBZWI0DsFjWGKKy0BtImwkVtweeh6xo/edit?tab=t.0"
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
                                Sign Up
                            </Button>
                        </motion.div>
                    </Box>
                    {/* Right Column: Kaggle Slideshow */}
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
                        <Box ref={containerRef} sx={{
                            position: 'relative',
                            width: { xs: '100%', md: 520 },
                            maxWidth: 520,
                            height: { xs: 240, md: 320 },
                            borderRadius: 4,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#9cebff',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            fontFamily: 'Montserrat, Poppins, sans-serif',
                            boxShadow: '0 2px 10px rgba(0,158,161,0.08), 0 0 24px rgba(0,140,255,0.25), 0 0 60px rgba(0,140,255,0.12)',
                            transition: 'box-shadow 0.3s ease',
                            overflow: 'hidden',
                            background: 'linear-gradient(135deg, #0a192f 0%, #2d5c63 100%)',
                            border: '2px solid rgba(0, 140, 255, 0.26)',
                            '&:hover': {
                                boxShadow: '0 4px 16px rgba(0,158,161,0.12), 0 0 32px rgba(0,140,255,0.35), 0 0 90px rgba(0,140,255,0.2)'
                            }
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={slideshowImages[currentIndex]}
                                    src={slideshowImages[currentIndex]}
                                    alt="Kaggle team showcase"
                                    loading="lazy"
                                    decoding="async"
                                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.0 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                />
                            </AnimatePresence>
                            <Box sx={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1.5 }}>
                                <IconButton size="small" onClick={handlePrev} sx={{ backgroundColor: 'rgba(0,0,0,0.45)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.65)' } }} aria-label="Previous">
                                    <ChevronLeftIcon fontSize="small" />
                                </IconButton>
                                <IconButton size="small" onClick={handleNext} sx={{ backgroundColor: 'rgba(0,0,0,0.45)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.65)' } }} aria-label="Next">
                                    <ChevronRightIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Tilt>
    );
};

export default KaggleCard; 
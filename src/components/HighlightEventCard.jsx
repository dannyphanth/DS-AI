import { Box, Container, Typography, Button, Grid, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HighlightEventCard = () => {
    const [imageRatio, setImageRatio] = useState(null); // width / height
    const [currentSlide, setCurrentSlide] = useState(0);

    // Datathon information
    const datathon = {
        title: 'Data Royale',
        date: 'Nov 10-14',
        time: 'Opening - Nov 11 @ 9 AM',
        location: 'BSC Ursa Minor',
        description: 'Join us for Data Royale, our semiannual 5-day datathon where competition meets learning! Whether you\'re a beginner or seasoned data scientist, compete with teams on analyzing and gaining insights on a given dataset, learn from industry professionals, and clash your way to become the data champion!',
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
        setCurrentSlide((prev) => (prev + 1) % datathon.images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + datathon.images.length) % datathon.images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <Box
            sx={{
                background: 'transparent',
                position: 'relative',
                py: { xs: 4, md: 2 },
                mt: { xs: 2, md: 0 },
                '&::before': {
                    content: '""',
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
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 4, sm: 2, md: 4 }, alignItems: { xs: 'stretch', sm: 'center' } }}>
                                {/* Left Column - Image Carousel */}
                                <Box
                                    sx={{
                                        flex: { xs: 'none', sm: 'none' },
                                        width: { xs: '100%', sm: '250px', md: '380px' },
                                        maxWidth: { xs: '300px', sm: '250px', md: '350px' },
                                        height: { xs: 'auto', sm: 'auto', md: 'auto' },
                                        aspectRatio: imageRatio ? `${imageRatio}` : '4/3',
                                        mx: { xs: 'auto', sm: 0 },
                                        mt: { xs: 0, sm: 0 },
                                        pl: { xs: 0, sm: 3, md: 0 },
                                        pr: { xs: 0, sm: 3, md: 0 },
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: 1,
                                        backgroundColor: 'transparent'
                                    }}
                                >
                                    <img
                                        src={datathon.images[currentSlide]}
                                        alt={datathon.title}
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
                                        {datathon.images.map((_, index) => (
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
                                <Box sx={{ flex: { xs: 'none', sm: '1' }, width: { xs: '100%', sm: 'auto' }, py: { xs: 3, sm: 4 }, px: { xs: 3, sm: 0 }, pr: { xs: 3, sm: 2, md: 4 } }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, sm: 2, md: 3 } }}>
                                        {/* Event Title */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
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
                                                {datathon.title}
                                            </Typography>
                                        </Box>

                                        {/* Event Details */}
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'white',
                                                fontSize: '1.1rem',
                                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                lineHeight: 1.6,
                                                fontWeight: 300,
                                                letterSpacing: '0.02em',
                                            }}
                                        >
                                            📅 {datathon.date} | ⏰ {datathon.time} | 📍 {datathon.location}
                                        </Typography>

                                        {/* Event Description */}
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'white',
                                                fontSize: '1.1rem',
                                                lineHeight: 1.6,
                                                fontWeight: 300,
                                                letterSpacing: '0.02em',
                                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                            }}
                                        >
                                            {datathon.description}
                                        </Typography>

                                        {/* Register Button */}
                                        <Button
                                            component="a"
                                            href={datathon.registrationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="contained"
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
        </Box >
    );
};

export default HighlightEventCard; 
import { Box, Container, Typography, Button, Grid, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';

const DatathonEventCard = () => {
    const [imageRatio, setImageRatio] = useState(null); // width / height

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
                                background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, rgba(48, 164, 199, 0.28) 100%)',
                                border: '2px solid rgba(41, 105, 157, 0.6)',
                                borderRadius: 1,
                                boxShadow: '0 8px 32px rgba(41, 105, 157, 0.4)',
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: 'inherit',
                                    pointerEvents: 'none',
                                    background: `
                                        radial-gradient(1000px 400px at 10% -15%, rgba(48,164,199,0.10), transparent 60%),
                                        radial-gradient(800px 320px at 110% 10%, rgba(70,255,249,0.08), transparent 60%)
                                    `,
                                    opacity: 1
                                },
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 12px 40px rgba(41, 105, 157, 0.8)',
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 4, sm: 2, md: 4 }, alignItems: { xs: 'stretch', sm: 'center' } }}>
                                {/* Left Column - Image */}
                                <Box
                                    sx={{
                                        flex: { xs: 'none', sm: 'none' },
                                        width: { xs: '100%', sm: 'auto' },
                                        maxWidth: {
                                            xs: imageRatio ? `${Math.round(imageRatio * 260)}px` : '100%',
                                            sm: imageRatio ? `${Math.min(400, Math.round(imageRatio * 300))}px` : '400px',
                                            md: imageRatio ? `${Math.min(520, Math.round(imageRatio * 360))}px` : '520px'
                                        },
                                        height: { xs: 260, sm: 300, md: 360 },
                                        mx: { xs: 'auto', sm: 0 },
                                        mt: { xs: 2, sm: 0 },
                                        pl: { xs: 0, sm: 3, md: 0 },
                                        pr: { xs: 0, sm: 3, md: 0 },
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: 1,
                                        backgroundColor: 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <img
                                        src="/Social1.png"
                                        alt="Board Games & Study Event"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            objectPosition: 'center',
                                            display: 'block'
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
                                </Box>

                                {/* Right Column - Info */}
                                <Box sx={{ flex: { xs: 'none', sm: '1' }, width: { xs: '100%', sm: 'auto' }, py: { xs: 3, sm: 4 }, px: { xs: 3, sm: 0 }, pr: { xs: 3, sm: 2, md: 4 } }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, sm: 2, md: 3 } }}>
                                        {/* Coming Soon Badge */}
                                        <Box
                                            sx={{
                                                display: 'inline-block',
                                                background: '#2a2a2a',
                                                px: 2,
                                                py: 1,
                                                borderRadius: 1,
                                                width: 'fit-content'
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#ffffff',
                                                    fontWeight: 600,
                                                    fontSize: '0.9rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                Coming Soon!
                                            </Typography>
                                        </Box>

                                        {/* Event Title */}
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                background: 'linear-gradient( rgb(48, 164, 199),rgb(119, 169, 184))',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                textShadow: '0 0 10px rgba(48, 164, 199, 0.3)',
                                                fontWeight: 'bold',
                                                fontSize: { xs: '1.8rem', md: '2.2rem' },
                                                lineHeight: 1.2,
                                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                            }}
                                        >
                                            Board Games & Study
                                        </Typography>

                                        {/* Event Details */}
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#9cebff',
                                                fontWeight: 500,
                                                fontSize: '1.1rem',
                                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                            }}
                                        >
                                            Sunday, September 8th | 5:30 PM - 8:00 PM
                                        </Typography>

                                        {/* Event Description */}
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#9cebff',
                                                fontSize: '1.1rem',
                                                lineHeight: 1.6,
                                                fontWeight: 300,
                                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                            }}
                                        >
                                            A perfect mix of fun and productivity! Meet new members, play games with friends, and study in a chill group setting.
                                        </Typography>

                                        {/* Location Info */}
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#9cebff',
                                                fontSize: '1.1rem',
                                                lineHeight: 1.6,
                                                fontWeight: 300,
                                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                            }}
                                        >
                                            Location: TBA - Check back soon for updates!
                                        </Typography>
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

export default DatathonEventCard; 
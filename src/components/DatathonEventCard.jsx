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
                                        src="/picbkeBallSocial.png"
                                        alt="Pickleball & Tennis Social Event"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
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
                                            🎾 Pickleball & Tennis Social 🏓
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
                                            📅 September 15, 2025 | ⏰ 5:30PM - 8PM
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
                                            Come hang out and play some pickleball and tennis with us! Other CS clubs will be there too, so it's a great chance to meet new people and chill.
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
                                            📍 On Campus
                                        </Typography>

                                        {/* Additional Info */}
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
                                            No skill needed—just show up and join in. Everyone's welcome! ✨
                                        </Typography>

                                        {/* RSVP Button */}
                                        <Button
                                            component="a"
                                            href="https://forms.gle/ujERw1wK4y1ab2Tm7"
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
                                            }}
                                        >
                                            RSVP Here!
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

export default DatathonEventCard; 
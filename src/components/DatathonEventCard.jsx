import { Box, Container, Typography, Button, Grid, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const DatathonEventCard = () => {
    return (
        <Box
            sx={{
                background: '#000',
                position: 'relative',
                py: 2, // Add vertical padding for more space
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
                        glareMaxOpacity={0.1}
                        glareColor="#46fff9"
                        glarePosition="all"
                        glareBorderRadius="20px"
                        scale={1.01}
                        transitionSpeed={2000}
                    >
                        <Box
                            sx={{
                                background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, rgb(48, 164, 199, 0.4) 100%)',
                                border: '2px solid rgba(41, 105, 157, 0.8)',
                                borderRadius: 1,
                                boxShadow: '0 8px 32px rgba(41, 105, 157, 0.4)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 12px 40px rgba(41, 105, 157, 0.8)',
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                                {/* Left Column - Image */}
                                <Box
                                    sx={{
                                        flex: { xs: 'none', md: '0 0 40%' },
                                        width: { xs: '100%', md: '40%' },
                                        height: { xs: 'auto', md: 'auto' },
                                        aspectRatio: '1 / 1',
                                        backgroundImage: 'url("Past Datathon Cover.png")',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                                    }}
                                />

                                {/* Right Column - Info */}
                                <Box sx={{ flex: { xs: 'none', md: '1' }, width: { xs: '100%', md: 'auto' }, py: 4, pr: { xs: 2, md: 4 } }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
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
                                            2025 Data Wars: The AI Awakens
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
                                            Thurs. February 7th | CPP BSC, Ursa Major
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
                                            Compete in our upcoming datathon, apply your data science skills, and be judged by industry professionals!
                                        </Typography>

                                        {/* Sign Up Link */}
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
                                            Sign up{' '}
                                            <Link
                                                to=""
                                                style={{
                                                    color: 'rgb(30, 180, 226)',
                                                    textDecoration: 'underline',
                                                    fontWeight: 500,
                                                    transition: 'all 0.3s ease',
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = 'rgb(30, 180, 226)';
                                                    e.target.style.textShadow = '0 0 8px rgba(70, 255, 249, 0.5)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = '#46rgb(30, 180, 226)';
                                                    e.target.style.textShadow = 'none';
                                                }}
                                            >
                                                here!
                                            </Link>
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
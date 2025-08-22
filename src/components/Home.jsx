import { Box, Container, Typography, Button, Grid, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MembershipCard from './MembershipCard';
import KaggleCard from './KaggleCard';
import DatathonCard from './DatathonCard';
import DatathonEventCard from './DatathonEventCard';
import EventsCard from './EventsCard';
import DigitalBadgesCard from './DigitalBadgesCard';

const Home = () => {
    const ctaSections = [
        {
            title: 'Why Become a Member?',
            description: 'DS&AI club members get access to exclusive opportunities like Kaggle Teams, subsidized conferences, and learning resources to further their knowledge. ',
            buttonText: 'More Info',
            buttonLink: '/about'
        },
        {
            title: 'Kaggle Teams',
            description: 'What is the Data Science & AI Club (DS&AI) Kaggle Team? DS&AI is now recruiting club members to be part of the official DS&AI Kaggle Team. As a team member, you will be responsible for finding a dataset and entering a competition on the Kaggle website. For more information about the Kaggle Team, click on the sign-up button to the right.',
            buttonText: 'Sign Up',
            buttonLink: '/contact'
        }
    ];

    return (
        <Box sx={{ position: 'relative', background: '#000' }}>
            {/* Hero Top Section */}
            <Box sx={{ position: 'relative', height: { xs: '60vh', md: '100vh' } }}>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.6, ease: 'easeOut' }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(
                            to bottom,
                            rgba(0,0,0,0.3) 0%,
                            rgba(0,0,0,0.3) 50%,
                            rgba(0,0,0,0.9) 100%
                        ), url('/Vanne.1Hero.png') center 20%/cover no-repeat`,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            imageRendering: 'smooth',
                            WebkitImageRendering: 'smooth',
                            imageSmoothingQuality: 'high',
                            WebkitImageSmoothingQuality: 'high',
                            backgroundPosition: { xs: 'center 35%', md: 'center 20%' },
                            backgroundSize: 'cover',
                        }}
                    />
                </motion.div>
                <Container
                    maxWidth="lg"
                    sx={{
                        position: 'relative',
                        zIndex: 3,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        color: 'white'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.75rem', md: '4rem', lg: '3.5rem' },
                                    background: 'linear-gradient(90deg, rgb(48, 164, 199),rgba(255, 98, 41, 0.76))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                }}
                            >
                                Data Science & AI Club
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    lineHeight: 1.6,
                                    mb: 1.75,
                                    maxWidth: '500px',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
                                    fontWeight: '0',
                                    mr: 'auto',
                                    color: 'rgb(203, 203, 203)',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    fontSize: { xs: '1rem', md: '1.25rem' }
                                }}
                            >
                                Empowering students with cutting-edge data science and artificial intelligence skills
                            </Typography>
                            <Box sx={{ display: 'flex', gap: { xs: 2, md: 3 }, justifyContent: 'flex-start' }}>
                                <Button
                                    component={Link}
                                    to="/events"
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        background: 'linear-gradient(135deg, #0a192f 0%,rgb(15, 76, 108) 50%,rgb(48, 164, 199) 100%)',
                                        '&:hover': {
                                            boxShadow: '0 0 10px #30a4c7',
                                        },
                                        fontWeight: 600,
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        px: { xs: 3, md: 4 },
                                        py: { xs: 1.25, md: 1.5 },
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                                    }}
                                >
                                    Events
                                </Button>
                                <Button
                                    component={Link}
                                    to="/about"
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        color: '#30a4c7',
                                        borderColor: '#30a4c7',
                                        fontWeight: 600,
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                        px: { xs: 3, md: 4 },
                                        py: { xs: 1.25, md: 1.5 },
                                        boxShadow: '0 0 10px rgba(70, 255, 249, 0.1), 2px 2px 4px rgba(0,0,0,0.8)',
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                                        '&:hover': {
                                            boxShadow: '0 0 10px #30a4c7',
                                        }
                                    }}
                                >
                                    About
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                </Container>

                {/* Blurry Fade Overlay at Bottom of Hero */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: '24px',
                        zIndex: 2,
                        pointerEvents: 'none',
                        background: 'linear-gradient(to bottom,rgba(0, 21, 51, 0.17) 0%, rgba(0, 11, 25, 0.07) 60%,rgb(0, 0, 0) 100%)',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            backdropFilter: 'blur(2px)',
                            WebkitBackdropFilter: 'blur(2px)',
                        }}
                    />
                </Box>
            </Box>

            {/* CTA Sections */}
            <Box
                sx={{
                    background: '#000',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1
                    }
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        py: { xs: 4, md: 8 },
                        color: 'white'
                    }}
                >
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            <EventsCard />
                        </motion.div>
                        <Divider
                            sx={{
                                borderColor: 'rgba(156, 235, 255, 0.2)',
                                my: { xs: 2, md: 4 },
                                '&::before, &::after': {
                                    borderColor: 'rgba(156, 235, 255, 0.2)',
                                },
                            }}
                        />
                    </Box>
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                        >
                            <DigitalBadgesCard />
                        </motion.div>
                        <Divider
                            sx={{
                                borderColor: 'rgba(156, 235, 255, 0.2)',
                                my: { xs: 2, md: 4 },
                                '&::before, &::after': {
                                    borderColor: 'rgba(156, 235, 255, 0.2)',
                                },
                            }}
                        />
                    </Box>
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <DatathonEventCard />
                        </motion.div>
                        <Divider
                            sx={{
                                borderColor: 'rgba(156, 235, 255, 0.2)',
                                my: { xs: 2, md: 4 },
                                '&::before, &::after': {
                                    borderColor: 'rgba(156, 235, 255, 0.2)',
                                },
                            }}
                        />
                    </Box>
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            <DatathonCard />
                        </motion.div>
                        <Divider
                            sx={{
                                borderColor: 'rgba(156, 235, 255, 0.2)',
                                my: { xs: 2, md: 4 },
                                '&::before, &::after': {
                                    borderColor: 'rgba(156, 235, 255, 0.2)',
                                },
                            }}
                        />
                    </Box>
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <KaggleCard />
                        </motion.div>
                        <Divider
                            sx={{
                                borderColor: 'rgba(156, 235, 255, 0.2)',
                                my: { xs: 2, md: 4 },
                                '&::before, &::after': {
                                    borderColor: 'rgba(156, 235, 255, 0.2)',
                                },
                            }}
                        />
                    </Box>
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            <MembershipCard />
                        </motion.div>
                    </Box>
                    {ctaSections.slice(2).map((section, index) => (
                        <Box key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                            >
                                <Box
                                    sx={{
                                        p: 3,
                                        borderRadius: 2,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                                        },
                                        background: 'linear-gradient(to right, rgba(255,255,255,0.05), rgba(0,200,255,0.1))',
                                        border: '1px solid rgba(70,255,249,0.1)',
                                    }}
                                >
                                    <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center" sx={{ mb: { xs: 2, md: 4 } }}>
                                        <Grid item xs={12} md={8} sx={{ textAlign: 'left' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'flex-start' }}>
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        color: '#46fff9',
                                                        textShadow: '0 0 10px rgba(70, 255, 249, 0.3)',
                                                        fontWeight: 'bold',
                                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                    }}
                                                >
                                                    {section.title}
                                                </Typography>
                                            </Box>
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
                                                {section.description}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Button
                                                    component={Link}
                                                    to={section.buttonLink}
                                                    variant="contained"
                                                    size="large"
                                                    sx={{
                                                        background: 'linear-gradient(45deg, #46fff9 0%, #ff6129 100%)',
                                                        '&:hover': {
                                                            background: 'linear-gradient(45deg, #46fff9 30%, #ff6129 100%)',
                                                        },
                                                        px: 4,
                                                        py: 1.5,
                                                        fontSize: '1.1rem',
                                                        boxShadow: '0 0 20px rgba(70, 255, 249, 0.3)',
                                                    }}
                                                >
                                                    {section.buttonText}
                                                </Button>
                                            </motion.div>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </motion.div>
                            {index < ctaSections.length - 2 && (
                                <Divider
                                    sx={{
                                        borderColor: 'rgba(156, 235, 255, 0.2)',
                                        my: { xs: 2, md: 4 },
                                        '&::before, &::after': {
                                            borderColor: 'rgba(156, 235, 255, 0.2)',
                                        },
                                    }}
                                />
                            )}
                        </Box>
                    ))}
                </Container>
            </Box>
        </Box>
    );
};

export default Home;



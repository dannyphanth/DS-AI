import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Tabs,
    Tab,
    Card,
    CardContent,
    CardMedia,
    Button,
    Grid,
    Link
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BadgesContent from './BadgesContent';

const Resources = () => {
    const [value, setValue] = useState(0);
    const location = useLocation();

    const tabParam = useMemo(() => new URLSearchParams(location.search).get('tab'), [location.search]);

    useEffect(() => {
        if (!tabParam) return;
        const index = categories.findIndex((c) => c.key.toLowerCase() === tabParam.toLowerCase());
        if (index >= 0) {
            setValue(index);
        }
    }, [tabParam]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const resources = {
        slides: [
            {
                title: 'General Meeting #8 - Intro to Pytorch',
                platform: 'DS&AI Club',
                date: 'Spr25 March 20',
                description: 'Learn about one of the most popular research deep learning frameworks',
                image: '/gm8-pytorch.png',
                link: 'https://www.canva.com/design/DAGhlROdL8Y/aFOb8u8qUWBrLWdSveE5cA/edit'
            },
            {
                title: 'Intro to Neural Networks',
                platform: 'DS&AI Club',
                date: 'Fall24',
                description: 'An overview of neural networks—the ideas behind them, how they learn, and the kinds of problems they help solve.',
                image: '/IntroToNeuralNetworks.png',
                link: 'https://docs.google.com/presentation/d/1L80_AYXRPXVr-8kbgWOZ_T_e3dgfAuPMTtlrPeGe5Dg/edit?slide=id.g30e2cf3d743_0_145#slide=id.g30e2cf3d743_0_145'
            },
            {
                title: 'GANs (Generative Adversarial Networks)',
                platform: 'DS&AI Club',
                date: 'Fall24',
                description: 'Learn about a type of deep learning model that pits two neural networks against each other in a competitive game.',
                image: '/gansGE.png',
                link: 'https://docs.google.com/presentation/d/1rx0l0oT9lGujgAqp1pPzIg77f9fiHDbqsSdgrADFCPY/edit?slide=id.g312eca421e4_0_66#slide=id.g312eca421e4_0_66'
            },

        ],
        videos: [
            {
                title: 'But what is a neural network?',
                platform: 'DS&AI Club',
                description: 'What are the neurons, why are there layers, and what is the math underlying it?',
                image: '/video1.jpg',
                link: 'https://www.youtube.com/watch?v=aircAruvnKk'
            },
            {
                title: 'But what is a GPT?',
                platform: 'DS&AI Club',
                description: 'Breaking down how Large Language Models work, visualizing how data flows through',
                image: '/video2.jpg',
                link: 'https://www.youtube.com/watch?v=wjZofJX0v4M'
            }
        ],
        badges: [
            {
                title: 'Data Science Badge',
                platform: 'DS&AI Club',
                description: 'Digital badge for completing our data science fundamentals course.',
                image: '/badge-fundamentals.png',
                link: '#'
            },
            {
                title: 'Machine Learning Badge',
                platform: 'DS&AI Club',
                description: 'Digital badge for demonstrating proficiency in machine learning.',
                image: '/badge-ml.png',
                link: '#'
            }
        ]
    };

    const categories = [
        { label: 'Meeting Slides', icon: <SlideshowIcon />, key: 'slides' },
        { label: 'Videos', icon: <VideoLibraryIcon />, key: 'videos' },
        { label: 'Digital Badges', icon: <EmojiEventsIcon />, key: 'badges' }
    ];

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
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <Box sx={{ py: 8, backgroundColor: '#050a14' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeOut"
                    }}
                    style={{ textAlign: 'center', marginBottom: '0.5rem' }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            background: 'linear-gradient( rgb(48, 164, 199),rgb(119, 169, 184))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: '0 0 12px rgba(70,255,249,0.25), 0 0 24px rgba(41,105,157,0.2)'
                        }}
                    >
                        Learn by Doing
                    </Typography>
                </motion.div>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            '& .MuiTab-root': {
                                minHeight: 64,
                                fontSize: '1rem',
                                color: 'white',
                                '&.Mui-selected': {
                                    color: 'white'
                                }
                            }
                        }}
                    >
                        {categories.map((category, index) => (
                            <Tab
                                key={index}
                                icon={category.icon}
                                label={category.label}
                                iconPosition="start"
                            />
                        ))}
                    </Tabs>
                </Box>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <AnimatePresence mode="wait" key={value}>
                        {categories[value].key === 'badges' ? (
                            <BadgesContent />
                        ) : (
                            <Grid container spacing={6} justifyContent="center">
                                {[...resources[categories[value].key]].map((resource, index) => (
                                    <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <motion.div variants={itemVariants}>
                                            <Card
                                                elevation={0}
                                                sx={{
                                                    height: 400,
                                                    width: 500,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(17, 37, 64) 50%, rgb(48, 164, 199) 120%)',
                                                    border: '1px solid rgb(48, 184, 199, 0.3)',
                                                    borderRadius: 2,
                                                    boxShadow: '0 4px 20px rgba(0, 184, 187, 0.20)',
                                                    transition: 'transform 0.2s',
                                                    '&:hover': {
                                                        transform: 'translateY(-8px)',
                                                        boxShadow: '0 8px 30px rgba(41, 105, 157, 0.8)'
                                                    }
                                                }}
                                            >
                                                <Box sx={{ height: '60%', overflow: 'hidden' }}>
                                                    <img
                                                        src={resource.image ? resource.image.split('/').map(encodeURIComponent).join('/') : resource.image}
                                                        alt={resource.title}
                                                        onError={(e) => {
                                                            e.currentTarget.src = '/slides-meeting.png';
                                                        }}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover'
                                                        }}
                                                    />
                                                </Box>
                                                <Box sx={{ height: '40%', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
                                                    <Typography
                                                        variant="h6"
                                                        component="h2"
                                                        sx={{
                                                            fontWeight: 'bold',
                                                            background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                                            WebkitBackgroundClip: 'text',
                                                            backgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            color: 'transparent',
                                                            textShadow: '0 0 12px rgba(0, 0, 0, 0.20)',

                                                            fontSize: '1.3rem',
                                                            lineHeight: 1.05,
                                                            mb: 0.1
                                                        }}
                                                    >
                                                        {resource.title}
                                                    </Typography>

                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            mt: 0,
                                                            mb: 0.2,
                                                            lineHeight: 1.15,
                                                            background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                                            WebkitBackgroundClip: 'text',
                                                            backgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            color: 'transparent',
                                                            textShadow: '0 0 12px rgba(0, 0, 0, 0.50)',
                                                            fontSize: '1rem',
                                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                        }}                                            >
                                                        {resource.description}
                                                    </Typography>

                                                    {resource.date && (
                                                        <Typography
                                                            variant="caption"
                                                            sx={{
                                                                mt: 0.1,
                                                                mb: 0.2,
                                                                lineHeight: 1.1,
                                                                background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                                                WebkitBackgroundClip: 'text',
                                                                backgroundClip: 'text',
                                                                WebkitTextFillColor: 'transparent',
                                                                color: 'transparent',
                                                                textShadow: '0 0 12px rgba(0, 0, 0, 0.50)',
                                                                fontSize: '0.9rem',
                                                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                            }}
                                                        >
                                                            {resource.date}
                                                        </Typography>
                                                    )}

                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        href={resource.link}
                                                        target="_blank"
                                                        size="small"
                                                        sx={{
                                                            fontSize: '0.9rem',
                                                            py: 0.6,
                                                            px: 1.6,
                                                            background: 'rgba(48, 184, 199, 0.2)',
                                                            color: 'white',
                                                            fontWeight: 600,
                                                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.20)',
                                                            border: '1px solid rgba(48, 184, 199, 0.5)',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(48, 184, 199, 0.3)',
                                                                borderColor: 'rgba(48, 184, 199, 0.7)',
                                                                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.45)'
                                                            }
                                                        }}
                                                    >
                                                        Access Resource
                                                    </Button>
                                                </Box>
                                            </Card>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </AnimatePresence>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Resources; 
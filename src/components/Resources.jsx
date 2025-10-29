import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Tabs,
    Tab,
    Card,
    Button,
    Grid
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BadgesContent from './BadgesContent';
import DatathonContent from './DatathonContent';

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
                title: 'Intro to Pytorch',
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
                link: 'https://docs.google.com/presentation/d/1rx0l0oT9lGujgAqp1pPzIg77f9fiHDbqsSdgrADFCPY/edit?slide=id.g312eca421e4_0_66#slide=id.g312eca421e4_0_145'
            },
            {
                title: 'Datathon Prep',
                platform: 'DS&AI Club',
                date: 'Fall24',
                description: 'Prepare for one of our biggest events of the semester, and be ready to build something amazing!',
                image: '/datathonprepSlide.png',
                link: 'https://docs.google.com/presentation/d/1GBkRyGOohdKMzLQD0Ja54mHpda2BOl4jt24v1IXfIjI/edit?slide=id.g2f395795646_0_10#slide=id.g2f395795646_0_10'
            }
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
        { label: 'Digital Badges', icon: <VerifiedIcon />, key: 'badges' },
        { label: 'Datathon', icon: <EmojiEventsIcon />, key: 'datathon' }
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
        <Box sx={{ py: 9, backgroundColor: '#0a192f' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 2.7, sm: 2.7, md: 1 } }}>
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
                                fontSize: { xs: '2rem', sm: '2rem', md: '2.45rem' },
                                background: 'linear-gradient( rgb(48, 164, 199),rgb(119, 169, 184))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 0 9.7px rgba(70,255,249,0.15), 0 0 19.4px rgba(41,105,157,0.2)'
                            }}
                        >
                            Learn by Doing
                        </Typography>
                    </motion.div>
                </Box>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: { xs: 3.6, sm: 1.6 } }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            '& .MuiTab-root': {
                                minHeight: { xs: 39, sm: 45, md: 52 },
                                fontSize: { xs: '0.73rem', sm: '0.81rem' },
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
                        {categories[value].key === 'datathon' ? (
                            <DatathonContent />
                        ) : categories[value].key === 'badges' ? (
                            <BadgesContent />
                        ) : (
                            <Grid container spacing={{ xs: 2.7, sm: 3.6, md: 5.4 }} justifyContent="center">
                                {[...resources[categories[value].key]].map((resource, index) => (
                                    <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <motion.div variants={itemVariants}>
                                            <Card
                                                elevation={0}
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: 450,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    background: 'linear-gradient(135deg, rgb(10, 25, 47) 0%, rgb(17, 37, 64) 50%, rgb(48, 164, 199) 120%)',
                                                    border: '1px solid rgb(48, 184, 199, 0.3)',
                                                    borderRadius: 2,
                                                    boxShadow: '0 3.6px 18px rgb(1, 0, 0)',
                                                    transition: 'transform 0.2s',
                                                    '&:hover': {
                                                        transform: 'translateY(-7.2px)',
                                                        boxShadow: '0 7.2px 27px rgba(41, 105, 157, 0.8)'
                                                    }
                                                }}
                                            >
                                                <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden' }}>
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
                                                <Box sx={{ p: { xs: 1.35, sm: 1.8 }, display: 'flex', flexDirection: 'column', gap: 0.675 }}>
                                                    <Typography
                                                        variant="h6"
                                                        component="h2"
                                                        sx={{
                                                            fontWeight: 'bold',
                                                            color: 'white',
                                                            textShadow: '0 0 10.8px rgba(0, 0, 0, 0.20)',

                                                            fontSize: { xs: '0.945rem', sm: '1.08rem', md: '1.17rem' },
                                                            lineHeight: 1.15,
                                                            mb: 0
                                                        }}
                                                    >
                                                        {resource.title}
                                                    </Typography>

                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            mt: 0,
                                                            mb: 0.45,
                                                            lineHeight: 1.3,
                                                            fontWeight: '600',
                                                            background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                                            WebkitBackgroundClip: 'text',
                                                            backgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            color: 'transparent',
                                                            textShadow: '0 0 10.8px rgba(0, 0, 0, 0.50)',
                                                            fontSize: { xs: '0.855rem', sm: '0.9rem' },
                                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: { xs: 3, sm: 3 },
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden'
                                                        }}                                            >
                                                        {resource.description}
                                                    </Typography>

                                                    {resource.date && (
                                                        <Typography
                                                            variant="caption"
                                                            sx={{
                                                                mt: 0.09,
                                                                mb: 0.36,
                                                                lineHeight: 1.1,
                                                                background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                                                WebkitBackgroundClip: 'text',
                                                                backgroundClip: 'text',
                                                                WebkitTextFillColor: 'transparent',
                                                                color: 'transparent',
                                                                textShadow: '0 0 10.8px rgba(0, 0, 0, 0.50)',
                                                                fontSize: { xs: '0.765rem', sm: '0.81rem' },
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
                                                        fullWidth
                                                        sx={{
                                                            alignSelf: 'stretch',
                                                            fontSize: { xs: '0.765rem', sm: '0.81rem' },
                                                            py: 0.54,
                                                            px: 1.44,
                                                            background: 'rgba(48, 184, 199, 0.2)',
                                                            color: 'white',
                                                            fontWeight: 600,
                                                            boxShadow: '0 3.6px 10.8px rgba(0, 0, 0, 0.20)',
                                                            border: '1px solid rgba(48, 184, 199, 0.5)',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(48, 184, 199, 0.3)',
                                                                borderColor: 'rgba(48, 184, 199, 0.7)',
                                                                boxShadow: '0 5.4px 14.4px rgba(0, 0, 0, 0.45)'
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
import { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Avatar,
    Chip,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
// import DataBackground from './DataBackground';

const Contact = () => {
    const [boardType, setBoardType] = useState('current');
    // const [iconsRevealed, setIconsRevealed] = useState(false);

    const handleBoardTypeChange = (event, newBoardType) => {
        if (newBoardType !== null) {
            setBoardType(newBoardType);
        }
    };

    // useEffect(() => {
    //     const t = setTimeout(() => setIconsRevealed(true), 700);
    //     return () => clearTimeout(t);
    // }, []);

    const currentBoardMembers = [
        {
            name: 'Megan',
            position: 'President',
            image: '/portraitex.jpg',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            email: 'megan@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/megan',
                github: 'https://github.com/megan',
                instagram: 'https://instagram.com/megan'
            }
        },
        {
            name: 'Joseline',
            position: 'Vice President',
            image: '/portraitex.jpg',
            message: 'Lorem ipsum dolor sit and ioahgd ansdf sa, tiooa sadfk askdgjasdkg askdjfhaskjdf asdkfj sa consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            email: 'joseline@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/joseline',
                github: 'https://github.com/joseline',
                instagram: 'https://instagram.com/joseline'
            }
        },
        {
            name: 'Erika',
            position: 'Secretary',
            image: '/portraitex.jpg',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            email: 'erika@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/erika',
                github: 'https://github.com/erika',
                instagram: 'https://instagram.com/erika'
            }
        },
        {
            name: 'Paul',
            position: 'Treasurer',
            image: '/portraitex.jpg',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            email: 'paul@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/paul',
                github: 'https://github.com/paul',
                instagram: 'https://instagram.com/paul'
            }
        },
        {
            name: 'Angela',
            position: 'Events Coordinator',
            image: '/portraitex.jpg',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            email: 'angela@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/angela',
                github: 'https://github.com/angela',
                instagram: 'https://instagram.com/angela'
            }
        },
        {
            name: 'Brandon',
            position: 'Kaggle Team Leader',
            image: '/portraitex.jpg',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            email: 'brandon@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/brandon',
                github: 'https://github.com/brandon',
                instagram: 'https://instagram.com/barndon'
            }
        },
        {
            name: 'Daniel Caceres',
            position: 'Webmaster',
            image: '/portraitex.jpg',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            email: 'daniel@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/daniel',
                github: 'https://github.com/daniel',
                instagram: 'https://instagram.com/daniel'
            }
        }
    ];

    const pastBoardMembers = [
        {
            name: 'Joey Cindass',
            position: 'President',
            image: '/joey.png',
            message: 'My name is Joey, computer science undergraduate minoring in statistics and data science. The multi-disciplinary foundations of data science entails methodologies aimed to gather insights and optimize processes that can maximize output with minimal input. I strive to be in the forefront of such discoveries, and apply my expertise in industries focused on the betterment of society.',
            email: 'joey.cindass@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/joey-cindass',
                github: 'https://github.com/joey-cindass',
                instagram: 'https://instagram.com/joey.cindass'
            }
        },
        {
            name: 'Nathan',
            position: 'Vice President',
            image: '/Nathan.png',
            message: "My name is Nathan and I am a fourth year Computer Science student, minoring in Data Science. I am pursuing my Master's in the hopes to deepen my knowledge in Artificial Intelligence to make a difference in the world. I believe that learning is simply a science in both humans and machine.",
            email: 'nathan@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/nathan-dsai',
                github: 'https://github.com/nathan-dsai',
                instagram: 'https://instagram.com/nathan.dsai'
            }
        },
        {
            name: 'Yunseon Choi',
            position: 'Secretary',
            image: '/Yunseon.png',
            message: "Hey there! I'm Yunseon Choi, a senior majoring in Computer Science. I've got this thing for Data Science and AI- there's just something about organizing raw data to create fresh perspectives that really excites me. I'm all about that sweet spot where technology meets information. As I dive into the world of Computer Science, my goal is to use data to push the boundaries and come up with some cool solutions.",
            email: 'yunseon.choi@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/yunseon-choi',
                github: 'https://github.com/yunseon-choi',
                instagram: 'https://instagram.com/yunseon.choi'
            }
        },
        {
            name: 'Olena Molla',
            position: 'Treasurer',
            image: '/Olena.png',
            message: 'I am deeply interested in data science and AI due to their significant impact on industry and society. These fields offer opportunities to analyze complex data, develop predictive models, and contribute to cutting-edge technological advancements. The versatile skill set and the potential to address real-world challenges are compelling reasons for my keen interest in data science and AI.',
            email: 'olena.molla@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/olena-molla',
                github: 'https://github.com/olena-molla',
                instagram: 'https://instagram.com/olena.molla'
            }
        },
        {
            name: 'Colin McGough',
            position: 'Historian',
            image: '/Colin.png',
            message: "Hey everyone, my name is Colin and I am a third year Computer Science major with a Data Science minor. Most of my Computer Science career has been focused around web development but I want to explore all that the field of Computer Science has to offer. The possibilities of Data Science in the future of business coupled with the current groundbreaking innovations in AI has shifted my focus into these fields.",
            email: 'colin.mcgough@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/colin-mcgough',
                github: 'https://github.com/colin-mcgough',
                instagram: 'https://instagram.com/colin.mcgough'
            }
        }
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
        }
    };

    return (
        <>
            <Box sx={{ py: 9, position: 'relative' }}>
                {/* Background color layer */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#050a14',
                        zIndex: -1
                    }}
                />
                {/**
                <DataBackground
                    refreshKey={boardType}
                    reveal={iconsRevealed}
                    sx={{
                        zIndex: 0
                    }}
                />
                **/}
                <Container maxWidth="lg" sx={{ zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut"
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h4"
                            align="center"
                            data-occupied="true"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2,
                                background: 'linear-gradient( rgb(48, 164, 199),rgb(119, 169, 184))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 0 10px rgb(48, 164, 199, 0.3)',
                                fontFamily: 'Montserrat, Poppins, sans-serif',
                                letterSpacing: '0.5px'
                            }}
                        >
                            Meet The Passionate Individuals Leading Our Team
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            delay: 0.3
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                            <ToggleButtonGroup
                                value={boardType}
                                exclusive
                                onChange={handleBoardTypeChange}
                                data-occupied="true"
                                sx={{
                                    '& .MuiToggleButton-root': {
                                        color: 'rgb(70, 184, 219)',
                                        border: '1px solid rgb(70, 184, 219)',
                                        px: 3,
                                        py: 1,
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        '&.Mui-selected': {
                                            background: 'rgb(70, 184, 219)',
                                            color: '#050a14',
                                            '&:hover': {
                                                background: 'rgb(70, 184, 219)',
                                            }
                                        },
                                        '&:hover': {
                                            background: 'rgba(70, 184, 219, 0.1)',
                                        }
                                    }
                                }}
                            >
                                <ToggleButton value="current">
                                    Current Board
                                </ToggleButton>
                                <ToggleButton value="past">
                                    Past Board
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <Grid container spacing={10} justifyContent="center">
                            {(boardType === 'current' ? currentBoardMembers : pastBoardMembers).map((member, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <motion.div variants={itemVariants}>
                                        <Card
                                            data-occupied="true"
                                            elevation={0}
                                            sx={{
                                                maxWidth: 425,
                                                width: '100%',
                                                height: 650,
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
                                                },
                                                position: 'relative',
                                                zIndex: 2
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                sx={{
                                                    height: '60%',
                                                    width: '100%',
                                                    objectFit: 'cover'
                                                }}
                                                image={member.image}
                                                alt={member.name}
                                            />
                                            <CardContent sx={{ flexGrow: 1, p: 2, pb: 0, pt: 2, display: 'flex', flexDirection: 'column' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 1 }}>
                                                    <Typography
                                                        variant="h6"
                                                        component="h2"
                                                        sx={{ fontWeight: 'bold', color: 'white', fontSize: '1.3rem', textShadow: '0 0 12px rgb(0, 0, 0)' }}
                                                    >
                                                        {member.name}
                                                    </Typography>
                                                    <Chip
                                                        label={member.position}
                                                        sx={{
                                                            background: 'rgba(48, 184, 199, 0.2)',
                                                            color: 'rgb(48, 164, 199)',
                                                            border: '1px solid rgb(48, 184, 199, 0.5)',
                                                            fontWeight: 500,
                                                            fontSize: '1rem',
                                                            height: '24px',
                                                            '& .MuiChip-label': { textShadow: '0 0 12px rgb(0, 0, 0)' }
                                                        }}
                                                    />
                                                </Box>

                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        mb: 0.5,
                                                        color: '#9cebff',
                                                        fontStyle: 'italic',
                                                        textAlign: 'center',
                                                        lineHeight: 1.6,
                                                        flexGrow: 1,
                                                        fontSize: '0.875rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        textShadow: '0 0 12px rgb(0, 0, 0)'
                                                    }}
                                                >
                                                    "{member.message}"
                                                </Typography>

                                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 'auto', mb: -1 }}>
                                                    <IconButton
                                                        href={`mailto:${member.email}`}
                                                        sx={{
                                                            color: 'rgb(48, 164, 199)',
                                                            filter: 'drop-shadow(0 0 12px rgb(0, 0, 0))',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(48, 184, 199, 0.1)'
                                                            }
                                                        }}
                                                    >
                                                        <EmailIcon />
                                                    </IconButton>
                                                    {member.socials.linkedin && (
                                                        <IconButton
                                                            href={member.socials.linkedin}
                                                            target="_blank"
                                                            sx={{
                                                                color: 'rgb(48, 164, 199)',
                                                                filter: 'drop-shadow(0 0 12px rgb(0, 0, 0))',
                                                                '&:hover': {
                                                                    backgroundColor: 'rgba(48, 184, 199, 0.1)'
                                                                }
                                                            }}
                                                        >
                                                            <LinkedInIcon />
                                                        </IconButton>
                                                    )}
                                                    {member.socials.github && (
                                                        <IconButton
                                                            href={member.socials.github}
                                                            target="_blank"
                                                            sx={{
                                                                color: 'rgb(48, 164, 199)',
                                                                filter: 'drop-shadow(0 0 12px rgb(0, 0, 0))',
                                                                '&:hover': {
                                                                    backgroundColor: 'rgba(48, 184, 199, 0.1)'
                                                                }
                                                            }}
                                                        >
                                                            <GitHubIcon />
                                                        </IconButton>
                                                    )}

                                                    {member.socials.instagram && (
                                                        <IconButton
                                                            href={member.socials.instagram}
                                                            target="_blank"
                                                            sx={{
                                                                color: 'rgb(48, 164, 199)',
                                                                filter: 'drop-shadow(0 0 12px rgb(0, 0, 0))',
                                                                '&:hover': {
                                                                    backgroundColor: 'rgba(48, 184, 199, 0.1)'
                                                                }
                                                            }}
                                                        >
                                                            <InstagramIcon />
                                                        </IconButton>
                                                    )}
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Container>
            </Box>
        </>
    );
};

export default Contact; 
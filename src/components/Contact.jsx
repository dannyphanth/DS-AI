import { useState } from 'react';
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
            image: '/MeganWeb.JPG',
            message: "Hi! I'm a Senior majoring in Computer Science with a minor in Data Science. While I'm passionate about Data Science and AI, I also love working with embedded software and UAVs. If you ever have questions about CPP, computer science, or just want to chat, feel free to reach out! You can find me on Instagram @meganbee4, and if you're feeling extra adventurous, you can also connect with me on LinkedIn @megan-bee. Bonus points if you want to rally on the tennis court! 🎾",
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
            image: '/JosieWeb.JPG',
            message: "Hello! I'm a junior majoring in Computer Science with a concentration in Data Science. I'm still dabbling in the different areas, but I really like web design and utilizing knowledge bases. I like playing video games, listening to music, and drinking coffee (sorry, I'm a matcha disliker). You can catch me doom-scrolling on Instagram @joseliiiiiine or attempting to look professional on LinkedIn as Joseline Ly! Feel free to drop any recs or fun games that you enjoy!",
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
            image: '/ErikaWeb.JPG',
            message: 'Hey! I’m a 5th-year Computer Science undergrad minoring in Data Science and Cybersecurity. I’m interested in where those two areas overlap, whether that’s applying machine learning to security processes or rethinking how we handle data in secure spaces.  Outside of school, you’ll usually find me at a concert or festival, adding to my vinyl collection, or exploring new food spots.',
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
            image: '/PaulWeb.JPG',
            message: 'Hello reader! I’m a junior majoring in Computer Science, focusing on the topic of machine learning. In my free time, I enjoy playing video games, sports such as volleyball and tennis, and netflixing. You can find me on Instagram @myunwon_  or look on my LinkedIn as Paul Myung. Hmu to play any fps game or PEAK games!',
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
            image: '/AngelaWeb.png',
            message: "Hello! I'm a senior studying Computer Science with a minor in Data Science. I'm passionate about using AI and data science to tackle real-world problems, and I also love experimenting with creative technology like VR, game development, music, and UI/UX design. Outside of CS, I'm looking to make more music and start crocheting, and I love going on walks with my dog. If you ever want to swap game ideas, chat about projects, or share dog pictures, I'd be happy to connect anytime! :)",
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
            image: '/BrandonWeb.jpg',
            message: "Hi! I am a 5th year studying Computer Science with a minor in Data Science. I plan to strengthen my skills in ML and AI, and bring impact into various fields such as business, retail, and finance industries. Aside from studies, I really enjoy watching sports (NBA, MLB, UFC, F1), eating food, playing clash royale, drinking abnormal amounts of caffeine, working out, and listening to EDM. My door is always open to chat about projects, career, or hobbies! :3",
            email: 'brandon@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/brandon',
                github: 'https://github.com/brandon',
                instagram: 'https://instagram.com/barndon'
            }
        },
        {
            name: 'Danny',
            position: 'Historian',
            image: '/DannyWeb.JPG',
            message: "Hello! I'm currently a senior majoring in Computer Science. My inspiration has always been to make a difference at the frontiers of technology. From gaming to creating real-world applications, I've discovered a passion for combining creativity and problem-solving while making something impactful. I absolutely love everything sci-fi and cyberpunk themed, with Ready Player One being one of my favorites.",
            email: 'daniel@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/daniel',
                github: 'https://github.com/daniel',
                instagram: 'https://instagram.com/daniel'
            }
        },
        {
            name: 'Anthony',
            position: 'Kaggle Team Co-Director',
            image: '/portraitex.jpg',
            message: "Hey there! I'm currently a senior studying computer information systems with a minor is data science! I enjoy using descriptive analytics and machine learning algorithms to coach my own performance and others when it comes to games or sales. Aside from studies, I enjoy video games and road-tripping around Cali to explore all kinds of nature. Feel free to reach out to talk about any interests about data or hobbies; I'd love to get to know everyone!",
            email: 'anthony@dsai-club.edu',
            socials: {
                linkedin: 'https://linkedin.com/in/anthony',
                github: 'https://github.com/anthony',
                instagram: 'https://instagram.com/anthony'
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
                        backgroundColor: '#0a192f',
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
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3.6 }}>
                        <ToggleButtonGroup
                            value={boardType}
                            exclusive
                            onChange={handleBoardTypeChange}
                            data-occupied="true"
                            sx={{
                                '& .MuiToggleButton-root': {
                                    color: 'rgb(70, 184, 219)',
                                    border: '1px solid rgb(70, 184, 219)',
                                    px: 2.7,
                                    py: 0.9,
                                    fontSize: '0.81rem',
                                    fontWeight: 500,
                                    boxShadow: '0 4px 20px rgb(1, 0, 0)',
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

                    <Grid container spacing={9} justifyContent="center">
                        {(boardType === 'current' ? currentBoardMembers : pastBoardMembers).map((member, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    data-occupied="true"
                                    elevation={0}
                                    sx={{
                                        maxWidth: 382.5,
                                        width: '100%',
                                        height: 720,
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
                                        },
                                        position: 'relative',
                                        zIndex: 2
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            height: '45%',
                                            width: '100%',
                                            objectFit: 'cover'
                                        }}
                                        image={member.image}
                                        alt={member.name}
                                    />
                                    <CardContent sx={{ flexGrow: 1, p: 3, pb: 1, pt: 3, display: 'flex', flexDirection: 'column' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                                            <Typography
                                                variant="h6"
                                                component="h2"
                                                sx={{ fontWeight: 'bold', color: 'white', fontSize: '1.3rem', textShadow: '0 0 12px rgb(0, 0, 0)' }}
                                            >
                                                {member.name}
                                            </Typography>
                                            {member.position && (
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
                                            )}
                                        </Box>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                mb: 1,
                                                color: '#9cebff',
                                                fontStyle: 'italic',
                                                textAlign: 'center',
                                                lineHeight: 1.6,
                                                flexGrow: 1,
                                                fontSize: '0.9rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textShadow: '0 0 12px rgb(0, 0, 0)'
                                            }}
                                        >
                                            "{member.message}"
                                        </Typography>

                                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 'auto', mb: 1 }}>
                                            <IconButton
                                                href={`mailto:${member.email}`}
                                                sx={{
                                                    color: 'rgb(48, 164, 199)',
                                                    filter: 'drop-shadow(0 0 10.8px rgb(0, 0, 0))',
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
                                                        filter: 'drop-shadow(0 0 10.8px rgb(0, 0, 0))',
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
                                                        filter: 'drop-shadow(0 0 10.8px rgb(0, 0, 0))',
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
                                                        filter: 'drop-shadow(0 0 10.8px rgb(0, 0, 0))',
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
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Contact; 
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
    const projects = [
        {
            title: 'AI-Powered Study Assistant',
            description: 'An intelligent chatbot that helps students with their studies by providing personalized learning resources and answering questions.',
            image: '/study-assistant.png',
            technologies: ['Python', 'TensorFlow', 'React', 'MongoDB'],
            github: 'https://github.com/dsai-club/study-assistant',
            demo: 'https://study-assistant.demo'
        },
        {
            title: 'Data Visualization Dashboard',
            description: 'Interactive dashboard for visualizing and analyzing student performance data across different courses and semesters.',
            image: '/dashboard.png',
            technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
            github: 'https://github.com/dsai-club/data-dashboard',
            demo: 'https://dashboard.demo'
        },
        {
            title: 'Smart Campus Navigation',
            description: 'AI-powered navigation system that helps students find the shortest path to their classes and provides real-time updates.',
            image: '/navigation.png',
            technologies: ['Python', 'OpenCV', 'Flask', 'SQLite'],
            github: 'https://github.com/dsai-club/campus-nav',
            demo: 'https://campus-nav.demo'
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
        <Box sx={{ py: 8, backgroundColor: '#0a192f' }}>
            <Container maxWidth="lg">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        align="center"
                        sx={{ mb: 6, fontWeight: 'bold', color: 'white' }}
                    >
                        Our Projects
                    </Typography>

                    <Typography
                        variant="h6"
                        align="center"
                        sx={{ mb: 8, maxWidth: 800, mx: 'auto', color: '#9cebff' }}
                    >
                        Explore our innovative projects that combine data science and artificial intelligence
                        to solve real-world problems and enhance the student experience.
                    </Typography>

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <motion.div variants={itemVariants}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                                            }
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={project.image}
                                            alt={project.title}
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                                sx={{ fontWeight: 'bold', color: '#1a237e' }}
                                            >
                                                {project.title}
                                            </Typography>

                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                sx={{ mb: 2 }}
                                            >
                                                {project.description}
                                            </Typography>

                                            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {project.technologies.map((tech, i) => (
                                                    <Chip
                                                        key={i}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: '#e3f2fd',
                                                            color: '#1a237e',
                                                            '&:hover': {
                                                                backgroundColor: '#bbdefb'
                                                            }
                                                        }}
                                                    />
                                                ))}
                                            </Box>

                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                <Button
                                                    variant="outlined"
                                                    startIcon={<GitHubIcon />}
                                                    href={project.github}
                                                    target="_blank"
                                                    sx={{ flex: 1 }}
                                                >
                                                    GitHub
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    startIcon={<LaunchIcon />}
                                                    href={project.demo}
                                                    target="_blank"
                                                    sx={{ flex: 1 }}
                                                >
                                                    Live Demo
                                                </Button>
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
    );
};

export default Projects; 
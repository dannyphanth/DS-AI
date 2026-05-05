import { useEffect, useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TimelineIcon from '@mui/icons-material/Timeline';
import ScienceIcon from '@mui/icons-material/Science';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import AssessmentIcon from '@mui/icons-material/Assessment';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.14 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

const slideshowImages = [
    { src: '/Kaggle F2025-1.jpg', alt: 'Kaggle team meeting during Fall 2025' },
    { src: '/Kaggle F2025-2.jpg', alt: 'Kaggle team collaborating on project work' },
    { src: '/Kaggle F2025-3.jpg', alt: 'Kaggle students gathered for a club session' },
    { src: '/Kaggle F2025-4.jpg', alt: 'Kaggle members presenting and discussing ideas' },
    { src: '/Kaggle F2025-5.jpg', alt: 'Kaggle team project showcase' },
    { src: '/Kaggle F2025-6.jpg', alt: 'Students participating in the Kaggle program' },
    { src: '/Kaggle F2025-7.jpg', alt: 'Kaggle group photo from Fall 2025' },
    { src: '/Kaggle F2025-8.jpg', alt: 'Kaggle workshop and collaboration session' },
    { src: '/Kaggle F2025-9.jpg', alt: 'Kaggle team members working through experiments' },
    { src: '/Kaggle F2025-10.JPG', alt: 'Kaggle presentations and team wrap-up' },
];


const expectations = [
    {
        title: 'Data Source, EDA, and Preprocessing',
        eyebrow: 'Pipeline',
        icon: <TimelineIcon sx={{ color: 'rgb(48, 164, 199)', fontSize: 20 }} />,
        bullets: [
            'Identify the data source and why it fits the problem.',
            'Show exploratory analysis with charts that surface trends or imbalance.',
            'Document cleaning, normalization, augmentation, or other preprocessing.',
            'Call out the libraries or custom pipelines that make the workflow efficient.',
        ],
    },
    {
        title: 'Model Architecture or System Design',
        eyebrow: 'Architecture',
        icon: <ScienceIcon sx={{ color: 'rgb(48, 164, 199)', fontSize: 20 }} />,
        bullets: [
            'Present a clear block-level view of the model or system.',
            'Highlight what is novel, customized, or experimentally important.',
            'When relevant, explain the core algorithm logic or loss function in plain terms.',
        ],
    },
    {
        title: 'Training Strategy and Compute Choices',
        eyebrow: 'Training',
        icon: <ModelTrainingIcon sx={{ color: 'rgb(48, 164, 199)', fontSize: 20 }} />,
        bullets: [
            'Specify important hyperparameters such as optimizer, batch size, and learning schedule.',
            'Describe hardware, training time, and practical compute constraints.',
            'Explain regularization choices like dropout, weight decay, or early stopping.',
        ],
    },
    {
        title: 'Evaluation, Baselines, and Results',
        eyebrow: 'Validation',
        icon: <AssessmentIcon sx={{ color: 'rgb(48, 164, 199)', fontSize: 20 }} />,
        bullets: [
            'Choose metrics that match the problem, such as accuracy, F1, ROC-AUC, RMSE, or latency.',
            'Compare against a baseline instead of presenting the model in isolation.',
            'Use visuals like confusion matrices, loss curves, or sample outputs to support conclusions.',
            'Discuss ablations or component-level observations when they matter.',
        ],
    },
];

const KaggleContent = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (slideshowImages.length <= 1 || !isAutoPlay) return undefined;
        const intervalId = setInterval(
            () => setCurrentSlideIndex((prev) => (prev + 1) % slideshowImages.length),
            4200
        );
        return () => clearInterval(intervalId);
    }, [isAutoPlay]);

    const handleNextSlide = () => {
        setIsAutoPlay(false);
        setCurrentSlideIndex((prev) => (prev + 1) % slideshowImages.length);
    };

    const handlePrevSlide = () => {
        setIsAutoPlay(false);
        setCurrentSlideIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
    };

    return (
        <Box sx={{ pb: 4, pt: 0 }}>
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>

                {/* ── HERO ─────────────────────────────────────────── */}
                <motion.div variants={itemVariants}>
                    <Box
                        sx={{
                            background: 'linear-gradient(135deg, #0a192f 0%, #112240 50%, rgba(48,164,199,0.4) 100%)',
                            borderRadius: 2.7,
                            mb: { xs: 6, md: 9 },
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2.7 }}>

                            {/* Left — photo panel */}
                            <Box
                                sx={{
                                    flex: { xs: 'none', md: '0 0 50%' },
                                    width: { xs: '100%', md: '50%' },
                                    position: 'relative',
                                    minHeight: { xs: 260, sm: 320, md: 360 },
                                    alignSelf: 'stretch',
                                    overflow: 'hidden',
                                    borderRadius: '10.8px',
                                    boxShadow: '0 3.6px 18px rgba(0,0,0,0.3)',
                                }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={slideshowImages[currentSlideIndex].src}
                                        src={slideshowImages[currentSlideIndex].src}
                                        alt={slideshowImages[currentSlideIndex].alt}
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '10.8px',
                                        }}
                                        initial={{ opacity: 0, scale: 1.02 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.0 }}
                                        transition={{ duration: 0.7, ease: 'easeOut' }}
                                    />
                                </AnimatePresence>

                                {/* Slide counter badge */}
                                <Box sx={{
                                    position: 'absolute', top: 12, left: 12,
                                    display: 'flex', alignItems: 'center', gap: 0.7,
                                    px: 1.1, py: 0.5, borderRadius: 999,
                                    background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(255,255,255,0.18)',
                                }}>
                                    <AutoGraphIcon sx={{ color: '#8ee5f6', fontSize: 14 }} />
                                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                        Fall 2025
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    position: 'absolute', top: 12, right: 12,
                                    px: 0.9, py: 0.38, borderRadius: 1,
                                    background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                }}>
                                    <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.66rem', fontWeight: 700 }}>
                                        {String(currentSlideIndex + 1).padStart(2, '0')} / {String(slideshowImages.length).padStart(2, '0')}
                                    </Typography>
                                </Box>

                                {/* Centered bottom arrows (About style) */}
                                <Box sx={{
                                    position: 'absolute', bottom: 10,
                                    left: '50%', transform: 'translateX(-50%)',
                                    display: 'flex', gap: 1.2,
                                }}>
                                    <IconButton size="small" onClick={handlePrevSlide} aria-label="Previous" sx={{ backgroundColor: 'rgba(0,0,0,0.45)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.65)' } }}>
                                        <ChevronLeftIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton size="small" onClick={handleNextSlide} aria-label="Next" sx={{ backgroundColor: 'rgba(0,0,0,0.45)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.65)' } }}>
                                        <ChevronRightIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Box>

                            {/* Right — text panel */}
                            <Box sx={{
                                flex: { xs: 'none', md: '1' },
                                width: { xs: '100%', md: 'auto' },
                                py: { xs: 2.25, md: 2.7 },
                                pr: { xs: 2.7, md: 2.7 },
                                pl: { xs: 2.7, md: 0 },
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    <Typography sx={{
                                        color: 'rgb(48,164,199)', fontWeight: 700,
                                        fontSize: '0.68rem', letterSpacing: '0.16em',
                                        textTransform: 'uppercase', mb: 1.2,
                                    }}>
                                        Semester-long Project Track
                                    </Typography>

                                    <Typography variant="h4" sx={{
                                        fontWeight: 800,
                                        fontSize: { xs: '1.35rem', sm: '1.65rem', md: '1.9rem' },
                                        color: 'white',
                                        letterSpacing: '-0.02em',
                                        lineHeight: 1.2,
                                        mb: 1.6,
                                    }}>
                                        Build Real Kaggle Projects
                                    </Typography>

                                    <Typography variant="body1" sx={{
                                        color: 'white',
                                        fontSize: { xs: '0.9rem', sm: '0.945rem', md: '0.99rem' },
                                        lineHeight: 1.6,
                                        fontWeight: 300,
                                        textShadow: '0 0 10.8px rgb(0,0,0)',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        mb: 2.2,
                                    }}>
                                        Kaggle is a platform where data scientists worldwide compete on real-world problems using actual datasets. Our program brings that into the club — a team picks a competition, spends the semester on it, and presents what they built at the end.
                                    </Typography>

                                    {/* Buttons */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2, mb: 2.4 }}>
                                        <Button
                                            variant="contained"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSfPH80gV7lERJuM16ka7r_f7MRXBSfb7Z7fhjosDpjLW1ED1A/viewform"
                                            target="_blank"
                                            endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                                            sx={{
                                                background: 'rgba(48,164,199,0.92)',
                                                color: 'white', fontWeight: 700, px: 2.6, py: 1.1,
                                                transition: 'all 200ms ease',
                                                '&:hover': { background: 'rgba(62,182,216,1)', transform: 'translateY(-1px)', boxShadow: '0 8px 24px rgba(48,164,199,0.32)' },
                                            }}
                                        >
                                            Join the Next Team
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            href="#kaggle-expectations"
                                            sx={{
                                                borderColor: 'rgba(156,235,255,0.25)',
                                                color: '#c4f0ff', fontWeight: 600, px: 2.2, py: 1.1,
                                                '&:hover': { borderColor: '#7adcf3', background: 'rgba(48,164,199,0.07)' },
                                            }}
                                        >
                                            See Expectations
                                        </Button>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>

                {/* ── EXPECTATIONS ─────────────────────────────────── */}
                <motion.div variants={itemVariants}>
                    <Box id="kaggle-expectations" sx={{ mb: 9 }}>

                        {/* Section header — left-aligned, editorial */}
                        <Box sx={{ mb: 3, textAlign: 'center' }}>
                            <Typography sx={{
                                color: 'rgba(122,220,243,0.68)', fontWeight: 700,
                                fontSize: '0.68rem', letterSpacing: '0.16em',
                                textTransform: 'uppercase', mb: 1,
                            }}>
                                Program Requirements
                            </Typography>
                            <Typography variant="h3" sx={{
                                fontWeight: 900,
                                fontSize: { xs: '1.6rem', sm: '2rem', md: '2.35rem' },
                                color: 'white', letterSpacing: '-0.03em', lineHeight: 1.15, mb: 1.2,
                            }}>
                                What Teams Are Expected to Build
                            </Typography>
                            <Typography sx={{
                                color: 'rgba(255,255,255,0.58)',
                                fontSize: { xs: '0.88rem', sm: '0.95rem' },
                                lineHeight: 1.72, maxWidth: 620,
                                mx: 'auto',
                            }}>
                                Kaggle teams are meant to do more than submit a model. The expectation is that you can explain why you made the decisions you did — and back it up with results.
                            </Typography>
                        </Box>

                        {/* Numbered rows */}
                        <Box sx={{ maxWidth: 720, mx: 'auto' }}>
                            {expectations.map((section, index) => (
                                <motion.div key={section.title} variants={itemVariants}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: { xs: 2.5, md: 5 },
                                            py: { xs: 3.5, md: 4.2 },
                                            borderBottom: '1px solid rgba(48,184,199,0.11)',
                                            ...(index === 0 && { borderTop: '1px solid rgba(48,184,199,0.11)' }),
                                            transition: 'background 180ms ease',
                                            borderRadius: 1,
                                            px: { xs: 0.5, md: 1 },
                                            '&:hover': { background: 'rgba(48,164,199,0.04)' },
                                        }}
                                    >
                                        {/* Big ghost number */}
                                        <Typography sx={{
                                            fontWeight: 900,
                                            fontSize: { xs: '2.8rem', md: '4.2rem' },
                                            lineHeight: 1,
                                            color: 'rgba(48,184,199,0.16)',
                                            minWidth: { xs: 54, md: 78 },
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                            letterSpacing: '-0.04em',
                                            mt: 0.4,
                                            userSelect: 'none',
                                        }}>
                                            {String(index + 1).padStart(2, '0')}
                                        </Typography>

                                        {/* Content */}
                                        <Box sx={{ flex: 1 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.9, mb: 0.7 }}>
                                                <Box sx={{ display: 'flex', color: 'rgb(48,164,199)' }}>{section.icon}</Box>
                                                <Typography sx={{
                                                    color: 'rgba(122,220,243,0.72)', fontWeight: 700,
                                                    fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                                                }}>
                                                    {section.eyebrow}
                                                </Typography>
                                            </Box>
                                            <Typography sx={{
                                                color: 'white', fontWeight: 800,
                                                fontSize: { xs: '1.05rem', md: '1.18rem' },
                                                lineHeight: 1.3, mb: 1.4, letterSpacing: '-0.01em',
                                            }}>
                                                {section.title}
                                            </Typography>
                                            <Box component="ul" sx={{ pl: 2.2, mb: 0, mt: 0 }}>
                                                {section.bullets.map((bullet) => (
                                                    <Typography
                                                        component="li"
                                                        key={bullet}
                                                        sx={{
                                                            color: 'rgba(255,255,255,0.68)',
                                                            lineHeight: 1.74,
                                                            fontSize: { xs: '0.85rem', sm: '0.9rem' },
                                                            mb: 0.5,
                                                        }}
                                                    >
                                                        {bullet}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    </Box>
                </motion.div>

                {/* ── CTA ──────────────────────────────────────────── */}
                <motion.div variants={itemVariants}>
                    <Box
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: 3,
                            p: { xs: 3, sm: 4, md: 5 },
                            background: 'linear-gradient(135deg, rgba(7,18,36,0.97) 0%, rgba(10,26,50,0.97) 55%, rgba(48,164,199,0.13) 130%)',
                            border: '1px solid rgba(48,184,199,0.2)',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0, right: 0,
                                width: '50%', height: '100%',
                                background: 'radial-gradient(560px 260px at 100% 50%, rgba(48,164,199,0.09), transparent 70%)',
                                pointerEvents: 'none',
                            },
                        }}
                    >
                        <Box sx={{
                            position: 'relative', zIndex: 1,
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: { xs: 'flex-start', md: 'center' },
                            justifyContent: 'space-between',
                            gap: 3,
                        }}>
                            <Box>
                                <Typography sx={{
                                    color: 'rgba(122,220,243,0.7)', fontWeight: 700,
                                    fontSize: '0.68rem', letterSpacing: '0.16em',
                                    textTransform: 'uppercase', mb: 1,
                                }}>
                                    Apply Now
                                </Typography>
                                <Typography variant="h4" sx={{
                                    fontWeight: 900,
                                    fontSize: { xs: '1.4rem', sm: '1.75rem', md: '2rem' },
                                    color: 'white', letterSpacing: '-0.03em', lineHeight: 1.15, mb: 1,
                                }}>
                                    Ready to Turn Curiosity Into a Real Kaggle Project?
                                </Typography>
                                <Typography sx={{
                                    color: 'rgba(255,255,255,0.62)',
                                    fontSize: { xs: '0.88rem', sm: '0.95rem' },
                                    lineHeight: 1.72, maxWidth: 540,
                                }}>
                                    If you want a project that pushes your modeling, experimentation, and presentation skills, the Kaggle team is one of the best ways to build that experience inside the club.
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex', flexDirection: 'column',
                                alignItems: { xs: 'flex-start', md: 'flex-end' },
                                gap: 1, flexShrink: 0,
                            }}>
                                <Button
                                    variant="contained"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfPH80gV7lERJuM16ka7r_f7MRXBSfb7Z7fhjosDpjLW1ED1A/viewform"
                                    target="_blank"
                                    endIcon={<OpenInNewIcon sx={{ fontSize: 15 }} />}
                                    size="large"
                                    sx={{
                                        background: 'rgba(48,164,199,0.92)',
                                        color: 'white', fontWeight: 800,
                                        px: 3.2, py: 1.4,
                                        transition: 'all 200ms ease',
                                        '&:hover': { background: 'rgba(65,183,216,1)', transform: 'translateY(-2px)', boxShadow: '0 14px 32px rgba(48,164,199,0.3)' },
                                    }}
                                >
                                    Kaggle Interest Form
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>

            </motion.div>
        </Box>
    );
};

export default KaggleContent;

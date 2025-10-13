import { Box, Typography, Button, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import StorageIcon from '@mui/icons-material/Storage';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const membershipBenefits = [
    {
        title: 'Kaggle Teams',
        description: 'Compete in real-world data science challenges as a team.',
        icon: <EmojiEventsIcon sx={{ fontSize: 24, '& path': { fill: 'url(#membershipIconGradient)' } }} />,
        image: '/Vanne.1Hero.png',
    },
    {
        title: 'Conferences',
        description: 'Attend and present at top AI and data science conferences.',
        icon: <SchoolIcon sx={{ fontSize: 24, '& path': { fill: 'url(#membershipIconGradient)' } }} />,
        image: '/Vanne.2Hero.png',
    },
    {
        title: 'Resources',
        description: 'Access curated learning materials and exclusive content.',
        icon: <StorageIcon sx={{ fontSize: 24, '& path': { fill: 'url(#membershipIconGradient)' } }} />,
        image: '/public/assets/floral-frame.svg',
    },
];

const MembershipCard = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm')); // 600px - 959px (tablet)
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 960px - 1279px

    // Scale function for different screen sizes
    const getScaleFactor = () => {
        if (isXs) return 1; // No scaling for mobile
        if (isSm) return 0.75; // Scale down for tablet screens (768px area)
        if (isMd) return 0.85; // Scale down for medium screens (1024px area)
        return 1; // Full size for large screens (1440px+)
    };

    const scaleFactor = getScaleFactor();

    return (
        <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#026ca6"
            glarePosition="all"
            glareBorderRadius="12px"
            scale={1.01}
            transitionSpeed={1500}
        >
            {/* Hidden SVG defs for gradient fill used by icons (matches button background) */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <linearGradient id="membershipIconGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#e6fbff" />
                        <stop offset="100%" stopColor="#9cebff" />
                    </linearGradient>
                </defs>
            </svg>
            <Box
                sx={{
                    p: 4,
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    mb: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(10,25,47,0.60) 0%, rgba(17,37,64,0.55) 50%, rgba(48,164,199,0.15) 100%)',
                    border: '1px solid rgba(48,164,199,0.25)',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'inherit',
                        pointerEvents: 'none',
                        background: `
                        radial-gradient(900px 340px at 15% -10%, rgba(48,164,199,0.10), transparent 60%),
                        radial-gradient(700px 280px at 110% 20%, rgba(70,255,249,0.08), transparent 60%)
                    `,
                        opacity: 1
                    },
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 4, md: 6 },
                        alignItems: { xs: 'stretch', md: 'flex-start' },
                    }}
                >
                    {/* Left Column: Title, Description */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Box
                                    sx={{
                                        height: 2,
                                        width: 32,
                                        borderRadius: 2,
                                        background: 'linear-gradient(90deg,rgb(0, 195, 255),rgba(255, 98, 41, 0.97))',
                                        mr: 1,
                                    }}
                                />
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        textShadow: '0 0 10px rgba(70, 255, 249, 0.3)',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    }}
                                >
                                    Membership
                                </Typography>
                            </Box>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                    mb: 0,
                                    lineHeight: 1.6,
                                    fontWeight: 300,
                                    letterSpacing: '0.02em',
                                }}
                            >
                                DS&AI club members get access to exclusive opportunities like Kaggle Teams, subsidized conferences, and learning resources to further their knowledge. All you need to do to become a member is attend 3 consecutive meetings. No fees!
                            </Typography>
                        </motion.div>
                    </Box>

                    {/* Right Column: Membership Benefits Cards */}
                    <Box sx={{
                        flex: 1.5,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: { md: '60%' },
                        pt: 0,
                        mt: 0,
                        paddingTop: 0,
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'white',
                                fontWeight: 600,
                                mb: 1.5,
                                textAlign: 'center',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            }}
                        >
                            Membership Benefits
                        </Typography>

                        {/* Mobile 2-1 grid for membership benefits */}
                        <Box sx={{
                            display: { xs: 'grid', sm: 'none' },
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: 2,
                            width: '100%',
                            mt: 1
                        }}>
                            {membershipBenefits.map((benefit, index) => (
                                <Card key={`mgrid-${benefit.title}-${index}`} sx={{
                                    background: 'linear-gradient(135deg, rgb(10, 25, 47) 0%, rgb(26, 60, 100) 50%, rgb(48, 164, 199) 120%)',
                                    border: '1px solid rgba(48, 184, 199, 0.3)',
                                    borderRadius: 2,
                                    boxShadow: '0 4px 20px rgb(1, 0, 0)',
                                    overflow: 'hidden',
                                    gridColumn: { xs: index === 2 ? '1 / -1' : 'auto' },
                                    justifySelf: { xs: index === 2 ? 'center' : 'stretch' },
                                }}>
                                    <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Box sx={{ filter: 'drop-shadow(0 0 6px rgba(156, 235, 255, 0.3))', mb: 1 }}>
                                            {benefit.icon}
                                        </Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: 'white',
                                                textShadow: '0 0 12px rgba(0, 0, 0, 0.35)',
                                                fontWeight: 600,
                                                fontSize: '1rem',
                                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {benefit.title}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                                WebkitBackgroundClip: 'text',
                                                backgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                color: 'transparent',
                                                textShadow: '0 0 12px rgba(0, 0, 0, 0.35)',
                                                fontSize: '0.9rem',
                                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                textAlign: 'center',
                                                mt: 0.5
                                            }}
                                        >
                                            {benefit.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>

                        <Box sx={{
                            display: { xs: 'none', sm: 'flex' },
                            position: 'relative',
                            width: '100%',
                            height: `${320 * scaleFactor}px`,
                            minHeight: `${320 * scaleFactor}px`,
                            // display controlled above via breakpoints
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            overflow: 'visible',
                            perspective: '1200px',
                            transformStyle: 'preserve-3d',
                            minWidth: `${720 * scaleFactor}px`,
                            pt: 0,
                            mt: 0,
                            paddingTop: 0,
                        }}>
                            {membershipBenefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{
                                        rotateY: -25,
                                        rotateZ: -8,
                                        x: -60 * index,
                                        y: -20 * index,
                                        zIndex: membershipBenefits.length - index,
                                        opacity: 0.7
                                    }}
                                    animate={{
                                        rotateY: index === 0 ? 30 : index === 2 ? -30 : 0,
                                        rotateZ: (index - 1) * 5,
                                        x: index * 230 * scaleFactor - 240 * scaleFactor,
                                        y: index === 0 ? 10 : index === 2 ? 10 : 0,
                                        zIndex: index === 1 ? 1 : membershipBenefits.length - index,
                                        z: index === 1 ? -70 : 0,
                                        opacity: 1
                                    }}
                                    whileHover={{
                                        rotateY: index === 0 ? 20 : index === 2 ? -20 : 5,
                                        rotateZ: (index - 1) * 5 + 2,
                                        scale: 1.08,
                                        zIndex: 10,
                                        transition: { duration: 0.3 }
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.3,
                                        ease: "easeOut"
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: `${216 * scaleFactor}px`,
                                        height: `${260 * scaleFactor}px`,
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    <Card
                                        sx={{
                                            width: `${216 * scaleFactor}px`,
                                            height: `${260 * scaleFactor}px`,
                                            background: 'linear-gradient(135deg, rgb(10, 25, 47) 0%, rgb(26, 60, 100) 50%, rgb(48, 164, 199) 120%)',
                                            border: '1px solid rgba(48, 184, 199, 0.3)',
                                            borderRadius: 2,
                                            // boxShadow: `
                                            //     0 4px 20px rgba(0, 184, 187, 0.20),
                                            //     ${index * 3}px ${index * 3}px ${index * 6}px rgba(0,0,0,0.4)
                                            // `,
                                            overflow: 'hidden',
                                            cursor: 'default',
                                            position: 'relative',
                                            transformStyle: 'preserve-3d',
                                            '&:hover': {
                                                boxShadow: `
                                                0 8px 30px rgba(41, 105, 157, 0.8),
                                                0 16px 64px rgba(0,0,0,0.4),
                                                0 32px 128px rgba(0,0,0,0.3)
                                            `,
                                                borderColor: 'rgb(17, 29, 64)',
                                            },
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: index === 0
                                                    ? 'linear-gradient(135deg, rgba(70,255,249,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)'
                                                    : index === 2
                                                        ? 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(70,255,249,0.1) 100%)'
                                                        : 'linear-gradient(135deg, rgba(70,255,249,0.05) 0%, transparent 50%, rgba(70,255,249,0.05) 100%)',
                                                pointerEvents: 'none',
                                                zIndex: 2,
                                            },
                                        }}
                                        elevation={0}
                                    >
                                        <CardContent sx={{ p: 1, position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                            <Box sx={{ filter: 'drop-shadow(0 0 6px rgba(156, 235, 255, 0.3))' }}>
                                                {benefit.icon}
                                            </Box>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    color: 'white',
                                                    textShadow: '0 0 12px rgba(0, 0, 0, 0.35)',
                                                    fontWeight: 600,
                                                    fontSize: '1.1rem',
                                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                    mb: 0.5,
                                                    mt: 1,
                                                }}
                                            >
                                                {benefit.title}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    background: 'linear-gradient(180deg, #e6fbff 0%, #9cebff 100%)',
                                                    WebkitBackgroundClip: 'text',
                                                    backgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    color: 'transparent',
                                                    textShadow: '0 0 12px rgba(0, 0, 0, 0.35)',
                                                    fontSize: '1rem',
                                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {benefit.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Tilt>
    );
};

export default MembershipCard; 
import { Box, Typography, Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const DigitalBadgesCard = () => {
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
            <Box
                sx={{
                    p: 3,
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    mb: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(10,25,47,0.45) 0%, rgba(17,37,64,0.40) 50%, rgba(48,164,199,0.07) 100%)',
                    border: '1px solid rgba(48,164,199,0.14)',
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
                    {/* Left Column: Title, Description, Button */}
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
                                        background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
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
                                    Digital Badges
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
                                    mb: 3,
                                    lineHeight: 1.6,
                                    fontWeight: 300,
                                    letterSpacing: '0.02em',
                                }}
                            >
                                Explore specialized learning pathways that go beyond the classroom, with opportunities to gain hands-on experience in Data Science and AI. Through our club’s collaboration with faculty and campus leaders, students can earn practitioner and advanced digital badges—credentials they can proudly showcase on their resumes and LinkedIn profiles.
                            </Typography>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                variant="contained"
                                endIcon={<VerifiedIcon />}
                                component={RouterLink}
                                to="/resources?tab=badges"
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
                                    '&:hover': {
                                        boxShadow: '0 0 12px rgba(10,25,47,0.95)',
                                    },
                                }}
                            >
                                Learn more
                            </Button>
                        </motion.div>
                    </Box>

                    {/* Right Column: Placeholder Image / future slideshow */}
                    <Box sx={{
                        flex: 1.5,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: { md: '60%' },
                        pt: 0,
                        mt: 0,
                        paddingTop: 0,
                    }}>
                        <Box sx={{
                            position: 'relative',
                            width: { xs: '100%', md: 520 },
                            maxWidth: 520,
                            height: { xs: 240, md: 320 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'visible',
                            background: 'transparent',
                            border: 'none',
                            boxShadow: 'none'
                        }}>
                            {/* First badge appears immediately */}
                            <motion.img
                                src="/badgePractitioner.png"
                                alt="Practitioner Badge"
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                                style={{
                                    position: 'absolute',
                                    left: '8%',
                                    width: '42%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.35))'
                                }}
                            />

                            {/* Second badge reveals after a short delay */}
                            <motion.img
                                src="/badgeAdvanced.png"
                                alt="Advanced Badge"
                                initial={{ opacity: 0, x: 40, rotate: 2, scale: 0.92 }}
                                whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                                style={{
                                    position: 'absolute',
                                    right: '6%',
                                    width: '42%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.35))'
                                }}
                            />

                            {/* DSAI badge with infinite spring-like loop (left) */}
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: [0, 8, 0], scale: [1, 1.06, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute',
                                    top: '6%',
                                    left: '6%',
                                    width: '22%',
                                    zIndex: 3,
                                }}
                            >
                                <motion.img
                                    src={'/dsaiBadge.png'}
                                    alt="DSAI Badge"
                                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    // whileHover={{ scale: 1.08, rotate: 3 }}
                                    whileTap={{ scale: 0.95, rotate: -3 }}
                                    drag
                                    dragConstraints={{ left: -24, right: 24, top: -24, bottom: 24 }}
                                    dragElastic={0.2}
                                    transition={{ delay: 0.2, stiffness: 260, damping: 18, mass: 0.6 }}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.35))'
                                    }}
                                />
                            </motion.div>

                            {/* DSAI badge overlay for Advanced badge (right) with delayed reveal, loop starts immediately */}
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: [0, 8, 0], scale: [1, 1.06, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    position: 'absolute',
                                    top: '6%',
                                    left: '50%',
                                    width: '22%',
                                    zIndex: 3,
                                }}
                            >
                                <motion.img
                                    src={'/dsaiBadge.png'}
                                    alt="DSAI Badge Advanced"
                                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    whileHover={{ scale: 1.08, rotate: 3 }}
                                    whileTap={{ scale: 0.95, rotate: -3 }}
                                    transition={{ type: 'spring', duration: 2.8, ease: 'easeOut', delay: 1.1 }}
                                    drag
                                    dragConstraints={{ left: -24, right: 24, top: -24, bottom: 24 }}
                                    dragElastic={0.2}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.35))'
                                    }}
                                />
                            </motion.div>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Tilt>
    );
};

export default DigitalBadgesCard;



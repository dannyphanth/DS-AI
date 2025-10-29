import { Box, Typography, Button, Grid, Chip, Divider, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import DescriptionIcon from '@mui/icons-material/Description';
import { useRef, useState } from 'react';

const SectionHeading = ({ id, title, subtitle }) => (
    <Box id={id} sx={{ mb: 1.8 }}>
        <Typography
            variant="h4"
            sx={{
                fontWeight: 'bold',
                background: 'linear-gradient( rgb(48, 164, 199),rgb(119, 169, 184))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }}
        >
            {title}
        </Typography>
        {subtitle && (
            <Typography variant="body1" sx={{ color: '#9cebff', mt: 0.45, fontSize: { xs: '0.9rem', sm: '0.95rem' } }}>
                {subtitle}
            </Typography>
        )}
    </Box>
);

const Subnav = () => (
    <Box sx={{ display: 'flex', gap: 0.9, flexWrap: 'wrap', position: { md: 'sticky' }, top: { md: 14.4 }, zIndex: 1, mb: 2.7 }}>
        {[
            { href: '#intro', label: 'What are pathways?' },
            { href: '#practitioner', label: 'Practitioner badge' },
            { href: '#advanced', label: 'Advanced badge' },
            { href: '#more', label: 'More information' },
            { href: '#faq', label: 'FAQ' },
        ].map((item) => (
            <Button key={item.href} href={item.href} variant="outlined" size="small" sx={{ color: '#9cebff', borderColor: 'rgba(156,235,255,0.4)', fontSize: '0.72rem' }}>
                {item.label}
            </Button>
        ))}
    </Box>
);

const PractitionerCard = ({ title, summary, requirements, clubHelp, timeEstimate, onClick, layoutId, iconComponent }) => (
    <motion.div
        layoutId={layoutId}
        onClick={onClick}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{ cursor: 'pointer', borderRadius: 12, willChange: 'transform', height: '100%', display: 'flex' }}
    >
        <Box
            sx={{
                p: 1.8,
                borderRadius: 2,
                background: 'linear-gradient(135deg, rgba(10,25,47,0.95) 0%, rgba(17,37,64,0.95) 50%, rgba(48,164,199,0.3) 120%)',
                border: '1px solid rgba(48,184,199,0.45)',
                boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                minHeight: 315,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <Box sx={{ flex: '1 1 auto' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.9, mb: 0.9 }}>
                    {iconComponent}
                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, minHeight: 28.8, fontSize: { xs: '0.945rem', sm: '1.125rem' } }}>{title}</Typography>
                </Box>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#cfefff',
                        mb: 0.9,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {summary}
                </Typography>
                {/* Requirements (keep compact spacing) */}
                <Typography variant="subtitle2" sx={{ color: 'white', mb: 0.09, fontWeight: 700, fontSize: '0.765rem' }}>Requirements</Typography>
                <Box component="ul" sx={{ pl: 2.7, mt: 0.09, mb: 0.45, m: 0 }}>
                    {((requirements || []).slice(0, 3)).map((req) => (
                        <li key={req}>
                            <Typography variant="body2" sx={{ color: '#cfefff', fontSize: '0.765rem' }}>{req}</Typography>
                        </li>
                    ))}
                    {Array.from({ length: Math.max(0, 3 - (requirements ? Math.min(requirements.length, 3) : 0)) }).map((_, i) => (
                        <li key={`req-filler-${i}`}>
                            <Typography variant="body2" sx={{ color: 'transparent' }}>.</Typography>
                        </li>
                    ))}
                </Box>
                {/* Club Help (show all, with compact spacing) */}
                <Typography variant="subtitle2" sx={{ color: 'white', mb: 0.09, fontWeight: 700, fontSize: '0.765rem' }}>Club Help</Typography>
                <Box component="ul" sx={{ pl: 2.7, mt: 0.09, mb: 0.45, m: 0 }}>
                    {(clubHelp || []).map((h) => (
                        <li key={h}>
                            <Typography variant="body2" sx={{ color: '#cfefff', fontSize: '0.765rem' }}>{h}</Typography>
                        </li>
                    ))}
                </Box>
            </Box>
            {timeEstimate && (
                <Box sx={{ mt: 0.675 }}>
                    <Chip label={`Estimated time: ${timeEstimate}`} size="small" sx={{ color: '#cfefff', borderColor: 'rgba(156,235,255,0.4)', border: '1px solid', background: 'transparent' }} />
                </Box>
            )}
        </Box>
    </motion.div>
);

const BadgesContent = () => {
    const [selectedBadge, setSelectedBadge] = useState('practitioner'); // 'practitioner' | 'advanced'
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [openTask, setOpenTask] = useState(null);
    const [openTaskData, setOpenTaskData] = useState(null);
    const detailsRef = useRef(null);
    const [openInsight, setOpenInsight] = useState(null);
    const [openInsightData, setOpenInsightData] = useState(null);

    const handleSelect = (badgeKey) => {
        setSelectedBadge(badgeKey);
    };

    // Practitioner tasks data (friendly summaries)
    const practitionerTasks = [
        {
            key: 'ea1',
            title: 'EA1: Dissemination Beyond the Classroom',
            summary: 'Create a poster/paper and present your project at CPP or an external venue.',
            requirements: [
                'Create a poster, research paper, or formal presentation.',
                'Present at CPP Science Symposium, CARS, or a higher-level conference.',
                'If sensitive, submit a redacted version to Bronco Scholar or present to a select group.',
                'Provide proof (registration confirmation + a presentation photo).'
            ],
            help: [
                'Share upcoming research symposiums near campus.',
                'Intro lessons on academic/research writing.',
                'Examples and ideas for research scoping.'
            ],
            time: '≈ 60 hours'
        },
        {
            key: 'ea2',
            title: 'EA2: Community or Global Engagement',
            summary: 'Attend ≥ 50% of DSAI meetings in a semester and connect your project to a community.',
            requirements: [
                'Attend at least 50% of club meetings/events in one semester.',
                'Ensure the project engages a community (outreach, partnerships, education, or social impact).',
                'Provide proof of engagement (participation records or summary).'
            ],
            help: [
                'Provide tailored certificates for different semesters/presidents.',
                'Dual sign-off (president and vice).',
                'Host volunteer opportunities.'
            ],
            time: '≈ 10 hours'
        },
        {
            key: 'ea3',
            title: 'EA3: Creativity, Discovery, and Innovation',
            summary: 'Join a DSAI competition or deliver an original presentation that shows innovation.',
            requirements: [
                'Participate in at least one competition or presentation.',
                'Show originality (novel application, dataset analysis, or model approach).',
                'Submit proof (registration or program listing).'
            ],
            help: [
                'Run DSAI Datathons/Hackathons and Kaggle teams.',
                'Announce campus and nearby opportunities.',
                'Form teams that can compete outside class.'
            ],
            time: '1–2 days'
        },
        {
            key: 'ea4',
            title: 'EA4: Diverse & Multidisciplinary Perspectives',
            summary: 'Attend a non‑CS seminar impacted by DSAI and write a 500+ word report.',
            requirements: [
                'Attend a formally advertised seminar outside CS that’s highly impacted by DSAI.',
                'Write a 500+ word report analyzing DSAI in that discipline.',
                'Discuss multidisciplinary collaboration and integration of DSAI.'
            ],
            help: [
                'Maintain and share a list of relevant seminars.',
                'Help plan or publicize events.'
            ],
            time: 'A few hours (once/semester)'
        },
        {
            key: 'ea5',
            title: 'EA5: Intense Mentorship',
            summary: 'Work on an extracurricular DSAI project with ongoing mentorship (not for credit).',
            requirements: [
                'Join a faculty-led or industry-driven extracurricular DSAI project.',
                'Meet regularly with a mentor for guidance and feedback.',
                'Mentorship covers technical, professional, and personal growth.',
                'Must be extracurricular (not for course credit).'
            ],
            help: [
                'Source projects across colleges (education, healthcare, animal science, etc.).'
            ],
            time: '1 semester minimum'
        },
        {
            key: 'ea6',
            title: 'EA6: Collaborative Learning',
            summary: 'Student-led team project with a video demo or in-person presentation with sign‑offs.',
            requirements: [
                'Student-driven project with clear roles and responsibilities.',
                'Students set goals, define questions, develop solutions, and manage timelines.',
                'Submit a video demo explaining the project and roles, OR present in person with signatures.',
                'Evidence must differ across criteria.'
            ],
            help: [
                'Kaggle teams and support for independent projects.',
                'Provide resources for self-driven research.'
            ],
            time: '1 semester minimum'
        },
        {
            key: 'ea7',
            title: 'EA7: Critical Thinking & Problem Solving',
            summary: 'Write two 1000‑word reflections (in different semesters) on learning and evolution.',
            requirements: [
                'Two reports (≥ 1000 words each) in different semesters.',
                'Discuss challenges, solutions, and key learnings.',
                'Reflect on project evolution and skill development.'
            ],
            help: ['N/A'],
            time: 'A few hours across ~1 year'
        }
    ];

    // Course insights (sample entries)
    const courseInsights = [
        {
            id: 'cs4990-genai',
            course: 'CS 4990 Generative AI',
            from: 'Megan Bee',
            short: 'A great course focusing on building foundations and a semester-long group project of 4. Lectures are informative with some hands-on work...',
            quote:
                'A great course focusing on building up the foundations and working on a semester long project with a group of 4. The lectures were informative and included some hands-on work. You will learn the ground work for your semester project, however model training and testing will need to be done on your own time outside of class. Be prepared for a 20 minute presentation about it and a research paper as well.'
        },
        {
            id: 'sta4320',
            course: 'STA 4320 Applied Regression Analysis',
            from: 'Erika',
            short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            quote:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet, mauris a varius pharetra, turpis lorem bibendum tortor, sit amet efficitur sapien mi sit amet eros.'
        },
        {
            id: 'cis4567',
            course: 'CIS 4567 Big Data Analytics',
            from: 'Brandon',
            short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            quote:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, justo sit amet commodo semper, urna urna consequat quam, in pellentesque ante lectus nec turpis.'
        }
    ];

    // Data Science Minor electives (grouped)
    const electives = {
        cs: [
            'CS 4200 Artificial Intelligence (3)',
            'CS 4250 Web Search and Recommender Systems (3)',
            'CS 4350 Database Systems (3)',
            'CS 4230 Social Computing (3)',
            'CS 4990 Special Topics (3) – Data Mining',
            'CS 4990 Special Topics (3) – Prompt Engineering',
            'CS 4990 Special Topics (3) – Generative AI',
            'CS 4990 Special Topics (3) – Image Understanding',
            'CS 4990 Special Topics (3) – GPU Computing'
        ],
        statsBiz: [
            'STA 4320 Applied Regression Analysis (4)',
            'STA 4700 Categorical Data Analysis (3)',
            'CIS 3252 Business Intelligence (3)',
            'CIS 3454 Data Warehousing (3)',
            'CIS 3650 Digital Analytics (3)',
            'CIS 4320 Applied Regression Analysis (3)',
            'CIS 4321 Data Mining (3)',
            'CIS 4567 Big Data Analytics (3)',
            'CIS 4680 Advanced Data Analysis (3)',
            'TOM 3160 Business Analytics (3)'
        ],
        engineering: [
            'CE 4331/4331L GIS Applications in Engineering and Remote Sensing (3)',
            'IME 4140 Data Analysis: Application in Industrial and Systems Engineering (3)'
        ],
        class: [
            'GEO 3220/3220L GIS Programming and Application (3)',
            'GEO 4050/4050L Geodemographics with GIS (3)',
            'GEO 4100/4100L Remote Sensing of the Environment (3)',
            'GEO 4400/4400L Advanced GIS (3)',
            'GEO 4430/4430L Quantitative Spatial Analysis (3)'
        ]
    };

    return (
        <Box sx={{ color: 'white', px: { xs: 2, sm: 3, md: 4 } }}>
            {/* Hero */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', gap: { xs: 2, md: 3 }, mb: 2.7 }}>
                <Box sx={{ width: { xs: '100%', md: '60%' }, textAlign: { xs: 'center', md: 'left' } }}>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.9 }}>
                            <Box
                                sx={{
                                    height: 1.8,
                                    width: 28.8,
                                    borderRadius: 1.8,
                                    background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
                                    mr: 0.9,
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
                                Data Science & AI Pathway
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
                                fontSize: { xs: '0.9rem', sm: '0.945rem', md: '0.99rem' },
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                mb: 2.7,
                                lineHeight: 1.6,
                                fontWeight: 300,
                                letterSpacing: '0.02em',
                                mt: 0.9,
                                maxWidth: 648
                            }}
                        >
                            What are pathways and digital badges? At Cal Poly Pomona, students have access to specialized learning pathways that go beyond the classroom, offering opportunities to deepen their knowledge in emerging fields. Our club collaborates closely with a new pathway designed to expand student expertise in Data Science and AI. This initiative, developed by our advisors—Dr. Korah, Dr. Marin, and Dr. Kosaraju—alongside other campus leaders, provides students the opportunity to earn both a practitioner badge and advanced badge that can be put on resumes and linkedin profiles.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'white',
                                fontSize: { xs: '0.9rem', sm: '0.945rem', md: '0.99rem' },
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                mb: 2.7,
                                lineHeight: 1.6,
                                fontWeight: 300,
                                letterSpacing: '0.02em',
                                maxWidth: 648
                            }}
                        >
                            Digital badges are university-recognized credentials that certify a student’s proficiency through demonstrated skills and completed projects outside traditional coursework. Uniquely, these badges are designed to align with the requirements for the Data Science minor at CPP. This means that as students work toward earning their badges, they simultaneously progress toward fulfilling the requirements of the minor—making the pathway both practical and rewarding.
                        </Typography>
                    </motion.div>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', md: '40%' } }}>
                    <motion.img
                        src="/dbResume2.svg"
                        alt="Digital badges resume preview"
                        alignItems="center"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: [0, -6, 0] }}
                        transition={{ opacity: { duration: 0.6, ease: 'easeOut' }, y: { duration: 3, ease: 'easeInOut', repeat: Infinity } }}
                        whileHover={{ scale: 1.02 }}
                        style={{
                            height: 270,
                            width: 'auto',
                            maxWidth: '100%',
                            display: 'block',
                            margin: '0 auto',
                            filter: 'drop-shadow(0 0 12.6px rgba(70,255,249,0.45)) drop-shadow(0 0 25.2px rgba(41,105,157,0.45)) drop-shadow(0 5.4px 16.2px rgba(0,0,0,0.35))'
                        }}
                    />
                </Box>
            </Box>
            <Divider sx={{ borderColor: 'rgba(156, 235, 255, 0.2)', my: 1.8 }} />



            {/* Badge selection and overview in same row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 1.8, md: 3.6 }, mb: 3.6, alignItems: 'center' }}>
                {/* Left side: Clickable badges */}
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: { xs: 1.8, sm: 2.7, md: 3.6 }, flex: { md: '0 0 auto' } }}>
                    {/* Practitioner badge with gradient ring + scale and underline */}
                    <motion.div
                        onClick={() => handleSelect('practitioner')}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        animate={{ scale: selectedBadge === 'practitioner' ? 1.05 : 1.0 }}
                        style={{ cursor: 'pointer' }}
                    >
                        <Box sx={{ p: 0, borderRadius: 0, background: 'transparent' }}>
                            <Box sx={{ background: 'transparent', borderRadius: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    src="/badgePractitioner.png"
                                    alt="Practitioner badge"
                                    style={{
                                        height: 126,
                                        width: 'auto',
                                        display: 'block',
                                        filter: selectedBadge === 'practitioner' ? 'drop-shadow(0 0 9px rgba(70,255,249,0.45)) drop-shadow(0 0 18px rgba(41,105,157,0.3))' : selectedBadge === 'advanced' ? 'opacity(0.5)' : 'none'
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ height: 2.7, borderRadius: 1.8, mt: 0.675, mx: 'auto', background: selectedBadge === 'practitioner' ? 'linear-gradient(90deg,rgb(48, 184, 199),rgb(119, 169, 184))' : 'transparent', width: selectedBadge === 'practitioner' ? '70%' : '0%', transition: 'width 300ms ease, background 300ms ease' }} />
                    </motion.div>

                    {/* Advanced badge with gradient ring + scale and underline */}
                    <motion.div
                        onClick={() => handleSelect('advanced')}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        animate={{ scale: selectedBadge === 'advanced' ? 1.05 : 1.0 }}
                        style={{ cursor: 'pointer' }}
                    >
                        <Box sx={{ p: 0, borderRadius: 0, background: 'transparent' }}>
                            <Box sx={{ background: 'transparent', borderRadius: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    src="/badgeAdvanced.png"
                                    alt="Advanced badge"
                                    style={{
                                        height: 126,
                                        width: 'auto',
                                        display: 'block',
                                        filter: selectedBadge === 'advanced' ? 'drop-shadow(0 0 9px rgba(70,255,249,0.45)) drop-shadow(0 0 18px rgba(41,105,157,0.3))' : selectedBadge === 'practitioner' ? 'opacity(0.5)' : 'none'
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ height: 2.7, borderRadius: 1.8, mt: 0.675, mx: 'auto', background: selectedBadge === 'advanced' ? 'linear-gradient(90deg,rgb(48, 184, 199),rgb(119, 169, 184))' : 'transparent', width: selectedBadge === 'advanced' ? '70%' : '0%', transition: 'width 300ms ease, background 300ms ease' }} />
                    </motion.div>
                </Box>

                {/* Right side: Selected badge overview */}
                <Box ref={detailsRef} sx={{ flex: { md: '1 1 auto' }, width: '100%' }}>
                    {selectedBadge && (
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                            <Box sx={{ p: 1.8, borderRadius: 1.8, background: 'transparent' }}>
                                {selectedBadge === 'practitioner' && (
                                    <>
                                        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.9 }}>
                                                <Box
                                                    sx={{
                                                        height: 1.8,
                                                        width: 28.8,
                                                        borderRadius: 1.8,
                                                        background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
                                                        mr: 0.9,
                                                    }}
                                                />
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        textShadow: '0 0 9px rgba(70, 255, 249, 0.3)',
                                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                        fontSize: { xs: '1.08rem', sm: '1.215rem', md: '1.35rem' }
                                                    }}
                                                >
                                                    Practitioner Badge Overview
                                                </Typography>
                                            </Box>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.6, ease: 'easeOut', delay: 0.4 }} viewport={{ once: true }}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: 'white',
                                                    fontSize: { xs: '0.9rem', sm: '0.945rem', md: '0.99rem' },
                                                    lineHeight: 1.6,
                                                    fontWeight: 300,
                                                    letterSpacing: '0.02em',
                                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                    mb: 1.35
                                                }}
                                            >
                                                This is the first badge that you need to obtain in this DS&AI Pathway. There are 7 main tasks that you need to complete and they can be done in any order. Together, these tasks validate your foundation across communication, collaboration, research practice, and real‑world application—preparing you to contribute confidently in projects and teams.
                                            </Typography>
                                        </motion.div>
                                    </>
                                )}
                                {selectedBadge === 'advanced' && (
                                    <>
                                        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.9 }}>
                                                <Box
                                                    sx={{
                                                        height: 1.8,
                                                        width: 28.8,
                                                        borderRadius: 1.8,
                                                        background: 'linear-gradient(90deg,rgb(48, 184, 199),rgba(255, 98, 41, 0.97))',
                                                        mr: 0.9,
                                                    }}
                                                />
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        textShadow: '0 0 9px rgba(70, 255, 249, 0.3)',
                                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                        fontSize: { xs: '1.08rem', sm: '1.215rem', md: '1.35rem' }
                                                    }}
                                                >
                                                    Advanced Badge Overview
                                                </Typography>
                                            </Box>
                                        </motion.div>
                                        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeOut', delay: 0.4 }}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: 'white',
                                                    fontSize: { xs: '0.9rem', sm: '0.945rem', md: '0.99rem' },
                                                    lineHeight: 1.6,
                                                    fontWeight: 300,
                                                    letterSpacing: '0.02em',
                                                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                    mb: 1.35
                                                }}
                                            >
                                                The Advanced Badge highlights your coursework and commitment to deeper projects in Data Science and AI. To earn it, you'll need two elective courses from the <a href="https://www.cpp.edu/sci/ds/minor-in-data-science.shtml" target="_blank" rel="noreferrer" style={{ color: '#9cebff' }}>Data Science Minor</a> list, plus a senior project (different from your previous badge project) within the Data Science and AI field.
                                            </Typography>
                                        </motion.div>
                                    </>
                                )}
                            </Box>
                        </motion.div>
                    )}
                </Box>
            </Box>

            {/* Practitioner */}
            {(!selectedBadge || selectedBadge === 'practitioner') && (
                <>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: 1.8, mb: 2.7, alignItems: 'stretch', gridAutoRows: '1fr' }}>
                        {practitionerTasks.map((task) => (
                            <Box key={task.key} sx={{ minWidth: 0, height: '100%' }}>
                                <PractitionerCard
                                    layoutId={`practitioner-task-${task.key}`}
                                    onClick={() => { setOpenTask(`practitioner-task-${task.key}`); setOpenTaskData(task); }}
                                    title={task.title}
                                    summary={task.summary}
                                    requirements={task.requirements}
                                    clubHelp={task.help}
                                    timeEstimate={task.time}
                                    iconComponent={<VerifiedIcon sx={{ color: 'rgb(48, 184, 199)' }} />}
                                />
                            </Box>
                        ))}
                    </Box>
                    <AnimatePresence>
                        {openTask && openTaskData && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ position: 'fixed', inset: 0, zIndex: 1300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                {/* Backdrop */}
                                <motion.div
                                    onClick={() => setOpenTask(null)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', cursor: 'zoom-out' }}
                                />
                                {/* Expanded card */}
                                <motion.div
                                    layoutId={openTask}
                                    transition={{ type: 'spring', stiffness: 240, damping: 28 }}
                                    style={{ position: 'relative', width: 'min(720px, 92vw)', borderRadius: 12, overflow: 'hidden', willChange: 'transform' }}
                                >
                                    <Box sx={{ p: 3, borderRadius: 0, background: 'linear-gradient(135deg, rgba(10,25,47,0.95) 0%, rgba(17,37,64,0.95) 50%, rgba(48,164,199,0.3) 120%)', border: '1px solid rgba(48,184,199,0.45)', boxShadow: '0 12px 48px rgba(0,0,0,0.5)' }}>
                                        <IconButton onClick={() => setOpenTask(null)} sx={{ position: 'absolute', top: 7.2, right: 7.2, color: 'white' }}>
                                            <CloseIcon />
                                        </IconButton>
                                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 0.9, fontSize: { xs: '1.08rem', sm: '1.215rem' } }}>{openTaskData.title}</Typography>
                                        <Typography variant="body1" sx={{ color: '#cfefff', mb: 1.35, fontSize: { xs: '0.9rem', sm: '0.95rem' } }}>{openTaskData.summary}</Typography>
                                        {openTaskData.requirements?.length > 0 && (
                                            <>
                                                <Typography variant="subtitle2" sx={{ color: 'white', mb: 0.45, fontSize: '0.765rem' }}>Requirements</Typography>
                                                <Box component="ul" sx={{ pl: 3, mb: 1.5 }}>
                                                    {openTaskData.requirements.map((req) => (
                                                        <li key={req}>
                                                            <Typography variant="body2" sx={{ color: '#cfefff', fontSize: '0.765rem' }}>{req}</Typography>
                                                        </li>
                                                    ))}
                                                </Box>
                                            </>
                                        )}
                                        {openTaskData.help?.length > 0 && (
                                            <>
                                                <Typography variant="subtitle2" sx={{ color: 'white', mb: 0.45, fontSize: '0.765rem' }}>Club Help</Typography>
                                                <Box component="ul" sx={{ pl: 3, mb: 1.5 }}>
                                                    {openTaskData.help.map((h) => (
                                                        <li key={h}>
                                                            <Typography variant="body2" sx={{ color: '#cfefff', fontSize: '0.765rem' }}>{h}</Typography>
                                                        </li>
                                                    ))}
                                                </Box>
                                            </>
                                        )}
                                        {openTaskData.time && (
                                            <Chip label={`Estimated time: ${openTaskData.time}`} size="small" sx={{ color: '#cfefff', borderColor: 'rgba(156,235,255,0.4)', border: '1px solid', background: 'transparent' }} />
                                        )}
                                    </Box>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {/* More info attached to Practitioner (centered, no card background) */}
                    <Box id="more" sx={{ p: 0, mb: 2.7, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 0.675, fontSize: { xs: '1.8rem', sm: '2.025rem' } }}>More Information</Typography>
                        <Typography variant="body1" sx={{ color: '#cfefff', mb: 1.125, lineHeight: 1.6, maxWidth: 738, fontSize: { xs: '0.9rem', sm: '0.95rem' } }}>
                            If you are interested in this digital badge, email us to be added to the Canvas course and begin submitting your work.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1.125, flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Button href="mailto:cppdsai@gmail.com" variant="contained" size="small" sx={{ background: 'linear-gradient(135deg, #0a192f 0%, rgb(15, 76, 108) 50%, rgb(48, 164, 199) 100%)', border: '1px solid rgba(70,255,249,0.12)' }}>Email Us</Button>
                        </Box>
                    </Box>
                </>
            )}

            {/* Advanced */}
            {(!selectedBadge || selectedBadge === 'advanced') && (
                <>
                    {/* Expanded Course Insight Overlay */}
                    <AnimatePresence>
                        {openInsight && openInsightData && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ position: 'fixed', inset: 0, zIndex: 1300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <motion.div onClick={() => setOpenInsight(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', cursor: 'zoom-out' }} />
                                <motion.div layoutId={openInsight} transition={{ type: 'spring', stiffness: 240, damping: 28 }} style={{ position: 'relative', width: 'min(720px, 92vw)', borderRadius: 12, overflow: 'hidden', willChange: 'transform' }}>
                                    <Box sx={{ p: 3, borderRadius: 0, background: 'linear-gradient(135deg, rgba(10,25,47,0.95) 0%, rgba(17,37,64,0.95) 50%, rgba(48,164,199,0.3) 120%)', border: '1px solid rgba(48,184,199,0.45)', boxShadow: '0 12px 48px rgba(0,0,0,0.5)' }}>
                                        <IconButton onClick={() => setOpenInsight(null)} sx={{ position: 'absolute', top: 8, right: 8, color: 'white' }}>
                                            <CloseIcon />
                                        </IconButton>
                                        <Typography variant="subtitle2" sx={{ color: '#9cebff', mb: 0.25 }}>{openInsightData.course}</Typography>
                                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>Course Insight from {openInsightData.from}</Typography>
                                        <Typography variant="body1" sx={{ color: '#cfefff' }}>“{openInsightData.quote}”</Typography>
                                    </Box>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Electives list (grouped) */}
                    <Box component={motion.div} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} sx={{ p: 2.5, borderRadius: 2, background: 'linear-gradient(135deg, rgba(10,25,47,0.85) 0%, rgba(17,37,64,0.85) 50%, rgba(48,164,199,0.22) 120%)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 12px 48px rgba(0,0,0,0.4)', mb: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'flex-start', gap: 3, flexWrap: 'nowrap' }}>
                            {/* Left: 2x2 categories grid */}
                            <Box sx={{ flex: '1 1 60%', minWidth: 0 }}>
                                <Box sx={{ textAlign: 'center', mb: 2 }}>
                                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, textShadow: '0 0 8px rgba(70,255,249,0.25)' }}>Data Science Minor Electives</Typography>
                                </Box>
                                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }, gap: 2 }}>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ color: 'white', mb: 0.5, fontWeight: 700 }}>CS Courses</Typography>
                                        <Box component="ul" sx={{ pl: 2, mt: 0.25, mb: 1.5, '& li': { mb: 0.3 } }}>
                                            {electives.cs.map((c) => (
                                                <li key={c}>
                                                    <Typography variant="body2" sx={{ color: '#cfefff', wordBreak: 'break-word', hyphens: 'auto' }}>{c}</Typography>
                                                </li>
                                            ))}
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ color: 'white', mb: 0.5, fontWeight: 700 }}>Statistics and Business Courses</Typography>
                                        <Box component="ul" sx={{ pl: 2, mt: 0.25, mb: 1.5, '& li': { mb: 0.3 } }}>
                                            {electives.statsBiz.map((c) => (
                                                <li key={c}>
                                                    <Typography variant="body2" sx={{ color: '#cfefff', wordBreak: 'break-word', hyphens: 'auto' }}>{c}</Typography>
                                                </li>
                                            ))}
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ color: 'white', mb: 0.5, fontWeight: 700 }}>Engineering Courses</Typography>
                                        <Box component="ul" sx={{ pl: 2, mt: 0.25, mb: 1.5, '& li': { mb: 0.3 } }}>
                                            {electives.engineering.map((c) => (
                                                <li key={c}>
                                                    <Typography variant="body2" sx={{ color: '#cfefff', wordBreak: 'break-word', hyphens: 'auto' }}>{c}</Typography>
                                                </li>
                                            ))}
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography variant="subtitle2" sx={{ color: 'white', mb: 0.5, fontWeight: 700 }}>CLASS Courses</Typography>
                                        <Box component="ul" sx={{ pl: 2, mt: 0.25, mb: 1, '& li': { mb: 0.3 } }}>
                                            {electives.class.map((c) => (
                                                <li key={c}>
                                                    <Typography variant="body2" sx={{ color: '#cfefff', wordBreak: 'break-word', hyphens: 'auto' }}>{c}</Typography>
                                                </li>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            {/* Right: Course insights */}
                            <Box sx={{ flex: '1 1 40%', minWidth: 260 }}>
                                <Box sx={{ p: 1.5, borderRadius: 2, background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(156,235,255,0.25)', boxShadow: '0 6px 24px rgba(0,0,0,0.35)' }}>
                                    <Typography variant="h6" sx={{ mb: 1, textAlign: 'center', fontWeight: 700 }}>Course insights</Typography>
                                    {courseInsights.map((insight) => (
                                        <motion.div key={insight.id} layoutId={`insight-${insight.id}`} onClick={() => { setOpenInsight(`insight-${insight.id}`); setOpenInsightData(insight); }} style={{ cursor: 'pointer' }}>
                                            <Box sx={{ p: 1.25, mb: 1, borderRadius: 1.5, border: '1px solid rgba(156,235,255,0.3)', position: 'relative', '&:before': { content: '""', position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, borderRadius: '4px 0 0 4px', background: 'linear-gradient(180deg, rgb(48,184,199), rgba(41,105,157,0.8))' }, transition: 'all 180ms ease', '&:hover': { boxShadow: '0 10px 28px rgba(0,0,0,0.45)', transform: 'translateY(-2px)' } }}>
                                                <Typography variant="subtitle2" sx={{ mb: 0.25 }}>
                                                    Course Insight from {insight.from}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#9cebff', mb: 0.25 }}>{insight.course}</Typography>
                                                <Typography variant="body2" sx={{ color: '#cfefff', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                    “{insight.short}”
                                                </Typography>
                                            </Box>
                                        </motion.div>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* More info attached to Advanced (centered, no card background) */}
                    <Box id="more" sx={{ p: 0, mb: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 0.75 }}>More Information</Typography>
                        <Typography variant="body1" sx={{ color: '#cfefff', mb: 1.25, lineHeight: 1.6, maxWidth: 820 }}>
                            If you are interested in this digital badge, email us to be added to the Canvas course and begin submitting your work.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1.25, flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Button href="mailto:cppdsai@gmail.com" variant="contained" size="small" sx={{ background: 'linear-gradient(135deg, #0a192f 0%, rgb(15, 76, 108) 50%, rgb(48, 164, 199) 100%)', border: '1px solid rgba(70,255,249,0.12)' }}>Email Us</Button>
                        </Box>
                    </Box>
                </>
            )}


            {/* FAQ (Framer Motion Accordion) */}
            <Box id="faq" sx={{ textAlign: 'center', mt: 2.7, mb: 0.9 }}>
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mt: 5.4, fontSize: { xs: '1.8rem', sm: '2.025rem' } }}>Frequently Asked Questions</Typography>
            </Box>
            <Box sx={{
                border: '1px solid rgba(48, 184, 199, 0.3)',
                borderRadius: 2,
                background: 'linear-gradient(135deg, rgba(10,25,47,0.60) 0%, rgba(17,37,64,0.55) 50%, rgba(48,164,199,0.15) 100%)',
                overflow: 'hidden'
            }}>
                {[{
                    q: 'Where are all of these tasks submissions held? How would I track my progress?',
                    a: 'You can track the completion of your tasks and submit them for the badge through the Canvas page.'
                }, {
                    q: 'How may I receive access to the Canvas page for me to get these badges?',
                    a: 'Contact Dr. Marin or Dr. Korah at santanamarin@cpp.edu or jkorah@cpp.edu.'
                }, {
                    q: 'Do I need to do these tasks in order?',
                    a: 'No! They can be completed whenever you get around to them.'
                }, {
                    q: 'What if I complete some of the Advanced badge tasks before obtaining my Practitioner badge?',
                    a: 'That is fine. Once you complete the Practitioner badge, you will gain access to the Advanced tasks and can submit the completion of the courses then.'
                }, {
                    q: 'Can I obtain the Advanced badge before the Practitioner badge?',
                    a: 'No. A requirement for the Advanced badge is the Practitioner badge, and you will not have access to the correct Canvas modules until then.'
                }].map((item, idx) => (
                    <Box key={idx}>
                        <Box
                            role="button"
                            tabIndex={0}
                            onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpenFaqIndex(openFaqIndex === idx ? null : idx); }}
                            sx={{
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                p: 2,
                                gap: 2,
                                '&:hover': { backgroundColor: 'rgba(48, 164, 199, 0.05)' }
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '1.05rem'
                                }}
                            >
                                {item.q}
                            </Typography>
                            <ExpandMoreIcon
                                sx={{
                                    color: 'rgb(48, 164, 199)',
                                    transform: openFaqIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s'
                                }}
                            />
                        </Box>
                        <AnimatePresence initial={false}>
                            {openFaqIndex === idx && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <Box sx={{ px: 2, pb: 2 }}>
                                        <Typography
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                lineHeight: 1.8,
                                                fontSize: '1rem'
                                            }}
                                        >
                                            {item.a}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        {idx < 4 && (
                            <Box sx={{ mx: 2, height: 1, background: 'rgba(48, 164, 199, 0.2)' }} />
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BadgesContent;



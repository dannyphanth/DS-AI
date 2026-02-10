import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Box,
    Menu,
    MenuItem,
    Collapse,
    useTheme,
    useMediaQuery,
    Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [resourcesAnchor, setResourcesAnchor] = useState(null);
    const [resourcesExpanded, setResourcesExpanded] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        setResourcesExpanded(false);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'About', path: '/about' },
        { name: 'Team', path: '/contact' }
    ];

    const resourcesDropdown = [
        { label: 'Meeting Slides', icon: <SlideshowIcon sx={{ fontSize: 20 }} />, path: '/resources?tab=slides' },
        { label: 'Videos', icon: <VideoLibraryIcon sx={{ fontSize: 20 }} />, path: '/resources?tab=videos' },
        { label: 'Digital Badges', icon: <VerifiedIcon sx={{ fontSize: 20 }} />, path: '/resources?tab=badges' },
        { label: 'Datathon', icon: <EmojiEventsIcon sx={{ fontSize: 20 }} />, path: '/resources?tab=datathon' },
    ];

    const handleResourcesOpen = (event) => {
        setResourcesAnchor(event.currentTarget);
    };

    const handleResourcesClose = () => {
        setResourcesAnchor(null);
    };

    const handleResourcesNavigate = (path) => {
        navigate(path);
        handleResourcesClose();
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 1.8 }}>
                <img src="/dsai%20logo.png" alt="DS&AI Logo" style={{ height: 36, marginRight: 7 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.08rem', letterSpacing: 1.8, fontFamily: '"Syncopate", "Chakra Petch", "Exo 2", monospace' }}>
                    DS&AI
                </Typography>
            </Box>
            <List sx={{ px: 1 }}>
                {navItems.slice(0, 2).map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <ListItem
                            key={item.name}
                            disablePadding
                            sx={{ mb: 0.5 }}
                        >
                            <Box
                                component={Link}
                                to={item.path}
                                onClick={handleDrawerToggle}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    borderRadius: 1.35,
                                    px: 1.8,
                                    py: 1,
                                    minHeight: 43,
                                    background: isActive ? 'rgba(156,235,255,0.12)' : 'transparent',
                                    border: isActive ? '1px solid rgba(156,235,255,0.25)' : '1px solid transparent',
                                    transition: 'background 160ms ease, transform 160ms ease',
                                    '&:hover': { background: 'rgba(156,235,255,0.08)' }
                                }}
                            >
                                <ListItemText
                                    primary={item.name}
                                    primaryTypographyProps={{
                                        fontSize: '0.99rem',
                                        fontWeight: 600,
                                        letterSpacing: 0.45,
                                        textAlign: 'center',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                    }}
                                />
                            </Box>
                        </ListItem>
                    );
                })}

                {/* Resources with expandable sub-items */}
                <ListItem disablePadding sx={{ mb: 0.5 }}>
                    <Box
                        onClick={() => setResourcesExpanded(!resourcesExpanded)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            textDecoration: 'none',
                            color: 'inherit',
                            borderRadius: 1.35,
                            px: 1.8,
                            py: 1,
                            minHeight: 43,
                            cursor: 'pointer',
                            background: location.pathname === '/resources' ? 'rgba(156,235,255,0.12)' : 'transparent',
                            border: location.pathname === '/resources' ? '1px solid rgba(156,235,255,0.25)' : '1px solid transparent',
                            transition: 'background 160ms ease',
                            '&:hover': { background: 'rgba(156,235,255,0.08)' }
                        }}
                    >
                        <ListItemText
                            primary="Resources"
                            primaryTypographyProps={{
                                fontSize: '0.99rem',
                                fontWeight: 600,
                                letterSpacing: 0.45,
                                textAlign: 'center',
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                            }}
                        />
                        {resourcesExpanded ? <ExpandLessIcon sx={{ fontSize: 20 }} /> : <ExpandMoreIcon sx={{ fontSize: 20 }} />}
                    </Box>
                </ListItem>
                <Collapse in={resourcesExpanded} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ pl: 2, pr: 1 }}>
                        {resourcesDropdown.map((item) => (
                            <ListItem key={item.label} disablePadding sx={{ mb: 0.3 }}>
                                <Box
                                    component={Link}
                                    to={item.path}
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        borderRadius: 1.35,
                                        px: 1.5,
                                        py: 0.8,
                                        minHeight: 38,
                                        gap: 1.2,
                                        transition: 'background 160ms ease',
                                        '&:hover': { background: 'rgba(156,235,255,0.08)' }
                                    }}
                                >
                                    <Box sx={{ color: 'rgba(156,235,255,0.6)', display: 'flex' }}>{item.icon}</Box>
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontSize: '0.88rem',
                                            fontWeight: 500,
                                            letterSpacing: 0.3,
                                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                        }}
                                    />
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>

                {navItems.slice(2).map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <ListItem
                            key={item.name}
                            disablePadding
                            sx={{ mb: 0.5 }}
                        >
                            <Box
                                component={Link}
                                to={item.path}
                                onClick={handleDrawerToggle}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    borderRadius: 1.35,
                                    px: 1.8,
                                    py: 1,
                                    minHeight: 43,
                                    background: isActive ? 'rgba(156,235,255,0.12)' : 'transparent',
                                    border: isActive ? '1px solid rgba(156,235,255,0.25)' : '1px solid transparent',
                                    transition: 'background 160ms ease, transform 160ms ease',
                                    '&:hover': { background: 'rgba(156,235,255,0.08)' }
                                }}
                            >
                                <ListItemText
                                    primary={item.name}
                                    primaryTypographyProps={{
                                        fontSize: '0.99rem',
                                        fontWeight: 600,
                                        letterSpacing: 0.45,
                                        textAlign: 'center',
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                                    }}
                                />
                            </Box>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{ background: 'transparent', boxShadow: 'none', p: 1, zIndex: 1400, color: 'white' }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0.9, md: 3.6 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/dsai%20logo.png" alt="DS&AI Logo" style={{ height: 36, marginRight: 11 }} />
                            <Typography
                                variant="h6"
                                component={Link}
                                to="/"
                                sx={{
                                    fontWeight: 'bold',
                                    letterSpacing: 1.8,
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontSize: { xs: '1.08rem', md: '1.35rem' },
                                    transition: 'color 0.2s',
                                    fontFamily: '"Syncopate", "Chakra Petch", "Exo 2", monospace',
                                    '&:hover': { color: '#00c8ff' },
                                }}
                            >
                                DS&AI
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: 0.45 }, alignItems: 'center' }}>
                            {navItems.slice(0, 2).map((item) => (
                                <Button
                                    key={item.name}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color: 'white',
                                        fontWeight: 500,
                                        fontSize: '0.99rem',
                                        letterSpacing: 0.9,
                                        px: 1.8,
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        textShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
                                        '&:hover': { color: '#00c8ff' }
                                    }}
                                >
                                    {item.name}
                                </Button>
                            ))}

                            {/* Resources dropdown */}
                            <Box
                                onMouseEnter={handleResourcesOpen}
                                onMouseLeave={handleResourcesClose}
                                sx={{ display: 'inline-flex' }}
                            >
                                <Button
                                    endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18, transition: 'transform 0.2s', transform: resourcesAnchor ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
                                    sx={{
                                        color: 'white',
                                        fontWeight: 500,
                                        fontSize: '0.99rem',
                                        letterSpacing: 0.9,
                                        px: 1.8,
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        textShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
                                        '&:hover': { color: '#00c8ff' }
                                    }}
                                >
                                    Resources
                                </Button>
                                <Menu
                                    anchorEl={resourcesAnchor}
                                    open={Boolean(resourcesAnchor)}
                                    onClose={handleResourcesClose}
                                    MenuListProps={{
                                        onMouseLeave: handleResourcesClose,
                                    }}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                    slotProps={{
                                        paper: {
                                            sx: {
                                                background: 'rgba(10, 25, 47, 0.95)',
                                                backdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(156, 235, 255, 0.15)',
                                                borderRadius: 2,
                                                mt: 0.5,
                                                minWidth: 200,
                                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                                            }
                                        }
                                    }}
                                    disableScrollLock
                                >
                                    {resourcesDropdown.map((item) => (
                                        <MenuItem
                                            key={item.label}
                                            onClick={() => handleResourcesNavigate(item.path)}
                                            sx={{
                                                color: 'white',
                                                py: 1.2,
                                                px: 2,
                                                gap: 1.5,
                                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                                fontSize: '0.9rem',
                                                fontWeight: 500,
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    background: 'rgba(48, 164, 199, 0.15)',
                                                    color: '#00c8ff',
                                                },
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', color: 'rgba(156,235,255,0.6)' }}>{item.icon}</Box>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            {navItems.slice(2).map((item) => (
                                <Button
                                    key={item.name}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color: 'white',
                                        fontWeight: 500,
                                        fontSize: '0.99rem',
                                        letterSpacing: 0.9,
                                        px: 1.8,
                                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        textShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
                                        '&:hover': { color: '#00c8ff' }
                                    }}
                                >
                                    {item.name}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{ ml: 1, color: 'white' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    zIndex: 1500,
                    '& .MuiDrawer-paper': {
                        background: '#0a192f',
                        color: 'white',
                        width: 252,
                        borderRight: '1px solid rgba(156,235,255,0.15)',
                        zIndex: 1500
                    }
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar; 
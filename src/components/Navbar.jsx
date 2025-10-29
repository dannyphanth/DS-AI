import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    Box,
    useTheme,
    useMediaQuery,
    Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'Resources', path: '/resources' },
        { name: 'About', path: '/about' },
        { name: 'Team', path: '/contact' }
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 1.8 }}>
                <img src="/dsai%20logo.png" alt="DS&AI Logo" style={{ height: 36, marginRight: 7 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.08rem', letterSpacing: 1.8, fontFamily: '"Syncopate", "Chakra Petch", "Exo 2", monospace' }}>
                    DS&AI
                </Typography>
            </Box>
            <List sx={{ px: 1 }}>
                {navItems.map((item) => {
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
                                        fontSize: '0.9rem',
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
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: 0.45 } }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.name}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color: 'white',
                                        fontWeight: 500,
                                        fontSize: '0.9rem',
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
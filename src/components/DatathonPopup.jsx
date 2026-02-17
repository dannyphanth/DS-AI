import { useState, useEffect } from 'react';
import { Box, Modal, IconButton, Button, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DatathonPopup = () => {
    const [open, setOpen] = useState(false);

    const datathonInfo = {
        registrationLink: 'https://example.com', // TODO: Replace with actual registration link
        image: '/dnd_datathon.png',
    };

    useEffect(() => {
        const lastSeenTimestamp = localStorage.getItem('datathonPopupLastSeen');
        const oneHour = 60 * 60 * 1000;

        if (!lastSeenTimestamp || (Date.now() - parseInt(lastSeenTimestamp)) > oneHour) {
            const timer = setTimeout(() => {
                setOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
        localStorage.setItem('datathonPopupLastSeen', Date.now().toString());
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleRegister = () => {
        window.open(datathonInfo.registrationLink, '_blank');
        handleClose();
    };

    return (
        <>
            {/* Floating Sticky Button */}
            <Tooltip title="View Datathon Info" placement="left">
                <Box
                    component="img"
                    src="/dnd_datathonIcon.png"
                    alt="Datathon"
                    onClick={handleOpen}
                    sx={{
                        position: 'fixed',
                        right: { xs: 16, sm: 24 },
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1000,
                        width: { xs: 80, sm: 100 },
                        height: { xs: 80, sm: 100 },
                        cursor: 'pointer',
                        filter: 'drop-shadow(0 4px 20px rgba(48, 164, 199, 0.5))',
                        animation: 'bounce 2s ease-in-out infinite',
                        '@keyframes bounce': {
                            '0%, 100%': {
                                transform: 'translateY(-50%) translateX(0)',
                                filter: 'drop-shadow(0 4px 20px rgba(48, 164, 199, 0.5))',
                            },
                            '50%': {
                                transform: 'translateY(-50%) translateX(-10px)',
                                filter: 'drop-shadow(0 8px 30px rgba(48, 164, 199, 0.8))',
                            },
                        },
                        '&:hover': {
                            transform: 'translateY(-50%) scale(1.15)',
                            filter: 'drop-shadow(0 8px 35px rgba(48, 164, 199, 0.9))',
                            animation: 'none',
                        },
                        transition: 'all 0.3s',
                    }}
                />
            </Tooltip>

            {/* Modal Popup */}
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                slotProps={{
                    backdrop: {
                        sx: {
                            backdropFilter: 'blur(8px)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }
                    }
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        maxWidth: { xs: '85%', sm: '280px', md: '350px' },
                        outline: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    {/* Image Container */}
                    <Box
                        sx={{
                            position: 'relative',
                            borderRadius: 2,
                            overflow: 'hidden',
                        }}
                    >
                        {/* Image */}
                        <Box
                            component="img"
                            src={datathonInfo.image}
                            alt="Data Never Dies Datathon"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: { xs: '60vh', sm: '65vh' },
                                display: 'block',
                                objectFit: 'contain',
                            }}
                        />

                        {/* Close Button - Top Right */}
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                bgcolor: 'rgba(0, 0, 0, 0.7)',
                                color: 'white',
                                '&:hover': {
                                    bgcolor: 'rgba(0, 0, 0, 0.9)',
                                },
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* Register Button */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleRegister}
                            sx={{
                                background: 'linear-gradient(135deg, #0a192f 0%, rgb(15, 76, 108) 50%, rgb(48, 164, 199) 100%)',
                                color: 'white',
                                fontWeight: 600,
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                border: '1px solid rgba(70, 255, 249, 0.3)',
                                '&:hover': {
                                    boxShadow: '0 0 30px rgba(48, 164, 199, 0.8)',
                                    transform: 'scale(1.05)',
                                },
                                transition: 'all 0.3s',
                            }}
                        >
                            Register Now
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default DatathonPopup;

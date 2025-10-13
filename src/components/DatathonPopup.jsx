import { useState, useEffect } from 'react';
import { Box, Modal, IconButton, Button, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const DatathonPopup = () => {
    const [open, setOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Datathon details - UPDATE THESE WITH YOUR ACTUAL INFO
    const datathonInfo = {
        registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf7iKnOXf9E-PHIct8TEfXrnomIQzqF2ZZeaI8DEmLSGVp6GA/viewform',
        images: [
            '/cr_datathon1.png', // Add more images as cr_datathon2.png, cr_datathon3.png, etc.
            '/cr_datathon2.png',
            '/cr_datathon3.png',
            '/cr_datathon4.png',
            '/cr_datathon5.png',
        ]
    };

    useEffect(() => {
        // Check when user last saw the popup
        const lastSeenTimestamp = localStorage.getItem('datathonPopupLastSeen');
        const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

        // Show popup if never seen OR if more than 1 hour has passed
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

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % datathonInfo.images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + datathonInfo.images.length) % datathonInfo.images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <>
            {/* Floating Sticky Button */}
            <Tooltip title="View Datathon Info" placement="left">
                <Box
                    component="img"
                    src="/datathonIcon.png"
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
                            src={datathonInfo.images[currentSlide]}
                            alt="Datathon"
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

                        {/* Navigation Arrows - Only show if multiple images */}
                        {datathonInfo.images.length > 1 && (
                            <>
                                <IconButton
                                    onClick={prevSlide}
                                    size="small"
                                    sx={{
                                        position: 'absolute',
                                        left: 10,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                                        color: 'white',
                                        padding: '6px',
                                        '&:hover': {
                                            bgcolor: 'rgba(0, 0, 0, 0.8)',
                                        },
                                    }}
                                >
                                    <ArrowBackIosNewIcon sx={{ fontSize: '16px' }} />
                                </IconButton>
                                <IconButton
                                    onClick={nextSlide}
                                    size="small"
                                    sx={{
                                        position: 'absolute',
                                        right: 10,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                                        color: 'white',
                                        padding: '6px',
                                        '&:hover': {
                                            bgcolor: 'rgba(0, 0, 0, 0.8)',
                                        },
                                    }}
                                >
                                    <ArrowForwardIosIcon sx={{ fontSize: '16px' }} />
                                </IconButton>
                            </>
                        )}
                    </Box>

                    {/* Dots Navigation - Only show if multiple images */}
                    {datathonInfo.images.length > 1 && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 1,
                            }}
                        >
                            {datathonInfo.images.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    sx={{
                                        width: currentSlide === index ? 30 : 10,
                                        height: 10,
                                        borderRadius: 5,
                                        bgcolor: currentSlide === index ? 'rgb(48, 164, 199)' : 'rgba(255, 255, 255, 0.5)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            bgcolor: currentSlide === index ? 'rgb(48, 164, 199)' : 'rgba(255, 255, 255, 0.8)',
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    )}

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
                                // boxShadow: '0 0 20px rgba(48, 164, 199, 0.5)',
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

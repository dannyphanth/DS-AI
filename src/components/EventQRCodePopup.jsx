import { useState } from 'react';
import { Box, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Modal popup component that displays the QR code for event sign-in
 * 
 * @param {boolean} open - Whether the modal is open
 * @param {Function} onClose - Function to call when closing the modal
 * @param {Object} event - The event object (not used, but kept for API compatibility)
 * @param {string} qrCodeImagePath - Path to the QR code image
 * @param {string} signInFormUrl - URL to the sign-in form (not used, but kept for API compatibility)
 */
const EventQRCodePopup = ({ open, onClose, event, qrCodeImagePath, signInFormUrl }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            slotProps={{
                backdrop: {
                    sx: {
                        backdropFilter: 'blur(8px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    }
                }
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    maxWidth: { xs: '90%', sm: '400px', md: '450px' },
                    width: '100%',
                    outline: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 2,
                    padding: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                }}
            >
                {/* Close Button */}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: '#666',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            color: '#000',
                        },
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {/* QR Code Image */}
                {!imageError && qrCodeImagePath ? (
                    <Box
                        component="img"
                        src={qrCodeImagePath}
                        alt="QR Code for Event Sign-In"
                        onError={() => setImageError(true)}
                        sx={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                        }}
                    />
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2,
                            color: '#666',
                            padding: 4,
                        }}
                    >
                        QR Code image not found
                    </Box>
                )}
            </Box>
        </Modal>
    );
};

export default EventQRCodePopup;

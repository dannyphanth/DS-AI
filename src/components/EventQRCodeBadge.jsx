import { Box, Typography, keyframes } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';

/**
 * Badge component that appears on event cards for ongoing events
 * Displays "Ongoing" text with a QR code icon
 */

// Animation keyframes for pulsing/glowing effect
const pulseGlow = keyframes`
    0%, 100% {
        boxShadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(48, 184, 199, 0.3);
    }
    50% {
        boxShadow: 0 2px 12px rgba(0, 0, 0, 0.4), 0 0 20px 4px rgba(48, 184, 199, 0.4);
    }
`;

// Animation similar to dsai badge - gentle rotate and scale, but faster
const badgeBounce = keyframes`
    0%, 100% {
        transform: translate(-50%, -50%) rotate(-30deg) scale(1);
    }
    50% {
        transform: translate(-50%, -50%) rotate(-26deg) scale(1.04);
    }
`;

const EventQRCodeBadge = ({ onClick }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                position: 'absolute',
                top: 20,
                left: 20,
                transform: 'translate(-50%, -50%) rotate(-30deg)',
                transformOrigin: 'center',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                backgroundColor: 'rgba(10, 25, 47, 0.95)',
                border: '1px solid rgb(70, 184, 219)',
                borderRadius: 2,
                padding: '6px 12px',
                cursor: 'pointer',
                zIndex: 15,
                transition: 'all 0.3s',
                animation: `${pulseGlow} 2s ease-in-out infinite, ${badgeBounce} 1.2s linear infinite`,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                    background: 'rgba(70, 184, 219, 0.1)',
                    // borderColor: 'rgb(17, 29, 64)',
                    animation: `${pulseGlow} 1s ease-in-out infinite, ${badgeBounce} 0.8s linear infinite`,
                    '& .qr-icon': {
                        animation: 'spin 0.5s ease-in-out',
                    },
                },
            }}
        >
            <Typography
                variant="caption"
                sx={{
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                    fontWeight: 700,
                    color: '#f5f5f5',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    textShadow: '0 0 8px rgba(245, 245, 245, 0.3)',
                    whiteSpace: 'nowrap',
                }}
            >
                Ongoing!
            </Typography>
            <QrCodeIcon
                className="qr-icon"
                sx={{
                    fontSize: { xs: '16px', sm: '18px' },
                    color: 'rgb(48, 184, 199)',
                    filter: 'drop-shadow(0 0 4px rgba(100, 255, 218, 0.3))',
                    '@keyframes spin': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                    },
                }}
            />
        </Box>
    );
};

export default EventQRCodeBadge;

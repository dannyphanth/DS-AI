import { Box, Container, IconButton, Stack, Typography, SvgIcon } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function DiscordBrandIcon(props) {
    return (
        <SvgIcon {...props} viewBox="0 0 24 24">
            <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.74 13.74 0 0 0-.6 1.234 18.27 18.27 0 0 0-5.487 0 12.8 12.8 0 0 0-.617-1.234.078.078 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C1.578 9.14.943 13.805 1.293 18.422a.084.084 0 0 0 .032.058 19.9 19.9 0 0 0 5.993 3.038.08.08 0 0 0 .087-.027c.461-.63.873-1.295 1.226-1.994a.08.08 0 0 0-.045-.111 12.928 12.928 0 0 1-1.852-.885.08.08 0 0 1-.008-.133c.125-.094.25-.192.37-.291a.078.078 0 0 1 .082-.011c3.892 1.776 8.107 1.776 11.961 0a.077.077 0 0 1 .083.01c.12.1.244.198.37.293a.08.08 0 0 1-.007.133 12.64 12.64 0 0 1-1.853.883.08.08 0 0 0-.044.112c.36.697.772 1.362 1.226 1.992a.08.08 0 0 0 .087.028 19.87 19.87 0 0 0 6-3.038.08.08 0 0 0 .032-.057c.5-6.177-.838-10.807-3.548-14.026a.066.066 0 0 0-.033-.028ZM9.549 15.218c-1.187 0-2.163-1.095-2.163-2.44 0-1.345.957-2.44 2.163-2.44 1.21 0 2.18 1.104 2.164 2.44 0 1.345-.957 2.44-2.164 2.44Zm4.905 0c-1.187 0-2.163-1.095-2.163-2.44 0-1.345.957-2.44 2.163-2.44 1.21 0 2.18 1.104 2.164 2.44 0 1.345-.954 2.44-2.164 2.44Z" />
        </SvgIcon>
    );
}

const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: '#0d0f12', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <Container maxWidth="lg" sx={{ py: 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" sx={{ color: '#c7d0d9', textAlign: { xs: 'center', sm: 'left' } }}>
                        © 2025 Cal Poly Pomona Data Science & AI Club · All Rights Reserved
                    </Typography>

                    <Stack direction="row" spacing={1} alignItems="center">
                        <IconButton
                            aria-label="Discord"
                            component="a"
                            href="https://discord.com/invite/tu7UPu4Bdv"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                            sx={{ color: '#5865F2' }}
                        >
                            <DiscordBrandIcon sx={{ fontSize: 36 }} />
                        </IconButton>
                        <IconButton
                            aria-label="Instagram"
                            component="a"
                            href="https://www.instagram.com/cppdsai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                            sx={{ color: '#E1306C' }}
                        >
                            <InstagramIcon sx={{ fontSize: 36 }} />
                        </IconButton>
                        <IconButton
                            aria-label="LinkedIn"
                            component="a"
                            href="https://www.linkedin.com/company/cpp-data-science-ai-club/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="large"
                            sx={{ color: '#0A66C2' }}
                        >
                            <LinkedInIcon sx={{ fontSize: 36 }} />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;



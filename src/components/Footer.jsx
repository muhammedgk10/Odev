import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ top: 'auto', bottom: 0, backgroundColor: '#333', color: 'white' }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ py: 4 }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">BTK Akademi</Typography>
            <Typography variant="body2">
              Bilgi Teknolojileri ve İletişim Kurumu
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Bağlantılar</Typography>
            <Link href="#" color="inherit" display="block">
              Hakkımızda
            </Link>
            <Link href="/courses" color="inherit" display="block">
              Eğitimler
            </Link>
            <Link href="#" color="inherit" display="block">
              İletişim
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Sosyal Medya</Typography>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ py: 2 }}>
          © {new Date().getFullYear()} BTK Akademi. Tüm hakları saklıdır.
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;

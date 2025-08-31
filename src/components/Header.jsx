import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Box,
  Avatar,
  Badge,
} from '@mui/material';
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }} elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo and Nav */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <img src="https://www.btkakademi.gov.tr/kurumsal/assets/img/logo-beyaz.svg" alt="BTK Akademi Logo" style={{ height: 40, marginRight: 16 }} />
          </Link>
          <Button
            color="inherit"
            startIcon={<MenuIcon />}
            sx={{ textTransform: 'none', fontSize: '1rem' }}
          >
            Eğitimler
          </Button>
        </Box>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, mx: 4 }}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: '25px',
              backgroundColor: '#f1f3f4',
              '&:hover': {
                backgroundColor: '#e8e8e8',
              },
              width: '100%',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            <InputBase
              placeholder="Ara…"
              sx={{ pl: 2, pr: 5, width: '100%', height: '48px' }}
            />
            <IconButton type="submit" sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit">
            <Badge color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              MUHAMMED GÖK
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Hoş geldiniz
            </Typography>
          </Box>
          <Avatar
            alt="Muhammed Gök"
            src="/broken-image.jpg"
            sx={{ bgcolor: '#1976d2' }}
          >
            MG
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

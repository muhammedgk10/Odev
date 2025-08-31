import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Box,
} from '@mui/material';

const courses = [
  { title: 'Python Programlama', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  {
    title: 'Veri Bilimi ve Makine Öğrenmesi',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  { title: 'Web Geliştirme (React)', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  {
    title: 'Siber Güvenlik Uzmanlığı',
    image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  { title: 'Mobil Uygulama Geliştirme', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  {
    title: 'Oyun Geliştirme (Unity)',
    image: 'https://images.unsplash.com/photo-1558507338-51978a31da64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

const CoursesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Tüm Eğitimler
      </Typography>
      <Box sx={{ my: 3 }}>
        <TextField fullWidth label="Eğitimlerde ara..." variant="outlined" />
      </Box>
      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ '&:hover': { transform: 'scale(1.05)', transition: 'transform .2s' } }}>
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoursesPage;

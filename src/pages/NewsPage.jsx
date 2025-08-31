import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';

const newsItems = [
  {
    title: "BTK Akademi'den Yeni Eğitimler",
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    summary: 'BTK Akademi, yeni ve güncel eğitimlerle karşınızda.',
  },
  {
    title: 'Teknoloji Zirvesi Gerçekleşti',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    summary: 'Bu yılki teknoloji zirvesi, sektörün önde gelenlerini bir araya getirdi.',
  },
  {
    title: 'Siber Güvenlikte Yeni Gelişmeler',
    image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    summary: 'Siber güvenlik alanında yaşanan son gelişmeler ve alınması gereken önlemler.',
  },
];

const NewsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Haberler ve Duyurular
      </Typography>
      <Grid container spacing={4}>
        {newsItems.map((news, index) => (
          <Grid item key={index} xs={12}>
            <Card sx={{ display: 'flex', '&:hover': { transform: 'scale(1.02)', transition: 'transform .2s' } }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={news.image}
                alt={news.title}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography component="div" variant="h5">
                  {news.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {news.summary}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsPage;

import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Chip,
} from '@mui/material';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Business as BusinessIcon,
  Person as PersonIcon,
  Palette as PaletteIcon,
  ChildCare as ChildCareIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const categories = [
  { text: 'Yazılım Dünyası', icon: <CodeIcon /> },
  { text: 'Sistem Dünyası', icon: <StorageIcon /> },
  { text: 'İşletme Dünyası', icon: <BusinessIcon /> },
  { text: 'Kişisel Gelişim Dünyası', icon: <PersonIcon /> },
  { text: 'Tasarım Dünyası', icon: <PaletteIcon /> },
  { text: 'K12 Dünyası', icon: <ChildCareIcon /> },
];

const continuingCourses = [
  {
    title: 'Uçtan Uca WordPress',
    image: 'https://img.freepik.com/free-vector/wordpress-development-service-concept-illustration_114360-2292.jpg?t=st=1716911248~exp=1716914848~hmac=a4855476a6d66e5d59f712f5a0928a3a290940333288a38520281b95f1f92c69&w=826',
  },
  {
    title: 'HTML5 ile Web Geliştirme',
    image: 'https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?t=st=1716911303~exp=1716914903~hmac=4f7b4c10e309322a36a4457ee5c5eabd58b3c375594b29352e0785050f28a2a8&w=1380',
  },
  {
    title: 'Sağlıkta Yapay Zeka',
    image: 'https://img.freepik.com/free-vector/medical-background-design_1300-61.jpg?t=st=1716911327~exp=1716914927~hmac=f022c366113e316a9a01b7a2e882a4729c15d2906e5306655c65b9e072b226e6&w=996',
  },
  {
    title: 'Bilgi İhbar Merkezi',
    image: 'https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063229.jpg?t=st=1716911353~exp=1716914953~hmac=092591ba816c141d6c8e31a1fe527d2c31e97fa11c6d32ef74e548053539cb13&w=1380',
  },
  {
    title: 'Algoritma Programlama',
    image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1716911382~exp=1716915082~hmac=88c8724d1933e08f5d0232497d51571d78c338f01b6934336c5351e222a7f502&w=1380',
  },
];

const popularCourses = [
    {
        title: 'A1 Seviye İngilizce',
        image: 'https://img.freepik.com/free-vector/illustration-english-language-school_53876-20677.jpg?t=st=1716911519~exp=1716915119~hmac=5068f844b2450820f1712a233b497b3726715f33c306d8601833501f2f84b055&w=740',
        level: 'Temel Seviye',
      },
      {
        title: 'Sıfırdan İleri Seviye Python',
        image: 'https://img.freepik.com/free-vector/python-language-logo_1199-114.jpg?t=st=1716911545~exp=1716915145~hmac=320ac2220455d3f00ce5868e7b337c385c942ba6c11e7417532f05c45330a133',
        level: 'Temel Seviye',
      },
      {
        title: 'Microsoft Excel Temelleri',
        image: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?t=st=1716911574~exp=1716915174~hmac=47f892c4f8ab4438b4d08e541c5ffc4d34c0e633d3126759c9435b5f3a0937e2&w=1380',
        level: 'Temel Seviye',
      },
      {
        title: 'Bilgi Teknolojilerine Giriş',
        image: 'https://img.freepik.com/free-photo/server-room-background_157927-463.jpg?t=st=1716911599~exp=1716915199~hmac=f26c7e2d09c2a3826019b85c2c77607797cf98d4074b1ac130d2d3126f536c4b&w=1060',
        level: 'Temel Seviye',
      },
      {
        title: 'C#',
        image: 'https://img.freepik.com/free-photo/c-sharp-programming-language-icon_53876-65115.jpg?t=st=1716911621~exp=1716915221~hmac=3775e5488424a520428d087965824c883e18a803975a5f1a304f326177f1e7f3&w=740',
        level: 'Orta Seviye',
      },
]

const CourseCarousel = ({ title, courses }) => (
  <Box sx={{ my: 4 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
      <Typography variant="h5" component="h2" fontWeight="bold">
        {title}
      </Typography>
      <Link to="/courses" style={{ textDecoration: 'none' }}>
        <ChevronRightIcon />
      </Link>
    </Box>
    <Box sx={{ display: 'flex', overflowX: 'auto', pb: 2, gap: 2 }}>
      {courses.map((course, index) => (
        <Card key={index} sx={{ minWidth: 240, flexShrink: 0, borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <CardMedia
            component="img"
            height="140"
            image={course.image}
            alt={course.title}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div" sx={{height: '40px'}}>
              {course.title}
            </Typography>
            {course.level && <Chip label={course.level} size="small" sx={{ mt: 1, backgroundColor: '#e0f2f1', color: '#00796b' }} />}
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
);

const HomePage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, backgroundColor: '#f4f6f8', p: 3, borderRadius: '15px' }}>
      <Grid container spacing={4}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper elevation={0} sx={{ p: 2, borderRadius: 2 }}>
            <List>
              {categories.map((item, index) => (
                <ListItem button key={index}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          {/* Hero Banner */}
          <Card sx={{ mb: 4, borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="350"
              image="https://www.btkakademi.gov.tr/kurumsal/assets/img/datathon-25/banner.png"
              alt="Datathon25 Banner"
            />
          </Card>

          {/* Carousels */}
          <CourseCarousel title="Devam Ettiğim Eğitimler" courses={continuingCourses} />
          <CourseCarousel title="Popüler Eğitimler" courses={popularCourses} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;

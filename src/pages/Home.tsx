import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from '@mui/material';
import {
  DirectionsBike as BikeIcon,
  LocalShipping as ShippingIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
} from '@mui/icons-material';

const features = [
  {
    icon: <BikeIcon sx={{ fontSize: 40 }} />,
    title: 'Large Sélection',
    description: 'Plus de 1000 vélos disponibles pour tous les styles de cyclisme',
  },
  {
    icon: <ShippingIcon sx={{ fontSize: 40 }} />,
    title: 'Livraison Gratuite',
    description: 'Livraison gratuite en France métropolitaine pour toute commande',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Garantie 2 Ans',
    description: "Tous nos vélos sont garantis 2 ans pièces et main d'oeuvre",
  },
  {
    icon: <SupportIcon sx={{ fontSize: 40 }} />,
    title: 'SAV Expert',
    description: 'Une équipe de professionnels à votre service',
  },
];

const categories = [
  {
    title: 'VTT',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Pour l\'aventure et les sensations fortes',
  },
  {
    title: 'Vélos de Route',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Pour la performance et la vitesse',
  },
  {
    title: 'Vélos Électriques',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Pour des trajets sans effort',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          marginTop: -4,
          marginX: -2,
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h1"
            className="text-white font-bold mb-4"
            sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Bienvenue chez BreizSport
          </Typography>
          <Typography
            variant="h5"
            className="text-white mb-8"
            sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            Découvrez notre sélection de vélos haut de gamme
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/products"
            className="text-lg"
          >
            Voir nos vélos
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container className="py-16">
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box className="text-center">
                <Box className="text-primary-main mb-4">{feature.icon}</Box>
                <Typography variant="h6" className="font-bold mb-2">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories Section */}
      <Box className="bg-gray-100 py-16">
        <Container>
          <Typography variant="h4" className="text-center font-bold mb-12">
            Nos Catégories
          </Typography>
          <Grid container spacing={4}>
            {categories.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardMedia
                    component="img"
                    height="300"
                    image={category.image}
                    alt={category.title}
                    className="h-64 object-cover"
                  />
                  <CardContent>
                    <Typography variant="h5" className="font-bold mb-2">
                      {category.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="mb-4">
                      {category.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      component={Link}
                      to="/products"
                      fullWidth
                    >
                      Découvrir
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container className="py-16 text-center">
        <Typography variant="h4" className="font-bold mb-4">
          Prêt à trouver votre vélo idéal ?
        </Typography>
        <Typography variant="body1" color="text.secondary" className="mb-8">
          Notre équipe d'experts est là pour vous conseiller
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/contact"
        >
          Nous Contacter
        </Button>
      </Container>
    </div>
  );
};

export default Home; 
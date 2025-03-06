import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const featuredBikes = [
  {
    id: 1,
    name: 'VTT Explorer Pro',
    price: '899 €',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'VTT tout-terrain parfait pour l\'aventure',
  },
  {
    id: 2,
    name: 'Vélo de Route Carbone',
    price: '1299 €',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Vélo de route ultra-léger en carbone',
  },
  {
    id: 3,
    name: 'Vélo Électrique City',
    price: '1599 €',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Vélo électrique urbain pour vos déplacements',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Container className="relative z-10 h-full flex flex-col justify-center text-white">
          <Typography variant="h2" className="mb-4 font-bold">
            Découvrez notre Collection de Vélos
          </Typography>
          <Typography variant="h5" className="mb-8">
            Qualité, Performance et Style pour tous les Cyclistes
          </Typography>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="secondary"
            size="large"
            className="w-fit"
          >
            Voir nos Vélos
          </Button>
        </Container>
      </div>

      {/* Featured Products */}
      <Container className="py-16">
        <Typography variant="h4" className="mb-8 text-center font-bold">
          Nos Vélos Populaires
        </Typography>
        <Grid container spacing={4}>
          {featuredBikes.map((bike) => (
            <Grid item key={bike.id} xs={12} sm={6} md={4}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardMedia
                  component="img"
                  height="200"
                  image={bike.image}
                  alt={bike.name}
                  className="h-48 object-cover"
                />
                <CardContent>
                  <Typography variant="h6" className="font-bold">
                    {bike.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="mb-2">
                    {bike.description}
                  </Typography>
                  <Typography variant="h6" color="primary" className="font-bold">
                    {bike.price}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/product/${bike.id}`}
                    variant="outlined"
                    color="primary"
                    className="mt-4"
                    fullWidth
                  >
                    Voir les détails
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16">
        <Container>
          <div className="text-center">
            <Typography variant="h4" className="mb-4 font-bold">
              Prêt à Trouver Votre Vélo Idéal ?
            </Typography>
            <Typography variant="body1" className="mb-8">
              Découvrez notre large gamme de vélos et trouvez celui qui vous correspond.
            </Typography>
            <Button
              component={Link}
              to="/products"
              variant="contained"
              color="primary"
              size="large"
            >
              Explorer la Collection
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home; 
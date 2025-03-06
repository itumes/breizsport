import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import {
  Speed as SpeedIcon,
  EmojiNature as NatureIcon,
  Security as SecurityIcon,
  People as PeopleIcon,
} from '@mui/icons-material';

const values = [
  {
    icon: <SpeedIcon fontSize="large" />,
    title: 'Performance',
    description: 'Nous sélectionnons les meilleurs vélos pour garantir des performances optimales.',
  },
  {
    icon: <NatureIcon fontSize="large" />,
    title: 'Écologie',
    description: 'Nous nous engageons pour une mobilité durable et respectueuse de l\'environnement.',
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: 'Qualité',
    description: 'Tous nos vélos sont rigoureusement testés pour assurer votre sécurité.',
  },
  {
    icon: <PeopleIcon fontSize="large" />,
    title: 'Service',
    description: 'Notre équipe de passionnés est là pour vous conseiller et vous accompagner.',
  },
];

const About = () => {
  return (
    <Container className="py-8">
      {/* Hero Section */}
      <Box className="text-center mb-12">
        <Typography variant="h3" className="font-bold mb-4">
          Notre Histoire
        </Typography>
        <Typography variant="subtitle1" className="text-gray-600 max-w-3xl mx-auto">
          Depuis 2010, BreizSport s'est imposé comme le spécialiste du vélo en Bretagne.
          Notre passion pour le cyclisme nous pousse à offrir les meilleurs produits et services
          à notre clientèle.
        </Typography>
      </Box>

      {/* Nos Valeurs */}
      <Box className="mb-16">
        <Typography variant="h4" className="text-center font-bold mb-8">
          Nos Valeurs
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="text-center">
                  <Box className="text-primary-main mb-4">
                    {value.icon}
                  </Box>
                  <Typography variant="h6" className="font-bold mb-2">
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Notre Expertise */}
      <Box className="bg-gray-50 p-8 rounded-lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className="font-bold mb-4">
              Notre Expertise
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-4">
              Avec plus de 10 ans d'expérience dans le domaine du cyclisme,
              notre équipe de professionnels passionnés vous accompagne dans
              le choix de votre vélo idéal.
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              Nous proposons également un service après-vente complet et
              des conseils personnalisés pour l'entretien de votre vélo.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565951821966-2ad4b89f8c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Notre atelier"
                className="w-full h-full object-cover rounded-lg"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 
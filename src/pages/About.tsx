import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
} from '@mui/material';
import {
  DirectionsBike as BikeIcon,
  EmojiPeople as PeopleIcon,
  Nature as NatureIcon,
  Build as BuildIcon,
} from '@mui/icons-material';

const values = [
  {
    icon: <BikeIcon sx={{ fontSize: 40 }} />,
    title: 'Passion du Vélo',
    description: 'Notre équipe partage une passion commune pour le cyclisme sous toutes ses formes.',
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    title: 'Service Client',
    description: 'Nous mettons un point d\'honneur à offrir un service personnalisé et de qualité.',
  },
  {
    icon: <NatureIcon sx={{ fontSize: 40 }} />,
    title: 'Engagement Écologique',
    description: 'Nous promouvons la mobilité douce et respectueuse de l\'environnement.',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    title: 'Expertise Technique',
    description: 'Nos techniciens sont formés pour assurer un service de maintenance professionnel.',
  },
];

const team = [
  {
    name: 'Jean Dupont',
    role: 'Fondateur & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Marie Martin',
    role: 'Responsable Commercial',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Pierre Durand',
    role: 'Chef Mécanicien',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  },
];

const About = () => {
  return (
    <Container className="py-16">
      {/* Histoire */}
      <Typography variant="h3" className="text-center font-bold mb-12">
        Notre Histoire
      </Typography>
      <Grid container spacing={6} className="mb-16">
        <Grid item xs={12} md={6}>
          <img
            src="https://images.unsplash.com/photo-1523740856324-f2ce89135981?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Notre magasin"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </Grid>
        <Grid item xs={12} md={6} className="flex flex-col justify-center">
          <Typography variant="h5" className="font-bold mb-4">
            Plus de 20 ans d'expertise
          </Typography>
          <Typography variant="body1" className="mb-4">
            Fondé en 2000 à Rennes, BreizSport est né de la passion d'une équipe de cyclistes
            chevronnés. Notre objectif : rendre accessible à tous les joies du cyclisme en
            proposant des vélos de qualité et un service d'exception.
          </Typography>
          <Typography variant="body1">
            Au fil des années, nous avons développé une expertise unique dans la vente et
            l'entretien de vélos. Notre engagement envers la qualité et la satisfaction client
            nous a permis de devenir une référence en Bretagne.
          </Typography>
        </Grid>
      </Grid>

      {/* Nos Valeurs */}
      <Typography variant="h4" className="text-center font-bold mb-12">
        Nos Valeurs
      </Typography>
      <Grid container spacing={4} className="mb-16">
        {values.map((value, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="text-center">
                <Box className="text-primary-main mb-4">{value.icon}</Box>
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

      {/* Notre Équipe */}
      <Typography variant="h4" className="text-center font-bold mb-12">
        Notre Équipe
      </Typography>
      <Grid container spacing={4}>
        {team.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className="text-center">
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 200, height: 200, margin: '0 auto', marginBottom: 2 }}
              />
              <Typography variant="h6" className="font-bold">
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.role}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About; 
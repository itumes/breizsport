import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material';

const contactInfo = [
  {
    icon: <PhoneIcon />,
    title: 'Téléphone',
    content: '02 98 XX XX XX',
    description: 'Du lundi au samedi',
  },
  {
    icon: <EmailIcon />,
    title: 'Email',
    content: 'contact@breizsport.fr',
    description: 'Réponse sous 24h',
  },
  {
    icon: <LocationIcon />,
    title: 'Adresse',
    content: '123 rue de la Mer',
    description: '29000 Quimper, France',
  },
  {
    icon: <TimeIcon />,
    title: 'Horaires',
    content: '9h00 - 19h00',
    description: 'Fermé le dimanche',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    setShowNotification(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Container className="py-8">
      <Typography variant="h3" className="text-center font-bold mb-12">
        Contactez-nous
      </Typography>

      <Grid container spacing={6}>
        {/* Informations de contact */}
        <Grid item xs={12} md={5}>
          <Grid container spacing={3}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex flex-col items-center text-center">
                    <Box className="text-primary-main mb-3">
                      {info.icon}
                    </Box>
                    <Typography variant="h6" className="font-bold mb-2">
                      {info.title}
                    </Typography>
                    <Typography variant="body1" className="mb-1">
                      {info.content}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {info.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Carte */}
          <Box className="mt-6 rounded-lg overflow-hidden">
            <iframe
              title="Notre localisation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85017.9551860489!2d-4.139243!3d48.000611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816ade46e34971f%3A0x40ca5cd36e4ab30!2sQuimper!5e0!3m2!1sfr!2sfr!4v1646579003671!5m2!1sfr!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Box>
        </Grid>

        {/* Formulaire de contact */}
        <Grid item xs={12} md={7}>
          <Card className="p-6">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Sujet"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Envoyer le message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={showNotification}
        autoHideDuration={6000}
        onClose={() => setShowNotification(false)}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Votre message a été envoyé avec succès !
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 
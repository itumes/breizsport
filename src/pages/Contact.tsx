import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
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
    content: '02 98 00 00 00',
    link: 'tel:0298000000',
  },
  {
    icon: <EmailIcon />,
    title: 'Email',
    content: 'contact@breizsport.fr',
    link: 'mailto:contact@breizsport.fr',
  },
  {
    icon: <LocationIcon />,
    title: 'Adresse',
    content: '123 rue de la Paix, 35000 Rennes',
    link: 'https://goo.gl/maps/123',
  },
  {
    icon: <TimeIcon />,
    title: 'Horaires',
    content: 'Lun-Sam: 9h-19h\nDimanche: Fermé',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    setShowNotification(true);
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      sujet: '',
      message: '',
    });
  };

  return (
    <Container className="py-16">
      <Typography variant="h3" className="text-center font-bold mb-12">
        Contactez-nous
      </Typography>

      <Grid container spacing={6}>
        {/* Informations de contact */}
        <Grid item xs={12} md={4}>
          <Box className="sticky top-8">
            <Typography variant="h5" className="font-bold mb-6">
              Nos Coordonnées
            </Typography>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} key={index}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent>
                      <Box className="flex items-start">
                        <Box className="text-primary-main mr-4">
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography variant="h6" className="font-bold">
                            {info.title}
                          </Typography>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-primary-main hover:underline"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              style={{ whiteSpace: 'pre-line' }}
                            >
                              {info.content}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Formulaire de contact */}
        <Grid item xs={12} md={8}>
          <Card className="p-6">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5" className="font-bold mb-4">
                    Envoyez-nous un message
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="nom"
                    label="Nom complet"
                    value={formData.nom}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="telephone"
                    label="Téléphone"
                    value={formData.telephone}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="sujet"
                    label="Sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={6}
                    fullWidth
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

      {/* Carte */}
      <Box className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.9914135925824!2d-1.6777653235276317!3d48.117266071283424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ede2fa7d69085%3A0x40ca5cd36e4ab30!2sRennes!5e0!3m2!1sfr!2sfr!4v1646671234567!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Notre localisation"
        />
      </Box>

      <Snackbar
        open={showNotification}
        autoHideDuration={6000}
        onClose={() => setShowNotification(false)}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 
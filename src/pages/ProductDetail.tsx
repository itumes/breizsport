import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Box,
  Tabs,
  Tab,
  Rating,
  Chip,
  Snackbar,
  Alert,
  IconButton,
} from '@mui/material';
import {
  LocalShipping,
  Security,
  Update,
  Add as AddIcon,
  Remove as RemoveIcon,
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const bikes = [
  {
    id: 1,
    name: 'VTT Explorer Pro',
    price: 899,
    category: 'VTT',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'VTT tout-terrain parfait pour l\'aventure',
    specs: {
      cadre: 'Aluminium 6061',
      fourche: 'Suspension 120mm',
      transmission: 'Shimano Deore 12 vitesses',
      freins: 'Freins à disque hydrauliques',
      pneus: '29 pouces tout-terrain',
    },
    rating: 4.5,
    stock: 5,
  },
  // ... autres vélos
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [tabValue, setTabValue] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const bike = bikes.find((b) => b.id === Number(id));

  if (!bike) {
    return (
      <Container>
        <Typography variant="h5" className="text-center py-8">
          Produit non trouvé
        </Typography>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: bike.id,
      name: bike.name,
      price: bike.price,
      image: bike.image,
    });
    setShowNotification(true);
    setTimeout(() => {
      navigate('/cart');
    }, 1500);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, Math.min(bike.stock, quantity + change));
    setQuantity(newQuantity);
  };

  return (
    <Container className="py-8">
      <Grid container spacing={6}>
        {/* Image du produit */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={bike.image}
              alt={bike.name}
              className="object-cover"
            />
          </Card>
        </Grid>

        {/* Informations du produit */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" className="font-bold mb-4">
            {bike.name}
          </Typography>
          
          <Box className="flex items-center mb-4">
            <Rating value={bike.rating} precision={0.5} readOnly />
            <Typography variant="body2" className="ml-2">
              ({bike.rating}/5)
            </Typography>
          </Box>

          <Typography variant="h5" color="primary" className="font-bold mb-4">
            {bike.price} €
          </Typography>

          <Typography variant="body1" className="mb-6">
            {bike.description}
          </Typography>

          <Box className="mb-6">
            <Chip
              icon={<LocalShipping />}
              label="Livraison gratuite"
              color="primary"
              className="mr-2"
            />
            <Chip
              icon={<Security />}
              label="Garantie 2 ans"
              color="primary"
              className="mr-2"
            />
            <Chip
              icon={<Update />}
              label="30 jours pour changer d'avis"
              color="primary"
            />
          </Box>

          {/* Sélecteur de quantité */}
          <Box className="flex items-center mb-4">
            <Typography variant="subtitle1" className="mr-4">
              Quantité :
            </Typography>
            <IconButton
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              size="small"
            >
              <RemoveIcon />
            </IconButton>
            <Typography className="mx-4 font-bold">
              {quantity}
            </Typography>
            <IconButton
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= bike.stock}
              size="small"
            >
              <AddIcon />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={handleAddToCart}
            disabled={bike.stock === 0}
          >
            {bike.stock > 0 ? 'Ajouter au panier' : 'Rupture de stock'}
          </Button>

          {bike.stock > 0 && bike.stock <= 5 && (
            <Typography variant="body2" color="error" className="mt-2">
              Plus que {bike.stock} en stock !
            </Typography>
          )}
        </Grid>
      </Grid>

      {/* Onglets d'information */}
      <Box sx={{ width: '100%', mt: 8 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)}>
            <Tab label="Caractéristiques" />
            <Tab label="Livraison" />
            <Tab label="Garantie" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={2}>
            {Object.entries(bike.specs).map(([key, value]) => (
              <Grid item xs={12} sm={6} key={key}>
                <Typography variant="subtitle1" className="font-bold">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Typography>
                <Typography variant="body1">{value}</Typography>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="body1">
            Livraison gratuite en France métropolitaine sous 5-7 jours ouvrés.
            Possibilité de retrait en magasin sous 48h.
          </Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="body1">
            Tous nos vélos sont garantis 2 ans pièces et main d'œuvre.
            Extension de garantie possible jusqu'à 5 ans.
          </Typography>
        </TabPanel>
      </Box>

      <Snackbar
        open={showNotification}
        autoHideDuration={1500}
        onClose={() => setShowNotification(false)}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Produit ajouté au panier avec succès !
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductDetail; 
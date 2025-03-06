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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  LocalShipping,
  Security,
  Update,
  Add as AddIcon,
  Remove as RemoveIcon,
  ShoppingCart as ShoppingCartIcon,
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
  {
    id: 2,
    name: 'Vélo de Route Velocity',
    price: 1299,
    category: 'Route',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Vélo de route performant pour les passionnés de vitesse',
    specs: {
      cadre: 'Carbone T700',
      fourche: 'Carbone monocoque',
      transmission: 'Shimano 105 11 vitesses',
      freins: 'Freins à disque hydrauliques',
      pneus: '700c route',
    },
    rating: 4.8,
    stock: 3,
  },
  {
    id: 3,
    name: 'E-Bike City Plus',
    price: 1899,
    category: 'Électrique',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Vélo électrique urbain avec une excellente autonomie',
    specs: {
      cadre: 'Aluminium hydroformé',
      moteur: 'Bosch Performance Line 250W',
      batterie: '500Wh amovible',
      transmission: 'Shimano Nexus 7 vitesses',
      freins: 'Freins à disque hydrauliques',
      autonomie: 'Jusqu\'à 100km',
    },
    rating: 4.6,
    stock: 8,
  },
  {
    id: 4,
    name: 'BMX Freestyle X',
    price: 499,
    category: 'BMX',
    image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'BMX robuste pour les tricks et le freestyle',
    specs: {
      cadre: 'Acier chromoly',
      fourche: 'Chromoly',
      transmission: 'Mono-vitesse',
      freins: 'U-Brake arrière',
      pneus: '20 pouces',
    },
    rating: 4.3,
    stock: 6,
  },
  {
    id: 5,
    name: 'Gravel Adventure Pro',
    price: 1599,
    category: 'Gravel',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Vélo polyvalent pour routes et chemins',
    specs: {
      cadre: 'Aluminium 6061 double butted',
      fourche: 'Carbone tout-terrain',
      transmission: 'SRAM Rival 1x11 vitesses',
      freins: 'Freins à disque hydrauliques',
      pneus: '700c Gravel',
    },
    rating: 4.7,
    stock: 4,
  },
  {
    id: 6,
    name: 'Vélo Enfant Junior',
    price: 299,
    category: 'Enfant',
    image: 'https://images.unsplash.com/photo-1595432541891-a461100d3054?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Vélo adapté aux enfants de 6 à 10 ans',
    specs: {
      cadre: 'Aluminium léger',
      fourche: 'Rigide acier',
      transmission: '6 vitesses',
      freins: 'V-Brake',
      pneus: '24 pouces',
    },
    rating: 4.4,
    stock: 10,
  },
  {
    id: 7,
    name: 'VTT Électrique Enduro',
    price: 3499,
    category: 'VTT Électrique',
    image: 'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'VTT électrique haut de gamme pour l\'enduro',
    specs: {
      cadre: 'Aluminium premium',
      moteur: 'Shimano EP8 250W',
      batterie: '630Wh intégrée',
      suspension: 'Double suspension 160mm',
      transmission: 'Shimano XT 12 vitesses',
      freins: 'Freins à disque hydrauliques 4 pistons',
    },
    rating: 4.9,
    stock: 2,
  },
  {
    id: 8,
    name: 'Vélo Pliant City',
    price: 699,
    category: 'Pliant',
    image: 'https://images.unsplash.com/photo-1582516702958-6f0040505f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Vélo pliant compact pour les déplacements urbains',
    specs: {
      cadre: 'Aluminium pliable',
      pliage: 'Système rapide',
      transmission: 'Shimano 7 vitesses',
      freins: 'V-Brake',
      pneus: '20 pouces',
      poids: '12kg',
    },
    rating: 4.2,
    stock: 7,
  }
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
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
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

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, Math.min(bike.stock, quantity + change));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart({
      id: bike.id,
      name: bike.name,
      price: bike.price,
      image: bike.image,
      quantity: quantity,
    });
    setShowNotification(true);
    setShowConfirmDialog(true);
  };

  const handleCloseDialog = () => {
    setShowConfirmDialog(false);
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const handleContinueShopping = () => {
    setShowConfirmDialog(false);
    navigate('/products');
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
            startIcon={<ShoppingCartIcon />}
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

      {/* Notification */}
      <Snackbar
        open={showNotification}
        autoHideDuration={3000}
        onClose={() => setShowNotification(false)}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Produit ajouté au panier avec succès !
        </Alert>
      </Snackbar>

      {/* Dialog de confirmation */}
      <Dialog
        open={showConfirmDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          Produit ajouté au panier
        </DialogTitle>
        <DialogContent>
          <Typography>
            Que souhaitez-vous faire ?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContinueShopping} color="primary">
            Continuer mes achats
          </Button>
          <Button onClick={handleGoToCart} color="primary" variant="contained" autoFocus>
            Voir mon panier
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProductDetail; 
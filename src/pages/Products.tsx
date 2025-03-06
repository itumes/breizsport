import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  TextField,
  Box,
  Rating,
} from '@mui/material';
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';

const bikes = [
  {
    id: 1,
    name: 'VTT Explorer Pro',
    price: 899,
    category: 'VTT',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'VTT tout-terrain parfait pour l\'aventure',
    rating: 4.5,
    stock: 5,
  },
  {
    id: 2,
    name: 'Vélo de Route Carbone',
    price: 1299,
    category: 'Route',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Vélo de route ultra-léger en carbone',
    rating: 4.8,
    stock: 3,
  },
  {
    id: 3,
    name: 'Vélo Électrique City',
    price: 1599,
    category: 'Électrique',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Vélo électrique urbain pour vos déplacements',
    rating: 4.6,
    stock: 7,
  },
  {
    id: 4,
    name: 'VTT Enduro Pro',
    price: 2199,
    category: 'VTT',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'VTT haut de gamme pour l\'enduro et les sentiers techniques',
    rating: 4.9,
    stock: 2,
  },
  {
    id: 5,
    name: 'Vélo de Ville Classic',
    price: 699,
    category: 'Ville',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Vélo de ville élégant et confortable',
    rating: 4.3,
    stock: 8,
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 2500]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBikes = bikes.filter((bike) => {
    const matchesCategory = category === '' || bike.category === category;
    const matchesPrice = bike.price >= priceRange[0] && bike.price <= priceRange[1];
    const matchesSearch = bike.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bike.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container className="py-8">
      <Typography variant="h4" className="mb-8 font-bold text-center">
        Nos Vélos
      </Typography>

      {/* Filtres */}
      <Grid container spacing={4} className="mb-8">
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Catégorie</InputLabel>
            <Select
              value={category}
              label="Catégorie"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">Tous</MenuItem>
              <MenuItem value="VTT">VTT</MenuItem>
              <MenuItem value="Route">Route</MenuItem>
              <MenuItem value="Électrique">Électrique</MenuItem>
              <MenuItem value="Ville">Ville</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography gutterBottom>Prix (€)</Typography>
          <Slider
            value={priceRange}
            onChange={(_, newValue) => setPriceRange(newValue as number[])}
            valueLabelDisplay="auto"
            min={0}
            max={2500}
            step={100}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Rechercher"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Grille de produits */}
      <Grid container spacing={4}>
        {filteredBikes.map((bike) => (
          <Grid item key={bike.id} xs={12} sm={6} md={4}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardMedia
                component="img"
                height="200"
                image={bike.image}
                alt={bike.name}
                className="h-48 object-cover cursor-pointer"
                onClick={() => handleProductClick(bike.id)}
              />
              <CardContent className="cursor-pointer" onClick={() => handleProductClick(bike.id)}>
                <Typography variant="h6" className="font-bold mb-2">
                  {bike.name}
                </Typography>
                <Box className="flex items-center mb-2">
                  <Rating value={bike.rating} precision={0.5} readOnly size="small" />
                  <Typography variant="body2" className="ml-1 text-gray-600">
                    ({bike.rating})
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" className="mb-2">
                  {bike.description}
                </Typography>
                <Typography variant="h6" color="primary" className="font-bold">
                  {bike.price} €
                </Typography>
                {bike.stock <= 5 && (
                  <Typography variant="body2" color="error" className="mt-1">
                    Plus que {bike.stock} en stock !
                  </Typography>
                )}
              </CardContent>
              <CardActions className="justify-between p-4">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleProductClick(bike.id)}
                >
                  Voir les détails
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => handleProductClick(bike.id)}
                >
                  Acheter
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredBikes.length === 0 && (
        <Box className="text-center py-8">
          <Typography variant="h6" color="text.secondary">
            Aucun vélo ne correspond à vos critères de recherche.
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Products; 
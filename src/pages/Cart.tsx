import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Box,
  Divider,
  TextField,
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Simulation d'articles dans le panier
const initialCartItems = [
  {
    id: 1,
    name: 'VTT Explorer Pro',
    price: 899,
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Vélo de Route Carbone',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <Container className="py-16">
        <Typography variant="h5" className="text-center mb-8">
          Votre panier est vide
        </Typography>
        <div className="text-center">
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="primary"
            size="large"
          >
            Découvrir nos vélos
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-8">
      <Typography variant="h4" className="mb-8 font-bold">
        Votre Panier
      </Typography>

      <Grid container spacing={4}>
        {/* Liste des articles */}
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-4">
              <Grid container>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                    className="h-full object-cover"
                  />
                </Grid>
                <Grid item xs={8}>
                  <CardContent className="h-full flex flex-col justify-between">
                    <div>
                      <Typography variant="h6" className="font-bold mb-2">
                        {item.name}
                      </Typography>
                      <Typography variant="h6" color="primary" className="mb-4">
                        {item.price} €
                      </Typography>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <IconButton
                          onClick={() => updateQuantity(item.id, -1)}
                          size="small"
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography className="mx-3">{item.quantity}</Typography>
                        <IconButton
                          onClick={() => updateQuantity(item.id, 1)}
                          size="small"
                        >
                          <AddIcon />
                        </IconButton>
                      </div>
                      <IconButton
                        onClick={() => removeItem(item.id)}
                        color="error"
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Grid>

        {/* Résumé de la commande */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" className="font-bold mb-4">
                Résumé de la commande
              </Typography>
              
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <Typography>
                      {item.name} (x{item.quantity})
                    </Typography>
                    <Typography>
                      {item.price * item.quantity} €
                    </Typography>
                  </div>
                ))}
                
                <Divider className="my-4" />
                
                <div className="flex justify-between">
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6" color="primary">
                    {total} €
                  </Typography>
                </div>

                <TextField
                  fullWidth
                  label="Code promo"
                  variant="outlined"
                  className="mt-4"
                />

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  className="mt-4"
                >
                  Procéder au paiement
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
  ShoppingBasket as ShoppingBasketIcon,
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  if (state.items.length === 0) {
    return (
      <Container className="py-16">
        <Box className="text-center">
          <ShoppingBasketIcon sx={{ fontSize: 60, color: 'text.secondary' }} />
          <Typography variant="h5" className="mt-4 mb-8">
            Votre panier est vide
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/products')}
          >
            Découvrir nos vélos
          </Button>
        </Box>
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
          {state.items.map((item, index) => (
            <Card key={index} className="mb-4">
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
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          size="small"
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography className="mx-3">{item.quantity}</Typography>
                        <IconButton
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          size="small"
                        >
                          <AddIcon />
                        </IconButton>
                      </div>
                      <IconButton
                        onClick={() => removeFromCart(index)}
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
                {state.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
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
                    {state.totalAmount} €
                  </Typography>
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  className="mt-4"
                >
                  Procéder au paiement
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth
                  className="mt-2"
                  onClick={() => navigate('/products')}
                >
                  Continuer mes achats
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
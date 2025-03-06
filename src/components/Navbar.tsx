import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Button,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ListItemButton,
} from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon,
  Menu as MenuIcon,
  Home as HomeIcon,
  DirectionsBike as BikeIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';

const navigationLinks = [
  { name: 'Accueil', path: '/', icon: <HomeIcon /> },
  { name: 'Nos Vélos', path: '/products', icon: <BikeIcon /> },
  { name: 'À Propos', path: '/about', icon: <InfoIcon /> },
  { name: 'Contact', path: '/contact', icon: <ContactIcon /> },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { state: cartState } = useCart();

  const cartItemsCount = cartState.items.reduce((total, item) => total + item.quantity, 0);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="sticky" className="bg-white shadow-md">
      <Container maxWidth="xl">
        <Toolbar className="justify-between px-0">
          {/* Logo et Nom de l'entreprise */}
          <Link to="/" className="no-underline flex items-center">
            <BikeIcon className="text-primary-main mr-2 text-3xl" />
            <Typography variant="h5" className="text-primary-main font-bold hidden sm:block">
              BreizSport
            </Typography>
          </Link>

          {/* Navigation Desktop */}
          <Box className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                color="inherit"
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActiveRoute(link.path)
                    ? 'bg-primary-main text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                startIcon={React.cloneElement(link.icon, {
                  className: isActiveRoute(link.path) ? 'text-white' : 'text-gray-700',
                })}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          {/* Panier et Menu Mobile */}
          <Box className="flex items-center">
            <IconButton
              component={Link}
              to="/cart"
              color="inherit"
              className="text-primary-main"
            >
              <Badge badgeContent={cartItemsCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton
              color="inherit"
              className="ml-2 md:hidden text-primary-main"
              onClick={handleMobileMenuToggle}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Menu Mobile */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        className="md:hidden"
      >
        <Box className="w-64">
          <Box className="p-4 bg-primary-main text-white">
            <Typography variant="h6" className="font-bold">
              BreizSport
            </Typography>
          </Box>
          <List>
            {navigationLinks.map((link) => (
              <React.Fragment key={link.path}>
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    to={link.path}
                    onClick={handleMobileMenuToggle}
                    className={isActiveRoute(link.path) ? 'bg-gray-100' : ''}
                  >
                    <ListItemIcon className={isActiveRoute(link.path) ? 'text-primary-main' : ''}>
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={link.name}
                      className={isActiveRoute(link.path) ? 'text-primary-main' : ''}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 
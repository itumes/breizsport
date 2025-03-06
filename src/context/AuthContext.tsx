import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  nom: string;
  prenom: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, password: string, nom: string, prenom: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simuler une base de données d'utilisateurs
const fakeUsers = [
  {
    id: '1',
    email: 'test@example.com',
    password: 'test123',
    nom: 'Dupont',
    prenom: 'Jean'
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simuler une requête API
    const foundUser = fakeUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      // Stocker les informations de connexion dans le localStorage
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (email: string, password: string, nom: string, prenom: string): Promise<boolean> => {
    // Vérifier si l'utilisateur existe déjà
    if (fakeUsers.some(u => u.email === email)) {
      return false;
    }

    // Simuler l'enregistrement d'un nouvel utilisateur
    const newUser = {
      id: String(fakeUsers.length + 1),
      email,
      password,
      nom,
      prenom
    };
    fakeUsers.push(newUser);

    // Connecter automatiquement l'utilisateur après l'inscription
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    return true;
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      logout,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 
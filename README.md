# BreizSport - Application de Vente de Vélos

Application web moderne de vente de vélos développée avec React, TypeScript, Material-UI et TailwindCSS.

## 🚀 Démarrage Rapide avec Docker

### Prérequis
- Docker
- Docker Compose

### Installation et Démarrage

1. Cloner le projet :
```bash
git clone https://github.com/votre-username/breizsport.git
cd breizsport
```

2. Lancer l'application avec Docker Compose :
```bash
docker-compose up -d
```

L'application sera accessible à l'adresse : http://localhost:3000

### Arrêt de l'Application
```bash
docker-compose down
```

## 🛠 Développement Local

### Prérequis
- Node.js (v16 ou supérieur)
- npm ou yarn

### Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm start
```

## 📦 Structure du Projet

```
breizsport/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── context/       # Contextes React (panier, etc.)
│   ├── pages/         # Pages de l'application
│   └── ...
├── public/           # Fichiers statiques
├── Dockerfile        # Configuration Docker
├── docker-compose.yml # Configuration Docker Compose
├── nginx.conf        # Configuration Nginx
└── ...
```

## 🔧 Configuration Docker

Le projet utilise une configuration Docker en deux étapes :

1. **Stage de Build** :
   - Utilise node:18-alpine
   - Installe les dépendances
   - Construit l'application

2. **Stage de Production** :
   - Utilise nginx:alpine
   - Sert l'application buildée
   - Inclut une configuration Nginx optimisée

### Personnalisation

- Le port par défaut est 3000 (modifiable dans docker-compose.yml)
- La configuration Nginx peut être modifiée dans nginx.conf
- Les variables d'environnement peuvent être ajoutées dans docker-compose.yml

## 🔄 Intégration dans d'Autres Projets

Pour intégrer BreizSport dans un autre projet :

1. Copier les fichiers Docker :
```bash
cp Dockerfile docker-compose.yml nginx.conf /chemin/vers/votre/projet/
```

2. Adapter le docker-compose.yml selon vos besoins :
```yaml
version: '3.8'
services:
  votre-projet:
    # Votre configuration existante
  breizsport:
    build:
      context: ./breizsport
      dockerfile: Dockerfile
    ports:
      - "3000:80"
    networks:
      - votre-network
```

## 📝 Variables d'Environnement

Pour personnaliser l'application, vous pouvez définir les variables d'environnement suivantes :

```env
REACT_APP_API_URL=votre_api_url
REACT_APP_STRIPE_KEY=votre_cle_stripe
```

## 🔒 Sécurité

- Les fichiers statiques sont mis en cache
- Compression gzip activée
- Headers de sécurité configurés dans Nginx

## 📈 Performance

La configuration Nginx inclut :
- Compression gzip pour les fichiers statiques
- Mise en cache optimisée
- Support du routage React
- Headers de cache appropriés

## 🤝 Contribution

1. Forker le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commiter vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pusher vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

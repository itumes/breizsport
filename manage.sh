#!/bin/bash

# Couleurs pour les messages
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Fonction d'aide
show_help() {
    echo -e "${YELLOW}Usage: ./manage.sh [command]${NC}"
    echo
    echo "Commands:"
    echo "  start       - Démarre l'application en mode production"
    echo "  stop        - Arrête l'application"
    echo "  dev         - Démarre l'application en mode développement"
    echo "  build       - Construit l'image Docker"
    echo "  restart     - Redémarre l'application"
    echo "  logs        - Affiche les logs de l'application"
    echo "  clean       - Nettoie les conteneurs et images non utilisés"
    echo "  status      - Affiche le statut de l'application"
    echo "  help        - Affiche ce message d'aide"
}

# Vérifier si Docker est installé
check_docker() {
    if ! command -v docker &> /dev/null; then
        echo -e "${RED}Docker n'est pas installé. Veuillez l'installer d'abord.${NC}"
        exit 1
    fi
}

# Vérifier si Docker Compose est installé
check_docker_compose() {
    if ! command -v docker-compose &> /dev/null; then
        echo -e "${RED}Docker Compose n'est pas installé. Veuillez l'installer d'abord.${NC}"
        exit 1
    fi
}

# Démarrer l'application
start() {
    echo -e "${GREEN}Démarrage de l'application...${NC}"
    docker-compose up -d
    echo -e "${GREEN}L'application est accessible sur http://localhost:3000${NC}"
}

# Arrêter l'application
stop() {
    echo -e "${YELLOW}Arrêt de l'application...${NC}"
    docker-compose down
}

# Mode développement
dev() {
    echo -e "${GREEN}Démarrage en mode développement...${NC}"
    npm install
    npm start
}

# Construire l'image
build() {
    echo -e "${GREEN}Construction de l'image Docker...${NC}"
    docker-compose build
}

# Redémarrer l'application
restart() {
    echo -e "${YELLOW}Redémarrage de l'application...${NC}"
    docker-compose restart
}

# Afficher les logs
logs() {
    docker-compose logs -f
}

# Nettoyer les ressources Docker
clean() {
    echo -e "${YELLOW}Nettoyage des ressources Docker...${NC}"
    docker-compose down
    docker system prune -f
    echo -e "${GREEN}Nettoyage terminé${NC}"
}

# Afficher le statut
status() {
    echo -e "${GREEN}Statut des conteneurs :${NC}"
    docker-compose ps
}

# Vérifications initiales
check_docker
check_docker_compose

# Gestion des commandes
case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    dev)
        dev
        ;;
    build)
        build
        ;;
    restart)
        restart
        ;;
    logs)
        logs
        ;;
    clean)
        clean
        ;;
    status)
        status
        ;;
    help|*)
        show_help
        ;;
esac 
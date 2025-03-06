@echo off
setlocal enabledelayedexpansion

:: Couleurs pour les messages
set "GREEN=[32m"
set "YELLOW=[33m"
set "RED=[31m"
set "NC=[0m"

:: Vérifier si un argument a été fourni
if "%1"=="" goto help

:: Vérifier si Docker est installé
where docker >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo %RED%Docker n'est pas installé. Veuillez l'installer d'abord.%NC%
    exit /b 1
)

:: Vérifier si Docker Compose est installé
where docker-compose >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo %RED%Docker Compose n'est pas installé. Veuillez l'installer d'abord.%NC%
    exit /b 1
)

:: Traitement des commandes
if "%1"=="start" goto start
if "%1"=="stop" goto stop
if "%1"=="dev" goto dev
if "%1"=="build" goto build
if "%1"=="restart" goto restart
if "%1"=="logs" goto logs
if "%1"=="clean" goto clean
if "%1"=="status" goto status
goto help

:start
echo %GREEN%Démarrage de l'application...%NC%
docker-compose up -d
echo %GREEN%L'application est accessible sur http://localhost:3000%NC%
goto :eof

:stop
echo %YELLOW%Arrêt de l'application...%NC%
docker-compose down
goto :eof

:dev
echo %GREEN%Démarrage en mode développement...%NC%
call npm install
call npm start
goto :eof

:build
echo %GREEN%Construction de l'image Docker...%NC%
docker-compose build
goto :eof

:restart
echo %YELLOW%Redémarrage de l'application...%NC%
docker-compose restart
goto :eof

:logs
docker-compose logs -f
goto :eof

:clean
echo %YELLOW%Nettoyage des ressources Docker...%NC%
docker-compose down
docker system prune -f
echo %GREEN%Nettoyage terminé%NC%
goto :eof

:status
echo %GREEN%Statut des conteneurs :%NC%
docker-compose ps
goto :eof

:help
echo %YELLOW%Usage: manage.bat [command]%NC%
echo.
echo Commands:
echo   start       - Démarre l'application en mode production
echo   stop        - Arrête l'application
echo   dev         - Démarre l'application en mode développement
echo   build       - Construit l'image Docker
echo   restart     - Redémarre l'application
echo   logs        - Affiche les logs de l'application
echo   clean       - Nettoie les conteneurs et images non utilisés
echo   status      - Affiche le statut de l'application
echo   help        - Affiche ce message d'aide
goto :eof 
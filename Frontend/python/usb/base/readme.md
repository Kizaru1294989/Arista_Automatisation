# Prérequis

Ce script en bash est un script qui a pour objectif de configurer un équipement vierge pour ensuite faire fonctionne le framework Python avec Ansible

### Implémentation

Comme le script a pour but de configurer un équipement vierge il faut lancer le script physiquement par le biais d'un périphérique usb .
Copier le script et le lancer dans la partie bash .

### Fonctionnalités

- zero touch cancel
- ip sur l'interface Management 1
- crée un utilisateur de privilege 15 et un mot de passe secret
- enable password
- active l'eapi sur l'équipement
- ajoute une route static pour que toutes les machines du réseau ait accès a l'eapi

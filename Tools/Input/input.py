import re
from Tools.Color import colors


welcome = f"""{colors.red}
  ___       _     _        
 / _ \     (_)   | |       
/ /_\ \_ __ _ ___| |_ __ _ 
|  _  | '__| / __| __/ _` |
| | | | |  | \__ \ || (_| |
\_| |_/_|  |_|___/\__\__,_|
"""

def network_choice():
    network_fabric = input(f"{colors.orange}Veuillez entrer le réseau de votre fabrique (exemple : 10.43.193.1)\nSi vous voulez utiliser le VLAN 193, entrez 'o', sinon entrez 'n': ")

    while network_fabric.strip() not in ["o", "n"]:
        if network_fabric.strip() == "":
            print("❌ L'entrée ne peut pas être vide.")
        else:
            print("❌ Veuillez entrer 'o' pour utiliser le VLAN 193 ou 'n' pour entrer un autre réseau.")
        network_fabric = input(f"{colors.orange}Veuillez entrer le réseau de votre fabrique (exemple : 10.43.193.1)\nSi vous voulez utiliser le VLAN 193, entrez 'o', sinon entrez 'n': ")

    if network_fabric == "o":
        return "10.43.193.1"
    else:
        return input("Veuillez entrer le réseau de votre fabrique au format (XX.XX.XX.XX) : ")


def last_octet(adresse_ip):
    octets = adresse_ip.split('.')  
    octets.pop()
    nouvelle_adresse_ip = '.'.join(octets)
    return nouvelle_adresse_ip
    
def fill_input_fabric(network,fabric):
    for i in range(8):
        while True:
            ip = input("Veuillez entrer le dernier octet de l'ip du leaf {}  : ".format(i+1))
            if ip.strip() == "":
                print("L'adresse IP ne peut pas être vide.")
            else:
                ip_address = (network + "." + ip)
                fabric['leafs']['leaf{}'.format(i+1)] = ip_address
                break

    for i in range(4):
        while True:
            ip = input("Veuillez entrer le dernier octet de l'ip du spine {}  : ".format(i+1))
            if ip.strip() == "":
                print("L'adresse IP ne peut pas être vide.")
            else:
                ip_address = (network + "." + ip)
                fabric['spines']['spine{}'.format(i+1)] = ip_address
                break

def input_fabric():
    network_fabric = network_choice()
    network = last_octet(network_fabric)
    admin_user = input(f"{colors.orange}Veuillez entrer le admin user : ")
    admin_password = input(f"{colors.orange}Veuillez entrer le mot de passe admin user : ")
    
    while admin_user.strip() == "" or admin_password.strip() == "":
        print("❌ L'entrée ne peut pas être vide.")
        input_fabric()
        
    fabric = {'admin_user': admin_user
              ,'password' : admin_password
              ,'leafs': {}
              , 'spines': {}
              }
    fill_input_fabric(network,fabric)



    return fabric
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


def validate_ip(ip):
    ip_pattern = re.compile("^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/([0-9]|[1-2][0-9]|3[0-2])$")
    return bool(ip_pattern.match(ip))

def input_fabric():
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

    for i in range(4):
        while True:
            ip = input("Veuillez entrer l'adresse IP du leaf {} (format IP/mask ex: 10.0.0.0/24) : ".format(i+1))
            if ip.strip() == "":
                print("L'adresse IP ne peut pas être vide.")
            elif not validate_ip(ip):
                print("L'adresse IP saisie n'est pas valide ou ne respecte pas le format.")
            else:
                fabric['leafs']['leaf{}'.format(i+1)] = ip
                break

    for i in range(2):
        while True:
            ip = input("Veuillez entrer l'adresse IP du spine {} (format IP/mask ex: 10.0.0.0/24) : ".format(i+1))
            if ip.strip() == "":
                print("L'adresse IP ne peut pas être vide.")
            elif not validate_ip(ip):
                print("L'adresse IP saisie n'est pas valide ou ne respecte pas le format.")
            else:
                fabric['spines']['spine{}'.format(i+1)] = ip
                break

    return fabric
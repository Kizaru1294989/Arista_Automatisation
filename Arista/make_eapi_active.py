import paramiko
import time

def connect_to_arista_switch(hostname, username, password):
    try:
        # Connexion SSH
        client = paramiko.SSHClient()
        client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        client.connect(hostname=hostname, username=username, password=password, timeout=10)

        # Création d'un canal interactif
        channel = client.invoke_shell()

        # Attente de l'invite de commande
        while not channel.recv_ready():
            time.sleep(1)

        # Envoyer la commande "zerotouch provisioning"
        channel.send("zerotouch cancel\n")

        # Attendre que la sortie soit prête
        while not channel.recv_ready():
            time.sleep(1)

        # Lire et afficher la sortie
        output = channel.recv(65535).decode("utf-8")
        print(output)

        # Fermer la connexion
        channel.close()
        client.close()

    except paramiko.AuthenticationException:
        print("Échec de l'authentification. Vérifiez vos informations de connexion.")
    except paramiko.SSHException as ssh_exception:
        print(f"Erreur SSH: {ssh_exception}")
    except Exception as e:
        print(f"Erreur: {e}")

# Exemple d'utilisation
if __name__ == "__main__":
    hostname = "adresse_ip_du_switch"
    username = "admin"
    password = "votre_mot_de_passe"
    connect_to_arista_switch(hostname, username, password)

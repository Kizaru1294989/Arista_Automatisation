echo -n $'\033[1;32m' && echo -n $'                     .,,uod8B8bou,,.\n'
echo -n $'\033[1;32m' && echo -n $'              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.\n'
echo -n $'\033[1;32m' && echo -n $'         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||\n'
echo -n $'\033[1;32m' && echo -n $'         !...:!TVBBBRPFT||||||||||!!^^""\'   ||||\n'
echo -n $'\033[1;32m' && echo -n $'         !.......:!?|||||!!^^""\'            ||||\n'
echo -n $'\033[1;32m' && echo -n $'         !.........||||                     ||||\n'
echo -n $'\033[1;32m' && echo -n $'         !.........||||  Arista             ||||\n'
echo -n $'\033[1;32m' && echo -n $'         !.........||||                     ||||\n'
echo -n $'\033[1;32m' && echo -n $'         !.........||||                     ||||\n'
echo -n $'\033[1;32m' && echo -n $'         !.........||||                     ||||\n'
echo -n $'\033[1;32m' && echo -n $'         !.........||||                     ||||\n'
echo -n $'\033[1;32m' && echo -n $'         `.........||||                    ,||||\n'
echo -n $'\033[1;32m' && echo -n $'          .;.......||||               _.-!!|||||\n'
echo -n $'\033[1;32m' && echo -n $'   .,uodWBBBBb.....||||       _.-!!|||||||||!:\'\n'
echo -n $'\033[1;32m' && echo -n $' !YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb.... \n'
echo -n $'\033[1;32m' && echo -n $' !..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   `.\n'
echo -n $'\033[1;32m' && echo -n $' !....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     `.\n'
echo -n $'\033[1;32m' && echo -n $' !......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"`;:::       `.\n'
echo -n $'\033[1;32m' && echo -n $' !........YBBBBBBBBBBRPFT?!::::::::::^\'\'...::::::;         iBBbo.\n'
echo -n $'\033[1;32m' && echo -n $' `..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.\n'
echo -n $'\033[1;32m' && echo -n $'   `..........:::::::::::::::::::::::;iof688888888888b.     `YBBBP^\'\n'
echo -n $'\033[1;32m' && echo -n $'     `........::::::::::::::::;iof688888888888888888888b.     `\n'
echo -n $'\033[1;32m' && echo -n $'       `......:::::::::;iof688888888888888888888888888888b.\n'
echo -n $'\033[1;32m' && echo -n $'         `....:::;iof688888888888888888888888888888888899fT!  \n'
echo -n $'\033[1;32m' && echo -n $'           `..::!8888888888888888888888888888888899fT|!^"\'   \n'
echo -n $'\033[1;32m' && echo -n $'             `\' !!988888888888888888888888899fT|!^"\' \n'
echo -n $'\033[1;32m' && echo -n $'                 `!!8888888888888888899fT|!^"\'\n'
echo -n $'\033[1;32m' && echo -n $'                   `!988888888899fT|!^"\'\n'
echo -n $'\033[1;32m' && echo -n $'                     `!9899fT|!^"\'\n'
echo -n $'\033[1;32m' && echo -n $""
echo -n $'\033[1;32m' && echo -n $""
echo -n $'\033[1;32m' && echo -n $""
echo -n $'\033[1;32m' && echo -n $""
echo -n $'\033[1;32m' && echo -n $""
echo -n $'\033[1;32m' && echo -n $""


FastCli -c "zerotouch cancel" -p 15

echo -n $'\033[1;37m' && echo -n $'zerotouch cancel \n'
echo "Veuillez entrer une adresse IP pour l'interface management1 (format : 1.1.1.1/24) :"
read ip_address
if [[ ! $ip_address =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/[0-9]+$ ]]; then
    echo "Format d'adresse IP incorrect. Veuillez saisir une adresse au format valide (par exemple, 1.1.1.1/24)."
    exit 1
fi
echo "Veuillez entrer la gateway de votre adresse IP (format : 1.1.1.1) :"
read gateway_ip
FastCli -p 15 -c $'enable \n conf \n int Ma1 \n ip address '"$ip_address" -p 15
FastCli -c "sh run int Ma1" -p 15
echo "✅ IP ajoutée"

echo "Veuillez entrer le nom de l'utilisateur :"
read username

echo "Veuillez entrer le mot de passe :"
read password

if [ -z "$username" ] || [ -z "$password" ]; then
    echo "Le nom d'utilisateur et le mot de passe doivent être spécifiés."
    exit 1
fi

FastCli -p 15 -c $'enable \n conf \n enable password '"$password" -p 15
FastCli -p 15 -c $'enable \n conf \n username '"$username"' privilege 15 secret '"$password" -p 15

echo "✅ Utilisateur ajouté"

FastCli -p 15 -c $'enable \n conf \n management api http-commands \n no sh ' -p 15
echo "Api activé"
FastCli -p 15 -c $'enable \n conf \n ip route 0.0.0.0/0 '"$gateway_ip" -p 15
echo "route par défault active"


echo "Veuillez entrer le Hostname souhaité (ex : Leaf1) :"
read hostname
FastCli -p 15 -c $'enable \n conf \n hostname '"$hostname" -p 15

#echo "Radius ? O/N "
#read radius_choice



FastCli -c "wr mem" -p 15
FastCli -c "sh run" -p 15

echo "✅ Done"

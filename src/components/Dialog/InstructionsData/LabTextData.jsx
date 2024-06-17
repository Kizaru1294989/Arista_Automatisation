export const stepsMlag = [
  {
    label: "Peer-Link",
    description: `Le Peer-Link est une connexion cruciale dans une configuration MLAG.
     Il permet aux deux dispositifs "leaf" de communiquer, 
     synchroniser leurs états et partager leurs addresses MAC. 
     Nous configurons le Port-Channel 10 comme canal d'agrégation pour ce lien entre les deux appareils.`,
    commandes: [
      ["vlan 4094", " trunk group MLAGPEER"],

      [
        "interface Ethernet1-2",
        " description MLAG - PEER LINK - LEAF-5",
        " channel-group 10 mode active",
      ],

      [
        "interface Port-Channel10",
        " description MLAG - PEER LINK - LEAF-5",
        " switchport mode trunk",
        " switchport trunk group MLAGPEER",
      ],

      [
        "interface vlan4094",
        " description MLAG PEER LINK - LEAF-5",
        " ip address 172.16.56.1/24",
      ],
    ],
  },
  {
    label: "Vlan HOST",
    description: `Cette étape implique la création de VLANs pour la gestion du trafic vers les hôtes. 
    Le VLAN 3 est configuré en mode access pour diriger le trafic directement vers les hôtes
     offrant une segmentation et une gestion de trafic efficaces.`,

    commandes: [
      ["vlan 3"],

      [
        "interface Ethernet3",
        "description HOST3",
        "channel-group 3 mode active",
      ],
    ],
  },
  {
    label: "Interfaces Spine 3 et 4",
    description: `Les connexions aux spines 3 et 4 sont configurées pour supporter
     le trafic entre les leafs et le reste du réseau. La création du Port-Channel 56
      en mode trunk permet une répartition de charge efficace et une haute disponibilité entre les dispositifs spine.`,

    commandes: [
      [
        "interface Ethernet5",
        " description SPINE 4",
        " channel-group 56 mode active",
      ],

      [
        "interface Ethernet8",
        " description SPINE 3",
        " channel-group 56 mode active",
      ],

      [
        "interface Port-Channel56",
        " description MLAG - SPINE3 & 4",
        " switchport mode trunk",
        " mlag 56",
      ],
    ],
  },

  {
    label: "DCI inter-site",
    description: `Le DCI (Data Center Interconnect) inter-site permet une connectivité étendue entre sites distants, 
    vital pour la redondance et la continuité d'entreprise.
     La configuration du Port-Channel 80 en mode trunk avec MLAG permet de maintenir
      une cohérence de la couche 2 à travers les sites.`,

    commandes: [
      [
        "interface Ethernet7",
        " description LEAF 4",
        " channel-group 80 mode active",
      ],

      [
        "interface Port-Channel80",
        " description MLAG - LEAF4 & 5",
        " switchport mode trunk",
        " mlag 80",
      ],
    ],
  },

  {
    label: "MLAG DOMAIN",
    description: `Dans cette étape, le domaine MLAG est configuré pour permettre une coopération et une coordination efficaces entre les dispositifs participants au MLAG. Le domaine-id spécifie l'identité du domaine MLAG, et les paramètres de connexion locale et de peer sont définis pour assurer la communication et la synchronisation entre les pairs MLAG. `,

    commandes: [
      [
        "mlag configuration",
        " domain-id MLAG56",
        " local-interface Vlan4094",
        " peer-address 172.16.56.2",
        " peer-link Port-Channel10",
      ],
    ],
  },

  {
    label: "TEST",
    description: `Le test final consiste à vérifier la connectivité entre les hôtes à travers le réseau configuré. Les commandes de ping sont utilisées pour s'assurer que le trafic peut traverser efficacement le réseau configuré avec MLAG, confirmant ainsi que la configuration répond aux exigences opérationnelles.

Ces explications ajoutent un contexte et une justification à chaque étape de la configuration, permettant une meilleure compréhension et facilitant le dépannage et la maintenance futurs. `,

    commandes: [
      [
        "Host1#ping 172.16.112.203",
      ],
    ],
  },
];

export const stepsBgp = [
  {
    label: "Interfaces Ethernet",
    description: `Configuration des interfaces Ethernet pour établir des liens directs sans passer par des switchs virtuels (no switchport). 
                  Les adresses IP sont attribuées pour permettre la communication directe entre les appareils SPINE et LEAF. 
                  Le Port-Channel 10 sert de liaison principale pour le Peer-Link dans la configuration MLAG.`,
    commandes: [
      [
        "interface Ethernet5",
        " description SPINE 4",
        " no switchport",
        " ip address 172.16.200.50/30",
      ],
      [
        "interface Ethernet7",
        " description LEAF4",
        " no switchport",
        " ip address 172.16.200.66/30",
      ],
      [
        "interface Ethernet8",
        " description SPINE 3",
        " no switchport",
        " ip address 172.16.200.34/30",
      ],
    ],
  },
  {
    label: "Interface Loopback0",
    description: `Création d'une interface Loopback pour fournir une adresse IP stable utilisée comme identifiant de routeur dans les configurations BGP. 
                  Les adresses Loopback sont préférées pour le BGP car elles ne dépendent pas de l'état physique des liens.`,
    commandes: [
      [
        "interface Loopback0",
        " ip address 172.16.0.15/32",
      ],
    ],
  },
  {
    label: "Vlan 3",
    description: `Configuration du VLAN 3 pour le trafic d'hôte, avec une adresse virtuelle et une adresse MAC virtuelle pour permettre l'utilisation de VRRP 
                  (Virtual Router Redundancy Protocol), assurant ainsi une haute disponibilité et une redondance pour les hôtes connectés.`,
    commandes: [
      [
        "interface Vlan3",
        " ip address 172.16.117.2/24",
        " ip virtual-router address 172.16.117.1",
      ],
      [
        "ip virtual-router mac-address 00:1c:73:00:00:56",
      ],
    ],
  },
  {
    label: "Routeur bgp",
    description: `Configuration du routeur BGP avec l'ID du routeur et les politiques de routage pour maximiser les chemins via ECMP (Equal-Cost Multi-Path). 
                  Des voisins BGP sont configurés pour échanger des routes avec des systèmes autonomes spécifiques, 
                  améliorant la distribution du trafic et la redondance du réseau.`,
    commandes: [
      [
        "router bgp 65004",
        " router-id 172.16.0.15",
        " maximum-paths 4 ecmp 4",
        " neighbor 172.16.56.2 remote-as 65004",
        " neighbor 172.16.56.2 next-hop-self",
        " neighbor 172.16.200.33 remote-as 65003",
        " neighbor 172.16.200.33 maximum-routes 12000",
        " neighbor 172.16.200.49 remote-as 65003",
        " neighbor 172.16.200.49 maximum-routes 12000",
        " neighbor 172.16.200.65 remote-as 65002",
        " neighbor 172.16.200.65 maximum-routes 12000",
        " network 172.16.0.15/32",
        " network 172.16.1.56/32",
        " network 172.16.117.0/24",
      ],
      [
        "interface Port-Channel80",
        " description MLAG - LEAF4 & 5",
        " switchport mode trunk",
        " mlag 80",
      ],
    ],
  },
  {
    label: "TEST",
    description: `Test de la connectivité pour valider la configuration réseau. Utilisation de commandes ping pour vérifier la disponibilité des hôtes à travers le réseau BGP configuré, 
                  assurant que les modifications répondent aux exigences opérationnelles et à la configuration prévue.`,
    commandes: [
      [
        "Host1#ping 172.16.117.100",
      ],
    ],
  },
];


export const stepsVxlan = [
  {
    label: "Interfaces Loopback1",
    description: `Configuration des interfaces Loopback pour stabiliser l'identité du routeur dans le réseau BGP. 
                  Les adresses Loopback permettent une communication cohérente et fiable entre les nœuds, 
                  et sont utilisées pour la source des connexions BGP dans un environnement VXLAN.`,
    commandes: [
      [
        "interface Loopback1",
        " ip address 5.5.5.5/32",
        " ip address 99.99.99.99/32 secondary",
      ],
    ],
  },
  {
    label: "Interfaces Vlan3",
    description: `Configuration d'une interface VLAN pour la segmentation du trafic à l'intérieur du réseau. 
                  L'adresse IP virtuelle sert à faciliter la gestion du trafic et à offrir de la redondance pour les services critiques.`,
    commandes: [
      [
        "interface vlan3",
        " ip address virtual 172.16.112.1/24",
      ],
    ],
  },
  {
    label: "Routeur bgp",
    description: `Mise en place d'une configuration BGP complexe pour supporter l'échange de routes entre différents systèmes autonomes (AS) et pour l'intégration de VXLAN. 
                  Cette configuration inclut l'utilisation de groupes de pairs pour une gestion simplifiée des multiples connexions BGP, 
                  la configuration du ECMP pour améliorer l'équilibrage de charge et la robustesse du réseau, 
                  et l'activation des fonctionnalités avancées comme EVPN pour une meilleure intégration des services.`,
    commandes: [
      [
        "router bgp 65004",
        " router-id 172.16.0.15",
        " maximum-paths 2 ecmp 2",
        " neighbor PEER-LEAF peer group",
        " neighbor PEER-LEAF bfd",
        " neighbor PEER-LEAF maximum-routes 12000",
        " neighbor PEER-LEAF-EVPN-TRANSIT peer group",
        " neighbor PEER-LEAF-EVPN-TRANSIT remote-as 65004",
        " neighbor PEER-LEAF-EVPN-TRANSIT update-source Loopback0",
        " neighbor PEER-LEAF-EVPN-TRANSIT next-hop-self",
        " neighbor PEER-LEAF-EVPN-TRANSIT send-community",
        " neighbor PEER-LEAF-EVPN-TRANSIT maximum-routes 0",
        " neighbor DCI-SPINE peer group",
        " neighbor DCI-SPINE remote-as 65002",
        " neighbor DCI-SPINE bfd",
        " neighbor DCI-SPINE maximum-routes 12000",
        " neighbor DCI-SPINE-EVPN-TRANSIT peer group",
        " neighbor DCI-SPINE-EVPN-TRANSIT remote-as 65002",
        " neighbor DCI-SPINE-EVPN-TRANSIT update-source Loopback0",
        " neighbor DCI-SPINE-EVPN-TRANSIT ebgp-multihop",
        " neighbor DCI-SPINE-EVPN-TRANSIT send-community",
        " neighbor DCI-SPINE-EVPN-TRANSIT maximum-routes 0",
        " neighbor SPINE peer group",
        " neighbor SPINE remote-as 65003",
        " neighbor SPINE bfd",
        " neighbor SPINE maximum-routes 12000",
        " neighbor SPINE-EVPN-TRANSIT peer group",
        " neighbor SPINE-EVPN-TRANSIT remote-as 65003",
        " neighbor SPINE-EVPN-TRANSIT update-source Loopback0",
        " neighbor SPINE-EVPN-TRANSIT ebgp-multihop",
        " neighbor SPINE-EVPN-TRANSIT send-community",
        " neighbor SPINE-EVPN-TRANSIT maximum-routes 0",
        " neighbor 172.16.0.3 peer group SPINE-EVPN-TRANSIT",
        " neighbor 172.16.0.4 peer group SPINE-EVPN-TRANSIT",
        " neighbor 172.16.0.14 peer group DCI-SPINE-EVPN-TRANSIT",
        " neighbor 172.16.200.33 peer group SPINE",
        " neighbor 172.16.200.49 peer group SPINE",
        " neighbor 172.16.200.65 peer group DCI-SPINE",
        " neighbor 172.16.0.16 peer group PEER-LEAF-EVPN-TRANSIT",
        " neighbor 172.16.56.2 peer group PEER-LEAF",
        " redistribute connected",
        " vlan 3",
        " rd 5.5.5.5:3",
        " route-target both 1:3",
        " redistribute learned",
        " address-family evpn",
        " neighbor DCI-SPINE-EVPN-TRANSIT activate",
        " neighbor SPINE-EVPN-TRANSIT activate",
        " address-family ipv4",
        " no neighbor DCI-SPINE-EVPN-TRANSIT activate",
        " no neighbor SPINE-EVPN-TRANSIT activate",
      ],
    ],
  },
];


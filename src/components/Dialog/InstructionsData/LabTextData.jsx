export const stepsMlag = [
  {
    label: "Peer-Link",
    description: `Nous allons créer le port channel 10 pour que les deux leaf puissent communiquer via le peer-link `,
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
    description: `Nous devons créer 2 vlans : le VLAN 3 en mode access pour rediriger le trafic vers les 
      hotes et le VLAN 4049 pour monter notre peer-link Mlag`,

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
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,

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
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,

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
    description: `Try `,

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
    description: `Testez un ping des host 1 & 2 vers les hotes 3 & 4 `,

    commandes: [
      [
        "Host1#ping 172.16.112.203",
      ],
    ],
  },
];

export const stepsBgp = [
  {
    label: "stepsBgp",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Mlag Domain",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];

export const stepsVxlan = [
  {
    label: "stepsVxlan",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Mlag Domain",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];

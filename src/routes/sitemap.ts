import paths from 'routes/paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: '/',
    icon: 'ri:dashboard-fill',
    active: true,
  },
  {
    id: 'ville_casino',
    subheader: 'Villes Casinos',
    icon: 'mdi:town-hall',
    active: false,

     items: [
      {
        name: 'Yaoundé',
        pathName: 'yaounde',
        path: paths.ville_casino,
        
      },
      
    ],
  },

  {
    id: 'casino',
    subheader: 'Casino',
    icon: 'map:casino',
    active:false,
    items:[
      {
        name:'casino nkomo',
        pathName:'casino',
        path: paths.casino
      }
       
    ]
  },
  {
    id: 'library',
    subheader: 'Archives',
    path: paths.archives,
    icon: 'material-symbols:archive-outline',
  },
  {
    id: 'authentication',
    subheader: 'Parametres securités',
    icon: 'ic:round-security',
    active: true,
    items: [
      {
        name: 'Mise a jour',
        pathName: 'signin',
        path: paths.signin,
        active: false
        
      },
      {
        name: 'Notification',
        pathName: 'signup',
        path: paths.signup,
        active: false

      },
    ],
  },
  {
    id: 'schedules',
    subheader: 'Planning Journalier',
    path: '#!',
    icon: 'grommet-icons:schedules',
    active: false

  },
  {
    id: 'payouts',
    subheader: ' Boite de Reception ',
    path: '/payouts',
    icon: 'material-symbols:account-balance-wallet-outline',
  },

   {
    id: 'creation',
    subheader: 'creer un kachika',
    path: paths.create_kachika,
    icon: 'material-symbols:supervised-user-circle',
  },
  {
    id:'casinos',
    subheader:'creer un casino',
    path: paths.create_casino,
    icon: 'streamline-ultimate:casino-lucky-7',  
  },

     {
    id: 'profile',
    subheader: 'profil admin',
    path: '/profile',
    icon: 'subway:admin',
  },
  {
    id: 'settings',
    subheader: 'Parametres',
    path: paths.settings,
    icon: 'ic:outline-settings',
  },
];

export default sitemap;

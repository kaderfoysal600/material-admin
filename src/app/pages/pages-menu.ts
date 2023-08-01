export const MENU_ITEMS: any[] = [
  {
    title: 'E-commerce',
    icon: 'shopping_cart',
    link: '/a',
    home: true,
    
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Layout',
    icon: 'dashboard',
    expanded:false,
    children: [
      {
        title: 'Stepper',
        link: '/c',
      },
      {
        title: 'List',
        link: '/d',
      },
      {
        title: 'Infinite List',
        link: '/e',
      },
      {
        title: 'Accordion',
        link: '/f',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/e',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'text_format',
    expanded:false,
    children: [
      {
        title: 'Form Inputs',
        link: '/g',
      },
      {
        title: 'Form Layouts',
        link: '/h',
      },
      {
        title: 'Buttons',
        link: '/i',
      },
      {
        title: 'Datepicker',
        link: '/j',
      },
    ],
  },

  {
    title: 'Extra Components',
    icon: 'settings_input_component',
    expanded:false,
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map',
    expanded:false,
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'bar_chart',
    expanded:false,
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'edit',
    expanded:false,
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'table_chart',
    expanded:false,
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'error_outline',
    expanded:false,
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock_open',
    expanded:false,
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];

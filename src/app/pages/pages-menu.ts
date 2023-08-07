export const MENU_ITEMS: any[] = [
  {
    title: 'E-commerce',
    icon: 'shopping_cart',
    path: '/',
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
        path: 'c',
      },
      {
        title: 'List',
        path: 'd',
      },
      {
        title: 'Infinite List',
        path: 'e',
      },
      {
        title: 'Accordion',
        path: 'f',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        path: 'e',
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
        path: 'form-input',
      },
      {
        title: 'Form Layouts',
        path: 'h',
      },
      {
        title: 'Buttons',
        path: 'i',
      },
      {
        title: 'Datepicker',
        path: 'j',
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
        path: 'pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        path: 'pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        path: 'pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        path: 'pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        path: 'pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        path: 'pages/extra-components/chat',
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
        path: 'pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        path: 'pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        path: 'pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        path: 'pages/maps/searchmap',
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
        path: 'pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        path: 'pages/charts/chartjs',
      },
      {
        title: 'D3',
        path: 'pages/charts/d3',
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
        path: 'pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        path: 'pages/editors/ckeditor',
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
        path: 'pages/tables/',
      },
      {
        title: 'Tree Grid',
        path: 'pages/tables/tree-grid',
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
        path: 'pages/miscellaneous/404',
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
        path: 'auth/login',
      },
      {
        title: 'Register',
        path: 'auth/register',
      },
      {
        title: 'Request Password',
        path: 'auth/request-password',
      },
      {
        title: 'Reset Password',
        path: 'auth/reset-password',
      },
    ],
  },
];

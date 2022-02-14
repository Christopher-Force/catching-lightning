module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#eeff00',
          'primary-focus': '#4506cb',
          'primary-content': '#000000',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#000000',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#000000',
          'neutral': '#eeff00',
          'neutral-focus': '#fff700',
          'neutral-content': '#000000',
          'base-100': '#000000',
          'base-200': '#424242',
          'base-300': '#0033ff',
          'base-content': '#f6ff00',
          'info': '#b5d7f2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
}

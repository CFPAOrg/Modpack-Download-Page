module.exports = {
  purge: ['./src/**/*.css', './src/**/*.vue'],
  theme: {
    extend: {
      maxHeight: {
        '0': '0'
      },
      translate: {
        menu: '10px',
        '-menu': '-10px'
      },
      rotate: {
        '30': '30deg',
        '-30': '-30deg'
      },
      colors: {
        theme: {
          light: '#1fd2b4',
          dark: '#19a890'
        }
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
        margin: 'margin'
      },
      zIndex: {
        '-1': '-1'
      }
    }
  }
};

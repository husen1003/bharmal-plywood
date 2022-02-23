module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#C0A080',
                dark: '#7882A4',
                light: '#EFEFEF',
                grey: {
                    lightest: '#CFCFCF',
                    extra_light: '#999999',
                    light: '#444F60',
                    extra_dark: '#7E8085',
                    dark: '#445060',
                    extra_dark_footer: '#39424E',
                },
                white: {
                    DEFAULT: '#FFFFFF',
                    after: '#FCFCFC',
                    grey: '#E0E2E6',
                    sky: '#EFF4F7',
                },
                black: {
                    DEFAULT: '#000000',
                    low: '#363636',
                    more_low: '#4A4A4A',
                },
                blue: {
                    light: '#8E9BAF',
                    main: '#009DDF',
                },
                pink: {
                    DEFAULT: '#EC008C',
                },
                darkbrown: '#1C0A00',
                mddarkbrown: '#361500',
                mdlightbrown: '#603601',
                lightbrown: '#CC9544'
            },
            fontFamily: {
                'playfair': 'Playfair Display',
            },
            screens: {
                'sm': {'min': '0px', 'max': '768px'},
                // => @media (min-width: 640px and max-width: 767px) { ... }
          
                // 'md': {'min': '768px', 'max': '1023px'},
                // // => @media (min-width: 768px and max-width: 1023px) { ... }
          
                // 'lg': {'min': '768px', 'max': '1279px'},
                // // => @media (min-width: 1024px and max-width: 1279px) { ... }
          
                // 'xl': {'min': '1280px', 'max': '1535px'},
                // // => @media (min-width: 1280px and max-width: 1535px) { ... }
          
                // '2xl': {'min': '1536px'},
                // // => @media (min-width: 1536px) { ... }
              },
          
        },

    },
    plugins: [],
};

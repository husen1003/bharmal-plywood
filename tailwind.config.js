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
            },
            fontFamily: {
                'playfair': 'Playfair Display',
            },
        },
    },
    plugins: [],
};

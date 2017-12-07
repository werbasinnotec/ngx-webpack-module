module.exports = {
  link: [
    /**
     * <link> tags for 'apple-touch-icon' (AKA Web Clips).
     */
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/icon/apple-touch-icon.png' },

    /**
     * <link> tags for android web app icons
     */
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/assets/icon/android-icon-192x192.png' },

    { rel: 'stylesheet', href: '/assets/authfonts/style.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,300,700' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    { rel: 'stylesheet', href: '/assets/workshopfonts/style.css' },

    /**
     * <link> tags for favicons
     */
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icon/favicon-16x16.png' },

    { rel: 'mask-icon', href: '/assets/icon/safari-pinned-tab.svg', color: '#5bbad5' },

    /**
     * <link> tags for a Web App Manifest
     */
    { rel: 'manifest', href: '/assets/manifest.json' }
  ],
  meta: [
    { name: 'HandheldFriendly', content: 'true' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'blue' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-touch-fullscreen', content: 'yes' },
    { name: 'msapplication-TileColor', content: '#00bcd4' },
    { name: 'msapplication-TileImage', content: '/assets/icon/ms-icon-144x144.png', '=content': true },
    { name: 'theme-color', content: '#00bcd4' }
  ]
};

import { defineConfig } from 'vitepress'
import flagShortcode from './plugins/flag-shortcode'

export default defineConfig({
    title: 'Galaxia',
    description: 'Colección de enlaces valiosos de Internet con sugerencias de uso práctico',
    lang: 'es-ES',
    base: '/urls/',
    lastUpdated: true,
    cleanUrls: true,
    ignoreDeadLinks: true,

    markdown: {
        headers: { level: [2, 3] },
        config: (md) => {
            md.use(flagShortcode)
        }
    },

    locales: {
        es: {
            label: 'Español',
            lang: 'es-ES',
            themeConfig: {
                nav: [{ text: 'Inicio', link: '/' }]
            }
        }
    },

    themeConfig: {
        logo: { src: '/favicon.png', alt: 'Galaxia' },
        siteTitle: 'Galaxia',

        sidebar: {
            '/': [
                {
                    text: 'Inicio',
                    items: [{ text: 'Galaxia', link: '/' }]
                },
                {
                    text: 'Categorías',
                    items: [
                        { text: 'Base de datos', link: '/basededatos' },
                        { text: 'Biblioteca', link: '/biblioteca' },
                        { text: 'Búsqueda', link: '/busqueda' },
                        { text: 'Canales', link: '/canales' },
                        { text: 'Discoteca', link: '/discoteca' },
                        { text: 'Diseño', link: '/diseno' },
                        { text: 'Herramientas', link: '/herramienta' },
                        { text: 'Mediateca', link: '/mediateca' },
                        { text: 'Pasatiempo', link: '/pasatiempo' },
                        { text: 'Piratería', link: '/pirateria' },
                        { text: 'Software', link: '/software' },
                        { text: 'Utilidades', link: '/utilidades' }
                    ]
                }
            ]
        },

        outline: { level: [2, 3], label: 'En esta página' },

        socialLinks: [
            { icon: 'github', link: 'https://www.github.com/totallynotdavid' },
            { icon: 'twitter', link: 'https://twitter.com/totallynotdavid' }
        ],

        search: {
            provider: 'local',
            options: {
                detailedView: true
            }
        },

        sidebarMenuLabel: 'Menú',
        returnToTopLabel: 'Volver arriba',
        skipToContentLabel: 'Saltar al contenido',
        darkModeSwitchLabel: 'Apariencia',
        lightModeSwitchTitle: 'Cambiar a tema claro',
        darkModeSwitchTitle: 'Cambiar a tema oscuro',
        langMenuLabel: 'Cambiar idioma',

        docFooter: {
            prev: 'Anterior',
            next: 'Siguiente'
        },

        lastUpdated: {
            text: 'Última actualización',
            formatOptions: { dateStyle: 'long', timeStyle: 'short' }
        },

        footer: {
            message: 'Dumb Ways to Write',
            copyright: '© David Duran'
        },

        editLink: {
            pattern: 'https://github.com/totallynotdavid/urls/edit/master/docs/:path',
            text: 'Editar en GitHub'
        }
    }
})

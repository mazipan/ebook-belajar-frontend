module.exports = {
  title: 'Ebook Belajar Frontend',
  tagline: 'Buku panduan untuk menyelami dunia pengembangan antarmuka website',
  url: 'https://mazipan.github.io/',
  baseUrl: '/ebook-belajar-frontend/',
  favicon: 'favicon/favicon.ico',
  organizationName: 'mazipan',
  projectName: 'ebook-belajar-frontend',
  themeConfig: {
		image: 'img/logo-512x512.png',

    navbar: {
      title: 'Ebook Belajar Frontend',
      logo: {
        alt: 'Ebook Belajar Frontend',
        src: 'img/logo-64x64.png',
			},

      links: [
        {to: '/docs/01-11-pengantar', label: 'Baca Buku', position: 'left'},
        {
          href: 'https://github.com/mazipan/ebook-belajar-frontend',
          label: 'Kode Sumber',
          position: 'right',
        },
      ],
		},

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tingkatan Belajar',
          items: [
            {
              label: 'Tingkat Dasar',
              to: 'docs/02-10-tingkat-dasar',
            },
            {
              label: 'Tingkat Menengah',
              to: 'docs/03-10-tingkat-menengah',
            },
            {
              label: 'Tingkat Mahir',
              to: 'docs/04-10-tingkat-mahir',
            },
          ],
        },
        {
          title: 'Media Sosial',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mazipan',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Maz_Ipan',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/mazipanneh',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Ebook Belajar Frontend. Built with Docusaurus.`,
		},

		prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mazipan/ebook-belajar-frontend/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
	],
};

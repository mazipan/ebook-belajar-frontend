module.exports = {
  title: 'Ebook Belajar Frontend',
  tagline: 'Buku yang membahas berbagai hal dasar pada pengembangan antarmuka website',
  url: 'https://ebook-belajar-frontend.netlify.com/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mazipan',
  projectName: 'ebook-belajar-frontend',
  themeConfig: {

    navbar: {
      title: 'Ebook Belajar Frontend',
      logo: {
        alt: 'Ebook Belajar Frontend',
        src: 'img/logo.svg',
			},

      links: [
        {to: 'docs/01-pendahuluan', label: 'Ebooks', position: 'left'},
        {
          href: 'https://github.com/mazipan/ebook-belajar-frontend',
          label: 'GitHub',
          position: 'right',
        },
      ],
		},

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sections',
          items: [
            {
              label: 'Belajar HTML',
              to: 'docs/03-belajar-html',
            },
            {
              label: 'Belajar CSS',
              to: 'docs/04-belajar-css',
            },
            {
              label: 'Belajar JavaScript',
              to: 'docs/05-belajar-javascript',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

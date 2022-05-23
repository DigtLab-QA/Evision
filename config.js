const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://evision.tech/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/DigtLab-QA/Evision/master/src/images/eV_Tech_black.png',
    logoLink: 'https://evision.tech/',
    title: '',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'Evision',
      algoliaAppId: "YSUPZ6O4QF",
      algoliaSearchKey: "a9c5865fedb6fa111eba7be1fffb6ac8",
      algoliaAdminKey: "856f676628f9f739513bb0757591b2cc",
    },
  },
  sidebar: {
    forcedNavOrder: ['01-v3.4.0','02-v3.6.0','03-v3.7.0','04-v3.8.0','50-cloud_v1.6.2','51-cloud_v1.7.0','52-cloud_v1.8.0'],
    collapsedNav: [],
    links: [{ text: 'Evision.Tech', link: 'https://evision.tech/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://evision.tech/'>Evision.Tech </a>",
  },
  siteMetadata: {
    title: 'GitDocs Trusted.Plus',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: '',
    favicon: 'https://raw.githubusercontent.com/DigtLab-QA/Evision/master/src/images/favicon.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'GitDocs Trusted.Plus',
      short_name: 'GitDocs Trusted.Plus',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;

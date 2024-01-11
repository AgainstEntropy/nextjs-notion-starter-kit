import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '22eceafcdee74f489b55daff89f72063',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Against Entropy's Homepage",
  domain: 'against-entropy.vercel.app',
  author: 'Ethan Wang',

  // open graph metadata (optional)
  description: "Against Entropy's Homepage",

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'AgainstEntropy',
  linkedin: 'wangyihao',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,
  isSearchEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/about': '706ad43f5d93415ba3cdf7cbb4b635f3',
    '/blogs': '2e1daef7a5f74283b248d6f5175fd27c',
    '/tutorials': '8c9417360fca4030bc2af96537f319de',
    '/pub': '8bef4e89b5f14615b9085924be7338de',
    '/contact': '5d7f646d339446c088d715a34d3c24ab',

  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '706ad43f5d93415ba3cdf7cbb4b635f3'
    },
    {
      title: 'Blogs',
      pageId: '2e1daef7a5f74283b248d6f5175fd27c'
    },
    {
      title: 'Tutorials',
      pageId: '8c9417360fca4030bc2af96537f319de'
    },
    {
      title: 'Publication',
      pageId: '8bef4e89b5f14615b9085924be7338de'
    },
    {
      title: 'Contact',
      pageId: '5d7f646d339446c088d715a34d3c24ab'
    },
  ]
})

export const siteConfig = {
  title: 'Ryan Clark | Full Stack Developer',
  description: 'Ryan Clark is a Full Stack Developer specializing in modern web applications with focus on performance, accessibility and exceptional user experience.',
  url: 'https://ryan-clark-fullstack.dev',
  author: 'Ryan Clark',
  ogImage: 'https://ryan-clark-fullstack.dev/og-image.jpg',
  twitterImage: 'https://ryan-clark-fullstack.dev/twitter-image.jpg',
  twitterHandle: '@yourhandle', // Replace with your Twitter handle if available
  keywords: 'full stack developer, web development, frontend, backend, javascript, typescript, svelte, portfolio'
};

export const generatePersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ryan Clark',
    url: siteConfig.url,
    jobTitle: 'Full Stack Developer',
    sameAs: [
      // Add your social profiles here
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourprofile'
      // Add more social profiles if available
    ]
  };
};

export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author
    }
  };
};

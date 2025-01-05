export default function manifest() {
    return {
      title: "Terese Bodérus",
      description: "Portfolio for Terese Bodérus, aspiring developer and licensed Medical Laboratory Technologist.",
      short_name: 'Portfolio TB',
      start_url: '/',
      display: 'standalone',
      background_color: '#050514',
      theme_color: '#ff7700',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }
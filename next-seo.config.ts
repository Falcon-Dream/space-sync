import preview from "@public/favicons/card.png";

const getConfig = (): any => {
  const domain = process.env.DOMAIN;

  return {
    title: {
      default: "Home | SpaceSync",
      template: `%s | SpaceSync`,
    },
    description: `SpaceSync - `,
    openGraph: {
      type: "website",
      images: [{ url: preview.src, alt: "Preview Image" }],
      title: `SpaceSync`,
      description: `SpaceSync - `,
      locale: "en",
      url: "localhost",
      siteName: "SpaceSync",
    },
    manifest: "/favicons/manifest.json",
    twitter: {
      card: "summary_large_image",
    },
    metadataBase: new URL(domain),
  };
};

export default getConfig;

import { createClient } from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-05-26',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
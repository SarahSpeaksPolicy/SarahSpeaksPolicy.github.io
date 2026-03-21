import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { hero } from './schemas/hero';
import { about } from './schemas/about';
import { focusArea } from './schemas/focusArea';
import { post } from './schemas/post';
import { category } from './schemas/category';

export default defineConfig({
  name: 'sarahspeakspolicy',
  title: 'SarahSpeaksPolicy',

  // Replace with your Sanity project ID after running `sanity init`
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Hero / Banner').id('hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem().title('About Sarah').id('about')
              .child(S.document().schemaType('about').documentId('about')),
            S.divider(),
            S.listItem().title('Focus Areas').schemaType('focusArea')
              .child(S.documentTypeList('focusArea')),
            S.listItem().title('Blog Posts').schemaType('post')
              .child(S.documentTypeList('post')),
            S.listItem().title('Categories').schemaType('category')
              .child(S.documentTypeList('category')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [hero, about, focusArea, post, category],
  },
});

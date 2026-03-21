import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { hero } from './schemas/hero';
import { about, focusArea, category, post } from './schemas/index';

export default defineConfig({
  name: 'sarahspeakspolicy',
  title: 'SarahSpeaksPolicy',

  projectId: '8yygddn2',
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

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { markdownSchema } from 'sanity-plugin-markdown';

import { hero } from './schemas/hero';
import { about, category, policyWork, policyAndWorkPage, contact, marginalia, marginaliaPage } from './schemas/index';

export default defineConfig({
  name: 'sarahspeakspolicy',
  title: 'SarahSpeaksPolicy',

  projectId: '8yygddn2',
  dataset: 'production',

  plugins: [
    markdownSchema(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Hero / Banner').id('hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem().title('On Background').id('onBackground')
              .child(S.document().schemaType('onBackground').documentId('onBackground')),
            S.divider(),
            S.listItem().title('Policy & Work — Page').id('policyAndWorkPage')
              .child(S.document().schemaType('policyAndWorkPage').documentId('policyAndWorkPage')),
            S.listItem().title('Policy & Work — Pieces').schemaType('policyAndWork')
              .child(S.documentTypeList('policyAndWork')),
            S.divider(),
            S.listItem().title('Marginalia — Page').id('marginaliaPage')
              .child(S.document().schemaType('marginaliaPage').documentId('marginaliaPage')),
            S.listItem().title('Marginalia — Posts').schemaType('marginalia')
              .child(S.documentTypeList('marginalia')),
            S.divider(),
            S.listItem().title('Contact').id('contact')
              .child(S.document().schemaType('contact').documentId('contact')),
            S.listItem().title('Categories').schemaType('category')
              .child(S.documentTypeList('category')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [hero, about, category, policyWork, policyAndWorkPage, contact, marginalia, marginaliaPage],
  },
});

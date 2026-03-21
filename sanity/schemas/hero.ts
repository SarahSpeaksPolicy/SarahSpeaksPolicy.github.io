// hero.ts
export const hero = {
  name: 'hero',
  title: 'Hero Banner',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main bold statement at the top of the homepage',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
      description: 'Supporting sentence below the headline',
    },
    {
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Read My Work',
    },
    {
      name: 'ctaLink',
      title: 'Button Link',
      type: 'string',
      initialValue: '/blog',
    },
  ],
  preview: { select: { title: 'headline' } },
};

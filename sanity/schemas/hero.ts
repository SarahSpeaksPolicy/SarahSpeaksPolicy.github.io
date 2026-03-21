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
  ],
  preview: { select: { title: 'headline' } },
};

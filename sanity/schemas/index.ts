// about.ts
export const about = {
  name: 'about',
  title: 'About Sarah',
  type: 'document',
  fields: [
    {
      name: 'positioningStatement',
      title: 'Positioning Statement',
      type: 'string',
      description: 'One-line statement shown on the homepage hero',
    },
    {
      name: 'fullBio',
      title: 'Full Biography (About Page)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Longer biography for the About page',
    },
    {
      name: 'photo',
      title: 'Headshot / Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'resume',
      title: 'Resume (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'degree', title: 'Degree', type: 'string' },
            { name: 'institution', title: 'Institution', type: 'string' },
            { name: 'year', title: 'Year', type: 'string' },
          ],
          preview: { select: { title: 'degree', subtitle: 'institution' } },
        },
      ],
    },
  ],
  preview: { prepare: () => ({ title: 'About Sarah' }) },
};

// category.ts
export const category = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
  ],
};

// policyWork.ts
export const policyWork = {
  name: 'policyWork',
  title: 'Policy & Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R: any) => R.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'file',
      title: 'PDF / Document',
      type: 'file',
      options: { accept: '.pdf' },
    },
    {
      name: 'externalUrl',
      title: 'External URL (if no PDF)',
      type: 'url',
    },
    {
      name: 'publishedAt',
      title: 'Date',
      type: 'date',
    },
  ],
  preview: { select: { title: 'title', subtitle: 'description' } },
};

// marginalia.ts
export const marginalia = {
  name: 'marginalia',
  title: 'Marginalia',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R: any) => R.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R: any) => R.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'headerImage',
      title: 'Header Image (overrides default)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
    },
  ],
  preview: { select: { title: 'title', subtitle: 'publishedAt' } },
};

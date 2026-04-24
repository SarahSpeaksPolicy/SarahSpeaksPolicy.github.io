// onBackground.ts
export const about = {
  name: 'onBackground',
  title: 'On Background',
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
      title: 'Full Biography',
      type: 'array',
      of: [{ type: 'block' }],
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
      name: 'experience',
      title: 'Selected Background',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'organization', title: 'Organization', type: 'string' },
            { name: 'role', title: 'Role / Duration', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
          preview: { select: { title: 'organization', subtitle: 'role' } },
        },
      ],
    },
  ],
  preview: { prepare: () => ({ title: 'On Background' }) },
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

// policyAndWork.ts
export const policyWork = {
  name: 'policyAndWork',
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

// contact.ts
export const contact = {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'pageTagline',
      title: 'Page Tagline',
      type: 'string',
    },
    {
      name: 'pageSubhead',
      title: 'Page Subhead',
      type: 'text',
      rows: 2,
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'context', title: 'Context', type: 'string' },
          ],
          preview: { select: { title: 'name', subtitle: 'context' } },
        },
      ],
    },
  ],
  preview: { prepare: () => ({ title: 'Contact' }) },
};

// policyAndWorkPage.ts
export const policyAndWorkPage = {
  name: 'policyAndWorkPage',
  title: 'Policy & Work — Page',
  type: 'document',
  fields: [
    {
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
    },
    {
      name: 'pageSubhead',
      title: 'Page Subhead',
      type: 'text',
      rows: 2,
    },
  ],
  preview: { prepare: () => ({ title: 'Policy & Work — Page' }) },
};

// marginaliaPage.ts
export const marginaliaPage = {
  name: 'marginaliaPage',
  title: 'Marginalia — Page',
  type: 'document',
  fields: [
    {
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
    },
    {
      name: 'pageSubhead',
      title: 'Page Subhead',
      type: 'text',
      rows: 2,
    },
  ],
  preview: { prepare: () => ({ title: 'Marginalia — Page' }) },
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

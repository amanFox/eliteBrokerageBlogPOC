import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomComponentsParagraph extends Schema.Component {
  collectionName: 'components_custom_components_paragraphs';
  info: {
    displayName: 'paragraph';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    imagePosition: Attribute.Enumeration<
      [
        'above paragraph',
        'below paragraph',
        'left of paragraph (1:1)',
        'right of paragraph (1:1)'
      ]
    >;
    paragraph: Attribute.Blocks;
  };
}

export interface CustomComponentsSection extends Schema.Component {
  collectionName: 'components_custom_components_sections';
  info: {
    displayName: 'section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sectionImage: Attribute.Media;
    sectionImagePosition: Attribute.Enumeration<
      ['top ( below title )', 'bottom of section']
    >;
    paragraph: Attribute.Component<'custom-components.paragraph', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'custom-components.paragraph': CustomComponentsParagraph;
      'custom-components.section': CustomComponentsSection;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}

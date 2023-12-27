import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomBlock extends Schema.Component {
  collectionName: 'components_custom_blocks';
  info: {
    displayName: 'block';
    icon: 'expand';
    description: '';
  };
  attributes: {
    richText: Attribute.Blocks;
    media: Attribute.Media;
    table: Attribute.JSON;
  };
}

export interface CustomSection extends Schema.Component {
  collectionName: 'components_custom_sections';
  info: {
    displayName: 'section';
    icon: 'grid';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    block: Attribute.Component<'custom.block', true>;
    blocksAlignment: Attribute.Enumeration<['vertical', 'horizontal']> &
      Attribute.DefaultTo<'vertical'>;
  };
}

export interface CustomTable extends Schema.Component {
  collectionName: 'components_custom_tables';
  info: {
    displayName: 'table';
    icon: 'layer';
  };
  attributes: {
    table: Attribute.JSON;
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
      'custom.block': CustomBlock;
      'custom.section': CustomSection;
      'custom.table': CustomTable;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}

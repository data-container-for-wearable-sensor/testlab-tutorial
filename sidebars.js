/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro/index',
    },
    {
      type: 'doc',
      label: 'Specification',
      id: 'specification/spec_overview',
    },

    {
      type: 'category',
      label: 'Handling Container',
      items: [
        {
          type: 'doc',
          label: '概要',
          id: 'handling_guide/index',
        },
        {
          type: 'doc',
          label: '事例',
          id: 'handling_guide/example',
        }
      ]
    },
    {
      type: 'category',
      label: 'Test Lab System',
      items: [
        {
          type: 'doc',
          label: '概要・目的',
          id: 'testlab_system/index',
        },
        {
          type: 'doc',
          label: '構成図',
          id: 'testlab_system/test_lab',
        }
      ]
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        {
          type: 'doc',
          label: '構築手順',
          id: 'environment/index',
        },
        {
          type: 'doc',
          label: '実行手順',
          id: 'firststep/index',
        }
      ]
    },
    {
      type: 'category',
      label: 'Etc',
      items: [
        {
          type: 'doc',
          label: 'License',
          id: 'etc/license',
        },
        {
          type: 'doc',
          label: 'Versioning',
          id: 'etc/versioning',
        },
        {
          type: 'doc',
          label: 'Source Code',
          id: 'etc/sourcecode',
        },
        {
          type: 'doc',
          label: 'Links',
          id: 'etc/links',
        },
      ]
    }
  ]
};

module.exports = sidebars;

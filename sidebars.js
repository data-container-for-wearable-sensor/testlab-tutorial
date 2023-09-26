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
      label: '導入',
      id: 'intro/index',
    },
    {
      type: 'category',
      label: 'コンテナフォーマット',
      items: [
        {
          type: 'doc',
          label: '課題と解決',
          id: 'spec_guide/solution',
        },
        {
          type: 'doc',
          label: '基礎知識',
          id: 'spec_guide/index',
        },
        {
          type: 'doc',
          label: '使用例',
          id: 'spec_guide/example',
        }
      ]
    },
    {
      type: 'category',
      label: 'テストラボシステム',
      items: [
        {
          type: 'doc',
          label: '概要・目的',
          id: 'testlab_system/index',
        },
        {
          type: 'doc',
          label: '構成',
          id: 'testlab_system/test_lab',
        },
        {
          type: 'doc',
          label: '構築手順',
          id: 'testlab_system/environment',
        },
        {
          type: 'doc',
          label: '動作手順',
          id: 'firststep/index',
        },
        {
          type: 'doc',
          label: 'バージョン情報',
          id: 'testlab_system/versioning',
        },
      ]
    },
    {
      type: 'category',
      label: 'Etc',
      items: [
        {
          type: 'doc',
          label: 'ライセンス',
          id: 'etc/license',
        },

        {
          type: 'doc',
          label: 'ソースコード',
          id: 'etc/sourcecode',
        },
        {
          type: 'doc',
          label: 'リンク集',
          id: 'etc/links',
        },
      ]
    }
  ]
};

module.exports = sidebars;

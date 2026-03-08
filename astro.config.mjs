import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

/** Custom Shiki theme matching the Glass Dark Earth palette */
const earthTheme = {
  name: 'earth-dark',
  type: 'dark',
  colors: {
    'editor.background': '#00000000',
    'editor.foreground': '#d4cfc4',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#5a5650', fontStyle: 'italic' },
    },
    {
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#5e9e6e' },
    },
    {
      scope: ['keyword.control', 'keyword.operator.new'],
      settings: { foreground: '#5e9e6e' },
    },
    {
      scope: ['string', 'string.quoted'],
      settings: { foreground: '#7bb88a' },
    },
    {
      scope: ['constant.numeric'],
      settings: { foreground: '#a08050' },
    },
    {
      scope: ['constant.language', 'constant.character'],
      settings: { foreground: '#a08050' },
    },
    {
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: '#c4a882' },
    },
    {
      scope: ['entity.name.type', 'entity.name.class', 'support.type', 'support.class'],
      settings: { foreground: '#d9c4a0' },
    },
    {
      scope: ['entity.name.tag'],
      settings: { foreground: '#5e9e6e' },
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: { foreground: '#c4a882' },
    },
    {
      scope: ['variable', 'variable.other'],
      settings: { foreground: '#d4cfc4' },
    },
    {
      scope: ['variable.parameter'],
      settings: { foreground: '#c4a882' },
    },
    {
      scope: ['variable.language'],
      settings: { foreground: '#5e9e6e', fontStyle: 'italic' },
    },
    {
      scope: ['punctuation', 'meta.brace'],
      settings: { foreground: '#9a9488' },
    },
    {
      scope: ['keyword.operator', 'keyword.operator.assignment'],
      settings: { foreground: '#9a9488' },
    },
    {
      scope: ['meta.decorator', 'punctuation.decorator'],
      settings: { foreground: '#a08050' },
    },
    {
      scope: ['entity.name.namespace', 'entity.name.module'],
      settings: { foreground: '#d9c4a0' },
    },
    {
      scope: ['support.variable.property', 'variable.other.property'],
      settings: { foreground: '#d4cfc4' },
    },
    {
      scope: ['entity.other.inherited-class'],
      settings: { foreground: '#7bb88a' },
    },
    {
      scope: ['markup.heading'],
      settings: { foreground: '#c4a882', fontStyle: 'bold' },
    },
    {
      scope: ['markup.bold'],
      settings: { fontStyle: 'bold' },
    },
    {
      scope: ['markup.italic'],
      settings: { fontStyle: 'italic' },
    },
    {
      scope: ['markup.inline.raw', 'markup.fenced_code'],
      settings: { foreground: '#7bb88a' },
    },
  ],
};

export default defineConfig({
  site: 'https://orijs.dev',
  integrations: [svelte(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: earthTheme,
    },
  },
});

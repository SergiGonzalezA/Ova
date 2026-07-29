// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Inicio',
      pagefind: false,
      customCss: ['./src/styles/custom.css'],
      /*social: [
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/withastro/starlight',
      },
    ],*/
      sidebar: [
        {
          label: 'Unidades',
          items: [
            {
              label: 'Unidad I: Concepto de función',
              collapsed: true,
              items: [
                { label: 'Sesión I', slug: 'unidad/unidad-1/sesion-1' },
                { label: 'Sesión II', slug: 'unidad/unidad-1/sesion-2' },
              ],
            },
            {
              label: 'Unidad II: Función lineal',
              collapsed: true,
              items: [
                { label: 'Sesión IV', slug: 'unidad/unidad-2/sesion-3' },
                { label: 'Sesión V', slug: 'unidad/unidad-2/sesion-4' },
              ],
            },
            {
              label: 'Unidad III: Función cuadratica',
              collapsed: true,
              items: [
                { label: 'Sesión IV', slug: 'unidad/unidad-3/sesion-5' },
                { label: 'Sesión V', slug: 'unidad/unidad-3/sesion-6' },
              ],
            },
            {
              label: 'Unidad IV: Función cierre',
              collapsed: true,
              items: [
                { label: 'Sesión IV', slug: 'unidad/unidad-4/sesion-7' },
                { label: 'Sesión V', slug: 'unidad/unidad-4/sesion-8' },
              ],
            },
          ],
        },
      ],
    }),
    mdx(),
  ],
});

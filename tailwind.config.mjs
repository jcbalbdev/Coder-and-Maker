/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'petroleo': '#00303c',
				'petroleo-claro': '#013947',
				'verde': '#75f751',
				'morado': '#833bf4',
				'rosa': '#F466FF',
				'naranja': '#FFBB3C',
      },
			fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    }
	},
	plugins: [],
}

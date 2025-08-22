/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0a192f',
                accent: '#64ffda',
            },
            fontFamily: {
                sans: ['Lato', 'Roboto', 'sans-serif'],
                heading: ['Montserrat', 'Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
} 
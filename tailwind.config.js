module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        // Add other paths to your content files here
    ],
    theme: {
        extend: {
            colors: {
                'main-800': '#1a202c', // Replace with your desired color value
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp')
    ],
}
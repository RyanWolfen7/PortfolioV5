module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        // Add other paths to your content files here
    ],
    theme: {
        extend: {
            colors: {
                // Main background and surface colors
                'primary': {
                    900: '#0f172a',  // Dark slate for main background
                    800: '#1e293b',  // Slightly lighter slate for cards/sections
                    700: '#334155',  // For hover states
                    600: '#475569',  // For borders
                    500: '#64748b',  // For disabled elements
                    400: '#94a3b8',  // For secondary text
                    300: '#cbd5e1',  // For primary text
                    200: '#e2e8f0',  // For highlights
                    100: '#f1f5f9',  // For very light backgrounds
                    50: '#f8fafc',   // Almost white
                },
                // Accent color - amber
                'accent': {
                    900: '#78350f',  // Very dark amber
                    800: '#92400e',  // Dark amber
                    700: '#b45309',  // Medium-dark amber
                    600: '#d97706',  // Medium amber
                    500: '#f59e0b',  // Primary amber
                    400: '#fbbf24',  // Bright amber - main accent
                    300: '#fcd34d',  // Light amber
                    200: '#fde68a',  // Very light amber
                    100: '#fef3c7',  // Almost white amber
                    50: '#fffbeb',   // Subtle amber tint
                },
            },
            boxShadow: {
                'glow-sm': '0 0 10px rgba(251, 191, 36, 0.2)',
                'glow': '0 0 15px rgba(251, 191, 36, 0.3)',
                'glow-lg': '0 0 25px rgba(251, 191, 36, 0.4)',
            },
            borderWidth: {
                '1': '1px',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
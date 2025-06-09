import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				sage: {
					50: '#f8f9f6',
					100: '#e9edc9',
					200: '#ccd5ae',
					300: '#9da489',
					400: '#8a9177',
					500: '#7a8068',
					600: '#6a6e5a',
					700: '#5a5d4d',
					800: '#4a4d40',
					900: '#3a3d33',
				},
				cream: {
					50: '#fefae0',
					100: '#fef7cd',
					200: '#fef0a0',
					300: '#fde96d',
					400: '#fce13d',
					500: '#fbd914',
					600: '#e8bf0a',
					700: '#d4a307',
					800: '#b08408',
					900: '#8f6608',
				},
				peach: {
					50: '#fef5f0',
					100: '#fde8d9',
					200: '#fbceb2',
					300: '#f8ae81',
					400: '#f58c4e',
					500: '#f26d1f',
					600: '#e85315',
					700: '#d44113',
					800: '#b33417',
					900: '#922b16',
				},
				terracotta: {
					50: '#faf5f2',
					100: '#f4e7db',
					200: '#e8cab5',
					300: '#d9a68b',
					400: '#cb8161',
					500: '#c16543',
					600: '#b55438',
					700: '#964430',
					800: '#7a392b',
					900: '#643025',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'data-pulse': {
					'0%, 100%': {
						opacity: '0.6',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.6s ease-out forwards',
				'data-pulse': 'data-pulse 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

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
				// Warm, elegant color palette
				warmBrown: {
					50: '#fcf9f6',
					100: '#f8f1e8',
					200: '#f0e2d0',
					300: '#e6d0b5',
					400: '#dab584',
					500: '#cd855f',
					600: '#b76e46',
					700: '#9d5a3a',
					800: '#824a33',
					900: '#6b3d2c',
				},
				warmPeach: {
					50: '#fef9f5',
					100: '#fdf2ea',
					200: '#fae3d0',
					300: '#f6cfa8',
					400: '#f0b27f',
					500: '#e99357',
					600: '#da7539',
					700: '#b85c2b',
					800: '#964a26',
					900: '#7a3d22',
				},
				warmCream: {
					50: '#fefdfb',
					100: '#fcf9f6',
					200: '#f8f1e8',
					300: '#f0e2d0',
					400: '#e8d0b5',
					500: '#ddb894',
					600: '#cc9f72',
					700: '#b8845a',
					800: '#966a47',
					900: '#785539',
				},
				warmGold: {
					50: '#fffcf0',
					100: '#fef7db',
					200: '#fcebb7',
					300: '#f9da87',
					400: '#f5c55c',
					500: '#f0b13e',
					600: '#e19b2e',
					700: '#bb7b26',
					800: '#966025',
					900: '#794f22',
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
				'warm-pulse': {
					'0%, 100%': {
						opacity: '0.7',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)'
					}
				},
				'floating': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'33%': {
						transform: 'translateY(-20px) rotate(2deg)'
					},
					'66%': {
						transform: 'translateY(-10px) rotate(-1deg)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				},
				'wave': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.8s ease-out forwards',
				'warm-pulse': 'warm-pulse 3s ease-in-out infinite',
				'floating': 'floating 6s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite',
				'wave': 'wave 8s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'warm-gradient': 'linear-gradient(135deg, rgb(183, 110, 70), rgb(205, 133, 63), rgb(218, 165, 132))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

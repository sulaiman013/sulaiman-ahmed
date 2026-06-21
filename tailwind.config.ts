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
			padding: '1.5rem',
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
				serif: ['Newsreader', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
				display: ['Newsreader', 'Georgia', 'serif'],
			},
			fontSize: {
				'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
				'body-sm': ['0.875rem', { lineHeight: '1.5' }],
				'body': ['1rem', { lineHeight: '1.55' }],
				'body-lg': ['1.0625rem', { lineHeight: '1.7' }],
				'h4': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.005em' }],
				'h3': ['1.563rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
				'h2': ['1.953rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
				'display-md': ['2.441rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
				'display-lg': ['3.052rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
				'display-xl': ['3.815rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
			},
			colors: {
				border: 'oklch(var(--border) / <alpha-value>)',
				'border-strong': 'oklch(var(--border-strong) / <alpha-value>)',
				input: 'oklch(var(--input) / <alpha-value>)',
				ring: 'oklch(var(--ring) / <alpha-value>)',
				background: 'oklch(var(--background) / <alpha-value>)',
				'background-elevated': 'oklch(var(--background-elevated) / <alpha-value>)',
				foreground: 'oklch(var(--foreground) / <alpha-value>)',
				'foreground-muted': 'oklch(var(--foreground-muted) / <alpha-value>)',
				'foreground-subtle': 'oklch(var(--foreground-subtle) / <alpha-value>)',
				'accent-brand': {
					DEFAULT: 'oklch(var(--accent-brand) / <alpha-value>)',
					strong: 'oklch(var(--accent-strong) / <alpha-value>)',
					soft: 'oklch(var(--accent-soft) / <alpha-value>)',
					foreground: 'oklch(var(--accent-foreground-brand) / <alpha-value>)',
				},
				code: {
					DEFAULT: 'oklch(var(--code-background) / <alpha-value>)',
				},
				success: 'oklch(var(--success) / <alpha-value>)',
				warning: 'oklch(var(--warning) / <alpha-value>)',

				/* shadcn-ui compatibility — keep these names so the
				   ui/* primitives keep working without per-component
				   edits. They share the same OKLCH variables as the
				   semantic tokens above. */
				primary: {
					DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
					foreground: 'oklch(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
					foreground: 'oklch(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
					foreground: 'oklch(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
					foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
					foreground: 'oklch(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'oklch(var(--popover) / <alpha-value>)',
					foreground: 'oklch(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'oklch(var(--card) / <alpha-value>)',
					foreground: 'oklch(var(--card-foreground) / <alpha-value>)'
				},
				sidebar: {
					DEFAULT: 'oklch(var(--sidebar-background) / <alpha-value>)',
					foreground: 'oklch(var(--sidebar-foreground) / <alpha-value>)',
					primary: 'oklch(var(--sidebar-primary) / <alpha-value>)',
					'primary-foreground': 'oklch(var(--sidebar-primary-foreground) / <alpha-value>)',
					accent: 'oklch(var(--sidebar-accent) / <alpha-value>)',
					'accent-foreground': 'oklch(var(--sidebar-accent-foreground) / <alpha-value>)',
					border: 'oklch(var(--sidebar-border) / <alpha-value>)',
					ring: 'oklch(var(--sidebar-ring) / <alpha-value>)'
				}
			},
			borderRadius: {
				xs: 'var(--radius-xs)',
				sm: 'var(--radius-sm)',
				md: 'var(--radius-md)',
				lg: 'var(--radius-lg)',
				xl: 'var(--radius-xl)',
				pill: '9999px',
				DEFAULT: 'var(--radius)',
			},
			boxShadow: {
				'subtle': '0 1px 2px 0 oklch(0.22 0.012 85 / 0.05)',
				'soft': '0 4px 12px -2px oklch(0.22 0.012 85 / 0.08)',
				'lifted': '0 12px 32px -8px oklch(0.22 0.012 85 / 0.12)',
				'subtle-dark': '0 1px 2px 0 oklch(0 0 0 / 0.3)',
				'soft-dark': '0 4px 12px -2px oklch(0 0 0 / 0.4)',
				'lifted-dark': '0 12px 32px -8px oklch(0 0 0 / 0.5)',
			},
			transitionTimingFunction: {
				'out-quart': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'in-out-quart': 'cubic-bezier(0.65, 0, 0.35, 1)',
			},
			transitionDuration: {
				'fast': '150ms',
				DEFAULT: '250ms',
				'slow': '500ms',
				'page': '350ms',
			},
			spacing: {
				'section-sm': 'var(--space-section-sm)',
				'section': 'var(--space-section)',
				'section-lg': 'var(--space-section-lg)',
				'prose': 'var(--space-prose)',
			},
			maxWidth: {
				'prose-tight': '65ch',
				'prose': '720px',
				'figure': '1000px',
				'page': '1200px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-in-up': {
					from: { opacity: '0', transform: 'translateY(16px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-down': {
					from: { opacity: '0', transform: 'translateY(-16px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 500ms cubic-bezier(0.16, 1, 0.3, 1)',
				'fade-in-up': 'fade-in-up 500ms cubic-bezier(0.16, 1, 0.3, 1) both',
				'fade-in-down': 'fade-in-down 500ms cubic-bezier(0.16, 1, 0.3, 1) both',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { APP_DOMAIN_URL } from '@/Configurations/env'

const REL = 'canonical'

/** Trailing slash on `/` only; other paths have no trailing slash. */
function normalizeCanonicalPath(pathname: string): string {
	if (pathname === '/' || pathname === '') return '/'
	const trimmed = pathname.replace(/\/+$/, '')
	return trimmed === '' ? '/' : trimmed
}

function buildCanonicalHref(origin: string, pathname: string): string {
	const path = normalizeCanonicalPath(pathname)
	return `${origin}${path}`
}

export function CanonicalLink() {
	const { pathname } = useLocation()

	useLayoutEffect(() => {
		if (!APP_DOMAIN_URL) {
			const existing = document.querySelector(`link[rel="${REL}"]`)
			existing?.remove()
			return
		}

		const href = buildCanonicalHref(APP_DOMAIN_URL, pathname)
		let link = document.querySelector(`link[rel="${REL}"]`) as HTMLLinkElement | null

		if (!link) {
			link = document.createElement('link')
			link.rel = REL
			document.head.appendChild(link)
		}
		link.href = href
	}, [pathname])

	return null
}

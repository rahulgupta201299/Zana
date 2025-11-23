export function replaceHiphenWithSpaces(val: string): string {
	if (!val) return ''
	return val.toLowerCase().split('-').join(' ')
}

export function replaceSpacesWithHiphen(val: string): string {
	if (!val) return ''
	return val.toLowerCase().split(' ').join('-')
}
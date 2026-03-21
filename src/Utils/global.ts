export const InrFormatter = {
  format(amount: number): string {
    const formatted = new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0
    }).format(amount)

    return formatted.replace(/,/g, ',\u200B')
  }
}

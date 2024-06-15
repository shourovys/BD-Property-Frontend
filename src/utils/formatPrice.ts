const formatPrice = (value: number | string): string => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value

  if (numericValue < 1000) {
    return Math.round(numericValue).toString()
  } else if (numericValue < 100000) {
    return (numericValue / 1000).toFixed(2) + ' Thousand'
  } else if (numericValue < 10000000) {
    return (numericValue / 100000).toFixed(2) + ' Lakh'
  } else {
    return (numericValue / 10000000).toFixed(2) + ' Crore'
  }
}

export default formatPrice

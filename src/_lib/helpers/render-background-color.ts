const renderBackgroundColor = (color: string | null | undefined) => {
  switch (color) {
    case 'brandPrimary':
      return 'bg-brandPrimary'
    case 'brandSecondary':
      return 'bg-brandSecondary'
    case 'brandTertiary':
      return 'bg-brandTertiary'
    case 'brandQuaternary':
      return 'bg-brandQuaternary'
    case 'transparent':
      return 'bg-transparent'
    case null:
      return
    case undefined:
      return ''
    default:
      return ''
  }
}

export { renderBackgroundColor }

// breakpoint sm bootstrap
const breakpoint = '540px'

const viewportSize = window.matchMedia('(min-width:' + breakpoint + ')')

const removeToggle = viewportSize =>
  viewportSize.matches
    ? document.querySelectorAll('li').forEach(li => (li.dataset.toggle = ''))
    : false

removeToggle(viewportSize)
viewportSize.addListener(removeToggle)

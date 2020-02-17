const deviceSize = 480

const removeToggle = size =>
  window.screen.width > size
    ? document.querySelectorAll('li').forEach(li => (li.dataset.toggle = ''))
    : false

removeToggle(deviceSize)

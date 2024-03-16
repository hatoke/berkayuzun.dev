export default function (dragElement, targetElement) {
  if (!targetElement) {
    targetElement = dragElement
  }

  const contorlBar = document.getElementById('control-bar')
  const contorlBarHeight = contorlBar ? contorlBar.clientHeight - 1 : 28

  let dragX = 0
  let dragY = 0
  let mouseX = 0
  let mouseY = 0
  
  dragElement.onmousedown = dragMouseDown

  function dragMouseDown(e) {
    e = e || window.event
    e.preventDefault()
    mouseX = e.clientX
    mouseY = e.clientY
    document.onmouseup = closeDragElement
    document.onmousemove = elementDrag
  }

  function elementDrag(e) {
    e = e || window.event
    e.preventDefault()
    dragX = mouseX - e.clientX
    dragY = mouseY - e.clientY
    mouseX = e.clientX
    mouseY = e.clientY
    if (targetElement.offsetTop - dragY > contorlBarHeight) {
      targetElement.style.top = targetElement.offsetTop - dragY + 'px'
    }
    targetElement.style.left = targetElement.offsetLeft - dragX + 'px'
  }

  function closeDragElement() {
    document.onmouseup = null
    document.onmousemove = null
  }
}

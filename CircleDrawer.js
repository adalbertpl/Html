export default class CircleDrawer {
    static draw(node, pos, radius) {
        var elCircle = document.createElement("div")
        elCircle.style.display = "inline-block"
        elCircle.style.width = 2 * radius
        elCircle.style.height = 2 * radius
        elCircle.style.borderRadius = radius + "px"
        elCircle.style.backgroundColor = "black"
        elCircle.style.position = "absolute"
        elCircle.style.top = pos.y
        elCircle.style.left = pos.x

        node.appendChild(elCircle)
    }
}
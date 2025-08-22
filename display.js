function distance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y)
}

function calculateAngles(A, B, C) {
    const a = distance(B, C)
    const b = distance(A, C)
    const c = distance(A, B)

    const angleA = Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)) * (180 / Math.PI)
    const angleB = Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)) * (180 / Math.PI)
    const angleC = 180 - angleA - angleB

    return [angleA, angleB, angleC]
}

function drawTriangle(ctx, A, B, C, angles) {
    ctx.clearRect(0, 0, 800, 800)

    ctx.beginPath()
    ctx.moveTo(A.x, A.y)
    ctx.lineTo(B.x, B.y)
    ctx.lineTo(C.x, C.y)
    ctx.closePath()
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2
    ctx.stroke()

    const points = [A, B, C]
    points.forEach((p, i) => {

        ctx.fillStyle = "blue"
        ctx.font = "16px Arial"
        ctx.fillText(angles[i].toFixed(1) + "°", p.x + 25, p.y)
    })
}

const pointsData = JSON.parse(localStorage.getItem("trianglePoints"))
if (pointsData) {
    const A = { x: Number(pointsData.x1), y: Number(pointsData.y1) }
    const B = { x: Number(pointsData.x2), y: Number(pointsData.y2) }
    const C = { x: Number(pointsData.x3), y: Number(pointsData.y3) }

    const angles = calculateAngles(A, B, C)
    const canvas = document.querySelector(".triangleCanvas")
    const ctx = canvas.getContext("2d")
    drawTriangle(ctx, A, B, C, angles)
}

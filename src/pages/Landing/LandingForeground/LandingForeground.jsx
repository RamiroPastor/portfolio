/* eslint-disable react-hooks/exhaustive-deps */

import React, { useRef, useEffect } from "react";



export function LandingForeground(props) {

  const canvasRef = useRef(null);


  const draw = (ctx, pts, p0, limits) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.fillStyle = "#ffffff"
    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 2
    const [ax, ay, ar] = drawCircle(ctx, pts.ax, pts.ay, pts.ar, p0.ax, p0.ay, p0.ar, limits)
    const [bx, by, br] = drawCircle(ctx, pts.bx, pts.by, pts.br, p0.ax, p0.ay, p0.ar, limits)
    const [cx, cy, cr] = drawCircle(ctx, pts.cx, pts.cy, pts.cr, p0.ax, p0.ay, p0.ar, limits)
    const [dx, dy, dr] = drawCircle(ctx, pts.dx, pts.dy, pts.dr, p0.ax, p0.ay, p0.ar, limits)
    ctx.beginPath()
    ctx.arc(500, 500, 150, 0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()
    return (
      {...pts
      , ax, ay, ar
      , bx, by, br
      , cx, cy, cr
      , dx, dy, dr
      })
  }


  useEffect( () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    let animationFrameId;

    const originPoints =
      { ax: 300, ay: 300, ar: 80
      , bx: 700, by: 300, br: 80
      , cx: 300, cy: 700, cr: 80
      , dx: 700, dy: 700, dr: 80
      }
    
    const limits =
      { r1: 10
      , d1: 60
      }

    async function render(points) {
      const newPoints = draw(context, points, originPoints, limits)
      await new Promise(r => setTimeout(r, 50));
      animationFrameId = window.requestAnimationFrame(() => render(newPoints))
    }
    render(originPoints)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  
  }, [draw]);

  
  return(
    <canvas ref={canvasRef} className="LandingForeground" width="1000px" height="1000px"></canvas>
  )
}




function drawCircle(ctx, x, y, r, x0, y0, r0, limits) {
  const xrand = x + 4*Math.random() - 2;
  const yrand = y + 4*Math.random() - 2;
  let newR;
  if (Math.random() < 0.5) {
    newR = (Math.abs(r + 1 - r0) > limits.r1) ? r - 1 : r + 1 
  } else {
    newR = (Math.abs(r - 1 - r0) > limits.r1) ? r + 1 : r - 1
  }
  ctx.beginPath()
  ctx.arc(xrand, yrand, newR, 0, 2*Math.PI)
  ctx.fill()
  ctx.stroke()
  return [xrand, yrand, newR]
}
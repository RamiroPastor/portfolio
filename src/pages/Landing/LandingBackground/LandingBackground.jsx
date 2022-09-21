/* eslint-disable react-hooks/exhaustive-deps */

import React, { useRef, useEffect } from "react";


export function LandingBackground(props) {

  const canvasRef = useRef(null);


  const draw = (ctx, counter, polygons) => {

    ctx.clearRect(-ctx.canvas.width, -ctx.canvas.height, 2*ctx.canvas.width, 2*ctx.canvas.height)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.width / 2)
    ctx.scale(1, -1)
    // ctx.rotate(counter * Math.PI / 180)

    ctx.lineJoin = "round"
    ctx.lineWidth = 1

    const newPoly1 = generateRandomPolygon();
    // const newPoly2 = generateRandomPolygon();
    // const newPoly3 = generateRandomPolygon();

    polygons.push(newPoly1);
    //polygons.push(newPoly1, newPoly2, newPoly3);

    for (const p of polygons) {
      drawAndUpdatePolygon(ctx, p)
    }

    if (polygons.length > 300) {
      polygons.splice(1, 30)
    }

  }


  useEffect( () => {

    let counter = 0;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    let animationFrameId;

    const polygonList = []

    async function render() {
      draw(context, counter, polygonList)
      counter += 3;
      await new Promise(r => setTimeout(r, 60));
      animationFrameId = window.requestAnimationFrame(() => render())
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  
  }, [draw]);

  
  return(
    <canvas ref={canvasRef} className="LandingBackground" width="1000px" height="1000px"></canvas>
  )
}



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color+"80";
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function generateRandomPolygon() {

  const n = getRndInteger(3, 10)
  const r = 10
  const rho = 1
  const phi = Math.random() * 360
  const col = getRandomColor()

  return {n, r, rho, phi, col}
}



function drawAndUpdatePolygon(ctx, p) {

  const x = p.rho * Math.cos(p.phi * Math.PI / 180)
  const y = p.rho * Math.sin(p.phi * Math.PI / 180)

  ctx.strokeStyle = p.col
  drawRegularPolygon(ctx, p.n, p.r, x, y)

  p.r += 0.1
  p.rho += 5
}



function drawRegularPolygon(ctx, n, r, x, y) {

  const α  = 2 * Math.PI / n

  ctx.beginPath()
  ctx.moveTo( (x + r) , y )
  for (let k = 0; k < n+1; k++) {
    ctx.lineTo(
      (x + r * Math.cos(k*α)),
      (y + r * Math.sin(k*α))
    )    
  }
  ctx.closePath()
  ctx.stroke()
}

/* eslint-disable react-hooks/exhaustive-deps */

import React, { useRef, useEffect } from "react";



function createImage(fileName) {
  const image$$ = document.createElement("img");
  image$$.setAttribute("alt", "");
  image$$.setAttribute("src", "/assets/img/" + fileName)
  return image$$
}

const game_blizzard    = createImage("Game_Blizzard.png");
const game_lol         = createImage("Game_LoL.png");
const game_ps1         = createImage("Game_Ps1.png");
const lang_haskell     = createImage("Lang_Haskell.png");
const lang_js          = createImage("Lang_Js.png");
const lang_python      = createImage("Lang_Python.png");
const math_euler       = createImage("Math_Euler.png");
const math_homomorfism = createImage("Math_Homomorfism.png");
const math_normal      = createImage("Math_Normal.png");
const math_settheory   = createImage("Math_SetTheory.jpg");
const web_css          = createImage("Web_Css.png");
const web_html         = createImage("Web_Html.png");
const web_nodejs       = createImage("Web_Nodejs.png");
const web_react        = createImage("Web_React.png");
const web_sass         = createImage("Web_Sass.png");
const web_svg          = createImage("Web_Svg.png");



export function LandingForeground(props) {

  const canvasRef = useRef(null);


  const draw = (ctx, bounds, p0, counter, pts) => {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = "#ffffff"
    ctx.strokeStyle = "indigo"
    ctx.lineWidth = 2

    // drawCenteredImage(ctx, prueba, 500, 500);

    const [bx, by, br] = drawCircle(ctx, bounds, p0.bx, p0.by, p0.br, p0.bd, counter + 180, pts.br)
    const [cx, cy, cr] = drawCircle(ctx, bounds, p0.cx, p0.cy, p0.cr, p0.cd, counter + 270, pts.cr)
    const [dx, dy, dr] = drawCircle(ctx, bounds, p0.dx, p0.dy, p0.dr, p0.dd, counter + 90 , pts.dr)
    const [ex, ey, er] = drawCircle(ctx, bounds, p0.ex, p0.ey, p0.er, p0.ed, counter + 0  , pts.er)

    ctx.beginPath()
    ctx.arc(p0.ax, p0.ay, p0.ar, 0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()

    joinCircles(ctx, p0.ax, p0.ay, p0.ar, bx, by, br)
    joinCircles(ctx, p0.ax, p0.ay, p0.ar, cx, cy, cr)
    joinCircles(ctx, p0.ax, p0.ay, p0.ar, dx, dy, dr)
    joinCircles(ctx, p0.ax, p0.ay, p0.ar, ex, ey, er)

    ctx.font = "normal small-caps bold 20px Montserrat"
    ctx.fillStyle = "#550044"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Mathematician", bx, by)
    ctx.fillText("Web Developer", cx, cy)
    ctx.fillText("Gamer"        , dx, dy)
    ctx.fillText("Programmer"   , ex, ey)

    return (
      { bx, by, br
      , cx, cy, cr
      , dx, dy, dr
      , ex, ey, er
      })
  }


  useEffect( () => {

    const bounds =
      { r1:  5
      }

    const originPoints =
      { ax: 500, ay: 500, ar: 180
      , bx: 280, by: 280, br: 120, bd: 40
      , cx: 720, cy: 280, cr: 120, cd: 40
      , dx: 280, dy: 720, dr: 120, dd: 40
      , ex: 720, ey: 720, er: 120, ed: 40
      }
    
  

    let counter = 0;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    let animationFrameId;

    async function render(points) {
      const newPoints = draw(context, bounds, originPoints, counter, points)
      counter += 2;
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






function drawCircle(ctx, bounds, x0, y0, r0, d0, counter, r) {
  let newR;
  if (Math.random() < 0.5) {
    newR = (Math.abs(r + 1 - r0) > bounds.r1) ? r : r + 1 
  } else {
    newR = (Math.abs(r - 1 - r0) > bounds.r1) ? r : r - 1
  }

  let newD = (counter % 100 < 50) ? d0 + 1 : d0 - 1;
  
  const alpha = counter * Math.PI / 180;
  const newX = x0 + Math.cos(alpha)*newD
  const newY = y0 + Math.sin(alpha)*newD
  ctx.beginPath()
  ctx.arc(newX, newY, newR, 0, 2*Math.PI)
  ctx.fill()
  ctx.stroke()
  return [newX, newY, newR]
}



function distance(px, py, qx, qy ) {
  return Math.sqrt( (qx - px)**2 + (qy - py)**2 )
}



function joinCircles(ctx, p1, p2, r1, q1, q2, r2) {

  const d = distance(p1, p2, q1, q2);
  const k1 = r1 / d;
  const k2 = r2 / d;

  if (d > r1 + r2) {
    ctx.beginPath()
    ctx.moveTo( k2*p1 + q1 - k2*q1 , k2*p2 + q2 - k2*q2 )
    ctx.lineTo( p1 - k1*p1 + k1*q1 , p2 - k1*p2 + k1*q2 )
    ctx.stroke()
  }

}


function drawCenteredImage(ctx, img$$, x, y) {
  ctx.drawImage
    ( img$$
    , x - img$$.width / 2
    , y - img$$.height / 2
    )
}
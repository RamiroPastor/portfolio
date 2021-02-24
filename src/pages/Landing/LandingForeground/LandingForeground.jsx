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
const math_settheory   = createImage("Math_SetTheory.png");
const web_css          = createImage("Web_Css.png");
const web_html         = createImage("Web_Html.png");
const web_nodejs       = createImage("Web_Nodejs.png");
const web_react        = createImage("Web_React.png");
const web_sass         = createImage("Web_Sass.png");
const web_svg          = createImage("Web_Svg.png");



export function LandingForeground(props) {

  const canvasRef = useRef(null);


  const draw = (ctx, p0, counter, pts) => {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = "#ffffff"
    ctx.strokeStyle = "indigo"
    ctx.lineWidth = 2

    const [bAx, bAy] = drawCircleSmall(ctx, p0.bAx, p0.bAy, p0.r0)
    const [bBx, bBy] = drawCircleSmall(ctx, p0.bBx, p0.bBy, p0.r0)
    const [bCx, bCy] = drawCircleSmall(ctx, p0.bCx, p0.bCy, p0.r0)
    const [bDx, bDy] = drawCircleSmall(ctx, p0.bDx, p0.bDy, p0.r0)
    const [cAx, cAy] = drawCircleSmall(ctx, p0.cAx, p0.cAy, p0.r0)
    const [cBx, cBy] = drawCircleSmall(ctx, p0.cBx, p0.cBy, p0.r0)
    const [cCx, cCy] = drawCircleSmall(ctx, p0.cCx, p0.cCy, p0.r0)
    const [cDx, cDy] = drawCircleSmall(ctx, p0.cDx, p0.cDy, p0.r0)
    const [cEx, cEy] = drawCircleSmall(ctx, p0.cEx, p0.cEy, p0.r0)
    const [cFx, cFy] = drawCircleSmall(ctx, p0.cFx, p0.cFy, p0.r0)
    const [dAx, dAy] = drawCircleSmall(ctx, p0.dAx, p0.dAy, p0.r0)
    const [dBx, dBy] = drawCircleSmall(ctx, p0.dBx, p0.dBy, p0.r0)
    const [dCx, dCy] = drawCircleSmall(ctx, p0.dCx, p0.dCy, p0.r0)
    const [eAx, eAy] = drawCircleSmall(ctx, p0.eAx, p0.eAy, p0.r0)
    const [eBx, eBy] = drawCircleSmall(ctx, p0.eBx, p0.eBy, p0.r0)
    const [eCx, eCy] = drawCircleSmall(ctx, p0.eCx, p0.eCy, p0.r0)

    drawCenteredImage(ctx, math_euler      , bAx, bAy);
    drawCenteredImage(ctx, math_homomorfism, bBx, bBy);
    drawCenteredImage(ctx, math_normal     , bCx, bCy);
    drawCenteredImage(ctx, math_settheory  , bDx, bDy);
    drawCenteredImage(ctx, web_css   , cAx, cAy);
    drawCenteredImage(ctx, web_html  , cBx, cBy);
    drawCenteredImage(ctx, web_svg   , cCx, cCy);
    drawCenteredImage(ctx, web_sass  , cDx, cDy);
    drawCenteredImage(ctx, web_react , cEx, cEy);
    drawCenteredImage(ctx, web_nodejs, cFx, cFy);
    drawCenteredImage(ctx, game_blizzard, dAx, dAy);
    drawCenteredImage(ctx, game_lol     , dBx, dBy);
    drawCenteredImage(ctx, game_ps1     , dCx, dCy);
    drawCenteredImage(ctx, lang_python , eAx, eAy);
    drawCenteredImage(ctx, lang_haskell, eBx, eBy);
    drawCenteredImage(ctx, lang_js     , eCx, eCy);

    const [bx, by, br] = drawCircle(ctx, p0.bx, p0.by, p0.br, p0.bd, counter + 180, pts.br)
    const [cx, cy, cr] = drawCircle(ctx, p0.cx, p0.cy, p0.cr, p0.cd, counter + 270, pts.cr)
    const [dx, dy, dr] = drawCircle(ctx, p0.dx, p0.dy, p0.dr, p0.dd, counter + 90 , pts.dr)
    const [ex, ey, er] = drawCircle(ctx, p0.ex, p0.ey, p0.er, p0.ed, counter + 0  , pts.er)

    ctx.beginPath()
    ctx.arc(p0.ax, p0.ay, p0.ar, 0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()

    joinCircles(ctx, bx, by, br, bAx, bAy, p0.r0)
    joinCircles(ctx, bx, by, br, bBx, bBy, p0.r0)
    joinCircles(ctx, bx, by, br, bCx, bCy, p0.r0)
    joinCircles(ctx, bx, by, br, bDx, bDy, p0.r0)
    joinCircles(ctx, cx, cy, cr, cAx, cAy, p0.r0)
    joinCircles(ctx, cx, cy, cr, cBx, cBy, p0.r0)
    joinCircles(ctx, cx, cy, cr, cCx, cCy, p0.r0)
    joinCircles(ctx, cx, cy, cr, cDx, cDy, p0.r0)
    joinCircles(ctx, cx, cy, cr, cEx, cEy, p0.r0)
    joinCircles(ctx, cx, cy, cr, cFx, cFy, p0.r0)
    joinCircles(ctx, dx, dy, dr, dAx, dAy, p0.r0)
    joinCircles(ctx, dx, dy, dr, dBx, dBy, p0.r0)
    joinCircles(ctx, dx, dy, dr, dCx, dCy, p0.r0)
    joinCircles(ctx, ex, ey, er, eAx, eAy, p0.r0)
    joinCircles(ctx, ex, ey, er, eBx, eBy, p0.r0)
    joinCircles(ctx, ex, ey, er, eCx, eCy, p0.r0)
    

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

    const originPoints =
      { ax: 500, ay: 500, ar: 166
      , bx: 310, by: 310, br: 95, bd: 30
      , cx: 690, cy: 310, cr: 95, cd: 30
      , dx: 310, dy: 690, dr: 95, dd: 30
      , ex: 690, ey: 690, er: 95, ed: 30
      , r0: 60
      , bAx: 120, bAy: 360
      , bBx: 120, bBy: 240
      , bCx: 240, bCy: 120
      , bDx: 360, bDy: 120
      , cAx: 540, cAy: 120
      , cBx: 660, cBy: 120
      , cCx: 780, cCy: 120
      , cDx: 880, cDy: 220 
      , cEx: 880, cEy: 340
      , cFx: 880, cFy: 460
      , dAx: 120, dAy: 760
      , dBx: 120, dBy: 880
      , dCx: 240, dCy: 880
      , eAx: 760, eAy: 880
      , eBx: 880, eBy: 880
      , eCx: 880, eCy: 760
      }
    
  

    let counter = 0;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    let animationFrameId;

    async function render(points) {
      const newPoints = draw(context, originPoints, counter, points)
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






function drawCircle(ctx, x0, y0, r0, d0, counter, r) {
  let newR;
  if (Math.random() < 0.5) {
    newR = (Math.abs(r + 1 - r0) > 5) ? r : r + 1 
  } else {
    newR = (Math.abs(r - 1 - r0) > 5) ? r : r - 1
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


function drawCircleSmall(ctx, x, y, r) {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2*Math.PI)
  ctx.fill()
  ctx.stroke()
  return [x, y]
}
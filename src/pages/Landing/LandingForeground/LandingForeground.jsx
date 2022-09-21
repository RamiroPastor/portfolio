/* eslint-disable no-unused-vars */
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

    ctx.clearRect(-ctx.canvas.width, -ctx.canvas.height, 2*ctx.canvas.width, 2*ctx.canvas.height)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.width / 2)
    // ctx.scale(1, -1)
    ctx.fillStyle = "#ffffff"
    ctx.strokeStyle = "silver"
    ctx.lineWidth = 2

    function drawCircleWithImage(ctx, r, q, xAcc, yAcc, xVel, yVel, img) {
      const [x, y] = drawCircleSmall(ctx, r, q, xAcc, yAcc, xVel, yVel);
      drawCenteredImage(ctx, img, x, y);
      return [x, y]
    }

    const [bAx, bAy] = drawCircleWithImage(ctx, p0.r0, "q1", p0.bAxAcc, p0.bAyAcc, p0.bAxVel, p0.bAyVel, math_homomorfism)
    const [bBx, bBy] = drawCircleWithImage(ctx, p0.r0, "q1", p0.bBxAcc, p0.bByAcc, p0.bBxVel, p0.bByVel, math_normal)
    const [bCx, bCy] = drawCircleWithImage(ctx, p0.r0, "q1", p0.bCxAcc, p0.bCyAcc, p0.bCxVel, p0.bCyVel, math_settheory)
    const [bDx, bDy] = drawCircleWithImage(ctx, p0.r0, "q1", p0.bDxAcc, p0.bDyAcc, p0.bDxVel, p0.bDyVel, math_euler)
    const [cAx, cAy] = drawCircleWithImage(ctx, p0.r0, "q2", p0.cAxAcc, p0.cAyAcc, p0.cAxVel, p0.cAyVel, web_html)
    const [cBx, cBy] = drawCircleWithImage(ctx, p0.r0, "q2", p0.cBxAcc, p0.cByAcc, p0.cBxVel, p0.cByVel, web_svg)
    const [cCx, cCy] = drawCircleWithImage(ctx, p0.r0, "q2", p0.cCxAcc, p0.cCyAcc, p0.cCxVel, p0.cCyVel, web_sass)
    const [cDx, cDy] = drawCircleWithImage(ctx, p0.r0, "q2", p0.cDxAcc, p0.cDyAcc, p0.cDxVel, p0.cDyVel, web_react)
    const [cEx, cEy] = drawCircleWithImage(ctx, p0.r0, "q2", p0.cExAcc, p0.cEyAcc, p0.cExVel, p0.cEyVel, web_nodejs)
    const [cFx, cFy] = drawCircleWithImage(ctx, p0.r0, "q2", p0.cFxAcc, p0.cFyAcc, p0.cFxVel, p0.cFyVel, web_css)
    const [dAx, dAy] = drawCircleWithImage(ctx, p0.r0, "q3", p0.dAxAcc, p0.dAyAcc, p0.dAxVel, p0.dAyVel, game_blizzard)
    const [dBx, dBy] = drawCircleWithImage(ctx, p0.r0, "q3", p0.dBxAcc, p0.dByAcc, p0.dBxVel, p0.dByVel, game_ps1)
    const [dCx, dCy] = drawCircleWithImage(ctx, p0.r0, "q3", p0.dCxAcc, p0.dCyAcc, p0.dCxVel, p0.dCyVel, game_lol)
    const [eAx, eAy] = drawCircleWithImage(ctx, p0.r0, "q4", p0.eAxAcc, p0.eAyAcc, p0.eAxVel, p0.eAyVel, lang_python)
    const [eBx, eBy] = drawCircleWithImage(ctx, p0.r0, "q4", p0.eBxAcc, p0.eByAcc, p0.eBxVel, p0.eByVel, lang_js)
    const [eCx, eCy] = drawCircleWithImage(ctx, p0.r0, "q4", p0.eCxAcc, p0.eCyAcc, p0.eCxVel, p0.eCyVel, lang_haskell)

    const [bx, by, br] = drawCircle(ctx, p0.bx, p0.by, p0.br, p0.bd, counter + 180, pts.br)
    const [cx, cy, cr] = drawCircle(ctx, p0.cx, p0.cy, p0.cr, p0.cd, counter + 270, pts.cr)
    const [dx, dy, dr] = drawCircle(ctx, p0.dx, p0.dy, p0.dr, p0.dd, counter + 90 , pts.dr)
    const [ex, ey, er] = drawCircle(ctx, p0.ex, p0.ey, p0.er, p0.ed, counter + 0  , pts.er)


    ctx.globalCompositeOperation = "destination-over";
    // joinCircles(ctx, bx, by, br, bAx, bAy, p0.r0)
    // joinCircles(ctx, bx, by, br, bBx, bBy, p0.r0)
    // joinCircles(ctx, bx, by, br, bCx, bCy, p0.r0)
    // joinCircles(ctx, bx, by, br, bDx, bDy, p0.r0)
    // joinCircles(ctx, cx, cy, cr, cAx, cAy, p0.r0)
    // joinCircles(ctx, cx, cy, cr, cBx, cBy, p0.r0)
    // joinCircles(ctx, cx, cy, cr, cCx, cCy, p0.r0)
    // joinCircles(ctx, cx, cy, cr, cDx, cDy, p0.r0)
    // joinCircles(ctx, cx, cy, cr, cEx, cEy, p0.r0)
    // joinCircles(ctx, cx, cy, cr, cFx, cFy, p0.r0)
    // joinCircles(ctx, dx, dy, dr, dAx, dAy, p0.r0)
    // joinCircles(ctx, dx, dy, dr, dBx, dBy, p0.r0)
    // joinCircles(ctx, dx, dy, dr, dCx, dCy, p0.r0)
    // joinCircles(ctx, ex, ey, er, eAx, eAy, p0.r0)
    // joinCircles(ctx, ex, ey, er, eBx, eBy, p0.r0)
    // joinCircles(ctx, ex, ey, er, eCx, eCy, p0.r0)
    ctx.globalCompositeOperation = "source-over";

    ctx.beginPath()
    ctx.arc(p0.ax, p0.ay, p0.ar, 0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()    

    joinCircles(ctx, p0.ax, p0.ay, p0.ar, bx, by, br)
    joinCircles(ctx, p0.ax, p0.ay, p0.ar, cx, cy, cr)
    joinCircles(ctx, p0.ax, p0.ay, p0.ar, dx, dy, dr)
    joinCircles(ctx, p0.ax, p0.ay, p0.ar, ex, ey, er)

    ctx.font = "normal small-caps bold 18px Montserrat"
    ctx.fillStyle = "#550044"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Maths", bx, by)
    ctx.fillText("Web"  , cx, cy)
    ctx.fillText("Games", dx, dy)
    ctx.fillText("Code" , ex, ey)

    return (
      { bx, by, br
      , cx, cy, cr
      , dx, dy, dr
      , ex, ey, er
      })
  }


  useEffect( () => {


    const originPoints =
      { ax: 0, ay: 0, ar: 166
      , bx: -190, by: -190, br: 75, bd: 30
      , cx:  190, cy: -190, cr: 75, cd: 30
      , dx: -190, dy:  190, dr: 75, dd: 30
      , ex:  190, ey:  190, er: 75, ed: 30
      , r0: 60
      , bAxAcc: [0], bAyAcc: [0], bAxVel: [], bAyVel: []
      , bBxAcc: [0], bByAcc: [0], bBxVel: [], bByVel: []
      , bCxAcc: [0], bCyAcc: [0], bCxVel: [], bCyVel: []
      , bDxAcc: [0], bDyAcc: [0], bDxVel: [], bDyVel: []
      , cAxAcc: [0], cAyAcc: [0], cAxVel: [], cAyVel: []
      , cBxAcc: [0], cByAcc: [0], cBxVel: [], cByVel: []
      , cCxAcc: [0], cCyAcc: [0], cCxVel: [], cCyVel: []
      , cDxAcc: [0], cDyAcc: [0], cDxVel: [], cDyVel: [] 
      , cExAcc: [0], cEyAcc: [0], cExVel: [], cEyVel: []
      , cFxAcc: [0], cFyAcc: [0], cFxVel: [], cFyVel: []
      , dAxAcc: [0], dAyAcc: [0], dAxVel: [], dAyVel: []
      , dBxAcc: [0], dByAcc: [0], dBxVel: [], dByVel: []
      , dCxAcc: [0], dCyAcc: [0], dCxVel: [], dCyVel: []
      , eAxAcc: [0], eAyAcc: [0], eAxVel: [], eAyVel: []
      , eBxAcc: [0], eByAcc: [0], eBxVel: [], eByVel: []
      , eCxAcc: [0], eCyAcc: [0], eCxVel: [], eCyVel: []
      }
    
  

    let counter = 0;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    let animationFrameId;

    async function render(points) {
      const newPoints = draw(context, originPoints, counter, points)
      counter += 2;
      await new Promise(r => setTimeout(r, 20));
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
  // let newR;
  // if (Math.random() < 0.5) {
  //   newR = (Math.abs(r + 1 - r0) > 5) ? r : r + 1 
  // } else {
  //   newR = (Math.abs(r - 1 - r0) > 5) ? r : r - 1
  // }

  let newD = (counter % 100 < 50) ? d0 + 1 : d0 - 1;
  
  const alpha = counter * Math.PI / 180;
  const newX = x0 + Math.cos(alpha)*newD
  const newY = y0 + Math.sin(alpha)*newD
  ctx.beginPath()
  ctx.arc(newX, newY, r0, 0, 2*Math.PI)
  ctx.fill()
  ctx.stroke()
  return [newX, newY, r0]
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
    , x - 0.5 * img$$.width
    , y - 0.5 * img$$.height
    )
}


// the next function is based on this post: https://www.sohamkamani.com/blog/2017/09/10/random-line-generation/
function drawCircleSmall(ctx, r, quadrant, xAccList, yAccList, xVelList, yVelList) {

  let xMin, xMax, yMin, yMax;
  
  const min1 = -500 + r;
  const min2 =   50 + r;
  const max1 =  -50 - r;
  const max2 =  500 - r;

  switch (quadrant) {
    case "q1":
      xMin = min1; xMax = max1; yMin = min1; yMax = max1; break;
    case "q2":
      xMin = min2; xMax = max2; yMin = min1; yMax = max1; break;
    case "q3":
      xMin = min1; xMax = max1; yMin = min2; yMax = max2; break;
    case "q4":
      xMin = min2; xMax = max2; yMin = min2; yMax = max2; break;
    default:
      console.log("malformed quadrant name");
      break;
  }

  const sum = (s, n) => s + n 

  function newPositionMaybeBounce(posMin, posMax, accList, velList) {
    const acc = 0.2 * Math.random() - 0.1
    accList.push(acc);
    velList.push(accList.reduce(sum));
    let pos = velList.reduce(sum);
    if (pos < posMin) {
      accList.pop();
      velList.pop();
      accList.push(1);
      velList.push(accList.reduce(sum))
      pos = velList.reduce(sum)
    }
    if (pos > posMax) {
      accList.pop();
      velList.pop();
      accList.push(-1);
      velList.push(accList.reduce(sum))
      pos = velList.reduce(sum)
    }

    return pos
  }


  let x = newPositionMaybeBounce(xMin, xMax, xAccList, xVelList);
  let y = newPositionMaybeBounce(yMin, yMax, yAccList, yVelList);

  if (x < xMin) {x = xMin};
  if (x > xMax) {x = xMax};
  if (y < yMin) {y = yMin};
  if (y > yMax) {y = yMax};

  if (xAccList.length > 10000) {
    xAccList.splice(0, 9000);
    yAccList.splice(0, 9000);
    xVelList.splice(0, 9000);
    yVelList.splice(0, 9000);
  }

  
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2*Math.PI)
  ctx.fill()
  ctx.stroke()
  return [x, y]
}


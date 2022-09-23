{-# LANGUAGE     OverloadedStrings       #-}
{-# OPTIONS_GHC -fno-warn-type-defaults  #-}
{-# OPTIONS_GHC -fno-warn-name-shadowing #-}


module Favicon where

import Text.Blaze.Svg11 ((!))
import Text.Blaze.Svg11 as S
import Text.Blaze.Svg11.Attributes as A
import Text.Blaze.Svg.Renderer.String



infixl 5 .:
(.:) :: (S.AttributeValue -> S.Attribute ) -> Float -> S.Attribute
f .: x = f $ S.toValue x


main :: IO ()
main = compileSvg

compileSvg :: IO ()
compileSvg =
    mapM_ f allSvg
  where
    f (fileName , svgCode) =
      writeFile ("../../../public/assets/img/" ++ fileName) (renderSvg svgCode)


allSvg :: [ (FilePath , Svg) ]
allSvg =
  [ (,) "favicon.svg" circlesWithConnections
  ]


--------------------------------------------------------------------------------

distance :: (Float,Float) -> (Float,Float) -> Float
distance (x1,y1) (x2,y2) = sqrt $ (x2-x1)^2 + (y2-y1)^2

--------------------------------------------------------------------------------

circlesWithConnections :: Svg
circlesWithConnections = 
    docTypeSvg
      ! A.viewbox "0 0 1 1"
      ! A.preserveaspectratio "xMinYMin meet"
      ! A.stroke "indigo"
      $ do
        strokedCircle x0 y0 r0
        strokedCircle x1 y1 r1
        strokedCircle x2 y2 r2
        strokedCircle x3 y3 r3
        strokedCircle x4 y4 r4
        strokedCircle x5 y5 r5
        strokedCircle x6 y6 r6
        strokedCircle x7 y7 r7
        strokedCircle x8 y8 r8
        strokedCircle x9 y9 r9
        S.path
          ! fill "none"
          ! (strokeWidth .: 0.015)
          ! d (mkPath connectingLines)
  where
    rad1 = 0.08
    rad2 = 0.04
    (x0,y0,r0) = (,,)  0.5   0.5   0.15
    (x1,y1,r1) = (,,)  0.18  0.5   rad1
    (x2,y2,r2) = (,,)  0.78  0.3   rad1
    (x3,y3,r3) = (,,)  0.78  0.7   rad1
    (x4,y4,r4) = (,,)  0.18  0.27  rad2
    (x5,y5,r5) = (,,)  0.09  0.70  rad2
    (x6,y6,r6) = (,,)  0.30  0.85  rad2
    (x7,y7,r7) = (,,)  0.55  0.13  rad2
    (x8,y8,r8) = (,,)  0.90  0.10  rad2
    (x9,y9,r9) = (,,)  0.78  0.90  rad2
    strokedCircle c1 c2 radius =
      circle
        ! fill "none"
        ! (strokeWidth .: 0.025)
        ! (cx .: c1) ! (cy .: c2) ! (r .: radius)
    --------------------------------------------------
    connect (p1,p2,radius1) (q1,q2,radius2) =
      let
        d = distance (p1,p2) (q1,q2)
        k1 = radius1 / d
        k2 = radius2 / d
      in do
        m  (k2*p1 + q1 - k2*q1)  (k2*p2 + q2 - k2*q2)
        l  (p1 - k1*p1 + k1*q1)  (p2 - k1*p2 + k1*q2)
    connectingLines = do
      connect (x0,y0,r0) (x1,y1,r1)
      connect (x0,y0,r0) (x2,y2,r2)
      connect (x0,y0,r0) (x3,y3,r3)
      connect (x1,y1,r1) (x4,y4,r4)
      connect (x1,y1,r1) (x5,y5,r5)
      connect (x1,y1,r1) (x6,y6,r6)
      connect (x2,y2,r2) (x7,y7,r7)
      connect (x2,y2,r2) (x8,y8,r8)
      connect (x3,y3,r3) (x9,y9,r9)



--------------------------------------------------------------------------------
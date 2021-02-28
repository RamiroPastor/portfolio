{-# LANGUAGE     OverloadedStrings       #-}
{-# OPTIONS_GHC -fno-warn-type-defaults  #-}
{-# OPTIONS_GHC -fno-warn-name-shadowing #-}


module Svg where

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
      writeFile ("../../assets/img/" ++ fileName) (renderSvg svgCode)


allSvg :: [ (FilePath , Svg) ]
allSvg =
  [ (,) "mosaicInterlacedSquares.svg" interlacedSquaresMosaic
  , (,) "tangentCirclesPaths.svg"     tangentCirclesPaths
  ]



interlacedSquaresMosaic :: Svg
interlacedSquaresMosaic =
    docTypeSvg
      ! A.viewbox "0 0 1 1"
      ! A.preserveaspectratio "xMinYMin meet"
      $ do
        cornerTopLeft
        cornerTopLeft ! A.transform (rotateAround 180 0.5 0.5)
        cornerTopLeft ! A.transform (rotateAround 90  0.25 0.25 <> translate 0.5 0  )
        cornerTopLeft ! A.transform (rotateAround 270 0.25 0.25 <> translate 0   0.5)
  where
    color1 = "rgb(0, 166, 166)"
    color2 = "black"
    s = 0.04
    k1 = 0.08
    k2 = (1/3) * (0.25 - k1 + s)
    (ax, ay) = (0.25 - k1, 0.25 + k1)
    (bx, by) = (0.25 + k1, 0.25 - k1)
    cornerTopLeft =
      S.g 
        ! A.fill "none"
        ! (A.strokeWidth .: 2*s)
        ! A.strokeLinecap "round"
        $ do
          S.path ! A.stroke color1 ! A.d dirs1
          S.path ! A.stroke color2 ! A.d dirs2
          S.path ! A.stroke color1 ! A.d dirs3
          S.rect 
            ! (A.x .: ax - s)
            ! (A.y .: ay - s)
            ! (A.width  .: 2*s)
            ! (A.height .: 2*s)
            ! A.fill color1
    -----------------------------------------------------------
    dirs1 = mkPath $ do
      m   0.25  0
      l   ax    k2
      l   ax    ay
    dirs2 = mkPath $ do
      m   0     0.25
      l   k2    by
      l   bx    by
      l   bx    (0.5 - k2)
      l   0.25  0.5
    dirs3 = mkPath $ do
      m   ax    ay
      l   (0.5 - k2)  ay
      l   0.5  0.25

-------------------------------------------------------------------------------


tangentCirclesPaths :: Svg
tangentCirclesPaths = 
    docTypeSvg
      ! A.viewbox "0 0 1 1"
      ! A.preserveaspectratio "xMinYMin meet"
      $ do
        defs $ do
          topRightBottomLeft
          topLeftBottomRight
          vertical
          horizontal  
        use 
          -- ! A.xlinkHref "#clipCircles-topRightBottomLeft"
          -- ! A.xlinkHref "#clipCircles-topLeftBottomRight"
          -- ! A.xlinkHref "#clipCircles-vertical"
          ! A.xlinkHref "#clipCircles-horizontal" 
          ! A.fill "crimson"
  where
    d = ((sqrt 2) / 4) * tan (pi / 8)
    r = (1 / 2) * tan (pi / 8)
    topRightBottomLeft =
      S.path 
        ! A.id_ "clipCircles-topRightBottomLeft" 
        ! A.d topRightBottomLeftDirs
    topLeftBottomRight =
      S.path 
        ! A.id_ "clipCircles-topLeftBottomRight" 
        ! A.d topRightBottomLeftDirs
        ! A.transform (rotateAround 90 0.5 0.5)
    vertical = 
      S.path
        ! A.id_ "clipCircles-vertical"
        ! A.d verticalDirs
    horizontal =
      S.path 
        ! A.id_ "clipCircles-horizontal"
        ! A.d verticalDirs
        ! A.transform (rotateAround 90 0.5 0.5)
    topRightBottomLeftDirs = mkPath $ do
      m   0.5   0.25
      aa  0.25  0.25  0  True  True  0.75  0.5
      aa  0.25  0.25  0  False False 0.5   0.75
      aa  0.25  0.25  0  True  True  0.25  0.5
      aa  0.25  0.25  0  False False 0.5   0.25 
    verticalDirs = mkPath $ do
      m   (0.5 - d)  (0.5 - d)
      aa  r  r  0  True  True  (0.5 + d) (0.5 - d)
      aa  r  r  0  False False (0.5 + d) (0.5 + d)
      aa  r  r  0  True  True  (0.5 - d) (0.5 + d)
      aa  r  r  0  False False (0.5 - d) (0.5 - d)


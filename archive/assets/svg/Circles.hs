{-# LANGUAGE     OverloadedStrings       #-}
{-# OPTIONS_GHC -fno-warn-type-defaults  #-}
{-# OPTIONS_GHC -fno-warn-name-shadowing #-}


module Circles where

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
  [ (,) "circlesTopRightBottomLeft.svg" (circles topRightBottomLeft)
  , (,) "circlesTopLeftBottomRight.svg" (circles topLeftBottomRight)
  , (,) "circlesVertical.svg"           (circles vertical)
  , (,) "circlesHorizontal.svg"         (circles horizontal)
  ]


-------------------------------------------------------------------------------

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
  where
    d = ((sqrt 2) / 4) * tan (pi / 8)
    r = (1 / 2) * tan (pi / 8)



circles :: Svg -> Svg
circles = 
    docTypeSvg
        ! A.viewbox (S.toValue viewBoxDims)
        ! A.preserveaspectratio "xMinYMin meet"
        ! (A.strokeWidth .: 2*s)
        ! A.stroke "indigo"
        ! A.fill "white"
  where
    s = 0.006
    vMin = 0 - s
    vMax = 1 + 2*s
    viewBoxDims = 
      show vMin 
      ++ " " ++ show vMin
      ++ " " ++ show vMax
      ++ " " ++ show vMax



topRightBottomLeft :: Svg
topRightBottomLeft =
  S.path 
    ! A.d topRightBottomLeftDirs

topLeftBottomRight :: Svg
topLeftBottomRight =
  S.path 
    ! A.d topRightBottomLeftDirs
    ! A.transform (rotateAround 90 0.5 0.5)

vertical :: Svg
vertical = 
  S.path
    ! A.d verticalDirs

horizontal :: Svg
horizontal =
  S.path 
    ! A.d verticalDirs
    ! A.transform (rotateAround 90 0.5 0.5)


{- CLIP PATHS ARE FUCKING SHIT
tangentCirclesPaths :: Svg
tangentCirclesPaths = 
    docTypeSvg
      ! A.viewbox "0 0 1 1"
      ! A.preserveaspectratio "xMinYMin meet"
      ! A.width "0"
      ! A.height "0"
      $ do
        defs $ do
          topRightBottomLeft 
          topLeftBottomRight 
          vertical           
          horizontal         
          S.clippath topRightBottomLeft 
            ! A.clippathunits "objectBoundingBox"
            ! A.id_ "clipCircles-topRightBottomLeft"
          S.clippath topLeftBottomRight 
            ! A.clippathunits "objectBoundingBox"
            ! A.id_ "clipCircles-topLeftBottomRight"
          S.clippath vertical           
            ! A.clippathunits "objectBoundingBox"
            ! A.id_ "clipCircles-vertical"
          S.clippath horizontal         
            ! A.clippathunits "objectBoundingBox"
            ! A.id_ "clipCircles-horizontal"
        use 
          -- ! A.xlinkHref "#circles-topRightBottomLeft"
          -- ! A.xlinkHref "#circles-topLeftBottomRight"
          -- ! A.xlinkHref "#circles-vertical"
          ! A.xlinkHref "#circles-horizontal" 
          ! A.fill "crimson"
  where
    d = ((sqrt 2) / 4) * tan (pi / 8)
    r = (1 / 2) * tan (pi / 8)
    topRightBottomLeft =
      S.path 
        ! A.id_ "circles-topRightBottomLeft" 
        ! A.d topRightBottomLeftDirs
    topLeftBottomRight =
      S.path 
        ! A.id_ "circles-topLeftBottomRight" 
        ! A.d topRightBottomLeftDirs
        ! A.transform (rotateAround 90 0.5 0.5)
    vertical = 
      S.path
        ! A.id_ "circles-vertical"
        ! A.d verticalDirs
    horizontal =
      S.path 
        ! A.id_ "circles-horizontal"
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
-}

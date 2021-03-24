{-# LANGUAGE     OverloadedStrings       #-}
{-# OPTIONS_GHC -fno-warn-type-defaults  #-}
{-# OPTIONS_GHC -fno-warn-name-shadowing #-}


module Mosaics where

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
  [ (,) "mosaicPajarita.svg"            pajaritaNazaríMosaic
  , (,) "mosaicInterlacedSquares.svg"   interlacedSquaresMosaic
  , (,) "mosaicBee.svg"                 beeHiveMosaic
  , (,) "mosaicGeo.svg"                 geometricalMosaic
  ]


-------------------------------------------------------------------------------


pajaritaNazaríMosaic :: Svg
pajaritaNazaríMosaic =
    docTypeSvg
      ! A.viewbox      (S.toValue $ "0 0 1 " ++ show (2*h))
      ! A.preserveaspectratio "xMinYMin meet"
      ! A.fill "black"
      $ do
        pajarita
        pajarita          ! A.transform (translate  1       0   )
        pajarita          ! A.transform (translate  (-0.5)  h   )
        pajarita          ! A.transform (translate  0.5     h   )
        pajarita          ! A.transform (translate  (-0.5)  (-h))
        pajaritaInvertida
        pajaritaInvertida ! A.transform (translate  (-1)    0   )
        pajaritaInvertida ! A.transform (translate  (-0.5)  (-h))
        pajaritaInvertida ! A.transform (translate  0.5     (-h))
        pajaritaInvertida ! A.transform (translate  0.5     h   )
  where
    h   = (sqrt 3) / 2
    apt = h / 3
    ax = 0.5
    ay = 0
    bx = 1
    by = h
    cx = 0
    cy = h
    dx = 0.5
    dy = 2*h
    mid x y = (x + y) / 2
    pajarita =
      S.path
        ! A.strokeWidth "0"
        ! A.fill        "rgb(235,235,235)"
        ! A.d           upperDirs
    pajaritaInvertida =
      S.path
        ! A.strokeWidth "0"
        ! A.fill        "transparent"
        ! A.d           lowerDirs
    upperDirs =
      mkPath $ do
        m   ax   ay
        aa  apt  apt  0  False  True    (mid ax bx)  (mid ay by)
        aa  apt  apt  0  False  False   bx           by
        aa  apt  apt  0  False  True    (mid bx cx)  (mid by cy)
        aa  apt  apt  0  False  False   cx           cy
        aa  apt  apt  0  False  True    (mid ax cx)  (mid ay cy)
        aa  apt  apt  0  False  False   ax           ay
    lowerDirs =
      mkPath $ do
        m   bx   by
        aa  apt  apt  0  False  True    (mid bx dx)  (mid by dy)
        aa  apt  apt  0  False  False   dx           dy
        aa  apt  apt  0  False  True    (mid cx dx)  (mid cy dy)
        aa  apt  apt  0  False  False   cx           cy
        aa  apt  apt  0  False  True    (mid bx cx)  (mid by cy)
        aa  apt  apt  0  False  False   bx           by
        S.z

-------------------------------------------------------------------------------


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

    
--------------------------------------------------------------------------------


geometricalMosaic :: Svg
geometricalMosaic =
    docTypeSvg
      ! A.viewbox "0 0 1 1"
      ! A.preserveaspectratio "xMinYMin meet"
      ! A.stroke "silver"
      ! A.fill   "silver"
      $ do
        corner
        corner ! A.transform (rotateAround 90  0.5 0.5)
        corner ! A.transform (rotateAround 180 0.5 0.5)
        corner ! A.transform (rotateAround 270 0.5 0.5)
        semicircunference
        semicircunference ! A.transform (rotateAround 180 0.5 0.5)
        semihexagon
        semihexagon ! A.transform (rotateAround 180 0.5 0.5)
        pentagonSide ! A.transform (rotateAround (180 + 0  ) 0.5 0.5)
        pentagonSide ! A.transform (rotateAround (180 + 72 ) 0.5 0.5)
        pentagonSide ! A.transform (rotateAround (180 + 144) 0.5 0.5)
        pentagonSide ! A.transform (rotateAround (180 + 216) 0.5 0.5)
        pentagonSide ! A.transform (rotateAround (180 + 288) 0.5 0.5)
  where
    s = 0.02
    k = 0.12
    --------------------------------------------------
    corner =
      S.path
        ! A.strokeOpacity "0"
        ! A.d cornerDirs
    cornerDirs =
      mkPath $ do
        m   (0.1 - s)  0
        l   (0.1 + s)  0
        l   0          (0.1 + s)
        l   0          (0.1 - s)
        S.z
    --------------------------------------------------
    semicircunference =
      S.path
        ! A.fillOpacity "0"
        ! (A.strokeWidth .: 1.5*s)
        ! A.d semicircunferenceDirs
    semicircunferenceDirs =
      mkPath $ do
        m   0  (0.5 - k)
        aa  k  k  0  True True 0  (0.5 + k)
    --------------------------------------------------
    r1 = k + s
    r2 = k - s
    cos60 = 0.5
    sin60 = 0.5 * sqrt 3
    semihexagon =
      S.path
        ! A.strokeOpacity "0"
        ! A.d semihexagonDirs
    semihexagonDirs =
      mkPath $ do
        m   (0.5 - r1)          0
        l   (0.5 - r1 * cos60)  (r1 * sin60)
        l   (0.5 + r1 * cos60)  (r1 * sin60)
        l   (0.5 + r1)          0
        l   (0.5 + r2)          0
        l   (0.5 + r2 * cos60)  (r2 * sin60)
        l   (0.5 - r2 * cos60)  (r2 * sin60)
        l   (0.5 - r2)          0
        S.z
    --------------------------------------------------
    α = (180 - 90 - 36) * pi / 180
    -- α = 180 - 90 - 36
    pentagonSide =
      S.path
        ! A.strokeOpacity "0"
        ! A.d pentagonSideDirs
    pentagonSideDirs =
      mkPath $ do
        m   (0.5 - r1 * cos α)  (0.5 + r1 * sin α)
        l   (0.5 + r1 * cos α)  (0.5 + r1 * sin α)
        l   (0.5 + r2 * cos α)  (0.5 + r2 * sin α)
        l   (0.5 - r2 * cos α)  (0.5 + r2 * sin α)
        S.z


--------------------------------------------------------------------------------


beeHiveMosaic :: Svg
beeHiveMosaic = do
    docTypeSvg
      ! A.viewbox      (S.toValue $ "0 0 1 " ++ show (3*rad))
      ! A.preserveaspectratio "xMinYMin meet"
      $ do
        defs honeyGradient
        hexagon
  where
    apt = 0.5                        -- apotema
    rad = (2 / sqrt 3) * apt         -- radio
    aux = sqrt $ rad ^ 2 - apt ^ 2   -- proyeccion en el eje vertical
    hexagon =
      S.path
        ! A.strokeLinecap "round"
        ! A.strokeWidth   "0.05"
        ! A.stroke        "rgb(255,255,155)"
        ! A.fill          "url(#svg-honey-gradient)"
        ! A.d             hexagonDirs
    hexagonDirs =
      mkPath $ do
        m   0.5  (  3 * rad + 0.05)   -- plus epsilon
        l   0.5  (2.5 * rad)
        m   0.5  0
        l   0.5  (0.5 * rad)
        l   0    (0.5 * rad + aux)
        l   0    (1.5 * rad + aux)
        l   0.5  (2.5 * rad)
        l   1    (1.5 * rad + aux)
        l   1    (0.5 * rad + aux)
        l   0.5  (0.5 * rad)
    honeyGradient =
      radialgradient
        -- ! A.spreadmethod "reflect"
        ! A.cx "30%"
        ! A.cy "70%"
        ! A.r  "50%"
        ! A.fx "50%"
        ! A.fy "60%"
        ! A.id_ "svg-honey-gradient"
        $ do
          stop
            ! A.offset "0%"
            ! A.style  "stop-color: rgba(255,255,255,0.3)"
          stop
            ! A.offset "25%"
            ! A.style  "stop-color: rgba(255,255,0,0.4)"
          stop
            ! A.offset "50%"
            ! A.style  "stop-color: rgba(255,215,0,0.4)"
          stop
            ! A.offset "100%"
            ! A.style  "stop-color: rgba(255,140,0,0.4)"



--------------------------------------------------------------------------------
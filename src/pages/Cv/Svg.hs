{-# LANGUAGE     OverloadedStrings       #-}
{-# OPTIONS_GHC -fno-warn-type-defaults  #-}
{-# OPTIONS_GHC -fno-warn-name-shadowing #-}


module Svg where

import Text.Blaze.Svg11 ((!))
import Text.Blaze.Svg11 as S
import Text.Blaze.Svg11.Attributes as A
import Text.Blaze.Svg.Renderer.String



-- infixl 5 .:
-- (.:) :: (S.AttributeValue -> S.Attribute ) -> Float -> S.Attribute
-- f .: x = f $ S.toValue x


main :: IO ()
main = compileSvg

compileSvg :: IO ()
compileSvg =
    mapM_ f allSvg
  where
    f (fileName , svgCode) =
      writeFile ("assets/" ++ fileName) (renderSvg $ docTypeSvg svgCode)


allSvg :: [ (FilePath , Svg) ]
allSvg =
  [ (,) "mosaicPajarita.svg" pajaritaNazaríMosaic
  ]



pajaritaNazaríMosaic :: Svg
pajaritaNazaríMosaic =
    svg
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


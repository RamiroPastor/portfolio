{-# LANGUAGE OverloadedStrings #-}


module Main where

import SvgIcons.Core.Render
import SvgIcons.Images.Mosaics



main :: IO ()
main = do
  renderMosaics




renderMosaics :: IO ()
renderMosaics =
  renderSvgFiles 
    "./src/assets/mosaics/"
    [ (,) "nazariMosaic"       (nazariMosaic "mistyrose" "gainsboro")
    , (,) "triReligiousMosaic" (triReligiousMosaic "transparent" "orange" "green")
    , (,) "hexagonsMosaic"     (hexagonsMosaic "navy" "none")
    , (,) "beehiveMosaic"       beehiveMosaic
    , (,) "lemonsMosaic"       (lemonsMosaic "gold")
    , (,) "arabicMosaic"       (arabicMosaic "blue" "brown")
    , (,) "peopleMosaic"       (peopleMosaic "silver" "white")
    , (,) "hexMosaic"          (hexMosaic    "limegreen")
    , (,) "arrowsMosaic"       (arrowsMosaic "orange")
    , (,) "wiresMosaic"        (wiresMosaic  "gray")
    , (,) "curvesMosaic"        curvesMosaic
    , (,) "airplaneMosaic"     (airplaneMosaic "deepskyblue")
    ]
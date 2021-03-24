{-# LANGUAGE     OverloadedStrings       #-}
{-# OPTIONS_GHC -fno-warn-type-defaults  #-}
{-# OPTIONS_GHC -fno-warn-name-shadowing #-}


module NavIcons where

import Text.Blaze.Svg11 ((!))
import Text.Blaze.Svg11 as S
import Text.Blaze.Svg11.Attributes as A
import Text.Blaze.Svg.Renderer.Pretty



infixl 5 .:
(.:) :: (S.AttributeValue -> S.Attribute ) -> Float -> S.Attribute
f .: x = f $ S.toValue x


main :: IO ()
main = compileSvg

compileSvg :: IO ()
compileSvg =
    mapM_ f allSvg
  where
    f (name , svgCode) =
      writeFile 
        ("../../assets/svg/" ++ name ++ ".jsx") 
        ("export const " ++ name ++ "Svg = \n" ++ renderSvg svgCode)


allSvg :: [ (FilePath , Svg) ]
allSvg =
  [ (,) "home"     company
  , (,) "job"      briefcase
  , (,) "carnet"   carnet
  , (,) "envelope" envelope
  ]


--------------------------------------------------------------------------------

company :: S.Svg
company =
    svg
      ! A.viewbox "0 0 1 1"
      ! A.preserveaspectratio "xMinYMin meet"
      $ do
        leftBuilding
        leftWindows
        leftDoor
        rightBuilding
        rightWindows
  where
    w = 0.02
    x1 = 0.12
    x2 = x1 + 0.1
    x3 = x4 - 0.1
    x4 = 0.6
    x5 = 1 - x1
    y1 = 0.10
    y2 = 0.15
    y3 = (y1 + y4) / 2
    y4 = 0.35
    y5 = y4 + 0.05
    y6 = y7 - 0.05
    y7 = 1 - y1
    doorH = 0.12
    ----------------------------------------
    leftBuilding =
      S.path
        ! d leftBuildingPath
        ! (strokeWidth .: 2*w)
        ! fill "none"
    leftBuildingPath =
      mkPath $ do
        m   x1  y7
        l   x1  y2
        l   x2  y2
        l   x2  y1
        l   x3  y1
        l   x3  y2
        l   x4  y2
        l   x4  y7
        S.z
    rightBuilding =
      S.path
        ! d rightBuildingPath
        ! (strokeWidth .: 2*w)
        ! fill "none"
    rightBuildingPath =
      mkPath $ do
        m   x4  y4
        l   x5  y4
        l   x5  y7
        l   x4  y7
    ----------------------------------------
    leftDoor =
      S.path
        ! d (mkPath $   m ((x1+x4)/2) y7 >> l ((x1+x4)/2) (y7 - doorH) )
        ! strokeWidth "0.08"
        ! fill "none"
    ----------------------------------------
    k1 = (x3 - x2) / 3
    leftWindows =
      S.path
        ! d leftWindowsPath
        ! (strokeWidth .: 2*w)
        ! strokeDasharray (S.toValue $ (show $ 3*w) ++ " " ++ (show w))
        ! fill "none"
    leftWindowsPath =
      mkPath $ do
        m   (x2 + 0*k1)  y3
        l   (x2 + 0*k1)  y6
        m   (x2 + 1*k1)  y3
        l   (x2 + 1*k1)  (y7 - doorH)
        m   (x2 + 2*k1)  y3
        l   (x2 + 2*k1)  (y7 - doorH)
        m   (x2 + 3*k1)  y3
        l   (x2 + 3*k1)  y6
    ----------------------------------------
    k2 = ((x5-w) - (x4+w)) / 4
    rightWindows =
      S.path
        ! d rightWindowsPath
        ! (strokeWidth .: 2*w)
        ! (strokeDasharray .: 2*w)
        ! fill "none"
    rightWindowsPath =
      mkPath $ do
        m   (x4 + w + 1*k2)  y5
        l   (x4 + w + 1*k2)  y6
        m   (x4 + w + 2*k2)  y5
        l   (x4 + w + 2*k2)  y6
        m   (x4 + w + 3*k2)  y5
        l   (x4 + w + 3*k2)  y6


--------------------------------------------------------------------------------


briefcase :: Svg
briefcase = 
    svg
      ! A.viewbox "0 0 1 1"
      ! A.preserveaspectratio "xMinYMin meet"
      $ do
        handle
        topPart
        midPart
        botPart
        button
  where
    x1 = 0.05
    x2 = 0.35
    x3 = 1 - x2
    x4 = 1 - x1
    y1 = 0.15
    y2 = 0.25
    y3 = 0.5
    y4 = y3 + 0.02
    y5 = 0.85
    r0 = 0.08
    r1x = 0.03
    r1y = 0.05
    r2x = r1x + (y4 - y3)
    r2y = r1y + (y4 - y3)
    ----------------------------------------
    handle =
      S.path
        ! A.strokeWidth "0.08"
        ! A.fill "none"
        ! A.strokeLinejoin "round"
        ! A.d handlePath
    handlePath = mkPath $ do
      m   x2   (y2 + 0.1)
      l   x2   y1
      l   x3   y1
      l   x3   (y2 + 0.1)
    ----------------------------------------
    topPart =
      S.path
        ! A.stroke "none"
        ! A.d topPartPath
    topPartPath = mkPath $ do
      m   x1          (y3 - r2y)
      l   x1          (y2 + r0)
      aa  r0  r0  0   False  True  (x1 + r0)  y2
      l   (x4 - r0)   y2
      aa  r0  r0  0   False  True  x4  (y2 + r0)
      l   x4          (y3 - r2y)
      S.z
    ----------------------------------------
    midPart =
      S.path
        ! A.stroke "none"
        ! A.strokeWidth "0"
        ! A.d midPartPath
    midPartPath = mkPath $ do
      m   x1           (y3 - r2y - 0.01)
      l   x4           (y3 - r2y - 0.01)
      l   x4           y3
      l   (0.5 + r2x)  y3
      aa  r2x  r2y  0  True  False  (0.5 - r2x)  y3
      l   x1           y3
      l   x1           (y3 - r2y - 0.01)
      m   x1           y4
      l   (0.5 - r2x)  y4
      aa  r2x  r2y  0  True  False  (0.5 + r2x)  y4
      l   x4           y4
      l   x4           (y4 + r2y + 0.01)
      l   x1           (y4 + r2y + 0.01)
      l   x1           y4
    ----------------------------------------
    botPart =
      S.path
        ! A.stroke "none"
        ! A.strokeLinejoin "round"
        ! A.d botPartPath
    botPartPath = mkPath $ do
      m   x1         (y4 + r2y)
      l   x1         (y5 - r0)
      aa  r0         r0   0  False  False  (x1 + r0)  y5
      l   (x4 - r0)  y5
      aa  r0         r0   0  False  False  x4  (y5 - r0)
      l   x4         (y4 + r2y)
      S.z
    ----------------------------------------
    button =
      S.ellipse
        ! (A.cx .: 0.5)
        ! (A.cy .: (y3 + y4)/2 )
        ! (A.rx .: r1x)
        ! (A.ry .: r1y)
        ! A.stroke "none"
    ----------------------------------------



--------------------------------------------------------------------------------


carnet :: S.Svg
carnet =
    svg
      ! A.viewbox "0 0 1 1"
      ! A.preserveaspectratio "xMinYMin meet"
      $ do
        cardBorder
        textLines
        photoHead
        photoShoulders
  where
    -- commonColor = "#000"
    ----------------------------------------
    w1 = 0.02
    x1 = 1.618 * y1
    y1 = 0.29
    cardBorder =
      S.path
        ! strokeLinejoin "round"
        ! (strokeWidth .: 2*w1)
        -- ! stroke commonColor
        ! fill   "transparent"
        ! d cardBorderPath
    cardBorderPath =
      mkPath $ do
        m   (0.5 - x1)  (0.5 - y1)
        l   (0.5 + x1)  (0.5 - y1)
        l   (0.5 + x1)  (0.5 + y1)
        l   (0.5 - x1)  (0.5 + y1)
        S.z
    ----------------------------------------
    h1 = 0.38
    h2 = 0.5
    h3 = 0.62
    k1 = 0.58
    k2 = 0.83
    textLines =
      S.path
        ! strokeWidth "0.035"
        -- ! stroke commonColor
        ! strokeLinecap "round"
        ! d textLinesPath
    textLinesPath =
      mkPath $ do
        m k1 h1   >>   l k2 h1
        m k1 h2   >>   l k2 h2
        m k1 h3   >>   l k2 h3
    ----------------------------------------
    q1 = 1 - k2
    q2 = 1 - k1
    qm = (q1+q2)/2
    photoHead =
      circle
        ! (cx .: qm)
        ! (cy .: ((h1+h2)/2))
        ! r "0.07"
        -- ! fill commonColor
        ! stroke "none"
    photoShoulders =
      S.path
        -- ! fill commonColor
        ! d shoulders
        ! stroke "none"
    shoulders =
      mkPath $ do
        m   q1  h3
        aa  (q2 - qm) (q2 - qm) 0 True True q2 h3
        aa  (q2 - qm) 0.025     0 True True q1 h3


--------------------------------------------------------------------------------

envelope :: Svg
envelope =
    svg
      ! A.viewbox "0 0 1 1"
      ! A.preserveaspectratio "xMinYMin meet"
      $ S.path
        ! d envelopePath
        ! fill "none"
        ! (strokeWidth .: 2*s)
        ! strokeLinejoin "round"
  where
    s = 0.03         -- half-width of the stroke
    h = 0.618 - 2*s  -- height of the whole envelope
    k = 0.58         -- y-coordinate of the middle point
    ohShit = (/)
      (0.309 - 2*s + 2*k*s - 0.618*s + 4*s*s - 4*k*s*s)
      (2*k - 2*s - 0.382 - 4*k*s + 4*s*s + 0.764*s)
    (a1,a2) = (,)  s      ((1-h)/2)      -- top left corner
    (b1,b2) = (,)  s      (1 - (1-h)/2)  -- bottom left corner
    (c1,c2) = (,)  (1-s)  (1 - (1-h)/2)  -- bottom right corner
    (d1,d2) = (,)  (1-s)  ((1-h)/2)      -- top right corner
    (e1,e2) = (,)  0.5    k              -- middle point
    (f1,f2) = (,)  ohShit 0.5
    (g1,g2) = (,)  (1-f1) 0.5
    envelopePath = mkPath $ do
      m   a1 a2
      l   b1 b2
      l   c1 c2
      l   d1 d2
      l   a1 a2
      l   e1 e2
      l   d1 d2
      m   b1 b2
      l   f1 f2
      m   c1 c2
      l   g1 g2


--------------------------------------------------------------------------------
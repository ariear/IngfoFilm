import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const CastSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={120}
    height={150}
    viewBox="0 0 120 150"
    backgroundColor="#67686d"
    foregroundColor="#ffffff"
    {...props}
  >
    <Circle cx="50" cy="47" r="44" /> 
    <Rect x="6" y="100" rx="6" ry="6" width="89" height="15" />
  </ContentLoader>
)

export default CastSkeleton
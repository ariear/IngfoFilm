import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const TitleSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={190}
    height={55}
    viewBox="0 0 190 55"
    backgroundColor="#67686d"
    foregroundColor="#ffffff"
    {...props}
  >
    <Rect x="0" y="5" rx="7" ry="7" width="150" height="17" /> 
    <Rect x="0" y="33" rx="6" ry="6" width="120" height="17" />
  </ContentLoader>
)

export default TitleSkeleton

import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const ReviewSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={200}
    viewBox="0 0 280 200"
    backgroundColor="#67686d"
    foregroundColor="#ffffff"
    {...props}
  > 
    <Circle cx="37" cy="31" r="27" /> 
    <Rect x="78" y="14" rx="6" ry="6" width="160" height="16" /> 
    <Rect x="80" y="44" rx="8" ry="8" width="160" height="144" />
  </ContentLoader>
)

export default ReviewSkeleton
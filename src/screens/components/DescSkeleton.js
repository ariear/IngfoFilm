import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const DescSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={250}
    height={140}
    viewBox="0 0 250 140"
    backgroundColor="#67686d"
    foregroundColor="#ffffff"
    {...props}
  >
    <Rect x="0" y="7" rx="7" ry="7" width="245" height="17" /> 
    <Rect x="0" y="33" rx="6" ry="6" width="216" height="17" /> 
    <Rect x="0" y="62" rx="7" ry="7" width="230" height="17" /> 
    <Rect x="0" y="92" rx="6" ry="6" width="195" height="17" />
  </ContentLoader>
)

export default DescSkeleton
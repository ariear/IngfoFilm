import React from "react"
import ContentLoader, { Rect } from "react-content-loader/native"

const ResultCategorySkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={90}
    height={150}
    viewBox="0 0 90 150"
    backgroundColor="#67686d"
    foregroundColor="#ffffff"
    style={{ 
        marginBottom: 15
     }}
    {...props}
  >
    <Rect x="0" y="0" rx="7" ry="7" width="90" height="150" />
  </ContentLoader>
)

export default ResultCategorySkeleton
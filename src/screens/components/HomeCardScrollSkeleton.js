import React from "react"
import ContentLoader, { Rect } from "react-content-loader/native"

const HomeCardScrollSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={150}
    height={220}
    viewBox="0 0 150 220"
    backgroundColor="#67686d"
    foregroundColor="#ffffff"
    style={{ 
      marginRight: 10
     }}
    {...props}
  >
    <Rect x="0" y="0" rx="7" ry="7" width="150" height="220" />
  </ContentLoader>
)

export default HomeCardScrollSkeleton
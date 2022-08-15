import React from "react"
import ContentLoader, { Rect } from "react-content-loader/native"

const CardListSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={190}
    height={150}
    viewBox="0 0 190 150"
    backgroundColor="#67686d"
    foregroundColor="#ffffff"
    {...props}
    style={{ 
        marginBottom: 20
     }}
  > 
    <Rect x="0" y="0" rx="10" ry="10" width="100" height="150" /> 
    <Rect x="110" y="13" rx="5" ry="5" width="70" height="13" /> 
    <Rect x="110" y="50" rx="5" ry="5" width="60" height="13" /> 
    <Rect x="110" y="70" rx="5" ry="5" width="60" height="13" /> 
    <Rect x="110" y="90" rx="5" ry="5" width="60" height="13" /> 
  </ContentLoader>
)

export default CardListSkeleton
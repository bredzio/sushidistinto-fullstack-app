import React from 'react'
import ContentLoader from 'react-content-loader'

export const Loading = props => {
  return (
    <>
    <div>
    <ContentLoader
      speed={2}
      width={650}
      height={600}
      viewBox="0 0 550 500"
      backgroundColor="#824653"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="172" y="53" rx="0" ry="0" width="2" height="300" />
      <rect x="386" y="55" rx="0" ry="0" width="2" height="300" />
      <rect x="171" y="53" rx="0" ry="0" width="216" height="2" />
      <rect x="171" y="353" rx="0" ry="0" width="216" height="2" />
      <circle cx="277" cy="147" r="44" />
      <rect x="174" y="53" rx="0" ry="0" width="216" height="41" />
      <rect x="198" y="207" rx="0" ry="0" width="160" height="9" />
      <rect x="231" y="236" rx="0" ry="0" width="92" height="9" />
      <rect x="206" y="324" rx="0" ry="0" width="146" height="51" />
    </ContentLoader>
    </div>
    </>
  )
}


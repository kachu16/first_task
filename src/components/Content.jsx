import React from 'react'
import NavigationList from './NavigationList'
import InnerContent from './InnerContent'

function Content() {
  return (
    <div id='content'>
        <NavigationList/>
        <InnerContent/>
    </div>
  )
}

export default Content
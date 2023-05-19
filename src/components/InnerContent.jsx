import React from 'react'
import GroupContainer from './GroupContainer'
import Posts from './Posts'

function InnerContent() {
  return (
    <div id="inner_container_2">
        <Posts/>
        <GroupContainer/>
    </div>
  )
}

export default InnerContent
import React from 'react'
import '../assets/css/Posts.css';

import post_data from './constants';


import dotsIcon from "../static/icons/dots.svg"
import viewIcon from "../static/icons/views.svg"
import shareIcon from "../static/icons/share.svg"
import locationIcon from "../static/icons/location.svg";
import DropdownMenu from './DropdownMenu';




function Posts() {
  return (
    <div className="post_container">

      {
        post_data.map((post, index) => (
          <div className="post">
          {
            post.postImg && <img src={post.postImg} alt="post" />
          }
            <div>
              <span className="post_type">{post.title}</span>
            <span>
              <span className="post_title">
                {post.heading}
              </span>
              <DropdownMenu/>

            </span>
            <span className="post_description">
              {post.para}
            </span>
            {
              post.item && (
                <span className="post_details_container">
                <span className="post_details">
                    <span className="postDate">
                        <img src={post.icon} alt="" />
                        &nbsp; {post.item}
                    </span>
                    <span className="postLocation" style={{fontSize:'13px'}}>
                        <img src={locationIcon} alt="" /> {post.location}
                    </span>
                </span>
                <a className="post_website_link" href="/" style={{color: `${post.color}`}}>
                    {post.btn}
                </a>
            </span>
              )
            }
            <span className="post_by_user">
              <span>
                <img src={post.profile} alt="userphoto" />
                <span className="user_name">{post.name}</span>
              </span>
              <span>
                <span className="view_count">
                  <img src={viewIcon} alt="eyeIcon" />
                  <span className="views">1.4k views</span>
                </span>
                <img src={shareIcon} alt="share" />
              </span>
            </span>
          </div>
          </div>
        ))
      }



    </div>

  )
}

export default Posts
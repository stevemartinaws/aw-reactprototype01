import './styles.less'
import React from 'react'
import HeartIcon from './HeartIcon.jsx'

const GridCard = ({Nickname, Summary, ProfileThumbnailURL, Ratings, Town, County, Region, Country, Gender}) => {
//{"https:"+ProfileThumbnailURL}

console.log(Gender)
let FakeProfileImage = 'F001.jpg'
switch (Gender) {
  case 'Male':
    FakeProfileImage = 'M00'+(Math.floor(Math.random() * 5) + 1)+'.jpg'
    break;
  case 'Female':
    FakeProfileImage = 'F00'+(Math.floor(Math.random() * 5) + 1)+'.jpg'
    break;
  case 'Couple MF':
    FakeProfileImage = 'MF00'+(Math.floor(Math.random() * 5) + 1)+'.jpg'
    break;
  case 'Couple MM':
    FakeProfileImage = 'MM00'+(Math.floor(Math.random() * 5) + 1)+'.jpg'
    break;
  case 'Couple FF':
    FakeProfileImage = 'FF00'+(Math.floor(Math.random() * 5) + 1)+'.jpg'
    break;
  }
  return (
    <div className="">
      <div className="profile-card">
        <div className="profile-card-title-container">
          <span className="col-md-10 text-left">
            <h4>{Nickname}</h4>
          </span>
          <span className="col-md-2">
              <HeartIcon />
          </span>

        </div>
        <div className="profile-card-img-container">
          <div className="profile-img-wrapper">
            <img className="profile-img img-responsive" src={'http:'+ProfileThumbnailURL} />
          </div>
        </div>

        <div className="profile-card-details-container">
          <div className="profile-summary">{Summary}</div>
          <div className="profile-location"><p>{Town}{', '}{County}{', '}{Region}{', '}{Country}</p></div>


        </div>
        <div className="profile-card-icons-container">
          <div className="br col-xs-3">
            <i className="fa fa-picture-o fa-2x"></i>
          </div>
          <div className="br col-xs-3">
            <i className="fa fa-picture-o fa-2x"></i>
          </div>
          <div className="br col-xs-3">
            <i className="fa fa-video-camera fa-2x"></i>
          </div>
          <div className="col-xs-3">
              <i className="fa fa-star fa-2x"></i>
              <div>{Ratings.Total}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridCard

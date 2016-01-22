import React from 'react';
import $ from 'jquery';

class HeartIcon extends React.Component {
  componentDidMount(){
$('.heart-icon').hover(function () {
            $(this).removeClass('fa-heart-o');
            $(this).addClass('fa-heart');
        }, function () {
            $(this).removeClass('fa-heart');
            $(this).addClass('fa-heart-o');
        });
  }
  render(){
    return <i className="heart-icon fa fa-heart-o fa-2x"></i>
  }
}

export default HeartIcon;

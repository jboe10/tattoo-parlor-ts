import React from 'react';
import shopPic from '../../images/shopPic.jpg';
import shopPicMed from '../../images/shopPicMed.jpg';

interface AboutProps {

}

export const About: React.FC<AboutProps> = () => {

  return (
    <section className="about-section">
      <div className="about-text">
        <div className="about-title">
          <h2>About</h2>
          <h2>Always</h2>
          <h2>Closed</h2>
        </div>
        <p className="about-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat in metus ut blandit. Nullam in ligula ante. Nam sed maximus odio, vel vulputate dui. Aliquam erat volutpat. Phasellus commodo luctus urna, ac hendrerit erat. 
          Etiam posuere erat sollicitudin aliquam varius. Maecenas tempus felis sed imperdiet vehicula. Praesent eu enim in lorem varius imperdiet. Vivamus iaculis, mauris quis suscipit congue, diam lacus fermentum sem, hendrerit condimentum quam eros a velit. 
          Pellentesque bibendum metus ut vehicula eleifend. Phasellus viverra neque eget rhoncus varius.
          <br/>
          In mattis mauris sit amet felis commodo faucibus. In sit amet ultrices lorem. Aenean commodo eu nisl tempus cursus. Duis at risus tincidunt, elementum leo a, commodo lacus. 
          Vivamus mollis, tellus et scelerisque sodales, urna lorem aliquam libero, non vulputate orci urna sed lacus. 
          In eget nisi quis nisi commodo sodales. Aenean urna velit, lacinia id neque ultrices, rhoncus iaculis sapien. 
          Sed accumsan nisi sit amet ipsum pellentesque, sed tempor turpis tempor.
        </p>
      </div>
      <img src={shopPic} alt="shop" className="shop-pic lrg-pic" />
      <img src={shopPicMed} alt="shop" className="shop-pic sm-pic" />
    </section>
  );
}
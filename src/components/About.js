import React from 'react';

function About({ image, about}){

const imageUrl = image ? image : "https://via.placeholder.com/215";
  return (
    <aside>
      {/* Image element with src and alt attributes */}
      <img src={imageUrl} alt="blog logo" />
      {/* Paragraph element with about text */}
      <p>{about}</p>
    </aside>
  );

}
export default About;

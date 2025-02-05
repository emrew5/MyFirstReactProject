import React from 'react'

function Course({course}) {
    const {id, title, descripton, price, link, image} = course;
  return (
    <div className='course'>
        <div>
            <img src={image} width={250} height={150}/>
            <h4>{title}</h4>
            <h5>{descripton}</h5>
            <h3>{price}</h3>
            <a href={link}>Daha fazla incelemek için tıklayınız.</a>
        </div>
    </div>
  )
}

export default Course
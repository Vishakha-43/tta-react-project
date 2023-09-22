import React from 'react'
import homeImg from './images/mount2.jpg'
import Title from './Title'
const Home = () => {
  return (
    <>
      <section className="section">
      <Title title='home'/>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={homeImg}
            className="about-photo"
            alt="awesome mountains"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
        </article>
      </div>
    </section>
    </>
  )
}

export default Home

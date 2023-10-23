
import './About.css'

const About = () => {
  return (
    <div className='about-container'>

      <div className="about-class1">
        <div className="class1-text">
          <h3>Bikes</h3>
          <p>Bikes, bikes bikes and more bikes</p>
          <button className="button1">View Products</button>
          <button className="button2">View More</button>
        </div>
        <div className="class1-image">
          <img src="/src/assets/images/bike7" alt="" />
        </div>
        
      </div>

      <div className="about-class2">
        <div className="class2-text">
          <h3>Bikes</h3>
          <p>Bikes, bikes bikes and more bikes</p>
        </div>
        <div className="class2-image">
          <img src="/src/assets/images/bike7" alt="" />
        </div>
      </div>

    </div>
  )
}

export default About
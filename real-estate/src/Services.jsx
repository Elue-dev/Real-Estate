import '../src/scss/_services.scss'

function Services() {
    return (
        <div className= "services">
            <h1>Our <span>Services</span></h1>
            <div className="service-box">
                <div className="box">
                    <div className="box-img">
                    <img src="buyhome.png" alt="" />
                    </div>
                    <h2>Buying Home</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos atque incidunt suscipit maiores ratione aliquam, voluptatum est animi officiis.
                    </p>
                    <a href="#" className="btn">Learn More</a>
                </div>

                <div className="box">
                    <img src="renthome.jpg" alt="" />
                    <h2>Renting Home</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quos atque incidunt suscipit maiores ratione aliquam, voluptatum est animi officiis.
                    </p>
                    <p className="btn">Learn More</p>
                </div>

                <div className="box">
                    <img src="sellhome.png" alt="" />
                    <h2>Selling Home</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ut ducimus, a eaque perferendis nobis aut dolore. Aut, natus non.
                    </p>
                    <a href="#" className="btn">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default Services

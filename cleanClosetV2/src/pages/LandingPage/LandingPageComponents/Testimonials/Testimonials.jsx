
import "./Testimonials.css";
import man from "./image/man.png";
import quotation from "./image/quotation-mark.png";
import "swiper/css";
import "swiper/css/autoplay";
const Testimonials = () => {
  return (
    <div className="TestimonialsMainContaierHeader">
      <div className="TestimonialsContainer container">
        <h6 className="work">Testimonials</h6>
        <h1 className="workh1">
          Our Donors are at the heart of our organization
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          voluptatibus!
        </p>

        <div className="TestimonialsContainerCardContainer">
          <div className="TestimonialsContainerCardBody bg-cyan-500" id="cardbody1" data-aos="flip-down" >
            <div className="TestimonialsContainerCardBodyImage">
              <img src={man} alt="" />
            </div>
            <div className="TestimonialsContainerCardBodyContent">
              <div className="TestimonialsContainerCardBCIcon">
                <img src={quotation} alt="" />
              </div>
              <div className="TestimonialsContainerCardBCC">
                <h4>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, dicta?
                </h4>
                <div
                  className="TestimonialsContainerCardBCCdesignation"
                  // valign="bottom"
                >
                  <h6>Minesh</h6>
                  <p className="mt-2">Donated 10kg of </p>
                </div>
              </div>
            </div>
          </div>
          <div className="TestimonialsContainerCardBody" id="cardbody2" data-aos="flip-down">
            <div className="TestimonialsContainerCardBodyImage">
              <img src={man} alt="" />
            </div>
            <div className="TestimonialsContainerCardBodyContent">
              <div className="TestimonialsContainerCardBCIcon">
                <img src={quotation} alt="" />
              </div>
              <div className="TestimonialsContainerCardBCC">
                <h4>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, dicta?
                </h4>
                <div
                  className="TestimonialsContainerCardBCCdesignation"
                  // valign="bottom"
                >
                  <h6>Divyankit</h6>
                  <p className="mt-2">Donated 5kg of </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

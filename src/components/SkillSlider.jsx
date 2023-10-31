import { skills } from "../data";
import Slider from "react-slick";

const SkillSlider = () => {
  var settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {skills.map(({ id, skill, image }) => {
        return (
          <div key={id} className="pl-4 pr-4">
            <img src={image} alt={skill} className="mx-auto" />
            <p className="mt-4 text-center text-primary text-xl uppercase">
              {skill}
            </p>
          </div>
        );
      })}
    </Slider>
  );
};
export default SkillSlider;

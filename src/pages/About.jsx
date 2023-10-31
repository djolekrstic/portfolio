import SkillSlider from "../components/SkillSlider";
import imgAbout from "../assets/about.svg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-24 lg:mt-36 flex items-center justify-between">
        <div className="flex flex-col lg:w-3/5">
          <h2 className="text-white text-5xl">About</h2>
          <p className="mt-8 text-content text-xl leading-10 tracking-wide w-full lg:w-4/5">
            My name is Đorđe Krstić. I am a Junior React Developer, and I'm
            thrilled to showcase my skills and projects to you. I have
            experience building interactive and responsive web applications, and
            I'm always eager to learn and grow. I also enjoy working with other
            developers, as it allows for efficient problem-solving and
            improvement. I am currently attending ITAcademy through online
            classes. The course I am taking is 'Linux Administration'.
          </p>
        </div>
        <img src={imgAbout} alt="about" className="hidden lg:flex w-2/5" />
      </div>
      <div className="my-24 lg:my-36">
        <SkillSlider />
      </div>
    </div>
  );
};
export default About;

import Contact from "../../components/Contact";
import HeroSlider from "./Hero";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slidesData: Slide[] = [
  {
    id: 1,
    image: "/hero1.jpg",
    title: "",
    description: "",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    title: "",
    description: "",
  },
  {
    id: 3,
    image: "/hero3.jpg",
    title: "",
    description: "",
  },
];


const HomePage = () => {
  return (
    <div>
      <HeroSlider slides={slidesData} autoPlay={true} interval={3000} />
      <Contact />
    </div >
  );
};

export default HomePage;

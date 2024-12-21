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
    image: "/image1.webp",
    title: "",
    description: "",
  },
  {
    id: 2,
    image: "/image2.webp",
    title: "",
    description: "",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/1920x500/7fff7f",
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

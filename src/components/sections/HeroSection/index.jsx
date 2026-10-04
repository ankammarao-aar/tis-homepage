import './index.css'

const HeroSection = () => {
  return (
    <section className="flex flex-col">
      <h1 className="text-8xl font-bold text-white pt-48 justify-self-end self-center fixed pl-10">
        LET'S DO it <br /> With Tulas
      </h1>
      <div className="flex flex-row justify-between p-5">
        <img src="/volleyball.webp" alt="volleyball" className="img pl-16 pt-9" />
        <img src="/dance.webp" alt="dance" className="img mt-44 p-8" />
      </div>
      <div className="flex flex-row justify-between p-5">
        <img src="/cricket.webp" alt="cricket" className="img pl-32 pt-9" />
        <img src="/karate.webp" alt="karate" className="size-80 mt-14 mb-72 mr-10 p-8" />
      </div>
      <div className="flex flex-row justify-between p-5">
        <img src="/switching.webp" alt="switching" className="img pl-32 p-20" />
        <img src="/shooting.webp" alt="shooting" className="size-80 p-12" />
      </div>
      <div className="flex flex-row justify-between p-5">
        <img src="/pot.webp" alt="switching" className="img pl-32 p-20" />
        <img src="/drawing.webp" alt="shooting" className="size-80 p-16 mr-14 mt-20" />
      </div>
    </section>
  );
};

export default HeroSection;

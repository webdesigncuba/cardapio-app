import { FaSignInAlt, FaUtensils} from "react-icons/fa";


export default function Home() {
  return (
  <main className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden px-4 sm:px-6 md:px-12">
  {/* Hero Background Section */}
  <div className="absolute inset-0 z-0">
    <div
      className="w-full h-full bg-cover bg-center"
      data-alt="Cinematic, high-quality photograph of a sophisticated restaurant interior. Warm, atmospheric lighting, blurred background showing a chef or waiter in motion, elegant table settings with crystal glassware and fine dining details."
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC7c_I32fYpQhxNw3sA_GAJfd4T4q-Y98YiJFhuroObEeMPw2FU1EPLA9cAeuNB2KrFTT1WXoznqly-_QFnY7g2aPsefSYvnWXlAO1K8RTJaUOCqFr8g45tAL0_v6xLUQh_g-Qsfx_Gnjbcg1U1smNAqji9cB5sJ0CMbsdnboGnobF3gRx6jjdUd23ZaUoo9XeqkKL4g4Xde-uE7kzCUfruj9VPnCv1EdSbh0DxWMg1DLPU-M8o2bw')",
      }}
    ></div>
    <div className="absolute inset-0 hero-gradient"></div>
  </div>

  {/* Header + Content Container */}
  <div className="relative z-10 w-full pt-12 flex flex-col items-center text-center">
    <div className="content-center-max flex flex-col items-center gap-4 md:gap-6">
      <header className="w-full flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-2">
         <FaUtensils className="text-secondary-container text-4xl" />
          <h1 className="text-2xl md:text-4xl text-white tracking-tight font-extrabold uppercase">
            RestoFlow
          </h1>
        </div>
        <div className="h-1 w-12 bg-secondary-container rounded-full my-6"></div>
      </header>

      {/* Value Prop Content */}
      <section className="w-full">
        <h2 className="text-lg md:text-3xl text-white mb-4 leading-tight font-semibold">
          Gerencie seu restaurante com  <span className="text-secondary-fixed">precisão e rapidez.</span>
        </h2>
        <p className="text-sm md:text-base text-white max-w-prose md:max-w-1xl opacity-90 mx-auto">
          A ferramenta definitiva para a hospitalidade profissional. Otimize as operações,
          do PDV à cozinha.
        </p>
      </section>
    </div>
  </div>

  {/* Actions Cluster */}
  <footer className="relative z-10 w-full pb-12 flex flex-col gap-4 items-center mt-8 md:mt-12">
    {/* Primary Action */}
    <button
      className="btn-interact w-full md:w-80 bg-secondary-container text-on-secondary-container h-14 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 shadow-lg"
     
      style={{ filter: "brightness(1)" }}
    >
      <span>Entrar</span>
      <FaSignInAlt className="material-symbols-outlined text-sm">arrow_forward</FaSignInAlt>
    </button>

    {/* Secondary Action */}
    <button
      className="btn-interact w-full md:w-80 bg-white/10 backdrop-blur-md border border-white/20 text-white h-14 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2"
      style={{ filter: "brightness(1)" }}
    >
      <span>Registre sua empresa</span>
    </button>

    {/* Tertiary Mini-links */}
    <div className="flex justify-center gap-6 mt-4 hero-links">
      <a className="font-label-sm text-label-sm text-on-primary-container hover:text-white transition-colors" href="#">
       Solicitar uma demonstração
      </a>
      <span className="w-1 h-1 rounded-full bg-outline-variant mt-2"></span>
      <a className="font-label-sm text-label-sm text-on-primary-container hover:text-white transition-colors" href="#">
        Preços
      </a>
    </div>
  </footer>

  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-container/30 to-transparent"></div>
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent opacity-50"></div>
</main>


  );
}

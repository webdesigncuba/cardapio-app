import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-3">
      {/* Logo centrado */}
      <Image src="/logo1.png" alt="Logo Cardapio" width={200} height={200} />

      {/* Texto centrado */}
      <h4 className="text-3xl font-bold text-center">Bem-vindo ao Cardapio</h4>
      <p className="text-xl text-center ">
        A plataforma inteligente de gestão de restaurantes e administração de
        pequenos negócios que simplifica o dia a dia do seu negócio.
      </p>

      {/* Botones */}
      <div className="flex flex-col w-60 md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-4">
        <button className="px-6 py-2 bg-btn text-white rounded-lg hover:bg-orange-800 transition">
          Entrar
        </button>
        <button className="px-6 py-2 border border-btn text-orange-600 rounded-lg hover:bg-orange-50 transition">
          Criar Conta
        </button>
      </div>
    </div>
  );
}




const Error404 = () => {
  return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-purple-500 text-white text-center px-4">
      <h1 className="text-[120px] font-bold leading-none">404</h1>
      <h2 className="text-2xl font-semibold mt-2">DÉSOLÉ!</h2>
      <p className="text-lg mt-1 mb-6">Erreur interne du serveur!</p>
      <a
        href="/"
        className="text-white font-semibold underline hover:text-gray-200"
      >
        Retour à la maison
      </a>
    </div>
  )
}

export default Error404


import { useState } from "react";

function Ssn() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  const handleSearch = async () => {
    if (!query.trim()) return;

    const apiKey = "5c896e18c7c24e32aae923a7acebd624"; // 🔑 Reemplaza esto con tu clave real
    const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=relevancy&pageSize=50&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error("Error al obtener noticias:", error);
    }
  };

  return (
    <div className="relative h-full min-h-screen w-full overflow-hidden bg-black">
      {/* Fondo de video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover "
        src="/bgv.mp4"
      ></video>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-center px-4 pt-40 space-y-8">
        {/* Título y emoji */}
        <div className="flex items-center gap-4">
          <h1 className="text-8xl font-orbitron font-bold text-white">S S N</h1>
          <span className="text-8xl animate-spin-slow">🌐</span>
        </div>

        {/* Subtítulo */}
        <h2 className="text-3xl font-jura text-blue-200">
          Search science news
        </h2>

        {/* Input de búsqueda */}
        <div className="flex justify-center w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300  placeholder-white  bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Buscar
          </button>
        </div>

        {/* Resultados */}
        <div className="w-full max-w-3xl mt-6 space-y-4">
          {news.length === 0 ? (
            <p className="text-gray-300">No results yet.</p>
          ) : (
            <>
              {news.slice(0, visibleCount).map((article, i) => (
                <div
                  key={i}
                  className="bg-gray-800/40 p-4 rounded-md text-left"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-300">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mt-2 inline-block"
                  >
                    Leer más
                  </a>
                </div>
              ))}

              {/* Botón para ver más noticias */}
              {visibleCount < news.length && (
                <div className="text-center mt-4">
                  <button
                    onClick={() => setVisibleCount(visibleCount + 10)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Ver más
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ssn;

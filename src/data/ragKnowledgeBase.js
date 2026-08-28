/**
 * Base de Conocimiento RAG (Retrieval-Augmented Generation)
 * Extraída de la documentación oficial y guía de experimentos de Kepler Bolivia y Virtual STEM.
 */

export const RAG_KNOWLEDGE_BASE = [
  {
    id: "liderazgo-equipo",
    keywords: ["quienes", "dirigen", "lider", "liderazgo", "rodrigo mariaca", "andres alberdi", "director", "arquitecto", "creadores", "equipo", "umsa"],
    title: "Liderazgo Estratégico y Arquitectura Técnica",
    content: "El proyecto Virtual STEM está bajo la Dirección General del Blgo. Rodrigo Mariaca Cardozo, especialista en Big Data aplicada a la educación. La arquitectura técnica y el motor de simulación matemática rigurosa fueron diseñados por Andrés Alberdi Baptista, graduado en matemática pura por la UMSA (especialista en los Axiomas de Incidencia de Hilbert y Teoremas de Gödel)."
  },
  {
    id: "laboratorios-quimica",
    keywords: ["laboratorios", "practicas", "quimica", "experimentos", "cuantos experimentos", "lista de experimentos", "3ro", "4to", "5to", "6to", "secundaria", "catalogo", "molaridad", "titulacion", "tollens"],
    title: "Catálogo Oficial Completo de 120 Experimentos de Química",
    content: "Virtual STEM incluye un catálogo completo de 120 experimentos virtuales de química catalogados para la educación secundaria en Bolivia, organizados por años escolares:\n" +
      "• 3.º de Secundaria (Bloque 1): 20 prácticas (Densidad de oro/pirita 3.Q.01, Destilación de singani 3.Q.02, Sublimación de yodo 3.Q.11, Pirolisis 3.Q.12, Ensayos a la llama 3.Q.15, etc.)\n" +
      "• 4.º de Secundaria (Bloque 2): 20 prácticas (Leche de magnesia 4.Q.01, Ácido nítrico 4.Q.02, Neutralización de sal 4.Q.03, Azul de Prusia 4.Q.05, Serpiente de Faraón 4.Q.09, etc.)\n" +
      "• 5.º de Secundaria (Bloque 3): 40 prácticas (Semáforo químico 5.Q.01, Permanganometría 5.Q.02, Leyes de gases Boyle/Charles/Gay-Lussac/Dalton 5.Q.07-5.Q.12, Difusión de Graham 5.Q.14, etc.)\n" +
      "• 6.º de Secundaria (Bloque 4): 40 prácticas (Preparación de soluciones molaridad 6.Q.02/5.Q.18, Titulación con fenolftaleína 6.Q.04, Espejo de Plata de Tollens 6.Q.06/6.Q.16, Saponificación de jabón 6.Q.18, Biuret 6.Q.20, etc.)\n\n" +
      "Puedes revisar la lista completa y buscar cualquier experimento en la página dedicada de Virtual STEM."
  },
  {
    id: "kepler-vision",
    keywords: ["kepler", "bolivia", "iniciativa", "que es kepler", "mision", "vision", "stem", "educacion"],
    title: "Iniciativa Educativa Kepler Bolivia",
    content: "Kepler es una iniciativa educativa boliviana orientada a la innovación en STEM (Ciencia, Tecnología, Ingeniería y Matemáticas). Su principal objetivo es democratizar el aprendizaje científico y revertir la brecha de aprendizaje en ciencias exactas en Bolivia mediante simulaciones interactivas de laboratorio de alta fidelidad."
  },
  {
    id: "virtual-stem-demo",
    keywords: ["virtual stem", "virtual-stem", "demo", "simulador", "link", "url", "web", "plataforma"],
    title: "Proyecto Virtual STEM y Demo Web",
    content: "Virtual STEM es el proyecto estrella de la iniciativa Kepler. Es una plataforma web de simulación de laboratorios científicos diseñada para estudiantes de secundaria en Bolivia. La demo funcional de química se encuentra disponible públicamente en la URL: https://virtual-steam-demo.web.app/"
  },
  {
    id: "metodologia-5-fases",
    keywords: ["metodologia", "5 fases", "fases", "epp", "ensamblaje", "parametros", "ejecucion", "metacognicion", "pedagogia"],
    title: "Flujo Metodológico de 5 Fases Metacognitivas",
    content: "Cada simulación obliga al estudiante a recorrer 5 fases metodológicas en la mesa de trabajo (Workbench):\n1. Inducción EPP: Selección de equipo de protección (gafas, bata, guantes).\n2. Ensamblaje: Conexión interactiva de material de vidrio.\n3. Configuración de Parámetros: Ajuste de masa, volumen, temperatura y velocidad de agitación.\n4. Ejecución y Simulación: Animación en tiempo real calculada dinámicamente por el motor matemático local.\n5. Metacognición y Reporte: Evaluación reflexiva sobre errores procedimentales y analítica automatizada."
  },
  {
    id: "arquitectura-serverless",
    keywords: ["arquitectura", "serverless", "spark", "firebase", "costo", "cloud", "react", "webgl"],
    title: "Arquitectura Serverless de Alta Eficiencia",
    content: "Virtual STEM opera bajo una arquitectura serverless en Firebase y Google Cloud Platform. El frontend está desarrollado en React.js con WebGL/Canvas para el renderizado científico. Toda la lógica matemática se ejecuta 100% en el cliente (navegador), eliminando servidores intermedios de cómputo."
  },
  {
    id: "seguridad-rbac",
    keywords: ["ciberseguridad", "seguridad", "rbac", "roles", "pii", "firestore", "rules", "profesor", "estudiante", "admin"],
    title: "Protocolo de Ciberseguridad y Control de Acceso por Roles (RBAC)",
    content: "La protección de datos de identificación personal (PII) se realiza mediante encriptación HTTPS y reglas estrictas en Cloud Firestore (firestore.rules). Se gestionan 5 roles de usuario ('student', 'teacher', 'admin', 'supervisor', 'investor'). Las reglas de seguridad consultan el rol directamente en /users/{userId} mediante get(), impidiendo autopromoción de roles e inmutabilidad de notas al completar una práctica."
  },
  {
    id: "acceso-rural-pwa",
    keywords: ["rural", "offline", "sin internet", "kits usb", "pwa", "datos", "conectividad", "descarga"],
    title: "Solución de Conectividad para Zonas Rurales (0% Data Cost)",
    content: "Para resolver la barrera de conectividad del 20.2% de estudiantes en zonas rurales sin internet, Virtual STEM está diseñado como una Progressive Web App (PWA). Adicionalmente, se distribuyen Kits Maestros en memorias USB que contienen instaladores autónomos (.exe y .apk), permitiendo que el laboratorio funcione en su totalidad de forma desconectada sin consumir datos móviles."
  },
  {
    id: "contacto-kepler",
    keywords: ["contacto", "correo", "email", "gmail", "escribir", "informacion", "dudas", "kepler.stem.bo@gmail.com"],
    title: "Información de Contacto Oficial de Kepler",
    content: "Para ponerse en contacto con la iniciativa Kepler Bolivia, realizar consultas institucionales o solicitar alianzas educativas, puede escribir directamente al correo oficial: kepler.stem.bo@gmail.com"
  }
];

/**
 * Función de recuperación RAG (Retrieval-Augmented Generation) con filtro estricto de ámbito.
 */
export function queryKeplerRAG(userQuery) {
  if (!userQuery || typeof userQuery !== 'string') {
    return {
      success: false,
      answer: "Por favor, ingresa una pregunta sobre Kepler Bolivia o Virtual STEM."
    };
  }

  const normalized = userQuery.toLowerCase().trim();

  // Palabras clave requeridas para comprobar que está en el ámbito de Kepler/STEM
  const keplerScopeKeywords = [
    "kepler", "stem", "virtual", "demo", "mariaca", "alberdi", "quimica", "laboratorio",
    "molaridad", "titulacion", "tollens", "fases", "epp", "firebase", "spark", "costo",
    "serverless", "bolivia", "espejo", "contacto", "correo", "email", "profesor", "estudiante",
    "pwa", "usb", "rural", "arquitectura", "seguridad", "rbac", "simulacion", "proyecto",
    "quienes", "dirigen", "lider", "experimentos", "cuantos", "lista", "luminol", "saponificacion", "biuret", "buffer", "cinetica"
  ];

  const isInScope = keplerScopeKeywords.some(keyword => normalized.includes(keyword));

  if (!isInScope) {
    return {
      success: false,
      inScope: false,
      answer: "Disculpa, como asistente especializado de Kepler Bolivia, solo puedo responder consultas sobre la iniciativa Kepler, el proyecto Virtual STEM, nuestro catálogo de 120 experimentos de química, la arquitectura técnica y la pedagogía en ciencia y tecnología. ¿Te gustaría saber más sobre el demo de Virtual STEM o explorar el catálogo de experimentos?"
    };
  }

  let bestMatch = null;
  let maxScore = 0;

  for (const doc of RAG_KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of doc.keywords) {
      if (normalized.includes(kw)) {
        score += (kw.length > 5 ? 5 : 3);
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestMatch = doc;
    }
  }

  if (bestMatch && maxScore > 0) {
    return {
      success: true,
      inScope: true,
      docId: bestMatch.id,
      title: bestMatch.title,
      answer: bestMatch.content
    };
  }

  return {
    success: true,
    inScope: true,
    title: "Iniciativa Kepler & Virtual STEM",
    answer: "Kepler es una iniciativa boliviana de innovación en STEM. Su proyecto principal es Virtual STEM, una plataforma con 120 experimentos catalogados de química (Demo disponible en https://virtual-steam-demo.web.app/). Puedes contactarnos en kepler.stem.bo@gmail.com."
  };
}

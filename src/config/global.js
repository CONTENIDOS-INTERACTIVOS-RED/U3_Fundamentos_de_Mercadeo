export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Estrategias de mercadeo y comunicación digital',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estrategias de mercadeo y comunicación digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Factores que influyen en el comportamiento del consumidor',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Redefinición del producto en el entorno digital',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estrategias de precio digital',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estrategias de plaza: canales y distribución digital',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Promoción digital: comunicación y <em>engagement</em>',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estrategias de comunicación digital y branding',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Comunicación Integrada de <em>Marketing</em> (IMC)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>Branding</em> digital: creación de valor emocional',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Experiencias Integradas: <em>Marketing</em> 4.0 y 5.0',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Ética, sostenibilidad y responsabilidad en <em>marketing</em> digital',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Herramientas básicas de análisis de datos en <em>marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Introducción al <em>Big Data</em> y al análisis predictivo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Métricas claves para medir el desempeño',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Céspedes Sáenz, A. (2010). Principios de mercadeo (5ª ed.). Ecoe Ediciones.',
      link:
        'https://elibro.net/es/lc/elbro.com/titulos/69059?fs_q=Principios__de__mercadeo&prev=fs',
    },
    {
      referencia:
        'Cortés Cabrera, J. J. (2023). Guía práctica de Marketing para estudiantes y docentes universitarios. Fundación Universitaria San Mateo.',
      link: 'https://elibro.net/es/lc/elbro.com/titulos/270387',
    },
    {
      referencia:
        'Kotler, P. & Keller, K. L. (2016). Dirección de marketing: (15 ed.). Pearson Educación.',
      link: 'https://elibro.net/es/lc/elbro.com/titulos/38039',
    },
    {
      referencia:
        'Lombana-Coy, J. & Palacios-Chacón, L. A. (2020). Competitividad y contexto internacional de los negocios: teoría y aplicación. Universidad del Norte.',
      link: 'https://elibro.net/es/lc/elbro.com/titulos/142209',
    },
    {
      referencia:
        'Kotler, P., Kartajaya, H. & Setiawan, I. (2018). Marketing 4.0: transformar lo estrategia para atraer al consumidor digital. LID Editorial.',
      link: 'https://elibro.net/es/lc/elbro.com/titulos/269981',
    },
    {
      referencia:
        'Kotler, P., Kartajaya, H. & Setiawan, I. (2021). Marketing 5.0: tecnología para la humanidad. LID Editorial España.',
      link: 'https://elibro.net/es/lc/elbro.com/titulos/270611',
    },
    {
      referencia:
        'Kotler, P., Pfoertsch, W. & Sponholz, U. (2024). Marketing Humanístico. Human to Human H2H. LID Editorial Empresarial.',
      link: 'https://elibro.net/es/lc/elbro.com/titulos/276326',
    },
    {
      referencia:
        'Orero-Blat, M. Rey Martí, A. & Palacios Marqués, D. (2021). Un enfoque práctico del marketing estratégico, operativo y digital. Editorial de la Universidad Politécnica de Valencia.',
      link: 'https://elibro.net/es/lc/elbro.com/titulos/219019',
    },
    {
      referencia:
        'UAPA. (2023). Mercadotecnia. Universidad Abierta para Adultos (UAPA).',
      link: 'https://elibro.net/es/lc/elbro.com/titulos/243900',
    },
    {
      referencia:
        'Kotler, P., Kartajaya, H. & Setiawan, I. (2024). Marketing 6.0: el futuro es inmersivo. LID Editorial España.',
      link: 'https://elibro.net/es/lc/elbro.com/titulos/269656',
    },
    {
      referencia:
        'Kotler, P. (2024). Marketing empresarial: más allá del funcionalismo, hacia la creatividad, el liderazgo y la sostenibilidad. Ediciones Granica.',
      link: 'https://elibro.net/es/lc/elbro.com/titulos/267031',
    },
  ],
  glosario: [
    {
      termino: '<em>Big Data</em>',
      significado:
        'Análisis de grandes volúmenes de datos para descubrir patrones y tomar decisiones informadas, en tiempo real.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'Proceso de creación y gestión de una marca para fortalecer su identidad y conectar con el público objetivo.',
    },
    {
      termino: '<em>CRM (Customer Relationship Management)</em>',
      significado:
        'Herramienta para gestionar relaciones con clientes, mejorar la comunicación y optimizar estrategias de fidelización.',
    },
    {
      termino: '<em>CTR (Click-Through Rate)</em>',
      significado:
        'Porcentaje que indica la efectividad de un anuncio, al comparar clics con el número total de impresiones.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'Nivel de interacción y compromiso de los usuarios con el contenido a través de <em>likes</em>, comentarios y compartidos.',
    },
    {
      termino: '<em>Google Analytics</em>',
      significado:
        'Herramienta que permite analizar el tráfico web, medir objetivos y optimizar el rendimiento de las campañas digitales.',
    },
    {
      termino: '<em>Inbound Marketing</em>',
      significado:
        'Estrategia que atrae clientes mediante contenido de valor, mejorando la experiencia del usuario y generando confianza.',
    },
    {
      termino: 'Inteligencia Artificial (IA)',
      significado:
        'Tecnología que simula la inteligencia humana mediante algoritmos y aprendizaje automático para resolver problemas complejos.',
    },
    {
      termino: '<em>KPI (Key Performance Indicator)</em>',
      significado:
        'Indicadores claves que evalúan el éxito y efectividad de acciones y campañas en <em>marketing</em> digital.',
    },
    {
      termino: '<em>Marketing Automation</em>',
      significado:
        'Uso de <em>software</em> para automatizar tareas de <em>marketing</em> como envíos de correos, segmentación y seguimiento de campañas.',
    },
    {
      termino: '<em>Marketing</em> 4.0',
      significado:
        'Estrategia que fusiona el <em>marketing</em> tradicional con digital, ofreciendo experiencias omnicanal y personalizadas al consumidor.',
    },
    {
      termino: '<em>Marketing</em> 5.0',
      significado:
        'Integración de tecnologías avanzadas (IA, <em>Big Data</em>) con valores humanos para crear experiencias significativas y funcionales.',
    },
    {
      termino: 'Omnicanalidad',
      significado:
        'Estrategia que unifica canales digitales y físicos, para ofrecer una experiencia integrada, continua y eficiente.',
    },
    {
      termino: '<em>ROI (Return On Investment)</em>',
      significado:
        'Métrica que mide la rentabilidad de una inversión, comparando beneficios generados con costos invertidos.',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'División del mercado en grupos homogéneos, según comportamientos, intereses o necesidades específicas para personalizar estrategias.',
    },
    {
      termino: '<em>SEM (Search Engine Marketing)</em>',
      significado:
        'Estrategia de <em>marketing</em> que utiliza anuncios pagados para ganar visibilidad en motores de búsqueda como Google.',
    },
    {
      termino: '<em>SEO (Search Engine Optimization)</em>',
      significado:
        'Optimización de sitios web para mejorar su visibilidad y posicionamiento orgánico, en motores de búsqueda.',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'Técnica que usa narrativas emocionales para conectar con la audiencia, fortaleciendo la identidad y valores de la marca.',
    },
    {
      termino: 'Tasa de conversión',
      significado:
        'Porcentaje de usuarios que completan una acción específica, como comprar un producto o registrarse en una plataforma.',
    },
  ],
}

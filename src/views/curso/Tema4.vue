<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Herramientas básicas de análisis de datos en marketing'")
    .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-5.pb-0.mb-5.overflow-hidden
  
      p(data-aos="fade-right").mb-5 A continuación, se presentan las herramientas básicas de análisis de datos en marketing.

      #t_4_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.1] Introducción al #[em Big Data] y al análisis predictivo

      p(data-aos="fade-right").mb-5 El #[em Big Data] y el análisis predictivo han revolucionado el marketing moderno, permitiendo a las empresas recopilar, analizar y anticipar comportamientos de los consumidores con una precisión sin precedentes.

      .bg-full-width.bg-color-2.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Introducción al #[em Big Data] y al análisis predictivo 
              p.mb-4(data-aos="fade-right") En el PDF Introducción al #[em Big Data] y al análisis predictivo, se presentan ejemplos prácticos de marcas líderes que utilizan estas tecnologías para personalizar experiencias, optimizar recursos y adaptarse a las demandas del mercado. Este enfoque no solo mejora la relación con el cliente, sino que también impulsa la eficiencia y competitividad empresarial.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_T4.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo. ] Introducción al #[em Big Data] y al análisis predictivo 
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema4/1.png", alt="")


      #t_4_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.2] Métricas claves para medir el desempeño

      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in").mb-4.mt-lg-0
        .col-lg-7
          p(data-aos="fade-right") En el marketing digital, los #[strong KPIs (Key Performance Indicators)] son métricas claves que permiten medir y evaluar el desempeño de las campañas y estrategias implementadas. Estos indicadores no solo proporcionan información cuantitativa sobre el éxito de las acciones, sino que también ofrecen insights accionables para optimizar y tomar decisiones informadas. A continuación, se detallan los principales KPIs utilizados en marketing digital:


      .row.align-items-center.mb-5

        .col-lg-8
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="ROI (Retorno sobre la Inversión)")
              p El #[b ROI] mide la rentabilidad de una campaña de marketing, al comparar los beneficios generados, con los costos invertidos. Es una métrica crítica para evaluar si una campaña fue efectiva, desde el punto de vista financiero y justificar futuras inversiones.
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Fórmula.] ROI = [(Beneficio - Inversión) / Inversión] × 100
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Importancia.] El #[b ROI] permite identificar qué acciones generan mayor rentabilidad y cuáles requieren ajustes. Una campaña con un #[b ROI] positivo, indica que la inversión fue recuperada y generó beneficios adicionales.

                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo práctico.] Una campaña en redes sociales, con una inversión de #[strong 500 dólares], generó #[strong 2,000 dólares] en ventas. El #[strong ROI] sería del #[strong 300 %], lo que refleja una alta rentabilidad.

            div(numero="2" titulo="CTR (<em>Click-Through Rate</em>)")
              p El #[b CTR], o tasa de clics, mide la efectividad de un anuncio digital, correo electrónico o enlace para atraer a los usuarios. Es un indicador clave para evaluar el interés generado y la relevancia del contenido presentado.
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Fórmula.] CTR = (Clics / Impresiones) × 100
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Importancia.] Un CTR alto indica que el contenido es atractivo y está logrando captar la atención de la audiencia objetivo. Además, ayuda a mejorar la calidad y el posicionamiento en plataformas publicitarias como Google Ads o redes sociales.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo práctico.] Un anuncio tuvo 1,000 impresiones y generó 50 clics. El CTR sería del 5 %, lo que indica un buen rendimiento si se compara con el promedio de la industria.

            div(numero="3" titulo="Tasa de conversión")
              p La tasa de conversión mide el porcentaje de usuarios que completan una acción deseada, como una compra, suscripción o una lista de correo, descarga de un recurso o registro en un evento. Este KPI evalúa la efectividad de una página web, anuncio o estrategia, para guiar al usuario hacia una meta específica.
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Fórmula.] Tasa de conversión = (Número de conversiones / Total de visitantes) × 100
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Importancia.] La tasa de conversión es fundamental para medir la eficacia del embudo de ventas y detectar posibles puntos de fuga o abandono. Optimizar esta métrica incrementa el retorno de las campañas.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo práctico.] Si una página web recibe 500 visitas y se generan 50 compras, la tasa de conversión será del 10 %, lo que indica un alto rendimiento.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Herramientas recomendadas:] Google Analytics, Hotjar (mapas de calor para identificar patrones de navegación).

            div(numero="4" titulo="Tasa de <em>engagement</em>")
              p La tasa de engagement mide el nivel de interacción que los usuarios tienen con el contenido de una marca en redes sociales, blogs u otras plataformas digitales. Incluye acciones como comentarios, "me gusta", compartidos, clics y reproducciones de videos.
              ul.lista-ul
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Fórmula.] Engagement = (Interacciones totales / Alcance total) × 100
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Importancia.] Una tasa de engagement alta, refleja que el contenido resuena con la audiencia, fortalece la relación marca-consumidor y fomenta la lealtad. Además, indica el grado de participación activa de los usuarios en la conversación digital.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo práctico.] Una publicación en Instagram, tuvo un alcance de 10,000 personas y generó 1,200 interacciones (comentarios, likes y compartidos). La tasa de engagement sería del 12 %, por encima del promedio del 5-8 % en redes sociales.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Herramientas recomendadas:] Hootsuite, Buffer, Sprout Social.



        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0


      h3(data-aos="fade-right").mb-5 Ejemplo aplicado: Avengers: Endgame

      h4(data-aos="fade-right") 1. ROI (Retorno sobre la Inversión)

      .row.mb-5.align-items-center
        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
        .col-lg-7
          .bg-color-1.p-4.p-lg-5(data-aos="fade-left").mb-4
            p.mb-0 Marvel Studios y Disney, invirtieron aproximadamente 200 millones de dólares en la campaña global de marketing de Avengers: Endgame. La estrategia incluyó tráilers, colaboraciones con marcas globales como Coca-Cola, Audi y McDonald’s, eventos exclusivos y una fuerte presencia en plataformas digitales.

          p(data-aos="fade-left").mb-4 La película recaudó más de #[strong 2.79 mil millones de dólares] en taquilla mundial, logrando un #[strong ROI] del #[strong 1,295 %], lo que la convirtió en la película más taquillera de la historia hasta ese momento (Box Office Mojo, 2019).


      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5.py-4
          h5 Fórmula aplicada.
          p.mb-0 ROI = [(2,790,000,000 - 200,000,000) / 200,000,000] × 100 = 1,295 %

      h4(data-aos="fade-right").mb-4 2. CTR (Tasa de clics)

      .row.mb-5.align-items-center

        .col-lg-7

          p(data-aos="fade-left").mb-4 Durante el lanzamiento del tráiler final, los anuncios en YouTube y redes sociales, lograron un CTR promedio del 5.2 %, superando el promedio de la industria (entre 2-3 %). La estrategia incluyó la promoción del hashtag #AvengersEndgame, que viralizó el contenido y atrajo la atención global.

          .bg-color-5.p-4(data-aos="fade-left")
            ol.lista-ol(data-aos="fade-up")
              li.mb-3
                .lista-ol--cuadro__vineta
                  span 1
                | #[b Resultados.] De 20 millones de impresiones, los anuncios generaron 1 millón de clics, demostrando un alto interés de la audiencia.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | #[b Fórmula aplicada.] CTR = (1,000,000 / 20,000,000) × 100 = 5.2 %

        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/5.png", data-aos="zoom-in")


      h4(data-aos="fade-right").mb-4 3. Tasa de conversión

      .bg-full-width.bg-color-3.mb-5

        .row.justify-content-center.align-items-stretch
          .col-lg-6(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema4/6.svg', style="max-width:100%", alt="").mx-auto.mx-lg-0

          .col-lg-6(data-aos="fade-left")
            .pt-5.pe-4.pe-lg-5
              p(data-aos="fade-left").my-5 La campaña de preventa de entradas, tuvo un impacto histórico. En las primeras 24 horas, plataformas como Fandango y AMC, reportaron la venta de millones de entradas. La tasa de conversión fue del 22 %, superando ampliamente las campañas anteriores, de películas similares.
              
              ol.lista-ol(data-aos="fade-up")
                li.mb-4
                  .lista-ol--cuadro__vineta.purple
                    span 1
                  | #[b Ejemplo específico.] Si 10 millones de usuarios visitaron las plataformas de preventa y 2.2 millones compraron entradas, la tasa de conversión fue:
                li 
                  .lista-ol--cuadro__vineta.purple
                    span 2
                  | #[b Fórmula aplicada.] Tasa de conversión = (2,200,000 / 10,000,000) × 100 = 22 %

      

      .row.mb-5

        .col-lg-7
          h4(data-aos="fade-right").mb-4 4. Tasa de #[em engagement]
          p(data-aos="fade-left").mb-4 
            | Marvel Studios implementó una estrategia en redes sociales, basada en contenido interactivo, avances personalizados y desafíos virales. El tráiler generó #[strong 289 millones] de visualizaciones en las primeras 24 horas, en plataformas como #[b YouTube, Twitter e Instagram].

          .bg-color-5.p-4(data-aos="fade-left")
            ol.lista-ol(data-aos="fade-up")
              li.mb-3
                .lista-ol--cuadro__vineta
                  span 1
                | En TikTok, el desafío #[b #DontSpoilTheEndgame] alcanzó más de #[strong 2 millones] de interacciones (comentarios, compartidos y me gusta), con una tasa de engagement del #[strong 7.5 %], superior al promedio estándar del #[strong 5-6 %].
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | #[b Fórmula aplicada.] Engagement = (2,000,000 / 26,600,000 alcance total) × 100 = 7.5 %

        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in")

      p(data-aos="fade-right").mb-5 Resumen. La campaña de marketing de Avengers: Endgame, demostró el impacto de los KPIs en el éxito de una estrategia digital:


      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-6
          .bg-color-4.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 ROI: 1,295 %

        .col-lg-6
          .bg-color-4.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Tasa de conversión: 22 %

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-6
          .bg-color-4.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 CTR: 5.2 %
        .col-lg-6
          .bg-color-4.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Tasa de engagement: 7.5 %

      p(data-aos="fade-right").mb-5 El enfoque estratégico y el uso efectivo de métricas claves, permitieron a Marvel Studios maximizar la expectativa, interacción y conversión a nivel global, consolidando la película como un éxito histórico, en la industria del entretenimiento.


      #t_4_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.3] Visualización y toma de decisiones basadas en datos


      .row.mb-5.align-items-center
        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in").mb-4.mt-lg-0
        .col-lg-7
          p(data-aos="fade-right") La #[b visualización de datos] es un proceso clave que permite convertir información compleja en representaciones gráficas claras y accesibles. Herramientas como #[b Google Data Studio, Tableau y Power BI], facilitan la consolidación de datos provenientes de diversas fuentes, permitiendo analizar KPIs claves y optimizar las decisiones estratégicas. Como destaca Kotler et al. (2024), un buen análisis visual impulsa decisiones basadas en evidencia y asegura que las estrategias se encuentren alineadas con los objetivos del negocio.


      h3(data-aos="fade-right").mb-4 Liderazgo y toma de decisiones estratégicas

      p(data-aos="fade-right").mb-5 La capacidad de un líder para interpretar datos y comunicar resultados de forma clara, es fundamental en entornos digitales dinámicos. La visualización de datos facilita:


      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.pb-md-3

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/13.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Evaluación y justificación de decisión
                  p.mb-0 Permite medir resultados en tiempo real y comunicar los logros alcanzados, con base en métricas como #[b ROI], #[b CTR] y #[b tasas de conversión].
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/14.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Optimización continua de recursos
                  p.mb-0 La identificación visual de áreas de mejora, facilita ajustes rápidos para maximizar el desempeño.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/15.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Inspirar y guiar equipos
                  p.mb-0 Un liderazgo basado en datos, ofrece #[b claridad y dirección], motivando a los equipos para alinear sus acciones con objetivos comunes y medibles.

          h3(data-aos="fade-right").mb-4 Caso de éxito: Disney+ y la estrategia de crecimiento con visualización de datos

          p(data-aos="fade-right").mb-5 #[b Disney+] ha logrado posicionarse como uno de los líderes en plataformas de streaming, mediante una estrategia respaldada por la visualización de datos.

      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-1.png")
              .col-lg-7
                h5 1. Análisis de comportamientos de usuario:
                p Disney+ recopila y visualiza grandes volúmenes de datos sobre hábitos de consumo, preferencias de contenido y tasas de abandono. Estos datos permiten identificar patrones y ajustar su catálogo, para retener a la audiencia.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-2.png")
              .col-lg-7
                h5 2. Toma de decisiones basada en datos reales:
                p A través de dashboards interactivos, el equipo de liderazgo visualiza métricas claves como:
                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Tiempo de reproducción] por usuario.
    
                  li.mb-2
                    i.fas.fa-check-circle
                    | #[b Contenido más visto] y franjas horarias de mayor consumo.
                  li.mb-4
                    i.fas.fa-check-circle
                    | #[b Tasa de abandono] en contenido específico.

                p Por ejemplo, el análisis visual mostró un #[b pico de visualización] tras el lanzamiento de #[b “The Mandalorian”], lo que justificó la decisión de aumentar la inversión en contenido exclusivo de la franquicia Star Wars.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-3.png")
              .col-lg-7
                h5 3. Optimización de campañas de marketing:
                p Disney+ utiliza datos visualizados para segmentar su audiencia y personalizar las campañas promocionales. Al analizar la tasa de conversión y el comportamiento de los usuarios, la plataforma logró incrementar la retención de suscriptores en un 15 % durante el lanzamiento de producciones claves (Statista, 2023).

      .bg-full-width.bg-color-2
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 #[strong Reflexión.] La visualización de datos, aplicada en casos como Disney+, permite transformar grandes volúmenes de información en decisiones estratégicas fundamentadas y eficaces. El liderazgo guiado por datos, no solo optimiza recursos, sino que también fortalece la relación con los usuarios y asegura el cumplimiento de los objetivos comerciales.

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
</template>
<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Marketing tradicional y digital',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué KPI mide la rentabilidad de una campaña de marketing?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Engagement',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'CTR',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'ROI (Retorno sobre la Inversión)',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Tasa de rebote',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué representa el término omnicanalidad en marketing?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Uso de una sola plataforma',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Experiencia integrada entre canales físicos y digitales',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Distribución exclusiva en tiendas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Eliminación de canales virtuales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el objetivo de las estrategias de branding digital?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Incrementar precios',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reducir contenido visual',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Construir y comunicar una identidad de marca coherente',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Solo ventas directas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Cuál es una característica clave de la omnicanalidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Solo aplicar canales digitales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Desconexión entre plataformas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Integración fluida de canales físicos y digitales',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Venta exclusiva en tiendas físicas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué concepto permite medir la eficacia de las campañas en redes sociales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Tasa de rebote',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Engagement',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'CTR',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Inventario',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>

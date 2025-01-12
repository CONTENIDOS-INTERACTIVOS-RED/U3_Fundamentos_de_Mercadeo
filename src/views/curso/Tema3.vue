<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Estrategias de comunicación digital y branding'")
    .container.tarjeta.tarjeta--blanca.px-4.px-md-5.overflow-hidden
  

      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-6
              .py-4
                p(data-aos="fade-left").mb-4 Para conocer sobre los fundamentos de la innovación estratégica, lo invitamos a escuchar el siguiente podcast.
                
                TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                  texto="Estrategias de comunicación digital y <em>branding</em>"
                  tiempo
                  :audio="require('../../assets/curso/podcast/podcast1.mp3')"
                )
            .col-lg-6
              figure
                img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")



      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Comunicación Integrada de Marketing (IMC)

      p(data-aos="fade-left") Dentro de las estrategias encontramos la IMC, la cual abarca:

      
      .row.align-items-center.mb-5
        .col-lg-8
          p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:

          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Integración de canales digitales") 
              h5 Integración de canales digitales: SEO, SEM, email marketing y redes sociales 
              p La Comunicación Integrada de Marketing (IMC), es un enfoque estratégico que unifica y coordina todos los canales de comunicación digitales, para ofrecer mensajes coherentes y experiencias unificadas al cliente. Herramientas como SEO (posicionamiento en buscadores), SEM (publicidad pagada), email marketing y redes sociales, permiten atraer, interactuar y fidelizar a la audiencia. Esta integración facilita que la marca tenga una presencia constante y relevante, maximizando el impacto de sus acciones, en un mercado saturado (Orero-Blat et al., 2021).
            div(numero="2" titulo="Establecer políticas claras y bien definidas") 
              h5 Planificación y ejecución de campañas, con cohesión multicanal 
              p Para ejecutar una campaña multicanal efectiva, es fundamental que todos los canales trabajen de manera complementaria. El SEO genera tráfico orgánico de calidad, el SEM impulsa la visibilidad rápida a audiencias segmentadas, las redes sociales fomentan la interacción y participación, mientras que el email marketing refuerza la relación directa con mensajes personalizados y automatizados. Según HubSpot (2023), las marcas que integran canales digitales tienen un 25 % más de éxito en la captación y retención de clientes. La clave está en garantizar que los mensajes sean consistentes, adaptados a cada plataforma y alineados a los objetivos estratégicos.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0


      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/3.png", alt="", data-aos="zoom-in")
        .col-lg-7
          .pt-4.px-4.bg-color-1(data-aos="fade-right").h-100
            h5.mt-3 Ejemplo de estrategias omnicanales y el impacto del IMC en la marca
            p.mb-0 Empresas como Nike son un ejemplo claro de IMC aplicada exitosamente. A través de campañas omnicanales, Nike integra sus redes sociales (publicaciones y anuncios), su tienda virtual (optimización SEO), email marketing (mensajes personalizados con recomendaciones) y su aplicación móvil, generando una experiencia fluida y unificada para sus clientes. Esta estrategia mejora el engagement, fortalece la fidelización y aumenta las conversiones, posicionando la marca como líder en innovación y conectividad digital (Cortés Cabrera, 2023).


      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] #[em Branding] digital: creación de valor emocional

      p Aquí encontramos dos puntos importantes con ejemplos de branding efectivos:

      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/4.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
          p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:

          LineaTiempoD.color-primario.large(data-aos="fade-left")
            div(numero="1" titulo="Creación de conexiones emocionales a través de narrativas y valores de marca") 
              p El #[em branding] digital tiene como objetivo establecer #[b vínculos emocionales] entre la marca y sus consumidores, utilizando #[b narrativas auténticas] y #[b valores que resuenen] con su audiencia. Las historias bien contadas humanizan a la marca, permitiendo que los clientes se identifiquen y conecten a un nivel emocional. Según Orero-Blat, Rey Martí y Palacios Marqués (2021), una narrativa sólida transmite confianza, fideliza a los consumidores y diferencia la marca en un mercado saturado. Las redes sociales y las plataformas interactivas, facilitan la viralización de estos mensajes, multiplicando su impacto.
            div(numero="2" titulo="La importancia de los diferenciadores de marca en un entorno digital") 
              h5 Diferenciadores de marca en el ecosistema digital
              p En el ecosistema digital, los diferenciadores de marca son esenciales para destacar y generar valor perdurable. Estos diferenciadores pueden incluir la innovación, la calidad superior, el compromiso con valores específicos o experiencias de usuario únicas. Céspedes Sáenz (2010), destaca que una marca con atributos bien definidos, crea una ventaja competitiva sostenible, capturando no solo la atención del cliente, sino también su lealtad a largo plazo.

            div(numero="3" titulo="Ejemplos de branding efectivo") 
              h5 Casos de éxito en branding emocional
              p #[strong Starbucks:] Starbucks ha construido su branding emocional, enfocándose en ofrecer más que un café. La marca ha logrado posicionarse como un espacio acogedor, un "tercer lugar" entre el hogar y el trabajo. Su narrativa se centra en la calidad del producto, experiencias personalizadas (como los nombres en vasos) y el ambiente de sus locales, generando conexiones emocionales que fidelizan a sus clientes.
              p.mt-3 #[strong Nike:] La narrativa de Nike está construida alrededor del empoderamiento personal y la motivación a través del eslogan "Just Do It". La marca inspira a sus consumidores con historias de superación y éxito, utilizando contenido visual y verbal que transmite valores como el esfuerzo, la perseverancia y la superación, conectando profundamente con su audiencia.


      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Experiencias Integradas: #[em Marketing 4.0 y 5.0]

      p El Marketing 4.0 y 5.0 han revolucionado la manera en que las marcas se relacionan con los consumidores, integrando tecnologías avanzadas como la realidad aumentada y la inteligencia artificial para crear experiencias personalizadas y centradas en el cliente.


      .bg-full-width.bg-color-2.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Experiencias Integradas
              p.mb-4(data-aos="fade-right") En el PDF Experiencias Integradas, se presentan ejemplos prácticos de marcas líderes que han implementado estas innovaciones para mejorar la interacción con los consumidores, reducir la incertidumbre en las decisiones de compra y fortalecer su posicionamiento en el mercado.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_T1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[strong Anexo. ] Experiencias Integradas
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema3/5.png", alt="")


      #t_3_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.4] Ética, sostenibilidad y responsabilidad en marketing digital

      p Ahora, estudiemos sobre el papel de estos ítems dentro del marketing digital:


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/5.png")
              .col-lg-7
                h5 Transparencia y autenticidad en las campañas digitales
                p La transparencia en marketing digital, se refiere a la comunicación clara y honesta de las prácticas, intenciones y valores de la marca. Una empresa transparente informa con veracidad y coherencia, evitando el uso engañoso de los mensajes. Por otro lado, la autenticidad implica que la marca refleje su identidad real y valores de forma genuina, sin pretender ser algo que no es. Según Kotler, Pfoertsch y Sponholz (2024), los consumidores modernos valoran cada vez más a las marcas que son honestas y fieles a su propósito.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/6.png")
              .col-lg-7
                h5 Integración de la sostenibilidad como ventaja competitiva
                p La sostenibilidad en el marketing digital, no solo responde a una responsabilidad social, sino que también se ha convertido en un factor diferenciador, clave. Estrategias como el uso de campañas educativas, la implementación de tecnologías de bajo impacto y la promoción de productos ecológicos, conectan con consumidores conscientes. Un estudio reciente indica que el 70 % de los consumidores prefieren comprar marcas con prácticas responsables y sostenibles (Kotler et al., 2021). Esto demuestra que la integración de la sostenibilidad no solo mejora la percepción de la marca, sino que también incrementa la lealtad del cliente y su rentabilidad.


      .row.mb-5
        .col-lg-7
          h5.mb-4(data-aos="fade-left") Ejemplo: Campaña de Nike – “Ganar no es para todo el mundo”
          p.mb-4 La campaña "¿Soy mala persona?" de Nike es un excelente ejemplo de autenticidad y transparencia en el marketing digital. En este anuncio, Nike presenta un discurso que desafía las normas sociales, destacando valores como la obsesión, el sacrificio y la ambición extrema. A través de un lenguaje provocador y una narrativa emocional, Nike no solo humaniza a sus atletas, sino que también refuerza su identidad de marca, alineada con la resiliencia y la superación personal.
          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-0 La clave del éxito de esta campaña, reside en su capacidad para conectar emocionalmente con un público que comparte una mentalidad de esfuerzo y determinación, mientras desafía las percepciones tradicionales del éxito. Además, la campaña generó una alta repercusión en redes sociales, donde los usuarios debatieron y compartieron sus interpretaciones, amplificando el alcance y el impacto de la marca.
          
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")


      .bg-full-width.bg-color-3

        .row.justify-content-center.align-items-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/tema3/8.svg", alt="")
          .col-lg-7
            .pt-4
              p.mb-4(data-aos="fade-right") #[strong Recuerde.] La #[b ética] y la #[b sostenibilidad], son pilares fundamentales del marketing digital en la actualidad. Las marcas que adoptan prácticas transparentes, auténticas y sostenibles, no solo generan #[b confianza] y #[b lealtad] en sus consumidores, sino que también construyen una ventaja competitiva en un mercado exigente. Campañas como la de Nike, demuestran que la autenticidad y la conexión emocional, pueden llevar a las marcas a #[b trascender] el producto, inspirando a sus audiencias y dejando un impacto positivo a largo plazo.
</template>
<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

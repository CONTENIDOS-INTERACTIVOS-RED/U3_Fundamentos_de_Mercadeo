<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Factores que influyen en el comportamiento del consumidor'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Las 4P del marketing (Producto, Precio, Plaza y Promoción), son un modelo fundamental en la estrategia de mercadeo que permite a las empresas organizar su oferta y posicionarse en el mercado. 

          p(data-aos="fade-left") En la era digital, este modelo ha evolucionado para adaptarse a las nuevas dinámicas del consumo y las oportunidades que ofrece la tecnología. Según Kotler y Keller (2016), el entorno digital ha transformado radicalmente cómo las empresas gestionan cada una de las 4P, facilitando la personalización, interactividad y análisis en tiempo real.

          p(data-aos="fade-left") Conozcamos cada uno de los elementos que componen las 4P del marketing:

        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")


      .bg-full-width.bg-color-info
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                  template(v-slot:imagen)
                    figure
                      img(src="@/assets/curso/tema2/info1.png", alt="", style="max-width: 478px;").mx-auto

                  .bg-color-white.box-shadow.p-3(x="30%" y="34%" numero="1")
                    h5 Producto

                    p En el entorno digital, los productos no solo deben satisfacer necesidades funcionales, sino también ofrecer experiencias personalizadas y emocionales. La tecnología permite adaptar productos y servicios a las expectativas específicas del cliente, mediante herramientas como la recolección de datos y la inteligencia artificial. Además, surgen productos completamente digitales, como software, suscripciones y aplicaciones, que aportan soluciones innovadoras.


                  .bg-color-white.box-shadow.p-3(x="68%" y="34%" numero="2")
                    h5 Precio
                    p La fijación de precios en la era digital, se ha vuelto más dinámica y flexible, gracias al uso de Big Data y algoritmos predictivos. Las empresas pueden ajustar precios en tiempo real, según la demanda, el comportamiento del consumidor y la competencia. La transparencia en los precios, facilitada por las plataformas digitales, también ha hecho que los consumidores comparen opciones antes de tomar una decisión.

                  .bg-color-white.box-shadow.p-3(x="30%" y="65%" numero="3")
                    h5 Plaza (distribución)
                    p La digitalización ha transformado los canales de distribución hacia un modelo omnicanal, donde los consumidores pueden interactuar con la marca en línea y fuera de línea. Las plataformas de comercio electrónico, marketplaces y aplicaciones, permiten que los productos estén disponibles globalmente, rompiendo barreras geográficas y facilitando el acceso.
                    
                  .bg-color-white.box-shadow.p-3(x="69%" y="65%" numero="4")
                    h5 Promoción
                    p La comunicación digital ha sustituido, en gran parte, los métodos tradicionales, permitiendo una interacción directa y personalizada con los consumidores a través de redes sociales, email marketing, contenido multimedia y publicidad en motores de búsqueda. Las campañas digitales se optimizan constantemente, mediante el análisis de métricas claves, lo que mejora su efectividad y alcance.
                    
      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las 4P del marketing en la era digital, no solo representan una adaptación al nuevo entorno tecnológico, sino una oportunidad para las empresas de personalizar sus estrategias, mejorar su eficiencia y conectar de manera más efectiva, con los consumidores.

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Redefinición del producto en el entorno digital

      p(data-aos="fade-left") Primero conozcamos cómo se ha redefinido el producto en el entorno digital:


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-1.png")
              .col-lg-7
                h5 Adaptación del producto/servicio al cliente digital: uso de la personalización y la recolección de datos
                p En el entorno digital, la personalización se convierte en un elemento clave para adaptar los productos y servicios a las necesidades del cliente moderno. Las empresas utilizan Big Data y la inteligencia artificial, para analizar patrones de comportamiento, intereses y preferencias de los consumidores. Esta recolección de datos permite ajustar la oferta, anticipar necesidades y brindar soluciones más específicas, mejorando la experiencia del usuario y aumentando su lealtad

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-2.png")
              .col-lg-7
                h5 Transformación hacia productos basados en experiencias y soluciones digitales
                p Los productos en la era digital, han evolucionado hacia propuestas que integran experiencias y valor añadido. En lugar de enfocarse únicamente en características físicas, las empresas priorizan el desarrollo de productos y servicios, que ofrezcan soluciones digitales innovadoras y centradas en el cliente. Esto incluye plataformas interactivas, suscripciones digitales y servicios personalizados, donde la experiencia del usuario es un diferenciador clave en un mercado competitivo.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-3.png")
              .col-lg-7
                h5 La importancia del diseño de productos en plataformas digitales
                p El diseño de productos digitales es fundamental para garantizar una experiencia eficiente y atractiva. La experiencia de usuario (UX), juega un papel crucial al facilitar la navegación intuitiva, la accesibilidad y la funcionalidad de las plataformas y aplicaciones digitales. Un diseño optimizado no solo mejora la interacción del consumidor, sino que también influye en la percepción positiva del producto, favoreciendo la satisfacción y fidelización.


      .row.mb-5
        .col-lg-9
          p(data-aos="fade-left") #[strong Ejemplo.]
          p(data-aos="fade-right") La empresa Spotify redefine su producto a través de la personalización basada en datos. Utilizando algoritmos de inteligencia artificial, analiza los hábitos de escucha de sus usuarios para ofrecer recomendaciones musicales únicas y listas de reproducción personalizadas. Este enfoque no solo mejora la experiencia del cliente, sino que también fortalece la relación con la marca al satisfacer las necesidades de forma específica y constante.
        .col-lg-3
          figure
            img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in").mt-4.mt-lg-0


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Estrategias de precio digital 

      p(data-aos="fade-left") Ahora, analicemos las estrategias del precio digital:


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-1-2.png")
              .col-lg-7
                h5 Modelos de fijación dinámica: ajuste de precios en tiempo real, según la demanda y el comportamiento del usuario
                p Las estrategias de precio en el entorno digital, han adoptado la fijación dinámica, un modelo que ajusta los precios en tiempo real, con base en la demanda del mercado, el comportamiento del usuario y factores competitivos. Según Kotler y Keller (2016), la tecnología permite que las empresas modifiquen los precios de manera automatizada, reaccionando ágilmente a los cambios de la oferta y la demanda. Esto no solo optimiza la rentabilidad, sino que también facilita captar oportunidades instantáneas en el mercado.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-2-2.png")
              .col-lg-7
                h5 Segmentación de precios basada en análisis de datos y patrones de compra
                p El análisis de datos y la inteligencia artificial, permiten aplicar estrategias de segmentación de precios, según el perfil y comportamiento del cliente. Céspedes Sáenz (2010), destaca que la segmentación se enfoca en identificar patrones de compra, facilitando la oferta de precios diferenciados, basados en variables como la disposición al pago, el historial de compras y las preferencias del consumidor. Esta estrategia maximiza la eficiencia, al ofrecer precios específicos a diferentes segmentos.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/slider-3-2.png")
              .col-lg-7
                h5 Uso del Big Data para personalizar ofertas de precios, según el cliente
                p El Big Data ha revolucionado la personalización de precios al ofrecer información detallada sobre el comportamiento del consumidor. Cortés Cabrera (2023), señala que el uso de algoritmos predictivos permite ajustar precios y generar ofertas personalizadas, que se alineen con las necesidades de cada usuario, aumentando la satisfacción del cliente y mejorando la probabilidad de conversión.



      .row.mb-5
        .col-lg-9
          p(data-aos="fade-left") #[strong Ejemplo.]
          p(data-aos="fade-right") La plataforma Amazon aplica estrategias de precios dinámicos, mediante algoritmos predictivos que analizan en tiempo real, variables como la demanda del producto, el inventario y el historial de búsqueda del usuario. Este sistema permite ajustar los precios automáticamente, optimizando las ventas y ofreciendo a los consumidores, opciones alineadas con sus patrones de compra y comportamiento (Kotler & Keller, 2016).
        .col-lg-3
          figure
            img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in").mt-4.mt-lg-0


      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Estrategias de plaza: canales y distribución digital

      p(data-aos="fade-left") Las siguientes, son algunas estrategias de plaza.

      .bg-full-width.bg-color-3.mb-lg-5

          .row.justify-content-center.align-items-center
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/5.svg", alt="")
            .col-lg-7
              .pt-4
                h5.mb-4(data-aos="flip-up") Omnicanalidad: integración de canales físicos y digitales, para una experiencia de compra fluida
                p.mb-4(data-aos="fade-right") La omnicanalidad se centra en integrar todos los canales de venta y comunicación disponibles, tanto físicos como digitales, para crear una experiencia de compra fluida, coherente y sin interrupciones. Según Kotler y Keller (2016), la clave de esta estrategia es que el cliente pueda interactuar con la marca, de forma intercambiable entre canales, manteniendo la continuidad en el servicio y la oferta de valor. Por ejemplo, un usuario puede ver un producto en línea, adquirirlo en una tienda física, devolverlo mediante una aplicación y recibir soporte a través de redes sociales.
        
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 Implementar esta estrategia requiere de herramientas como CRM (Customer Relationship Management) y sistemas integrados que recopilen y analicen información del cliente en tiempo real. La omnicanalidad no solo optimiza la experiencia del usuario, sino que también facilita el análisis de datos, para mejorar procesos de inventario, logística y comunicación con el cliente, lo que fortalece la lealtad y satisfacción.

          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-0 #[strong Marketplaces y comercio electrónico como herramientas de expansión global]
            p.mb-0 Los marketplaces y las plataformas de comercio electrónico, representan un cambio disruptivo en la distribución, permitiendo a empresas de cualquier tamaño, alcanzar un público global sin necesidad de contar con una presencia física. 
          
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")

      p(data-aos="fade-left").mb-5 Céspedes Sáenz (2010), destaca que estos canales no solo reducen las barreras de entrada, sino que también proporcionan infraestructura tecnológica, métodos de pago eficientes y soluciones logísticas, que simplifican las operaciones. Conozcamos algunos de estos canales.

      h3.mb-4(data-aos="fade-left") Marketplaces 
      
      p(data-aos="fade-left") Funcionan como centros comerciales virtuales, donde múltiples vendedores ofrecen sus productos. Las principales plataformas incluyen:


      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/7.png", alt="", data-aos="zoom-in").mt-4.mt-lg-0
        .col-lg-8
          LineaTiempoD.color-primario.large(data-aos="fade-left")
            p(numero="1" titulo="Amazon") Líder mundial en comercio electrónico, combina distribución eficiente, algoritmos predictivos y un sistema logístico robusto.
            p(numero="2" titulo="Mercado Libre") Dominante en América Latina, ofrece pagos seguros (Mercado Pago) y soluciones logísticas (Mercado Envíos).
            p(numero="3" titulo="Alibaba") Especializado en el comercio #[b B2B] (#[em business-to-business]), facilitando transacciones entre fabricantes y distribuidores, a escala global.
            p(numero="4" titulo="Temu") Una plataforma emergente que ha ganado terreno por sus #[b precios bajos] y #[b envíos gratuitos], aprovechando economías de escala y campañas promocionales agresivas.
            p(numero="5" titulo="Shein") Referente del #[em fast fashion digital], combina la producción ágil y la personalización mediante algoritmos de recomendación basados en #[em Big Data], ofreciendo productos a #[b precios accesibles] con #[b distribución global eficiente].




      #Tarjetas1.bg-full-width.bg-fondo-5
        .px-4.px-md-5.pb-md-3

          h3.mb-4(data-aos="fade-left") Plataformas de comercio electrónico 
      
          p(data-aos="fade-left") Permiten a las empresas crear y gestionar sus propias tiendas en línea, con herramientas personalizables, lo que democratiza el acceso al comercio digital:
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/8.svg"
                  alt="Barreras"
                  style="width: 90px"
                )
                h5.mb-2.text-center Shopify
                p.mb-0.text-center Plataforma intuitiva para pequeñas y medianas empresas, que ofrece soluciones completas de gestión, pagos y envíos.

            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/9.svg"
                  alt="Información"
                  style="width: 90px"
                )
                h5.mb-2.text-center WooCommerce
                p.mb-0.text-center Una extensión de WordPress, que facilita la creación de tiendas virtuales personalizadas.

            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/10.svg"
                  alt="Producto"
                  style="width: 90px"
                )
                h5.mb-2.text-center BigCommerce
                p.mb-0.text-center Orientada a empresas en crecimiento, permite expandirse con soluciones integradas para comercio electrónico internacional.
      
          p(data-aos="fade-left") Estas herramientas han permitido que marcas de todos los tamaños amplíen su alcance, diversifiquen sus canales de distribución y respondan rápidamente a las demandas del consumidor moderno.

      h3.mb-4(data-aos="fade-left") Principales plataformas digitales
      
      p(data-aos="fade-left") Las plataformas digitales son la columna vertebral de la distribución digital, facilitando la interacción entre empresas y clientes, optimizando procesos logísticos y mejorando la experiencia de compra. Algunas de las plataformas más destacadas, son:


      .row.justify-content-center.align-items-stretch.mb-5

        .col-lg(data-aos="fade-left")
          .bg-color-1.p-4.px-md-5.h-100
            
            ol.lista-ol(data-aos="fade-up").pt-4
              li.mb-3
                .lista-ol--cuadro__vineta
                  span 1
                | Reconocida por su alcance global y su innovador sistema de logística (Fulfillment by Amazon).
              li.mb-3
                .lista-ol--cuadro__vineta
                  span 2
                | Optimiza la cadena de suministro mediante la producción y distribución digital bajo demanda, minimizando costos y tiempos de entrega.
              li.mb-3
                .lista-ol--cuadro__vineta
                  span 3
                | Ofrece precios competitivos y estrategias promocionales, centradas en la retención del cliente, aprovechando la eficiencia en la distribución masiva.
              li.mb-3
                .lista-ol--cuadro__vineta
                  span 4
                | Líder en Latinoamérica, conecta vendedores con consumidores mediante un ecosistema digital completo, que incluye pagos, envíos y atención al cliente.
              li.mb-0
                .lista-ol--cuadro__vineta
                  span 5
                | Permite la creación de tiendas virtuales personalizadas, con funciones avanzadas de gestión y análisis de datos.

        .col-lg-auto(data-aos="zoom-in")
          img.img-fluid(src='@/assets/curso/tema2/11.png', style='max-width:504px', alt='').mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0


      .bg-full-width.bg-color-2
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estas plataformas no solo mejoran la visibilidad de las marcas, sino que también ofrecen herramientas analíticas para entender el comportamiento del cliente y optimizar la toma de decisiones en tiempo real.
              
              
      .bg-full-width.bg-color-3.mb-lg-5

        .row.justify-content-center.align-items-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/tema2/13.svg", alt="")
          .col-lg-7
            .pt-4
              p.mb-4(data-aos="fade-right") #[strong Recuerde.] Las estrategias de plaza en el entorno digital, representan un cambio fundamental en la manera en que los productos llegan a los consumidores. La omnicanalidad crea una experiencia integrada y fluida, mientras que los marketplaces y plataformas de comercio electrónico, facilitan la expansión global y la eficiencia operativa. Herramientas como Amazon, Shein, Temu y Shopify, ejemplifican cómo la tecnología ha revolucionado la distribución, permitiendo que las empresas conecten con su público objetivo, en un mercado altamente competitivo y en constante transformación.

      #t_2_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.4] Promoción digital: comunicación y #[em engagement]


	
      .row.mb-5

        .col-lg-7
          p(data-aos="fade-left") Para finalizar la temática, conozcamos sobre la promoción digital.
          h5(data-aos="fade-right") Estrategias de redes sociales: uso de Facebook, Instagram y TikTok, como canales claves para conectar con el cliente.

          p(data-aos="fade-right") Las redes sociales son #[b canales esenciales] para las estrategias de promoción digital, debido a su capacidad de conectar marcas con clientes de manera directa, personalizada y en tiempo real. Plataformas como #[b Facebook], #[b Instagram] y #[b TikTok], permiten la creación de campañas segmentadas basadas en datos demográficos, comportamientos y preferencias del público objetivo (Cortés Cabrera, 2023).

          p(data-aos="fade-right") Analicemos los canales antes mencionados:
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in").mb-4.mt-lg-0



      .bg-full-width.bg-fondo-1
        .px-4.px-md-5.pb-md-3

          .row.justify-content-center.align-items-stretch
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/15.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Facebook
                  p.mb-0 Herramienta eficaz para #[b segmentación avanzada] y #[b publicidad pagada], mediante Meta Ads, permitiendo a las marcas conectar con audiencias específicas.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/16.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Instagram
                  p.mb-0 Ideal para contenido visual atractivo como #[b historias], #[b #[em reels]] y #[b publicaciones], que impulsan la interacción y fortalecen la identidad de marca.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/17.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center TikTok
                  p.mb-0 Plataforma #[b #[em short-form video]], enfocada en contenido creativo y viral, que conecta especialmente con audiencias jóvenes, a través de desafíos y tendencias.


      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estas plataformas permiten la generación de #[b comunidades digitales], incentivando la participación activa de los consumidores y creando relaciones más cercanas con las marcas. 


      h2.mb-4(data-aos="fade-left") Automatización de marketing: cómo plataformas como MailChimp, optimizan procesos de correo electrónico

      p(data-aos="fade-left") La automatización del marketing facilita la personalización y eficiencia en la comunicación con los clientes. Herramientas como MailChimp, permiten la creación y gestión de campañas de correo electrónico automatizadas, segmentando audiencias y enviando mensajes relevantes según el comportamiento del consumidor. 

      p(data-aos="fade-left") Hablemos sobre algunos datos de MailChimp.

      .bg-full-width.bg-color-3.mb-lg-5
        .row.justify-content-center.align-items-center
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/18.png", alt="")
            .col-lg-7
              .px-4
                ul.lista-ul.mb-4
                  li.mb-4
                    i.fas.fa-check-circle
                    | #[b Beneficios:] Ahorro de tiempo, segmentación eficiente y mayor retorno sobre la inversión (ROI), mediante campañas automatizadas.
                  li.mb-4
                    i.fas.fa-check-circle
                    | #[b Ejemplo de uso:] Envío de correos electrónicos de bienvenida, recordatorios de carrito abandonado y promociones personalizadas basadas en el historial de compra.

                p(data-aos="fade-right") Esta herramienta optimiza la experiencia del cliente, permitiendo a las empresas mantener una comunicación constante y efectiva con su audiencia.

      h2.mb-4(data-aos="fade-left") Marketing de contenidos: creación de videos, blogs y contenido interactivo, para generar engagement

      p(data-aos="fade-left") El marketing de contenidos, se basa en la creación y distribución de material que aporte valor al consumidor, con el objetivo de atraer, educar y fidelizar al público. Esta estrategia incluye:

      #Tarjetas1.bg-full-width.bg-fondo-1
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/19.svg"
                  alt="Barreras"
                  style="width: 90px"
                )
                h5.mb-2.text-center Videos
                p.mb-0.text-center Publicaciones en plataformas como YouTube, Instagram Reels y TikTok, que permiten contar historias visuales de manera efectiva.

            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/20.svg"
                  alt="Información"
                  style="width: 90px"
                )
                h5.mb-2.text-center Blogs
                p.mb-0.text-center Artículos optimizados para SEO, que mejoran la visibilidad en buscadores y posicionan a la marca como experta en su sector.

            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema2/21.svg"
                  alt="Producto"
                  style="width: 90px"
                )
                h5.mb-2.text-center Contenido interactivo
                p.mb-0.text-center Webinars, pódcasts, infografías y encuestas, que fomentan la participación y la interacción con el usuario.


      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          p.mb-0 Kotler y Keller (2016), destacan que el contenido de calidad no solo genera engagement, sino que también construye relaciones sólidas con los clientes, al ofrecer soluciones y conocimientos relevantes.


      .row.mb-5
        .col-lg-9
          p(data-aos="fade-left") #[strong Ejemplo.]
          p(data-aos="fade-right") La campaña de #[b “Spotify Wrapped”], es un caso exitoso de promoción digital y engagement. Esta estrategia utiliza los datos de escucha de los usuarios, para crear resúmenes personalizados de su año musical, que luego son compartidos en redes sociales. Al combinar contenido interactivo, personalización y viralidad, Spotify logró generar una participación masiva en plataformas como Instagram y Twitter, fortaleciendo su conexión con los usuarios y promoviendo la difusión orgánica de la marca.
        .col-lg-3
          figure
            img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in").mt-4.mt-lg-0
</template>
<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

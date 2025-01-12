<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1.  Estrategias de mercadeo y comunicación digital'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    .row.mb-5

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.svg", data-aos="zoom-in").mt-4.mt-lg-0
      .col-lg-8
        p(data-aos="fade-left").mb-4  Las estrategias de mercadeo y comunicación digital, constituyen la adaptación del marketing tradicional al entorno tecnológico actual, facilitando la creación de valor a través de la interactividad, segmentación precisa y la medición en tiempo real. Según Kotler y Keller (2016), el marketing digital permite a las organizaciones diseñar campañas integradas que combinan plataformas como redes sociales, SEO, marketing de contenidos y herramientas de automatización, alineando el mensaje con las necesidades y comportamientos del consumidor.
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          p.mb-0 La Comunicación Integrada de Marketing (IMC), en el ámbito digital, se enfoca en transmitir mensajes coherentes a través de múltiples canales, optimizando los recursos y maximizando el alcance. Cortés Cabrera (2023), señala que los avances en tecnología, como el uso de Big Data y CRM, facilitan el análisis de grandes volúmenes de información, permitiendo anticipar tendencias, personalizar las estrategias y evaluar su efectividad, con métricas claves como el ROI y la tasa de conversión.
    
    p(data-aos="fade-left").mb-4  Además, las estrategias digitales, deben incorporar un enfoque ético y sostenible, respondiendo a las demandas de consumidores cada vez más conscientes y exigentes. 

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Céspedes Sáenz (2010), destaca la importancia de la transparencia y la responsabilidad social en el diseño de campañas, lo cual fortalece la relación con el cliente y mejora la reputación de la marca en un entorno globalizado y altamente competitivo.

    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

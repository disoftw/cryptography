 
<template>
  <div>
    <a-collapse>
      <a-collapse-panel v-for="(q, i) in questions" :key="i">
        <template v-slot:header>
          <div v-html="i + 1 + '. ' + q.q"></div>
        </template>
        <a-radio-group v-model="q.selected" @change="onChange">
          Seleccione una opción:
          <a-radio
            :style="radioStyle"
            v-for="(option, j) in q.options"
            :key="j"
            :value="option"
          >
            {{ option }}
          </a-radio>
        </a-radio-group>

        <div v-if="q.selected">
          <a-alert
            class="answers"
            v-if="q.selected !== q.options[q.answer]"
            message="Respuesta incorrecta"
            type="warning"
            show-icon
          >
            <template v-slot:description>
              <p v-html="q.retro[1]"></p>
            </template>
          </a-alert>
          <a-alert
            class="answers"
            message="Respuesta correcta"
            type="success"
            show-icon
          >
            <template v-slot:description>
              <p v-html="q.retro[0]"></p>
            </template>
          </a-alert>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<style lang="stylus" scoped>
.answers {
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>

<script>
export default {
  data () {
    return {
      questions: [
        {
          q: '¿Para que sirve un <code>slot</code>?',
          options: [
            'Sirve como punto de distribución para el contenido',
            'Agrega funcionalidad al componente',
            'Define contenido por defecto para el componente'
          ],
          answer: 0,
          retro: [
            'Vue implementa una API de distribución de contenido, usando el elemento <code>slot</code> para <b>servir como puntos de distribución para el contenido</b>.',
            'Es una respuesta parcial, ya que además de eso los slots sirven para mucho más que solo agregar funcionalidad y valores por defecto'
          ],
          selected: null
        },
        {
          q:
            '¿Que afirmación es correcta sobre los elementos <code>slot</code> y <code>slot-scope</code>?',
          options: [
            'No están obsoletos, pero usarlos generá errores en la versión 2',
            'Están obsoletos, y han sido eliminados',
            'Están obsoletos, pero no han sido eliminados'
          ],
          answer: 2,
          retro: [
            'En la v2.6.0 se introdujó una nueva sintaxis unificada (la directiva v-slot) para los slots con nombre y scope. Esta sustituye los atributos “slot” y “slot-scope”, <b>que ahora están obsoletos</b>, pero que <b>no han sido eliminados</b> y todavía están documentados.',
            'Si están obsoletos, pero no han sido eliminados'
          ],
          selected: null
        },
        {
          q:
            'Si defino dentro de un componente un slot llamado <b>titulo</b>. ¿cual es la sintaxis correcta para usar ese slot? ',
          options: [
            '<template v-slot="titulo">...</template>',
            '<template v-slot:titulo>...</template>',
            '<template slot:titulo>...</template>'
          ],
          retro: [
            '<b>v-slot:titulo</b> es la sintaxis correcta para usar el slot. Recuerde para cualquier slot con nombre se usa la directiva v-slot seguida de ":" y el nombre del slot que quiere utilizar para cualquier componente.',
            'Ni <b>v-slot="titulo"</b> ni <b>slot:titulo</b> corresponden a una sintaxis correcta para utilizar con slot con nombre.'
          ],
          answer: 1,
          selected: null
        },
        {
          q:
            '¿Que componentes definen un Layout básico de una aplicación en <b>Vuetify</b>?',
          options: [
            'v-nav, v-bottom-nav, v-content, v-drawer, v-footer',
            'header, nav, section, article, aside, footer',
            'v-app-bar, v-navigation-drawer, v-main, v-container, v-footer'
          ],
          answer: 2,
          retro: [
            'Los componentes <b>v-app-bar, v-navigation-drawer, v-main, v-container, v-footer</b> corresponden a un Layout básico junto con <b>v-navigation-bottom, v-system-bar</b> para construir aplicaciones web, responsivas y escritorio con <b>Vuetify</b>.',
            'Los elementos <b>header, nav, section, article, aside, footer</b> corresponden a un layout de HTML5 es importante conocerlos ya que de ellos se basan cualquier layout de un framework mientras que v-nav, v-bottom-nav, v-drawer no existen en <b>Vuetify</b>.'
          ],
          selected: null
        },
        {
          q:
            '¿Qué sucede cuando se le pasa un tipo incorrecto a un <code>prop</code>?',
          options: [
            'Se destruye el componente',
            'Genera una excepción de tipo',
            'Nada, ya que pueden ser dinámicos'
          ],
          answer: 1,
          retro: [
            'Genera una excepción de tipo de dato que puede servir para evitar pasar variables a los componentes tales como <code>String</code> cuando se esperaba un <code>Array</code>.',
            'No en todos los casos se destruye el componente dependiendo de la pila de errores, y para que estos sean dinámicos se tiene que definir el los <code>props</code> como un arreglo de strings.'
          ],
          selected: null
        },
        {
          q:
            'Para que sirve el la propiedad <code>app</code> de un componente de <b>Vuetify</b>',
          options: [
            'Le indica a a Vuetify que ese componente es estático y no debe moverse de su sitio.',
            'Le indica a a Vuetify que ese componente siempre debe tener el mismo tamaño de acuerdo a la pantalla.',
            'Le indica a a Vuetify que ese componente forma parte del Layout y lo acomoda de manera semántica.'
          ],
          answer: 2,
          retro: [
            'Le indica a a Vuetify que ese componente forma parte del Layout y lo acomoda de manera semántica. Puede colocar sus elementos de diseño en cualquier lugar, siempre que aplique la propiedad <b>app</b>.',
            'La propiedad <b>app</b> no tiene nada que ver con el tamaño ni con la posición estática de un componente dentro del layout.'
          ],
          selected: null
        },
        {
          q:
            '¿Cuales son las características avanzadas de Vue sobresalen en un framework como <b>Vuetify</b>?',
          options: [
            'Mixins, eventos, tienda de datos y dinámismo',
            'Props, slots, directivas personalizadas y plugins',
            'Internalización y Server Side Rendering'
          ],
          answer: 1,
          retro: '',
          retro: [
            'Entender los <b>slots, props, plugins y las directivas personalizadas</b> nos ayuda a entender gran parte de un framework como <b>Vuetify</b>.',
            'Estos conceptos forman parte de las características avanzadas de Vue pero no es el principal enfoque para enteder un framework.'
          ],
          selected: null
        },
        {
          q: '¿Cuando se utiliza una <b>directiva</b> personalizada?',
          options: [
            'Para manipular el DOM y aplicar múltiples estilos a un componente.',
            'Cuando se necesita ocultar o mostrar un componente dependiendo de un valor.',
            'Destruir un componente por completo de la aplicación'
          ],
          answer: 0,
          retro: '',
          retro: [
            'Además del conjunto predeterminado de directivas incluidas en el core, <b>Vue</b> también le permite registrar sus propias directivas personalizadas. En la v2.0, la forma primaria de reutilización y abstracción del código son los componentes; sin embargo, puede haber casos en los que necesite un acceso de bajo nivel al DOM en elementos simples, y aquí es donde las <b>directivas personalizadas</b> son útiles.',
            'Si se necesita ocultar o mostrar un componente dependiendo de un valor se debe utilizar la directiva <code>v-show</code> o <code>v-if</code> dependiendo el caso. La autodestrucción de un componente se realiza llamando a su propiedad <code>this.destroy()</code>.'
          ],
          selected: null
        },
        {
          q:
            '¿Que disposición tendra un elemento dentro de un <code>v-col</code> con los siguientes propiedades: <b>:xs="12" :md="6" :lg="4"</b>?',
          options: [
            'Ocupará toda la pantalla en movil, tablet y en escritorio',
            'Siempre tendra las mismas dimensiones',
            'Ocupará toda la pantalla en movil, la mitad en tablet y 1/3 partes en escritorio'
          ],
          answer: 2,
          retro: '',
          retro: [
            'En un <b>sistema de grillas</b> de 12 columnas aplicar <b>xs=12, md=6 y lg=4</b> tendra un un efecto de toda la pantalla en movil, la mitad en tablet y 1/3 parte en escritorio, asi es como <b>Vuetify</b> define su <b>responsividad</b> usando <code>v-row</code> y <code>v-col</code>.',
            'En un <b>sistema de grillas</b> de 12 columnas para que un elemento ocupe toda la pantalla y/o tenga el mismo tamaño debemos aplicar un valor de <b>12</b> o el mismo para todos los <code>breakpoints</code>, respectivamente.'
          ],
          selected: null
        },
        {
          q: '¿Que procesadores ha ocupado Vuetify en toda su historia?',
          options: [
            'LESS & Stylus',
            'SASS & LESS',
            'Stylus y SASS',
            'Stylus & PostCSS'
          ],
          answer: 2,
          retro: [
            '<b>Stylus</b> y <b>SASS</b> son los proprocesadores de CSS que Vuetify ha utilizado a lo largo de sus versiones; donde el primero ha dejado de recibir soporte por lo que en algunas plantillas o proyectos que aun usen Stylus pueden tener problemas. Por el momento debemos acostumbrarnos a ver archivos de SASS dentro de nuestros proyectos hechos con <b>Vuetify</b>.',
            'Ni <b>LESS</b> ni <b>PostCSS</b> tienen soporte en <b>Vuetify</b>, sin embargo son grandes alternativas si se quiere profundizar en el mundo de los proprocesadores de CSS.'
          ],
          selected: null
        }
      ],
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }
  },
  methods: {
    onChange (e) {
      console.log('radio checked', e.target.value)
    }
  }
}
</script>
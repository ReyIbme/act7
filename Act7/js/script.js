const app = new Vue({
    el: '#seccion',
    data: {
        mostrar: false,
        mensaje: '',
    },
    methods: {
        muestraPregunta1: function(n) {
            if (n)
                this.mostrar = true;
            else
                this.mostrar = false;
            this.mensaje = this.mostrar ? '' : 'Gracias por Participar';
        },
        muestraResultados: function() {
            this.resultados = !this.resultados;
        }
    },
})
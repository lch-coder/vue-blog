<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            // model: 'miku',
            // model: 'koharu',
            // model: 'hibiki',
            // model: 'haru_2',
            model: 'haru_1',
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.live2dInit()
        })
    },
    methods: {
        live2dInit() {
            window.L2Dwidget.init({
                pluginRootPath: 'static/live2dw/',
                pluginJsPath: 'lib/',
                pluginModelPath: `live2d-widget-model-${this.model}/assets/`,
                tagMode: false,
                debug: false,
                model: {
                    jsonPath: `/static/live2dw/live2d-widget-model-${this.model}/assets/${this.model}.model.json`,
                },
                display: { position: 'right', width: 150, height: 300 },
                mobile: { show: true },
                log: false,
            })
        },
    },
}
</script>

<style>
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
}
</style>

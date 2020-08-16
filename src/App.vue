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
body,
td,
th {
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>

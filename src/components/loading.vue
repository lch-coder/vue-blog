<template>
    <div class="loading-wrapper">
        <svg viewBox="0 0 50 50" class="circular">
            <circle cx="25" cy="25" r="20" fill="none" class="path" />
        </svg>
    </div>
</template>
<style scoped lang="less">
.loading-wrapper {
    text-align: center;
    padding: 30px;
    .circular {
        width: 42px;
        height: 42px;
        animation: loading-rotate 2s linear infinite;
        .path {
            animation: loading-dash 1.5s ease-in-out infinite;
            stroke-dasharray: 90 120;
            stroke-dashoffset: 0;
            stroke-width: 2;
            stroke: #7eccd8;
            stroke-linecap: round;
        }
    }
}

@keyframes loading-dash {
    0% {
        stroke-dasharray: 1 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90 150;
        stroke-dashoffset: -40px;
    }

    100% {
        stroke-dasharray: 90 150;
        stroke-dashoffset: -120px;
    }
}

@keyframes loading-rotate {
    to {
        transform: rotate(1turn);
    }
}
</style>
<template>
    <div class="container">
        <p class="container-title">{{ title }}</p>
        <div class="video-frame">
            <iframe :src="source" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen class="container-video"></iframe>
        </div>
        <p class="container-info">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'VideoLesson',
    props: {
        title: String,
        source: String,
        description: String
    }
}
</script>

<style scoped>
.container-title {
    font-size: var( --medium-font-size );
}
</style>

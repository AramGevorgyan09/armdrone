<template>
    <div class="home">
        <div class="container">
            <p class="container-title">{{ $t('news') }}</p>
            <div class="container-images">
                <img v-for="( image, index ) in news" :key="index" :src="image.url" :alt="image.alt" 
                    class="container-image" @click="openImage( image.url, image.alt )">
            </div>
            <p class="container-info">{{ $t('newsInfo1') }}</p>
            <p class="container-info">{{ $t('newsInfo2') }}</p>
            <p class="container-info">{{ $t('newsInfo3') }}</p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'HomeView',
    props: {
        openImage: Function,
        news: Array
    }
}
</script>

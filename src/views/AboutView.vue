<template>
    <div class="about">
        <div class="container">
            <p class="container-title">{{ $t('about') }}</p>
            <div class="images">
                <img v-for="( image, index ) in about" :key="index" :src="image.url" :alt="image.alt" 
                    class="container-image" @click="openImage( image.url, image.alt )">
            </div>
            <p class="container-info">{{ $t('aboutUs1') }}</p>
            <p class="container-info">{{ $t('aboutUs2') }}</p>
            <p class="container-info">
                {{ $t('aboutUs3') }}
                <ul>
                    <li>{{ $t('aboutUs4') }}</li>
                    <li>{{ $t('aboutUs5') }}</li>
                    <li>{{ $t('aboutUs6') }}</li>
                    <li>{{ $t('aboutUs7') }}</li>
                    <li>{{ $t('aboutUs8') }}</li>
                </ul>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutView',
    props: {
        openImage: {
            type: Function,
            required: true
        },
        about: {
            type: Array,
            required: true
        }
    }
}
</script>

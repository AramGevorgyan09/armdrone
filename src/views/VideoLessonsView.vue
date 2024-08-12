<template>
    <div class="video-lessons">
        <div class="lessons-selection">
        <button @click="selectLesson( 1 )" id="b1" class="selected">1</button>
        <button @click="selectLesson( 2 )" id="b2">2</button>
        <button @click="selectLesson( 3 )" id="b3">3</button>
        <button @click="selectLesson( 4 )" id="b4">4</button>
    </div>
    <VideoLesson :title="this.$t(`l${ lessonId }Title`)" :source="videos[ lessonId - 1 ]" 
        :description="this.$t(`l${ lessonId }Description`)" />
    </div>
</template>

<script>
import VideoLesson from '@/components/VideoLesson.vue';

export default {
    name: 'VideoLessonsView',
    components: {
        VideoLesson
    },
    data() {
        return {
            videos: [
                'https://www.youtube.com/embed/QWVEmYj9QOI?si=OhPPeTIu2hzyyJBb',
                'https://www.youtube.com/embed/Ko0xgmUS1-c?si=Xh9gmxn02HHNfOBU',
                'https://www.youtube.com/embed/GWkuFGZk750?si=XxEA7jUCGImKtd72',
                'https://www.youtube.com/embed/JE3I4YjMpFw?si=i5Q8xynmFv_yk-N3'
            ],
            lessonId: 1
        };
    },
    methods: {
        selectLesson( id ) {
            this.lessonId = id;
            document.querySelector('.selected').classList.remove('selected');
            document.getElementById(`b${ id }`).classList.add('selected');
        }
    }
}
</script>

<style scoped>
.lessons-selection {
    margin: var( --large-distance );
    margin-left: 50%;
    transform: translate( -50% );
    width: fit-content;
    border: var( --thick-border );
    border-radius: var( --main-border-radius );
    padding: var( --medium-distance );
    display: grid;
    grid-template-columns: repeat( 4, 1fr );
    gap: var( --medium-distance );
}

.lessons-selection button {
    width: 50px;
    height: 50px;
    background-color: var( --second-color );
    color: var( --first-color );
    font-size: var( --medium-font-size );
    border: var( --thin-border );
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
}

.lessons-selection button:hover {
    transform: scale( 1.2 );
}

.lessons-selection .selected {
    background-color: var( --first-color );
    color: var( --third-color );
    transform: scale( 1.2 );
}
</style>

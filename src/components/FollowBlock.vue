<template>
    <div class="follow">
        <a href="https://www.youtube.com/@ArmDroneCommunity" target="_blank">
            <img src="@/assets/images/youtube.webp" alt="YouTube">
        </a>
        <a href="https://t.me/ArmDrone_Community" target="_blank">
            <img src="@/assets/images/telegram.webp" alt="Telegram">
        </a>
        <a href="https://www.instagram.com/armdrone.community/" target="_blank">
            <img src="@/assets/images/instagram.webp" alt="Instagram">
        </a>
        <a href="https://www.facebook.com/ArmDroneCommunity" target="_blank">
            <img src="@/assets/images/facebook.png" alt="Facebook">
        </a>
    </div>
</template>

<script>
export default {
    name: 'FollowBlock'
}
</script>

<style scoped>
.follow {
    width: min-content;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat( 4, 1fr );
}

.follow a {
    width: min-content;
    height: min-content;
    user-select: none;
}

.follow img {
    width: 30px;
    cursor: pointer;
}

.follow img:hover {
    transform: scale( 1.3 );
}

@media screen and ( max-width: 700px ) {
    .follow {
        width: 180px;
    }

    .follow img {
        width: 30px;
    }
}
</style>

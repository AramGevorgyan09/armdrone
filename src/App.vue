<template>
    <div id="logo" class="logo">
        <img src="./assets/images/armdrone.png" alt="ArmDrone Community" id="armdrone">
    </div>

    <header id="header">
        <div id="mobileMenu" class="mobile-menu" v-if="mobile == true" @click="toggle()">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div id="menu" class="menu">
                <router-link to="/" id="home" class="mobile" @click="scrollToTop">{{ $t('home') }}</router-link>
                <router-link to="/videolessons" id="videoLessons" class="mobile" @click="scrollToTop">{{ $t('videoLessons') }}</router-link>
                <router-link to="/about" id="about" class="mobile" @click="scrollToTop">{{ $t('about') }}</router-link>
                <FollowBlock />
            </div>
        </div>

        <FollowBlock v-if="mobile == false" />
        <nav v-if="mobile == false">
            <router-link to="/" id="home" @click="scrollToTop">{{ $t('home') }}</router-link>
            <router-link to="/videolessons" id="videoLessons" @click="scrollToTop">{{ $t('videoLessons') }}</router-link>
            <router-link to="/about" id="about" @click="scrollToTop">{{ $t('about') }}</router-link>
        </nav>

        <div id="languageSelect" class="custom-select">
            <div class="custom-select-button">
                <span id="selectedLanguage">
                    <img src="./assets/images/armenia.png" alt="Armenia">Հայերեն
                </span>
                <img src="./assets/images/arrow1.png" alt="Arrow" class="arrow">
            </div>
            <div id="languageOptions" class="custom-select-options">
                <div @click="choose( 'l1', 'languageOptions', 'selectedLanguage', 'language' ); changeLanguage('am')" 
                    class="custom-select-option language selected-option" id="l1">
                    <img src="./assets/images/armenia.png" alt="Armenia">Հայերեն
                </div>
                <div @click="choose( 'l2', 'languageOptions', 'selectedLanguage', 'language' ); changeLanguage('ru')" 
                    class="custom-select-option language" id="l2">
                    <img src="./assets/images/russia.png" alt="Russia">Русский
                </div>
                <div @click="choose( 'l3', 'languageOptions', 'selectedLanguage', 'language' ); changeLanguage('en')" 
                    class="custom-select-option language" id="l3">
                    <img src="./assets/images/uk.png" alt="United Kingdom">English
                </div>
            </div>
        </div>
    </header>

    <router-view :openImage="openImage" :news="news" :about="about" />
    
    <div id="openedImage">
        <img :src="openedImageURL" :alt="openedImageAlt" class="image">
        <img src="@/assets/images/close.png" alt="Close" class="close" @click="closeImage">
        <img src="@/assets/images/arrow1.png" alt="Left" id="left" 
            @click=" this.openedImageAlt.slice( 0, -1 ) == 'News' ? changeImage( 'news', 'left' ) : changeImage( 'about', 'left' ) ">
        <img src="@/assets/images/arrow1.png" alt="Right" id="right" 
            @click=" this.openedImageAlt.slice( 0, -1 ) == 'News' ? changeImage( 'news', 'right' ) : changeImage( 'about', 'right' ) ">
    </div>

    <button id="scrollToTop" @click="scrollToTop"><img src="./assets/images/arrow2.png" alt="Arrow"></button>

    <footer>
        <p class="footer-info-title">{{ $t('partners') }}</p>
        <div id="partners" class="partners">
            <span class="image-frame">
                <img src="@/assets/images/partners/ysu.png" alt="YSU">
                <p class="image-title">{{ $t('ysu') }}</p>
            </span>
            <span class="image-frame">
                <img src="@/assets/images/partners/physmath.png" alt="PhysMath">
                <p class="image-title">{{ $t('physmath') }}</p>
            </span>
        </div>

        <p class="end-text">&copy; 2024. ArmDrone Community</p>
    </footer>
</template>

<script>
import FollowBlock from '@/components/FollowBlock.vue';

export default {
    name: 'App',
    components: {
        FollowBlock
    },
    data() {
        return {
            mobile: undefined,
            openedImageURL: undefined,
            openedImageAlt: undefined,
            news: [
                {
                    url: require('@/assets/images/news/news1.jpg'),
                    alt: 'News1'
                },
                {
                    url: require('@/assets/images/news/news2.jpg'),
                    alt: 'News2'
                },
                {
                    url: require('@/assets/images/news/news3.jpg'),
                    alt: 'News3'
                },
                {
                    url: require('@/assets/images/news/news4.jpg'),
                    alt: 'News4'
                },
                {
                    url: require('@/assets/images/news/news5.jpg'),
                    alt: 'News5'
                },
                {
                    url: require('@/assets/images/news/news6.jpg'),
                    alt: 'News6'
                },
                {
                    url: require('@/assets/images/news/news7.jpg'),
                    alt: 'News7'
                },
                {
                    url: require('@/assets/images/news/news8.jpg'),
                    alt: 'News8'
                }
            ],
            about: [
                {
                    url: require('@/assets/images/about/about1.jpg'),
                    alt: 'About1'
                },
                {
                    url: require('@/assets/images/about/about2.png'),
                    alt: 'About2'
                },
                {
                    url: require('@/assets/images/about/about3.jpg'),
                    alt: 'About3'
                }
            ],
        };
    },
    mounted() {
        if ( window.innerWidth > '1100' ) {
            this.mobile = false;
        } else {
            this.mobile = true;
        }

        window.addEventListener( 'scroll', this.handleScroll );

        this.addHoverListenersTo( 'languageSelect', 'languageOptions' );
    },
    beforeUnmount() {
        window.removeEventListener( 'scroll', this.handleScroll );
    },
    methods: {
        toggle() {
            document.getElementById('mobileMenu').classList.toggle("change");
            const menu = document.getElementById('menu');
            if ( menu.style.left < '0' ) {
                menu.style.left = '0';
            } else {
                menu.style.left = '-100%';
            }
        },
        scrollToTop() {
            window.scrollTo( {
                top: 0,
                behavior: 'smooth'
            } );
        },
        changeLanguage( language ) {
            this.$i18n.locale = language;
        },
        handleScroll() {
            const button = document.getElementById('scrollToTop');

            if ( window.scrollY >= Math.floor( window.innerHeight / 2 ) ) {
                button.style.right = 'var( --medium-distance )';
            } else {
                button.style.right = '-60px';
            }
        },
        addHoverListenersTo( selectId, optionsId ) {
            const options = document.getElementById( optionsId );
            document.getElementById( selectId ).addEventListener('mouseover', () => {
                options.style.display = 'grid';
                setTimeout( () => {
                    options.style.opacity = '1';
                }, 0 );
            });

            document.getElementById( selectId ).addEventListener('mouseleave', () => {
                options.style.opacity = '0';
                setTimeout( () => {
                    options.style.display = 'none';
                }, 300 );
            });
        },
        choose( optionId, optionsId, buttonTextId, optionClass ) {
            const element = document.getElementById( optionId );
            document.getElementById( buttonTextId ).innerHTML = element.innerHTML;

            for ( const option of document.getElementsByClassName( optionClass ) ) {
                option.classList.remove('selected-option');
            }
            element.classList.add('selected-option');

            const options = document.getElementById( optionsId );
            options.style.opacity = '0';
            setTimeout( () => {
                options.style.display = 'none';
            }, 300 );
        },
        openImage( imageURL, imageAlt ) {
            document.getElementById('openedImage').style.display = 'block';
            this.openedImageURL = imageURL;
            this.openedImageAlt = imageAlt;
            this.checkImage();
        },
        changeImage( images, direction ) {
            switch ( images ) {
                case 'news':
                    switch ( direction ) {
                        case 'left':
                            if ( document.getElementById('left').style.cursor != 'no-drop' ) {
                                this.openedImageURL = this.news[ this.openedImageAlt[ this.openedImageAlt.length - 1 ] - 2 ].url;
                                this.openedImageAlt = this.news[ this.openedImageAlt[ this.openedImageAlt.length - 1 ] - 2 ].alt;
                            }
                            break;
                        case 'right':
                            if ( document.getElementById('right').style.cursor != 'no-drop' ) {
                                this.openedImageURL = this.news[ this.openedImageAlt[ this.openedImageAlt.length - 1 ] ].url;
                                this.openedImageAlt = this.news[ this.openedImageAlt[ this.openedImageAlt.length - 1 ] ].alt;
                            }
                            break;
                        default:
                            break;
                    }
                    this.checkImage();
                    break;
                case 'about':
                    switch ( direction ) {
                        case 'left':
                            if ( document.getElementById('left').style.cursor != 'no-drop' ) {
                                this.openedImageURL = this.about[ this.openedImageAlt[ this.openedImageAlt.length - 1 ] - 2 ].url;
                                this.openedImageAlt = this.about[ this.openedImageAlt[ this.openedImageAlt.length - 1 ] - 2 ].alt;
                            }
                            break;
                        case 'right':
                            if ( document.getElementById('right').style.cursor != 'no-drop' ) {
                                this.openedImageURL = this.about[ this.openedImageAlt[ this.openedImageAlt.length - 1 ] ].url;
                                this.openedImageAlt = this.about[ this.openedImageAlt[ this.openedImageAlt.length - 1 ] ].alt;
                            }
                            break;
                        default:
                            break;
                    }
                    this.checkImage();
                    break;
                default:
                    break;
            }
        },
        checkImage() {
            let type = this.openedImageAlt.slice( 0, -1 );
            let number = this.openedImageAlt[ this.openedImageAlt.length - 1 ];
            switch ( type ) {
                case 'News':
                    switch ( number ) {
                        case '1':
                            document.getElementById('left').style.opacity = 0.5;
                            document.getElementById('left').style.cursor = 'no-drop';
                            document.getElementById('right').style.opacity = 1;
                            document.getElementById('right').style.cursor = 'pointer';
                            break;
                        case '8':
                            document.getElementById('right').style.opacity = 0.5;
                            document.getElementById('right').style.cursor = 'no-drop';
                            document.getElementById('left').style.opacity = 1;
                            document.getElementById('left').style.cursor = 'pointer';
                            break;
                        default:
                            document.getElementById('left').style.opacity = 1;
                            document.getElementById('left').style.cursor = 'pointer';
                            document.getElementById('right').style.opacity = 1;
                            document.getElementById('right').style.cursor = 'pointer';
                            break;
                    }
                    break;
                case 'About':
                    switch ( number ) {
                        case '1':
                            document.getElementById('left').style.opacity = 0.5;
                            document.getElementById('left').style.cursor = 'no-drop';
                            document.getElementById('right').style.opacity = 1;
                            document.getElementById('right').style.cursor = 'pointer';
                            break;
                        case '3':
                            document.getElementById('right').style.opacity = 0.5;
                            document.getElementById('right').style.cursor = 'no-drop';
                            document.getElementById('left').style.opacity = 1;
                            document.getElementById('left').style.cursor = 'pointer';
                            break;
                        default:
                            document.getElementById('left').style.opacity = 1;
                            document.getElementById('left').style.cursor = 'pointer';
                            document.getElementById('right').style.opacity = 1;
                            document.getElementById('right').style.cursor = 'pointer';
                            break;
                    }
                    break;
                default:
                    break;
            }
        },
        closeImage() {
            document.getElementById('openedImage').style.display = 'none';
        }
    }
}
</script>

<style>
.logo {
    position: relative;
    top: 0;
    left: 0;
    text-align: center;
}

.logo img {
    position: relative;
    width: 60%;
    user-select: none;
}

header {
    z-index: 100;
    position: sticky;
    top: 0;
    background-color: #030a14dd;
    padding: var( --medium-distance );
    border-bottom: var( --thin-border );
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-items: center;
}

nav .location-now, #menu .location-now {
    border-bottom-color: var( --first-main-color );
}

nav {
    padding: 0 var( --large-distance );
    border-right: var( --thin-border );
    border-left: var( --thin-border );
}

nav #videoLessons, nav #about {
    margin-left: var( --large-distance );
}

.mobile-menu .menu .mobile, nav a {
    font-size: var( --large-font-size );
    text-decoration: none;
    border-bottom: var( --thin-transparent-border );
    cursor: pointer;
    user-select: none;
}

.mobile-menu .menu .mobile:hover, nav a:hover {
    border-bottom-color: var( --first-main-color );
}

.bar1, .bar2, .bar3 {
    width: 40px;
    height: 4px;
    background-color: var( --first-main-color );
    margin: 10px 0;
}

.change .bar1 {
    transform: translate( 0, 14px ) rotate( -45deg );
}

.change .bar2 {
    opacity: 0;
}

.change .bar3 {
    transform: translate( 0, -14px ) rotate( 45deg );
}

.mobile-menu .menu {
    position: absolute;
    padding: 16px;
    top: calc( 100% + 2px );
    left: -100%;
    background-color: var( --third-main-color );
    display: grid;
    grid-template-rows: repeat( 4, 1fr );
    gap: 16px;
    transition: var( --long-transition );
    border: var( --thick-border );
    border-width: 0 2px 2px 2px;
}

.mobile-menu .menu .mobile {
    justify-self: start;
}

#languageSelect {
    text-align: center;
}

#languageSelect .custom-select-button, #languageSelect .custom-select-option {
    width: 200px;
}

.language {
    position: relative;
    text-align: center;
}

#selectedLanguage img, .arrow, .language img {
    position: absolute;
    top: 50%;
    transform: translate( 0, -50% );
}

#selectedLanguage img, .arrow {
    width: var( --medium-font-size );
    left: var( --medium-distance );
}

.arrow {
    left: unset;
    right: var( --medium-distance );
}

.language img {
    width: var( --small-font-size );
    left: var( --small-distance );
}

#openedImage {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    width: 90%;
    height: 90%;
    background-color: #000000ee;
    z-index: 100;
}

#openedImage .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    height: 90%;
}

#openedImage .close {
    position: absolute;
    top: var( --medium-distance );
    right: var( --medium-distance );
    width: 40px;
    cursor: pointer;
}

#openedImage #left, #openedImage #right {
    position: absolute;
    top: calc( 50% - 25px );
    width: 50px;
    cursor: pointer;
}

#openedImage .close:hover, #openedImage #left:hover, #openedImage #right:hover {
    scale: 1.2;
}

#openedImage #left {
    left: var( --medium-distance );
    rotate: -90deg;
}

#openedImage #right {
    right: var( --medium-distance );
    rotate: 90deg;
}

#scrollToTop {
    padding: 0;
    position: fixed;
    right: -60px;
    bottom: var( --medium-distance );
    width: 60px;
    height: 60px;
    background: transparent;
    border: var( --thick-border );
    border-radius: 50%;
    cursor: pointer;
    outline: none;
}

#scrollToTop img {
    width: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
}

footer {
    padding: var( --large-distance );
    background-color: var( --third-main-color );
    text-align: center;
}

.partners {
    width: max-content;
    margin: var( --large-distance ) 50%;
    transform: translate( -50% );
    display: grid;
    grid-template-columns: repeat( 2, 1fr );
    gap: 100px;
    justify-items: center;
}

.partners .image-frame {
    padding: var( --medium-distance );
    width: min-content;
}

.partners img {
    width: 250px;
    transition: var( --long-transition );
}

.partners img:hover {
    transform: scale( 1.1 );
}

.partners .image-title {
    font-size: var( --small-font-size );
    margin-top: var( --medium-distance );
}

.footer-info-title {
    font-size: var( --large-font-size );
}

.end-text {
    color: var( --fourth-main-color );
    font-size: var( --medium-font-size );
}
</style>

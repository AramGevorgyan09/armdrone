<template>
    <section class="logo-frame">
        <img src="./assets/images/armdrone.png" alt="ArmDrone" class="logo">
    </section>

    <header id="header">
        <div v-if="mobile == true" id="bars" @click="toggle">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>

        <nav v-if="mobile == true" id="mobileMenu" @click="toggle">
            <router-link to="/" id="home" @click="scrollToTop">{{ $t('home') }}</router-link>
            <router-link to="/videolessons" id="videoLessons" @click="scrollToTop">{{ $t('videoLessons') }}</router-link>
            <router-link to="/about" id="about" @click="scrollToTop">{{ $t('about') }}</router-link>
            <FollowBlock />
        </nav>

        <FollowBlock v-if="mobile != true" />

        <nav v-if="mobile != true" id="desktopMenu">
            <router-link to="/" id="home" @click="scrollToTop">{{ $t('home') }}</router-link>
            <router-link to="/videolessons" id="videoLessons" @click="scrollToTop">{{ $t('videoLessons') }}</router-link>
            <router-link to="/about" id="about" @click="scrollToTop">{{ $t('about') }}</router-link>
        </nav>

        <div id="languageSelect" class="custom-select">
            <div class="custom-select-button">
                <span id="selectedLanguage">
                    <img src="./assets/images/armenia.png" alt="Armenia">Հայերեն
                </span>
                <img src="./assets/images/arrow1.png" alt="Arrow" class="custom-select-arrow">
            </div>
            <div id="languageOptions" class="custom-select-options">
                <div id="l1" class="custom-select-option language selected-option" 
                    @click="chooseOption( 'l1', 'languageOptions', 'selectedLanguage', 'language' ); changeLanguage('am')">
                    <img src="./assets/images/armenia.png" alt="Armenia">Հայերեն
                </div>
                <div id="l2" class="custom-select-option language" 
                    @click="chooseOption( 'l2', 'languageOptions', 'selectedLanguage', 'language' ); changeLanguage('ru')">
                    <img src="./assets/images/russia.png" alt="Russia">Русский
                </div>
                <div id="l3" class="custom-select-option language" 
                    @click="chooseOption( 'l3', 'languageOptions', 'selectedLanguage', 'language' ); changeLanguage('en')">
                    <img src="./assets/images/uk.png" alt="United Kingdom">English
                </div>
            </div>
        </div>
    </header>

    <router-view :openImage="openImage" :news="news" :about="about" />
    
    <div id="openedImage">
        <img :src="openedImageURL" :alt="openedImageAlt" class="opened-image">
        <img src="@/assets/images/close.png" alt="Close" id="close" 
            @click="closeImage">
        <img src="@/assets/images/arrow1.png" alt="Left" id="left" 
            @click=" this.openedImageAlt.slice( 0, -1 ) == 'News' ? changeImage( 'news', 'left' ) : changeImage( 'about', 'left' ) ">
        <img src="@/assets/images/arrow1.png" alt="Right" id="right" 
            @click=" this.openedImageAlt.slice( 0, -1 ) == 'News' ? changeImage( 'news', 'right' ) : changeImage( 'about', 'right' ) ">
    </div>

    <button id="scrollToTop" @click="scrollToTop">
        <img src="./assets/images/arrow2.png" alt="Arrow">
    </button>

    <footer>
        <p class="footer-info-title">{{ $t('partners') }}</p>

        <section id="partners" class="partners">
            <span class="image-frame">
                <img src="@/assets/images/partners/ysu.png" alt="YSU">
                <p class="image-title">{{ $t('ysu') }}</p>
            </span>
            <span class="image-frame">
                <img src="@/assets/images/partners/physmath.png" alt="PhysMath">
                <p class="image-title">{{ $t('physmath') }}</p>
            </span>
        </section>

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
            document.getElementById('bars').classList.toggle("change");
            const menu = document.getElementById('mobileMenu');
            if ( menu.style.left < '0px' ) {
                menu.style.left = '0px';
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
        chooseOption( optionId, optionsId, buttonTextId, optionClass ) {
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
.logo-frame {
    position: relative;
    width: 100%;
    height: 200px;
}

.logo {
    position: absolute;
    left: 50%;
    transform: translate( -50% );
    height: 100%;
}

header {
    z-index: 100;
    position: sticky;
    top: 0;
    background-color: #030a14dd;
    padding: var(--medium-distance);
    border-top: var(--thin-border);
    border-bottom: var(--thin-border);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-items: center;
}

nav a {
    font-size: 20px;
    border-bottom: var(--thin-transparent-border);
    cursor: pointer;
    user-select: none;
}

nav a:hover {
    border-bottom-color: var(--first-color);
}

#desktopMenu {
    padding: 0 var(--large-distance);
    border-right: var(--thin-border);
    border-left: var(--thin-border);
}

#desktopMenu #videoLessons,
#desktopMenu #about {
    margin-left: var(--large-distance);
}

.bar1,
.bar2,
.bar3 {
    width: 40px;
    height: 4px;
    background-color: var(--first-color);
    margin: var(--small-distance) 0;
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

#mobileMenu {
    position: absolute;
    top: 100%;
    left: -100%;
    width: 100%;
    z-index: 1000;
    background-color: var(--third-color);
    transition: var(--long-transition);
    border: var(--thin-border);
    display: grid;
    justify-items: center;
    gap: var(--small-distance);
    padding: var(--small-distance) 0;
}

#languageSelect {
    text-align: center;
}

.language {
    position: relative;
    text-align: center;
}

#selectedLanguage img,
.custom-select-arrow,
.language img {
    position: absolute;
    top: 50%;
    left: var(--medium-distance);
    transform: translate( 0, -50% );
    width: 14px;
}

.custom-select-arrow {
    left: unset;
    right: var(--medium-distance);
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

#openedImage .opened-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    height: 90%;
}

#openedImage #close {
    position: absolute;
    top: var(--medium-distance);
    right: var(--medium-distance);
    width: 40px;
    cursor: pointer;
}

#openedImage #left,
#openedImage #right {
    position: absolute;
    top: calc( 50% - 25px );
    width: 50px;
    cursor: pointer;
}

#openedImage #close:hover,
#openedImage #left:hover,
#openedImage #right:hover {
    scale: 1.2;
}

#openedImage #left {
    left: var(--medium-distance);
    rotate: -90deg;
}

#openedImage #right {
    right: var(--medium-distance);
    rotate: 90deg;
}

#scrollToTop {
    padding: 0;
    position: fixed;
    right: -60px;
    bottom: var(--medium-distance);
    width: 60px;
    height: 60px;
    background: transparent;
    border: var(--thick-border);
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    z-index: 100;
}

#scrollToTop img {
    width: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
}

footer {
    padding: var(--large-distance);
    background-color: var(--third-color);
    text-align: center;
}

.partners {
    width: max-content;
    margin: var(--large-distance) 50%;
    transform: translate( -50% );
    display: grid;
    grid-template-columns: repeat( 2, 1fr );
    gap: 100px;
    justify-items: center;
}

.partners .image-frame {
    padding: var(--medium-distance);
    width: min-content;
}

.partners img {
    width: 160px;
    transition: var(--long-transition);
}

.partners img:hover {
    transform: scale( 1.1 );
}

.partners .image-title {
    margin-top: var(--medium-distance);
}

.footer-info-title {
    font-size: var(--medium-font-size);
}

.end-text {
    color: var(--fourth-color);
}
</style>

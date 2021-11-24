export default () => {
    try {
        new Splide('.courses__slider', {
            type: 'loop',
            speed: 400,
            autoplay: true,
            arrows: true,
            interval: 2000,
            pauseOnHover: true,
            pauseOnFocus: true,
            perPage: 3,
            perMove: 1,
            gap: '30px',
            pagination: false,
            breakpoints: {
                '1170': {
                    perPage: 3,
                    arrows: false,
                    gap: '20px'
                },
                '850': {
                    perPage: 2,
                    gap: '10px',
                    arrows: false,
                },
                '690': {
                    perPage: 1,
                    arrows: false,
                }
            }
        }).mount()
    } catch (e) {
    }

    try {
        new Splide('.teachers__slider', {
            type: 'loop',
            speed: 400,
            autoplay: true,
            arrows: true,
            interval: 2000,
            pauseOnHover: true,
            pauseOnFocus: true,
            perPage: 4,
            perMove: 1,
            gap: '30px',
            pagination: false,
            breakpoints: {
                '1170': {
                    perPage: 3,
                    gap: '20px',
                    arrows: false
                },
                '850': {
                    perPage: 2,
                    gap: '20px',
                    arrows: false
                },
                '690': {
                    perPage: 1,
                    gap: '20px',
                    arrows: false
                },
                '620': {
                    perPage: 1,
                    arrows: false
                }
            }
        }).mount()
    } catch (e) {
    }

    try {
        new Splide('.feedbacks__slider', {
            type: 'loop',
            speed: 400,
            autoplay: true,
            arrows: true,
            interval: 2000,
            pauseOnHover: true,
            pauseOnFocus: true,
            perPage: 2,
            perMove: 1,
            gap: '30px',
            pagination: false,
            breakpoints: {
                '1170': {
                    perPage: 2,
                    gap: '20px',
                    arrows: false
                },
                '1000': {
                    perPage: 1,
                    gap: '20px',
                    arrows: false
                }
            }
        }).mount()
    } catch (e) {
    }

    try {
        new Splide('.partners__slider', {
            type: 'loop',
            speed: 400,
            autoplay: true,
            arrows: true,
            interval: 2000,
            pauseOnHover: true,
            pauseOnFocus: true,
            perPage: 5,
            perMove: 1,
            gap: 0,
            pagination: false,
            breakpoints: {
                '1340': {
                    perPage: 4,
                    arrows: false
                },
                '1000': {
                    perPage: 3,
                    arrows: false
                },
                '800': {
                    perPage: 2,
                    arrows: false
                },
                '600': {
                    perPage: 1,
                    arrows: false
                }
            }
        }).mount()
    } catch (e) {
    }
}
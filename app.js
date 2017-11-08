$(function () {
    const vm = new Vue({
        el: "#app",
        data: {
            loading: false,
            images: [],
            image: null,
        },
        methods:{
            loadImage() {
                this.loading = true
                this.$http.get('https://api.harvardartmuseums.org/IMAGE?apikey=11cafd90-c4b5-11e7-8f8e-1b14c6858050')
                // this.$http.get('https://ids.lib.harvard.edu/ids/iiif/18483392')
                    .then(resp => {//resp is an object
                        this.images = resp.body
                        this.loading = false
                    })
            },
            resetImage() {},
            glitchImage() {},
        }
    })
})

const app = Vue.createApp({
    data() {
        return {
            showTitle: true,
            title: "New tamplate",
            age: 25,

            // mouse events - handleMousemove
            x: 0,
            y: 0,

            // v-for
            books: [
                {title: 'name of the wind', author: 'partrick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandom sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'brandom sanderson', img: 'assets/3.jpg', isFav: true}
            ],

            // Attribute/Data binding
            url: 'https://www.google.com'
            
        }
    },
    methods: {

        // click events
        changeTitle(title, age) {
            this.title = title
            this.age = age
        },
        toggleTitle(){
            this.showTitle = !this.showTitle
        },

        // mouse events
        handleEvents(e, data) {
            console.log(e, e.type, data)
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },

    // computed properties
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')


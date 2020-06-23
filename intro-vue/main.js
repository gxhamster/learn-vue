count = 0;

const app = new Vue(
    {
        el: '#app',
        data: {
            product: 'Socks',
            image: './vmSocks-green-onWhite.jpg',
            description: 'A pair of fuzzy',
            link: "https://github.com/gxhamster/learn-vue",
            inventory: 10,
            items: [
                {
                    name: 'Teddy Bear',
                    color: 'blue',
                    size: 10,
                    image: './vmSocks-blue-onWhite.jpg'
                },
                {
                    name: 'Pillow',
                    color: 'green',
                    size: 11,
                    image: './vmSocks-green-onWhite.jpg'
                },
    
            ],
            onSale: false,
            cart: 0
        },
        methods: {
            addToCart() {
                this.cart += 1
            },
            
            changeImage(itemImage) {
               this.image = itemImage
            }
        }
    }
)


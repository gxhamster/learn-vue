count = 0;

const app = new Vue(
    {
        el: '#app',
        data: {
            product: 'Socks',
            images: ['./vmSocks-green-onWhite.jpg', './vmSocks-blue-onWhite.jpg'],
            image: './vmSocks-green-onWhite.jpg',
            description: 'A pair of fuzzy',
            link: "https://github.com/gxhamster/learn-vue",
            inventory: 10,
            items: [
                {
                    name: 'Teddy Bear',
                    color: 'Brown',
                    size: 10
                },
                {
                    name: 'Pillow',
                    color: 'White',
                    size: 11
                },
                {
                    name: 'Umbrella',
                    color: 'Blue',
                    size: 14

                },
                {
                    name: 'Tablet',
                    color: 'Green',
                    size: 7
                },

            ],
            onSale: false,
            cart: 0
        },
        methods: {
            addToCart() {
                this.cart += 1
            },

            changeImage() {
                count++;
                let index = count % this.images.length;
                this.image = this.images[index];
            }
        }
    }
)


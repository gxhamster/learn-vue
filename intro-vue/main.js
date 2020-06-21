var app = new Vue(
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
            onSale: false
        }
    }
)


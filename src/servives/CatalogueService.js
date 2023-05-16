export default {
    getProducts() {
        const mock = [
            {
                'id': 1,
                'title': 'Planche de surf',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nisl nisl nec nisl.',
                'price': 200,
                'image': '/src/assets/img/bg.jpg'
            },
            {
                'id': 2,
                'title': 'Combinaison de plongée',
                'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nisl nisl nec nisl.',
                'price': 200,
                'image': '/src/assets/img/bg.jpg'
            }
        ]
        return mock
    }
}
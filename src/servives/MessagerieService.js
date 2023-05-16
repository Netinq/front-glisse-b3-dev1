export default {
    getMessages() {
        const mock = [
            {}
        ]
        return mock
    },
    getAuthors(withLastMessage= false) {
        const mock = [
            {
                'name': 'Jean Henri',
                'message': 'Salut, tu fais quoi ?',
                'image': "https://fakeimg.pl/300/"
            },
            {
                'name': 'Jean Paul',
                'message': 'Salut, tu fais quoi ?',
                'image': "https://fakeimg.pl/300/"
            }
        ]
        if (withLastMessage) {
            return mock
        } else {
            return mock.map(author => {
                return {
                    'name': author.name,
                    'image': author.image
                }
            })
        }
    }
}
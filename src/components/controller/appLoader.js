import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '83f2fca12716499ba7bc4e15679635bd', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '40aeca58d5784b808998e80598b8f350',//'83f2fca12716499ba7bc4e15679635bd', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

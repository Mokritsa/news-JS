import { IDataObject } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    public controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources') as HTMLElement
        sources.addEventListener('click', (e) => this.controller.getNews(e, (data: IDataObject) => this.view.drawNews(data)));
        this.controller.getSources((data: IDataObject) => this.view.drawSources(data));
        const sourceLanguage = document.querySelector('#language') as HTMLSelectElement;
        if(!sourceLanguage) throw new Error('Не выбран язык');
        sourceLanguage.addEventListener('change', () => {
            sources.innerHTML = '';
            this.controller.getSources((data: IDataObject) => this.view.drawSources(data));
        });
    }
}

export default App;

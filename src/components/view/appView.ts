import { IDataObject } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {//extends News.Component<IRssFeedProps, IRssFeedState>
    news: News
    sources: Sources
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IDataObject) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDataObject) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;

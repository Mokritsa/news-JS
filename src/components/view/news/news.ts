import { IArticleObject } from '../../../types/index';
import './news.css';

class News {
    draw(data: IArticleObject[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        if (!newsItemTemp) throw new Error('На странице отсутствует #newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement; //Дубликат узла, возвращённого cloneNode() не является частью документа appendChild or as HTMLElement
            
            const newsItem = newsClone.querySelector('.news__item');
            if (!newsItem) throw new Error('На странице отсутствует .news__item');
            if (idx % 2) newsItem.classList.add('alt');

            const newsMetaPhoto = newsClone.querySelector<HTMLDivElement>('.news__meta-photo');
            if (!newsMetaPhoto) throw new Error('На странице отсутствует .news__meta-photo');
            newsMetaPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            
            /*const newsMetaPhoto = newsClone.querySelector<HTMLDivElement>('.news__meta-photo');
            newsMetaPhoto && (newsMetaPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`);*/

            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            newsMetaAuthor.textContent = item.author || item.source.name;

            const newsMetaDate = newsClone.querySelector('.news__meta-date');
            if (!newsMetaDate) throw new Error('На странице отсутствует .news__meta-date');
            newsMetaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            const newsTitle = newsClone.querySelector('.news__description-title');
            if (!newsTitle) throw new Error('Отсутствует .news__description-title');
            newsTitle.textContent = item.title;

            const newsSource = newsClone.querySelector('.news__description-source');
            if (!newsSource) throw new Error('Отсутствует .news__description-source');
            newsSource.textContent = item.source.name;

            const newsContent = newsClone.querySelector('.news__description-content');
            if (!newsContent) throw new Error('Отсутствует .news__description-content');
            newsContent.textContent = item.description;
            //newsContent.textContent = item.content;

            const newsURL = newsClone.querySelector('.news__read-more a');
            if (!newsURL) throw new Error('Отсутствует .news__read-more a');
            newsURL.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsHTML = document.querySelector('.news');
        if (!newsHTML) throw new Error('Отсутствует .news');
        newsHTML.innerHTML = '';
        newsHTML.appendChild(fragment);
    }
}

export default News;

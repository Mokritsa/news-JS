import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources<T>(callback: (data: T) => void ) {
        super.getResp(
            {
                endpoint: 'sources',
                options: Object,
            },
            callback
        );
    }

    getNews<T>(e: Event, callback: (data: T) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if(!sourceId) throw new Error('Отсутствует data-source-id')
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                //console.log(target);
                return;
            }
            //if (!target.parentNode) throw new ReferenceError('На странице отсутствует target.parentNode');
            target = target.parentNode as HTMLElement;
            
        }
    }
}

export default AppController;

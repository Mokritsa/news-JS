import { ISource } from '../../../types/index';
import './sources.css';

class Sources {
    draw(data: ISource[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        if (!sourceItemTemp) throw new Error('На странице отсутствует #sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            
            const sourceName = sourceClone.querySelector('.source__item-name');
            if(!sourceName) throw new Error('Отсутствует .source__item-name');
            sourceName.textContent = item.name;
            
            const sourceId = sourceClone.querySelector('.source__item');
            if(!sourceId) throw new Error('Отсутствует .source__item');
            sourceId.setAttribute('data-source-id', item.id!); //Восклицательный знак — это ненулевой оператор утверждения в TypeScript.

            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources');
        if(!sources) throw new Error('Отсутствует .sources')
        sources.append(fragment);
    }
}

export default Sources;

import {lazy} from 'react';

export const AboutPageAsync = lazy(()=> new Promise(resolve => {
    // @ts-ignore
    // временная заглушка для видимости загрузки чанков. Убрать после деплоя
    setTimeout(()=>resolve(import('./AboutPage')), 1500)
}))

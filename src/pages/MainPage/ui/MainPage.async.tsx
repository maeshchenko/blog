import {lazy} from "react";

export const MainPageAsync = lazy(()=> new Promise(resolve => {
    // @ts-ignore
    // временная заглушка для видимости загрузки чанков. Убрать после деплоя
   setTimeout(()=>resolve(import('./MainPage')), 1500)
}))

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
};

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare module '*.svg' {
    import * as React from 'react';

    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    export default ReactComponent;
}

declare const __IS_DEV__ : boolean;

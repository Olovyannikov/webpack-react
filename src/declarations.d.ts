// declaration.d.ts
declare module '*.module.css' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.module.scss' {
    const content: Record<string, string>;
    export default content;
}

// raw-loader.d.ts
declare module '!!raw-loader!*' {
    const contents: string;
    export = contents;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
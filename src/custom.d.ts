declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const content: any;
  export default content;
}

/* хак, который позволяет запустить сборку без
   автоматически сгенерированных файлов *.d.ts */
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

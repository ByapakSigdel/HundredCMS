declare module 'react-simple-maps' {
    import { ComponentType } from 'react';
  
    export const ComposableMap: ComponentType<any>;
    export const Geographies: ComponentType<any>;
    export const Geography: ComponentType<any>;
    export const ZoomableGroup: ComponentType<any>;
  
    export type GeographyProps = {
      geography: any;
      style?: any;
    };
  }
  
export type Callback = (element: HTMLElement) => void;
declare function define(selector: string, callback: Callback, attrs: Array<string>, cleanUp?: Function): void;


declare module 'uelements/sinuous' {
    export function sinuous(element: HTMLElement, callback: Callback): void;
}

export {
    h,
    render,
    Fragment,
    createElement,
    AnyComponent,
    Attributes,
    Component,
    ComponentChild,
    ComponentChildren,
    ComponentProps,
    ComponentType,
    FunctionComponent,
    FunctionalComponent,
    toChildArray,
    VNode,
    JSX,
    isValidElement,
    Context,
    createContext
} from "preact";

export {
    Suspense,
    lazy
} from 'preact/compat'

export {
    useState,
    useReducer,
    useContext,
    useRef,
    useCallback,
    useMemo,
    useEffect,
    useLayoutEffect
} from 'preact/hooks';

export { define };
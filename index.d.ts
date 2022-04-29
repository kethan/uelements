import { ComponentChildren } from "preact";
export type Callback = (element: HTMLElement) => void;
declare function define(selector: string, callback: Callback, attrs: Array<string>, cleanUp?: Function): void;
declare function lazy<T>(loader: () => Promise<{ default: T } | T>, fallback?: ComponentChildren): T;

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
    useState,
    useReducer,
    useContext,
    useRef,
    useCallback,
    useMemo,
    useEffect,
    useLayoutEffect
} from 'preact/hooks';

export { define, lazy };
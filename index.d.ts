export type Callback = (element: HTMLElement) => void;
declare function define(selector: string, props: Record<string, any>, callback: Callback, cleanUp?: Function): void;

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

export { define };
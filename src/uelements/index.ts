import when from 'uwhen';
import { render, h, Fragment, toChildArray, createContext } from "preact";
import {
    useState,
    useReducer,
    useContext,
    useRef,
    useCallback,
    useMemo,
    useEffect,
    useLayoutEffect,
} from "preact/hooks";

export type Callback = (element: HTMLElement) => void;
const define = (name: string, callback: Callback, attrs: Array<string> = [], cleanup?: Function) => {
    const _render = (el: HTMLElement) =>
        //@ts-ignore
        render(h(() => callback(el)) as any, el);
    when(name, (el) => ({
        connected: () => _render(el),
        disconnected: () => { cleanup && cleanup(); },
        attributeChanged: () => { _render(el); },
        observedAttributes: attrs
    }))
};

export {
    define,
    when,
    h,
    render,
    Fragment,
    useState,
    useReducer,
    useContext,
    useRef,
    useCallback,
    useMemo,
    useEffect,
    useLayoutEffect,
    createContext,
    toChildArray
};
import when from 'uwhen';
import { render, h, Fragment, toChildArray, createContext } from "preact";
import { Suspense, lazy } from 'preact/compat';
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
    const _r = (el: HTMLElement) =>
        //@ts-ignore
        render(h(() => callback(el)) as any, el);
    when(name, (el) => ({
        connected: () => _r(el),
        disconnected: () => cleanup && cleanup(),
        attributeChanged: () => _r(el),
        observedAttributes: attrs
    }))
};

export {
    define,
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
    toChildArray,
    Suspense,
    lazy,
};
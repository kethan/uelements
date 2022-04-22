import { define as $define } from 'wicked-elements';
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
    $define(name, {
        init() { (this as any).render(); },
        observedAttributes: attrs,
        attributeChanged() {
            (this as any).render();
        },
        disconnected() { cleanup && cleanup(); },
        //@ts-ignore
        render() {
            let { element } = this as any;
            render(callback(element) as any, element);
        }
    });
};

export {
    define,
    $define,
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
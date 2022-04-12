import { define as $define } from 'swiss';
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

const define = (selector: string, props: Record<string, any>, callback: Callback) => {
    const setup = (CE) => (el: HTMLElement) => {
        return {
            update: () => render(callback(el) as any, el)
        };
    };
    $define(selector, {
        props,
        setup
    });
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
    toChildArray
};
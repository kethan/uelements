import when from 'uwhen';
import { render } from 'sinuous/render';
export type Callback = (element: HTMLElement) => void;

const define = (name: string, callback: Callback, attrs: Array<string> = [], cleanup?: Function) => {
    const _r = (el: HTMLElement) =>
        render(callback(el) as any, el);
    when(name, (el) => ({
        connected: () => _r(el),
        disconnected: () => { cleanup && cleanup(); },
        attributeChanged: () => { _r(el); },
        observedAttributes: attrs
    }))
};

export {
    render,
    rhtml as html,
    rsvg as svg,
    r as h,
    rs as hs,
} from "sinuous/render";

export {
    o,
    o as observable,
    cleanup,
    computed,
    subscribe
} from "sinuous/observable";

export { define };



// export { o, o as observable };
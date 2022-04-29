export {
    o,
    cleanup,
    computed,
    observable,
    subscribe,
} from "sinuous/observable";

export type Callback = (element: HTMLElement) => void;
declare function define(selector: string, callback: Callback, attrs: Array<string>, cleanUp?: Function): void;

export {
    render,
    rhtml as html,
    rsvg as svg,
    r as h,
    rs as hs,
} from "sinuous/render";

export { define };
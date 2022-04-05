type FunctionWithElement = (element: HTMLElement) => void;

/**
     * Defines a hooked component via a selector and a literal,
     * with a `render()` method, or a function, used as `render()`.
     * The function will receive the `element` as bound argument.
     * 
     * @example
     * define(selector, element => {} || {
     *   init() { this.element; },
     *   connected() {},
     *   disconnected() {},
     *   attributeChanged(name, newValue, oldValue) {},
     *   observedAttributes: [],
     *   onEventName(event) {},
     *   onEventNameOptions: false
     * });
     */
export function define(
    selector: string,
    component: FunctionWithElement | IPalElementsComponent,
    attrs?: string[]
): void;

/**
 * Defines asynchronously a wicked element via a selector and a callback.
 * The callback must return a Promise that resolves through a component
 * definition.
 * 
 * @example
 * defineAsync(selector, () => import('/comp.js'));
 */
export function defineAsync(
    selector: string,
    callback: Function
): void;

/**
 * Retrieves a hooked element definition.
 */
export function get(selector: string): void | IPalElementsComponent;

/**
 * Force/upgrade a specific node, if it matches any defined selector.
 */
export function upgrade(element: Element): void;

/**
 * Resolves once a specific selector gets defined.
 */
export function whenDefined(selector: string): Promise<void>;

interface IPalElementsComponent {
    /**
     * Always triggered once per node => definition, like a `constructor`.
     * Ideal to setup anything as a one off operation.
     * `this.element` will point at the node handled by this instance.
     * If not provided it will default to:
     * `function init() { render(this); }`
     * The `render(component)` is exported, to enable a custom `init()`.
     */
    init?(): void;

    /**
     * Triggered once the node is live.
     */
    connected?(): void;

    /**
     * Triggered once the node is lost/removed.
     * If `useEffect` was used, and returned a callback.
     * this will always trigger *after* that callback.
     */
    disconnected?(): void;

    /**
     * Triggered when an attribute in the `observedAttributes` list changes or,
     * if `observedAttributes` is not defined, for any attribute changes. 
     */
    attributeChanged?(
        attributeName: string,
        newValue: string | null,
        oldValue: string | null
    ): void;

    /**
     * Optionally you can specify one or more attribute to observe.
     * If empty, or not provided, but `attributeChanged()` method exists,
     * all attributes changes are notified.
     */
    observedAttributes?: Array<string>;

    /**
     * A method to define rendering logic, automatically
     * augmented for hooks such as `useState` and others.
     * The `element` is bound and passed along each time.
     * It's the exact same `element` retrieved via `this.element`.
     */
    render(element: Element): any

    /**
     * Any event can be defined as method.
     * Example: `onClick` or `onCustomEvent`.
     */
    onEventName?(event: Event): void;

    /**
     * Ane event could optionally have `Options` used as third argument,
     * when the event is added via `addEventListener`: `false` by default.
     */
    onEventNameOptions?: boolean | object;

    /**
     * Any property, method, or accessor, reflected via prototypal inheritance.
     */
    [k: string]: any;
}

export interface UElements {
    define: typeof define;
    defineAsync: typeof defineAsync;
    get: typeof get;
    upgrade: typeof upgrade;
    whenDefined: typeof whenDefined;
    render: any;
    html: any;
    h: any;
    Fragment: any;
    createElement: any;
    completeAssign: (target: any, ...sources: any[]) => void;
}

declare let html: any;
export { html };
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
    FunctionalComponent
} from "preact";
export { createContext } from 'preact/compat';
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
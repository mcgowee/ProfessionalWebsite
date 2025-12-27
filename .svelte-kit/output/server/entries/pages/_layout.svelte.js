import { f as current_component, p as push, s as setContext, g as getContext, h as spread_attributes, j as bind_props, e as pop, k as copy_payload, l as assign_payload, m as spread_props, n as element, o as stringify, q as slot } from "../../chunks/index.js";
import { ponyfill, events } from "@material/dom";
import { MDCRippleFoundation, util } from "@material/ripple";
import { H as on } from "../../chunks/events.js";
/* empty css                                                */
import { a as attr } from "../../chunks/attributes.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function dispatch(element2, eventType, detail, eventInit = { bubbles: true }) {
  if (typeof Event === "undefined") {
    throw new Error("Event not defined.");
  }
  if (!element2) {
    throw new Error("Tried to dispatch event without element.");
  }
  const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
  element2 === null || element2 === void 0 ? void 0 : element2.dispatchEvent(event);
  return event;
}
class SvelteEventManager {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(element2, event, handler, options) {
    if (!this.elementMap.has(element2)) {
      this.elementMap.set(element2, {});
    }
    const eventMap = this.elementMap.get(element2);
    if (eventMap == null) {
      throw new Error("Event map couldn't be created.");
    }
    if (!(event in eventMap)) {
      eventMap[event] = /* @__PURE__ */ new Map();
    }
    const handlerMap = eventMap[event];
    handlerMap.set(handler, on(element2, event, handler, options));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(element2, event, handler) {
    const eventMap = this.elementMap.get(element2);
    if (eventMap == null || !(event in eventMap)) {
      return;
    }
    const handlerMap = eventMap[event];
    const unlisten = handlerMap.get(handler);
    if (unlisten != null) {
      unlisten();
      handlerMap.delete(handler);
      if (handlerMap.size === 0) {
        delete eventMap[event];
        if (Object.keys(eventMap).length === 0) {
          this.elementMap.delete(element2);
        }
      }
    }
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((eventMaps, _element) => {
      for (let [_event, eventMap] of Object.entries(eventMaps)) {
        eventMap.forEach((unlisten, _handler) => {
          unlisten();
        });
      }
    });
    this.elementMap.clear();
  }
}
function MenuSurface($$payload, $$props) {
  push();
  let {
    use = [],
    class: className = "",
    style = "",
    static: isStatic = false,
    anchor = true,
    fixed = false,
    open = isStatic,
    managed = false,
    fullWidth = false,
    quickOpen = false,
    anchorElement = void 0,
    anchorCorner,
    anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 },
    maxHeight = 0,
    horizontallyCenteredOnViewport = false,
    openBottomBias = 0,
    neverRestoreFocus = false,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let element2;
  let internalClasses = {};
  let internalStyles = {};
  setContext("SMUI:list:role", "menu");
  setContext("SMUI:list:item:role", "menuitem");
  getContext("SMUI:menu-surface:mount");
  getContext("SMUI:menu-surface:unmount");
  onDestroy(() => {
  });
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function setAbsolutePosition(x, y) {
    {
      throw new Error("Instance is not defined.");
    }
  }
  function setIsHoisted(isHoisted) {
    {
      throw new Error("Instance is not defined.");
    }
  }
  function isFixed() {
    {
      throw new Error("Instance is not defined.");
    }
  }
  function flipCornerHorizontally() {
    {
      throw new Error("Instance is not defined.");
    }
  }
  function getElement() {
    return element2;
  }
  $$payload.out += `<div${spread_attributes({
    class: classMap({
      [className]: true,
      "mdc-menu-surface": true,
      "mdc-menu-surface--fixed": fixed,
      "mdc-menu-surface--open": isStatic,
      "smui-menu-surface--static": isStatic,
      "mdc-menu-surface--fullwidth": fullWidth,
      ...internalClasses
    }),
    style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "),
    role: "dialog",
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    open,
    anchorElement,
    isOpen,
    setOpen,
    setAbsolutePosition,
    setIsHoisted,
    isFixed,
    flipCornerHorizontally,
    getElement
  });
  pop();
}
function Menu($$payload, $$props) {
  push();
  let {
    use = [],
    class: className = "",
    open = false,
    anchorElement = void 0,
    managed = false,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let element2;
  setContext("SMUI:menu-surface:mount", (accessor) => {
  });
  const SMUIListMount = getContext("SMUI:list:mount");
  setContext("SMUI:list:mount", (accessor) => {
    SMUIListMount && SMUIListMount(accessor);
  });
  getContext("SMUI:menu:mount");
  getContext("SMUI:menu:unmount");
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function setDefaultFocusState(focusState) {
    {
      throw new Error("Instance is undefined.");
    }
  }
  function getSelectedIndex() {
    {
      throw new Error("Instance is undefined.");
    }
  }
  function getMenuSurface() {
    return element2;
  }
  function getElement() {
    return element2.getElement();
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    MenuSurface($$payload2, spread_props([
      {
        use,
        class: classMap({ [className]: true, "mdc-menu": true }),
        managed
      },
      restProps,
      {
        onkeydown: (e) => {
          restProps.onkeydown?.(e);
        },
        onSMUIMenuSurfaceOpened: (e) => {
          restProps.onSMUIMenuSurfaceOpened?.(e);
        },
        onSMUIListAction: (e) => {
          restProps.onSMUIListAction?.(e);
        },
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        get anchorElement() {
          return anchorElement;
        },
        set anchorElement($$value) {
          anchorElement = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          children?.($$payload3);
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      }
    ]));
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    open,
    anchorElement,
    isOpen,
    setOpen,
    setDefaultFocusState,
    getSelectedIndex,
    getMenuSurface,
    getElement
  });
  pop();
}
function SmuiElement($$payload, $$props) {
  push();
  let {
    use = [],
    tag = "div",
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const selfClosing = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ].indexOf(tag) > -1;
  let element$1;
  function getElement() {
    return element$1;
  }
  if (tag === "svg") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<svg${spread_attributes({ ...restProps }, void 0, void 0, 3)}>`;
    children?.($$payload);
    $$payload.out += `<!----></svg>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (selfClosing) {
      $$payload.out += "<!--[-->";
      element($$payload, tag, () => {
        $$payload.out += `${spread_attributes({ ...restProps })}`;
      });
    } else {
      $$payload.out += "<!--[!-->";
      element(
        $$payload,
        tag,
        () => {
          $$payload.out += `${spread_attributes({ ...restProps })}`;
        },
        () => {
          children?.($$payload);
          $$payload.out += `<!---->`;
        }
      );
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { getElement });
  pop();
}
function List($$payload, $$props) {
  push();
  const { closest, matches: matches2 } = ponyfill;
  let nav = getContext("SMUI:list:nav");
  let {
    use = [],
    class: className = "",
    nonInteractive = false,
    dense = false,
    textualList = false,
    avatarList = false,
    iconList = false,
    imageList = false,
    thumbnailList = false,
    videoList = false,
    twoLine = false,
    threeLine = false,
    vertical = true,
    wrapFocus = getContext("SMUI:list:wrapFocus") ?? false,
    singleSelection = false,
    disabledItemsFocusable = false,
    selectedIndex = -1,
    radioList = false,
    checkList = false,
    hasTypeahead = false,
    component: MyComponent = SmuiElement,
    tag = nav ? "nav" : "ul",
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let element2;
  let items = [];
  let role = getContext("SMUI:list:role");
  const itemAccessorMap = /* @__PURE__ */ new WeakMap();
  let selectionDialog = getContext("SMUI:dialog:selection");
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  setContext("SMUI:list:nonInteractive", nonInteractive);
  setContext("SMUI:separator:context", "list");
  if (!role) {
    if (singleSelection) {
      role = "listbox";
      setContext("SMUI:list:item:role", "option");
    } else if (radioList) {
      role = "radiogroup";
      setContext("SMUI:list:item:role", "radio");
    } else if (checkList) {
      role = "group";
      setContext("SMUI:list:item:role", "checkbox");
    } else {
      role = "list";
      setContext("SMUI:list:item:role", void 0);
    }
  }
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  setContext("SMUI:list:item:mount", (accessor) => {
    items.push(accessor);
    itemAccessorMap.set(accessor.element, accessor);
    if (singleSelection && accessor.selected) {
      selectedIndex = getListItemIndex(accessor.element);
    }
  });
  setContext("SMUI:list:item:unmount", (accessor) => {
    const idx = (accessor && items.findIndex((a) => a === accessor)) ?? -1;
    if (idx !== -1) {
      items.splice(idx, 1);
      itemAccessorMap.delete(accessor.element);
    }
  });
  getContext("SMUI:list:mount");
  getContext("SMUI:list:unmount");
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function handleAction(event) {
    if (radioList || checkList) {
      const index = getListItemIndex(event.target);
      if (index !== -1) {
        const item = getOrderedList()[index];
        if (item && (radioList && !item.checked || checkList)) {
          if (!matches2(event.detail.target, 'input[type="checkbox"], input[type="radio"]')) {
            item.checked = !item.checked;
          }
          item.activateRipple();
          window.requestAnimationFrame(() => {
            item.deactivateRipple();
          });
        }
      }
    }
  }
  function getOrderedList() {
    {
      return [];
    }
  }
  function getListItemIndex(element3) {
    const nearestParent = closest(element3, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    if (nearestParent && matches2(nearestParent, ".mdc-deprecated-list-item")) {
      return getOrderedList().map((item) => item?.element).indexOf(nearestParent);
    }
    return -1;
  }
  function layout() {
    {
      throw new Error("Instance is undefined.");
    }
  }
  function setEnabled(itemIndex, isEnabled) {
    {
      throw new Error("Instance is undefined.");
    }
  }
  function getTypeaheadInProgress() {
    {
      throw new Error("Instance is undefined.");
    }
  }
  function getSelectedIndex() {
    {
      throw new Error("Instance is undefined.");
    }
  }
  function getFocusedItemIndex() {
    {
      throw new Error("Instance is undefined.");
    }
  }
  function focusItemAtIndex(index) {
    const accessor = getOrderedList()[index];
    accessor && "focus" in accessor.element && accessor.element.focus();
  }
  function getElement() {
    return element2.getElement();
  }
  $$payload.out += `<!---->`;
  MyComponent($$payload, spread_props([
    {
      tag,
      use,
      class: classMap({
        [className]: true,
        "mdc-deprecated-list": true,
        "mdc-deprecated-list--non-interactive": nonInteractive,
        "mdc-deprecated-list--dense": dense,
        "mdc-deprecated-list--textual-list": textualList,
        "mdc-deprecated-list--avatar-list": avatarList || selectionDialog,
        "mdc-deprecated-list--icon-list": iconList,
        "mdc-deprecated-list--image-list": imageList,
        "mdc-deprecated-list--thumbnail-list": thumbnailList,
        "mdc-deprecated-list--video-list": videoList,
        "mdc-deprecated-list--two-line": twoLine,
        "smui-list--three-line": threeLine && !twoLine
      }),
      role
    },
    restProps,
    {
      onkeydown: (e) => {
        restProps.onkeydown?.(e);
      },
      onfocusin: (e) => {
        restProps.onfocusin?.(e);
      },
      onfocusout: (e) => {
        restProps.onfocusout?.(e);
      },
      onclick: (e) => {
        restProps.onclick?.(e);
      },
      onSMUIAction: (e) => {
        handleAction(e);
        restProps.onSMUIAction?.(e);
      },
      children: ($$payload2) => {
        children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  $$payload.out += `<!---->`;
  bind_props($$props, {
    selectedIndex,
    layout,
    setEnabled,
    getTypeaheadInProgress,
    getSelectedIndex,
    getFocusedItemIndex,
    focusItemAtIndex,
    getElement
  });
  pop();
}
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance;
  let eventManager = new SvelteEventManager();
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    } else {
      removeClass("mdc-ripple-surface");
      removeClass("smui-ripple-surface--primary");
      removeClass("smui-ripple-surface--secondary");
    }
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => util.supportsCssVariables(window),
        computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) => eventManager.off(document.documentElement, evtType, handler),
        deregisterInteractionHandler: (evtType, handler) => eventManager.off(eventTarget || node, evtType, handler),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => {
          var _a, _b;
          return {
            x: (_a = window.pageXOffset) !== null && _a !== void 0 ? _a : window.scrollX,
            y: (_b = window.pageYOffset) !== null && _b !== void 0 ? _b : window.scrollY
          };
        },
        isSurfaceActive: () => active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => {
          const opts = applyPassive();
          eventManager.on(document.documentElement, evtType, handler, typeof opts === "boolean" ? { capture: opts } : opts);
        },
        registerInteractionHandler: (evtType, handler) => {
          const opts = applyPassive();
          eventManager.on(eventTarget || node, evtType, handler, typeof opts === "boolean" ? { capture: opts } : opts);
        },
        registerResizeHandler: (handler) => eventManager.on(window, "resize", handler),
        removeClass,
        updateCssVariable: addStyle
      });
      initPromise.then(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        if (instance) {
          instance.destroy();
          instance = void 0;
          eventManager.clear();
        }
      });
    }
    if (instance && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance) {
      instance.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise
      } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
      handleProps();
    },
    destroy() {
      if (instance) {
        instance.destroy();
        instance = void 0;
        eventManager.clear();
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  };
}
let counter = 0;
function Item($$payload, $$props) {
  push();
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let nav = getContext("SMUI:list:item:nav");
  let {
    use = [],
    class: className = "",
    style = "",
    color,
    nonInteractive = getContext("SMUI:list:nonInteractive") ?? false,
    ripple = !nonInteractive,
    wrapper = false,
    activated = false,
    role = wrapper ? "presentation" : getContext("SMUI:list:item:role"),
    selected = false,
    disabled = false,
    skipRestoreFocus = false,
    tabindex: tabindexProp = uninitializedValue,
    inputId = "SMUI-form-field-list-" + counter++,
    href,
    component: MyComponent = SmuiElement,
    tag = nav ? href ? "a" : "span" : "li",
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  setContext("SMUI:list:nonInteractive", void 0);
  setContext("SMUI:list:item:role", void 0);
  let element2;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let input = void 0;
  const tabindex = isUninitializedValue(tabindexProp) ? !nonInteractive && !disabled && (selected || input && input.checked) ? 0 : -1 : tabindexProp;
  setContext("SMUI:generic:input:props", { id: inputId });
  setContext("SMUI:separator:context", void 0);
  setContext("SMUI:generic:input:mount", (accessor) => {
    if ("_smui_checkbox_accessor" in accessor || "_smui_radio_accessor" in accessor) {
      input = accessor;
    }
  });
  setContext("SMUI:generic:input:unmount", () => {
    input = void 0;
  });
  getContext("SMUI:list:item:mount");
  getContext("SMUI:list:item:unmount");
  onDestroy(() => {
  });
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function handleKeydown(e) {
    const isEnter = e.key === "Enter";
    const isSpace = e.key === "Space";
    if (isEnter || isSpace) {
      action(e);
    }
  }
  function action(e) {
    if (!disabled) {
      dispatch(getElement(), "SMUIAction", e);
    }
  }
  function getPrimaryText() {
    const element3 = getElement();
    const primaryText = element3.querySelector(".mdc-deprecated-list-item__primary-text");
    if (primaryText) {
      return primaryText.textContent ?? "";
    }
    const text = element3.querySelector(".mdc-deprecated-list-item__text");
    if (text) {
      return text.textContent ?? "";
    }
    return element3.textContent ?? "";
  }
  function getElement() {
    return element2.getElement();
  }
  $$payload.out += `<!---->`;
  MyComponent($$payload, spread_props([
    {
      tag,
      use: [
        ...nonInteractive ? [] : [
          [
            Ripple,
            {
              ripple: !input,
              unbounded: false,
              color: (activated || selected) && color == null ? "primary" : color,
              disabled,
              addClass,
              removeClass,
              addStyle
            }
          ]
        ],
        ...use
      ],
      class: classMap({
        [className]: true,
        "mdc-deprecated-list-item": !wrapper,
        "mdc-deprecated-list-item__wrapper": wrapper,
        "mdc-deprecated-list-item--activated": activated,
        "mdc-deprecated-list-item--selected": selected,
        "mdc-deprecated-list-item--disabled": disabled,
        "mdc-menu-item--selected": !nav && role === "menuitem" && selected,
        "smui-menu-item--non-interactive": nonInteractive,
        ...internalClasses
      }),
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    },
    nav && activated ? { "aria-current": "page" } : {},
    !nav || wrapper ? { role } : {},
    !nav && role === "option" ? { "aria-selected": selected ? "true" : "false" } : {},
    !nav && (role === "radio" || role === "checkbox") ? {
      "aria-checked": input && input.checked ? "true" : "false"
    } : {},
    !nav ? { "aria-disabled": disabled ? "true" : "false" } : {},
    {
      "data-menu-item-skip-restore-focus": skipRestoreFocus || void 0,
      tabindex,
      href
    },
    internalAttrs,
    restProps,
    {
      onclick: (e) => {
        action(e);
        restProps.onclick?.(e);
      },
      onkeydown: (e) => {
        handleKeydown(e);
        restProps.onkeydown?.(e);
      },
      children: ($$payload2) => {
        if (ripple) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<span class="mdc-deprecated-list-item__ripple"></span>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
        children?.($$payload2);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  $$payload.out += `<!---->`;
  bind_props($$props, {
    activated,
    selected,
    tabindex: tabindexProp,
    action,
    getPrimaryText,
    getElement
  });
  pop();
}
function ChatMenu($$payload) {
  $$payload.out += `<div role="menu" tabindex="0"><button class="text-white hover:text-indigo-400">Simple Chats</button> <div${attr("class", `svelte-l2qboa ${stringify(["dropdown-menu", ""].filter(Boolean).join(" "))}`)}><a href="/chat" class="dropdown-item svelte-l2qboa" role="menuitem">Simple Chat <span class="text-gray-500 block">Local LLM using Ollama and Llama3 for AI responses.</span></a> <a href="/chat3" class="dropdown-item svelte-l2qboa" role="menuitem">OpenAI's ChatGPT <span class="text-gray-500 block">OpenAI's ChatGPT Responses Using Simple Prompts and Prompt Templates</span></a> <a href="/chat2" class="dropdown-item svelte-l2qboa" role="menuitem">SQL QA Chat <span class="text-gray-500 block">Using ChatGPT API to Query Local Database</span></a> <a href="/chat4" class="dropdown-item svelte-l2qboa" role="menuitem">SQL AI Agent <span class="text-gray-500 block">OpenAI's ChatGPT Using an Agent Created by SakuraAI</span></a> <a href="/streamlit_app" class="dropdown-item svelte-l2qboa" role="menuitem">ChatGPT with PandasAI <span class="text-gray-500 block">Using Python to Query ChatGPT API</span></a></div></div>`;
}
function Header($$payload, $$props) {
  $$payload.out += `<div class="header mt-8 ml-4 svelte-11lowdm"><div class="flex items-center"><a href="/"><img src="/logo.jpg" alt="Logo" class="logo svelte-11lowdm"></a> <div><a href="/"><h1 class="font-semibold text-5xl mt-4">Sakura<span class="text-rose-400">AI</span></h1></a> <h2 class="font-medium text-lg text-gray-500">An Earl McGowen Company</h2></div></div> <div class="hidden lg:flex space-x-4"><a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="text-blue-500 hover:text-blue-700"><i class="fab fa-twitter"></i></a> <a href="https://www.facebook.com/earlmcgowen/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-blue-500 hover:text-blue-700"><i class="fab fa-facebook-f"></i></a> <a href="https://www.linkedin.com/in/earl-l-mcgowen-b510884/" target="_blank" aria-label="LinkedIn" class="text-blue-500 hover:text-blue-700"><i class="fab fa-linkedin-in"></i></a> <a href="https://www.youtube.com/channel/UC-y8DJUix0fjtnLSe5_8bnA" target="_blank" aria-label="Youtube" class="text-blue-500 hover:text-blue-700"><i class="fab fa-youtube"></i></a></div> <div class="lg:hidden relative"><button type="button" style="min-width: 100px;" class="smui-button" aria-label="Open menu"><i class="fas fa-bars"></i></button> `;
  Menu($$payload, {
    children: ($$payload2) => {
      List($$payload2, {
        children: ($$payload3) => {
          Item($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<a href="https://twitter.com/your-twitter-handle" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700">Twitter</a>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Item($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<a href="https://www.facebook.com/earlmcgowen/" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700">Facebook</a>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Item($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<a href="https://www.linkedin.com/in/earl-l-mcgowen-b510884/" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700">LinkedIn</a>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Item($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<a href="http://earlmcgowen.info/" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700">Legacy Site</a>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Item($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<a href="https://www.youtube.com/channel/UC-y8DJUix0fjtnLSe5_8bnA" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700">YouTube</a>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div> <nav class="bg-gray-800 p-4 rounded-lg mt-4"><ul class="flex space-x-4"><li><a href="/" class="text-white hover:text-indigo-400">Home</a></li> <li><a href="/about" class="text-white hover:text-indigo-400">About</a></li> <li><a href="/contact" class="text-white hover:text-indigo-400">Contact</a></li> <li class="relative">`;
  ChatMenu($$payload);
  $$payload.out += `<!----></li> <li><a href="/openai-webui" class="text-white hover:text-indigo-400">OpenAI WebUI</a></li> <li><a href="/streamlit_llm" class="text-white hover:text-indigo-400">Streamlit LLM</a></li> <li><a href="/wordle" class="text-white hover:text-indigo-400">Wordle Solver</a></li> <li><a href="/chatapp" class="text-white hover:text-indigo-400">Chat App</a></li> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></ul></nav>`;
}
function _layout($$payload, $$props) {
  push();
  Header($$payload, {});
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};

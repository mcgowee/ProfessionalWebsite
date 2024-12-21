import { c as create_ssr_component, b as compute_rest_props, g as get_current_component, a as setContext, o as onDestroy, d as spread, e as escape_attribute_value, f as escape_object, h as add_attribute, v as validate_component, i as getContext, m as missing_component } from "../../chunks/ssr.js";
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement, g as globals } from "../../chunks/Header.svelte_svelte_type_style_lang.js";
import { MDCRippleFoundation, util } from "@material/ripple";
import { events, ponyfill } from "@material/dom";
function dispatch(element, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event === "undefined") {
    throw new Error("Event not defined.");
  }
  if (!element) {
    throw new Error("Tried to dipatch event without element.");
  }
  const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
  element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
  if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
    const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
    element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
    if (duplicateEvent.defaultPrevented) {
      event.preventDefault();
    }
  }
  return event;
}
const MenuSurface = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "openBottomBias",
    "neverRestoreFocus",
    "isOpen",
    "setOpen",
    "setAbsolutePosition",
    "setIsHoisted",
    "isFixed",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { static: isStatic = false } = $$props;
  let { anchor = true } = $$props;
  let { fixed = false } = $$props;
  let { open = isStatic } = $$props;
  let { managed = false } = $$props;
  let { fullWidth = false } = $$props;
  let { quickOpen = false } = $$props;
  let { anchorElement = void 0 } = $$props;
  let { anchorCorner = void 0 } = $$props;
  let { anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 } } = $$props;
  let { maxHeight = 0 } = $$props;
  let { horizontallyCenteredOnViewport = false } = $$props;
  let { openBottomBias = 0 } = $$props;
  let { neverRestoreFocus = false } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  setContext("SMUI:list:role", "menu");
  setContext("SMUI:list:item:role", "menuitem");
  onDestroy(() => {
  });
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function setAbsolutePosition(x, y) {
    return instance.setAbsolutePosition(x, y);
  }
  function setIsHoisted(isHoisted) {
    return instance.setIsHoisted(isHoisted);
  }
  function isFixed() {
    return instance.isFixed();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.static === void 0 && $$bindings.static && isStatic !== void 0) $$bindings.static(isStatic);
  if ($$props.anchor === void 0 && $$bindings.anchor && anchor !== void 0) $$bindings.anchor(anchor);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0) $$bindings.fixed(fixed);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.managed === void 0 && $$bindings.managed && managed !== void 0) $$bindings.managed(managed);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0) $$bindings.fullWidth(fullWidth);
  if ($$props.quickOpen === void 0 && $$bindings.quickOpen && quickOpen !== void 0) $$bindings.quickOpen(quickOpen);
  if ($$props.anchorElement === void 0 && $$bindings.anchorElement && anchorElement !== void 0) $$bindings.anchorElement(anchorElement);
  if ($$props.anchorCorner === void 0 && $$bindings.anchorCorner && anchorCorner !== void 0) $$bindings.anchorCorner(anchorCorner);
  if ($$props.anchorMargin === void 0 && $$bindings.anchorMargin && anchorMargin !== void 0) $$bindings.anchorMargin(anchorMargin);
  if ($$props.maxHeight === void 0 && $$bindings.maxHeight && maxHeight !== void 0) $$bindings.maxHeight(maxHeight);
  if ($$props.horizontallyCenteredOnViewport === void 0 && $$bindings.horizontallyCenteredOnViewport && horizontallyCenteredOnViewport !== void 0) $$bindings.horizontallyCenteredOnViewport(horizontallyCenteredOnViewport);
  if ($$props.openBottomBias === void 0 && $$bindings.openBottomBias && openBottomBias !== void 0) $$bindings.openBottomBias(openBottomBias);
  if ($$props.neverRestoreFocus === void 0 && $$bindings.neverRestoreFocus && neverRestoreFocus !== void 0) $$bindings.neverRestoreFocus(neverRestoreFocus);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0) $$bindings.setOpen(setOpen);
  if ($$props.setAbsolutePosition === void 0 && $$bindings.setAbsolutePosition && setAbsolutePosition !== void 0) $$bindings.setAbsolutePosition(setAbsolutePosition);
  if ($$props.setIsHoisted === void 0 && $$bindings.setIsHoisted && setIsHoisted !== void 0) $$bindings.setIsHoisted(setIsHoisted);
  if ($$props.isFixed === void 0 && $$bindings.isFixed && isFixed !== void 0) $$bindings.isFixed(isFixed);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  return ` <div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-menu-surface": true,
          "mdc-menu-surface--fixed": fixed,
          "mdc-menu-surface--open": isStatic,
          "smui-menu-surface--static": isStatic,
          "mdc-menu-surface--fullwidth": fullWidth,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      { role: "dialog" },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let usePass;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "open",
    "isOpen",
    "setOpen",
    "setDefaultFocusState",
    "getSelectedIndex",
    "getMenuSurface",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { open = false } = $$props;
  let element;
  let instance;
  function isOpen() {
    return open;
  }
  function setOpen(value) {
    open = value;
  }
  function setDefaultFocusState(focusState) {
    instance.setDefaultFocusState(focusState);
  }
  function getSelectedIndex() {
    return instance.getSelectedIndex();
  }
  function getMenuSurface() {
    return element;
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0) $$bindings.setOpen(setOpen);
  if ($$props.setDefaultFocusState === void 0 && $$bindings.setDefaultFocusState && setDefaultFocusState !== void 0) $$bindings.setDefaultFocusState(setDefaultFocusState);
  if ($$props.getSelectedIndex === void 0 && $$bindings.getSelectedIndex && getSelectedIndex !== void 0) $$bindings.getSelectedIndex(getSelectedIndex);
  if ($$props.getMenuSurface === void 0 && $$bindings.getMenuSurface && getMenuSurface !== void 0) $$bindings.getMenuSurface(getMenuSurface);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    usePass = [forwardEvents, ...use];
    $$rendered = `${validate_component(MenuSurface, "MenuSurface").$$render(
      $$result,
      Object.assign(
        {},
        { use: usePass },
        {
          class: classMap({ [className]: true, "mdc-menu": true })
        },
        $$restProps,
        { this: element },
        { open }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        },
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "disabledItemsFocusable",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "tag",
    "layout",
    "setEnabled",
    "getTypeaheadInProgress",
    "getSelectedIndex",
    "getFocusedItemIndex",
    "focusItemAtIndex",
    "getElement"
  ]);
  var _a;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { nonInteractive = false } = $$props;
  let { dense = false } = $$props;
  let { textualList = false } = $$props;
  let { avatarList = false } = $$props;
  let { iconList = false } = $$props;
  let { imageList = false } = $$props;
  let { thumbnailList = false } = $$props;
  let { videoList = false } = $$props;
  let { twoLine = false } = $$props;
  let { threeLine = false } = $$props;
  let { vertical = true } = $$props;
  let { wrapFocus = (_a = getContext("SMUI:list:wrapFocus")) !== null && _a !== void 0 ? _a : false } = $$props;
  let { singleSelection = false } = $$props;
  let { disabledItemsFocusable = false } = $$props;
  let { selectedIndex = -1 } = $$props;
  let { radioList = false } = $$props;
  let { checkList = false } = $$props;
  let { hasTypeahead = false } = $$props;
  let element;
  let instance;
  let role = getContext("SMUI:list:role");
  let nav = getContext("SMUI:list:nav");
  const itemAccessorMap = /* @__PURE__ */ new WeakMap();
  let selectionDialog = getContext("SMUI:dialog:selection");
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? nav ? "nav" : "ul" : void 0 } = $$props;
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
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function getOrderedList() {
    if (element == null) {
      return [];
    }
    return [...getElement().children].map((element2) => itemAccessorMap.get(element2)).filter((accessor) => accessor && accessor._smui_list_item_accessor);
  }
  function layout() {
    return instance.layout();
  }
  function setEnabled(itemIndex, isEnabled) {
    return instance.setEnabled(itemIndex, isEnabled);
  }
  function getTypeaheadInProgress() {
    return instance.isTypeaheadInProgress();
  }
  function getSelectedIndex() {
    return instance.getSelectedIndex();
  }
  function getFocusedItemIndex() {
    return instance.getFocusedItemIndex();
  }
  function focusItemAtIndex(index) {
    const accessor = getOrderedList()[index];
    accessor && "focus" in accessor.element && accessor.element.focus();
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0) $$bindings.nonInteractive(nonInteractive);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0) $$bindings.dense(dense);
  if ($$props.textualList === void 0 && $$bindings.textualList && textualList !== void 0) $$bindings.textualList(textualList);
  if ($$props.avatarList === void 0 && $$bindings.avatarList && avatarList !== void 0) $$bindings.avatarList(avatarList);
  if ($$props.iconList === void 0 && $$bindings.iconList && iconList !== void 0) $$bindings.iconList(iconList);
  if ($$props.imageList === void 0 && $$bindings.imageList && imageList !== void 0) $$bindings.imageList(imageList);
  if ($$props.thumbnailList === void 0 && $$bindings.thumbnailList && thumbnailList !== void 0) $$bindings.thumbnailList(thumbnailList);
  if ($$props.videoList === void 0 && $$bindings.videoList && videoList !== void 0) $$bindings.videoList(videoList);
  if ($$props.twoLine === void 0 && $$bindings.twoLine && twoLine !== void 0) $$bindings.twoLine(twoLine);
  if ($$props.threeLine === void 0 && $$bindings.threeLine && threeLine !== void 0) $$bindings.threeLine(threeLine);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0) $$bindings.vertical(vertical);
  if ($$props.wrapFocus === void 0 && $$bindings.wrapFocus && wrapFocus !== void 0) $$bindings.wrapFocus(wrapFocus);
  if ($$props.singleSelection === void 0 && $$bindings.singleSelection && singleSelection !== void 0) $$bindings.singleSelection(singleSelection);
  if ($$props.disabledItemsFocusable === void 0 && $$bindings.disabledItemsFocusable && disabledItemsFocusable !== void 0) $$bindings.disabledItemsFocusable(disabledItemsFocusable);
  if ($$props.selectedIndex === void 0 && $$bindings.selectedIndex && selectedIndex !== void 0) $$bindings.selectedIndex(selectedIndex);
  if ($$props.radioList === void 0 && $$bindings.radioList && radioList !== void 0) $$bindings.radioList(radioList);
  if ($$props.checkList === void 0 && $$bindings.checkList && checkList !== void 0) $$bindings.checkList(checkList);
  if ($$props.hasTypeahead === void 0 && $$bindings.hasTypeahead && hasTypeahead !== void 0) $$bindings.hasTypeahead(hasTypeahead);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0) $$bindings.layout(layout);
  if ($$props.setEnabled === void 0 && $$bindings.setEnabled && setEnabled !== void 0) $$bindings.setEnabled(setEnabled);
  if ($$props.getTypeaheadInProgress === void 0 && $$bindings.getTypeaheadInProgress && getTypeaheadInProgress !== void 0) $$bindings.getTypeaheadInProgress(getTypeaheadInProgress);
  if ($$props.getSelectedIndex === void 0 && $$bindings.getSelectedIndex && getSelectedIndex !== void 0) $$bindings.getSelectedIndex(getSelectedIndex);
  if ($$props.getFocusedItemIndex === void 0 && $$bindings.getFocusedItemIndex && getFocusedItemIndex !== void 0) $$bindings.getFocusedItemIndex(getFocusedItemIndex);
  if ($$props.focusItemAtIndex === void 0 && $$bindings.focusItemAtIndex && focusItemAtIndex !== void 0) $$bindings.focusItemAtIndex(focusItemAtIndex);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
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
          })
        },
        { role },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance;
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
        deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
        deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset
        }),
        isSurfaceActive: () => active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
        registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) => window.addEventListener("resize", handler),
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
const { Object: Object_1$1 } = globals;
let counter = 0;
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabindex;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "wrapper",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "tag",
    "action",
    "getPrimaryText",
    "getElement"
  ]);
  var _a;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { color = void 0 } = $$props;
  let { nonInteractive = (_a = getContext("SMUI:list:nonInteractive")) !== null && _a !== void 0 ? _a : false } = $$props;
  setContext("SMUI:list:nonInteractive", void 0);
  let { ripple = !nonInteractive } = $$props;
  let { wrapper = false } = $$props;
  let { activated = false } = $$props;
  let { role = wrapper ? "presentation" : getContext("SMUI:list:item:role") } = $$props;
  setContext("SMUI:list:item:role", void 0);
  let { selected = false } = $$props;
  let { disabled = false } = $$props;
  let { skipRestoreFocus = false } = $$props;
  let { tabindex: tabindexProp = uninitializedValue } = $$props;
  let { inputId = "SMUI-form-field-list-" + counter++ } = $$props;
  let { href = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let input;
  let nav = getContext("SMUI:list:item:nav");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? nav ? href ? "a" : "span" : "li" : void 0 } = $$props;
  setContext("SMUI:generic:input:props", { id: inputId });
  setContext("SMUI:separator:context", void 0);
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
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function action(e) {
    if (!disabled) {
      dispatch(getElement(), "SMUI:action", e);
    }
  }
  function getPrimaryText() {
    var _a2, _b, _c;
    const element2 = getElement();
    const primaryText = element2.querySelector(".mdc-deprecated-list-item__primary-text");
    if (primaryText) {
      return (_a2 = primaryText.textContent) !== null && _a2 !== void 0 ? _a2 : "";
    }
    const text = element2.querySelector(".mdc-deprecated-list-item__text");
    if (text) {
      return (_b = text.textContent) !== null && _b !== void 0 ? _b : "";
    }
    return (_c = element2.textContent) !== null && _c !== void 0 ? _c : "";
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.nonInteractive === void 0 && $$bindings.nonInteractive && nonInteractive !== void 0) $$bindings.nonInteractive(nonInteractive);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0) $$bindings.ripple(ripple);
  if ($$props.wrapper === void 0 && $$bindings.wrapper && wrapper !== void 0) $$bindings.wrapper(wrapper);
  if ($$props.activated === void 0 && $$bindings.activated && activated !== void 0) $$bindings.activated(activated);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.skipRestoreFocus === void 0 && $$bindings.skipRestoreFocus && skipRestoreFocus !== void 0) $$bindings.skipRestoreFocus(skipRestoreFocus);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindexProp !== void 0) $$bindings.tabindex(tabindexProp);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0) $$bindings.inputId(inputId);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0) $$bindings.action(action);
  if ($$props.getPrimaryText === void 0 && $$bindings.getPrimaryText && getPrimaryText !== void 0) $$bindings.getPrimaryText(getPrimaryText);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    tabindex = isUninitializedValue(tabindexProp) ? !nonInteractive && !disabled && (selected || input) ? 0 : -1 : tabindexProp;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1$1.assign(
        {},
        { tag },
        {
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
            forwardEvents,
            ...use
          ]
        },
        {
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
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        nav && activated ? { "aria-current": "page" } : {},
        !nav || wrapper ? { role } : {},
        !nav && role === "option" ? {
          "aria-selected": selected ? "true" : "false"
        } : {},
        !nav && (role === "radio" || role === "checkbox") ? {
          "aria-checked": "false"
        } : {},
        !nav ? {
          "aria-disabled": disabled ? "true" : "false"
        } : {},
        {
          "data-menu-item-skip-restore-focus": skipRestoreFocus || void 0
        },
        { tabindex },
        { href },
        internalAttrs,
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${ripple ? `<span class="mdc-deprecated-list-item__ripple"></span>` : ``}${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const { Object: Object_1 } = globals;
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let defaultProp;
  let secondaryProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = "primary" } = $$props;
  let { variant = "text" } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let { action = "close" } = $$props;
  let { defaultAction = false } = $$props;
  let { secondary = false } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let context = getContext("SMUI:button:context");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:label:context", "button");
  setContext("SMUI:icon:context", "button");
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
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0) $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0) $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0) $$bindings.action(action);
  if ($$props.defaultAction === void 0 && $$bindings.defaultAction && defaultAction !== void 0) $$bindings.defaultAction(defaultAction);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0) $$bindings.secondary(secondary);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0) $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    actionProp = context === "dialog:action" && action != null ? { "data-mdc-dialog-action": action } : { action: $$props.action };
    defaultProp = context === "dialog:action" && defaultAction ? { "data-mdc-dialog-button-default": "" } : { default: $$props.default };
    secondaryProp = context === "banner" ? {} : { secondary: $$props.secondary };
    {
      if (previousDisabled !== $$restProps.disabled) {
        if (element) {
          const el = getElement();
          if ("blur" in el) {
            el.blur();
          }
        }
        previousDisabled = $$restProps.disabled;
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign(
        {},
        { tag },
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: false,
                color,
                disabled: !!$$restProps.disabled,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-button": true,
            "mdc-button--raised": variant === "raised",
            "mdc-button--unelevated": variant === "unelevated",
            "mdc-button--outlined": variant === "outlined",
            "smui-button--color-secondary": color === "secondary",
            "mdc-button--touch": touch,
            "mdc-card__action": context === "card:action",
            "mdc-card__action--button": context === "card:action",
            "mdc-dialog__button": context === "dialog:action",
            "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
            "mdc-top-app-bar__action-item": context === "top-app-bar:action",
            "mdc-snackbar__action": context === "snackbar:actions",
            "mdc-banner__secondary-action": context === "banner" && secondary,
            "mdc-banner__primary-action": context === "banner" && !secondary,
            "mdc-tooltip__action": context === "tooltip:rich-actions",
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        actionProp,
        defaultProp,
        secondaryProp,
        { href },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="mdc-button__ripple"></div> ${slots.default ? slots.default({}) : ``}${touch ? `<div class="mdc-button__touch"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const css$1 = {
  code: ".dropdown-menu.svelte-l2qboa{display:none;position:absolute;background-color:white;border:1px solid #ddd;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);z-index:10;width:300px}.dropdown-menu.open.svelte-l2qboa{display:block}.dropdown-item.svelte-l2qboa{padding:8px 16px;cursor:pointer;text-decoration:none;color:black;display:block}.dropdown-item.svelte-l2qboa:hover{background-color:#f5f5f5}",
  map: `{"version":3,"file":"ChatMenu.svelte","sources":["ChatMenu.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nlet isOpen = false;\\nconst toggleDropdown = () => {\\n  isOpen = !isOpen;\\n};\\nconst closeDropdown = () => {\\n  isOpen = false;\\n};\\n<\/script>\\r\\n  \\r\\n  <style>\\r\\n    .dropdown-menu {\\r\\n      display: none;\\r\\n      position: absolute;\\r\\n      background-color: white;\\r\\n      border: 1px solid #ddd;\\r\\n      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\\r\\n      z-index: 10;\\r\\n      width: 300px;\\r\\n    }\\r\\n  \\r\\n    .dropdown-menu.open {\\r\\n      display: block;\\r\\n    }\\r\\n  \\r\\n    .dropdown-item {\\r\\n      padding: 8px 16px;\\r\\n      cursor: pointer;\\r\\n      text-decoration: none;\\r\\n      color: black;\\r\\n      display: block;\\r\\n    }\\r\\n  \\r\\n    .dropdown-item:hover {\\r\\n      background-color: #f5f5f5;\\r\\n    }\\r\\n  </style>\\r\\n  \\r\\n  <div on:mouseenter={toggleDropdown} on:mouseleave={closeDropdown} role=\\"menu\\">\\r\\n    <a href=\\"#\\" class=\\"text-white hover:text-indigo-400\\">Simple Chats</a>\\r\\n    <div class:dropdown-menu={true} class:open={isOpen}>\\r\\n       <a href=\\"/chat\\" class=\\"dropdown-item\\" role=\\"menuitem\\">\\r\\n        Simple Chat\\r\\n        <span class=\\"text-gray-500 block\\">Local LLM using Ollama and Llama3 for AI responses.</span>\\r\\n       </a>\\r\\n       <a href=\\"/chat3\\" class=\\"dropdown-item\\" role=\\"menuitem\\">\\r\\n        OpenAI's ChatGPT\\r\\n        <span class=\\"text-gray-500 block\\">OpenAI's ChatGPT Responses Using Simple Prompts and Prompt Templates</span>\\r\\n      </a>\\r\\n      <a href=\\"/chat2\\" class=\\"dropdown-item\\" role=\\"menuitem\\">\\r\\n        SQL QA Chat\\r\\n        <span class=\\"text-gray-500 block\\">Using ChatGPT API to Query Local Database</span>\\r\\n      </a>\\r\\n      <a href=\\"/chat4\\" class=\\"dropdown-item\\" role=\\"menuitem\\">\\r\\n        SQL AI Agent\\r\\n        <span class=\\"text-gray-500 block\\">OpenAI's ChatGPT Using an Agent Created by SakuraAI</span>\\r\\n      </a>\\r\\n      <a href=\\"/streamlit_app\\" class=\\"dropdown-item\\" role=\\"menuitem\\">\\r\\n        ChatGPT with PandasAI\\r\\n        <span class=\\"text-gray-500 block\\">Using Python to Query ChatGPT API</span>\\r\\n    </div>\\r\\n  </div>\\r\\n  "],"names":[],"mappings":"AAWI,4BAAe,CACb,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACzC,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KACT,CAEA,cAAc,mBAAM,CAClB,OAAO,CAAE,KACX,CAEA,4BAAe,CACb,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,KACX,CAEA,4BAAc,MAAO,CACnB,gBAAgB,CAAE,OACpB"}`
};
const ChatMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div role="menu"><a href="#" class="text-white hover:text-indigo-400" data-svelte-h="svelte-1eyv8if">Simple Chats</a> <div class="${["svelte-l2qboa", "dropdown-menu "].join(" ").trim()}" data-svelte-h="svelte-1bopj63"><a href="/chat" class="dropdown-item svelte-l2qboa" role="menuitem">Simple Chat
        <span class="text-gray-500 block">Local LLM using Ollama and Llama3 for AI responses.</span></a> <a href="/chat3" class="dropdown-item svelte-l2qboa" role="menuitem">OpenAI&#39;s ChatGPT
        <span class="text-gray-500 block">OpenAI&#39;s ChatGPT Responses Using Simple Prompts and Prompt Templates</span></a> <a href="/chat2" class="dropdown-item svelte-l2qboa" role="menuitem">SQL QA Chat
        <span class="text-gray-500 block">Using ChatGPT API to Query Local Database</span></a> <a href="/chat4" class="dropdown-item svelte-l2qboa" role="menuitem">SQL AI Agent
        <span class="text-gray-500 block">OpenAI&#39;s ChatGPT Using an Agent Created by SakuraAI</span></a> <a href="/streamlit_app" class="dropdown-item svelte-l2qboa" role="menuitem">ChatGPT with PandasAI
        <span class="text-gray-500 block">Using Python to Query ChatGPT API</span></a></div></div>`;
});
const css = {
  code: ".header.svelte-11lowdm{display:flex;justify-content:space-between;align-items:center;padding-right:1rem}.logo.svelte-11lowdm{height:50px;margin-right:1rem}",
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Menu from \\"@smui/menu\\";\\nimport List, { Item, Separator, Text } from \\"@smui/list\\";\\nimport Button, { Label } from \\"@smui/button\\";\\nimport ChatMenu from \\"./ChatMenu.svelte\\";\\nlet menu;\\nlet clicked = \\"nothing yet\\";\\n<\/script>\\r\\n\\r\\n<style>\\r\\n  .header {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    padding-right: 1rem;\\r\\n  }\\r\\n\\r\\n  .logo {\\r\\n    height: 50px; /* Adjust size as needed */\\r\\n    margin-right: 1rem;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<div class=\\"header mt-8 ml-4\\">\\r\\n  <div class=\\"flex items-center\\">\\r\\n    <a href=\\"/\\">\\r\\n      <img src=\\"/logo.jpg\\" alt=\\"Logo\\" class=\\"logo\\" />\\r\\n    </a>\\r\\n    <div>\\r\\n      <a href=\\"/\\">\\r\\n        <h1 class=\\"font-semibold text-5xl mt-4\\">\\r\\n          Sakura<span class=\\"text-rose-400\\">AI</span>\\r\\n        </h1>\\r\\n      </a>\\r\\n      <h2 class=\\"font-medium text-lg text-gray-500\\">\\r\\n        An Earl McGowen Company\\r\\n      </h2>\\r\\n    </div>\\r\\n  </div>\\r\\n  <div class=\\"hidden lg:flex space-x-4\\">\\r\\n    <a href=\\"https://twitter.com/your-twitter-handle\\" target=\\"_blank\\" class=\\"text-blue-500 hover:text-blue-700\\">\\r\\n      <i class=\\"fab fa-twitter\\"></i>\\r\\n    </a>\\r\\n    <a href=\\"https://www.facebook.com/earlmcgowen/\\" target=\\"_blank\\" class=\\"text-blue-500 hover:text-blue-700\\">\\r\\n      <i class=\\"fab fa-facebook-f\\"></i>\\r\\n    </a>\\r\\n    <a href=\\"https://www.linkedin.com/in/earl-l-mcgowen-b510884/\\" target=\\"_blank\\" class=\\"text-blue-500 hover:text-blue-700\\">\\r\\n      <i class=\\"fab fa-linkedin-in\\"></i>\\r\\n    </a>\\r\\n    <a href=\\"http://earlmcgowen.info/\\" target=\\"_blank\\" class=\\"text-blue-500 hover:text-blue-700\\">\\r\\n      <i class=\\"fas fa-globe\\"></i>\\r\\n    </a>\\r\\n    <a href=\\"https://www.youtube.com/channel/UC-y8DJUix0fjtnLSe5_8bnA\\" target=\\"_blank\\" class=\\"text-blue-500 hover:text-blue-700\\">\\r\\n      <i class=\\"fab fa-youtube\\"></i>\\r\\n    </a>\\r\\n  </div>\\r\\n  <div class=\\"lg:hidden relative\\">\\r\\n    <Button style=\\"min-width: 100px;\\" on:click={() => menu.setOpen}>\\r\\n      <i class=\\"fas fa-bars\\"></i>\\r\\n    </Button>\\r\\n    <Menu bind:this={menu}>\\r\\n      <List>\\r\\n        <Item>\\r\\n          <a href=\\"https://twitter.com/your-twitter-handle\\" target=\\"_blank\\" class=\\"block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700\\">Twitter</a>\\r\\n        </Item>\\r\\n        <Item>\\r\\n          <a href=\\"https://www.facebook.com/earlmcgowen/\\" target=\\"_blank\\" class=\\"block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700\\">Facebook</a>\\r\\n        </Item>\\r\\n        <Item>\\r\\n          <a href=\\"https://www.linkedin.com/in/earl-l-mcgowen-b510884/\\" target=\\"_blank\\" class=\\"block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700\\">LinkedIn</a>\\r\\n        </Item>\\r\\n        <Item>\\r\\n          <a href=\\"http://earlmcgowen.info/\\" target=\\"_blank\\" class=\\"block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700\\">Legacy Site</a>\\r\\n        </Item>\\r\\n        <Item>\\r\\n          <a href=\\"https://www.youtube.com/channel/UC-y8DJUix0fjtnLSe5_8bnA\\" target=\\"_blank\\" class=\\"block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700\\">YouTube</a>\\r\\n        </Item>\\r\\n      </List>\\r\\n    </Menu>\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<nav class=\\"bg-gray-800 p-4 rounded-lg mt-4\\">\\r\\n  <ul class=\\"flex space-x-4\\">\\r\\n    <li><a href=\\"/\\" class=\\"text-white hover:text-indigo-400\\">Home</a></li>\\r\\n    <li><a href=\\"/about\\" class=\\"text-white hover:text-indigo-400\\">About</a></li>\\r\\n    <li><a href=\\"/contact\\" class=\\"text-white hover:text-indigo-400\\">Contact</a></li>\\r\\n    <li class=\\"relative\\">\\r\\n      <ChatMenu />\\r\\n    </li>\\r\\n    <li><a href=\\"/openai-webui\\" class=\\"text-white hover:text-indigo-400\\">OpenAI WebUI</a></li>\\r\\n    <li><a href=\\"/streamlit_llm\\" class=\\"text-white hover:text-indigo-400\\">Streamlit LLM</a></li>\\r\\n    <li><a href=\\"/wordle\\" class=\\"text-white hover:text-indigo-400\\">Wordle Solver</a></li>\\r\\n    <li><a href=\\"/chatapp\\" class=\\"text-white hover:text-indigo-400\\">Chat App</a></li> <!-- New Link -->\\r\\n    <slot />\\r\\n  </ul>\\r\\n</nav>\\r\\n\\r\\n"],"names":[],"mappings":"AASE,sBAAQ,CACN,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,IACjB,CAEA,oBAAM,CACJ,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,IAChB"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menu;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="header mt-8 ml-4 svelte-11lowdm"><div class="flex items-center" data-svelte-h="svelte-5kdws4"><a href="/"><img src="/logo.jpg" alt="Logo" class="logo svelte-11lowdm"></a> <div><a href="/"><h1 class="font-semibold text-5xl mt-4">Sakura<span class="text-rose-400">AI</span></h1></a> <h2 class="font-medium text-lg text-gray-500">An Earl McGowen Company</h2></div></div> <div class="hidden lg:flex space-x-4" data-svelte-h="svelte-95fbmi"><a href="https://twitter.com/your-twitter-handle" target="_blank" class="text-blue-500 hover:text-blue-700"><i class="fab fa-twitter"></i></a> <a href="https://www.facebook.com/earlmcgowen/" target="_blank" class="text-blue-500 hover:text-blue-700"><i class="fab fa-facebook-f"></i></a> <a href="https://www.linkedin.com/in/earl-l-mcgowen-b510884/" target="_blank" class="text-blue-500 hover:text-blue-700"><i class="fab fa-linkedin-in"></i></a> <a href="http://earlmcgowen.info/" target="_blank" class="text-blue-500 hover:text-blue-700"><i class="fas fa-globe"></i></a> <a href="https://www.youtube.com/channel/UC-y8DJUix0fjtnLSe5_8bnA" target="_blank" class="text-blue-500 hover:text-blue-700"><i class="fab fa-youtube"></i></a></div> <div class="lg:hidden relative">${validate_component(Button, "Button").$$render($$result, { style: "min-width: 100px;" }, {}, {
      default: () => {
        return `<i class="fas fa-bars"></i>`;
      }
    })} ${validate_component(Menu, "Menu").$$render(
      $$result,
      { this: menu },
      {
        this: ($$value) => {
          menu = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(List, "List").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `<a href="https://twitter.com/your-twitter-handle" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700" data-svelte-h="svelte-ewu52o">Twitter</a>`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `<a href="https://www.facebook.com/earlmcgowen/" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700" data-svelte-h="svelte-lzlb52">Facebook</a>`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `<a href="https://www.linkedin.com/in/earl-l-mcgowen-b510884/" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700" data-svelte-h="svelte-125j2tl">LinkedIn</a>`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `<a href="http://earlmcgowen.info/" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700" data-svelte-h="svelte-1kl7ocy">Legacy Site</a>`;
                }
              })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                default: () => {
                  return `<a href="https://www.youtube.com/channel/UC-y8DJUix0fjtnLSe5_8bnA" target="_blank" class="block px-4 py-2 text-blue-500 hover:bg-gray-100 hover:text-blue-700" data-svelte-h="svelte-ezogc8">YouTube</a>`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</div></div> <nav class="bg-gray-800 p-4 rounded-lg mt-4"><ul class="flex space-x-4"><li data-svelte-h="svelte-1glaogw"><a href="/" class="text-white hover:text-indigo-400">Home</a></li> <li data-svelte-h="svelte-bicvsv"><a href="/about" class="text-white hover:text-indigo-400">About</a></li> <li data-svelte-h="svelte-7lr3cn"><a href="/contact" class="text-white hover:text-indigo-400">Contact</a></li> <li class="relative">${validate_component(ChatMenu, "ChatMenu").$$render($$result, {}, {}, {})}</li> <li data-svelte-h="svelte-1suj32c"><a href="/openai-webui" class="text-white hover:text-indigo-400">OpenAI WebUI</a></li> <li data-svelte-h="svelte-d8fr4q"><a href="/streamlit_llm" class="text-white hover:text-indigo-400">Streamlit LLM</a></li> <li data-svelte-h="svelte-1godb36"><a href="/wordle" class="text-white hover:text-indigo-400">Wordle Solver</a></li> <li data-svelte-h="svelte-v72gmr"><a href="/chatapp" class="text-white hover:text-indigo-400">Chat App</a></li>  ${slots.default ? slots.default({}) : ``}</ul></nav>`;
  } while (!$$settled);
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

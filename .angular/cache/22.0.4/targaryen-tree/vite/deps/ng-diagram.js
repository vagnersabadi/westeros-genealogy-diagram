import {
  CommonModule,
  NgComponentOutlet,
  isPlatformBrowser
} from "./chunk-XV5SVP7N.js";
import "./chunk-VC3KO7XZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewEncapsulation,
  computed,
  contentChild,
  effect,
  inject,
  input,
  runInInjectionContext,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresolveDocument,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuerySignal
} from "./chunk-UXIW3HKQ.js";
import "./chunk-J46EEYGT.js";
import "./chunk-4YCCEXQQ.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-U7EDC2PH.js";

// node_modules/ng-diagram/fesm2022/ng-diagram.mjs
var _c0 = ["backgroundPattern"];
function NgDiagramGridBackgroundComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "line");
  }
  if (rf & 2) {
    const line_r1 = ctx.$implicit;
    ɵɵattribute("x1", line_r1.x1)("y1", line_r1.y1)("x2", line_r1.x2)("y2", line_r1.y2)("stroke", line_r1.major ? "var(--ngd-background-line-major-color)" : "var(--ngd-background-line-minor-color)")("stroke-width", line_r1.major ? "var(--ngd-background-line-major-width)" : "var(--ngd-background-line-minor-width)")("opacity", line_r1.major ? "var(--ngd-background-line-major-opacity)" : "var(--ngd-background-line-minor-opacity)");
  }
}
var _c1 = ["contentProjection"];
var _c2 = ["*"];
function NgDiagramBackgroundComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-diagram-dotted-background");
  }
}
function NgDiagramBackgroundComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-diagram-grid-background");
  }
}
function NgDiagramBackgroundComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵconditionalCreate(1, NgDiagramBackgroundComponent_Conditional_3_Conditional_1_Template, 1, 0, "ng-diagram-dotted-background")(2, NgDiagramBackgroundComponent_Conditional_3_Conditional_2_Template, 1, 0, "ng-diagram-grid-background");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.isDottedBackground() ? 1 : 2);
  }
}
function NgDiagramBoxSelectionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElement(0, "div");
  }
  if (rf & 2) {
    ɵɵnextContext();
    const boundingBox_r1 = ɵɵreadContextLet(0);
    ɵɵstyleProp("left", boundingBox_r1.x, "px")("top", boundingBox_r1.y, "px")("width", boundingBox_r1.width, "px")("height", boundingBox_r1.height, "px");
  }
}
var _c3 = [[["ng-diagram-edge"]], [["ng-diagram-marker-arrow"]], [["ng-diagram-node"]]];
var _c4 = ["ng-diagram-edge", "ng-diagram-marker-arrow", "ng-diagram-node"];
function NgDiagramBaseEdgeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "defs", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("sourceMarkerId", ctx_r0.sourceMarkerId())("targetMarkerId", ctx_r0.targetMarkerId())("edgeId", ctx_r0.edge().id);
  }
}
function NgDiagramDefaultEdgeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ng-diagram-base-edge-label", 1)(1, "ng-diagram-default-edge-label");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const edgeLabel_r2 = ɵɵreadContextLet(1);
    ɵɵproperty("id", "edge-label")("positionOnEdge", ctx_r0.positionOnEdge());
    ɵɵadvance(2);
    ɵɵtextInterpolate(edgeLabel_r2);
  }
}
function NgDiagramNodeResizeAdornmentComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-diagram-resize-line", 0);
  }
  if (rf & 2) {
    const position_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("position", position_r1)("targetData", ctx_r1.nodeData());
  }
}
function NgDiagramNodeResizeAdornmentComponent_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-diagram-resize-handle", 0);
  }
  if (rf & 2) {
    const position_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("position", position_r3)("targetData", ctx_r1.nodeData());
  }
}
function NgDiagramNodeResizeAdornmentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NgDiagramNodeResizeAdornmentComponent_Conditional_1_For_1_Template, 1, 2, "ng-diagram-resize-line", 0, ɵɵrepeaterTrackByIdentity);
    ɵɵrepeaterCreate(2, NgDiagramNodeResizeAdornmentComponent_Conditional_1_For_3_Template, 1, 2, "ng-diagram-resize-handle", 0, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ctx_r1.linePositions);
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r1.handlePositions);
  }
}
function NgDiagramRotateHandleComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElementStart(0, "svg", 2);
    ɵɵdomElement(1, "path", 3);
    ɵɵdomElementEnd();
  }
}
function NgDiagramNodeRotateAdornmentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ng-diagram-rotate-handle", 0);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("data", ctx_r0.nodeData());
  }
}
var _c5 = [[["ng-diagram-background"]]];
var _c6 = ["ng-diagram-background"];
var _c7 = (a0) => ({
  edge: a0
});
var _c8 = (a0) => ({
  node: a0
});
function NgDiagramComponent_For_4_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgDiagramComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgDiagramComponent_For_4_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const edge_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngComponentOutlet", ctx_r1.getEdgeTemplate(edge_r1.type))("ngComponentOutletInputs", ɵɵpureFunction1(2, _c7, edge_r1));
  }
}
function NgDiagramComponent_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-diagram-default-edge", 4);
  }
  if (rf & 2) {
    const edge_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("edge", edge_r1);
  }
}
function NgDiagramComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ng-diagram-edge");
    ɵɵconditionalCreate(1, NgDiagramComponent_For_4_Conditional_1_Template, 1, 4, "ng-container")(2, NgDiagramComponent_For_4_Conditional_2_Template, 1, 1, "ng-diagram-default-edge", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const edge_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-edge-id", edge_r1.id);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.getEdgeTemplate(edge_r1.type) ? 1 : 2);
  }
}
function NgDiagramComponent_For_7_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgDiagramComponent_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgDiagramComponent_For_7_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const node_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngComponentOutlet", ctx_r1.getNodeTemplate(node_r3.type))("ngComponentOutletInputs", ɵɵpureFunction1(2, _c8, node_r3));
  }
}
function NgDiagramComponent_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-diagram-default-group-template", 6);
  }
  if (rf & 2) {
    const node_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("node", ctx_r1.castToGroupNode(node_r3));
  }
}
function NgDiagramComponent_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-diagram-default-node-template", 6);
  }
  if (rf & 2) {
    const node_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("node", node_r3);
  }
}
function NgDiagramComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ng-diagram-node", 2);
    ɵɵconditionalCreate(1, NgDiagramComponent_For_7_Conditional_1_Template, 1, 4, "ng-container")(2, NgDiagramComponent_For_7_Conditional_2_Template, 1, 1, "ng-diagram-default-group-template", 6)(3, NgDiagramComponent_For_7_Conditional_3_Template, 1, 1, "ng-diagram-default-node-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("node", node_r3);
    ɵɵattribute("data-node-id", node_r3.id);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.getNodeTemplate(node_r3.type) ? 1 : ctx_r1.isGroup(node_r3) ? 2 : 3);
  }
}
function NgDiagramComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-diagram-watermark", 3);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("preferredPosition", (tmp_1_0 = ctx_r1.config()) == null ? null : tmp_1_0.watermarkPosition);
  }
}
function NgDiagramDefaultMinimapNodeComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "circle");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("cx", ctx_r0.cx())("cy", ctx_r0.cy())("r", ctx_r0.radius());
  }
}
function NgDiagramDefaultMinimapNodeComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "ellipse");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("cx", ctx_r0.cx())("cy", ctx_r0.cy())("rx", ctx_r0.rx())("ry", ctx_r0.ry());
  }
}
function NgDiagramDefaultMinimapNodeComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "rect");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("x", ctx_r0.bounds().x)("y", ctx_r0.bounds().y)("width", ctx_r0.bounds().width)("height", ctx_r0.bounds().height);
  }
}
var _c9 = (a0, a1) => ({
  node: a0,
  nodeStyle: a1
});
var _forTrack0 = ($index, $item) => $item.bounds.id;
function NgDiagramMinimapComponent_Conditional_3_For_2_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgDiagramMinimapComponent_Conditional_3_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "foreignObject");
    ɵɵtemplate(1, NgDiagramMinimapComponent_Conditional_3_For_2_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("x", item_r1.bounds.x)("y", item_r1.bounds.y)("width", item_r1.bounds.width)("height", item_r1.bounds.height)("transform", item_r1.bounds.transform);
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", item_r1.template)("ngComponentOutletInputs", ɵɵpureFunction2(7, _c9, item_r1.diagramNode, item_r1.nodeStyle));
  }
}
function NgDiagramMinimapComponent_Conditional_3_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "g", 5);
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("bounds", item_r1.bounds)("nodeStyle", item_r1.nodeStyle);
  }
}
function NgDiagramMinimapComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NgDiagramMinimapComponent_Conditional_3_For_2_Conditional_0_Template, 2, 10, ":svg:foreignObject")(1, NgDiagramMinimapComponent_Conditional_3_For_2_Conditional_1_Template, 1, 2, ":svg:g", 5);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵconditional(item_r1.template ? 0 : 1);
  }
}
function NgDiagramMinimapComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "rect", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("diagramBounds", ctx_r1.diagramBounds())("minimapTransform", ctx_r1.transform());
  }
}
function NgDiagramMinimapComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "rect", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("x", ctx_r1.viewportRect().x)("y", ctx_r1.viewportRect().y)("width", ctx_r1.viewportRect().width)("height", ctx_r1.viewportRect().height);
  }
}
function NgDiagramMinimapComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "g");
    ɵɵrepeaterCreate(1, NgDiagramMinimapComponent_Conditional_3_For_2_Template, 2, 1, null, null, _forTrack0);
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, NgDiagramMinimapComponent_Conditional_3_Conditional_3_Template, 1, 2, ":svg:rect", 3);
    ɵɵconditionalCreate(4, NgDiagramMinimapComponent_Conditional_3_Conditional_4_Template, 1, 4, ":svg:rect", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("transform", ctx_r1.nodesGroupTransform());
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.minimapNodes());
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.showDiagramBounds() ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.hasValidViewport() ? 4 : -1);
  }
}
function NgDiagramMinimapComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-diagram-zoom-controls");
  }
}
var _c10 = ["preview"];
var BoxSelectionProviderService = class _BoxSelectionProviderService {
  boundingBox = signal(null);
  static "ɵfac" = function BoxSelectionProviderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BoxSelectionProviderService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _BoxSelectionProviderService,
    factory: _BoxSelectionProviderService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BoxSelectionProviderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})(), Set.prototype.difference || (Set.prototype.difference = function(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of this) e.has(n) || t.add(n);
  return t;
}), Set.prototype.intersection || (Set.prototype.intersection = function(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of this) e.has(n) && t.add(n);
  return t;
});
var ActionStateManager = class {
  eventManager;
  state;
  constructor(e) {
    this.eventManager = e, this.state = new Proxy({}, {
      set: (e2, t, n) => (e2[t] = n, this.emitStateChanged(), true)
    });
  }
  getState() {
    return this.state;
  }
  emitStateChanged() {
    this.eventManager.emit("actionStateChanged", {
      actionState: __spreadValues({}, this.state)
    });
  }
  get resize() {
    return this.state.resize;
  }
  set resize(e) {
    this.state.resize = e;
  }
  get linking() {
    return this.state.linking;
  }
  set linking(e) {
    this.state.linking = e;
  }
  get copyPaste() {
    return this.state.copyPaste;
  }
  set copyPaste(e) {
    this.state.copyPaste = e;
  }
  get highlightGroup() {
    return this.state.highlightGroup;
  }
  set highlightGroup(e) {
    this.state.highlightGroup = e;
  }
  get rotation() {
    return this.state.rotation;
  }
  set rotation(e) {
    this.state.rotation = e;
  }
  get dragging() {
    return this.state.dragging;
  }
  set dragging(e) {
    this.state.dragging = e;
  }
  get panning() {
    return this.state.panning;
  }
  set panning(e) {
    this.state.panning = e;
  }
  clearResize() {
    this.state.resize = void 0;
  }
  clearLinking() {
    this.state.linking = void 0;
  }
  clearCopyPaste() {
    this.state.copyPaste = void 0;
  }
  clearHighlightGroup() {
    this.state.highlightGroup = void 0;
  }
  clearRotation() {
    this.state.rotation = void 0;
  }
  clearDragging() {
    this.state.dragging = void 0;
  }
  isResizing() {
    return !!this.state.resize;
  }
  isLinking() {
    return !!this.state.linking;
  }
  isRotating() {
    return !!this.state.rotation;
  }
  isDragging() {
    return !!this.state.dragging;
  }
  clearPanning() {
    this.state.panning = void 0;
  }
  isPanning() {
    return !!this.state.panning?.active;
  }
  get selection() {
    return this.state.selection;
  }
  set selection(e) {
    this.state.selection = e;
  }
  clearSelection() {
    this.state.selection = void 0;
  }
};
var computeBezierPath = (e) => {
  if (!e || 0 === e.length) return "";
  if (1 === e.length) return `M ${e[0].x},${e[0].y}`;
  if (2 === e.length) return `M ${e[0].x},${e[0].y} L ${e[1].x},${e[1].y}`;
  if (3 === e.length) return `M ${e[0].x},${e[0].y} Q ${e[1].x},${e[1].y} ${e[2].x},${e[2].y}`;
  if (4 === e.length) return `M ${e[0].x},${e[0].y} C ${e[1].x},${e[1].y} ${e[2].x},${e[2].y} ${e[3].x},${e[3].y}`;
  const t = [`M ${e[0].x},${e[0].y}`];
  for (let n = 1; n < e.length; n++) t.push(`L ${e[n].x},${e[n].y}`);
  return t.join(" ");
};
var normalizeDistance = (e, t) => {
  const n = e >= 0 && !Object.is(e, -0) ? e : t + e;
  return Math.max(0, Math.min(n, t));
};
function angleBetweenPoints(e, t) {
  return Math.atan2(t.y - e.y, t.x - e.x) * (180 / Math.PI);
}
var normalizeAngle = (e) => (e % 360 + 360) % 360;
var angleToSide = (e, t = false) => {
  const n = normalizeAngle(e);
  let i;
  return i = n >= 315 || n < 45 ? "right" : n >= 45 && n < 135 ? "bottom" : n >= 135 && n < 225 ? "left" : "top", t ? {
    right: "left",
    left: "right",
    top: "bottom",
    bottom: "top"
  }[i] : i;
};
var clamp = ({
  min: e,
  value: t,
  max: n
}) => Math.min(Math.max(t, e), n);
var calculateEdgePanningForce = (e, t, n, i) => {
  const {
    x: o,
    y: r,
    width: a,
    height: s
  } = e, {
    x: d,
    y: l
  } = t;
  let c = 0, g = 0;
  const p = d - o, h = o + a - d, m = l - r, u = r + s - l;
  if (p < n ? c = clamp({
    min: 0,
    max: n,
    value: -(p - n)
  }) : h < n && (c = -clamp({
    min: 0,
    max: n,
    value: -(h - n)
  })), m < n ? g = clamp({
    min: 0,
    max: n,
    value: -(m - n)
  }) : u < n && (g = -clamp({
    min: 0,
    max: n,
    value: -(u - n)
  })), 0 === c && 0 === g) return null;
  let v = c / n, f = g / n;
  return v = isFinite(v) ? v : 1, f = isFinite(f) ? f : 1, {
    x: v * i,
    y: f * i
  };
};
var distanceBetweenPoints = (e, t) => Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2);
function fractionalPart(e) {
  return Math.abs(e - Math.trunc(e));
}
function snapAngle(e, t) {
  const n = Math.round(e / t);
  if (0 === n && t > 1) return 0;
  const i = 1 === Math.abs(n) && Math.abs(e) < t, o = clamp({
    min: 1,
    max: t / 2 - 1,
    value: Math.floor(t / 2 - 1)
  });
  if (i && t - Math.abs(e) > o) return 0;
  let r = n * t;
  if (1 === t) {
    const t2 = (r - 1) % 90 == 0;
    (r + 1) % 90 == 0 ? 1 - fractionalPart(e) < 0.9001 && (r += 1) : t2 && fractionalPart(e) < 0.9001 && (r -= 1);
  }
  return normalizeAngle(r);
}
var snapNumber = (e, t) => t ? t * Math.round(e / t) : e;
var snapPoint = (e, t) => ({
  x: snapNumber(e.x, t.width),
  y: snapNumber(e.y, t.height)
});
var NgDiagramMath = {
  angleBetweenPoints,
  angleToSide,
  clamp,
  distanceBetweenPoints,
  normalizeAngle,
  snapAngle,
  snapNumber,
  snapPoint,
  calculateEdgePanningForce
};
var computeBezierPointOnPath = (e, t) => {
  if (e.length < 2) return e[0] || {
    x: 0,
    y: 0
  };
  const n = NgDiagramMath.clamp({
    min: 0,
    value: t,
    max: 1
  });
  if (2 === e.length) {
    const [t2, i2] = e;
    return {
      x: t2.x + (i2.x - t2.x) * n,
      y: t2.y + (i2.y - t2.y) * n
    };
  }
  if (3 === e.length) {
    const [t2, i2, o2] = e, r2 = 1 - n, a2 = r2 * r2, s2 = n * n;
    return {
      x: a2 * t2.x + 2 * r2 * n * i2.x + s2 * o2.x,
      y: a2 * t2.y + 2 * r2 * n * i2.y + s2 * o2.y
    };
  }
  const [i, o, r, a] = e, s = 1 - n, d = s * s, l = d * s, c = n * n, g = c * n;
  return {
    x: l * i.x + 3 * d * n * o.x + 3 * s * c * r.x + g * a.x,
    y: l * i.y + 3 * d * n * o.y + 3 * s * c * r.y + g * a.y
  };
};
var computeBezierPointAtDistance = (e, t) => {
  if (e.length < 2) return e[0] || {
    x: 0,
    y: 0
  };
  const n = [{
    t: 0,
    length: 0
  }];
  let i = computeBezierPointOnPath(e, 0), o = 0;
  for (let t2 = 1; t2 <= 100; t2++) {
    const r2 = t2 / 100, a2 = computeBezierPointOnPath(e, r2);
    o += Math.hypot(a2.x - i.x, a2.y - i.y), n.push({
      t: r2,
      length: o
    }), i = a2;
  }
  const r = normalizeDistance(t, o);
  let a = 0, s = 100;
  for (; a < s; ) {
    const e2 = a + s >> 1;
    n[e2].length < r ? a = e2 + 1 : s = e2;
  }
  const d = n[Math.max(0, a - 1)], l = n[a], c = l.length - d.length;
  return computeBezierPointOnPath(e, d.t + (l.t - d.t) * (c > 0 ? (r - d.length) / c : 0));
};
var getControlPointOffset = (e, t) => {
  switch (e.side) {
    case "right":
    default:
      return {
        x: e.x + t,
        y: e.y
      };
    case "left":
      return {
        x: e.x - t,
        y: e.y
      };
    case "bottom":
      return {
        x: e.x,
        y: e.y + t
      };
    case "top":
      return {
        x: e.x,
        y: e.y - t
      };
  }
};
var computeBezierPoints = (e, t, n = 100) => {
  if (!e || !t) return [];
  const i = getControlPointOffset(e, Math.abs(n)), o = getControlPointOffset(t, Math.abs(n));
  return [{
    x: e.x,
    y: e.y
  }, i, o, {
    x: t.x,
    y: t.y
  }];
};
var BezierRouting = class {
  name = "bezier";
  computePoints(e, t) {
    const {
      sourcePoint: n,
      targetPoint: i
    } = e;
    return computeBezierPoints(n, i, t?.bezier?.bezierControlOffset ?? 100);
  }
  computeSvgPath(e) {
    return computeBezierPath(e);
  }
  computePointOnPath(e, t) {
    return computeBezierPointOnPath(e, t);
  }
  computePointAtDistance(e, t) {
    return computeBezierPointAtDistance(e, t);
  }
};
var computeOrthogonalPath = (e = [], t = 16) => {
  if (0 === e.length) return "";
  if (1 === e.length) return `M ${e[0].x},${e[0].y}`;
  if (2 === e.length) return `M ${e[0].x},${e[0].y} L ${e[1].x},${e[1].y}`;
  const n = e[0], i = e.slice(1, -1), o = e[e.length - 1], r = i.map((n2, o2) => {
    const r2 = e[o2], a = e[o2 + 2], s = a.y - r2.y, d = Math.min(Math.abs(a.x - r2.x) / 2, Math.abs(s) / 2, t), l = r2.x < n2.x, c = r2.x > n2.x, g = r2.y > n2.y, p = r2.y < n2.y, h = a.x < n2.x, m = a.x > n2.x, u = a.y > n2.y, v = a.y < n2.y, f = Math.abs(r2.x - n2.x) <= 1, y = Math.abs(r2.y - n2.y) <= 1, w = Math.abs(a.x - n2.x) <= 1, C = Math.abs(a.y - n2.y) <= 1;
    if (i.length <= 2 && (f && y || w && C)) return "";
    if (r2.y === n2.y && n2.y === a.y) return `L${n2.x + (c ? d : -d)},${n2.y}`;
    if (r2.x === n2.x && n2.x === a.x) return `L${n2.x},${n2.y + (p ? -d : d)}`;
    const S = l && u || c && v || p && h || g && m;
    return r2.x === n2.x ? `L${n2.x},${n2.y + (p ? -d : d)} A${d},${d},0,0,${S ? 1 : 0},${n2.x + (m ? d : -d)},${n2.y}` : `L${n2.x + (c ? d : -d)},${n2.y} A${d},${d},0,0,${S ? 1 : 0},${n2.x},${n2.y + (v ? -d : d)}`;
  });
  return `M ${n.x},${n.y} ${r.join(" ")} L ${o.x},${o.y}`;
};
var computeLinearSegmentLengths = (e) => {
  const t = [];
  let n = 0;
  for (let i = 0; i < e.length - 1; i++) {
    const o = Math.hypot(e[i + 1].x - e[i].x, e[i + 1].y - e[i].y);
    t.push(o), n += o;
  }
  return {
    lengths: t,
    totalLength: n
  };
};
var interpolateAlongLinearSegments = (e, t, n) => {
  let i = 0;
  for (let o = 0; o < t.length; o++) {
    if (i + t[o] >= n) {
      const r = t[o] > 0 ? (n - i) / t[o] : 0;
      return {
        x: e[o].x + (e[o + 1].x - e[o].x) * r,
        y: e[o].y + (e[o + 1].y - e[o].y) * r
      };
    }
    i += t[o];
  }
  return e[e.length - 1];
};
var computeOrthogonalPointAtDistance = (e, t) => {
  if (e.length < 2) return e[0] || {
    x: 0,
    y: 0
  };
  const {
    lengths: n,
    totalLength: i
  } = computeLinearSegmentLengths(e), o = normalizeDistance(t, i);
  return interpolateAlongLinearSegments(e, n, o);
};
var computeOrthogonalPointOnPath = (e, t) => {
  if (e.length < 2) return {
    x: 0,
    y: 0
  };
  const n = NgDiagramMath.clamp({
    min: 0,
    value: t,
    max: 1
  }), i = [];
  let o = 0;
  for (let t2 = 0; t2 < e.length - 1; t2++) {
    const n2 = Math.hypot(e[t2 + 1].x - e[t2].x, e[t2 + 1].y - e[t2].y);
    i.push(n2), o += n2;
  }
  const r = o * n;
  let a = 0;
  for (let t2 = 0; t2 < i.length; t2++) {
    const n2 = i[t2];
    if (a + n2 >= r) {
      const i2 = e[t2], o2 = e[t2 + 1], s = (r - a) / n2;
      return {
        x: i2.x + (o2.x - i2.x) * s,
        y: i2.y + (o2.y - i2.y) * s
      };
    }
    a += n2;
  }
  return e[e.length - 1];
};
var getOffsetPoint = (e, t, n = 20) => {
  const i = {
    left: {
      x: -n,
      y: 0
    },
    right: {
      x: n,
      y: 0
    },
    top: {
      x: 0,
      y: -n
    },
    bottom: {
      x: 0,
      y: n
    }
  }[t] || {
    x: 0,
    y: 0
  };
  return {
    x: e.x + i.x,
    y: e.y + i.y
  };
};
var getPathPointsFromBottom = (e, t, n, i, o = 20) => {
  const r = getOffsetPoint({
    x: t.x,
    y: t.y
  }, "bottom", o), a = getOffsetPoint({
    x: n.x,
    y: n.y
  }, e, o);
  return "bottom" === e ? r.y > a.y ? [{
    x: r.x,
    y: r.y
  }, {
    x: a.x,
    y: r.y
  }] : [{
    x: r.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : "left" === e ? r.y > a.y ? r.x > a.x ? [{
    x: r.x,
    y: r.y
  }, {
    x: a.x,
    y: r.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }] : r.x > a.x ? [{
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: r.x,
    y: a.y
  }] : "top" === e ? r.y > a.y ? [{
    x: r.x,
    y: r.y
  }, {
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }] : "right" === e ? r.y > a.y ? r.x > a.x ? [{
    x: r.x,
    y: r.y
  }, {
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: a.x,
    y: r.y
  }, {
    x: a.x,
    y: a.y
  }] : r.x > a.x ? [{
    x: r.x,
    y: a.y
  }] : [{
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }, {
    x: a.x,
    y: a.y
  }] : void 0;
};
var getPathPointsFromLeft = (e, t, n, i, o = 20) => {
  const r = getOffsetPoint({
    x: t.x,
    y: t.y
  }, "left", o), a = getOffsetPoint({
    x: n.x,
    y: n.y
  }, e, o);
  return "left" === e ? r.x > a.x ? [{
    x: a.x,
    y: r.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: a.y
  }] : "top" === e ? r.x > a.x ? r.y > a.y ? [{
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: a.x,
    y: r.y
  }] : r.y > a.y ? [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }] : "bottom" === e ? r.x > a.x ? r.y > a.y ? [{
    x: r.x,
    y: r.y
  }, {
    x: a.x,
    y: r.y
  }] : [{
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : r.y > a.y ? [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : "right" === e ? r.x > a.x ? [{
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }, {
    x: a.x,
    y: a.y
  }] : void 0;
};
var getPathPointsFromRight = (e, t, n, i, o = 20) => {
  const r = getOffsetPoint({
    x: t.x,
    y: t.y
  }, "right", o), a = getOffsetPoint({
    x: n.x,
    y: n.y
  }, e, o);
  return "right" === e ? r.x > a.x ? [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: a.y
  }] : [{
    x: a.x,
    y: r.y
  }, {
    x: a.x,
    y: a.y
  }] : "top" === e ? r.x < a.x ? r.y < a.y ? [{
    x: a.x,
    y: r.y
  }] : [{
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : r.y < a.y ? [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : "bottom" === e ? r.x < a.x ? r.y < a.y ? [{
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: a.x,
    y: r.y
  }] : r.y < a.y ? [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }] : "left" === e ? r.x < a.x ? [{
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }, {
    x: a.x,
    y: a.y
  }] : void 0;
};
var getPathPointsFromTop = (e, t, n, i, o = 20) => {
  const r = getOffsetPoint(t, "top", o), a = getOffsetPoint(n, e, o);
  return "left" === e ? r.y > a.y ? r.x > a.x ? [{
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: r.x,
    y: a.y
  }] : r.x > a.x ? [{
    x: r.x,
    y: r.y
  }, {
    x: a.x,
    y: r.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }] : "right" === e ? r.y > a.y ? r.x > a.x ? [{
    x: r.x,
    y: a.y
  }] : [{
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }, {
    x: a.x,
    y: a.y
  }] : r.x > a.x ? [{
    x: r.x,
    y: r.y
  }, {
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: a.x,
    y: r.y
  }, {
    x: a.x,
    y: a.y
  }] : "bottom" === e ? r.y > a.y ? [{
    x: r.x,
    y: i.y
  }, {
    x: a.x,
    y: i.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: i.x,
    y: r.y
  }, {
    x: i.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : "top" === e ? r.y > a.y ? [{
    x: r.x,
    y: a.y
  }, {
    x: a.x,
    y: a.y
  }] : [{
    x: r.x,
    y: r.y
  }, {
    x: a.x,
    y: r.y
  }] : void 0;
};
var positionFunctionMap = {
  top: getPathPointsFromTop,
  right: getPathPointsFromRight,
  bottom: getPathPointsFromBottom,
  left: getPathPointsFromLeft
};
var getPathPoints = (e, t, n, i = 20) => (positionFunctionMap[e.side] || getPathPointsFromLeft)(t.side, {
  x: e.x,
  y: e.y
}, {
  x: t.x,
  y: t.y
}, n, i);
var computeOrthogonalPoints = (e, t, n = 20) => {
  const i = getPathPoints(e, t, {
    x: (e?.x + t?.x) / 2,
    y: (e.y + t.y) / 2
  }, n) || [];
  return [{
    x: e.x,
    y: e.y
  }, ...i, {
    x: t.x,
    y: t.y
  }];
};
var OrthogonalRouting = class {
  name = "orthogonal";
  computePoints(e, t) {
    const {
      sourcePoint: n,
      targetPoint: i
    } = e, o = t?.orthogonal?.firstLastSegmentLength;
    return computeOrthogonalPoints(n, i, null != o && o >= 0 ? o : 20);
  }
  computeSvgPath(e, t) {
    const n = t?.orthogonal?.maxCornerRadius;
    return computeOrthogonalPath(e, null != n && n >= 0 ? n : 16);
  }
  computePointOnPath(e, t) {
    return computeOrthogonalPointOnPath(e, t);
  }
  computePointAtDistance(e, t) {
    return computeOrthogonalPointAtDistance(e, t);
  }
};
var computePolylinePointAtDistance = (e, t) => {
  if (e.length < 2) return e[0] || {
    x: 0,
    y: 0
  };
  const {
    lengths: n,
    totalLength: i
  } = computeLinearSegmentLengths(e), o = normalizeDistance(t, i);
  return interpolateAlongLinearSegments(e, n, o);
};
var computePolylinePointOnPath = (e, t) => {
  if (e.length < 2) return e[0] || {
    x: 0,
    y: 0
  };
  const n = NgDiagramMath.clamp({
    min: 0,
    value: t,
    max: 1
  });
  if (2 === e.length) {
    const t2 = e[0], i2 = e[1];
    return {
      x: t2.x + (i2.x - t2.x) * n,
      y: t2.y + (i2.y - t2.y) * n
    };
  }
  let i = 0;
  const o = [];
  for (let t2 = 0; t2 < e.length - 1; t2++) {
    const n2 = e[t2 + 1].x - e[t2].x, r2 = e[t2 + 1].y - e[t2].y, a2 = Math.sqrt(n2 * n2 + r2 * r2);
    o.push(a2), i += a2;
  }
  const r = i * n;
  let a = 0;
  for (let t2 = 0; t2 < o.length; t2++) {
    const n2 = o[t2];
    if (a + n2 >= r) {
      const i2 = (r - a) / n2, o2 = e[t2], s = e[t2 + 1];
      return {
        x: o2.x + (s.x - o2.x) * i2,
        y: o2.y + (s.y - o2.y) * i2
      };
    }
    a += n2;
  }
  return e[e.length - 1];
};
var PolylineRouting = class {
  name = "polyline";
  computePoints(e) {
    const {
      sourcePoint: t,
      targetPoint: n,
      edge: i
    } = e;
    return "manual" === i.routingMode && i.points && i.points.length > 2 ? i.points : [{
      x: t.x,
      y: t.y
    }, {
      x: n.x,
      y: n.y
    }];
  }
  computeSvgPath(e) {
    return 0 === e.length ? "" : 1 === e.length ? `M ${e[0].x},${e[0].y}` : e.map((e2, t) => 0 === t ? `M ${e2.x},${e2.y}` : `L ${e2.x},${e2.y}`).join(" ");
  }
  computePointOnPath(e, t) {
    return computePolylinePointOnPath(e, t);
  }
  computePointAtDistance(e, t) {
    return computePolylinePointAtDistance(e, t);
  }
};
var ROUTING_MUST_HAVE_NAME_WARNING = "[ngDiagram] Routing must have a non-empty name property. Registration skipped.\n\nTo fix this:\n  • Ensure your EdgeRouting implementation has a 'name' property\n  • The name should be a non-empty string\n\nDocumentation: https://www.ngdiagram.dev/docs/guides/edges/routing/\n";
var ROUTING_NOT_FOUND_WARNING = (e, t, n) => `[ngDiagram] Routing '${e}' is not registered. Falling back to '${n}' routing.

Available routings: ${t.join(", ")}

To fix this:
  • Register the routing using NgDiagramService.registerRouting()
  • Or use one of the available routings listed above

Documentation: https://www.ngdiagram.dev/docs/guides/edges/routing/
`;
var CANNOT_SET_DEFAULT_ROUTING_WARNING = (e, t) => `[ngDiagram] Cannot set default routing to '${e}': routing not registered. Default routing unchanged.

Available routings: ${t.join(", ")}

To fix this:
  • First register the routing using NgDiagramService.registerRouting()
  • Then set it as default

Documentation: https://www.ngdiagram.dev/docs/guides/edges/routing/
`;
var EdgeRoutingManager = class {
  routings = /* @__PURE__ */ new Map();
  defaultRouting;
  getRoutingConfig;
  constructor(e, t) {
    this.defaultRouting = e || "orthogonal", this.getRoutingConfig = t || (() => ({})), this.registerRouting(new OrthogonalRouting()), this.registerRouting(new BezierRouting()), this.registerRouting(new PolylineRouting());
  }
  registerRouting(e) {
    e.name ? this.routings.set(e.name, e) : console.warn(ROUTING_MUST_HAVE_NAME_WARNING);
  }
  unregisterRouting(e) {
    this.routings.delete(e);
  }
  getRouting(e) {
    return this.routings.get(e);
  }
  getRegisteredRoutings() {
    return Array.from(this.routings.keys());
  }
  hasRouting(e) {
    return this.routings.has(e);
  }
  computePoints(e, t) {
    const n = e || this.defaultRouting;
    let i = this.routings.get(n);
    if (!i) {
      const e2 = this.defaultRouting;
      if (console.warn(ROUTING_NOT_FOUND_WARNING(n, this.getRegisteredRoutings(), e2)), i = this.routings.get(e2), !i) return [t.sourcePoint, t.targetPoint].filter((e3) => !!e3);
    }
    return i.computePoints(t, this.getRoutingConfig());
  }
  computePath(e, t) {
    const n = e || this.defaultRouting;
    let i = this.routings.get(n);
    if (!i) {
      const e2 = this.defaultRouting;
      if (console.warn(ROUTING_NOT_FOUND_WARNING(n, this.getRegisteredRoutings(), e2)), i = this.routings.get(e2), !i) return 0 === t.length ? "" : `M ${t[0].x},${t[0].y}`;
    }
    return i.computeSvgPath(t, this.getRoutingConfig());
  }
  computePointOnPath(e, t, n) {
    const i = e || this.defaultRouting;
    let o = this.routings.get(i);
    if (!o) {
      const e2 = this.defaultRouting;
      console.warn(ROUTING_NOT_FOUND_WARNING(i, this.getRegisteredRoutings(), e2)), o = this.routings.get(e2);
    }
    if (o?.computePointOnPath) return o.computePointOnPath(t, n);
    if (t.length < 2) return t[0] || {
      x: 0,
      y: 0
    };
    const r = t[0], a = t[t.length - 1];
    return {
      x: r.x + (a.x - r.x) * n,
      y: r.y + (a.y - r.y) * n
    };
  }
  computePointAtDistance(e, t, n) {
    const i = e || this.defaultRouting;
    let o = this.routings.get(i);
    if (!o) {
      const e2 = this.defaultRouting;
      console.warn(ROUTING_NOT_FOUND_WARNING(i, this.getRegisteredRoutings(), e2)), o = this.routings.get(e2);
    }
    return o?.computePointAtDistance ? o.computePointAtDistance(t, n) : computeFallbackPointAtDistance(t, n);
  }
  setDefaultRouting(e) {
    this.routings.has(e) ? this.defaultRouting = e : console.warn(CANNOT_SET_DEFAULT_ROUTING_WARNING(e, this.getRegisteredRoutings()));
  }
  getDefaultRouting() {
    return this.defaultRouting;
  }
};
var computeFallbackPointAtDistance = (e, t) => {
  if (e.length < 2) return e[0] || {
    x: 0,
    y: 0
  };
  const {
    lengths: n,
    totalLength: i
  } = computeLinearSegmentLengths(e), o = normalizeDistance(t, i);
  return interpolateAlongLinearSegments(e, n, o);
};
var resolveLabelPosition = (e, t, n, i) => {
  if ("string" == typeof e) {
    const o = e.trim();
    if (o.endsWith("px")) {
      const e2 = parseFloat(o);
      return i.computePointAtDistance(t, n, e2);
    }
    return i.computePointOnPath(t, n, parseFloat(o));
  }
  return i.computePointOnPath(t, n, e);
};
var EVENT_LISTENER_ERROR = (e, t, n) => `[ngDiagram] Event listener error: Listener for "${e}" event threw an error.

Event: ${e}
Listener type: ${t}
Error: ${n instanceof Error ? n.message : String(n)}

This indicates an error in your event listener callback.
Check your event listener implementation for the "${e}" event.
The diagram will continue to function, but this listener failed to execute.`;
var EventManager = class {
  listeners = /* @__PURE__ */ new Map();
  enabled = true;
  deferredEmits = [];
  on(e, t) {
    this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set());
    const n = {
      callback: t,
      once: false
    };
    return this.listeners.get(e).add(n), () => this.removeListener(e, n);
  }
  once(e, t) {
    this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set());
    const n = {
      callback: t,
      once: true
    };
    return this.listeners.get(e).add(n), () => this.removeListener(e, n);
  }
  emit(e, t) {
    if (!this.enabled) return;
    const n = this.listeners.get(e);
    if (!n || 0 === n.size) return;
    const i = [];
    for (const o of n) try {
      o.callback(t), o.once && i.push(o);
    } catch (t2) {
      console.error(EVENT_LISTENER_ERROR(String(e), o.once ? "once" : "on", t2));
    }
    i.forEach((e2) => {
      n.delete(e2);
    });
  }
  deferredEmit(e, t) {
    this.enabled && this.deferredEmits.push({
      event: e,
      payload: t
    });
  }
  off(e, t) {
    if (!t) return void this.listeners.delete(e);
    const n = this.listeners.get(e);
    if (!n) return;
    const i = Array.from(n).find((e2) => e2.callback === t);
    i && n.delete(i);
  }
  offAll() {
    this.listeners.clear();
  }
  setEnabled(e) {
    this.enabled = e;
  }
  isEnabled() {
    return this.enabled;
  }
  hasListeners(e) {
    return this.listeners.has(e) && this.listeners.get(e).size > 0;
  }
  flushDeferredEmits() {
    const e = [...this.deferredEmits];
    this.deferredEmits = [];
    for (const {
      event: t,
      payload: n
    } of e) this.emit(t, n);
  }
  clearDeferredEmits() {
    this.deferredEmits = [];
  }
  removeListener(e, t) {
    const n = this.listeners.get(e);
    n && (n.delete(t), 0 === n.size && this.listeners.delete(e));
  }
};
var addToGroup = async (e, {
  groupId: t,
  nodeIds: n
}) => {
  const i = n.map((t2) => e.flowCore.modelLookup.getNodeById(t2)).filter(Boolean), o = e.flowCore.modelLookup.getNodeById(t);
  if (!o) return;
  const r = [];
  for (const n2 of i) e.flowCore.modelLookup.wouldCreateCircularDependency(n2.id, t) || n2.groupId !== t && e.flowCore.config.grouping.canGroup(n2, o) && r.push({
    id: n2.id,
    groupId: t
  });
  r.length > 0 && await e.flowCore.commandHandler.emit("updateNodes", {
    nodes: r
  }), r.some((e2) => Boolean(e2.groupId)) && e.flowCore.commandHandler.emit("highlightGroupClear");
};
var computeFloatingEndSide = (e, t, n) => {
  if (!e) return "left";
  let i;
  if (t && e.measuredPorts) {
    const n2 = e.measuredPorts.find((e2) => e2.id === t);
    i = n2?.position ? {
      x: e.position.x + n2.position.x + (n2.size?.width ?? 0) / 2,
      y: e.position.y + n2.position.y + (n2.size?.height ?? 0) / 2
    } : {
      x: e.position.x + (e.size?.width ?? 100) / 2,
      y: e.position.y + (e.size?.height ?? 50) / 2
    };
  } else i = {
    x: e.position.x + (e.size?.width ?? 100) / 2,
    y: e.position.y + (e.size?.height ?? 50) / 2
  };
  const o = NgDiagramMath.angleBetweenPoints(i, n);
  return NgDiagramMath.angleToSide(o, true);
};
var FPS_60 = 1e3 / 60;
function deepMerge(e, t) {
  const n = __spreadValues({}, e);
  for (const i in t) if (Object.hasOwn(t, i)) {
    const o = t[i], r = e[i];
    void 0 !== o && (n[i] = "object" != typeof o || null === o || Array.isArray(o) || "function" == typeof o || "object" != typeof r || null === r || Array.isArray(r) || "function" == typeof r ? o : deepMerge(r, o));
  }
  return n;
}
var getPointRangeRect = (e, t) => ({
  x: e.x - t,
  y: e.y - t,
  width: 2 * t,
  height: 2 * t
});
var isSameRect = (e, t) => e?.x === t?.x && e?.y === t?.y && e?.width === t?.width && e?.height === t?.height;
var getRect = ({
  position: e = {
    x: 0,
    y: 0
  },
  size: t = {
    width: 1,
    height: 1
  }
}) => ({
  x: e?.x || 0,
  y: e?.y || 0,
  width: t?.width || 1,
  height: t?.height || 1
});
var doesRectsIntersect = (e, t) => !(e.x + e.width <= t.x || t.x + t.width <= e.x || e.y + e.height <= t.y || t.y + t.height <= e.y);
var doesContainRect = (e, t) => e.x <= t.x && e.x + e.width >= t.x + t.width && e.y <= t.y && e.y + e.height >= t.y + t.height;
var getDistanceBetweenRects = (e, t) => {
  if (doesRectsIntersect(e, t)) return 0;
  const n = e.x + e.width, i = e.y + e.height, o = t.x + t.width, r = t.y + t.height;
  return n <= t.x ? i <= t.y ? Math.sqrt((n - t.x) ** 2 + (i - t.y) ** 2) : e.y >= r ? Math.sqrt((n - t.x) ** 2 + (e.y - r) ** 2) : t.x - n : e.x >= o ? i <= t.y ? Math.sqrt((e.x - o) ** 2 + (i - t.y) ** 2) : e.y >= r ? Math.sqrt((e.x - o) ** 2 + (e.y - r) ** 2) : e.x - o : i <= t.y ? t.y - i : e.y >= r ? e.y - r : 1 / 0;
};
var isSamePoint = (e, t) => e?.x === t?.x && e?.y === t?.y;
var isSameSize = (e, t) => e?.width === t?.width && e?.height === t?.height;
var getBoundsFromRect = (e) => ({
  left: e.x,
  top: e.y,
  right: e.x + e.width,
  bottom: e.y + e.height
});
var equalPointsArrays = (e, t) => {
  if (e.length !== t.length) return false;
  for (let n = 0; n < e.length; n++) if (!isSamePoint(e[n], t[n])) return false;
  return true;
};
var unionRect = (e) => {
  if (0 === e.length) return {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  let t = e[0].x, n = e[0].y, i = e[0].x + e[0].width, o = e[0].y + e[0].height;
  return e.forEach((e2) => {
    t = Math.min(t, e2.x), n = Math.min(n, e2.y), i = Math.max(i, e2.x + e2.width), o = Math.max(o, e2.y + e2.height);
  }), {
    x: t,
    y: n,
    width: i - t,
    height: o - n
  };
};
var boundingRectOfPoints = (e) => {
  if (0 === e.length) return {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  let t = e[0].x, n = e[0].y, i = e[0].x, o = e[0].y;
  return e.forEach((e2) => {
    t = Math.min(t, e2.x), n = Math.min(n, e2.y), i = Math.max(i, e2.x), o = Math.max(o, e2.y);
  }), {
    x: t,
    y: n,
    width: i - t,
    height: o - n
  };
};
var getRotatedCorners = (e, t = 0) => {
  const {
    x: n,
    y: i,
    width: o,
    height: r
  } = e, a = n + o / 2, s = i + r / 2, d = t * Math.PI / 180, l = Math.cos(d), c = Math.sin(d);
  return [{
    x: n,
    y: i
  }, {
    x: n + o,
    y: i
  }, {
    x: n + o,
    y: i + r
  }, {
    x: n,
    y: i + r
  }].map(({
    x: e2,
    y: t2
  }) => {
    const n2 = e2 - a, i2 = t2 - s;
    return {
      x: a + n2 * l - i2 * c,
      y: s + n2 * c + i2 * l
    };
  });
};
var getRotatedBoundingRect = (e, t = 0) => 0 === t ? e : boundingRectOfPoints(getRotatedCorners(e, t));
var rotatePoint = (e, t, n) => {
  const i = Math.cos(n), o = Math.sin(n), r = e.x - t.x, a = e.y - t.y;
  return {
    x: t.x + r * i - a * o,
    y: t.y + r * o + a * i
  };
};
var lineSegmentIntersection = (e, t, n, i) => {
  const o = (e.x - t.x) * (n.y - i.y) - (e.y - t.y) * (n.x - i.x);
  if (Math.abs(o) < 1e-10) return null;
  const r = ((e.x - n.x) * (n.y - i.y) - (e.y - n.y) * (n.x - i.x)) / o, a = -((e.x - t.x) * (e.y - n.y) - (e.y - t.y) * (e.x - n.x)) / o;
  return r >= 0 && r <= 1 && a >= 0 && a <= 1 ? {
    x: e.x + r * (t.x - e.x),
    y: e.y + r * (t.y - e.y)
  } : null;
};
var getOutwardNormal = (e, t) => {
  const n = t.y - e.y, i = -(t.x - e.x), o = Math.hypot(n, i);
  return 0 === o ? {
    x: 1,
    y: 0
  } : {
    x: n / o,
    y: i / o
  };
};
var normalToSide = (e) => Math.abs(e.x) >= Math.abs(e.y) ? e.x >= 0 ? "right" : "left" : e.y >= 0 ? "bottom" : "top";
var getNodeBorderIntersection = (e, t) => {
  const n = getRect({
    position: e.position,
    size: e.size
  }), i = (e.angle || 0) * Math.PI / 180, o = {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  };
  if (t.x === o.x && t.y === o.y) {
    const e2 = 0 !== i ? rotatePoint({
      x: n.x + n.width,
      y: o.y
    }, o, i) : {
      x: n.x + n.width,
      y: o.y
    }, t2 = 0 !== i ? rotatePoint({
      x: 1,
      y: 0
    }, {
      x: 0,
      y: 0
    }, i) : {
      x: 1,
      y: 0
    };
    return {
      x: e2.x,
      y: e2.y,
      side: normalToSide(t2)
    };
  }
  const r = [{
    x: n.x,
    y: n.y
  }, {
    x: n.x + n.width,
    y: n.y
  }, {
    x: n.x + n.width,
    y: n.y + n.height
  }, {
    x: n.x,
    y: n.y + n.height
  }], a = 0 !== i ? r.map((e2) => rotatePoint(e2, o, i)) : r;
  let s = 1 / 0, d = null, l = null;
  for (let e2 = 0; e2 < 4; e2++) {
    const n2 = a[e2], i2 = a[(e2 + 1) % 4], r2 = lineSegmentIntersection(t, o, n2, i2);
    if (r2) {
      const e3 = Math.hypot(r2.x - t.x, r2.y - t.y);
      e3 < s && (s = e3, d = n2, l = i2);
    }
  }
  if (!d || !l) return {
    x: o.x,
    y: o.y,
    side: "right"
  };
  const c = getOutwardNormal(d, l), g = normalToSide(c), p = {
    x: (d.x + l.x) / 2,
    y: (d.y + l.y) / 2
  };
  return {
    x: p.x,
    y: p.y,
    side: g
  };
};
var getRotatedPortSide = (e, t) => {
  const n = Math.round(t / 90) % 4;
  return {
    top: ["top", "right", "bottom", "left"],
    right: ["right", "bottom", "left", "top"],
    bottom: ["bottom", "left", "top", "right"],
    left: ["left", "top", "right", "bottom"]
  }[e][n];
};
var getPortPosition = (e, t) => {
  const {
    x: n,
    y: i,
    width: o,
    height: r
  } = getRect(e), a = n + t.position.x, s = i + t.position.y;
  let d = e.side;
  return t.angle && 0 !== t.angle && (d = getRotatedPortSide(e.side, t.angle)), "left" === d ? {
    x: a,
    y: s + r / 2
  } : "top" === d ? {
    x: a + o / 2,
    y: s
  } : "bottom" === d ? {
    x: a + o / 2,
    y: s + r
  } : "right" === d ? {
    x: a + o,
    y: s + r / 2
  } : {
    x: a,
    y: s
  };
};
var getPortFlowPosition = (e, t) => {
  const n = e.measuredPorts?.find((e2) => e2.id === t);
  return n ? getPortPosition(n, e) : null;
};
var getPortFlowPositionSide = (e, t) => {
  const n = e.measuredPorts?.find((e2) => e2.id === t);
  if (!n) return null;
  const i = getPortPosition(n, e);
  let o = n.side;
  return e.angle && 0 !== e.angle && (o = getRotatedPortSide(n.side, e.angle)), __spreadProps(__spreadValues({}, i), {
    side: o
  });
};
var calculateNodeBounds = (e) => unionRect(e.map((e2) => e2.measuredBounds).filter((e2) => void 0 !== e2));
var calculateEdgeBounds = (e) => unionRect(e.map(getEdgeMeasuredBounds));
var calculatePartsBounds = (e, t) => {
  const n = calculateNodeBounds(e), i = calculateEdgeBounds(t);
  return unionRect([n, i]);
};
var getEdgeMeasuredBounds = (e) => {
  const t = boundingRectOfPoints(e.points || []), n = e.measuredLabels || [];
  if (0 === n.length) return t;
  const i = n.filter((e2) => e2.position && e2.size).map((e2) => ({
    x: e2.position.x - e2.size.width / 2,
    y: e2.position.y - e2.size.height / 2,
    width: e2.size.width,
    height: e2.size.height
  }));
  return unionRect([t, ...i]);
};
var getNodeMeasuredBounds = (e) => {
  const t = e.measuredPorts || [], {
    x: n,
    y: i,
    width: o,
    height: r
  } = getRect(e), a = [getRotatedBoundingRect({
    x: 0,
    y: 0,
    width: o,
    height: r
  }, e.angle || 0)];
  for (const e2 of t) {
    const {
      x: t2,
      y: n2,
      width: i2,
      height: o2
    } = getRect(e2);
    a.push({
      x: t2,
      y: n2,
      width: i2,
      height: o2
    });
  }
  const s = unionRect(a);
  return {
    x: n + s.x,
    y: i + s.y,
    width: s.width,
    height: s.height
  };
};
var calculateGroupBounds = (e, t, {
  useGroupRect: n = true,
  allowResizeBelowChildrenBounds: i = true
} = {}) => {
  if (!t.size?.width || !t.size?.height) throw new Error("Group must have both width and height defined");
  if (i) return {
    left: 1 / 0,
    top: 1 / 0,
    right: -1 / 0,
    bottom: -1 / 0
  };
  const o = getBoundsFromRect(getRect(t));
  return e.length ? e.reduce((e2, t2) => {
    if (t2.size && (!t2.size.width || !t2.size.height)) throw new Error(`calculateGroupBounds: child node ${t2.id} does not have both width and height defined`);
    const n2 = getBoundsFromRect(t2.measuredBounds ? t2.measuredBounds : getNodeMeasuredBounds(t2));
    return e2.left = Math.min(e2.left, n2.left), e2.top = Math.min(e2.top, n2.top), e2.right = Math.max(e2.right, n2.right), e2.bottom = Math.max(e2.bottom, n2.bottom), e2;
  }, n ? o : {
    left: 1 / 0,
    top: 1 / 0,
    right: -1 / 0,
    bottom: -1 / 0
  }) : o;
};
function isGroup(e) {
  return true === e.isGroup;
}
var isValidSize = (e) => (e?.width ?? 0) > 0 && (e?.height ?? 0) > 0;
var isValidPosition = (e) => null != e?.x && null != e?.y && !isNaN(e.x) && !isNaN(e.y);
var Semaphore = class {
  permits;
  waiting = [];
  constructor(e) {
    this.permits = e;
  }
  async acquire() {
    return this.permits > 0 ? (this.permits--, Promise.resolve()) : new Promise((e) => {
      this.waiting.push(e);
    });
  }
  release() {
    this.waiting.length > 0 ? this.waiting.shift()() : this.permits++;
  }
  availablePermits() {
    return this.permits;
  }
  getQueueLength() {
    return this.waiting.length;
  }
};
var snapNodePosition = (e, t, n) => {
  if (!e.snapping.shouldSnapDragForNode(t)) return n;
  const i = e.snapping.computeSnapForNodeDrag(t) ?? e.snapping.defaultDragSnap;
  return NgDiagramMath.snapPoint(n, i);
};
function sortNodesByZIndex(e, t) {
  const n = createNodeZIndexComparator(t);
  return [...e].sort(n);
}
function createNodeZIndexComparator(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((e2, n) => {
    t.set(e2.id, n);
  }), (e2, n) => {
    const i = e2.computedZIndex ?? 0, o = n.computedZIndex ?? 0;
    if (i !== o) return o - i;
    const r = t.get(e2.id) ?? 0;
    return (t.get(n.id) ?? 0) - r;
  };
}
var computeAddedPorts = (e, t) => {
  const n = new Set(t.map((e2) => e2.id));
  return [...(e.measuredPorts ?? []).filter((e2) => !n.has(e2.id)), ...t];
};
var computeUpdatedPorts = (e, t) => {
  const n = new Map(t.map(({
    portId: e2,
    portChanges: t2
  }) => [e2, t2]));
  return e.map((e2) => {
    const t2 = n.get(e2.id);
    return t2 ? __spreadValues(__spreadValues({}, e2), t2) : e2;
  });
};
var computeRemainingPorts = (e, t) => {
  const n = new Set(t);
  return (e ?? []).filter((e2) => !n.has(e2.id));
};
var addNodes = async (e, t) => {
  const {
    nodes: n
  } = t;
  await e.flowCore.applyUpdate({
    nodesToAdd: n
  }, "addNodes");
};
var paletteDropNode = async (e, t) => {
  const {
    node: n
  } = t, i = snapNodePosition(e.flowCore.config, n, n.position);
  await e.flowCore.applyUpdate({
    nodesToAdd: [__spreadProps(__spreadValues({}, n), {
      position: i
    })]
  }, "paletteDropNode");
};
var updateNode = async (e, t) => {
  const {
    id: n,
    nodeChanges: i
  } = t;
  await e.flowCore.applyUpdate({
    nodesToUpdate: [__spreadValues({
      id: n
    }, i)]
  }, "updateNode");
};
var updateNodes = async (e, t) => {
  const {
    nodes: n
  } = t;
  await e.flowCore.applyUpdate({
    nodesToUpdate: n
  }, "updateNodes");
};
var deleteNodes = async (e, t) => {
  const {
    edges: n
  } = e.flowCore.getState(), {
    ids: i
  } = t, o = /* @__PURE__ */ new Set(), r = new Set(i);
  n.forEach((e2) => {
    (r.has(e2.source) || r.has(e2.target)) && o.add(e2.id);
  }), await e.flowCore.applyUpdate({
    nodesToRemove: Array.from(r),
    edgesToRemove: o.size > 0 ? Array.from(o) : []
  }, "deleteNodes");
};
var clearModel = async (e) => {
  const {
    edges: t,
    nodes: n
  } = e.flowCore.getState();
  await e.flowCore.applyUpdate({
    nodesToRemove: n.map((e2) => e2.id),
    edgesToRemove: t.map((e2) => e2.id)
  }, "clearModel");
};
var addEdges = async (e, t) => {
  const {
    edges: n
  } = t;
  await e.flowCore.applyUpdate({
    edgesToAdd: n
  }, "addEdges");
};
var updateEdge = async (e, t) => {
  const {
    id: n,
    edgeChanges: i
  } = t;
  await e.flowCore.applyUpdate({
    edgesToUpdate: [__spreadValues({
      id: n
    }, i)]
  }, "updateEdge");
};
var updateEdges = async (e, t) => {
  const {
    edges: n
  } = t;
  await e.flowCore.applyUpdate({
    edgesToUpdate: n
  }, "updateEdges");
};
var deleteEdges = async (e, t) => {
  const {
    ids: n
  } = t;
  await e.flowCore.applyUpdate({
    edgesToRemove: n
  }, "deleteEdges");
};
var addPortsBulk = async (e, t) => {
  const {
    additions: n
  } = t, i = [];
  n.forEach((t2, n2) => {
    const o = e.flowCore.getNodeById(n2);
    o && i.push({
      id: n2,
      measuredPorts: computeAddedPorts(o, t2)
    });
  }), 0 !== i.length && await e.flowCore.applyUpdate({
    nodesToUpdate: i
  }, "addPortsBulk");
};
var updatePortsBulk = async (e, t) => {
  const {
    updates: n
  } = t, i = [];
  n.forEach((t2, n2) => {
    const o = e.flowCore.getNodeById(n2);
    o && o.measuredPorts && i.push({
      id: n2,
      measuredPorts: computeUpdatedPorts(o.measuredPorts, t2)
    });
  }), 0 !== i.length && await e.flowCore.applyUpdate({
    nodesToUpdate: i
  }, "updatePortsBulk");
};
var deletePortsBulk = async (e, t) => {
  const {
    deletions: n
  } = t, i = [];
  n.forEach((t2, n2) => {
    const o = e.flowCore.getNodeById(n2);
    o && i.push({
      id: n2,
      measuredPorts: computeRemainingPorts(o.measuredPorts, t2)
    });
  }), 0 !== i.length && await e.flowCore.applyUpdate({
    nodesToUpdate: i
  }, "deletePortsBulk");
};
var addEdgeLabelsBulk = async (e, t) => {
  const {
    additions: n
  } = t, i = [];
  n.forEach((t2, n2) => {
    const o = e.flowCore.getEdgeById(n2);
    if (!o) return;
    const r = [...o.measuredLabels ?? [], ...t2];
    i.push({
      id: n2,
      measuredLabels: r
    });
  }), 0 !== i.length && await e.flowCore.applyUpdate({
    edgesToUpdate: i
  }, "addEdgeLabelsBulk");
};
var updateEdgeLabelsBulk = async (e, t) => {
  const {
    updates: n
  } = t, i = [], o = e.flowCore.edgeRoutingManager;
  n.forEach((t2, n2) => {
    const r = e.flowCore.getEdgeById(n2);
    if (!r) return;
    const a = r.points || [], s = /* @__PURE__ */ new Map();
    t2.forEach(({
      labelId: e2,
      labelChanges: t3
    }) => {
      s.set(e2, t3);
    });
    const d = a.length >= 2, l = (e2, t3) => d ? resolveLabelPosition(e2, r.routing, a, o) : t3, c = r.measuredLabels?.map((e2) => {
      const t3 = s.get(e2.id);
      if (!t3) return d ? __spreadProps(__spreadValues({}, e2), {
        position: l(e2.positionOnEdge, e2.position)
      }) : e2;
      const n3 = t3.positionOnEdge ?? e2.positionOnEdge;
      return __spreadProps(__spreadValues(__spreadValues({}, e2), t3), {
        position: l(n3, e2.position)
      });
    });
    c && i.push({
      id: n2,
      measuredLabels: c
    });
  }), 0 !== i.length && await e.flowCore.applyUpdate({
    edgesToUpdate: i
  }, "updateEdgeLabelsBulk");
};
var deleteEdgeLabelsBulk = async (e, t) => {
  const {
    deletions: n
  } = t, i = [];
  n.forEach((t2, n2) => {
    const o = e.flowCore.getEdgeById(n2);
    if (!o) return;
    const r = new Set(t2), a = o.measuredLabels?.filter((e2) => !r.has(e2.id));
    i.push({
      id: n2,
      measuredLabels: a
    });
  }), 0 !== i.length && await e.flowCore.applyUpdate({
    edgesToUpdate: i
  }, "deleteEdgeLabelsBulk");
};
var calculateCenteringCoordinates = ({
  x: e,
  y: t,
  width: n,
  height: i
}, o) => !n || !i || n < 0 || i < 0 ? null : o.width && o.height ? {
  x: o.width / 2 - (e + n / 2) * o.scale,
  y: o.height / 2 - (t + i / 2) * o.scale
} : null;
var centerOnRect = async (e, {
  rect: t
}) => {
  const {
    viewport: n
  } = e.flowCore.getState().metadata, i = calculateCenteringCoordinates(t, n);
  if (i) {
    if (isSamePoint(n, {
      x: i.x,
      y: i.y
    })) return;
    await e.flowCore.applyUpdate({
      metadataUpdate: {
        viewport: __spreadProps(__spreadValues({}, n), {
          x: i.x,
          y: i.y
        })
      }
    }, "centerOnRect");
  }
};
var centerOnNode = async (e, {
  nodeOrId: t
}) => {
  const n = "string" == typeof t ? e.flowCore.getNodeById(t) : t, {
    viewport: i
  } = e.flowCore.getState().metadata;
  if (!n || !n.size?.width || !n.size?.height) return;
  const o = calculateCenteringCoordinates({
    x: n.position.x,
    y: n.position.y,
    width: n.size.width,
    height: n.size.height
  }, i);
  if (o) {
    if (isSamePoint(i, {
      x: o.x,
      y: o.y
    })) return;
    await e.flowCore.applyUpdate({
      metadataUpdate: {
        viewport: __spreadProps(__spreadValues({}, i), {
          x: o.x,
          y: o.y
        })
      }
    }, "centerOnNode");
  }
};
var calculateNodeCenter = (e) => 0 === e.length ? {
  x: 0,
  y: 0
} : {
  x: e.reduce((e2, t) => e2 + t.position.x, 0) / e.length,
  y: e.reduce((e2, t) => e2 + t.position.y, 0) / e.length
};
var calculatePasteOffset = (e, t) => {
  const n = calculateNodeCenter(e);
  if (!t.position) return {
    x: 20,
    y: 20
  };
  if (1 === e.length) {
    const n2 = e[0];
    return {
      x: t.position.x - (n2.size?.width ?? 0) / 2 - n2.position.x,
      y: t.position.y - (n2.size?.height ?? 0) / 2 - n2.position.y
    };
  }
  return {
    x: t.position.x - n.x,
    y: t.position.y - n.y
  };
};
var updatePortNodeIds = (e) => {
  if (!e.measuredPorts || 0 === e.measuredPorts.length) return e;
  const t = e.measuredPorts.map((t2) => __spreadProps(__spreadValues({}, t2), {
    nodeId: e.id
  }));
  return __spreadProps(__spreadValues({}, e), {
    measuredPorts: t
  });
};
var createPastedNodes = (e, t, n, i) => (t.forEach((t2) => {
  const n2 = e.computeNodeId();
  i.set(t2.id, n2);
}), t.map((e2) => {
  const t2 = i.get(e2.id), o = e2.groupId ? i.get(e2.groupId) : void 0;
  let r = __spreadProps(__spreadValues({}, e2), {
    id: t2,
    groupId: o,
    position: {
      x: e2.position.x + n.x,
      y: e2.position.y + n.y
    },
    selected: true
  });
  return r = updatePortNodeIds(r), r;
}));
var createPastedEdges = (e, t, n) => t.map((t2) => {
  const i = e.computeEdgeId();
  return __spreadProps(__spreadValues({}, t2), {
    id: i,
    source: n.get(t2.source) || t2.source,
    target: n.get(t2.target) || t2.target,
    selected: true
  });
});
var createDeselectUpdates = (e, t) => {
  const n = [], i = [];
  return e.forEach((e2) => {
    e2.selected && n.push({
      id: e2.id,
      selected: false
    });
  }), t.forEach((e2) => {
    e2.selected && i.push({
      id: e2.id,
      selected: false
    });
  }), {
    nodesToUpdate: n,
    edgesToUpdate: i
  };
};
var copy = async (e) => {
  const {
    nodes: t,
    edges: n
  } = e.flowCore.getState(), i = t.filter((e2) => e2.selected), o = n.filter((e2) => e2.selected);
  e.flowCore.actionStateManager.copyPaste = {
    copiedNodes: i,
    copiedEdges: o
  };
};
var applySnappingToNodes = (e, t) => {
  for (const n of e) n.position = snapNodePosition(t, n, n.position);
};
var paste = async (e, t) => {
  const n = e.flowCore.actionStateManager.copyPaste;
  if (!n || 0 === n.copiedNodes.length && 0 === n.copiedEdges.length) return;
  const {
    nodes: i,
    edges: o
  } = e.flowCore.getState(), r = /* @__PURE__ */ new Map(), a = calculatePasteOffset(n.copiedNodes, t), s = createPastedNodes(e.flowCore.config, n.copiedNodes, a, r);
  applySnappingToNodes(s, e.flowCore.config);
  const d = createPastedEdges(e.flowCore.config, n.copiedEdges, r), {
    nodesToUpdate: l,
    edgesToUpdate: c
  } = createDeselectUpdates(i, o);
  e.flowCore.actionStateManager.selection = {
    selectionChanged: true
  }, await e.flowCore.applyUpdate({
    nodesToAdd: s,
    edgesToAdd: d,
    nodesToUpdate: l,
    edgesToUpdate: c
  }, "paste"), await e.flowCore.applyUpdate({}, "selectEnd");
};
var getEdgesToRemove = ({
  edges: e,
  nodesToDeleteIds: t
}) => {
  const n = new Set(t);
  return e.filter((e2) => e2.selected || n.has(e2.source) || n.has(e2.target)).map((e2) => e2.id);
};
var deleteSelection = async (e) => {
  const {
    nodes: t,
    edges: n
  } = e.flowCore.getState(), i = t.some((e2) => e2.selected), o = n.some((e2) => e2.selected);
  if (!i && !o) return;
  const r = i ? e.flowCore.modelLookup.getSelectedNodesWithChildren({
    directOnly: false
  }).map((e2) => e2.id) : [], a = getEdgesToRemove({
    edges: n,
    nodesToDeleteIds: r
  });
  0 === r.length && 0 === a.length || await e.flowCore.applyUpdate({
    nodesToRemove: r,
    edgesToRemove: a
  }, "deleteSelection");
};
var cut = async (e) => {
  await copy(e), await deleteSelection(e);
};
var highlightGroup = async (e, {
  groupId: t,
  nodes: n
}) => {
  const i = e.flowCore.actionStateManager.highlightGroup, o = i?.highlightedGroupId;
  if (o === t) return;
  const r = e.flowCore.modelLookup.getNodeById(t);
  if (!r) return;
  if (!n.some((t2) => e.flowCore.config.grouping.canGroup(t2, r))) return;
  const a = [{
    id: t,
    highlighted: true
  }];
  o && a.push({
    id: o,
    highlighted: false
  }), e.flowCore.actionStateManager.highlightGroup = {
    highlightedGroupId: t
  }, await e.flowCore.applyUpdate({
    nodesToUpdate: a
  }, "highlightGroup");
};
var highlightGroupClear = async (e) => {
  const t = e.flowCore.actionStateManager.highlightGroup, n = t?.highlightedGroupId;
  n && (await e.flowCore.applyUpdate({
    nodesToUpdate: [{
      id: n,
      highlighted: false
    }]
  }, "highlightGroupClear"), e.flowCore.actionStateManager.clearHighlightGroup());
};
var init = async (e, t) => {
  await e.flowCore.applyUpdate({
    renderedNodeIds: t.renderedNodeIds,
    renderedEdgeIds: t.renderedEdgeIds
  }, "init");
};
var createFinalEdge = (e, t, n) => {
  const i = __spreadProps(__spreadValues(__spreadValues({}, t), n), {
    temporary: false
  });
  return e.linking.finalEdgeDataBuilder(__spreadProps(__spreadValues({}, i), {
    id: e.computeEdgeId()
  }));
};
var isProperTargetPort = (e, t, n) => !!("source" !== e.type && (t && e.nodeId !== t || n && e.id !== n));
var validateConnection = (e, t, n, i, o, r) => {
  const a = t ? e.getNodeById(t) : null, s = i ? e.getNodeById(i) : null, d = n ? a?.measuredPorts?.find((e2) => e2.id === n) ?? null : null, l = o ? s?.measuredPorts?.find((e2) => e2.id === o) ?? null : null;
  return !(r || !d || l) || e.config.linking.validateConnection(a, d, s, l);
};
var createTemporaryEdge = (e, t) => e.linking.temporaryEdgeDataBuilder(__spreadProps(__spreadValues({
  id: "TEMPORARY_EDGE",
  data: {},
  temporary: true
}, t), {
  source: t.source || "",
  target: t.target || "",
  targetArrowhead: t.targetArrowhead || "ng-diagram-arrow"
}));
var clearTemporaryEdge = async (e) => {
  await e.flowCore.applyUpdate({}, "finishLinking"), e.flowCore.actionStateManager.clearLinking();
};
var validateTarget = (e, t, n) => {
  const i = t && e.flowCore.getNodeById(t);
  if (!i) return {
    isValid: false,
    targetNode: null,
    targetPosition: null
  };
  if (n && "source" === i.measuredPorts?.find((e2) => e2.id === n)?.type) return {
    isValid: false,
    targetNode: i,
    targetPosition: null
  };
  const o = t && n ? getPortFlowPosition(i, n) : i.position;
  return o ? {
    isValid: true,
    targetNode: i,
    targetPosition: o
  } : {
    isValid: false,
    targetNode: i,
    targetPosition: null
  };
};
var finishLinking = async (e, t) => {
  const n = e.flowCore.actionStateManager.linking, i = n?.temporaryEdge;
  if (!n) return;
  if (!i) return void await clearTemporaryEdge(e);
  n.dropPosition = t.position ?? {
    x: 0,
    y: 0
  };
  const {
    source: o,
    sourcePort: r,
    target: a,
    targetPort: s
  } = i, d = a || void 0, l = s || void 0;
  if (!d) return n.cancelReason = "noTarget", void await clearTemporaryEdge(e);
  if (!validateConnection(e.flowCore, o, r, d, l, true)) return n.cancelReason = "invalidConnection", void await clearTemporaryEdge(e);
  const {
    isValid: c,
    targetPosition: g
  } = validateTarget(e, d, l);
  if (!c) return n.cancelReason = "invalidTarget", void await clearTemporaryEdge(e);
  await e.flowCore.applyUpdate({
    edgesToAdd: [createFinalEdge(e.flowCore.config, i, {
      target: d,
      targetPort: l,
      targetPosition: g || void 0
    })]
  }, "finishLinking"), e.flowCore.actionStateManager.clearLinking();
};
var finishLinkingToPosition = async (e, t) => {
  const n = e.flowCore.actionStateManager.linking, i = n?.temporaryEdge, {
    position: o
  } = t;
  n && (i ? (n.dropPosition = o, await e.flowCore.applyUpdate({
    edgesToAdd: [createFinalEdge(e.flowCore.config, i, {
      target: "",
      targetPort: "",
      targetPosition: o
    })]
  }, "finishLinking"), e.flowCore.actionStateManager.clearLinking()) : e.flowCore.actionStateManager.clearLinking());
};
var getTargetPortInfo = (e, t, n) => {
  const i = e.flowCore.getNearestPortInRange(t, e.flowCore.config.linking.portSnapDistance), o = i && isProperTargetPort(i, n.source, n.sourcePort);
  return {
    targetNodeId: o ? i.nodeId : "",
    targetPortId: o ? i.id : "",
    isValid: !!o
  };
};
var createNewTemporaryEdge = (e, t, n, i) => {
  const {
    targetNodeId: o,
    targetPortId: r
  } = n, a = t.source || "", s = t.sourcePort || "", d = () => createTemporaryEdge(e.flowCore.config, {
    source: a,
    sourcePort: s,
    target: "",
    targetPort: "",
    targetPosition: i
  });
  if (!o) return d();
  const l = e.flowCore.getNodeById(o);
  return l && validateConnection(e.flowCore, t.source, t.sourcePort, o, r) ? r && l.measuredPorts?.find((e2) => e2.id === r) ? createTemporaryEdge(e.flowCore.config, {
    source: a,
    sourcePort: s,
    target: o,
    targetPort: r,
    targetPosition: i
  }) : createTemporaryEdge(e.flowCore.config, {
    source: a,
    sourcePort: s,
    target: o,
    targetPort: "",
    targetPosition: i
  }) : d();
};
var isSameTarget = (e, t, n) => t === e.target && n === e.targetPort;
var moveTemporaryEdge = async (e, t) => {
  const {
    position: n
  } = t, i = e.flowCore.actionStateManager.linking?.temporaryEdge;
  if (!e.flowCore.actionStateManager.linking || !i) return;
  const o = getTargetPortInfo(e, n, i);
  if (o.targetNodeId && isSameTarget(i, o.targetNodeId, o.targetPortId)) return;
  const r = createNewTemporaryEdge(e, i, o, n);
  e.flowCore.actionStateManager.linking = __spreadProps(__spreadValues({}, e.flowCore.actionStateManager.linking), {
    temporaryEdge: r
  }), await e.flowCore.applyUpdate({}, "moveTemporaryEdge");
};
var startLinking = async (e, t) => {
  const {
    source: n,
    sourcePort: i
  } = t, o = e.flowCore.getNodeById(n);
  if (!o) return;
  if (i && "target" === o.measuredPorts?.find((e2) => e2.id === i)?.type) return;
  const r = i ? getPortFlowPosition(o, i) : o.position;
  if (!r) return;
  const a = createTemporaryEdge(e.flowCore.config, {
    source: n,
    sourcePort: i,
    sourcePosition: r,
    target: "",
    targetPosition: r
  });
  e.flowCore.actionStateManager.linking = {
    temporaryEdge: a,
    sourceNodeId: n,
    sourcePortId: i ?? ""
  }, await e.flowCore.applyUpdate({}, "startLinking");
};
var startLinkingFromPosition = async (e, t) => {
  const {
    position: n
  } = t, i = createTemporaryEdge(e.flowCore.config, {
    source: "",
    sourcePosition: n,
    target: "",
    targetPosition: n
  });
  e.flowCore.actionStateManager.linking = {
    sourceNodeId: "",
    sourcePortId: "",
    temporaryEdge: i
  }, await e.flowCore.applyUpdate({}, "startLinkingFromPosition");
};
var moveNodesBy = async (e, {
  delta: t,
  nodes: n
}) => {
  const i = new Set(n.map((e2) => e2.id)), o = n.filter((e2) => !e2.groupId || !i.has(e2.groupId)), r = e.flowCore.actionStateManager?.dragging?.accumulatedDeltas, a = processRootNodesWithDescendants(e, o, i, t, r);
  0 !== a.length && await e.flowCore.applyUpdate({
    nodesToUpdate: a
  }, "moveNodesBy");
};
var processRootNodesWithDescendants = (e, t, n, i, o) => {
  const r = [], a = /* @__PURE__ */ new Set();
  return t.forEach((t2) => {
    const {
      snappedPosition: s,
      actualDelta: d
    } = calculateRootNodeMovement(e, t2, i, o);
    isSamePoint(t2.position, s) || r.push({
      id: t2.id,
      position: s
    }), a.add(t2.id), applyDeltaToDescendants(e, t2.id, d, n, a, r);
  }), r;
};
var calculateRootNodeMovement = (e, t, n, i) => {
  const {
    snappedPosition: o,
    newAccumulated: r
  } = applySnappingWithAccumulation(e, t, n, i);
  return i && i.set(t.id, r), {
    snappedPosition: o,
    actualDelta: {
      x: o.x - t.position.x,
      y: o.y - t.position.y
    }
  };
};
var applyDeltaToDescendants = (e, t, n, i, o, r) => {
  e.flowCore.modelLookup.getAllDescendants(t).forEach((e2) => {
    if (i.has(e2.id) && !o.has(e2.id)) {
      const t2 = {
        x: e2.position.x + n.x,
        y: e2.position.y + n.y
      };
      isSamePoint(e2.position, t2) || r.push({
        id: e2.id,
        position: t2
      }), o.add(e2.id);
    }
  });
};
var applySnappingWithAccumulation = (e, t, n, i) => {
  const o = i?.get(t.id) ?? {
    x: 0,
    y: 0
  }, r = o.x + n.x, a = o.y + n.y, s = snapNodePosition(e.flowCore.config, t, {
    x: t.position.x + r,
    y: t.position.y + a
  });
  return {
    snappedPosition: s,
    newAccumulated: {
      x: r - (s.x - t.position.x),
      y: a - (s.y - t.position.y)
    }
  };
};
var moveNodesStart = async (e) => {
  await e.flowCore.applyUpdate({}, "moveNodesStart");
};
var moveNodesStop = async (e) => {
  await e.flowCore.applyUpdate({}, "moveNodesStop");
};
var moveViewportBy = async (e, {
  x: t,
  y: n
}) => {
  const {
    metadata: i
  } = e.flowCore.getState();
  (t || n) && (e.flowCore.actionStateManager.isPanning() ? e.flowCore.applyViewportOnlyUpdate({
    x: i.viewport.x + t,
    y: i.viewport.y + n
  }) : await e.flowCore.applyUpdate({
    metadataUpdate: {
      viewport: __spreadProps(__spreadValues({}, i.viewport), {
        x: i.viewport.x + t,
        y: i.viewport.y + n
      })
    }
  }, "moveViewport"));
};
var moveViewport = async (e, t) => {
  const {
    x: n,
    y: i
  } = t, {
    metadata: o
  } = e.flowCore.getState();
  isSamePoint(o.viewport, {
    x: n,
    y: i
  }) || await e.flowCore.applyUpdate({
    metadataUpdate: {
      viewport: __spreadProps(__spreadValues({}, o.viewport), {
        x: n,
        y: i
      })
    }
  }, "moveViewport");
};
var removeFromGroup = async (e, {
  groupId: t,
  nodeIds: n
}) => {
  const i = n.map((t2) => e.flowCore.modelLookup.getNodeById(t2)).filter(Boolean);
  if (!e.flowCore.modelLookup.getNodeById(t)) return;
  const o = [];
  for (const e2 of i) e2.groupId === t && o.push({
    id: e2.id,
    groupId: void 0
  });
  o.length > 0 && await e.flowCore.commandHandler.emit("updateNodes", {
    nodes: o
  });
};
var RESIZE_NODE_NOT_FOUND_ERROR = (e) => `[ngDiagram] Resize node failed: Node not found.

Node ID: ${e}

This may occur if the node was deleted before the resize command executed.

Documentation: https://www.ngdiagram.dev/docs/guides/nodes/nodes/`;
var applyMinimumSizeConstraints = (e, t, n, i, o) => {
  const r = e.resize.getMinNodeSize(t), a = Math.max(n.width, r.width), s = Math.max(n.height, r.height);
  if (!i) return {
    size: {
      width: a,
      height: s
    },
    position: i
  };
  let d = i.x, l = i.y;
  return a !== n.width && i.x > o.x && (d = i.x - (a - n.width)), s !== n.height && i.y > o.y && (l = i.y - (s - n.height)), {
    size: {
      width: a,
      height: s
    },
    position: {
      x: d,
      y: l
    }
  };
};
var applyChildrenBoundsConstraints = (e, t, n, i) => {
  const o = {
    left: t?.x ?? n.x,
    top: t?.y ?? n.y,
    right: (t?.x ?? n.x) + e.width,
    bottom: (t?.y ?? n.y) + e.height
  }, r = {
    left: Math.min(o.left, i.left),
    top: Math.min(o.top, i.top),
    right: Math.max(o.right, i.right),
    bottom: Math.max(o.bottom, i.bottom)
  };
  return {
    size: {
      width: r.right - r.left,
      height: r.bottom - r.top
    },
    position: {
      x: r.left,
      y: r.top
    }
  };
};
var resizeNode = async (e, t) => {
  const n = e.flowCore.getNodeById(t.id);
  n ? n.size || !t.size ? t.size && (isSameSize(n.size, t.size) || isGroup(n) && !n.selected || (isGroup(n) ? await handleGroupNodeResize(e, t, n) : await handleSingleNodeResize(e, t))) : await handleMissingInitialSize(e, t) : console.error(RESIZE_NODE_NOT_FOUND_ERROR(t.id));
};
var handleGroupNodeResize = async (e, t, n) => {
  const i = e.flowCore.modelLookup.getNodeChildren(t.id, {
    directOnly: false
  });
  if (0 === i.length) return void await handleSingleNodeResize(e, t);
  const o = calculateGroupBounds(i, n, {
    useGroupRect: false,
    allowResizeBelowChildrenBounds: e.flowCore.config.resize.allowResizeBelowChildrenBounds
  }), {
    size: r,
    position: a
  } = applyMinimumSizeConstraints(e.flowCore.config, n, t.size, t.position, n.position), {
    size: s,
    position: d
  } = applyChildrenBoundsConstraints(r, a, n.position, o);
  await applySnappingIfNeeded(e, n, d, s, true);
};
var handleSingleNodeResize = async (e, t) => {
  const n = e.flowCore.getNodeById(t.id);
  if (!n) return;
  const {
    size: i,
    position: o
  } = applyMinimumSizeConstraints(e.flowCore.config, n, t.size, t.position, n.position);
  await applySnappingIfNeeded(e, n, o, i, t.disableAutoSize);
};
var handleMissingInitialSize = async (e, t) => {
  e.flowCore.getNodeById(t.id) && await e.emit("updateNode", {
    id: t.id,
    nodeChanges: {
      size: t.size
    }
  });
};
var applySnappingIfNeeded = async (e, t, n, i, o) => {
  if (!e.flowCore.config.snapping.shouldSnapResizeForNode(t)) {
    const r = __spreadValues({
      id: t.id,
      size: i
    }, void 0 !== o && {
      autoSize: !o
    });
    return n && (r.position = n), await e.flowCore.applyUpdate({
      nodesToUpdate: [r]
    }, "resizeNode");
  }
  return await computeAndApplySnapping(e, t, n, i, o);
};
var calculateSnappedDimensions = (e, t, n, i, o) => {
  const r = e.size?.width ?? 0, a = e.size?.height ?? 0, s = n?.width ?? r, d = n?.height ?? a, l = t && e.position.y !== t.y;
  let c = s, g = d;
  return r !== s && (c = i && t && e.position.x !== t.x ? Math.round(e.position.x + r) - i.x : NgDiagramMath.snapNumber(s, o.width)), a !== d && (g = i && l ? Math.max(Math.round(e.position.y + a) - i.y, 0) : NgDiagramMath.snapNumber(d, o.height)), {
    width: c,
    height: g
  };
};
var computeAndApplySnapping = async (e, t, n, i, o) => {
  const {
    computeSnapForNodeSize: r,
    defaultResizeSnap: a
  } = e.flowCore.config.snapping, s = r(t) ?? a, d = n && NgDiagramMath.snapPoint(n, s), {
    width: l,
    height: c
  } = calculateSnappedDimensions(t, n, i, d, s), g = __spreadValues({
    id: t.id,
    size: {
      width: l,
      height: c
    }
  }, void 0 !== o && {
    autoSize: !o
  });
  d && (g.position = d), await e.flowCore.applyUpdate({
    nodesToUpdate: [g]
  }, "resizeNode");
};
var resizeNodeStart = async (e) => {
  await e.flowCore.applyUpdate({}, "resizeNodeStart");
};
var resizeNodeStop = async (e) => {
  await e.flowCore.applyUpdate({}, "resizeNodeStop");
};
var CARDINAL_ANGLES = [0, 90, 180, 270];
var microSnapToCardinal = (e) => {
  const t = NgDiagramMath.normalizeAngle(e);
  for (const e2 of CARDINAL_ANGLES) {
    const n = Math.abs(t - e2);
    if (Math.min(n, 360 - n) <= 2) return e2;
  }
  return t;
};
var rotateNodeTo = async (e, {
  nodeId: t,
  angle: n
}) => {
  const i = e.flowCore.getNodeById(t);
  if (!i) return;
  const o = i.angle ?? 0;
  if (o === n) return;
  const {
    shouldSnapForNode: r,
    computeSnapAngleForNode: a,
    defaultSnapAngle: s
  } = e.flowCore.config.nodeRotation, d = NgDiagramMath.normalizeAngle(n);
  let l = d;
  if (r(i)) {
    const e2 = a(i) ?? s;
    if (l = NgDiagramMath.snapAngle(d, e2), l === o) return;
  } else if (l = microSnapToCardinal(l), l === o) return;
  await e.flowCore.applyUpdate({
    nodesToUpdate: [{
      id: t,
      angle: l
    }]
  }, "rotateNodeTo");
};
var rotateNodeStart = async (e) => {
  await e.flowCore.applyUpdate({}, "rotateNodeStart");
};
var rotateNodeStop = async (e) => {
  await e.flowCore.applyUpdate({}, "rotateNodeStop");
};
var changeSelection = (e, t, n, i = false) => {
  const o = [], r = [], a = new Set(t), s = new Set(n);
  for (const t2 of e.nodesMap.values()) {
    const e2 = a.has(t2.id);
    !!t2.selected === e2 || i && t2.selected || o.push({
      id: t2.id,
      selected: e2
    });
  }
  for (const t2 of e.edgesMap.values()) {
    const e2 = s.has(t2.id);
    !!t2.selected === e2 || i && t2.selected || r.push({
      id: t2.id,
      selected: e2
    });
  }
  return {
    nodesToUpdate: o,
    edgesToUpdate: r
  };
};
var applySelectionUpdate = async (e, {
  nodesToUpdate: t,
  edgesToUpdate: n
}) => {
  0 === t?.length && 0 === n?.length || (e.flowCore.actionStateManager.selection = {
    selectionChanged: true
  }, await e.flowCore.applyUpdate({
    nodesToUpdate: t,
    edgesToUpdate: n
  }, "changeSelection"));
};
var select = async (e, {
  nodeIds: t,
  edgeIds: n,
  multiSelection: i = false
}) => {
  const {
    modelLookup: o
  } = e.flowCore, r = changeSelection(o, t ?? [], n ?? [], i);
  await applySelectionUpdate(e, r);
};
var deselect = async (e, {
  nodeIds: t,
  edgeIds: n
}) => {
  const {
    modelLookup: i
  } = e.flowCore, o = new Set(t), r = new Set(n), a = [];
  for (const e2 of i.nodesMap.values()) !o.has(e2.id) && e2.selected && a.push(e2.id);
  const s = [];
  for (const e2 of i.edgesMap.values()) !r.has(e2.id) && e2.selected && s.push(e2.id);
  const d = changeSelection(i, a, s);
  await applySelectionUpdate(e, d);
};
var deselectAll = async (e) => {
  const {
    modelLookup: t
  } = e.flowCore, n = changeSelection(t, [], []);
  await applySelectionUpdate(e, n);
};
var selectEnd = async (e) => {
  await e.flowCore.applyUpdate({}, "selectEnd");
};
var selectAll = async (e) => {
  const {
    modelLookup: t
  } = e.flowCore, n = Array.from(t.nodesMap.keys()), i = Array.from(t.edgesMap.keys()), o = changeSelection(t, n, i);
  await applySelectionUpdate(e, o);
};
function createGroupChildrenMap(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.values()) null != n.groupId && (t.has(n.groupId) || t.set(n.groupId, []), t.get(n.groupId).push(n));
  return t;
}
function sortChildren(e, t = false) {
  return [...e].sort((e2, n) => {
    if (!t) {
      const t2 = e2.selected ? 1 : 0, i = n.selected ? 1 : 0;
      if (t2 !== i) return t2 - i;
    }
    return (e2.zOrder ?? 0) - (n.zOrder ?? 0);
  });
}
function collectIdsInHierarchyOrder(e, t, n, i = false) {
  const o = [], r = /* @__PURE__ */ new Set();
  function a(e2) {
    if (r.has(e2)) return;
    if (r.add(e2), !t.get(e2)) return;
    o.push(e2);
    const s = n.get(e2);
    if (s) for (const e3 of sortChildren(s, i)) a(e3.id);
  }
  for (const t2 of e) a(t2);
  return o;
}
function assignNodeZIndex(e, t, n, i, o) {
  const r = [], a = /* @__PURE__ */ new Map(), s = o?.skipRoot ? e.id : void 0;
  return traverseNodes(e, t, n, i, (e2, t2, n2) => {
    e2.id !== s && (r.push(__spreadProps(__spreadValues({}, e2), {
      computedZIndex: t2
    })), a.set(e2.id, n2));
  }, false, o?.initialCumulativeElevation ?? 0), {
    nodes: r,
    elevations: a
  };
}
function computeNodeBaseZIndices(e, t, n, i) {
  const o = /* @__PURE__ */ new Map();
  return traverseNodes(e, t, n, i, (e2, t2) => {
    o.set(e2.id, t2);
  }, true), o;
}
function traverseNodes(e, t, n, i, o, r = false, a = 0) {
  const s = !r && i?.elevateOnSelection ? i.selectedZIndex : 0, d = /* @__PURE__ */ new Set();
  !(function e2(n2, i2, a2) {
    if (d.has(n2.id)) return;
    d.add(n2.id);
    const l = null != n2.groupId ? Math.max(n2.zOrder ?? i2, i2) : n2.zOrder ?? i2;
    if (n2.selected && s > 0 && (a2 += s), o(n2, l + a2, a2), isGroup(n2)) {
      let i3 = l;
      for (const o2 of sortChildren(t.get(n2.id) || [], r)) i3 += 1, e2(o2, i3, a2);
    }
  })(e, n, a);
}
function initializeZIndex(e, t, n) {
  const i = Array.from(e.values()).filter((e2) => null == e2.groupId), o = n ?? createGroupChildrenMap(e), r = [], a = /* @__PURE__ */ new Map();
  for (const e2 of i) {
    const n2 = assignNodeZIndex(e2, o, 0, t);
    r.push(...n2.nodes);
    for (const [e3, t2] of n2.elevations) a.set(e3, t2);
  }
  return {
    nodes: r,
    elevations: a
  };
}
function initializeBaseZIndices(e, t, n) {
  const i = Array.from(e.values()).filter((e2) => null == e2.groupId), o = t ?? createGroupChildrenMap(e), r = /* @__PURE__ */ new Map();
  for (const e2 of i) for (const [t2, i2] of computeNodeBaseZIndices(e2, o, 0, n)) r.set(t2, i2);
  return r;
}
function collectDescendantIds(e, t) {
  const n = new Set(e), i = [...e];
  for (; i.length > 0; ) for (const e2 of t.get(i.pop()) ?? []) n.has(e2.id) || (n.add(e2.id), i.push(e2.id));
  return n;
}
function filterToRootTargets(e, t) {
  const n = new Set(e);
  return e.filter((e2) => {
    const i = /* @__PURE__ */ new Set();
    let o = t.get(e2)?.groupId;
    for (; null != o && !i.has(o); ) {
      if (n.has(o)) return false;
      i.add(o), o = t.get(o)?.groupId;
    }
    return true;
  });
}
function collectAncestorIds(e, t) {
  const n = [], i = /* @__PURE__ */ new Set();
  let o = t.get(e);
  for (; null != o?.groupId && !i.has(o.groupId); ) i.add(o.groupId), n.push(o.groupId), o = t.get(o.groupId);
  return n;
}
function computeZOrder(e, t, n, i, o) {
  let r = 0;
  for (const [t2, o2] of e) i.has(t2) || (r = n ? Math.max(r, o2) : Math.min(r, o2));
  for (const e2 of t) {
    if (o.has(e2.id)) continue;
    const t2 = e2.zOrder ?? 0;
    r = n ? Math.max(r, t2) : Math.min(r, t2);
  }
  return n ? r + 1 : r - 1;
}
function getCommandTarget(e, t, n) {
  return n.nodeIds || n.edgeIds ? {
    nodeIds: n.nodeIds ?? [],
    edgeIds: n.edgeIds ?? []
  } : {
    nodeIds: e.filter((e2) => e2.selected).map((e2) => e2.id),
    edgeIds: t.filter((e2) => e2.selected).map((e2) => e2.id)
  };
}
var changeZOrder = async (e, t) => {
  const {
    nodes: n,
    edges: i
  } = e.flowCore.getState(), {
    nodeIds: o,
    edgeIds: r
  } = getCommandTarget(n, i, t);
  if (0 === o.length && 0 === r.length) return;
  const a = new Map(n.map((e2) => [e2.id, e2])), s = createGroupChildrenMap(a), d = initializeBaseZIndices(a, s, e.flowCore.config.zIndex), l = filterToRootTargets(o, a), c = collectDescendantIds(l, s), g = new Set(r), p = "bringToFront" === t.name, h = computeZOrder(d, i, p, c, g), m = [];
  if (p) for (const e2 of l) {
    const t2 = collectIdsInHierarchyOrder([e2], a, s, true);
    let n2 = h;
    for (const e3 of t2) m.push({
      id: e3,
      zOrder: n2
    }), n2 += 1;
  }
  else {
    const e2 = /* @__PURE__ */ new Map();
    for (const t2 of o) {
      m.push({
        id: t2,
        zOrder: h
      });
      const n2 = collectAncestorIds(t2, a);
      let i2 = h;
      for (const t3 of n2) {
        i2 -= 1;
        const n3 = e2.get(t3);
        (null == n3 || i2 < n3) && e2.set(t3, i2);
      }
    }
    for (const [t2, n2] of e2) m.push({
      id: t2,
      zOrder: n2
    });
  }
  await e.flowCore.applyUpdate({
    nodesToUpdate: m,
    edgesToUpdate: r.map((e2) => ({
      id: e2,
      zOrder: h
    }))
  }, "changeZOrder");
};
var bringToFront = async (e, t) => {
  await changeZOrder(e, t);
};
var sendToBack = async (e, t) => {
  await changeZOrder(e, t);
};
var INVALID_ZOOM_SCALE_ERROR = (e) => `[ngDiagram] Invalid zoom scale: ${e}

Scale must be a positive finite number.

Documentation: https://www.ngdiagram.dev/docs/intro/coordinate-system/#viewport-and-scaling`;
var zoom = async (e, {
  x: t,
  y: n,
  scale: i
}) => {
  const {
    metadata: o
  } = e.flowCore.getState();
  if (i <= 0 || !isFinite(i) || isNaN(i)) return void console.error(INVALID_ZOOM_SCALE_ERROR(i));
  const {
    min: r,
    max: a
  } = e.flowCore.config.zoom;
  i < r || i > a ? console.warn(`Zoom scale ${i} is out of bounds [${r}, ${a}]`) : t === o.viewport.x && n === o.viewport.y && i === o.viewport.scale || await e.flowCore.applyUpdate({
    metadataUpdate: {
      viewport: __spreadProps(__spreadValues({}, o.viewport), {
        x: t,
        y: n,
        scale: i
      })
    }
  }, "zoom");
};
var INVALID_ZOOM_TO_FIT_SCALE_ERROR = (e) => `[ngDiagram] Invalid scale calculated in zoom-to-fit: ${e}

Scale must be a positive finite number.

Documentation: https://www.ngdiagram.dev/docs/intro/coordinate-system/#viewport-and-scaling`;
var VIRTUALIZATION_WARNING = "[ngDiagram] zoomToFit is disabled when virtualization is enabled.\n\nWhen virtualization is active, only visible nodes and edges are rendered for performance reasons.\nZoom to fit requires all elements to be available for calculating bounds, which conflicts with virtualization.\n\nTo use zoomToFit, disable virtualization in your config:\n  virtualization: { enabled: false }";
var normalizePadding = (e, t) => {
  if ("number" == typeof e) return {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
  switch (e.length) {
    case 2:
      return {
        top: e[0],
        right: e[1],
        bottom: e[0],
        left: e[1]
      };
    case 3:
      return {
        top: e[0],
        right: e[1],
        bottom: e[2],
        left: e[1]
      };
    case 4:
      return {
        top: e[0],
        right: e[1],
        bottom: e[2],
        left: e[3]
      };
    default:
      return {
        top: t,
        right: t,
        bottom: t,
        left: t
      };
  }
};
var filterTargetElements = (e, t, n, i) => ({
  targetNodes: n?.length ? e.filter((e2) => n.includes(e2.id)) : e,
  targetEdges: i?.length ? t.filter((e2) => i.includes(e2.id)) : t
});
var calculateOptimalScale = (e, t, n, i, o, r) => {
  const a = Math.min(n / e, i / t);
  return Math.max(o, Math.min(r, a));
};
var calculateViewportPosition = (e, t, n, i) => ({
  x: t.width / 2 - (e.x + e.width / 2) * i + (n.left - n.right) / 2,
  y: t.height / 2 - (e.y + e.height / 2) * i + (n.top - n.bottom) / 2
});
var isValidViewport = (e) => !!e.width && !!e.height && e.width > 0 && e.height > 0;
var zoomToFit = async (e, {
  nodeIds: t,
  edgeIds: n,
  padding: i
}) => {
  if (e.flowCore.isVirtualizationActive) return void console.warn(VIRTUALIZATION_WARNING);
  const {
    nodes: o,
    edges: r,
    metadata: a
  } = e.flowCore.getState(), {
    viewport: s
  } = a;
  if (!isValidViewport(s)) return;
  const d = s.width, l = s.height, c = e.flowCore.config.zoom.zoomToFit.padding, g = i ?? c, {
    targetNodes: p,
    targetEdges: h
  } = filterTargetElements(o, r, t, n), m = calculatePartsBounds(p, h);
  if (!m) return;
  const u = Array.isArray(c) ? c[0] : c, v = normalizePadding(g, u), f = d - v.left - v.right, y = l - v.top - v.bottom;
  if (f <= 0 || y <= 0) return;
  const {
    min: w,
    max: C
  } = e.flowCore.config.zoom, S = calculateOptimalScale(m.width, m.height, f, y, w, C);
  if (S <= 0 || !isFinite(S) || isNaN(S)) return void console.error(INVALID_ZOOM_TO_FIT_SCALE_ERROR(S));
  const {
    x: D,
    y: b
  } = calculateViewportPosition(m, {
    width: d,
    height: l
  }, v, S);
  s.x === D && s.y === b && s.scale === S || await e.flowCore.applyUpdate({
    metadataUpdate: {
      viewport: __spreadProps(__spreadValues({}, s), {
        x: D,
        y: b,
        scale: S
      })
    }
  }, "zoomToFit");
};
var commands = {
  init,
  select,
  selectAll,
  selectEnd,
  deselect,
  deselectAll,
  moveNodesBy,
  moveNodesStart,
  moveNodesStop,
  deleteSelection,
  addNodes,
  updateNode,
  updateNodes,
  deleteNodes,
  clearModel,
  addEdges,
  updateEdge,
  updateEdges,
  deleteEdges,
  copy,
  cut,
  paste,
  moveViewport,
  moveViewportBy,
  startLinking,
  moveTemporaryEdge,
  finishLinking,
  finishLinkingToPosition,
  startLinkingFromPosition,
  resizeNode,
  resizeNodeStart,
  resizeNodeStop,
  zoom,
  addPortsBulk,
  updatePortsBulk,
  deletePortsBulk,
  bringToFront,
  sendToBack,
  addEdgeLabelsBulk,
  updateEdgeLabelsBulk,
  deleteEdgeLabelsBulk,
  rotateNodeTo,
  rotateNodeStart,
  rotateNodeStop,
  highlightGroup,
  highlightGroupClear,
  addToGroup,
  removeFromGroup,
  paletteDropNode,
  centerOnNode,
  centerOnRect,
  zoomToFit
};
var CommandHandler = class {
  callbacks = {};
  flowCore;
  constructor(e) {
    this.flowCore = e, Object.entries(commands).forEach(([e2, t]) => {
      this.register(e2, (e3) => {
        t(this, e3);
      });
    });
  }
  async emit(e, ...t) {
    return await this.emitInternal(e, false, ...t);
  }
  async emitInternal(e, t, ...n) {
    if (!t && this.flowCore.transactionManager.isActive()) {
      const t2 = this.flowCore.transactionManager.getCurrentTransaction();
      if (t2 && !t2.isAborted()) return t2.context.emit(e, ...n);
    }
    const i = this.callbacks[e];
    if (i) {
      const t2 = __spreadValues({
        name: e
      }, n[0]);
      await Promise.all(i.map((e2) => e2(t2)));
    }
  }
  register(e, t) {
    return this.getCommandCallbacks(e).push(t), () => {
      const n = this.getCommandCallbacks(e).filter((e2) => e2 !== t);
      this.callbacks[e] = n;
    };
  }
  getCommandCallbacks(e) {
    return this.callbacks[e] ||= [];
  }
};
var DEFAULT_SHORTCUTS = [{
  actionName: "copy",
  bindings: [{
    key: "c",
    modifiers: {
      primary: true
    }
  }]
}, {
  actionName: "cut",
  bindings: [{
    key: "x",
    modifiers: {
      primary: true
    }
  }]
}, {
  actionName: "paste",
  bindings: [{
    key: "v",
    modifiers: {
      primary: true
    }
  }]
}, {
  actionName: "deleteSelection",
  bindings: [{
    key: "Delete"
  }, {
    key: "Backspace"
  }]
}, {
  actionName: "keyboardMoveSelectionUp",
  bindings: [{
    key: "ArrowUp"
  }]
}, {
  actionName: "keyboardMoveSelectionDown",
  bindings: [{
    key: "ArrowDown"
  }]
}, {
  actionName: "keyboardMoveSelectionLeft",
  bindings: [{
    key: "ArrowLeft"
  }]
}, {
  actionName: "keyboardMoveSelectionRight",
  bindings: [{
    key: "ArrowRight"
  }]
}, {
  actionName: "keyboardPanUp",
  bindings: [{
    key: "ArrowUp"
  }]
}, {
  actionName: "keyboardPanDown",
  bindings: [{
    key: "ArrowDown"
  }]
}, {
  actionName: "keyboardPanLeft",
  bindings: [{
    key: "ArrowLeft"
  }]
}, {
  actionName: "keyboardPanRight",
  bindings: [{
    key: "ArrowRight"
  }]
}, {
  actionName: "boxSelection",
  bindings: [{
    modifiers: {
      shift: true
    }
  }]
}, {
  actionName: "multiSelection",
  bindings: [{
    modifiers: {
      primary: true
    }
  }]
}, {
  actionName: "selectAll",
  bindings: [{
    key: "a",
    modifiers: {
      primary: true
    }
  }]
}, {
  actionName: "undo",
  bindings: [{
    key: "z",
    modifiers: {
      primary: true
    }
  }]
}, {
  actionName: "redo",
  bindings: [{
    key: "y",
    modifiers: {
      primary: true
    }
  }]
}, {
  actionName: "zoom",
  bindings: [{
    modifiers: {
      primary: true
    }
  }]
}, {
  actionName: "keyboardZoomIn",
  bindings: [{
    key: "="
  }]
}, {
  actionName: "keyboardZoomOut",
  bindings: [{
    key: "-"
  }]
}];
function configureShortcuts(e, t = DEFAULT_SHORTCUTS) {
  const n = /* @__PURE__ */ new Map();
  for (const e2 of t) n.set(e2.actionName, e2);
  for (const t2 of e) n.set(t2.actionName, t2);
  return Array.from(n.values());
}
var ShortcutManager = class {
  flowCore;
  constructor(e) {
    this.flowCore = e;
  }
  match(e) {
    const {
      shortcuts: t
    } = this.flowCore.config, n = [];
    for (const i of t) for (const t2 of i.bindings) if (this.matchBinding(e, t2)) {
      n.push(i);
      break;
    }
    return n;
  }
  matchesAction(e, t) {
    const {
      shortcuts: n
    } = this.flowCore.config, i = n.find((t2) => t2.actionName === e);
    return !!i && i.bindings.some((e2) => this.matchBinding(t, e2));
  }
  matchBinding(e, t) {
    return !(void 0 !== t.key && !this.keysMatch(e.key, t.key)) && (void 0 !== t.key || void 0 === e.key) && this.matchModifiers(e.modifiers, t);
  }
  matchModifiers(e, t) {
    return e.primary === (t.modifiers?.primary ?? false) && e.shift === (t.modifiers?.shift ?? false) && e.secondary === (t.modifiers?.secondary ?? false) && (void 0 === t.modifiers?.meta || e.meta === t.modifiers.meta);
  }
  keysMatch(e, t) {
    return void 0 !== e && (1 === e.length && 1 === t.length ? e.toLowerCase() === t.toLowerCase() : e === t);
  }
};
var DEFAULT_NODE_MIN_SIZE = {
  width: 20,
  height: 20
};
var defaultResizeConfig = {
  getMinNodeSize: () => __spreadValues({}, DEFAULT_NODE_MIN_SIZE),
  allowResizeBelowChildrenBounds: true,
  defaultResizable: true
};
var defaultLinkingConfig = {
  portSnapDistance: 10,
  edgePanningEnabled: true,
  edgePanningForce: 10,
  edgePanningThreshold: 30,
  selectNodeOnPortPress: true,
  validateConnection: () => true,
  temporaryEdgeDataBuilder: (e) => __spreadValues({}, e),
  finalEdgeDataBuilder: (e) => __spreadValues({}, e)
};
var defaultGroupingConfig = {
  canGroup: () => true
};
var defaultZoomToFitConfig = {
  padding: 50,
  onInit: false
};
var defaultZoomConfig = {
  min: 0.01,
  max: 10,
  step: 0.03,
  zoomToFit: defaultZoomToFitConfig
};
var defaultBackgroundConfig = {
  dotSpacing: 30,
  cellSize: {
    width: 10,
    height: 10
  },
  majorLinesFrequency: {
    x: 5,
    y: 5
  }
};
var defaultNodeRotationConfig = {
  shouldSnapForNode: () => false,
  computeSnapAngleForNode: () => null,
  defaultSnapAngle: 30,
  defaultRotatable: true
};
var defaultNodeSnappingConfig = {
  shouldSnapDragForNode: () => false,
  shouldSnapResizeForNode: () => false,
  computeSnapForNodeDrag: () => null,
  computeSnapForNodeSize: () => null,
  defaultDragSnap: {
    width: 10,
    height: 10
  },
  defaultResizeSnap: {
    width: 10,
    height: 10
  }
};
var defaultSelectionMovingConfig = {
  edgePanningForce: 10,
  edgePanningThreshold: 30,
  edgePanningEnabled: true
};
var defaultZIndexConfig = {
  enabled: true,
  selectedZIndex: 1e4,
  temporaryEdgeZIndex: 2147483647,
  edgesAboveConnectedNodes: false,
  elevateOnSelection: true
};
var defaultEdgeRoutingConfig = {
  defaultRouting: "orthogonal",
  bezier: {
    bezierControlOffset: 100
  },
  orthogonal: {
    maxCornerRadius: 15,
    firstLastSegmentLength: 20
  }
};
var defaultBoxSelectionConfig = {
  partialInclusion: true,
  realtime: true
};
var defaultVirtualizationConfig = {
  enabled: false,
  padding: 0.5,
  idleDelay: 100
};
var createFlowConfig = (e, t) => deepMerge({
  computeNodeId: () => t.environment.generateId(),
  computeEdgeId: () => t.environment.generateId(),
  resize: defaultResizeConfig,
  linking: defaultLinkingConfig,
  grouping: defaultGroupingConfig,
  zoom: defaultZoomConfig,
  background: defaultBackgroundConfig,
  nodeRotation: defaultNodeRotationConfig,
  snapping: defaultNodeSnappingConfig,
  selectionMoving: defaultSelectionMovingConfig,
  edgeRouting: defaultEdgeRoutingConfig,
  zIndex: defaultZIndexConfig,
  boxSelection: defaultBoxSelectionConfig,
  virtualization: defaultVirtualizationConfig,
  shortcuts: DEFAULT_SHORTCUTS,
  debugMode: false,
  viewportPanningEnabled: true,
  nodeDraggingEnabled: true
}, e);
var BatchProcessor = class {
  getMeasuredIds;
  pendingAdds = /* @__PURE__ */ new Map();
  pendingUpdates = /* @__PURE__ */ new Map();
  pendingDeletes = /* @__PURE__ */ new Map();
  flushScheduled = false;
  constructor(e) {
    this.getMeasuredIds = e;
  }
  processAdd(e, t, n) {
    this.getOrCreate(this.pendingAdds, e, n).items.push(t), this.scheduleFlush();
  }
  processUpdate(e, t, n) {
    this.getOrCreate(this.pendingUpdates, e, n).items.push(t), this.scheduleFlush();
  }
  processDelete(e, t, n) {
    this.getOrCreate(this.pendingDeletes, e, n).items.push(t), this.scheduleFlush();
  }
  scheduleFlush() {
    this.flushScheduled || (this.flushScheduled = true, queueMicrotask(() => {
      this.flush();
    }));
  }
  async flush() {
    this.cancelMatchingIntents(), this.filterAlreadyMeasuredAdds();
    const e = this.takeAll(this.pendingAdds), t = this.takeAll(this.pendingUpdates), n = this.takeAll(this.pendingDeletes);
    this.flushScheduled = false, await this.invokeCallbacks(e), await this.invokeCallbacks(t), await this.invokeCallbacks(n);
  }
  async invokeCallbacks(e) {
    if (0 === e.size) return;
    const t = /* @__PURE__ */ new Map();
    for (const [n, {
      items: i,
      onFlush: o
    }] of e) {
      let e2 = t.get(o);
      e2 || (e2 = /* @__PURE__ */ new Map(), t.set(o, e2)), e2.set(n, i);
    }
    for (const [e2, n] of t) await e2(n);
  }
  cancelMatchingIntents() {
    for (const [e, t] of this.pendingDeletes) {
      const n = this.pendingAdds.get(e);
      if (!n) continue;
      const i = new Set(t.items), o = n.items.filter((e2) => !i.has(e2.id) || (i.delete(e2.id), false));
      o.length !== n.items.length && (0 === o.length ? this.pendingAdds.delete(e) : n.items = o, 0 === i.size ? this.pendingDeletes.delete(e) : t.items = [...i]);
    }
  }
  filterAlreadyMeasuredAdds() {
    if (this.getMeasuredIds) for (const [e, t] of this.pendingAdds) {
      const n = this.getMeasuredIds(e);
      if (0 === n.size) continue;
      const i = t.items.filter((e2) => !n.has(e2.id));
      i.length !== t.items.length && (0 === i.length ? this.pendingAdds.delete(e) : t.items = i);
    }
  }
  getOrCreate(e, t, n) {
    let i = e.get(t);
    return i || (i = {
      items: [],
      onFlush: n
    }, e.set(t, i)), i;
  }
  takeAll(e) {
    const t = new Map(e);
    return e.clear(), t;
  }
};
var LabelBatchProcessor = class extends BatchProcessor {
  constructor(e) {
    super((t) => {
      const n = e(t)?.measuredLabels ?? [], i = /* @__PURE__ */ new Set();
      for (const e2 of n) isValidSize(e2.size) && i.add(e2.id);
      return i;
    });
  }
};
var MeasurementTracker = class {
  phase = "idle";
  participantIds = /* @__PURE__ */ new Set();
  pendingConfig = null;
  discoveryWindow = {
    timeoutId: null,
    expiresAt: 0,
    durationMs: 70
  };
  debounce = {
    timeoutId: null,
    expiresAt: 0,
    durationMs: 50
  };
  settlementPromise = null;
  settlementResolve = null;
  requestTracking(e) {
    this.pendingConfig = e ?? {};
  }
  isTrackingRequested() {
    return null !== this.pendingConfig;
  }
  registerParticipants(e) {
    const t = this.pendingConfig;
    if (this.pendingConfig = null, 0 !== e.length) {
      t && (this.discoveryWindow.durationMs = t.discoveryWindowMs ?? 70, this.debounce.durationMs = t.debounceMs ?? 50);
      for (const t2 of e) this.participantIds.add(t2);
      this.phase = "discoveryWindow", this.startTimer(this.discoveryWindow);
    }
  }
  signalObserverActivity(e) {
    if ("idle" === this.phase) return;
    if (!this.participantIds.has(e)) return;
    const t = this.activeTimer();
    this.remainingTime(t) < 40 && this.startTimer(t);
  }
  signalMeasurement(e) {
    "idle" !== this.phase && this.participantIds.has(e) && ("discoveryWindow" === this.phase && this.clearTimer(this.discoveryWindow), this.phase = "debounce", this.startTimer(this.debounce));
  }
  waitForMeasurements() {
    return this.hasPendingMeasurements() ? (this.settlementPromise || (this.settlementPromise = new Promise((e) => {
      this.settlementResolve = e;
    })), this.settlementPromise) : Promise.resolve();
  }
  hasPendingMeasurements() {
    return "idle" !== this.phase;
  }
  activeTimer() {
    return "discoveryWindow" === this.phase ? this.discoveryWindow : this.debounce;
  }
  remainingTime(e) {
    return e.expiresAt - Date.now();
  }
  startTimer(e) {
    this.clearTimer(e), e.expiresAt = Date.now() + e.durationMs, e.timeoutId = setTimeout(() => {
      this.resolve();
    }, e.durationMs);
  }
  clearTimer(e) {
    e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = null);
  }
  resolve() {
    this.phase = "idle", this.participantIds.clear(), this.clearTimer(this.discoveryWindow), this.clearTimer(this.debounce), this.settlementResolve && (this.settlementResolve(), this.settlementResolve = null, this.settlementPromise = null);
  }
};
var MiddlewareExecutor = class {
  flowCore;
  middlewareChain;
  history = [];
  initialState;
  initialStateUpdate;
  modelActionTypes;
  metadata;
  edgesMap = /* @__PURE__ */ new Map();
  nodesMap = /* @__PURE__ */ new Map();
  initialNodesMap = /* @__PURE__ */ new Map();
  initialEdgesMap = /* @__PURE__ */ new Map();
  initialConnectedEdgesMap = /* @__PURE__ */ new Map();
  addedNodesIds = /* @__PURE__ */ new Set();
  removedNodesIds = /* @__PURE__ */ new Set();
  addedEdgesIds = /* @__PURE__ */ new Set();
  removedEdgesIds = /* @__PURE__ */ new Set();
  updatedPropsToNodeIds = /* @__PURE__ */ new Map();
  updatedPropsToEdgeIds = /* @__PURE__ */ new Map();
  updatedNodeIdsToProps = /* @__PURE__ */ new Map();
  updatedEdgeIdsToProps = /* @__PURE__ */ new Map();
  constructor(e, t) {
    this.flowCore = e, this.middlewareChain = t;
  }
  async run(e, t, n) {
    return this.initialState = e, this.modelActionTypes = n, this.metadata = e.metadata, this.isMetadataOnlyUpdate(t) ? (this.nodesMap = this.flowCore.modelLookup.nodesMap, this.edgesMap = this.flowCore.modelLookup.edgesMap, this.initialNodesMap = this.nodesMap, this.initialEdgesMap = this.edgesMap) : (this.nodesMap = new Map(this.flowCore.modelLookup.nodesMap), this.edgesMap = new Map(this.flowCore.modelLookup.edgesMap), this.initialNodesMap = new Map(this.flowCore.modelLookup.nodesMap), this.initialEdgesMap = new Map(this.flowCore.modelLookup.edgesMap)), this.initialConnectedEdgesMap = this.flowCore.modelLookup.connectedEdgesMap, this.initialStateUpdate = t, this.applyStateUpdate(t), await this.resolveMiddlewares();
  }
  isMetadataOnlyUpdate(e) {
    return !(e.nodesToAdd?.length || e.nodesToUpdate?.length || e.nodesToRemove?.length || e.edgesToAdd?.length || e.edgesToUpdate?.length || e.edgesToRemove?.length || !e.metadataUpdate);
  }
  helpers = () => ({
    checkIfNodeChanged: (e) => this.updatedNodeIdsToProps.has(e),
    checkIfEdgeChanged: (e) => this.updatedEdgeIdsToProps.has(e),
    checkIfNodeAdded: (e) => this.addedNodesIds.has(e),
    checkIfNodeRemoved: (e) => this.removedNodesIds.has(e),
    checkIfEdgeAdded: (e) => this.addedEdgesIds.has(e),
    checkIfEdgeRemoved: (e) => this.removedEdgesIds.has(e),
    checkIfAnyNodePropsChanged: (e) => e.some((e2) => this.updatedPropsToNodeIds.has(e2)),
    checkIfAnyEdgePropsChanged: (e) => e.some((e2) => this.updatedPropsToEdgeIds.has(e2)),
    anyNodesAdded: () => this.addedNodesIds.size > 0,
    anyEdgesAdded: () => this.addedEdgesIds.size > 0,
    anyNodesRemoved: () => this.removedNodesIds.size > 0,
    anyEdgesRemoved: () => this.removedEdgesIds.size > 0,
    getAffectedNodeIds: (e) => e.flatMap((e2) => [...this.updatedPropsToNodeIds.get(e2) ?? []]),
    getAffectedEdgeIds: (e) => e.flatMap((e2) => [...this.updatedPropsToEdgeIds.get(e2) ?? []]),
    getChangedNodeIds: () => [...this.updatedNodeIdsToProps.keys()],
    getChangedEdgeIds: () => [...this.updatedEdgeIdsToProps.keys()],
    getAddedNodes: () => Array.from(this.addedNodesIds).map((e) => this.nodesMap.get(e)).filter((e) => void 0 !== e),
    getAddedEdges: () => Array.from(this.addedEdgesIds).map((e) => this.edgesMap.get(e)).filter((e) => void 0 !== e),
    getRemovedNodes: () => Array.from(this.removedNodesIds).map((e) => this.initialNodesMap.get(e)).filter((e) => void 0 !== e),
    getRemovedEdges: () => Array.from(this.removedEdgesIds).map((e) => this.initialEdgesMap.get(e)).filter((e) => void 0 !== e)
  });
  getState = () => ({
    nodes: Array.from(this.nodesMap.values()),
    edges: Array.from(this.edgesMap.values()),
    metadata: this.metadata
  });
  getContext = () => ({
    state: this.getState(),
    nodesMap: this.nodesMap,
    edgesMap: this.edgesMap,
    initialNodesMap: this.initialNodesMap,
    initialEdgesMap: this.initialEdgesMap,
    initialConnectedEdgesMap: this.initialConnectedEdgesMap,
    initialState: this.initialState,
    modelActionType: this.modelActionTypes[0],
    modelActionTypes: this.modelActionTypes,
    actionStateManager: this.flowCore.actionStateManager,
    edgeRoutingManager: this.flowCore.edgeRoutingManager,
    helpers: this.helpers(),
    history: this.history,
    initialUpdate: this.initialStateUpdate,
    config: this.flowCore.config,
    environment: this.flowCore.environment
  });
  resolveMiddlewares = () => new Promise((e) => {
    const t = [], n = /* @__PURE__ */ new Set(), i = (o) => new Promise((r) => {
      const a = this.middlewareChain[o];
      if (!a) {
        const n2 = this.getState();
        for (e(n2); t.length > 0; ) t.pop()?.(n2);
        return;
      }
      const s = a.name;
      if (n.has(o)) throw new Error(`Middleware ${s} executed next() multiple times`);
      n.add(o), t.push(r);
      const d = this.getContext();
      a.execute(d, async (e2) => (e2 && Object.keys(e2).length > 0 && this.applyStateUpdate(e2, s), await i(o + 1)), () => {
        for (; t.length > 0; ) t.pop()?.(this.initialState);
        e(void 0);
      });
    });
    i(0);
  });
  applyStateUpdate = (e, t) => {
    t && this.history.push({
      name: t,
      stateUpdate: e
    }), e.nodesToAdd?.forEach((e2) => this.addNode(e2)), e.edgesToAdd?.forEach((e2) => this.addEdge(e2)), e.edgesToRemove?.forEach((e2) => this.removeEdge(e2)), e.nodesToRemove?.forEach((e2) => this.removeNode(e2)), e.nodesToUpdate?.forEach((e2) => this.updateNode(e2)), e.edgesToUpdate?.forEach((e2) => this.updateEdge(e2)), e.metadataUpdate && (this.metadata = __spreadValues(__spreadValues({}, this.metadata), e.metadataUpdate));
  };
  removeNode = (e) => {
    this.nodesMap.delete(e), this.removedNodesIds.add(e), this.addedNodesIds.delete(e);
  };
  removeEdge = (e) => {
    this.edgesMap.delete(e), this.removedEdgesIds.add(e), this.addedEdgesIds.delete(e);
  };
  addEdge = (e) => {
    this.edgesMap.set(e.id, e), this.addedEdgesIds.add(e.id), this.removedEdgesIds.delete(e.id);
  };
  addNode = (e) => {
    this.nodesMap.set(e.id, e), this.addedNodesIds.add(e.id), this.removedNodesIds.delete(e.id);
  };
  updateNode = (_a) => {
    var _b = _a, {
      id: e
    } = _b, t = __objRest(_b, [
      "id"
    ]);
    const n = {}, i = this.nodesMap.get(e);
    i && (Object.entries(t).forEach(([t2, o]) => {
      "position" === t2 ? isSamePoint(i.position, o) || (n.position = o, this.updateNodeProp(e, "position")) : "size" === t2 ? isSameSize(i.size, o) || (n.size = o, this.updateNodeProp(e, "size")) : i[t2] !== o && (n[t2] = o, this.updateNodeProp(e, t2));
    }), Object.keys(n).length > 0 && this.nodesMap.set(e, __spreadValues(__spreadValues({}, i), n)));
  };
  updateNodeProp = (e, t) => {
    this.updatedPropsToNodeIds.has(t) || this.updatedPropsToNodeIds.set(t, /* @__PURE__ */ new Set([])), this.updatedPropsToNodeIds.get(t).add(e), this.updatedNodeIdsToProps.has(e) || this.updatedNodeIdsToProps.set(e, /* @__PURE__ */ new Set([])), this.updatedNodeIdsToProps.get(e).add(t);
  };
  updateEdge = (_c) => {
    var _d = _c, {
      id: e
    } = _d, t = __objRest(_d, [
      "id"
    ]);
    const n = {}, i = this.edgesMap.get(e);
    i && (Object.entries(t).forEach(([t2, o]) => {
      "targetPosition" === t2 ? isSamePoint(i.targetPosition, o) || (n.targetPosition = o, this.updateEdgeProp(e, "targetPosition")) : "sourcePosition" === t2 ? isSamePoint(i.sourcePosition, o) || (n.sourcePosition = o, this.updateEdgeProp(e, "sourcePosition")) : i[t2] !== o && (n[t2] = o, this.updateEdgeProp(e, t2));
    }), Object.keys(n).length > 0 && this.edgesMap.set(e, __spreadValues(__spreadValues({}, i), n)));
  };
  updateEdgeProp = (e, t) => {
    this.updatedPropsToEdgeIds.has(t) || this.updatedPropsToEdgeIds.set(t, /* @__PURE__ */ new Set([])), this.updatedPropsToEdgeIds.get(t).add(e), this.updatedEdgeIdsToProps.has(e) || this.updatedEdgeIdsToProps.set(e, /* @__PURE__ */ new Set([])), this.updatedEdgeIdsToProps.get(e).add(t);
  };
};
var getTemporaryEdgeSides = (e, t) => {
  if (!e.target && e.targetPosition) {
    const n = t.get(e.source);
    return {
      targetSide: computeFloatingEndSide(n, e.sourcePort, e.targetPosition)
    };
  }
  if (!e.source && e.sourcePosition && e.targetPosition) {
    const n = t.get(e.target);
    return {
      sourceSide: computeFloatingEndSide(n, e.targetPort, e.sourcePosition)
    };
  }
  return {};
};
var getSourceTargetPositions = (e, t) => {
  const n = e.temporary ? getTemporaryEdgeSides(e, t) : {}, i = n.sourceSide ?? "right", o = n.targetSide ?? "left", r = t.get(e.source), a = t.get(e.target), s = getPreliminaryPosition(r, e.sourcePort, e.sourcePosition), d = getPreliminaryPosition(a, e.targetPort, e.targetPosition), l = getPosition(t, e.source, i, e.sourcePort, e.sourcePosition, d), c = getPosition(t, e.target, o, e.targetPort, e.targetPosition, s);
  return {
    source: isValidPortLocation(l) ? l : void 0,
    target: isValidPortLocation(c) ? c : void 0
  };
};
var isValidPortLocation = (e) => !!e && void 0 !== e.x && void 0 !== e.y && !!e.side;
var getPreliminaryPosition = (e, t, n) => {
  if (!e) return n || {
    x: 0,
    y: 0
  };
  if (t) {
    const n2 = getPortFlowPositionSide(e, t);
    if (n2) return {
      x: n2.x,
      y: n2.y
    };
  }
  return {
    x: e.position.x + (e.size?.width || 0) / 2,
    y: e.position.y + (e.size?.height || 0) / 2
  };
};
var getPoint = (e, t, n, i, o) => e ? n ? getPortFlowPositionSide(e, n) || __spreadProps(__spreadValues({}, i), {
  side: t
}) : getNodeBorderIntersection(e, o || i || {
  x: 0,
  y: 0
}) : __spreadProps(__spreadValues({}, i), {
  side: t
});
var getPosition = (e, t, n, i, o, r) => {
  const a = e.get(t);
  return a ? getPoint(a, n, i, o, r) : __spreadProps(__spreadValues({}, o), {
    side: n
  });
};
var INVALID_EDGE_COORDINATES_WARNING = (e, t, n, i, o) => `[ngDiagram] Invalid edge coordinates detected for edge '${e}'.

Edge details:
  • source: ${t} (port: ${n || "not specified"})
  • target: ${i} (port: ${o || "not specified"})

Documentation: https://www.ngdiagram.dev/docs/guides/edges/edges/
`;
var ROUTING_NOT_REGISTERED_WARNING = (e) => `[ngDiagram] Edge routing '${e}' is not registered. Falling back to default routing.

Documentation: https://www.ngdiagram.dev/docs/guides/edges/routing/
`;
var areEdgePortsInitialized = (e, t, n) => {
  if (e.sourcePort) {
    const n2 = t?.measuredPorts;
    if (!n2) return false;
    const i = n2.find((t2) => t2.id === e.sourcePort);
    if (!i || !i.position || !i.size) return false;
  }
  if (e.targetPort) {
    const t2 = n?.measuredPorts;
    if (!t2) return false;
    const i = t2.find((t3) => t3.id === e.targetPort);
    if (!i || !i.position || !i.size) return false;
  }
  return true;
};
var shouldSkipPortInitCheck = (e) => "manual" === e.routingMode && !!e.points && e.points.length > 0;
var portLocationToPoint = (e) => void 0 !== e?.x && void 0 !== e?.y ? {
  x: e.x,
  y: e.y
} : void 0;
var findNodePort = (e, t) => e && t ? e.measuredPorts?.find((e2) => e2.id === t) : void 0;
var computeAutoModePoints = (e, t, n, i, o, r) => {
  const a = {
    sourcePoint: t,
    targetPoint: n,
    edge: e,
    sourceNode: i,
    targetNode: o,
    sourcePort: findNodePort(i, e.sourcePort),
    targetPort: findNodePort(o, e.targetPort)
  };
  if (e.routing && r.hasRouting(e.routing)) return r.computePoints(e.routing, a);
  e.routing && !r.hasRouting(e.routing) && console.warn(ROUTING_NOT_REGISTERED_WARNING(e.routing));
  const s = r.getDefaultRouting();
  return r.hasRouting(s) ? r.computePoints(s, a) : [portLocationToPoint(t), portLocationToPoint(n)].filter((e2) => !!e2);
};
var getEdgePoints = (e, t, n) => {
  const i = t.get(e.source), o = t.get(e.target);
  if (!shouldSkipPortInitCheck(e) && !areEdgePortsInitialized(e, i, o)) return {
    sourcePoint: void 0,
    targetPoint: void 0,
    points: []
  };
  const {
    source: r,
    target: a
  } = getSourceTargetPositions(e, t), s = portLocationToPoint(r), d = portLocationToPoint(a);
  return r && a && isValidPosition(s) && isValidPosition(d) ? {
    sourcePoint: s,
    targetPoint: d,
    points: "manual" === e.routingMode && e.points && e.points.length > 0 ? e.points : computeAutoModePoints(e, r, a, i, o, n)
  } : (console.error(INVALID_EDGE_COORDINATES_WARNING(e.id, e.source, e.sourcePort, e.target, e.targetPort)), {
    sourcePoint: void 0,
    targetPoint: void 0,
    points: []
  });
};
var checkIfShouldRouteEdges = ({
  helpers: e,
  modelActionTypes: t,
  actionStateManager: n
}) => !t.includes("zoom") && (!t.includes("resizeNode") || !n.isResizing()) && (t.includes("init") || e.anyEdgesAdded() || e.checkIfAnyNodePropsChanged(["position", "size", "angle", "measuredPorts"]) || e.checkIfAnyEdgePropsChanged(["targetPosition", "sourcePosition", "points", "sourcePort", "targetPort", "source", "target", "routing", "routingMode", "measuredLabels"]));
var shouldRouteEdge = (e, t, n) => t.checkIfEdgeAdded(e.id) || t.checkIfEdgeChanged(e.id) || t.checkIfNodeChanged(e.source) || t.checkIfNodeChanged(e.target) || n.includes("init");
var havePointsChanged = (e, t) => !e || e.length !== t.length || !e.every((e2, n) => isSamePoint(e2, t[n]));
var updateLabelPositions = (e, t, n) => t.length < 2 ? e.measuredLabels : e.measuredLabels?.map((i) => __spreadProps(__spreadValues({}, i), {
  position: resolveLabelPosition(i.positionOnEdge, e.routing, t, n)
}));
var processManualModeEdge = (e, t, n, i, o) => {
  const r = updateLabelPositions(e, i, o);
  return r?.length || t || n ? {
    id: e.id,
    sourcePosition: t,
    targetPosition: n,
    measuredLabels: r
  } : null;
};
var processAutoModeEdge = (e, t, n, i, o) => {
  const r = havePointsChanged(e.points, i), a = e.measuredLabels?.some((e2) => !isValidPosition(e2.position));
  if (!r && !a) return null;
  const s = updateLabelPositions(e, i, o);
  return __spreadProps(__spreadValues({
    id: e.id
  }, r ? {
    points: i
  } : {}), {
    sourcePosition: t,
    targetPosition: n,
    measuredLabels: s
  });
};
var processEdgesForRouting = (e, t, n, i, o) => {
  const r = [];
  return e.forEach((e2) => {
    if (!shouldRouteEdge(e2, i, o)) return;
    const {
      sourcePoint: a,
      targetPoint: s,
      points: d
    } = getEdgePoints(e2, t, n);
    if (!d || 0 === d.length) return;
    const l = "manual" === e2.routingMode ? processManualModeEdge(e2, a, s, d, n) : processAutoModeEdge(e2, a, s, d, n);
    l && r.push(l);
  }), r;
};
var createUpdatedTemporaryEdge = (e, t, n, i) => {
  const {
    sourcePoint: o,
    targetPoint: r,
    points: a
  } = getEdgePoints(e, t, n);
  return __spreadProps(__spreadValues({}, e), {
    points: a,
    sourcePosition: o,
    targetPosition: r,
    computedZIndex: i
  });
};
var edgesRoutingMiddleware = {
  name: "edges-routing",
  execute: (e, t) => {
    const {
      state: {
        edges: n
      },
      nodesMap: i,
      edgeRoutingManager: o,
      actionStateManager: r,
      helpers: a,
      modelActionTypes: s,
      config: {
        zIndex: d
      }
    } = e, l = d.temporaryEdgeZIndex || d.selectedZIndex, c = checkIfShouldRouteEdges(e), g = r.linking?.temporaryEdge;
    if (!c && !g) return void t();
    const p = c ? processEdgesForRouting(n, i, o, a, s) : [], h = g ? createUpdatedTemporaryEdge(g, i, o, l) : void 0;
    h && r.linking && (r.linking = __spreadProps(__spreadValues({}, r.linking), {
      temporaryEdge: h
    })), t(__spreadValues({}, p.length > 0 ? {
      edgesToUpdate: p
    } : {}));
  }
};
var ClipboardPastedEmitter = class {
  name = "ClipboardPastedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("paste")) return;
    if (!e.actionStateManager.getState().copyPaste) return;
    const {
      initialNodesMap: n,
      initialEdgesMap: i,
      nodesMap: o,
      edgesMap: r
    } = e, a = [];
    for (const [e2, t2] of o) n.has(e2) || a.push(t2);
    const s = [];
    for (const [e2, t2] of r) i.has(e2) || s.push(t2);
    (a.length > 0 || s.length > 0) && t.deferredEmit("clipboardPasted", {
      nodes: a,
      edges: s
    });
  }
};
var DiagramInitEmitter = class {
  name = "DiagramInitEmitter";
  unmeasuredNodes = /* @__PURE__ */ new Set();
  unmeasuredNodePorts = /* @__PURE__ */ new Set();
  unmeasuredEdgeLabels = /* @__PURE__ */ new Set();
  initialized = false;
  initEventEmitted = false;
  safetyHatchTimeoutId = null;
  SAFETY_HATCH_TIMEOUT_MS = 2e3;
  emit(e, t) {
    const {
      modelActionTypes: n
    } = e;
    n.includes("init") ? this.handleInit(e, t) : (n.includes("updateNode") || n.includes("updateEdge")) && this.handleUpdate(e, t);
  }
  handleInit(e, t) {
    this.initialized = true;
    const {
      nodesMap: n,
      edgesMap: i,
      initialUpdate: o
    } = e;
    this.collectUnmeasuredItems(n, i, o.renderedNodeIds ?? Array.from(n.keys()), o.renderedEdgeIds ?? Array.from(i.keys())), this.areAllMeasured() ? this.emitInitEvent(e, t) : this.restartSafetyHatchTimeout(e, t);
  }
  handleUpdate(e, t) {
    if (!this.initialized || this.initEventEmitted) return;
    const {
      modelActionTypes: n,
      initialUpdate: i,
      nodesMap: o,
      edgesMap: r
    } = e, a = this.countUnmeasuredItems();
    n.includes("updateNode") && this.processNodeUpdates(i, o), n.includes("updateEdge") && this.processEdgeUpdates(i, r), this.countUnmeasuredItems() < a && this.restartSafetyHatchTimeout(e, t), this.areAllMeasured() && this.emitInitEvent(e, t);
  }
  collectUnmeasuredItems(e, t, n, i) {
    this.unmeasuredNodes.clear(), this.unmeasuredNodePorts.clear(), this.unmeasuredEdgeLabels.clear();
    for (const t2 of n) {
      const n2 = e.get(t2);
      if (n2) {
        isValidSize(n2.size) || this.unmeasuredNodes.add(t2);
        for (const e2 of n2.measuredPorts ?? []) isValidSize(e2.size) && isValidPosition(e2.position) || this.unmeasuredNodePorts.add(`${t2}:${e2.id}`);
      }
    }
    for (const e2 of i) {
      const n2 = t.get(e2);
      if (n2) for (const t2 of n2.measuredLabels ?? []) isValidSize(t2.size) && isValidPosition(t2.position) || this.unmeasuredEdgeLabels.add(`${e2}:${t2.id}`);
    }
  }
  processNodeUpdates(e, t) {
    if (e?.nodesToUpdate?.length) {
      for (const n of e.nodesToUpdate) if (t.has(n.id) && (this.unmeasuredNodes.has(n.id) && isValidSize(n.size) && this.unmeasuredNodes.delete(n.id), n.measuredPorts)) for (const e2 of n.measuredPorts) {
        const t2 = `${n.id}:${e2.id}`;
        this.unmeasuredNodePorts.has(t2) && isValidSize(e2.size) && isValidPosition(e2.position) && this.unmeasuredNodePorts.delete(t2);
      }
    }
  }
  processEdgeUpdates(e, t) {
    if (e?.edgesToUpdate?.length) {
      for (const n of e.edgesToUpdate) if (t.has(n.id) && n.measuredLabels) for (const e2 of n.measuredLabels) {
        const t2 = `${n.id}:${e2.id}`;
        this.unmeasuredEdgeLabels.has(t2) && isValidSize(e2.size) && isValidPosition(e2.position) && this.unmeasuredEdgeLabels.delete(t2);
      }
    }
  }
  areAllMeasured() {
    return 0 === this.unmeasuredNodes.size && 0 === this.unmeasuredNodePorts.size && 0 === this.unmeasuredEdgeLabels.size;
  }
  emitInitEvent(e, t, n = true) {
    this.clearSafetyHatchTimeout();
    const {
      nodesMap: i,
      edgesMap: o,
      initialUpdate: r
    } = e, a = new Set(r.renderedNodeIds ?? i.keys()), s = new Set(r.renderedEdgeIds ?? o.keys()), d = {
      nodes: Array.from(i.values()).filter((e2) => a.has(e2.id)),
      edges: Array.from(o.values()).filter((e2) => s.has(e2.id)),
      viewport: e.state.metadata.viewport
    };
    n ? t.deferredEmit("diagramInit", d) : t.emit("diagramInit", d), this.initEventEmitted = true;
  }
  restartSafetyHatchTimeout(e, t) {
    this.clearSafetyHatchTimeout(), this.safetyHatchTimeoutId = setTimeout(() => {
      this.initEventEmitted || this.emitInitEventWithWarning(e, t);
    }, this.SAFETY_HATCH_TIMEOUT_MS);
  }
  clearSafetyHatchTimeout() {
    null !== this.safetyHatchTimeoutId && (clearTimeout(this.safetyHatchTimeoutId), this.safetyHatchTimeoutId = null);
  }
  emitInitEventWithWarning(e, t) {
    const n = {
      nodes: Array.from(this.unmeasuredNodes),
      nodePorts: Array.from(this.unmeasuredNodePorts),
      edgeLabels: Array.from(this.unmeasuredEdgeLabels)
    }, i = this.countUnmeasuredItems();
    console.warn("[DiagramInitEmitter] Measurement timeout reached from last measurement. Emitting diagramInit event anyway. Ensure the model provided to ng-diagram was created with initializeModel() or initializeModelAdapter() (for custom ModelAdapter)."), console.warn(`Total unmeasured elements: ${i}`), n.nodes.length > 0 && console.warn(`Unmeasured nodes (${n.nodes.length}):`, n.nodes), n.nodePorts.length > 0 && console.warn(`Unmeasured node ports (${n.nodePorts.length}):`, n.nodePorts), n.edgeLabels.length > 0 && console.warn(`Unmeasured edge labels (${n.edgeLabels.length}):`, n.edgeLabels), this.emitInitEvent(e, t, false);
  }
  countUnmeasuredItems() {
    return this.unmeasuredNodes.size + this.unmeasuredEdgeLabels.size + this.unmeasuredNodePorts.size;
  }
};
var EdgeDrawEndedEmitter = class {
  name = "EdgeDrawEndedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("finishLinking")) return;
    const n = e.actionStateManager.linking;
    if (!n) return;
    const i = e.nodesMap.get(n.sourceNodeId);
    if (!i) return;
    const o = n.dropPosition ?? {
      x: 0,
      y: 0
    };
    if (e.helpers.anyEdgesAdded()) {
      for (const [n2, r] of e.edgesMap) if (!e.initialEdgesMap.has(n2)) {
        const n3 = r.target ? e.nodesMap.get(r.target) : void 0;
        t.deferredEmit("edgeDrawEnded", {
          source: i,
          sourcePort: r.sourcePort,
          dropPosition: o,
          success: true,
          edge: r,
          target: n3,
          targetPort: r.targetPort
        });
        break;
      }
    } else t.deferredEmit("edgeDrawEnded", {
      source: i,
      sourcePort: n.sourcePortId || void 0,
      dropPosition: o,
      success: false,
      reason: n.cancelReason
    });
  }
};
var EdgeDrawnEmitter = class {
  name = "EdgeDrawnEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("finishLinking")) return;
    if (!e.helpers.anyEdgesAdded()) return;
    const {
      initialEdgesMap: n,
      edgesMap: i,
      nodesMap: o
    } = e;
    this.emitNewEdges(n, i, o, t);
  }
  emitNewEdges(e, t, n, i) {
    for (const [o, r] of t) if (!e.has(o)) {
      const e2 = n.get(r.source), t2 = n.get(r.target);
      e2 && t2 && i.deferredEmit("edgeDrawn", {
        edge: r,
        source: e2,
        target: t2,
        sourcePort: r.sourcePort,
        targetPort: r.targetPort
      });
    }
  }
};
function resolveNodes(e, t) {
  const n = [];
  for (const i of e) {
    const e2 = t.get(i);
    e2 && n.push(e2);
  }
  return n;
}
var NodeDragStartedEmitter = class {
  name = "NodeDragStartedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("moveNodesStart")) return;
    const n = e.actionStateManager.dragging?.nodeIds;
    if (!n || 0 === n.length) return;
    const i = resolveNodes(n, e.nodesMap);
    0 !== i.length && t.deferredEmit("nodeDragStarted", {
      nodes: i
    });
  }
};
var NodeDragEndedEmitter = class {
  name = "NodeDragEndedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("moveNodesStop")) return;
    const n = e.actionStateManager.dragging?.nodeIds;
    if (!n || 0 === n.length) return;
    const i = resolveNodes(n, e.nodesMap);
    0 !== i.length && t.deferredEmit("nodeDragEnded", {
      nodes: i
    });
  }
};
var NodeResizeStartedEmitter = class {
  name = "NodeResizeStartedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("resizeNodeStart")) return;
    const n = e.actionStateManager.resize?.resizingNode;
    if (!n) return;
    const i = e.nodesMap.get(n.id);
    i && t.deferredEmit("nodeResizeStarted", {
      node: i
    });
  }
};
var NodeResizeEndedEmitter = class {
  name = "NodeResizeEndedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("resizeNodeStop")) return;
    const n = e.actionStateManager.resize?.resizingNode;
    if (!n) return;
    const i = e.nodesMap.get(n.id);
    i && t.deferredEmit("nodeResizeEnded", {
      node: i
    });
  }
};
var NodeRotateStartedEmitter = class {
  name = "NodeRotateStartedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("rotateNodeStart")) return;
    const n = e.actionStateManager.rotation?.nodeId;
    if (!n) return;
    const i = e.nodesMap.get(n);
    i && t.deferredEmit("nodeRotateStarted", {
      node: i
    });
  }
};
var NodeRotateEndedEmitter = class {
  name = "NodeRotateEndedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("rotateNodeStop")) return;
    const n = e.actionStateManager.rotation?.nodeId;
    if (!n) return;
    const i = e.nodesMap.get(n);
    i && t.deferredEmit("nodeRotateEnded", {
      node: i
    });
  }
};
var PaletteItemDroppedEmitter = class {
  name = "PaletteItemDroppedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("paletteDropNode")) return;
    const n = e.initialUpdate.nodesToAdd?.[0];
    if (!n) return;
    const i = n.id, o = e.initialNodesMap.get(i), r = e.nodesMap.get(i);
    !o && r && t.deferredEmit("paletteItemDropped", {
      node: r,
      dropPosition: r.position
    });
  }
};
var SelectionChangedEmitter = class {
  name = "SelectionChangedEmitter";
  emit(e, t) {
    if (!(e.modelActionTypes.includes("changeSelection") || e.helpers.checkIfAnyNodePropsChanged(["selected"]) || e.helpers.checkIfAnyEdgePropsChanged(["selected"]) || e.helpers.anyNodesAdded() || e.helpers.anyEdgesAdded() || e.helpers.anyNodesRemoved() || e.helpers.anyEdgesRemoved())) return;
    const {
      initialNodesMap: n,
      initialEdgesMap: i,
      nodesMap: o,
      edgesMap: r
    } = e, a = this.collectSelectedNodes(n), s = this.collectSelectedNodes(o), d = this.collectSelectedEdges(i), l = this.collectSelectedEdges(r), c = !this.areSelectionsEqual(a.map((e2) => e2.id), s.map((e2) => e2.id)), g = !this.areSelectionsEqual(d.map((e2) => e2.id), l.map((e2) => e2.id));
    (c || g) && t.deferredEmit("selectionChanged", {
      selectedNodes: s,
      selectedEdges: l,
      previousNodes: a,
      previousEdges: d
    });
  }
  collectSelectedNodes(e) {
    const t = [];
    for (const [, n] of e) n.selected && t.push(n);
    return t;
  }
  collectSelectedEdges(e) {
    const t = [];
    for (const [, n] of e) n.selected && t.push(n);
    return t;
  }
  areSelectionsEqual(e, t) {
    if (e.length !== t.length) return false;
    const n = new Set(e), i = new Set(t);
    return n.size === i.size && [...n].every((e2) => i.has(e2));
  }
};
var SelectionGestureEndedEmitter = class {
  name = "SelectionGestureEndedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("selectEnd")) return;
    if (!e.actionStateManager.selection?.selectionChanged) return;
    e.actionStateManager.clearSelection();
    const n = [];
    for (const t2 of e.nodesMap.values()) t2.selected && n.push(t2);
    const i = [];
    for (const t2 of e.edgesMap.values()) t2.selected && i.push(t2);
    t.deferredEmit("selectionGestureEnded", {
      nodes: n,
      edges: i
    });
  }
};
var GroupMembershipChangedEmitter = class {
  name = "GroupMembershipChangedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("updateNodes")) return;
    if (!e.helpers.checkIfAnyNodePropsChanged(["groupId"])) return;
    const {
      initialNodesMap: n,
      nodesMap: i
    } = e, o = e.helpers.getAffectedNodeIds(["groupId"]), r = /* @__PURE__ */ new Map(), a = [];
    for (const e2 of o) {
      const t2 = n.get(e2), o2 = i.get(e2);
      if (!t2 || !o2) continue;
      const s2 = t2.groupId, d = o2.groupId;
      null != d ? (r.has(d) || r.set(d, []), r.get(d).push(o2)) : null != s2 && a.push(o2);
    }
    const s = [];
    for (const [e2, t2] of r) {
      const n2 = i.get(e2);
      n2 && n2.isGroup && s.push({
        nodes: t2,
        targetGroup: n2
      });
    }
    (s.length > 0 || a.length > 0) && t.deferredEmit("groupMembershipChanged", {
      grouped: s,
      ungrouped: a
    });
  }
};
var SelectionMovedEmitter = class {
  name = "SelectionMovedEmitter";
  moveActions = ["moveNodes", "moveNodesBy"];
  emit(e, t) {
    if (!this.moveActions.some((t2) => e.modelActionTypes.includes(t2))) return;
    const {
      initialNodesMap: n,
      nodesMap: i,
      initialUpdate: o,
      history: r
    } = e, a = this.collectUpdatedNodeIds(o, r);
    if (0 === a.size) return;
    const s = this.getMovedNodes(a, n, i);
    s && 0 !== s.length && t.deferredEmit("selectionMoved", {
      nodes: s
    });
  }
  collectUpdatedNodeIds(e, t) {
    const n = /* @__PURE__ */ new Set();
    if (e?.nodesToUpdate) for (const t2 of e.nodesToUpdate) n.add(t2.id);
    for (const e2 of t) if (e2.stateUpdate?.nodesToUpdate) for (const t2 of e2.stateUpdate.nodesToUpdate) n.add(t2.id);
    return n;
  }
  getMovedNodes(e, t, n) {
    const i = [];
    for (const o of e) {
      const e2 = n.get(o);
      if (!e2) continue;
      const r = t.get(o);
      e2.position && r?.position && (e2.position.x === r.position.x && e2.position.y === r.position.y || i.push(e2));
    }
    return i.length > 0 ? i : null;
  }
};
var SelectionRemovedEmitter = class {
  name = "SelectionRemovedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("deleteSelection")) return;
    const {
      initialNodesMap: n,
      initialEdgesMap: i,
      nodesMap: o,
      edgesMap: r
    } = e, a = [];
    for (const [e2, t2] of n) o.has(e2) || a.push(t2);
    const s = [];
    for (const [e2, t2] of i) r.has(e2) || s.push(t2);
    (a.length > 0 || s.length > 0) && t.deferredEmit("selectionRemoved", {
      deletedNodes: a,
      deletedEdges: s
    });
  }
};
var SelectionRotatedEmitter = class {
  name = "SelectionRotatedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("rotateNodeTo")) return;
    const {
      initialNodesMap: n,
      nodesMap: i
    } = e, o = e.initialUpdate.nodesToUpdate?.[0];
    if (!o) return;
    const r = o.id, a = n.get(r), s = i.get(r);
    if (!a || !s) return;
    const d = a.angle ?? 0, l = s.angle ?? 0;
    d !== l && t.deferredEmit("selectionRotated", {
      node: s,
      angle: l,
      previousAngle: d
    });
  }
};
var NodeResizedEmitter = class {
  name = "NodeResizedEmitter";
  emit(e, t) {
    if (!e.modelActionTypes.includes("resizeNode")) return;
    const n = e.initialUpdate.nodesToUpdate?.[0];
    if (!n) return;
    const i = n.id, o = e.initialNodesMap.get(i), r = e.nodesMap.get(i);
    if (!o || !r) return;
    const a = o.size, s = r.size;
    a && s && (s.width !== a.width || s.height !== a.height) && t.deferredEmit("nodeResized", {
      node: r,
      previousSize: {
        width: a.width,
        height: a.height
      }
    });
  }
};
var ViewportChangedEmitter = class {
  name = "ViewportChangedEmitter";
  emit({
    initialState: e,
    state: t
  }, n) {
    const i = e.metadata.viewport, o = t.metadata.viewport;
    i.x === o.x && i.y === o.y && i.scale === o.scale && i.width === o.width && i.height === o.height || n.deferredEmit("viewportChanged", {
      viewport: o,
      previousViewport: i
    });
  }
};
var EVENT_EMITTER_ERROR = (e, t, n) => `[ngDiagram] Event emitter error: ${e} failed.

Action types: ${t.join(", ")}
Error: ${n instanceof Error ? n.message : String(n)}

This may indicate an issue with event handling logic.
The diagram will continue to function, but some events may not be emitted.
`;
var createEventEmitterMiddleware = (e) => {
  const t = [new DiagramInitEmitter(), new SelectionChangedEmitter(), new SelectionGestureEndedEmitter(), new SelectionMovedEmitter(), new SelectionRemovedEmitter(), new GroupMembershipChangedEmitter(), new SelectionRotatedEmitter(), new ViewportChangedEmitter(), new EdgeDrawnEmitter(), new EdgeDrawEndedEmitter(), new ClipboardPastedEmitter(), new NodeResizedEmitter(), new PaletteItemDroppedEmitter(), new NodeResizeStartedEmitter(), new NodeResizeEndedEmitter(), new NodeRotateStartedEmitter(), new NodeRotateEndedEmitter(), new NodeDragStartedEmitter(), new NodeDragEndedEmitter()];
  return {
    name: "__internal_event_emitter",
    execute: (n, i) => {
      if (i(), e.isEnabled()) for (const i2 of t) try {
        i2.emit(n, e);
      } catch (e2) {
        console.error(EVENT_EMITTER_ERROR(i2.name, n.modelActionTypes, e2));
      }
    }
  };
};
function assignInternalId(e, t) {
  return __spreadProps(__spreadValues({}, e), {
    _internalId: `${e.id}-${t()}`
  });
}
var internalIdMiddleware = {
  name: "internal-id-assignment",
  execute: async (e, t) => {
    const {
      helpers: n,
      initialUpdate: i,
      environment: o
    } = e;
    if (!n.anyNodesAdded() && !n.anyEdgesAdded()) return void t();
    const r = i.nodesToAdd?.map((e2) => assignInternalId(e2, () => o.generateId())), a = i.edgesToAdd?.map((e2) => assignInternalId(e2, () => o.generateId()));
    t(__spreadValues(__spreadValues(__spreadValues({}, i), r ? {
      nodesToAdd: r
    } : {}), a ? {
      edgesToAdd: a
    } : {}));
  }
};
var loggerMiddleware = {
  name: "logger",
  execute: (e, t) => {
    e.config.debugMode ? (console.log(`[ngDiagram] ${e.modelActionTypes.join(", ")}`, {
      initialState: e.initialState,
      finalState: e.state,
      history: e.history,
      initialUpdate: e.initialUpdate
    }), t()) : t();
  }
};
var isNodeFullyMeasured = (e) => {
  if (!isValidSize(e.size) || !isValidPosition(e.position)) return false;
  if (e.measuredPorts) {
    for (const t of e.measuredPorts) if (!isValidSize(t.size) || !isValidPosition(t.position)) return false;
  }
  return true;
};
var measuredBoundsMiddleware = {
  name: "measured-bounds",
  execute: (e, t) => {
    const {
      nodesMap: n,
      modelActionTypes: i,
      helpers: o
    } = e;
    if (i.includes("init")) {
      const e2 = [];
      return n.forEach((t2) => {
        isNodeFullyMeasured(t2) && e2.push({
          id: t2.id,
          measuredBounds: getNodeMeasuredBounds(t2)
        });
      }), void t(__spreadValues({}, e2.length ? {
        nodesToUpdate: e2
      } : {}));
    }
    if (!o.anyNodesAdded() && !o.checkIfAnyNodePropsChanged(["position", "size", "angle", "measuredPorts"])) return void t();
    const r = [], a = [];
    if (o.anyNodesAdded()) {
      const e2 = o.getAddedNodes();
      for (const t2 of e2) isNodeFullyMeasured(t2) && r.push(__spreadProps(__spreadValues({}, t2), {
        measuredBounds: getNodeMeasuredBounds(t2)
      }));
    }
    if (o.checkIfAnyNodePropsChanged(["position", "size", "angle", "measuredPorts"])) {
      const e2 = o.getAffectedNodeIds(["position", "size", "angle", "measuredPorts"]);
      for (const t2 of e2) {
        const e3 = n.get(t2);
        e3 && isNodeFullyMeasured(e3) && a.push({
          id: e3.id,
          measuredBounds: getNodeMeasuredBounds(e3)
        });
      }
    }
    t(__spreadValues(__spreadValues({}, r.length ? {
      nodesToAdd: r
    } : {}), a.length ? {
      nodesToUpdate: a
    } : {}));
  }
};
var createMeasurementTrackingMiddleware = (e) => ({
  name: "measurement-tracking",
  execute: (t, n) => {
    const i = e.isTrackingRequested(), o = e.hasPendingMeasurements();
    if (!i && !o) return void n();
    const {
      helpers: r
    } = t;
    if (i) {
      const t2 = [];
      if (r.anyNodesAdded()) for (const e2 of r.getAddedNodes()) t2.push(`node:${e2.id}`);
      if (r.anyEdgesAdded()) for (const e2 of r.getAddedEdges()) t2.push(`edge:${e2.id}`);
      for (const e2 of r.getChangedNodeIds()) t2.push(`node:${e2}`);
      for (const e2 of r.getChangedEdgeIds()) t2.push(`edge:${e2}`);
      e.registerParticipants(t2);
    } else {
      if (r.checkIfAnyNodePropsChanged(["size", "position", "measuredPorts", "angle"])) for (const t2 of r.getAffectedNodeIds(["size", "position", "measuredPorts", "angle"])) e.signalMeasurement(`node:${t2}`);
      if (r.checkIfAnyEdgePropsChanged(["points", "measuredLabels"])) for (const t2 of r.getAffectedEdgeIds(["points", "measuredLabels"])) e.signalMeasurement(`edge:${t2}`);
    }
    n();
  }
});
function assignEdgeZIndex(e, t, n, i = false) {
  const o = t.get(e.source) ?? n.get(e.source)?.computedZIndex ?? 0, r = t.get(e.target) ?? n.get(e.target)?.computedZIndex ?? 0, a = Math.max(o, r), s = e.zOrder ?? (i ? a + 1 : a);
  return __spreadProps(__spreadValues({}, e), {
    computedZIndex: s
  });
}
var checkIfIsInit = (e) => e.includes("init");
var checkIfIsEdgeAdded = (e) => e.includes("finishLinking") || e.includes("addEdges");
function collectDirtyNodeIds(e, t) {
  const n = /* @__PURE__ */ new Set();
  if (e.anyNodesAdded()) for (const i of e.getAddedNodes()) t.has(i.id) && n.add(i.id);
  for (const i of ["selected", "groupId", "zOrder"]) if (e.checkIfAnyNodePropsChanged([i])) for (const o of e.getAffectedNodeIds([i])) t.has(o) && n.add(o);
  return n;
}
function collectDirtyEdgeIds(e, t, n, i, o, r) {
  const a = /* @__PURE__ */ new Set();
  if (i) for (const t2 of e.getAddedEdges()) a.add(t2.id);
  if (o) for (const t2 of e.getAffectedEdgeIds(["selected"])) a.add(t2);
  if (r) for (const t2 of e.getAffectedEdgeIds(["zOrder"])) a.add(t2);
  if (t.size > 0) for (const e2 of t.keys()) for (const t2 of n.get(e2) ?? []) a.add(t2);
  return a;
}
function findEntryNodes(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const i2 of e) {
    const o = t.get(i2);
    o && (null != o.groupId ? e.has(o.groupId) || n.add(t.has(o.groupId) ? o.groupId : i2) : n.add(i2));
  }
  const i = [];
  for (const e2 of n) {
    const o = /* @__PURE__ */ new Set();
    let r = t.get(e2)?.groupId, a = false;
    for (; null != r && !o.has(r); ) {
      if (n.has(r)) {
        a = true;
        break;
      }
      o.add(r), r = t.get(r)?.groupId;
    }
    if (!a) {
      const n2 = t.get(e2);
      n2 && i.push(n2);
    }
  }
  return i;
}
function computeNodeElevation(e, t, n) {
  if (!n.elevateOnSelection) return 0;
  const i = /* @__PURE__ */ new Set();
  let o = 0, r = e;
  for (; null != r && !i.has(r.id); ) i.add(r.id), r.selected && (o += n.selectedZIndex), r = null != r.groupId ? t.get(r.groupId) : void 0;
  return o;
}
function computeNodeZIndices(e, t, n, i, o) {
  const r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  for (const s of e) {
    let e2, d;
    if (t.has(s.id) || null == s.computedZIndex) e2 = 0;
    else {
      const t2 = computeNodeElevation(s, n, o);
      e2 = s.computedZIndex - t2, d = {
        initialCumulativeElevation: t2 - (s.selected ? o.selectedZIndex : 0),
        skipRoot: true
      }, a.set(s.id, t2);
    }
    const {
      nodes: l,
      elevations: c
    } = assignNodeZIndex(s, i, e2, o, d);
    for (const e3 of l) r.set(e3.id, e3);
    for (const [e3, t2] of c) a.set(e3, t2);
  }
  return {
    nodesWithZIndexMap: r,
    nodeElevationMap: a
  };
}
function diffNodeUpdates(e, t) {
  const n = [];
  for (const i of e.values()) {
    const e2 = t.get(i.id);
    e2 && i.computedZIndex !== e2.computedZIndex && n.push({
      id: i.id,
      computedZIndex: i.computedZIndex
    });
  }
  return n;
}
function computeEdgeUpdates(e, t, n, i, o, r) {
  const a = [], s = /* @__PURE__ */ new Map();
  for (const [e2, t2] of n) s.set(e2, t2.computedZIndex ?? 0);
  for (const n2 of e) {
    const e2 = t.get(n2);
    if (!e2) continue;
    let d = assignEdgeZIndex(e2, s, i, o.edgesAboveConnectedNodes).computedZIndex ?? 0;
    if (o.elevateOnSelection) {
      if (null != e2.zOrder) {
        const t2 = r.get(e2.source) ?? 0, n3 = r.get(e2.target) ?? 0;
        d += Math.max(t2, n3);
      }
      e2.selected && (d += o.selectedZIndex);
    }
    d !== e2.computedZIndex && a.push({
      id: e2.id,
      computedZIndex: d
    });
  }
  return a;
}
var zIndexMiddleware = {
  name: "z-index",
  execute: (e, t) => {
    const {
      state: {
        edges: n
      },
      nodesMap: i,
      edgesMap: o,
      initialConnectedEdgesMap: r,
      helpers: a,
      modelActionTypes: s,
      config: d
    } = e, l = d.zIndex;
    if (!l.enabled) return void t();
    const c = checkIfIsInit(s), g = checkIfIsEdgeAdded(s), p = a.checkIfAnyEdgePropsChanged(["selected"]), h = a.checkIfAnyEdgePropsChanged(["zOrder"]);
    let m;
    const u = () => (m ??= createGroupChildrenMap(i), m);
    let v, f;
    if (c) {
      const {
        nodes: e2,
        elevations: t2
      } = initializeZIndex(i, l, u());
      v = new Map(e2.map((e3) => [e3.id, e3])), f = t2;
    } else {
      const e2 = collectDirtyNodeIds(a, i);
      if (0 === e2.size && !g && !p && !h) return void t();
      if (e2.size > 0) {
        const t2 = findEntryNodes(e2, i);
        ({
          nodesWithZIndexMap: v,
          nodeElevationMap: f
        } = computeNodeZIndices(t2, e2, i, u(), l));
      } else v = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
    }
    const y = diffNodeUpdates(v, i), w = computeEdgeUpdates(c ? new Set(n.map((e2) => e2.id)) : collectDirtyEdgeIds(a, v, r, g, p, h), o, v, i, l, f);
    t(__spreadValues(__spreadValues({}, y.length > 0 ? {
      nodesToUpdate: y
    } : {}), w.length > 0 ? {
      edgesToUpdate: w
    } : {}));
  }
};
var MiddlewareManager = class {
  middlewareChain = [];
  eventEmitterMiddleware = null;
  measurementTrackingMiddleware = null;
  flowCore;
  constructor(e, t) {
    this.flowCore = e, t && t.forEach((e2) => this.register(e2));
  }
  isRegistered(e) {
    return !!this.middlewareChain.find((t) => t.name === e);
  }
  register(e) {
    if (this.isRegistered(e.name)) throw new Error(`Middleware ${e.name} already registered`);
    return this.middlewareChain.push(e), () => this.unregister(e.name);
  }
  unregister(e) {
    const t = this.middlewareChain.findIndex((t2) => t2.name === e);
    -1 !== t && this.middlewareChain.splice(t, 1);
  }
  async execute(e, t, n) {
    !this.eventEmitterMiddleware && this.flowCore.eventManager && (this.eventEmitterMiddleware = createEventEmitterMiddleware(this.flowCore.eventManager)), !this.measurementTrackingMiddleware && this.flowCore.measurementTracker && (this.measurementTrackingMiddleware = createMeasurementTrackingMiddleware(this.flowCore.measurementTracker));
    const i = [...this.middlewareChain, measuredBoundsMiddleware, loggerMiddleware, ...this.measurementTrackingMiddleware ? [this.measurementTrackingMiddleware] : [], ...this.eventEmitterMiddleware ? [this.eventEmitterMiddleware] : []], o = new MiddlewareExecutor(this.flowCore, i);
    return await o.run(e, t, n);
  }
};
var MODEL_INTEGRITY_MISSING_PARENT_ERROR = (e, t) => `[ngDiagram] Model integrity error: Node references non-existent parent.

Node ID: ${e}
Parent ID: ${t}

This indicates corrupted model data. The group hierarchy will be incomplete.

Documentation: https://www.ngdiagram.dev/docs/guides/nodes/groups/`;
var MODEL_INTEGRITY_INVALID_PARENT_ERROR = (e, t, n) => `[ngDiagram] Model integrity error: Node's parent is not a group.

Node ID: ${e}
Parent ID: ${t}
Parent type: ${n}

This indicates incorrect model structure. The group hierarchy will be incomplete.

Documentation: https://www.ngdiagram.dev/docs/guides/nodes/groups/`;
var ModelLookup = class {
  flowCore;
  _nodesMap = {
    map: /* @__PURE__ */ new Map(),
    synchronized: false
  };
  _edgesMap = {
    map: /* @__PURE__ */ new Map(),
    synchronized: false
  };
  _directChildrenMap = {
    map: /* @__PURE__ */ new Map(),
    synchronized: false
  };
  _descendantsCache = {
    map: /* @__PURE__ */ new Map(),
    synchronized: false
  };
  _connectedEdgesMap = {
    map: /* @__PURE__ */ new Map(),
    synchronized: false
  };
  constructor(e) {
    this.flowCore = e;
  }
  desynchronize() {
    this._nodesMap.synchronized = false, this._edgesMap.synchronized = false, this._directChildrenMap.synchronized = false, this._descendantsCache.synchronized = false, this._connectedEdgesMap.synchronized = false;
  }
  get nodesMap() {
    return this._nodesMap.synchronized || (this._nodesMap = {
      map: new Map(this.flowCore.getState().nodes.map((e) => [e.id, e])),
      synchronized: true
    }), this._nodesMap.map;
  }
  get edgesMap() {
    return this._edgesMap.synchronized || (this._edgesMap = {
      map: new Map(this.flowCore.getState().edges.map((e) => [e.id, e])),
      synchronized: true
    }), this._edgesMap.map;
  }
  get directChildrenMap() {
    return this._directChildrenMap.synchronized || (this._directChildrenMap = {
      map: this.buildDirectChildrenMap(this.flowCore.getState().nodes),
      synchronized: true
    }), this._directChildrenMap.map;
  }
  get connectedEdgesMap() {
    return this._connectedEdgesMap.synchronized || (this._connectedEdgesMap = {
      map: this.buildConnectedEdgesMap(this.flowCore.getState().edges),
      synchronized: true
    }), this._connectedEdgesMap.map;
  }
  get descendantsCache() {
    return this._descendantsCache.synchronized || (this._descendantsCache = {
      map: /* @__PURE__ */ new Map(),
      synchronized: true
    }), this._descendantsCache.map;
  }
  buildDirectChildrenMap(e) {
    const t = /* @__PURE__ */ new Map();
    for (const n of e) if (n.groupId) {
      const e2 = t.get(n.groupId) || [];
      e2.push(n.id), t.set(n.groupId, e2);
    }
    return t;
  }
  buildConnectedEdgesMap(e) {
    const t = /* @__PURE__ */ new Map();
    for (const n of e) {
      const e2 = t.get(n.source) || [];
      e2.push(n.id), t.set(n.source, e2);
      const i = t.get(n.target) || [];
      i.push(n.id), t.set(n.target, i);
    }
    return t;
  }
  getNodeById(e) {
    return this.nodesMap.get(e) ?? null;
  }
  getEdgeById(e) {
    return this.edgesMap.get(e) ?? null;
  }
  getConnectedEdges(e) {
    return (this.connectedEdgesMap.get(e) ?? []).map((e2) => this.getEdgeById(e2)).filter((e2) => null !== e2);
  }
  getConnectedNodes(e) {
    const t = this.connectedEdgesMap.get(e) ?? [], n = /* @__PURE__ */ new Set();
    for (const i of t) {
      const t2 = this.getEdgeById(i);
      t2 && n.add(t2.source === e ? t2.target : t2.source);
    }
    return Array.from(n).map((e2) => this.getNodeById(e2)).filter((e2) => null !== e2);
  }
  getNodeEnds(e) {
    const t = this.getEdgeById(e);
    if (!t) return null;
    const n = this.getNodeById(t.source), i = this.getNodeById(t.target);
    return n && i ? {
      source: n,
      target: i
    } : null;
  }
  getChildrenIds(e) {
    return this.directChildrenMap.get(e) ?? [];
  }
  getChildren(e) {
    const t = this.getChildrenIds(e);
    return t ? t.map((e2) => this.getNodeById(e2)).filter((e2) => null !== e2) : [];
  }
  getAllDescendantIds(e) {
    if (this.descendantsCache.has(e)) return this.descendantsCache.get(e);
    const t = this.computeAllDescendants(e);
    return this.descendantsCache.set(e, t), t;
  }
  computeAllDescendants(e) {
    const t = this.getChildrenIds(e);
    if (!t || 0 === t.length) return [];
    const n = [...t];
    for (const e2 of t) {
      const t2 = this.computeAllDescendants(e2);
      n.push(...t2);
    }
    return n;
  }
  getAllDescendants(e) {
    return this.getAllDescendantIds(e).map((e2) => this.getNodeById(e2)).filter((e2) => null !== e2);
  }
  hasChildren(e) {
    return this.directChildrenMap.has(e) && this.directChildrenMap.get(e).length > 0;
  }
  hasDescendants(e) {
    return this.getAllDescendantIds(e).length > 0;
  }
  getChildrenMap() {
    return this.directChildrenMap;
  }
  getSelectedNodes() {
    return this.flowCore.getState().nodes.filter((e) => e.selected);
  }
  getNodeChildren(e, {
    directOnly: t = true
  } = {}) {
    return t ? this.getChildren(e) : this.getAllDescendants(e);
  }
  getNodeChildrenIds(e, {
    directOnly: t = true
  } = {}) {
    return t ? this.getChildrenIds(e) : this.getAllDescendantIds(e);
  }
  getSelectedNodesWithChildren({
    directOnly: e = true
  } = {}) {
    const t = this.getSelectedNodes(), n = /* @__PURE__ */ new Set(), i = [];
    for (const o of t) {
      if (n.has(o.id)) continue;
      n.add(o.id), i.push(o);
      const t2 = this.getNodeChildren(o.id, {
        directOnly: e
      });
      for (const e2 of t2) n.has(e2.id) || (n.add(e2.id), i.push(e2));
    }
    return i;
  }
  getSelectedEdges() {
    return this.flowCore.getState().edges.filter((e) => e.selected);
  }
  isNodeDescendantOfGroup(e, t) {
    return this.getAllDescendantIds(t).includes(e);
  }
  wouldCreateCircularDependency(e, t) {
    return e === t || this.isNodeDescendantOfGroup(t, e);
  }
  getParentChain(e) {
    const t = [];
    let n = this.getNodeById(e);
    for (; n && n.groupId; ) {
      const e2 = this.getNodeById(n.groupId);
      if (!e2) return console.error(MODEL_INTEGRITY_MISSING_PARENT_ERROR(n.id, n.groupId)), t;
      if (!isGroup(e2)) return console.error(MODEL_INTEGRITY_INVALID_PARENT_ERROR(n.id, e2.id, e2.type || "unknown")), t;
      t.push(e2), n = e2;
    }
    return t;
  }
};
var toPortUpdates = (e) => e.map(({
  id: e2,
  size: t,
  position: n
}) => ({
  portId: e2,
  portChanges: {
    size: t,
    position: n
  }
}));
var PortBatchProcessor = class extends BatchProcessor {
  constructor(e) {
    super((t) => {
      const n = e(t)?.measuredPorts ?? [], i = /* @__PURE__ */ new Set();
      for (const e2 of n) isValidSize(e2.size) && isValidPosition(e2.position) && i.add(e2.id);
      return i;
    });
  }
};
var RenderPerformanceLogger = class {
  lastVisibleNodeIds = null;
  withPerformanceLogging(e, t, n) {
    if (!n) return void e();
    const {
      added: i,
      removed: o,
      total: r
    } = this.calculateNodeDiff(t), a = i > 0 || o > 0, s = performance.now();
    e(), a && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        console.log(`[ngDiagram] Render: +${i} -${o} nodes (total: ${r}): ${(performance.now() - s).toFixed(2)}ms`);
      });
    });
  }
  calculateNodeDiff(e) {
    const t = new Set(e.map((e2) => e2.id)), n = this.lastVisibleNodeIds ?? /* @__PURE__ */ new Set();
    let i = 0, o = 0;
    for (const e2 of t) n.has(e2) || i++;
    for (const e2 of n) t.has(e2) || o++;
    return this.lastVisibleNodeIds = t, {
      added: i,
      removed: o,
      total: t.size
    };
  }
};
var BaseRenderStrategy = class {
  flowCore;
  performanceLogger;
  constructor(e) {
    this.flowCore = e, this.performanceLogger = new RenderPerformanceLogger();
  }
  render() {
    const {
      nodes: e,
      edges: t,
      metadata: n
    } = this.flowCore.getState(), i = this.flowCore.actionStateManager.linking?.temporaryEdge, {
      nodes: o,
      edges: r
    } = this.process(e, t, n.viewport), a = i?.temporary ? [...r, i] : r;
    this.performanceLogger.withPerformanceLogging(() => this.flowCore.renderer.draw(o, a, n.viewport), o, this.flowCore.config.debugMode);
  }
};
var EMPTY_SET$1 = /* @__PURE__ */ new Set();
var DirectRenderStrategy = class extends BaseRenderStrategy {
  constructor(e) {
    super(e);
  }
  init() {
    this.render(), this.flowCore.model.onChange((e2) => {
      this.flowCore.spatialHash.process(e2.nodes), this.flowCore.modelLookup.desynchronize(), this.render();
    });
    const e = this.flowCore.model.getNodes(), t = this.flowCore.model.getEdges();
    this.flowCore.initUpdater.start(e, t, async () => {
      await this.flowCore.commandHandler.emit("init", {
        renderedNodeIds: e.map((e2) => e2.id),
        renderedEdgeIds: t.map((e2) => e2.id)
      });
    });
  }
  process(e, t) {
    return {
      nodes: e,
      edges: t,
      nodeIds: EMPTY_SET$1,
      edgeIds: EMPTY_SET$1
    };
  }
  isNodeRendered(e) {
    return true;
  }
};
var IdleRenderScheduler = class {
  flowCore;
  onIdle;
  wasPanning = false;
  idleTimeout = null;
  unsubscribeActionState = null;
  constructor(e, t) {
    this.flowCore = e, this.onIdle = t;
  }
  init() {
    this.unsubscribeActionState = this.flowCore.eventManager.on("actionStateChanged", ({
      actionState: e
    }) => {
      const t = !!e.panning?.active;
      this.wasPanning && !t ? this.scheduleIdleRender() : t && this.idleTimeout && (clearTimeout(this.idleTimeout), this.idleTimeout = null), this.wasPanning = t;
    });
  }
  scheduleIdleRender() {
    this.idleTimeout && clearTimeout(this.idleTimeout), this.idleTimeout = setTimeout(() => {
      this.onIdle(), this.idleTimeout = null;
    }, this.flowCore.config.virtualization.idleDelay ?? 100);
  }
  destroy() {
    this.idleTimeout && (clearTimeout(this.idleTimeout), this.idleTimeout = null), this.unsubscribeActionState && (this.unsubscribeActionState(), this.unsubscribeActionState = null);
  }
};
function isViewportValid(e) {
  return !!e;
}
function getViewportRect(e, t) {
  const {
    x: n,
    y: i,
    scale: o,
    width: r,
    height: a
  } = e, s = r || 1920, d = a || 1080, l = -n / o, c = -i / o, g = s / o, p = d / o, h = t * Math.min(1, o), m = Math.max(s, d) * h / o;
  return {
    x: l - m,
    y: c - m,
    width: g + 2 * m,
    height: p + 2 * m
  };
}
function isViewportSimilar(e, t) {
  const n = 0.25 * e.width, i = 0.25 * e.height, o = 0.1 * e.width, r = 0.1 * e.height;
  return Math.abs(e.x - t.x) < n && Math.abs(e.y - t.y) < i && Math.abs(e.width - t.width) < o && Math.abs(e.height - t.height) < r;
}
function hasMovedTooFar(e, t) {
  const n = 0.4 * t.width, i = 0.4 * t.height;
  return Math.abs(e.x - t.x) > n || Math.abs(e.y - t.y) > i;
}
var ResultCache = class {
  cachedResult = null;
  lastViewportRect = null;
  lastNodesLength = 0;
  lastEdgesLength = 0;
  hasCache() {
    return null !== this.cachedResult;
  }
  isNodeInCache(e) {
    return this.cachedResult?.nodeIds.has(e) ?? false;
  }
  get(e, t) {
    const n = this.cachedResult;
    return {
      nodes: e.filter((e2) => n.nodeIds.has(e2.id)),
      edges: t.filter((e2) => n.edgeIds.has(e2.id)),
      nodeIds: n.nodeIds,
      edgeIds: n.edgeIds
    };
  }
  set(e, t, n, i) {
    this.cachedResult = e, this.lastViewportRect = i, this.lastNodesLength = t.length, this.lastEdgesLength = n.length;
  }
  canUse(e, t, n) {
    return !(!this.cachedResult || !this.lastViewportRect) && e === this.lastNodesLength && t === this.lastEdgesLength && isViewportSimilar(this.lastViewportRect, n);
  }
  hasMovedTooFar(e) {
    return !this.lastViewportRect || hasMovedTooFar(e, this.lastViewportRect);
  }
  invalidateViewport() {
    this.lastViewportRect = null;
  }
  invalidate() {
    this.cachedResult = null, this.lastViewportRect = null, this.lastNodesLength = 0, this.lastEdgesLength = 0;
  }
};
var VisibleElementsResolver = class {
  flowCore;
  constructor(e) {
    this.flowCore = e;
  }
  resolve(e) {
    const t = this.getPrimaryVisibleIds(e), {
      edges: n,
      edgeIds: i,
      externalNodeIds: o
    } = this.collectVisibleEdges(t), {
      nodes: r,
      nodeIds: a
    } = this.buildNodeList(t, o);
    return {
      nodes: r,
      edges: n,
      nodeIds: a,
      edgeIds: i
    };
  }
  getPrimaryVisibleIds(e) {
    const t = new Set(this.flowCore.spatialHash.queryIds(e));
    return this.addGroupDescendants(t), t;
  }
  addGroupDescendants(e) {
    const t = this.flowCore.modelLookup.nodesMap, n = Array.from(e);
    for (const i of n) {
      const n2 = t.get(i);
      if (n2 && isGroup(n2)) for (const t2 of this.flowCore.modelLookup.getAllDescendantIds(i)) e.add(t2);
    }
  }
  collectVisibleEdges(e) {
    const t = [], n = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
    for (const o of e) for (const r of this.flowCore.modelLookup.getConnectedEdges(o)) n.has(r.id) || (t.push(r), n.add(r.id), e.has(r.source) || i.add(r.source), e.has(r.target) || i.add(r.target));
    return {
      edges: t,
      edgeIds: n,
      externalNodeIds: i
    };
  }
  buildNodeList(e, t) {
    const n = this.flowCore.modelLookup.nodesMap, i = new Set(e);
    for (const e2 of t) i.add(e2);
    const o = [];
    for (const e2 of i) {
      const t2 = n.get(e2);
      t2 && o.push(t2);
    }
    return {
      nodes: o,
      nodeIds: i
    };
  }
};
var ZoomTracker = class {
  onZoomEnd;
  lastScale = null;
  isZooming = false;
  zoomIdleTimeout = null;
  constructor(e) {
    this.onZoomEnd = e;
  }
  handleScaleChange(e) {
    null !== this.lastScale && this.lastScale !== e && (this.isZooming = true, this.scheduleZoomIdle()), this.lastScale = e;
  }
  getIsZooming() {
    return this.isZooming;
  }
  destroy() {
    this.zoomIdleTimeout && (clearTimeout(this.zoomIdleTimeout), this.zoomIdleTimeout = null);
  }
  scheduleZoomIdle() {
    this.zoomIdleTimeout && clearTimeout(this.zoomIdleTimeout), this.zoomIdleTimeout = setTimeout(() => {
      this.isZooming = false, this.zoomIdleTimeout = null, this.onZoomEnd();
    }, 300);
  }
};
var EMPTY_SET = /* @__PURE__ */ new Set();
var VirtualizedRenderStrategy = class extends BaseRenderStrategy {
  cache = new ResultCache();
  visibleElementsResolver;
  zoomTracker;
  idleRenderScheduler;
  lastNodesRef = null;
  constructor(e) {
    super(e), this.visibleElementsResolver = new VisibleElementsResolver(e), this.zoomTracker = new ZoomTracker(() => this.invalidateAndRender()), this.idleRenderScheduler = new IdleRenderScheduler(e, () => this.invalidateAndRender());
  }
  init() {
    this.flowCore.spatialHash.process(this.flowCore.model.getNodes()), this.flowCore.model.onChange((e2) => {
      e2.nodes !== this.lastNodesRef && (this.flowCore.spatialHash.process(e2.nodes), this.flowCore.modelLookup.desynchronize(), this.lastNodesRef = e2.nodes), this.render();
    }), this.idleRenderScheduler.init(), this.render();
    const {
      nodes: e,
      edges: t,
      metadata: n
    } = this.flowCore.getState(), i = this.process(e, t, n.viewport);
    this.flowCore.initUpdater.start(i.nodes, i.edges, async () => {
      await this.flowCore.commandHandler.emit("init", {
        renderedNodeIds: i.nodes.map((e2) => e2.id),
        renderedEdgeIds: i.edges.map((e2) => e2.id)
      });
    });
  }
  process(e, t, n) {
    const i = this.flowCore.config.virtualization;
    if (!isViewportValid(n)) return {
      nodes: e,
      edges: t,
      nodeIds: EMPTY_SET,
      edgeIds: EMPTY_SET
    };
    this.zoomTracker.handleScaleChange(n.scale);
    const o = getViewportRect(n, i.padding), r = this.cache.hasCache();
    if (this.zoomTracker.getIsZooming() && r) return this.cache.get(e, t);
    if (this.flowCore.actionStateManager.isPanning() && r) return this.cache.get(e, t);
    if (this.cache.canUse(e.length, t.length, o)) return this.cache.get(e, t);
    const a = this.visibleElementsResolver.resolve(o);
    return this.cache.set(a, e, t, o), a;
  }
  destroy() {
    this.zoomTracker.destroy(), this.idleRenderScheduler.destroy();
  }
  isNodeRendered(e) {
    return !isViewportValid(this.flowCore.model.getMetadata().viewport) || this.cache.isNodeInCache(e);
  }
  invalidateAndRender() {
    this.cache.invalidateViewport(), this.render();
  }
};
var SPATIAL_HASH_REMOVE_ERROR = (e, t) => `[ngDiagram] Spatial hash error: Attempted to remove from non-existent cell "${e}".

Node ID: ${t}

This may indicate a state synchronization issue.`;
var SPATIAL_HASH_UPDATE_ERROR = (e, t) => `[ngDiagram] Spatial hash error: Attempted to update non-existent cell "${e}".

Node ID: ${t}

This may indicate a state synchronization issue.`;
var SpatialHash = class {
  cellSize = 100;
  grid = /* @__PURE__ */ new Map();
  idToCells = /* @__PURE__ */ new Map();
  idToRect = /* @__PURE__ */ new Map();
  process(e) {
    const t = new Set(this.idToRect.keys()), n = /* @__PURE__ */ new Set();
    for (const t2 of e) {
      n.add(t2.id);
      const e2 = this.idToRect.get(t2.id);
      if (e2) {
        const n2 = this.nodeToRect(t2);
        isSameRect(e2, n2) || this.updateInGrid(n2);
      } else this.addToGrid(this.nodeToRect(t2));
    }
    for (const e2 of t.difference(n)) this.removeFromGrid(e2);
  }
  query(e) {
    const t = [];
    return this._query(e, (e2) => t.push(e2)), t;
  }
  queryIds(e) {
    const t = [];
    return this._query(e, (e2) => t.push(e2.id)), t;
  }
  _query(e, t) {
    const n = this.getCells(e), i = /* @__PURE__ */ new Set();
    for (const o of n) {
      const n2 = this.grid.get(o);
      if (n2) for (const o2 of n2) i.has(o2.id) || (i.add(o2.id), doesRectsIntersect(o2, e) && t(o2));
    }
  }
  nodeToRect(e) {
    const t = e.measuredBounds ?? getNodeMeasuredBounds(e);
    return __spreadValues({
      id: e.id
    }, t);
  }
  addToCell(e, t) {
    this.grid.has(e) || this.grid.set(e, []), this.grid.get(e).push(t);
  }
  removeFromCell(e, t) {
    const n = this.grid.get(e);
    if (!n) return void console.error(SPATIAL_HASH_REMOVE_ERROR(e, t));
    const i = n.filter((e2) => e2.id !== t);
    this.grid.set(e, i);
  }
  updateInCell(e, t) {
    const n = this.grid.get(e);
    if (!n) return void console.error(SPATIAL_HASH_UPDATE_ERROR(e, t.id));
    const i = n.filter(({
      id: e2
    }) => e2 !== t.id);
    this.grid.set(e, [...i, t]);
  }
  addToGrid(e) {
    const t = this.getCells(e);
    for (const n of t) this.addToCell(n, e);
    this.idToCells.set(e.id, t), this.idToRect.set(e.id, e);
  }
  updateInGrid(e) {
    const t = this.getCells(e), n = new Set(t), i = new Set(this.idToCells.get(e.id) || []), o = i.difference(n), r = n.difference(i), a = n.intersection(i);
    for (const t2 of o) this.removeFromCell(t2, e.id);
    for (const t2 of r) this.addToCell(t2, e);
    for (const t2 of a) this.updateInCell(t2, e);
    this.idToRect.set(e.id, e), this.idToCells.set(e.id, t);
  }
  removeFromGrid(e) {
    const t = this.idToCells.get(e);
    if (t) {
      for (const n of t) {
        this.removeFromCell(n, e);
        const t2 = this.grid.get(n);
        t2 && 0 === t2.length && this.grid.delete(n);
      }
      this.idToCells.delete(e), this.idToRect.delete(e);
    }
  }
  getCellsRange(e, t) {
    return [Math.floor(e / this.cellSize), Math.floor((e + t) / this.cellSize)];
  }
  getCells(e) {
    const [t, n] = this.getCellsRange(e.x, e.width), [i, o] = this.getCellsRange(e.y, e.height), r = [];
    for (let e2 = t; e2 <= n; e2++) for (let t2 = i; t2 <= o; t2++) r.push(`${e2}-${t2}`);
    return r;
  }
};
var checkCollision = (e, t) => {
  if (isNode(e) && !e.size) return false;
  if (isNode(t) && !t.size) return false;
  const n = getCollisionCorners(e), i = getCollisionCorners(t);
  if (0 === n.length || 0 === i.length) return false;
  const o = [...getRectangleAxes(n), ...getRectangleAxes(i)];
  for (const e2 of o) {
    const t2 = projectRectangle(n, e2), o2 = projectRectangle(i, e2);
    if (!projectionsOverlap(t2, o2)) return false;
  }
  return true;
};
var isNode = (e) => "position" in e;
var getCollisionCorners = (e) => isNode(e) ? e.size ? getRotatedCorners(getRect(e), e.angle ?? 0) : [] : getRotatedCorners(e, e.angle ?? 0);
var projectRectangle = (e, t) => {
  let n = e[0].x * t.x + e[0].y * t.y, i = n;
  for (let o = 1; o < e.length; o++) {
    const r = e[o].x * t.x + e[o].y * t.y;
    r < n && (n = r), r > i && (i = r);
  }
  return {
    min: n,
    max: i
  };
};
var projectionsOverlap = (e, t) => !(e.max < t.min || t.max < e.min);
var getRectangleAxes = (e) => {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const i = e[n], o = e[(n + 1) % e.length], r = {
      x: o.x - i.x,
      y: o.y - i.y
    }, a = Math.sqrt(r.x * r.x + r.y * r.y);
    a > 0 && t.push({
      x: -r.y / a,
      y: r.x / a
    });
  }
  return t;
};
var getNodesInRange = (e, t, n) => {
  const i = getPointRangeRect(t, n), o = e.spatialHash.queryIds(i), r = [];
  for (const t2 of o) {
    const n2 = e.modelLookup.getNodeById(t2);
    n2 && checkCollision(i, n2) && r.push(n2);
  }
  return r;
};
var getNearestNodeInRange = (e, t, n) => getNodesInRange(e, t, n).sort((e2, n2) => getDistanceBetweenRects(getRect(e2), getPointRangeRect(t, 1)) - getDistanceBetweenRects(getRect(n2), getPointRangeRect(t, 1)))[0] || null;
var getNearestPortInRange = (e, t, n) => {
  const i = /* @__PURE__ */ new Map();
  getNodesInRange(e, t, n).forEach((e2) => {
    i.set(e2, e2.measuredPorts || []);
  });
  let o = 1 / 0, r = null;
  for (const [e2, a] of i.entries()) for (const i2 of a) {
    const {
      x: a2,
      y: s
    } = getRect(i2), d = getDistanceBetweenRects(getRect({
      size: i2.size,
      position: {
        x: a2 + e2.position.x,
        y: s + e2.position.y
      }
    }), getPointRangeRect(t, 1));
    d <= n && d < o && (o = d, r = i2);
  }
  return r;
};
var getNodesInRect = (e, t, n = true) => {
  const i = e.spatialHash.queryIds(t), o = [];
  for (const n2 of i) {
    const i2 = e.modelLookup.getNodeById(n2);
    i2 && checkCollision(t, i2) && o.push(i2);
  }
  return n ? o : o.filter((e2) => {
    const n2 = getRect(e2);
    return doesContainRect(t, n2);
  });
};
function getOverlappingNodes(e, t) {
  const n = "string" == typeof t, i = n ? e.modelLookup.getNodeById(t) : t;
  if (!i) return [];
  const o = n ? i.measuredBounds ?? getNodeMeasuredBounds(i) : getNodeMeasuredBounds(i), r = e.spatialHash.queryIds(o), a = [];
  for (const t2 of r) {
    if (t2 === i.id) continue;
    const n2 = e.modelLookup.getNodeById(t2);
    n2 && checkCollision(i, n2) && a.push(n2);
  }
  return a;
}
function createTransactionContext(e, t) {
  return {
    emit: async (n, ...i) => {
      if (e.isAborted()) throw new Error("Cannot emit on rolled back transaction");
      await t.commandHandler.emitInternal(n, true, ...i);
    },
    abort: () => {
      e.abort();
    },
    savepoint: (t2) => {
      if (e.isAborted()) throw new Error("Cannot create savepoint on rolled back transaction");
      e.addSavepoint(t2);
    },
    rollbackTo: (t2) => {
      if (e.isAborted()) throw new Error("Cannot rollback to savepoint on already rolled back transaction");
      e.rollback(t2);
    },
    transaction: (e2, n) => t.transactionManager.transaction(e2, n),
    hasChanges: () => e.hasChanges(),
    isDirty: () => !e.isAborted() && e.hasChanges(),
    getQueuedUpdates: () => e.getQueue()
  };
}
var Transaction = class {
  name;
  parent;
  flowCore;
  queue = [];
  savepoints = /* @__PURE__ */ new Map();
  _isAborted = false;
  children = [];
  _context = null;
  constructor(e, t, n) {
    this.name = e, this.parent = t, this.flowCore = n, t && t.children.push(this);
  }
  get context() {
    return this._context || (this._context = createTransactionContext(this, this.flowCore)), this._context;
  }
  isAborted() {
    return this._isAborted;
  }
  abort() {
    this._isAborted || (this._isAborted = true, this.queue = [], this.savepoints.clear(), this.children.forEach((e) => e.abort()));
  }
  addSavepoint(e) {
    this.ensureNotAborted(), this.savepoints.set(e, this.queue.length);
  }
  rollback(e) {
    if (this.ensureNotAborted(), void 0 === e) return this.queue = [], this.savepoints.clear(), void this.children.forEach((e2) => e2.rollback());
    const t = this.savepoints.get(e);
    if (void 0 === t) throw new Error(`Savepoint '${e}' not found`);
    this.queue = this.queue.slice(0, t);
    const n = [];
    this.savepoints.forEach((e2, i) => {
      e2 > t && n.push(i);
    }), n.forEach((e2) => this.savepoints.delete(e2)), this.children.forEach((e2) => e2.rollback());
  }
  commit() {
    this.ensureNotAborted(), this.parent && this.mergeToParent();
  }
  canCommit() {
    return !this._isAborted && this.hasChanges();
  }
  ensureNotAborted() {
    if (this._isAborted) throw new Error("Cannot perform operation on aborted transaction");
  }
  hasChanges() {
    return this.queue.length > 0 || this.children.some((e) => e.hasChanges());
  }
  getQueue() {
    return [...this.queue];
  }
  queueUpdate(e, t) {
    this.ensureNotAborted(), this.queue.push({
      update: e,
      actionTypes: t
    });
  }
  getState() {
    return {
      name: this.name,
      queue: [...this.queue],
      savepoints: new Map(this.savepoints),
      isAborted: this._isAborted,
      parent: this.parent
    };
  }
  mergeToParent() {
    this.ensureNotAborted(), this.parent && this.queue.forEach((e) => {
      this.parent.queueUpdate(e.update, e.actionTypes);
    });
  }
  getMergedUpdates() {
    if (this._isAborted) return {
      mergedUpdate: {},
      commandsCount: 0,
      actionTypes: []
    };
    const e = this.queue.length, t = /* @__PURE__ */ new Set([this.name]), n = [], i = [], o = [], r = [], a = [], s = [], d = [];
    for (const {
      update: e2,
      actionTypes: l2
    } of this.queue) l2.forEach((e3) => t.add(e3)), e2.nodesToAdd?.length && n.push(e2.nodesToAdd), e2.nodesToRemove?.length && i.push(e2.nodesToRemove), e2.nodesToUpdate?.length && o.push(e2.nodesToUpdate), e2.edgesToAdd?.length && r.push(e2.edgesToAdd), e2.edgesToRemove?.length && a.push(e2.edgesToRemove), e2.edgesToUpdate?.length && s.push(e2.edgesToUpdate), e2.metadataUpdate && d.push(e2.metadataUpdate);
    const l = {};
    return n.length > 0 && (l.nodesToAdd = n.flat()), i.length > 0 && (l.nodesToRemove = i.flat()), o.length > 0 && (l.nodesToUpdate = o.flat()), r.length > 0 && (l.edgesToAdd = r.flat()), a.length > 0 && (l.edgesToRemove = a.flat()), s.length > 0 && (l.edgesToUpdate = s.flat()), d.length > 0 && (l.metadataUpdate = Object.assign({}, ...d)), {
      mergedUpdate: l,
      commandsCount: e,
      actionTypes: [...t]
    };
  }
};
var TransactionManager = class {
  flowCore;
  transactionStack = [];
  pendingOptions = null;
  constructor(e) {
    this.flowCore = e;
  }
  async transaction(e, t, n) {
    const [i, o, r] = this.parseArgs(e, t, n), a = this.getCurrentTransaction(), s = new Transaction(i, a, this.flowCore);
    !a && r && (this.pendingOptions = r), this.transactionStack.push(s);
    try {
      if (await o(s.context), !s.isAborted()) {
        if (!a) {
          const {
            mergedUpdate: e2,
            commandsCount: t2,
            actionTypes: n2
          } = s.getMergedUpdates();
          return {
            results: e2,
            commandsCount: t2,
            actionTypes: n2
          };
        }
        s.mergeToParent();
      }
      return {
        results: {},
        commandsCount: 0,
        actionTypes: []
      };
    } catch (e2) {
      throw s.rollback(), e2;
    } finally {
      this.transactionStack.pop(), a || (this.pendingOptions = null);
    }
  }
  getCurrentOptions() {
    return this.pendingOptions;
  }
  queueUpdate(e, t) {
    const n = this.getCurrentTransaction();
    if (!n) throw new Error("No active transaction. Cannot queue update.");
    n.queueUpdate(e, t);
  }
  isActive() {
    return this.transactionStack.length > 0;
  }
  getTransactionName() {
    const e = this.getCurrentTransaction();
    return e ? e.getState().name : null;
  }
  getCurrentTransaction() {
    return this.transactionStack[this.transactionStack.length - 1] || null;
  }
  parseArgs(e, t, n) {
    if ("function" == typeof e) return ["transaction", e, t];
    if ("function" != typeof t) throw new Error("Callback is required when transaction name is provided");
    return [e, t, n];
  }
};
var InitState = class {
  initializedPorts = /* @__PURE__ */ new Map();
  initializedLabels = /* @__PURE__ */ new Map();
  nodeSizes = /* @__PURE__ */ new Map();
  portRects = /* @__PURE__ */ new Map();
  edgeLabelSizes = /* @__PURE__ */ new Map();
  portsToMeasure = /* @__PURE__ */ new Set();
  labelsToMeasure = /* @__PURE__ */ new Set();
  nodesToMeasure = /* @__PURE__ */ new Set();
  measuredNodes = /* @__PURE__ */ new Set();
  measuredPorts = /* @__PURE__ */ new Set();
  measuredLabels = /* @__PURE__ */ new Set();
  trackNodeMeasurement(e, t) {
    this.nodeSizes.set(e, t), isValidSize(t) && this.measuredNodes.add(e);
  }
  trackPortMeasurement(e, t, n, i) {
    const o = this.getCompoundId(e, t);
    this.portRects.set(o, {
      size: n,
      position: i
    }), isValidSize(n) && isValidPosition(i) && this.measuredPorts.add(o);
  }
  trackLabelMeasurement(e, t, n) {
    const i = this.getCompoundId(e, t);
    this.edgeLabelSizes.set(i, n), isValidSize(n) && this.measuredLabels.add(i);
  }
  addPort(e, t) {
    const n = this.getCompoundId(e, t.id);
    this.initializedPorts.set(n, t), this.portsToMeasure.add(n);
  }
  addLabel(e, t) {
    const n = this.getCompoundId(e, t.id);
    this.initializedLabels.set(n, t), this.labelsToMeasure.add(n);
  }
  collectAlreadyMeasuredItems(e, t) {
    for (const t2 of e) {
      this.nodesToMeasure.add(t2.id), isValidSize(t2.size) && this.measuredNodes.add(t2.id);
      for (const e2 of t2.measuredPorts ?? []) if (this.trackPreExistingPort(t2.id, e2.id), isValidSize(e2.size) && isValidPosition(e2.position)) {
        const n = this.getCompoundId(t2.id, e2.id);
        this.measuredPorts.add(n);
      }
    }
    for (const e2 of t) for (const t2 of e2.measuredLabels ?? []) if (this.trackPreExistingLabel(e2.id, t2.id), isValidSize(t2.size)) {
      const n = this.getCompoundId(e2.id, t2.id);
      this.measuredLabels.add(n);
    }
  }
  allEntitiesHaveMeasurements() {
    return [...this.nodesToMeasure].every((e) => this.measuredNodes.has(e)) && this.measuredPorts.size === this.portsToMeasure.size && this.measuredLabels.size === this.labelsToMeasure.size;
  }
  applyToDiagramState(e) {
    const _a = e.getState(), {
      nodes: t,
      edges: n
    } = _a, i = __objRest(_a, [
      "nodes",
      "edges"
    ]), o = this.groupPortsByNode(), r = this.groupLabelsByEdge(), a = this.updateNodes(t, o), s = this.updateEdges(n, r);
    e.setState(__spreadProps(__spreadValues({}, i), {
      nodes: a,
      edges: s
    }));
  }
  getCompoundId(e, t) {
    return `${e}->${t}`;
  }
  splitCompoundId(e) {
    const [t, n] = e.split("->");
    return {
      entityId: t,
      itemId: n
    };
  }
  trackPreExistingPort(e, t) {
    const n = this.getCompoundId(e, t);
    this.portsToMeasure.add(n);
  }
  trackPreExistingLabel(e, t) {
    const n = this.getCompoundId(e, t);
    this.labelsToMeasure.add(n);
  }
  groupPortsByNode() {
    const e = /* @__PURE__ */ new Map();
    for (const [t, n] of this.initializedPorts.entries()) {
      const {
        entityId: i
      } = this.splitCompoundId(t), o = e.get(i) || [];
      o.push(n), e.set(i, o);
    }
    return e;
  }
  groupLabelsByEdge() {
    const e = /* @__PURE__ */ new Map();
    for (const [t, n] of this.initializedLabels.entries()) {
      const {
        entityId: i
      } = this.splitCompoundId(t), o = e.get(i) || [];
      o.push(n), e.set(i, o);
    }
    return e;
  }
  updateNodes(e, t) {
    return e.map((e2) => {
      const n = this.nodeSizes.get(e2.id) || e2.size, i = t.get(e2.id), o = /* @__PURE__ */ new Map();
      if (e2.measuredPorts) for (const t2 of e2.measuredPorts) o.set(t2.id, t2);
      if (i) for (const e3 of i) o.set(e3.id, e3);
      let r = o.size > 0 ? Array.from(o.values()) : void 0;
      return r && (r = r.map((t2) => {
        const n2 = this.getCompoundId(e2.id, t2.id), i2 = this.portRects.get(n2);
        return i2 ? __spreadProps(__spreadValues({}, t2), {
          size: i2.size,
          position: i2.position
        }) : t2;
      })), __spreadProps(__spreadValues({}, e2), {
        size: n,
        measuredPorts: r
      });
    });
  }
  updateEdges(e, t) {
    return e.map((e2) => {
      const n = t.get(e2.id), i = /* @__PURE__ */ new Map();
      if (e2.measuredLabels) for (const t2 of e2.measuredLabels) i.set(t2.id, t2);
      if (n) for (const e3 of n) i.set(e3.id, e3);
      let o = i.size > 0 ? Array.from(i.values()) : void 0;
      return o && (o = o.map((t2) => {
        const n2 = this.getCompoundId(e2.id, t2.id), i2 = this.edgeLabelSizes.get(n2);
        return i2 ? __spreadProps(__spreadValues({}, t2), {
          size: i2
        }) : t2;
      })), __spreadProps(__spreadValues({}, e2), {
        measuredLabels: o
      });
    });
  }
};
var LateArrivalQueue = class {
  queue = [];
  isProcessing = false;
  get isFinishing() {
    return this.isProcessing;
  }
  get length() {
    return this.queue.length;
  }
  startFinishing() {
    this.isProcessing = true;
  }
  enqueue(e) {
    this.queue.push(e);
  }
  processAll(e) {
    if (0 !== this.queue.length) {
      for (const t of this.queue) switch (t.method) {
        case "addPort":
          e.addPort(...t.args);
          break;
        case "addEdgeLabel":
          e.addEdgeLabel(...t.args);
          break;
        case "applyNodeSize":
          e.applyNodeSize(...t.args);
          break;
        case "applyPortChanges":
          e.applyPortChanges(...t.args);
          break;
        case "applyEdgeLabelChanges":
          e.applyEdgeLabelChanges(...t.args);
          break;
        case "deleteEdgeLabel":
          e.deleteEdgeLabel(...t.args);
      }
      this.queue = [];
    }
  }
};
var StabilityDetector = class {
  shouldWait;
  stabilityDelay;
  stabilityTimeout = null;
  stabilityPromise;
  resolveStability = () => null;
  eventCount = 0;
  constructor(e, t) {
    this.shouldWait = e, this.stabilityDelay = t, this.stabilityPromise = new Promise((e2) => {
      this.resolveStability = e2;
    });
  }
  notify() {
    this.eventCount++, this.resetStabilityTimer();
  }
  waitForStability() {
    return this.shouldWait ? 0 === this.eventCount && this.resetStabilityTimer() : this.resolveStability(), this.stabilityPromise;
  }
  resetStabilityTimer() {
    this.stabilityTimeout && clearTimeout(this.stabilityTimeout), this.stabilityTimeout = setTimeout(() => {
      this.resolveStability(), this.stabilityTimeout = null;
    }, this.stabilityDelay);
  }
};
var INIT_STABILIZATION_FAILED_ERROR = (e) => `[ngDiagram] Initialization stabilization failed.

Error: ${e instanceof Error ? e.message : String(e)}

The diagram will force-finish initialization without waiting for all measurements.
This may result in:
  • Ports without measured positions/sizes
  • Edge labels without measured sizes
  • Incorrect initial edge routing

This usually indicates:
  • Model provided to ng-diagram was not created with initializeModel() or initializeModelAdapter() (for custom ModelAdapter)
  • Resize observers not functioning properly
  • Port/label elements not rendering
  • Very slow initial render (> 50ms between additions)

The diagram will still be functional, but initial layout may be incomplete.

Documentation: https://www.ngdiagram.dev/docs/guides/model-initialization/
`;
var InitUpdater = class {
  flowCore;
  isInitialized = false;
  entitiesStabilized = false;
  portStabilityDetector;
  labelStabilityDetector;
  initState;
  lateArrivalQueue;
  onCompleteCallback;
  measurementTimeout = null;
  constructor(e) {
    this.flowCore = e, this.initState = new InitState(), this.lateArrivalQueue = new LateArrivalQueue();
  }
  start(e, t, n) {
    this.onCompleteCallback = n;
    const i = t.length > 0;
    this.portStabilityDetector = new StabilityDetector(e.length > 0, 50), this.labelStabilityDetector = new StabilityDetector(i, 50), this.initState.collectAlreadyMeasuredItems(e, t), Promise.all([this.portStabilityDetector.waitForStability(), this.labelStabilityDetector.waitForStability()]).then(() => {
      this.entitiesStabilized = true, this.startMeasurementTimeout(), this.tryFinish();
    }).catch((e2) => {
      console.error(INIT_STABILIZATION_FAILED_ERROR(e2)), this.forceFinish();
    });
  }
  applyNodeSize(e, t) {
    this.lateArrivalQueue.isFinishing ? this.lateArrivalQueue.enqueue({
      method: "applyNodeSize",
      args: [e, t]
    }) : (this.initState.trackNodeMeasurement(e, t), this.tryFinish());
  }
  applyNodeSizes(e) {
    for (const {
      id: t,
      size: n
    } of e) this.applyNodeSize(t, n);
  }
  addPort(e, t) {
    this.lateArrivalQueue.isFinishing ? this.lateArrivalQueue.enqueue({
      method: "addPort",
      args: [e, t]
    }) : (this.initState.addPort(e, t), this.portStabilityDetector.notify());
  }
  applyPortChanges(e, t) {
    if (this.lateArrivalQueue.isFinishing) this.lateArrivalQueue.enqueue({
      method: "applyPortChanges",
      args: [e, t]
    });
    else {
      for (const {
        portId: n,
        portChanges: i
      } of t) i.size && i.position && this.initState.trackPortMeasurement(e, n, i.size, i.position);
      this.tryFinish();
    }
  }
  addEdgeLabel(e, t) {
    this.lateArrivalQueue.isFinishing ? this.lateArrivalQueue.enqueue({
      method: "addEdgeLabel",
      args: [e, t]
    }) : (this.initState.addLabel(e, t), this.labelStabilityDetector.notify());
  }
  deleteEdgeLabel(e, t) {
    this.lateArrivalQueue.enqueue({
      method: "deleteEdgeLabel",
      args: [e, t]
    });
  }
  applyEdgeLabelChanges(e, t) {
    if (this.lateArrivalQueue.isFinishing) this.lateArrivalQueue.enqueue({
      method: "applyEdgeLabelChanges",
      args: [e, t]
    });
    else {
      for (const {
        labelId: n,
        labelChanges: i
      } of t) i.size && this.initState.trackLabelMeasurement(e, n, i.size);
      this.tryFinish();
    }
  }
  tryFinish() {
    this.lateArrivalQueue.isFinishing || this.isInitialized || this.entitiesStabilized && this.initState.allEntitiesHaveMeasurements() && this.finish();
  }
  async finish() {
    this.clearMeasurementTimeout(), this.lateArrivalQueue.startFinishing(), this.initState.applyToDiagramState(this.flowCore), this.onCompleteCallback && await this.onCompleteCallback(), this.isInitialized = true, this.lateArrivalQueue.processAll(this.flowCore.internalUpdater);
  }
  forceFinish() {
    this.finish();
  }
  startMeasurementTimeout() {
    this.measurementTimeout = setTimeout(() => {
      this.isInitialized || (console.warn("[InitUpdater] Measurement timeout reached. Some entities may not be measurable (e.g., display: none). Ensure the model provided to ng-diagram was created with initializeModel() or initializeModelAdapter() (for custom ModelAdapter).", {
        nodes: {
          expected: this.initState.nodesToMeasure.size,
          measured: this.initState.measuredNodes.size
        },
        ports: {
          expected: this.initState.portsToMeasure.size,
          measured: this.initState.measuredPorts.size
        },
        labels: {
          expected: this.initState.labelsToMeasure.size,
          measured: this.initState.measuredLabels.size
        }
      }), this.forceFinish());
    }, 2e3);
  }
  clearMeasurementTimeout() {
    null !== this.measurementTimeout && (clearTimeout(this.measurementTimeout), this.measurementTimeout = null);
  }
};
var InternalUpdater = class {
  flowCore;
  onPortAddsFlush = (e) => this.flowCore.commandHandler.emit("addPortsBulk", {
    additions: e
  });
  onPortUpdatesFlush = (e) => this.flowCore.commandHandler.emit("updatePortsBulk", {
    updates: e
  });
  onPortDeletesFlush = (e) => this.flowCore.commandHandler.emit("deletePortsBulk", {
    deletions: e
  });
  onLabelAddsFlush = (e) => this.flowCore.commandHandler.emit("addEdgeLabelsBulk", {
    additions: e
  });
  onLabelUpdatesFlush = (e) => this.flowCore.commandHandler.emit("updateEdgeLabelsBulk", {
    updates: e
  });
  onLabelDeletesFlush = (e) => this.flowCore.commandHandler.emit("deleteEdgeLabelsBulk", {
    deletions: e
  });
  constructor(e) {
    this.flowCore = e;
  }
  applyNodeSize(e, t) {
    this.applyNodeSizes([{
      id: e,
      size: t
    }]);
  }
  applyNodeSizes(e) {
    const t = this.flowCore.actionStateManager.isResizing(), n = e.filter(({
      id: e2,
      size: n2
    }) => {
      const i = this.flowCore.getNodeById(e2);
      return !(!i || i.size && t || isSameRect(getRect(i), getRect({
        size: n2
      })));
    });
    n.length > 0 && this.flowCore.commandHandler.emit("updateNodes", {
      nodes: n
    });
  }
  addPort(e, t) {
    this.flowCore.portBatchProcessor.processAdd(e, t, this.onPortAddsFlush);
  }
  deletePort(e, t) {
    this.flowCore.portBatchProcessor.processDelete(e, t, this.onPortDeletesFlush);
  }
  applyPortChanges(e, t) {
    const n = this.flowCore.getNodeById(e);
    if (!n) return;
    const i = this.filterUnchangedPortUpdates(n, t);
    if (0 !== i.length) for (const t2 of i) this.flowCore.portBatchProcessor.processUpdate(e, t2, this.onPortUpdatesFlush);
  }
  addEdgeLabel(e, t) {
    this.flowCore.labelBatchProcessor.processAdd(e, t, this.onLabelAddsFlush);
  }
  deleteEdgeLabel(e, t) {
    this.flowCore.labelBatchProcessor.processDelete(e, t, this.onLabelDeletesFlush);
  }
  applyEdgeLabelChanges(e, t) {
    const n = this.filterUnchangedLabelUpdates(e, t);
    if (0 !== n.length) for (const t2 of n) this.flowCore.labelBatchProcessor.processUpdate(e, t2, this.onLabelUpdatesFlush);
  }
  filterUnchangedPortUpdates(e, t) {
    const n = new Map((e.measuredPorts ?? []).map((e2) => [e2.id, e2]));
    return t.filter(({
      portId: e2,
      portChanges: t2
    }) => {
      const i = n.get(e2);
      if (!i) return false;
      if (void 0 !== t2.side && t2.side !== i.side) return true;
      if (void 0 !== t2.type && t2.type !== i.type) return true;
      if ("size" in t2 || "position" in t2) {
        const e3 = t2.size ?? i.size, n2 = t2.position ?? i.position;
        if (!isSameRect(getRect(i), getRect({
          size: e3,
          position: n2
        }))) return true;
      }
      return false;
    });
  }
  filterUnchangedLabelUpdates(e, t) {
    const n = this.flowCore.getEdgeById(e);
    if (!n) return [];
    const i = new Map((n.measuredLabels ?? []).map((e2) => [e2.id, e2]));
    return t.filter(({
      labelId: e2,
      labelChanges: t2
    }) => {
      const n2 = i.get(e2);
      if (!n2) return false;
      if (void 0 !== t2.positionOnEdge && t2.positionOnEdge !== n2.positionOnEdge) return true;
      if (void 0 !== t2.size) {
        if (!n2.size) return true;
        if (!isSameSize(n2.size, t2.size)) return true;
      }
      return false;
    });
  }
};
var FlowCore = class {
  renderer;
  inputEventsRouter;
  environment;
  _model;
  _config;
  initUpdater;
  internalUpdater;
  updateSemaphore = new Semaphore(1);
  commandHandler;
  middlewareManager;
  spatialHash;
  modelLookup;
  transactionManager;
  portBatchProcessor;
  labelBatchProcessor;
  actionStateManager;
  edgeRoutingManager;
  eventManager;
  shortcutManager;
  measurementTracker;
  directRenderStrategy;
  virtualizedRenderStrategy;
  getFlowOffset;
  getViewportSize;
  constructor(e, t, n, i, o, r, a, s = {}) {
    this.renderer = t, this.inputEventsRouter = n, this.environment = i, this._model = e, this._config = createFlowConfig(s, this), this.environment = i, this.commandHandler = new CommandHandler(this), this.spatialHash = new SpatialHash(), this.initUpdater = new InitUpdater(this), this.internalUpdater = new InternalUpdater(this), this.modelLookup = new ModelLookup(this), this.eventManager = new EventManager(), this.actionStateManager = new ActionStateManager(this.eventManager), this.directRenderStrategy = new DirectRenderStrategy(this), this.virtualizedRenderStrategy = new VirtualizedRenderStrategy(this), this.middlewareManager = new MiddlewareManager(this, o), this.transactionManager = new TransactionManager(this), this.portBatchProcessor = new PortBatchProcessor(this.getNodeById.bind(this)), this.labelBatchProcessor = new LabelBatchProcessor(this.getEdgeById.bind(this)), this.measurementTracker = new MeasurementTracker(), this.edgeRoutingManager = new EdgeRoutingManager(this.config.edgeRouting.defaultRouting, () => this.config.edgeRouting || {}), this.getFlowOffset = r || (() => ({
      x: 0,
      y: 0
    })), this.getViewportSize = a || (() => ({
      width: 0,
      height: 0
    })), this.shortcutManager = new ShortcutManager(this), this.inputEventsRouter.registerDefaultCallbacks(this), this.init();
  }
  destroy() {
    this.virtualizedRenderStrategy.destroy(), this.eventManager.offAll(), this.model.destroy();
  }
  init() {
    this.initializeViewportSize(), this.renderStrategy.init();
  }
  initializeViewportSize() {
    const {
      width: e,
      height: t
    } = this.getViewportSize();
    if (e > 0 && t > 0) {
      const n = this.model.getMetadata();
      this.model.updateMetadata(__spreadProps(__spreadValues({}, n), {
        viewport: __spreadProps(__spreadValues({}, n.viewport), {
          width: e,
          height: t
        })
      }));
    }
  }
  get model() {
    return this._model;
  }
  getEnvironment() {
    return this.environment;
  }
  get config() {
    return this._config;
  }
  updateConfig(e) {
    this._config = deepMerge(this._config, e);
  }
  registerMiddleware(e) {
    return this.middlewareManager.register(e);
  }
  unregisterMiddleware(e) {
    this.middlewareManager.unregister(e);
  }
  getState() {
    return {
      nodes: this.model.getNodes(),
      edges: this.model.getEdges(),
      metadata: this.model.getMetadata()
    };
  }
  get renderStrategy() {
    return this.isVirtualizationActive ? this.virtualizedRenderStrategy : this.directRenderStrategy;
  }
  setState(e) {
    this.model.updateNodes(e.nodes), this.model.updateEdges(e.edges), this.model.updateMetadata(e.metadata), this.modelLookup.desynchronize();
  }
  async transaction(e, t, n) {
    let i, o;
    if ("function" == typeof e) o = t, i = await this.transactionManager.transaction(e, o ?? {});
    else {
      const r = t;
      if (!r) throw new Error("Callback is required when transaction name is provided");
      o = n, i = await this.transactionManager.transaction(e, r, o ?? {});
    }
    return i.commandsCount > 0 && (o?.waitForMeasurements && this.measurementTracker.requestTracking({
      discoveryWindowMs: o._measurementDiscoveryWindowTimeout,
      debounceMs: o._measurementDebounceTimeout
    }), await this.applyUpdate(i.results, i.actionTypes)), o?.waitForMeasurements && await this.measurementTracker.waitForMeasurements(), i;
  }
  async applyUpdate(e, t) {
    const n = Array.isArray(t) ? t : [t];
    if (this.transactionManager.isActive()) this.transactionManager.queueUpdate(e, n);
    else {
      await this.updateSemaphore.acquire();
      try {
        const t2 = this.getState(), i = await this.middlewareManager.execute(t2, e, n);
        i ? (this.setState(i), this.eventManager.flushDeferredEmits()) : this.eventManager.clearDeferredEmits();
      } finally {
        this.updateSemaphore.release();
      }
    }
  }
  applyViewportOnlyUpdate(e) {
    const t = this.model.getMetadata(), n = t.viewport, i = __spreadValues(__spreadValues({}, n), e);
    i.x === n.x && i.y === n.y && i.scale === n.scale || (this.model.updateMetadata(__spreadProps(__spreadValues({}, t), {
      viewport: i
    })), this.eventManager.emit("viewportChanged", {
      viewport: i,
      previousViewport: n
    }));
  }
  clientToFlowPosition(e) {
    const {
      x: t,
      y: n,
      scale: i
    } = this.model.getMetadata().viewport, {
      x: o,
      y: r
    } = this.getFlowOffset();
    return {
      x: (e.x - t - o) / i,
      y: (e.y - n - r) / i
    };
  }
  flowToClientPosition(e) {
    const {
      x: t,
      y: n,
      scale: i
    } = this.model.getMetadata().viewport, {
      x: o,
      y: r
    } = this.getFlowOffset();
    return {
      x: e.x * i + t + o,
      y: e.y * i + n + r
    };
  }
  clientToFlowViewportPosition(e) {
    const {
      x: t,
      y: n
    } = this.getFlowOffset();
    return {
      x: e.x - t,
      y: e.y - n
    };
  }
  getNodeById(e) {
    return this.modelLookup.getNodeById(e);
  }
  getEdgeById(e) {
    return this.modelLookup.getEdgeById(e);
  }
  getNodesInRange(e, t) {
    return getNodesInRange(this, e, t);
  }
  getNearestNodeInRange(e, t) {
    return getNearestNodeInRange(this, e, t);
  }
  getNearestPortInRange(e, t) {
    return getNearestPortInRange(this, e, t);
  }
  getConnectedEdges(e) {
    return this.modelLookup.getConnectedEdges(e);
  }
  getConnectedNodes(e) {
    return this.modelLookup.getConnectedNodes(e);
  }
  getNodeEnds(e) {
    return this.modelLookup.getNodeEnds(e);
  }
  getChildren(e) {
    return this.modelLookup.getChildren(e);
  }
  getChildrenNested(e) {
    return this.modelLookup.getAllDescendants(e);
  }
  isNestedChild(e, t) {
    return this.modelLookup.isNodeDescendantOfGroup(e, t);
  }
  getParentHierarchy(e) {
    return this.modelLookup.getParentChain(e);
  }
  getOverlappingNodes(e) {
    return getOverlappingNodes(this, e);
  }
  isNodeCurrentlyRendered(e) {
    return this.renderStrategy.isNodeRendered(e);
  }
  getScale() {
    return this.model.getMetadata().viewport.scale;
  }
  getViewport() {
    return this.model.getMetadata().viewport;
  }
  get updater() {
    return this.initUpdater.isInitialized ? this.internalUpdater : this.initUpdater;
  }
  get isInitialized() {
    return this.initUpdater.isInitialized;
  }
  get isVirtualizationActive() {
    return this.config.virtualization.enabled;
  }
  setDebugMode(e) {
    e ? (window.flowCore = this, this.middlewareManager.isRegistered(loggerMiddleware.name) || this.registerMiddleware(loggerMiddleware)) : (delete window.flowCore, this.unregisterMiddleware(loggerMiddleware.name));
  }
};
var EventHandler = class {
  flow;
  constructor(e) {
    this.flow = e;
  }
};
var BoxSelectionEventHandler = class extends EventHandler {
  startPoint;
  isBoxSelecting = false;
  handle(e) {
    switch (e.phase) {
      case "start":
        this.startPoint = e.lastInputPoint, this.isBoxSelecting = true;
        break;
      case "continue":
        if (!this.isBoxSelecting || !this.flow.config.boxSelection.realtime) break;
        this.boxSelect(e);
        break;
      case "end":
        if (!this.isBoxSelecting) break;
        this.boxSelect(e), this.flow.commandHandler.emit("selectEnd"), this.startPoint = void 0, this.isBoxSelecting = false;
    }
  }
  boxSelect(e) {
    if (!this.startPoint) return;
    const t = e.lastInputPoint, {
      x: n,
      y: i
    } = this.flow.clientToFlowPosition(this.startPoint), {
      x: o,
      y: r
    } = this.flow.clientToFlowPosition(t), a = {
      x: Math.min(n, o),
      y: Math.min(i, r),
      width: Math.abs(o - n),
      height: Math.abs(r - i)
    }, s = this.flow.model.getEdges(), d = new Set(getNodesInRect(this.flow, a, this.flow.config.boxSelection.partialInclusion).map((e2) => e2.id)), l = s.filter((e2) => d.has(e2.source) && d.has(e2.target)).map((e2) => e2.id);
    this.flow.commandHandler.emit("select", {
      nodeIds: [...d],
      edgeIds: l,
      multiSelection: false
    });
  }
};
var CopyEventHandler = class extends EventHandler {
  handle() {
    this.flow.commandHandler.emit("copy");
  }
};
var CutEventHandler = class extends EventHandler {
  handle() {
    this.flow.commandHandler.emit("cut");
  }
};
var DeleteSelectionEventHandler = class extends EventHandler {
  handle() {
    this.flow.commandHandler.emit("deleteSelection");
  }
};
var DIRECTIONS = ["top", "bottom", "left", "right"];
var UNKNOWN_DIRECTION_ERROR = (e) => `[ngDiagram] Unknown keyboard move direction: "${e}"

Valid directions are: ${DIRECTIONS.map((e2) => `'${e2}'`).join(", ")}

This indicates a programming error. Check keyboard shortcut configuration.

Documentation: https://www.ngdiagram.dev/docs/guides/shortcut-manager/
`;
var DIRECTION_VECTORS = {
  top: {
    x: 0,
    y: -1
  },
  bottom: {
    x: 0,
    y: 1
  },
  left: {
    x: -1,
    y: 0
  },
  right: {
    x: 1,
    y: 0
  }
};
var KeyboardMoveSelectionEventHandler = class extends EventHandler {
  handle(e) {
    const t = this.flow.modelLookup.getSelectedNodesWithChildren({
      directOnly: false
    }).filter((e2) => e2.draggable ?? true);
    if (0 === t.length) return;
    const n = this.getRootNodes(t), i = this.getDelta(e.direction, n);
    this.flow.commandHandler.emit("moveNodesBy", {
      nodes: t,
      delta: i
    }), this.flow.config.viewportPanningEnabled && this.panViewportIfNeeded(e.direction, t, i);
  }
  getRootNodes(e) {
    const t = new Set(e.map((e2) => e2.id));
    return e.filter((e2) => null == e2.groupId || !t.has(e2.groupId));
  }
  getDelta(e, t) {
    const {
      computeSnapForNodeDrag: n,
      defaultDragSnap: i
    } = this.flow.config.snapping, o = t.reduce((e2, t2) => {
      const {
        width: o2,
        height: r2
      } = n(t2) ?? i;
      return {
        width: Math.max(e2.width, o2),
        height: Math.max(e2.height, r2)
      };
    }, {
      width: 0,
      height: 0
    }), r = DIRECTION_VECTORS[e];
    if (!r) throw new Error(UNKNOWN_DIRECTION_ERROR(e));
    return {
      x: r.x * o.width,
      y: r.y * o.height
    };
  }
  panViewportIfNeeded(e, t, n) {
    const i = this.calculatePanAmount(e, t, n);
    i > 0 && this.emitViewportPan(e, i);
  }
  calculatePanAmount(e, t, n) {
    const {
      viewport: i
    } = this.flow.model.getMetadata();
    if (!i.width || !i.height) return 0;
    const o = this.getViewportBounds(i.x, i.y, i.width, i.height, i.scale);
    return t.reduce((t2, i2) => {
      const r = this.calculateNodeOverflow(i2, n, e, o);
      return Math.max(t2, r);
    }, 0);
  }
  getViewportBounds(e, t, n, i, o) {
    const {
      edgePanningThreshold: r
    } = this.flow.config.selectionMoving, a = r / o;
    return {
      left: -e / o + a,
      top: -t / o + a,
      right: (-e + n) / o - a,
      bottom: (-t + i) / o - a
    };
  }
  calculateNodeOverflow(e, t, n, i) {
    const o = this.getSnappedPosition(e, t), r = this.getNodeBounds(e, o);
    switch (n) {
      case "left":
        return i.left - r.left;
      case "right":
        return r.right - i.right;
      case "top":
        return i.top - r.top;
      case "bottom":
        return r.bottom - i.bottom;
    }
  }
  getNodeBounds(e, t) {
    const n = getRotatedBoundingRect({
      x: t.x,
      y: t.y,
      width: e.size?.width ?? 100,
      height: e.size?.height ?? 50
    }, e.angle ?? 0);
    return {
      left: n.x,
      top: n.y,
      right: n.x + n.width,
      bottom: n.y + n.height
    };
  }
  getSnappedPosition(e, t) {
    return snapNodePosition(this.flow.config, e, {
      x: e.position.x + t.x,
      y: e.position.y + t.y
    });
  }
  emitViewportPan(e, t) {
    const {
      viewport: n
    } = this.flow.model.getMetadata(), i = t * n.scale, o = DIRECTION_VECTORS[e];
    this.flow.commandHandler.emit("moveViewportBy", {
      x: 0 === o.x ? 0 : -o.x * i,
      y: 0 === o.y ? 0 : -o.y * i
    });
  }
};
var KeyboardPanningEventHandler = class extends EventHandler {
  handle(e) {
    let t = 0, n = 0;
    switch (e.direction) {
      case "top":
        n = -10;
        break;
      case "bottom":
        n = 10;
        break;
      case "left":
        t = -10;
        break;
      case "right":
        t = 10;
        break;
      default:
        return;
    }
    this.flow.commandHandler.emit("moveViewportBy", {
      x: t,
      y: n
    });
  }
};
var LINKING_MISSING_TARGET_ERROR = (e) => `[ngDiagram] Linking event missing target node.

Event details:
  • Phase: ${e.phase}
  • Port ID: ${e.portId}
  • Target type: ${e.targetType}
  • Pointer position: (${e.lastInputPoint.x}, ${e.lastInputPoint.y})

This indicates a programming error. Linking start events must have a target node.

Documentation: https://www.ngdiagram.dev/docs/guides/edges/edges/
`;
var LinkingEventHandler = class extends EventHandler {
  handle(e) {
    switch (e.phase) {
      case "start": {
        const t = e.target?.id;
        if (!t) throw new Error(LINKING_MISSING_TARGET_ERROR(e));
        this.flow.actionStateManager.linking = {
          sourceNodeId: t,
          sourcePortId: e.portId,
          temporaryEdge: null
        }, this.flow.commandHandler.emit("startLinking", {
          source: t,
          sourcePort: e.portId
        });
        break;
      }
      case "continue": {
        if (!this.flow.actionStateManager.isLinking()) break;
        const t = this.flow.clientToFlowPosition(e.lastInputPoint);
        this.flow.config.viewportPanningEnabled && e.panningForce && this.flow.commandHandler.emit("moveViewportBy", {
          x: e.panningForce.x,
          y: e.panningForce.y
        }), this.flow.commandHandler.emit("moveTemporaryEdge", {
          position: t
        });
        break;
      }
      case "end": {
        if (!this.flow.actionStateManager.isLinking()) break;
        const t = this.flow.clientToFlowPosition(e.lastInputPoint);
        this.flow.commandHandler.emit("finishLinking", {
          position: t
        });
        break;
      }
    }
  }
};
var PaletteDropEventHandler = class extends EventHandler {
  handle(e) {
    const {
      data: t,
      lastInputPoint: n
    } = e;
    this.flow.commandHandler.emit("paletteDropNode", {
      node: __spreadProps(__spreadValues({}, t), {
        id: this.flow.config.computeNodeId(),
        position: this.flow.clientToFlowPosition({
          x: n.x,
          y: n.y
        })
      })
    });
  }
};
var PanningEventHandler = class extends EventHandler {
  lastPoint;
  handle(e) {
    switch (e.phase) {
      case "start":
        this.lastPoint = e.lastInputPoint, this.flow.actionStateManager.panning = {
          active: true
        };
        break;
      case "continue":
        if (!this.flow.actionStateManager.isPanning() || !this.lastPoint) break;
        this.flow.commandHandler.emit("moveViewportBy", {
          x: e.lastInputPoint.x - this.lastPoint.x,
          y: e.lastInputPoint.y - this.lastPoint.y
        }), this.lastPoint = e.lastInputPoint;
        break;
      case "end":
        this.lastPoint = void 0, this.flow.actionStateManager.clearPanning();
    }
  }
};
var VirtualizedPanningEventHandler = class extends EventHandler {
  lastPoint;
  accumulatedDelta = {
    x: 0,
    y: 0
  };
  rafScheduled = false;
  handle(e) {
    switch (e.phase) {
      case "start":
        this.lastPoint = e.lastInputPoint, this.accumulatedDelta = {
          x: 0,
          y: 0
        }, this.flow.actionStateManager.panning = {
          active: true
        };
        break;
      case "continue": {
        if (!this.flow.actionStateManager.isPanning() || !this.lastPoint) break;
        const t = e.lastInputPoint.y - this.lastPoint.y;
        this.accumulatedDelta.x += e.lastInputPoint.x - this.lastPoint.x, this.accumulatedDelta.y += t, this.lastPoint = e.lastInputPoint, this.scheduleFlush();
        break;
      }
      case "end":
        this.flushDelta(), this.lastPoint = void 0, this.rafScheduled = false, this.flow.actionStateManager.clearPanning();
    }
  }
  scheduleFlush() {
    this.rafScheduled || (this.rafScheduled = true, requestAnimationFrame(() => {
      this.flushDelta(), this.rafScheduled = false;
    }));
  }
  flushDelta() {
    const {
      x: e,
      y: t
    } = this.accumulatedDelta;
    0 === e && 0 === t || (this.flow.commandHandler.emit("moveViewportBy", {
      x: e,
      y: t
    }), this.accumulatedDelta = {
      x: 0,
      y: 0
    });
  }
};
function panningHandlerFactory(e) {
  return e.isVirtualizationActive ? new VirtualizedPanningEventHandler(e) : new PanningEventHandler(e);
}
var PasteEventHandler = class extends EventHandler {
  handle(e) {
    this.flow.commandHandler.emit("paste", this.getPasteParameters(e));
  }
  getPasteParameters(e) {
    return e.lastInputPoint ? {
      position: this.flow.clientToFlowPosition(e.lastInputPoint)
    } : {};
  }
};
var PointerMoveSelectionEventHandler = class extends EventHandler {
  lastPointerPosition;
  startPoint;
  isMoving = false;
  hasMoved = false;
  async handle(e) {
    switch (e.phase) {
      case "start": {
        const t = this.flow.clientToFlowPosition(e.lastInputPoint);
        this.lastPointerPosition = t, this.startPoint = t, this.isMoving = true, this.flow.actionStateManager.dragging = {
          nodeIds: [],
          modifiers: __spreadValues({}, e.modifiers),
          accumulatedDeltas: /* @__PURE__ */ new Map(),
          movementStarted: false
        };
        break;
      }
      case "continue": {
        const t = this.flow.modelLookup.getSelectedNodesWithChildren({
          directOnly: false
        }).filter((e2) => e2.draggable ?? true), n = this.flow.modelLookup.getSelectedNodes();
        if (0 === t.length || !this.isMoving || !this.lastPointerPosition || !this.startPoint) return;
        const i = this.flow.clientToFlowPosition(e.lastInputPoint);
        if (!this.hasMoved) {
          const n2 = i.x - this.startPoint.x, o2 = i.y - this.startPoint.y;
          Math.sqrt(n2 * n2 + o2 * o2) >= 5 && (this.hasMoved = true, this.flow.actionStateManager.dragging = {
            nodeIds: t.map((e2) => e2.id),
            modifiers: __spreadValues({}, e.modifiers),
            movementStarted: true,
            accumulatedDeltas: /* @__PURE__ */ new Map()
          }, await this.flow.commandHandler.emit("moveNodesStart"));
        }
        const o = i.x - this.lastPointerPosition.x, r = i.y - this.lastPointerPosition.y;
        this.flow.actionStateManager.dragging && (this.flow.actionStateManager.dragging.modifiers = __spreadValues({}, e.modifiers)), this.hasMoved && (this.flow.transaction("moveNodes", async (e2) => {
          await e2.emit("moveNodesBy", {
            delta: {
              x: o,
              y: r
            },
            nodes: t
          }), this.updateGroupHighlightOnDrag(e2, i, n);
        }), this.panDiagramOnScreenEdge(e.panningForce)), this.lastPointerPosition = i;
        break;
      }
      case "end": {
        const t = this.flow.clientToFlowPosition(e.lastInputPoint);
        this.hasMoved && (await this.handleDrop(t), await this.flow.commandHandler.emit("moveNodesStop")), this.flow.actionStateManager.clearDragging(), this.lastPointerPosition = void 0, this.startPoint = void 0, this.isMoving = false, this.hasMoved = false;
      }
    }
  }
  updateGroupHighlightOnDrag(e, t, n) {
    const i = this.getTopGroupAtPoint(t), o = this.flow.actionStateManager.highlightGroup?.highlightedGroupId;
    i && n.some((e2) => e2.groupId !== i.id) ? o !== i.id && e.emit("highlightGroup", {
      groupId: i.id,
      nodes: n
    }) : o && e.emit("highlightGroupClear");
  }
  getTopGroupAtPoint(e) {
    return sortNodesByZIndex(this.flow.getNodesInRange(e, 1).filter((e2) => isGroup(e2) && !e2.selected), this.flow.getState().nodes)[0];
  }
  async handleDrop(e) {
    const t = this.getTopGroupAtPoint(e), n = this.flow.modelLookup.getSelectedNodes();
    if (t) await this.flow.commandHandler.emit("addToGroup", {
      groupId: t.id,
      nodeIds: n.map((e2) => e2.id)
    });
    else for (const e2 of n) void 0 === e2.groupId || n.find((t2) => t2.id === e2.groupId) || await this.flow.commandHandler.emit("removeFromGroup", {
      groupId: e2.groupId,
      nodeIds: [e2.id]
    });
  }
  panDiagramOnScreenEdge(e) {
    e && this.flow.commandHandler.emit("moveViewportBy", {
      x: e.x,
      y: e.y
    });
  }
};
var RedoEventHandler = class extends EventHandler {
  handle() {
    this.flow.model.redo();
  }
};
var RESIZE_MISSING_TARGET_ERROR = (e) => `[ngDiagram] Resize event missing target node.

Event details:
  • Phase: ${e.phase}
  • Direction: ${e.direction}
  • Target type: ${e.targetType}
  • Pointer position: (${e.lastInputPoint.x}, ${e.lastInputPoint.y})

This indicates a programming error. Resize events must have a target node.

Documentation: https://www.ngdiagram.dev/docs/guides/nodes/resizing/`;
var ResizeEventHandler = class extends EventHandler {
  async handle(e) {
    if (!e.target) throw new Error(RESIZE_MISSING_TARGET_ERROR(e));
    const {
      x: t,
      y: n
    } = this.flow.clientToFlowPosition(e.lastInputPoint);
    switch (e.phase) {
      case "start": {
        const i = this.flow.getNodeById(e.target.id);
        i && i.size && (this.flow.actionStateManager.resize = {
          startX: t,
          startY: n,
          startWidth: i.size.width,
          startHeight: i.size.height,
          startNodePositionX: i.position.x,
          startNodePositionY: i.position.y,
          resizingNode: i
        }, await this.flow.commandHandler.emit("resizeNodeStart"));
        break;
      }
      case "continue": {
        const i = this.flow.actionStateManager.resize;
        if (!i) break;
        const {
          startHeight: o,
          startNodePositionX: r,
          startNodePositionY: a,
          startWidth: s,
          startX: d,
          startY: l
        } = i, c = Math.round(t - d), g = Math.round(n - l);
        let p = s, h = o, m = r, u = a;
        switch (e.direction) {
          case "top-left":
            p = s - c, m = r + (s - p), h = o - g, u = a + (o - h);
            break;
          case "top":
            h = o - g, u = a + (o - h);
            break;
          case "top-right":
            p = s + c, h = o - g, u = a + (o - h);
            break;
          case "right":
            p = s + c;
            break;
          case "bottom-right":
            p = s + c, h = o + g;
            break;
          case "bottom":
            h = o + g;
            break;
          case "bottom-left":
            p = s - c, m = r + (s - p), h = o + g;
            break;
          case "left":
            p = s - c, m = r + (s - p);
        }
        const v = {
          id: e.target.id,
          disableAutoSize: true,
          size: {
            width: Math.round(p),
            height: Math.round(h)
          }
        };
        m === r && u === a || (v.position = {
          x: Math.round(m),
          y: Math.round(u)
        }), this.flow.commandHandler.emit("resizeNode", v);
        break;
      }
      case "end":
        await this.flow.commandHandler.emit("resizeNodeStop"), this.flow.actionStateManager.clearResize();
    }
  }
};
var ROTATE_MISSING_TARGET_ERROR = (e) => `[ngDiagram] Rotate event missing target node.

Event details:
  • Phase: ${e.phase}
  • Target type: ${e.targetType}
  • Pointer position: (${e.lastInputPoint.x}, ${e.lastInputPoint.y})
  • Center: (${e.center.x}, ${e.center.y})

This indicates a programming error. Rotation events must have a target node.

Documentation: https://www.ngdiagram.dev/docs/guides/nodes/rotation/`;
var RotateEventHandler = class extends EventHandler {
  async handle(e) {
    const {
      center: t,
      lastInputPoint: n,
      target: i,
      phase: o
    } = e;
    if (!i) throw new Error(ROTATE_MISSING_TARGET_ERROR(e));
    const r = i?.id, a = this.flow.clientToFlowPosition(n);
    switch (o) {
      case "start": {
        const e2 = this.flow.getNodeById(r);
        if (!e2) return;
        const n2 = NgDiagramMath.angleBetweenPoints(t, a);
        this.flow.actionStateManager.rotation = {
          startAngle: n2,
          initialNodeAngle: e2.angle ?? 0,
          nodeId: r
        }, await this.flow.commandHandler.emit("rotateNodeStart");
        break;
      }
      case "continue": {
        const e2 = this.flow.actionStateManager.rotation;
        if (!e2 || e2.nodeId !== r) return;
        if (NgDiagramMath.distanceBetweenPoints(a, t) < 30) return;
        const n2 = NgDiagramMath.angleBetweenPoints(t, a);
        this.flow.commandHandler.emit("rotateNodeTo", {
          nodeId: r,
          angle: e2.initialNodeAngle + (n2 - e2.startAngle)
        });
        break;
      }
      case "end":
        await this.flow.commandHandler.emit("rotateNodeStop"), this.flow.actionStateManager.clearRotation();
    }
  }
};
var SelectAllEventHandler = class extends EventHandler {
  handle() {
    this.flow.commandHandler.emit("selectAll"), this.flow.commandHandler.emit("selectEnd");
  }
};
var SelectEventHandler = class extends EventHandler {
  handle(e) {
    if ("end" === e.phase) return void this.flow.commandHandler.emit("selectEnd");
    const t = this.getTargetElements(e), n = this.flow.shortcutManager.matchesAction("multiSelection", {
      modifiers: e.modifiers
    });
    if (!t && !n) return void this.flow.commandHandler.emit("deselectAll");
    if (!t) return;
    const {
      target: i
    } = e, o = i?.selected;
    o && n ? this.flow.commandHandler.emit("deselect", t) : this.flow.commandHandler.emit("select", __spreadProps(__spreadValues({}, t), {
      multiSelection: o || n
    }));
  }
  getTargetElements(e) {
    return "diagram" !== e.targetType && e.target ? "node" === e.targetType ? {
      nodeIds: [e.target.id],
      edgeIds: void 0
    } : "edge" === e.targetType ? {
      nodeIds: void 0,
      edgeIds: [e.target.id]
    } : void 0 : null;
  }
};
var UndoEventHandler = class extends EventHandler {
  handle() {
    this.flow.model.undo();
  }
};
var WheelPanningEventHandler = class extends EventHandler {
  idleTimeout;
  handle(e) {
    const {
      deltaX: t,
      deltaY: n
    } = e;
    0 === t && 0 === n || (this.activatePanning(), this.flow.commandHandler.emit("moveViewportBy", {
      x: -t || 0,
      y: -n || 0
    }));
  }
  activatePanning() {
    this.flow.actionStateManager.panning = {
      active: true
    }, void 0 !== this.idleTimeout && clearTimeout(this.idleTimeout), this.idleTimeout = setTimeout(() => {
      this.flow.actionStateManager.clearPanning(), this.idleTimeout = void 0;
    }, 100);
  }
};
var ZoomingEventHandler = class extends EventHandler {
  handle(e) {
    const {
      centerPoint: {
        x: t,
        y: n
      },
      zoomFactor: i
    } = e;
    let {
      x: o,
      y: r,
      scale: a
    } = this.flow.getState().metadata.viewport;
    const {
      x: s,
      y: d
    } = this.flow.getFlowOffset(), l = (t - o - s) / a, c = (n - r - d) / a;
    a *= i, a = NgDiagramMath.clamp({
      min: this.flow.config.zoom.min,
      value: a,
      max: this.flow.config.zoom.max
    }), o += ((t - o - s) / a - l) * a, r += ((n - r - d) / a - c) * a, this.flow.commandHandler.emit("zoom", {
      x: o,
      y: r,
      scale: a
    });
  }
};
var InputEventsRouter = class {
  handlers = {};
  emit(e) {
    const t = this.handlers[e.name];
    if (t) return t.handle(e);
    console.warn(`No handler registered for event: ${e.name}`);
  }
  register(e, t) {
    this.handlers[e] = t;
  }
  registerDefaultCallbacks(e) {
    this.register("copy", new CopyEventHandler(e)), this.register("select", new SelectEventHandler(e)), this.register("selectAll", new SelectAllEventHandler(e)), this.register("panning", panningHandlerFactory(e)), this.register("keyboardPanning", new KeyboardPanningEventHandler(e)), this.register("wheelPanning", new WheelPanningEventHandler(e)), this.register("pointerMoveSelection", new PointerMoveSelectionEventHandler(e)), this.register("keyboardMoveSelection", new KeyboardMoveSelectionEventHandler(e)), this.register("resize", new ResizeEventHandler(e)), this.register("paste", new PasteEventHandler(e)), this.register("deleteSelection", new DeleteSelectionEventHandler(e)), this.register("zoom", new ZoomingEventHandler(e)), this.register("linking", new LinkingEventHandler(e)), this.register("rotate", new RotateEventHandler(e)), this.register("paletteDrop", new PaletteDropEventHandler(e)), this.register("cut", new CutEventHandler(e)), this.register("boxSelection", new BoxSelectionEventHandler(e)), this.register("undo", new UndoEventHandler(e)), this.register("redo", new RedoEventHandler(e));
  }
  hasHandler(e) {
    return !!this.handlers[e];
  }
};
var EnvironmentProviderService = class _EnvironmentProviderService {
  get os() {
    return this.detectOS();
  }
  get browser() {
    return this.detectBrowser();
  }
  get runtime() {
    return this.isClient ? "web" : "node";
  }
  get isClient() {
    return this.checkIfClient();
  }
  detectOS() {
    if (!this.isClient) return null;
    const e = window.navigator.userAgent;
    return /iPhone|iPad|iPod/.test(e) ? "iOS" : /Mac/.test(e) ? "MacOS" : /Win/.test(e) ? "Windows" : /Android/.test(e) ? "Android" : /Linux/.test(e) ? "Linux" : "Other";
  }
  detectBrowser() {
    if (!this.isClient) return null;
    const e = window.navigator.userAgent;
    return /OPR/.test(e) ? "Opera" : /Edge|Edg/.test(e) ? "Edge" : /Chrome/.test(e) ? "Chrome" : /Firefox/.test(e) ? "Firefox" : /Safari/.test(e) ? "Safari" : /Trident/.test(e) ? "IE" : "Unknown";
  }
  checkIfClient() {
    return "undefined" != typeof window && "undefined" != typeof document;
  }
  now() {
    return this.isClient ? performance.now() : Date.now();
  }
  generateId() {
    return this.isClient && "undefined" != typeof crypto && "function" == typeof crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
  }
  static "ɵfac" = function EnvironmentProviderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EnvironmentProviderService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _EnvironmentProviderService,
    factory: _EnvironmentProviderService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnvironmentProviderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var InputEventsRouterService = class _InputEventsRouterService extends InputEventsRouter {
  environment = inject(EnvironmentProviderService);
  getBaseEvent(e) {
    return {
      modifiers: this.getModifiers(e),
      id: this.environment.generateId(),
      timestamp: this.environment.now()
    };
  }
  eventGuards = {
    isPointerEvent: this.isPointerEvent.bind(this),
    isKeyboardEvent: this.isKeyboardEvent.bind(this),
    isWheelEvent: this.isWheelEvent.bind(this),
    isDomEvent: this.isDomEvent.bind(this),
    withPrimaryModifier: this.withPrimaryModifier.bind(this),
    withSecondaryModifier: this.withSecondaryModifier.bind(this),
    withShiftModifier: this.withShiftModifier.bind(this),
    withMetaModifier: this.withMetaModifier.bind(this),
    withoutModifiers: this.withoutModifiers.bind(this),
    withPrimaryButton: this.withPrimaryButton.bind(this),
    isArrowKeyPressed: this.isArrowKeyPressed.bind(this),
    isKeyPressed: this.isKeyPressed.bind(this),
    isKeyComboPressed: this.isKeyComboPressed.bind(this)
  };
  keysMap = {
    arrows: {
      up: "ArrowUp",
      down: "ArrowDown",
      left: "ArrowLeft",
      right: "ArrowRight"
    },
    keys: {
      delete: "Delete",
      backspace: "Backspace"
    }
  };
  getPrimaryModifierKey() {
    return this.environment.isClient && "MacOS" === this.environment.os ? "metaKey" : "ctrlKey";
  }
  isPointerEvent(e) {
    return this.environment.isClient && e instanceof PointerEvent;
  }
  isKeyboardEvent(e) {
    return this.environment.isClient && e instanceof KeyboardEvent;
  }
  isWheelEvent(e) {
    return this.environment.isClient && e instanceof WheelEvent;
  }
  isDomEvent(e) {
    return this.isPointerEvent(e) || this.isKeyboardEvent(e) || this.isWheelEvent(e);
  }
  getModifiers(e) {
    return this.isDomEvent(e) ? {
      primary: e[this.getPrimaryModifierKey()],
      secondary: e.altKey,
      shift: e.shiftKey,
      meta: e.metaKey
    } : {
      primary: false,
      secondary: false,
      shift: false,
      meta: false
    };
  }
  withPrimaryModifier(e) {
    return this.getModifiers(e).primary;
  }
  withSecondaryModifier(e) {
    return this.getModifiers(e).secondary;
  }
  withShiftModifier(e) {
    return this.getModifiers(e).shift;
  }
  withMetaModifier(e) {
    return this.getModifiers(e).meta;
  }
  withoutModifiers(e) {
    const t = this.getModifiers(e);
    return Object.values(t).every((e2) => false === e2);
  }
  withPrimaryButton(e) {
    return this.isPointerEvent(e) && (void 0 === e.button || 0 === e.button);
  }
  isArrowKeyPressed(e) {
    return this.isKeyboardEvent(e) && Object.values(this.keysMap.arrows).includes(e.key);
  }
  isKeyPressed(e) {
    return (t) => this.isKeyboardEvent(t) && t.key === e;
  }
  isKeyComboPressed(e, ...t) {
    return (n) => {
      if (!this.isKeyboardEvent(n)) return false;
      const i = this.getModifiers(n);
      return !!t.every((e2) => i[e2]) && this.isKeyPressed(e)(n);
    };
  }
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵInputEventsRouterService_BaseFactory;
    return function InputEventsRouterService_Factory(__ngFactoryType__) {
      return (ɵInputEventsRouterService_BaseFactory || (ɵInputEventsRouterService_BaseFactory = ɵɵgetInheritedFactory(_InputEventsRouterService)))(__ngFactoryType__ || _InputEventsRouterService);
    };
  })();
  static "ɵprov" = ɵɵdefineInjectable({
    token: _InputEventsRouterService,
    factory: _InputEventsRouterService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputEventsRouterService, [{
    type: Injectable
  }], null, null);
})();
var RendererService = class _RendererService {
  clear() {
    throw new Error("Method not implemented.");
  }
  isInitialized = signal(false);
  viewportPannable = signal(true);
  nodes = signal([]);
  edges = signal([]);
  viewport = signal({
    x: 0,
    y: 0,
    scale: 1
  });
  draw(e, t, n) {
    this.nodes.set(e), this.edges.set(t), this.viewport.set(n);
  }
  static "ɵfac" = function RendererService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RendererService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _RendererService,
    factory: _RendererService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RendererService, [{
    type: Injectable
  }], null, null);
})();
var FlowCoreProviderService = class _FlowCoreProviderService {
  renderer = inject(RendererService);
  inputEventsRouter = inject(InputEventsRouterService);
  environment = inject(EnvironmentProviderService);
  flowCore = null;
  _isInitialized = signal(false);
  isInitialized = this._isInitialized.asReadonly();
  init(e, t, n, i, o) {
    this.flowCore = new FlowCore(e, this.renderer, this.inputEventsRouter, this.environment, t, n, i, o), this._isInitialized.set(true);
  }
  destroy() {
    this.flowCore && (this.flowCore.destroy(), this.flowCore = null, this._isInitialized.set(false));
  }
  provide() {
    if (!this.flowCore) throw new Error('[ngDiagram] Library engine not initialized yet.\n\nTo fix this, wait for initialization to complete using one of these methods:\n  • Use "isInitialized" signal from NgDiagramService\n  • Use "diagramInit" event handler passed to NgDiagramComponent\n\nDocumentation: https://www.ngdiagram.dev/docs/guides/model-initialization/#waiting-for-initialization\n');
    return this.flowCore;
  }
  static "ɵfac" = function FlowCoreProviderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlowCoreProviderService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _FlowCoreProviderService,
    factory: _FlowCoreProviderService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlowCoreProviderService, [{
    type: Injectable
  }], null, null);
})();
var FlowOffsetService = class _FlowOffsetService {
  flowCoreProvider = inject(FlowCoreProviderService);
  element;
  cachedOffset = null;
  isInteractionActive = false;
  getFlowOffset = () => {
    if (this.isInteractionActive && this.cachedOffset) return this.cachedOffset;
    const e = this.element.getBoundingClientRect(), t = {
      x: e.left,
      y: e.top
    };
    return this.isInteractionActive && (this.cachedOffset = t), t;
  };
  initialize(e) {
    this.element = e, this.flowCoreProvider.provide().eventManager.on("actionStateChanged", (e2) => {
      const {
        actionState: t
      } = e2, n = !!(t.dragging || t.linking || t.resize || t.rotation || t.panning || t.selection);
      n && !this.isInteractionActive ? this.isInteractionActive = true : !n && this.isInteractionActive && (this.isInteractionActive = false, this.cachedOffset = null);
    });
  }
  invalidateCache() {
    this.cachedOffset = null;
  }
  reset() {
    this.cachedOffset = null, this.isInteractionActive = false;
  }
  static "ɵfac" = function FlowOffsetService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlowOffsetService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _FlowOffsetService,
    factory: _FlowOffsetService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlowOffsetService, [{
    type: Injectable
  }], null, null);
})();
var BatchResizeObserverService = class _BatchResizeObserverService {
  ngZone = inject(NgZone);
  observer = null;
  observedElements = /* @__PURE__ */ new WeakMap();
  entityIndex = /* @__PURE__ */ new Map();
  config = null;
  rafId = null;
  pendingEntries = [];
  constructor() {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new ResizeObserver((e) => {
        if (this.pendingEntries.push(...e), this.config?.onObserverActivity) {
          const t = [];
          for (const n of e) {
            const e2 = this.observedElements.get(n.target);
            e2 && t.push(e2);
          }
          t.length > 0 && this.config.onObserverActivity(t);
        }
        this.rafId || (this.rafId = requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.processBatch();
          });
        }));
      });
    });
  }
  configure(e) {
    this.config = e;
  }
  observe(e, t) {
    this.observedElements.set(e, t), this.addToEntityIndex(e, t), this.observer?.observe(e);
  }
  unobserve(e) {
    const t = this.observedElements.get(e);
    t && (this.removeFromEntityIndex(e, t), this.observedElements.delete(e)), this.observer?.unobserve(e);
  }
  invalidate(e) {
    this.observedElements.get(e) && (this.observer?.unobserve(e), this.observer?.observe(e));
  }
  getMetadata(e) {
    return this.observedElements.get(e);
  }
  invalidateNode(e) {
    this.invalidateByKey(`node:${e}`);
  }
  invalidateEdgeLabels(e) {
    this.invalidateByKey(`edge:${e}`);
  }
  invalidateAll() {
    const e = /* @__PURE__ */ new Set();
    for (const t of this.entityIndex.values()) for (const n of t) e.has(n) || (e.add(n), this.invalidate(n));
  }
  invalidateByKey(e) {
    const t = this.entityIndex.get(e);
    if (t) for (const e2 of t) this.invalidate(e2);
  }
  getEntityKeys(e) {
    switch (e.type) {
      case "node":
      case "port":
        return [`node:${e.nodeId}`];
      case "edge-label":
        return [`edge:${e.edgeId}`];
    }
  }
  addToEntityIndex(e, t) {
    for (const n of this.getEntityKeys(t)) {
      let t2 = this.entityIndex.get(n);
      t2 || (t2 = /* @__PURE__ */ new Set(), this.entityIndex.set(n, t2)), t2.add(e);
    }
  }
  removeFromEntityIndex(e, t) {
    for (const n of this.getEntityKeys(t)) {
      const t2 = this.entityIndex.get(n);
      t2 && (t2.delete(e), 0 === t2.size && this.entityIndex.delete(n));
    }
  }
  processBatch() {
    const e = [...this.pendingEntries];
    this.pendingEntries = [], this.rafId = null, 0 !== e.length && this.config && this.ngZone.run(() => {
      this.config.processBatch(e);
    });
  }
  ngOnDestroy() {
    this.rafId && cancelAnimationFrame(this.rafId), this.observer?.disconnect(), this.entityIndex.clear();
  }
  static "ɵfac" = function BatchResizeObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BatchResizeObserverService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _BatchResizeObserverService,
    factory: _BatchResizeObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BatchResizeObserverService, [{
    type: Injectable
  }], () => [], null);
})();
var findParentWithClass = (e, t) => {
  let n = e.parentElement;
  for (; n; ) {
    if (n.classList.contains(t)) return n;
    n = n.parentElement;
  }
  return null;
};
var PORT_PARENT_NOT_FOUND_ERROR = (e) => `[ngDiagram] Port measurement failed: Parent node not found.

Port ID: ${e}

This may occur during DOM updates or node removal.

Documentation: https://www.ngdiagram.dev/docs/guides/nodes/ports/
`;
var NODE_ELEMENT_NOT_FOUND_ERROR = (e) => `[ngDiagram] Node measurement failed: Node element not found.

Node ID: ${e}

This may occur during DOM updates or node removal.

Documentation: https://www.ngdiagram.dev/docs/guides/nodes/nodes/
`;
var PORT_ID_MISSING_ERROR = (e, t) => `[ngDiagram] Port measurement failed: Missing data-port-id attribute.

Port element ID: ${e}
Node ID: ${t}

To fix this:
  • Add [id]="port.id" to port components
  • Ensure all ports have unique IDs

Skipping this port.

Documentation: https://www.ngdiagram.dev/docs/guides/nodes/ports/
`;
var UpdatePortsService = class _UpdatePortsService {
  flowCoreProvider = inject(FlowCoreProviderService);
  diagramElement = inject(ElementRef);
  getPortData(e) {
    const t = findParentWithClass(e, "ng-diagram-node");
    return t ? this.measurePort(e, t.getBoundingClientRect(), this.getScale()) : (console.error(PORT_PARENT_NOT_FOUND_ERROR(e.id)), null);
  }
  getNodePortsData(e) {
    const t = this.diagramElement.nativeElement.querySelector(`.ng-diagram-node[data-node-id="${e}"]`);
    if (!t) return console.error(NODE_ELEMENT_NOT_FOUND_ERROR(e)), [];
    const n = t.querySelectorAll("[data-port-id]"), i = [], o = t.getBoundingClientRect(), r = this.getScale();
    return n.forEach((t2) => {
      const n2 = t2.getAttribute("data-port-id");
      if (!n2) return void console.error(PORT_ID_MISSING_ERROR(t2.id, e));
      const a = this.measurePort(t2, o, r);
      i.push({
        id: n2,
        size: a.size,
        position: a.position
      });
    }), i;
  }
  measurePort(e, t, n) {
    const i = e.getBoundingClientRect();
    return {
      position: {
        x: (i.left - t.left) / n,
        y: (i.top - t.top) / n
      },
      size: {
        width: i.width / n,
        height: i.height / n
      }
    };
  }
  getScale() {
    return this.flowCoreProvider.provide().getState().metadata.viewport.scale;
  }
  static "ɵfac" = function UpdatePortsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpdatePortsService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _UpdatePortsService,
    factory: _UpdatePortsService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdatePortsService, [{
    type: Injectable
  }], null, null);
})();
var UNKNOWN_ELEMENT_TYPE_ERROR = (e) => `[ngDiagram] Unknown element type: "${e}"

Expected types: 'port', 'edge-label', 'node'

This indicates a programming error in the resize observer metadata configuration.
Check that elements are registered with the correct type.`;
var FlowResizeBatchProcessorService = class _FlowResizeBatchProcessorService {
  flowCoreProvider = inject(FlowCoreProviderService);
  updatePortsService = inject(UpdatePortsService);
  batchResizeObserver = inject(BatchResizeObserverService);
  isInitialized = false;
  initialize() {
    this.isInitialized || (this.batchResizeObserver.configure({
      processBatch: (e) => this.processAllResizes(e),
      onObserverActivity: (e) => {
        const t = this.flowCoreProvider.provide().measurementTracker;
        for (const n of e) "port" === n.type || "node" === n.type ? t.signalObserverActivity(`node:${n.nodeId}`) : "edge-label" === n.type && t.signalObserverActivity(`edge:${n.edgeId}`);
      }
    }), this.isInitialized = true);
  }
  processAllResizes(e) {
    if (!this.isInitialized) return void console.warn("FlowResizeBatchProcessorService not initialized yet, skipping resize processing");
    const t = [], n = [], i = [];
    for (const o of e) {
      const e2 = this.batchResizeObserver.getMetadata(o.target);
      if (e2) switch (e2.type) {
        case "port":
          t.push({
            metadata: e2,
            entry: o
          });
          break;
        case "edge-label":
          n.push({
            metadata: e2,
            entry: o
          });
          break;
        case "node":
          i.push({
            metadata: e2,
            entry: o
          });
          break;
        default:
          throw new Error(UNKNOWN_ELEMENT_TYPE_ERROR(e2.type));
      }
    }
    t.length > 0 && this.processPortBatch(t), n.length > 0 && this.processEdgeLabelBatch(n), i.length > 0 && this.processNodeBatch(i);
  }
  processPortBatch(e) {
    const t = this.flowCoreProvider.provide(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    for (const {
      entry: o,
      metadata: r
    } of e) {
      if ("port" !== r?.type) continue;
      const e2 = this.getBorderBoxSize(o);
      if (!e2) continue;
      const a = this.updatePortsService.getPortData(o.target);
      if (!a) continue;
      const s = t.getNodeById(r.nodeId);
      if (!s) continue;
      n.has(r.nodeId) || n.set(r.nodeId, new Map((s.measuredPorts ?? []).map((e3) => [e3.id, e3])));
      const d = n.get(r.nodeId).get(r.portId);
      d?.size && !this.isSizeChanged(d.size, e2) && d?.position && !this.isPositionChanged(d.position, a.position) || (i.has(r.nodeId) || i.set(r.nodeId, []), i.get(r.nodeId).push({
        id: r.portId,
        size: e2,
        position: a.position
      }));
    }
    i.forEach((e2, n2) => {
      t.updater.applyPortChanges(n2, toPortUpdates(e2));
    });
  }
  processNodeBatch(e) {
    const t = this.flowCoreProvider.provide(), n = t.actionStateManager.isResizing(), i = [];
    for (const {
      entry: o,
      metadata: r
    } of e) {
      if ("node" !== r?.type) continue;
      const e2 = this.getBorderBoxSize(o);
      if (!e2) continue;
      const a = t.getNodeById(r.nodeId);
      if (a && (!a.size || this.isSizeChanged(a.size, e2)) && (i.push({
        id: r.nodeId,
        size: e2
      }), !n)) {
        const e3 = this.updatePortsService.getNodePortsData(r.nodeId);
        t.updater.applyPortChanges(r.nodeId, toPortUpdates(e3));
      }
    }
    i.length > 0 && t.updater.applyNodeSizes(i);
  }
  processEdgeLabelBatch(e) {
    const t = this.flowCoreProvider.provide(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
    for (const {
      entry: o,
      metadata: r
    } of e) {
      if ("edge-label" !== r?.type) continue;
      const e2 = this.getBorderBoxSize(o);
      if (!e2) continue;
      const a = t.getEdgeById(r.edgeId);
      if (!a) continue;
      n.has(r.edgeId) || n.set(r.edgeId, new Map((a.measuredLabels ?? []).map((e3) => [e3.id, e3.size])));
      const s = n.get(r.edgeId).get(r.labelId);
      s && !this.isSizeChanged(s, e2) || (i.has(r.edgeId) || i.set(r.edgeId, []), i.get(r.edgeId).push({
        labelId: r.labelId,
        size: e2
      }));
    }
    i.forEach((e2, n2) => {
      t.updater.applyEdgeLabelChanges(n2, e2.map(({
        labelId: e3,
        size: t2
      }) => ({
        labelId: e3,
        labelChanges: {
          size: t2
        }
      })));
    });
  }
  getBorderBoxSize(e) {
    const [t] = e.borderBoxSize;
    return t ? {
      width: t.inlineSize,
      height: t.blockSize
    } : null;
  }
  isSizeChanged(e, t) {
    return Math.abs(e.width - t.width) > 1 || Math.abs(e.height - t.height) > 1;
  }
  isPositionChanged(e, t) {
    return Math.abs(e.x - t.x) > 1 || Math.abs(e.y - t.y) > 1;
  }
  static "ɵfac" = function FlowResizeBatchProcessorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlowResizeBatchProcessorService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _FlowResizeBatchProcessorService,
    factory: _FlowResizeBatchProcessorService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlowResizeBatchProcessorService, [{
    type: Injectable
  }], null, null);
})();
var PaletteService = class _PaletteService {
  draggedNode = signal(null);
  previewId = signal(null);
  onMouseDown(e, t) {
    this.draggedNode.set(e), this.previewId.set(t);
  }
  onDragStartFromPalette(e, t) {
    e.dataTransfer && e.dataTransfer?.setData("text/plain", JSON.stringify(t));
  }
  static "ɵfac" = function PaletteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaletteService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _PaletteService,
    factory: _PaletteService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaletteService, [{
    type: Injectable
  }], null, null);
})();
var NgDiagramBaseService = class {
  flowCoreProvider = inject(FlowCoreProviderService);
  get flowCore() {
    return this.flowCoreProvider.provide();
  }
};
var NgDiagramViewportService = class extends NgDiagramBaseService {
  renderer = inject(RendererService);
  viewport = computed(() => this.renderer.viewport() || {
    x: 0,
    y: 0,
    scale: 1
  });
  scale = computed(() => this.renderer.viewport().scale || 1);
  get minZoom() {
    return this.flowCore.config.zoom.min;
  }
  get maxZoom() {
    return this.flowCore.config.zoom.max;
  }
  canZoomIn = computed(() => this.scale() < this.maxZoom);
  canZoomOut = computed(() => this.scale() > this.minZoom);
  clientToFlowPosition(e) {
    return this.flowCore.clientToFlowPosition(e);
  }
  clientToFlowViewportPosition(e) {
    return this.flowCore.clientToFlowViewportPosition(e);
  }
  flowToClientPosition(e) {
    return this.flowCore.flowToClientPosition(e);
  }
  moveViewport(e, t) {
    this.flowCore.commandHandler.emit("moveViewport", {
      x: e,
      y: t
    });
  }
  moveViewportBy(e, t) {
    this.flowCore.commandHandler.emit("moveViewportBy", {
      x: e,
      y: t
    });
  }
  setViewport(e, t, n) {
    const {
      min: i,
      max: o
    } = this.flowCore.config.zoom;
    (n < i || n > o) && console.warn(`[ngDiagram] setViewport: scale ${n} is outside configured bounds [${i}, ${o}] and will be clamped.`);
    const r = Math.max(i, Math.min(o, n));
    this.flowCore.commandHandler.emit("zoom", {
      scale: r,
      x: e,
      y: t
    });
  }
  zoom(e, t) {
    const n = this.scale() * e, i = t?.x ?? this.viewport().x, o = t?.y ?? this.viewport().y;
    this.flowCore.commandHandler.emit("zoom", {
      scale: n,
      x: i,
      y: o
    });
  }
  zoomToFit(e) {
    this.flowCore.commandHandler.emit("zoomToFit", e ?? {});
  }
  centerOnNode(e) {
    this.flowCore.commandHandler.emit("centerOnNode", {
      nodeOrId: e
    });
  }
  centerOnRect(e) {
    this.flowCore.commandHandler.emit("centerOnRect", {
      rect: e
    });
  }
};
var BackgroundPatternBase = class {
  viewportService = inject(NgDiagramViewportService);
  viewport = this.viewportService.viewport;
  randomHash = Math.random().toString(36).substring(2, 10);
  size = computed(() => {
    const e = this.backgroundPattern(), t = e?.nativeElement.getAttribute("staticWidth");
    return Number(t) * this.viewport().scale;
  });
  fill = computed(() => this.viewport().scale > 0.3 ? "var(--ngd-background-dot-color)" : "none");
  fillOpacity = computed(() => this.viewport().scale - 0.2);
  patternTransform = computed(() => {
    const e = this.size(), t = this.viewport();
    return `translate(${e ? t.x % e : 0},${e ? t.y % e : 0})`;
  });
};
var DottedBackgroundComponent = class _DottedBackgroundComponent extends BackgroundPatternBase {
  flowCoreService = inject(FlowCoreProviderService);
  diagramService = inject(NgDiagramService);
  backgroundPattern = viewChild("backgroundPattern");
  dotSpacing = computed(() => {
    const e = this.diagramService.config().background;
    return this.flowCoreService.isInitialized() && e ? e.dotSpacing : 0;
  });
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵDottedBackgroundComponent_BaseFactory;
    return function DottedBackgroundComponent_Factory(__ngFactoryType__) {
      return (ɵDottedBackgroundComponent_BaseFactory || (ɵDottedBackgroundComponent_BaseFactory = ɵɵgetInheritedFactory(_DottedBackgroundComponent)))(__ngFactoryType__ || _DottedBackgroundComponent);
    };
  })();
  static "ɵcmp" = ɵɵdefineComponent({
    type: _DottedBackgroundComponent,
    selectors: [["ng-diagram-dotted-background"]],
    viewQuery: function DottedBackgroundComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuerySignal(ctx.backgroundPattern, _c0, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 5,
    vars: 9,
    consts: [["backgroundPattern", ""], [1, "dotted-background"], ["x", "0", "y", "0", "patternUnits", "userSpaceOnUse", 3, "id"], ["r", "1", "cx", "1", "cy", "1"], ["width", "100%", "height", "100%", "x", "0", "y", "0"]],
    template: function DottedBackgroundComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵdomElementStart(0, "svg", 1)(1, "pattern", 2, 0);
        ɵɵdomElement(3, "circle", 3);
        ɵɵdomElementEnd();
        ɵɵdomElement(4, "rect", 4);
        ɵɵdomElementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵdomProperty("id", ɵɵinterpolate1("ng-diagram-background", ctx.randomHash));
        ɵɵattribute("fill", ctx.fill())("staticWidth", ctx.dotSpacing())("width", ctx.size() || ctx.dotSpacing())("height", ctx.size() || ctx.dotSpacing())("patternTransform", ctx.patternTransform())("fill-opacity", ctx.fillOpacity());
        ɵɵadvance(3);
        ɵɵattribute("fill", "url(#ng-diagram-background" + ctx.randomHash + ")");
      }
    },
    styles: ["[_nghost-%COMP%]   .dotted-background[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none}"],
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DottedBackgroundComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-dotted-background",
      standalone: true,
      template: `<svg class="dotted-background">
  <pattern
    #backgroundPattern
    id="ng-diagram-background{{ randomHash }}"
    [attr.fill]="fill()"
    [attr.staticWidth]="dotSpacing()"
    [attr.width]="size() || dotSpacing()"
    [attr.height]="size() || dotSpacing()"
    [attr.patternTransform]="patternTransform()"
    [attr.fill-opacity]="fillOpacity()"
    x="0"
    y="0"
    patternUnits="userSpaceOnUse"
  >
    <circle r="1" cx="1" cy="1"></circle>
  </pattern>
  <rect [attr.fill]="'url(#ng-diagram-background' + randomHash + ')'" width="100%" height="100%" x="0" y="0"></rect>
</svg>
`,
      styles: [":host .dotted-background{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none}\n"]
    }]
  }], null, null);
})();
var NgDiagramGridBackgroundComponent = class _NgDiagramGridBackgroundComponent extends BackgroundPatternBase {
  flowCore = inject(FlowCoreProviderService);
  diagramService = inject(NgDiagramService);
  backgroundPattern = viewChild("backgroundPattern");
  cellSize = computed(() => {
    const e = {
      width: 10,
      height: 10
    };
    if (!this.flowCore.isInitialized()) return e;
    const t = this.diagramService.config().background?.cellSize;
    return t ?? e;
  });
  majorLinesFrequency = computed(() => {
    const e = {
      x: 5,
      y: 5
    };
    if (!this.flowCore.isInitialized()) return e;
    const t = this.diagramService.config().background?.majorLinesFrequency;
    return t ?? e;
  });
  patternSize = computed(() => {
    const e = this.cellSize(), t = this.majorLinesFrequency();
    return {
      width: e.width * t.x,
      height: e.height * t.y
    };
  });
  patternTransform = computed(() => {
    const e = this.viewport(), t = e.scale ?? 1, n = this.patternSize();
    return `translate(${n.width ? e.x % (n.width * t) : 0}, ${n.height ? e.y % (n.height * t) : 0}) scale(${t})`;
  });
  gridLines() {
    const e = this.cellSize(), t = this.patternSize(), n = [];
    for (let i = 0; i <= t.width; i += e.width) n.push({
      x1: i,
      y1: 0,
      x2: i,
      y2: t.height,
      major: i % t.width === 0
    });
    for (let i = 0; i <= t.height; i += e.height) n.push({
      x1: 0,
      y1: i,
      x2: t.width,
      y2: i,
      major: i % t.height === 0
    });
    return n;
  }
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵNgDiagramGridBackgroundComponent_BaseFactory;
    return function NgDiagramGridBackgroundComponent_Factory(__ngFactoryType__) {
      return (ɵNgDiagramGridBackgroundComponent_BaseFactory || (ɵNgDiagramGridBackgroundComponent_BaseFactory = ɵɵgetInheritedFactory(_NgDiagramGridBackgroundComponent)))(__ngFactoryType__ || _NgDiagramGridBackgroundComponent);
    };
  })();
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramGridBackgroundComponent,
    selectors: [["ng-diagram-grid-background"]],
    viewQuery: function NgDiagramGridBackgroundComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuerySignal(ctx.backgroundPattern, _c0, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 6,
    vars: 7,
    consts: [["backgroundPattern", ""], [1, "grid-background"], ["patternUnits", "userSpaceOnUse", 3, "id"], ["width", "100%", "height", "100%", "x", "0", "y", "0"]],
    template: function NgDiagramGridBackgroundComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵdomElementStart(0, "svg", 1)(1, "pattern", 2, 0);
        ɵɵrepeaterCreate(3, NgDiagramGridBackgroundComponent_For_4_Template, 1, 7, ":svg:line", null, ɵɵrepeaterTrackByIndex);
        ɵɵdomElementEnd();
        ɵɵdomElement(5, "rect", 3);
        ɵɵdomElementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵdomProperty("id", ɵɵinterpolate1("ng-diagram-background", ctx.randomHash));
        ɵɵattribute("staticWidth", ctx.patternSize().width)("width", ctx.patternSize().width)("height", ctx.patternSize().height)("patternTransform", ctx.patternTransform());
        ɵɵadvance(2);
        ɵɵrepeater(ctx.gridLines());
        ɵɵadvance(2);
        ɵɵattribute("fill", "url(#ng-diagram-background" + ctx.randomHash + ")");
      }
    },
    styles: [".grid-background[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none}.grid-background[_ngcontent-%COMP%]   [stroke][_ngcontent-%COMP%]{vector-effect:non-scaling-stroke}"],
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramGridBackgroundComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-grid-background",
      standalone: true,
      template: `<svg class="grid-background">
  <pattern
    #backgroundPattern
    id="ng-diagram-background{{ randomHash }}"
    [attr.staticWidth]="patternSize().width"
    [attr.width]="patternSize().width"
    [attr.height]="patternSize().height"
    [attr.patternTransform]="patternTransform()"
    patternUnits="userSpaceOnUse"
  >
    @for (line of gridLines(); track $index) {
      <line
        [attr.x1]="line.x1"
        [attr.y1]="line.y1"
        [attr.x2]="line.x2"
        [attr.y2]="line.y2"
        [attr.stroke]="line.major ? 'var(--ngd-background-line-major-color)' : 'var(--ngd-background-line-minor-color)'"
        [attr.stroke-width]="
          line.major ? 'var(--ngd-background-line-major-width)' : 'var(--ngd-background-line-minor-width)'
        "
        [attr.opacity]="
          line.major ? 'var(--ngd-background-line-major-opacity)' : 'var(--ngd-background-line-minor-opacity)'
        "
      ></line>
    }
  </pattern>

  <rect [attr.fill]="'url(#ng-diagram-background' + randomHash + ')'" width="100%" height="100%" x="0" y="0"></rect>
</svg>
`,
      styles: [".grid-background{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none}.grid-background [stroke]{vector-effect:non-scaling-stroke}\n"]
    }]
  }], null, null);
})();
var NgDiagramBackgroundComponent = class _NgDiagramBackgroundComponent {
  custom = viewChild("contentProjection");
  type = input("dots");
  hasContent = false;
  isDottedBackground = computed(() => "dots" === this.type());
  ngAfterContentInit() {
    this.hasContent = (this.custom()?.nativeElement?.childNodes?.length ?? 0) > 0;
  }
  static "ɵfac" = function NgDiagramBackgroundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramBackgroundComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramBackgroundComponent,
    selectors: [["ng-diagram-background"]],
    viewQuery: function NgDiagramBackgroundComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuerySignal(ctx.custom, _c1, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
      }
    },
    inputs: {
      type: [1, "type"]
    },
    ngContentSelectors: _c2,
    decls: 4,
    vars: 1,
    consts: [["contentProjection", ""], [1, "content-projection"]],
    template: function NgDiagramBackgroundComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵprojection(2);
        ɵɵelementEnd();
        ɵɵconditionalCreate(3, NgDiagramBackgroundComponent_Conditional_3_Template, 3, 1, "div");
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵconditional(!ctx.hasContent ? 3 : -1);
      }
    },
    dependencies: [DottedBackgroundComponent, NgDiagramGridBackgroundComponent],
    styles: [".content-projection[_ngcontent-%COMP%]:not(:empty){width:100%;height:100%}"],
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramBackgroundComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-background",
      standalone: true,
      imports: [DottedBackgroundComponent, NgDiagramGridBackgroundComponent],
      template: '<div #contentProjection class="content-projection">\n  <ng-content></ng-content>\n</div>\n@if (!hasContent) {\n  <div>\n    @if (isDottedBackground()) {\n      <ng-diagram-dotted-background />\n    } @else {\n      <ng-diagram-grid-background />\n    }\n  </div>\n}\n',
      styles: [".content-projection:not(:empty){width:100%;height:100%}\n"]
    }]
  }], null, null);
})();
var CursorPositionTrackerService = class _CursorPositionTrackerService {
  _lastPosition = {
    x: 0,
    y: 0,
    timestamp: 0
  };
  updatePosition(e, t) {
    this._lastPosition = {
      x: e,
      y: t,
      timestamp: Date.now()
    };
  }
  getLastPosition() {
    return __spreadValues({}, this._lastPosition);
  }
  hasRecentPosition() {
    return Date.now() - this._lastPosition.timestamp < 5e3;
  }
  static "ɵfac" = function CursorPositionTrackerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CursorPositionTrackerService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _CursorPositionTrackerService,
    factory: _CursorPositionTrackerService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CursorPositionTrackerService, [{
    type: Injectable
  }], null, null);
})();
var CursorPositionTrackerDirective = class _CursorPositionTrackerDirective {
  cursorPositionService = inject(CursorPositionTrackerService);
  onMouseMove(e) {
    this.cursorPositionService.updatePosition(e.clientX, e.clientY);
  }
  static "ɵfac" = function CursorPositionTrackerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CursorPositionTrackerDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _CursorPositionTrackerDirective,
    selectors: [["", "ngDiagramCursorPositionTracker", ""]],
    hostBindings: function CursorPositionTrackerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("mousemove", function CursorPositionTrackerDirective_mousemove_HostBindingHandler($event) {
          return ctx.onMouseMove($event);
        }, ɵɵresolveDocument);
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CursorPositionTrackerDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramCursorPositionTracker]",
      standalone: true,
      host: {
        "(document:mousemove)": "onMouseMove($event)"
      }
    }]
  }], null, null);
})();
var NgDiagramGroupHighlightedDirective = class _NgDiagramGroupHighlightedDirective {
  node = input.required();
  highlighted = computed(() => this.node().highlighted ?? false);
  static "ɵfac" = function NgDiagramGroupHighlightedDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramGroupHighlightedDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _NgDiagramGroupHighlightedDirective,
    selectors: [["", "ngDiagramGroupHighlighted", ""]],
    hostVars: 4,
    hostBindings: function NgDiagramGroupHighlightedDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ng-diagram-group-highlight", ctx.highlighted())("ng-diagram-node-wrapper", true);
      }
    },
    inputs: {
      node: [1, "node"]
    }
  });
};
function supportsContextStroke(e) {
  return !isPlatformBrowser(e) || "undefined" == typeof CSS || !CSS.supports || CSS.supports("stroke", "context-stroke");
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramGroupHighlightedDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramGroupHighlighted]",
      standalone: true,
      host: {
        "[class.ng-diagram-group-highlight]": "highlighted()",
        "[class.ng-diagram-node-wrapper]": "true"
      }
    }]
  }], null, null);
})();
var MarkerRegistryService = class _MarkerRegistryService {
  platformId = inject(PLATFORM_ID);
  markers = signal(/* @__PURE__ */ new Map());
  useInlineMarkers = !supportsContextStroke(this.platformId);
  registerMarker(e, t) {
    this.markers.update((n) => {
      const i = new Map(n);
      return i.set(e, t), i;
    });
  }
  unregisterMarker(e) {
    this.markers.update((t) => {
      const n = new Map(t);
      return n.delete(e), n;
    });
  }
  getMarkerUrl(e, t, n) {
    return `url(#${this.useInlineMarkers ? `${e}-${t}-${n}` : e})`;
  }
  cloneMarkerElement(e, t) {
    const n = this.markers().get(e);
    if (!n) return null;
    const i = n.cloneNode(true);
    return i.id = t, this.replaceContextColors(i), i;
  }
  replaceContextColors(e) {
    "context-stroke" === e.getAttribute("stroke") && e.setAttribute("stroke", "currentColor");
    const t = e.getAttribute("fill");
    "context-fill" !== t && "context-stroke" !== t || e.setAttribute("fill", "currentColor");
    for (const t2 of Array.from(e.children)) this.replaceContextColors(t2);
  }
  static "ɵfac" = function MarkerRegistryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarkerRegistryService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _MarkerRegistryService,
    factory: _MarkerRegistryService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarkerRegistryService, [{
    type: Injectable
  }], null, null);
})();
var InlineMarkersDirective = class _InlineMarkersDirective {
  el = inject(ElementRef);
  markerRegistry = inject(MarkerRegistryService);
  destroyRef = inject(DestroyRef);
  sourceMarkerId = input();
  targetMarkerId = input();
  edgeId = input.required();
  sourceMarkerRef = null;
  targetMarkerRef = null;
  constructor() {
    effect(() => {
      this.cleanup(), this.appendMarkers();
    }), this.destroyRef.onDestroy(() => this.cleanup());
  }
  appendMarkers() {
    const e = this.sourceMarkerId();
    if (e) {
      const t2 = `${e}-${this.edgeId()}-source`;
      this.sourceMarkerRef = this.markerRegistry.cloneMarkerElement(e, t2), this.sourceMarkerRef && this.el.nativeElement.appendChild(this.sourceMarkerRef);
    }
    const t = this.targetMarkerId();
    if (t) {
      const e2 = `${t}-${this.edgeId()}-target`;
      this.targetMarkerRef = this.markerRegistry.cloneMarkerElement(t, e2), this.targetMarkerRef && this.el.nativeElement.appendChild(this.targetMarkerRef);
    }
  }
  cleanup() {
    this.sourceMarkerRef?.remove(), this.targetMarkerRef?.remove(), this.sourceMarkerRef = null, this.targetMarkerRef = null;
  }
  static "ɵfac" = function InlineMarkersDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InlineMarkersDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _InlineMarkersDirective,
    selectors: [["", "ngDiagramInlineMarkers", ""]],
    inputs: {
      sourceMarkerId: [1, "sourceMarkerId"],
      targetMarkerId: [1, "targetMarkerId"],
      edgeId: [1, "edgeId"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineMarkersDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramInlineMarkers]",
      standalone: true
    }]
  }], () => [], null);
})();
var MovingAction = class _MovingAction {
  canHandle(e, t) {
    return t.config.nodeDraggingEnabled && e.actionName.startsWith("keyboardMoveSelection") && t.modelLookup.getSelectedNodes().length > 0;
  }
  createEvent(e, t) {
    const n = this.extractDirection(e.actionName);
    return n ? __spreadProps(__spreadValues({}, t), {
      name: "keyboardMoveSelection",
      direction: n
    }) : null;
  }
  extractDirection(e) {
    return e.endsWith("Up") ? "top" : e.endsWith("Down") ? "bottom" : e.endsWith("Left") ? "left" : e.endsWith("Right") ? "right" : null;
  }
  static "ɵfac" = function MovingAction_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MovingAction)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _MovingAction,
    factory: _MovingAction.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MovingAction, [{
    type: Injectable
  }], null, null);
})();
var PanningAction = class _PanningAction {
  canHandle(e, t) {
    return t.config.viewportPanningEnabled && e.actionName.startsWith("keyboardPan") && 0 === t.modelLookup.getSelectedNodes().length;
  }
  createEvent(e, t) {
    const n = this.extractDirection(e.actionName);
    return n ? __spreadProps(__spreadValues({}, t), {
      name: "keyboardPanning",
      direction: n
    }) : null;
  }
  extractDirection(e) {
    return e.endsWith("Up") ? "bottom" : e.endsWith("Down") ? "top" : e.endsWith("Left") ? "right" : e.endsWith("Right") ? "left" : null;
  }
  static "ɵfac" = function PanningAction_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanningAction)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _PanningAction,
    factory: _PanningAction.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanningAction, [{
    type: Injectable
  }], null, null);
})();
var PasteAction = class _PasteAction {
  cursorPositionTracker = inject(CursorPositionTrackerService);
  canHandle(e) {
    return "paste" === e.actionName;
  }
  createEvent(e, t) {
    const n = __spreadProps(__spreadValues({}, t), {
      name: e.actionName
    });
    return this.cursorPositionTracker.hasRecentPosition() && (n.lastInputPoint = this.cursorPositionTracker.getLastPosition()), n;
  }
  static "ɵfac" = function PasteAction_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasteAction)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _PasteAction,
    factory: _PasteAction.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasteAction, [{
    type: Injectable
  }], null, null);
})();
var ZoomAction = class _ZoomAction {
  canHandle(e) {
    return "keyboardZoomIn" === e.actionName || "keyboardZoomOut" === e.actionName;
  }
  createEvent(e, t, n) {
    const i = n.config.zoom.step, o = this.getCenterPoint(n.getViewport()), r = this.extractDirection(e.actionName);
    return r && o ? __spreadProps(__spreadValues({}, t), {
      name: "zoom",
      centerPoint: o,
      zoomFactor: r > 0 ? 1 + i : 1 - i
    }) : null;
  }
  extractDirection(e) {
    return e.endsWith("In") ? 1 : e.endsWith("Out") ? -1 : null;
  }
  getCenterPoint(e) {
    if (e.width && e.height) return {
      x: e.width / 2,
      y: e.height / 2
    };
  }
  static "ɵfac" = function ZoomAction_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoomAction)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _ZoomAction,
    factory: _ZoomAction.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoomAction, [{
    type: Injectable
  }], null, null);
})();
var KeyboardInputsDirective = class _KeyboardInputsDirective {
  flowCoreProvider = inject(FlowCoreProviderService);
  inputEventsRouter = inject(InputEventsRouterService);
  keyboardActions = [inject(PanningAction), inject(MovingAction), inject(PasteAction), inject(ZoomAction)];
  elementRef = inject(ElementRef);
  onPointerDown() {
    this.elementRef.nativeElement.contains(document.activeElement) || this.elementRef.nativeElement.focus();
  }
  onKeyDown(e) {
    if (!this.elementRef.nativeElement.contains(document.activeElement)) return;
    const t = this.flowCoreProvider.provide(), n = this.inputEventsRouter.getBaseEvent(e), i = t.shortcutManager.match({
      key: e.key,
      modifiers: n.modifiers
    });
    if (0 !== i.length && !this.isInputFieldFocused(e)) {
      e.preventDefault();
      for (const e2 of i) {
        const i2 = this.keyboardActions.find((n2) => n2.canHandle(e2, t)), o = i2 && i2.createEvent(e2, n, t);
        o ? this.inputEventsRouter.emit(o) : this.inputEventsRouter.hasHandler(e2.actionName) && this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, n), {
          name: e2.actionName
        }));
      }
    }
  }
  isInputFieldFocused(e) {
    const t = e.composedPath()[0] || e.target;
    return t.hasAttribute("contenteditable") || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName);
  }
  static "ɵfac" = function KeyboardInputsDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KeyboardInputsDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _KeyboardInputsDirective,
    selectors: [["", "ngDiagramKeyboardInputs", ""]],
    hostAttrs: ["tabindex", "0"],
    hostBindings: function KeyboardInputsDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function KeyboardInputsDirective_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        }, ɵɵresolveDocument)("pointerdown", function KeyboardInputsDirective_pointerdown_HostBindingHandler() {
          return ctx.onPointerDown();
        });
      }
    },
    features: [ɵɵProvidersFeature([PanningAction, MovingAction, PasteAction, ZoomAction])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyboardInputsDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramKeyboardInputs]",
      standalone: true,
      providers: [PanningAction, MovingAction, PasteAction, ZoomAction],
      host: {
        "(document:keydown)": "onKeyDown($event)",
        "(pointerdown)": "onPointerDown()",
        tabindex: "0"
      }
    }]
  }], null, null);
})();
var LinkingEventService = class _LinkingEventService {
  inputEventsRouter = inject(InputEventsRouterService);
  emitStart(e, t, n) {
    const i = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, i), {
      name: "linking",
      phase: "start",
      target: t,
      targetType: "node",
      portId: n,
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    }));
  }
  emitContinue(e, t, n, i = null) {
    const o = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, o), {
      name: "linking",
      phase: "continue",
      target: t,
      targetType: "node",
      portId: n,
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      },
      panningForce: i
    }));
  }
  emitEnd(e, t, n) {
    const i = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, i), {
      name: "linking",
      phase: "end",
      target: t,
      targetType: "node",
      portId: n,
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    }));
  }
  static "ɵfac" = function LinkingEventService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LinkingEventService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _LinkingEventService,
    factory: _LinkingEventService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinkingEventService, [{
    type: Injectable
  }], null, null);
})();
var NgDiagramEdgeTemplateMap = class extends Map {
};
var NgDiagramNodeTemplateMap = class extends Map {
};
var DiagramEventName;
!(function(e) {
  e.Rotate = "rotate", e.Resize = "resize", e.Move = "move", e.BoxSelection = "box-selection", e.Linking = "linking", e.Panning = "panning", e.Zooming = "zooming";
})(DiagramEventName || (DiagramEventName = {}));
var TouchEventsStateService = class _TouchEventsStateService {
  currentEvent = signal(null);
  clearCurrentEvent() {
    this.currentEvent.set(null);
  }
  rotateHandled() {
    return this.currentEvent() === DiagramEventName.Rotate;
  }
  resizeHandled() {
    return this.currentEvent() === DiagramEventName.Resize;
  }
  moveHandled() {
    return this.currentEvent() === DiagramEventName.Move;
  }
  boxSelectionHandled() {
    return this.currentEvent() === DiagramEventName.BoxSelection;
  }
  linkingHandled() {
    return this.currentEvent() === DiagramEventName.Linking;
  }
  panningHandled() {
    return this.currentEvent() === DiagramEventName.Panning;
  }
  zoomingHandled() {
    return this.currentEvent() === DiagramEventName.Zooming;
  }
  static "ɵfac" = function TouchEventsStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TouchEventsStateService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _TouchEventsStateService,
    factory: _TouchEventsStateService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TouchEventsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LinkingInputDirective = class _LinkingInputDirective {
  linkingEventService = inject(LinkingEventService);
  flowCoreProviderService = inject(FlowCoreProviderService);
  touchEventsStateService = inject(TouchEventsStateService);
  target = signal(void 0);
  edgePanningInterval = null;
  portId = input.required();
  ngOnDestroy() {
    this.cleanup();
  }
  setTargetNode(e) {
    this.target.set(e);
  }
  onPointerDown(e) {
    this.shouldHandle(e) && (e.linkingHandled = true, this.touchEventsStateService.currentEvent.set(DiagramEventName.Linking), document.addEventListener("pointermove", this.onPointerMove), document.addEventListener("pointerup", this.onPointerUp), this.linkingEventService.emitStart(e, this.target(), this.portId()));
  }
  onPointerMove = (e) => {
    if (this.touchEventsStateService.panningHandled() || this.touchEventsStateService.zoomingHandled()) return void this.onPointerUp(e);
    const {
      edgePanningThreshold: t,
      edgePanningEnabled: n,
      edgePanningForce: i
    } = this.flowCoreProviderService.provide().config.linking, o = this.flowCoreProviderService.provide();
    let r = null;
    if (n) {
      const {
        width: n2,
        height: a
      } = o.getViewport(), {
        x: s,
        y: d
      } = o.getFlowOffset();
      r = NgDiagramMath.calculateEdgePanningForce({
        x: s,
        y: d,
        width: n2 ?? 0,
        height: a ?? 0
      }, {
        x: e.clientX,
        y: e.clientY
      }, t, i), r ? this.startEdgePanning(e, r) : this.stopEdgePanning();
    }
    this.linkingEventService.emitContinue(e, this.target(), this.portId(), r);
  };
  onPointerUp = (e) => {
    this.linkingEventService.emitEnd(e, this.target(), this.portId()), this.cleanup();
  };
  shouldHandle(e) {
    return this.flowCoreProviderService.provide().actionStateManager.isLinking() ? (this.target.set(void 0), false) : !(e.boxSelectionHandled || this.touchEventsStateService.panningHandled() || this.touchEventsStateService.zoomingHandled());
  }
  cleanup() {
    this.touchEventsStateService.clearCurrentEvent(), document.removeEventListener("pointermove", this.onPointerMove), document.removeEventListener("pointerup", this.onPointerUp), this.stopEdgePanning();
  }
  startEdgePanning(e, t) {
    this.stopEdgePanning(), this.edgePanningInterval = window.setInterval(() => {
      this.linkingEventService.emitContinue(e, this.target(), this.portId(), t);
    }, FPS_60);
  }
  stopEdgePanning() {
    null != this.edgePanningInterval && (window.clearInterval(this.edgePanningInterval), this.edgePanningInterval = null);
  }
  static "ɵfac" = function LinkingInputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LinkingInputDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _LinkingInputDirective,
    selectors: [["", "ngDiagramLinkingInput", ""]],
    hostBindings: function LinkingInputDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("pointerdown", function LinkingInputDirective_pointerdown_HostBindingHandler($event) {
          return ctx.onPointerDown($event);
        });
      }
    },
    inputs: {
      portId: [1, "portId"]
    },
    features: [ɵɵProvidersFeature([LinkingEventService])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinkingInputDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramLinkingInput]",
      standalone: true,
      host: {
        "(pointerdown)": "onPointerDown($event)"
      },
      providers: [LinkingEventService]
    }]
  }], null, null);
})();
var ObjectSelectionDirective = class _ObjectSelectionDirective {
  inputEventsRouter = inject(InputEventsRouterService);
  flowCoreProvider = inject(FlowCoreProviderService);
  targetData = input.required();
  ngOnDestroy() {
    document.removeEventListener("pointerup", this.onPointerUp);
  }
  onPointerDown(e) {
    if (!this.shouldHandle(e)) return;
    e.selectHandled = true;
    const t = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, t), {
      name: "select",
      phase: "start",
      target: this.targetData(),
      targetType: this.targetType,
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    })), document.addEventListener("pointerup", this.onPointerUp);
  }
  onPointerUp = (e) => {
    document.removeEventListener("pointerup", this.onPointerUp);
    const t = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, t), {
      name: "select",
      phase: "end",
      target: this.targetData(),
      targetType: this.targetType,
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    }));
  };
  shouldHandle(e) {
    return !(!this.inputEventsRouter.eventGuards.withPrimaryButton(e) || e.boxSelectionHandled || e.selectHandled || e.linkingHandled && !this.flowCoreProvider.provide().config.linking.selectNodeOnPortPress);
  }
  static "ɵfac" = function ObjectSelectionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObjectSelectionDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _ObjectSelectionDirective,
    hostBindings: function ObjectSelectionDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("pointerdown", function ObjectSelectionDirective_pointerdown_HostBindingHandler($event) {
          return ctx.onPointerDown($event);
        });
      }
    },
    inputs: {
      targetData: [1, "targetData"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObjectSelectionDirective, [{
    type: Directive
  }], null, {
    onPointerDown: [{
      type: HostListener,
      args: ["pointerdown", ["$event"]]
    }]
  });
})();
var DiagramSelectionDirective = class _DiagramSelectionDirective extends ObjectSelectionDirective {
  targetType = "diagram";
  targetData = input();
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵDiagramSelectionDirective_BaseFactory;
    return function DiagramSelectionDirective_Factory(__ngFactoryType__) {
      return (ɵDiagramSelectionDirective_BaseFactory || (ɵDiagramSelectionDirective_BaseFactory = ɵɵgetInheritedFactory(_DiagramSelectionDirective)))(__ngFactoryType__ || _DiagramSelectionDirective);
    };
  })();
  static "ɵdir" = ɵɵdefineDirective({
    type: _DiagramSelectionDirective,
    inputs: {
      targetData: [1, "targetData"]
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiagramSelectionDirective, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();
var EdgeSelectionDirective = class _EdgeSelectionDirective extends ObjectSelectionDirective {
  targetType = "edge";
  targetData = input.required();
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵEdgeSelectionDirective_BaseFactory;
    return function EdgeSelectionDirective_Factory(__ngFactoryType__) {
      return (ɵEdgeSelectionDirective_BaseFactory || (ɵEdgeSelectionDirective_BaseFactory = ɵɵgetInheritedFactory(_EdgeSelectionDirective)))(__ngFactoryType__ || _EdgeSelectionDirective);
    };
  })();
  static "ɵdir" = ɵɵdefineDirective({
    type: _EdgeSelectionDirective,
    inputs: {
      targetData: [1, "targetData"]
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EdgeSelectionDirective, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();
var NodeSelectionDirective = class _NodeSelectionDirective extends ObjectSelectionDirective {
  targetType = "node";
  targetData = input.required();
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵNodeSelectionDirective_BaseFactory;
    return function NodeSelectionDirective_Factory(__ngFactoryType__) {
      return (ɵNodeSelectionDirective_BaseFactory || (ɵNodeSelectionDirective_BaseFactory = ɵɵgetInheritedFactory(_NodeSelectionDirective)))(__ngFactoryType__ || _NodeSelectionDirective);
    };
  })();
  static "ɵdir" = ɵɵdefineDirective({
    type: _NodeSelectionDirective,
    inputs: {
      targetData: [1, "targetData"]
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeSelectionDirective, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();
var PALETTE_DROP_JSON_PARSE_ERROR = (e, t) => `[ngDiagram] Failed to parse palette drop data as JSON.

Received data: "${e}"
Error: ${t instanceof Error ? t.message : String(t)}

Note: This error typically occurs when implementing custom drag-and-drop functionality.
The built-in palette component handles data serialization correctly.

To fix custom implementations:
  • Ensure the dragged data is valid JSON format
  • Use JSON.stringify() when setting the drag data
  • Example: event.dataTransfer.setData('text/plain', JSON.stringify({ type: 'node', data: {...} }))

The palette drop event will continue with empty data object.

Documentation: https://www.ngdiagram.dev/docs/guides/palette/
`;
var PALETTE_DROP_NOT_NODE_ERROR = () => '[ngDiagram] Invalid drop data: expected type "NgDiagramPaletteItem".\n\nReceived data: "UNKNOWN"\n\nTo fix this error:\n  • Ensure the dragged data is of type "NgDiagramPaletteItem" and is dragged from a valid palette item.\n\nThe palette drop event will continue with empty data object.\n\nDocumentation: https://www.ngdiagram.dev/docs/guides/palette/\n';
var PaletteDropDirective = class _PaletteDropDirective {
  inputEventsRouterService = inject(InputEventsRouterService);
  paletteService = inject(PaletteService);
  el = inject(ElementRef);
  touchMoveListener = (e) => this.onGlobalTouchMove(e);
  touchEndListener = (e) => this.onGlobalTouchEnd(e);
  ngOnInit() {
    document.addEventListener("touchmove", this.touchMoveListener, {
      passive: false
    }), document.addEventListener("touchend", this.touchEndListener, {
      passive: false
    });
  }
  ngOnDestroy() {
    document.removeEventListener("touchmove", this.touchMoveListener), document.removeEventListener("touchend", this.touchEndListener);
  }
  onDrop(e) {
    e.preventDefault();
    const t = e.dataTransfer?.getData("text/plain"), n = this.inputEventsRouterService.getBaseEvent(e);
    let i = {};
    if (t) try {
      i = JSON.parse(t);
    } catch (e2) {
      return this.paletteService.draggedNode() ? console.error(PALETTE_DROP_JSON_PARSE_ERROR(t, e2)) : console.warn(PALETTE_DROP_NOT_NODE_ERROR());
    }
    this.inputEventsRouterService.emit(__spreadProps(__spreadValues({}, n), {
      name: "paletteDrop",
      data: i,
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    })), this.paletteService.draggedNode.set(null), this.paletteService.previewId.set(null);
  }
  onDragOver(e) {
    e.preventDefault();
  }
  onGlobalTouchMove(e) {
    this.paletteService.draggedNode() && e.preventDefault();
  }
  onGlobalTouchEnd(e) {
    const t = this.paletteService.draggedNode();
    if (!t) return;
    const n = e.changedTouches[0];
    if (!n) return;
    const i = this.el.nativeElement, o = document.elementFromPoint(n.clientX, n.clientY);
    if (!o || !i.contains(o)) return this.paletteService.draggedNode.set(null), void this.paletteService.previewId.set(null);
    const r = this.inputEventsRouterService.getBaseEvent(e);
    this.inputEventsRouterService.emit(__spreadProps(__spreadValues({}, r), {
      name: "paletteDrop",
      data: t,
      lastInputPoint: {
        x: n.clientX,
        y: n.clientY
      }
    })), this.paletteService.draggedNode.set(null), this.paletteService.previewId.set(null), e.preventDefault(), e.stopPropagation();
  }
  static "ɵfac" = function PaletteDropDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaletteDropDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _PaletteDropDirective,
    selectors: [["", "ngDiagramPaletteDrop", ""]],
    hostBindings: function PaletteDropDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("drop", function PaletteDropDirective_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        })("dragover", function PaletteDropDirective_dragover_HostBindingHandler($event) {
          return ctx.onDragOver($event);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaletteDropDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramPaletteDrop]",
      standalone: true,
      host: {
        "(drop)": "onDrop($event)",
        "(dragover)": "onDragOver($event)"
      }
    }]
  }], null, null);
})();
var ManualLinkingService = class _ManualLinkingService {
  linkingEventService = inject(LinkingEventService);
  cursorPositionTrackerService = inject(CursorPositionTrackerService);
  node;
  portId;
  startLinking(e, t) {
    this.node = e, this.portId = t;
    const n = this.cursorPositionTrackerService.getLastPosition();
    this.linkingEventService.emitStart({
      clientX: n.x,
      clientY: n.y
    }, e, t), document.addEventListener("pointermove", this.onPointerMove), document.addEventListener("click", this.onDocumentClick, true), document.addEventListener("touchmove", this.onTouchMove, {
      passive: false
    }), document.addEventListener("touchend", this.onTouchEnd, {
      passive: false
    });
  }
  onPointerMove = (e) => {
    "touch" !== e.pointerType && this.linkingEventService.emitContinue(e);
  };
  onTouchMove = (e) => {
    if (1 !== e.touches.length) return;
    e.preventDefault();
    const t = e.touches[0];
    this.linkingEventService.emitContinue({
      clientX: t.clientX,
      clientY: t.clientY
    });
  };
  onTouchEnd = (e) => {
    e.preventDefault();
    const t = e.changedTouches[0], n = {
      clientX: t.clientX,
      clientY: t.clientY
    };
    this.cleanup(), this.linkingEventService.emitEnd(n, this.node, this.portId);
  };
  onDocumentClick = (e) => {
    this.cleanup(), this.linkingEventService.emitEnd(e, this.node, this.portId);
  };
  cleanup() {
    document.removeEventListener("pointermove", this.onPointerMove), document.removeEventListener("click", this.onDocumentClick, true), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd);
  }
  static "ɵfac" = function ManualLinkingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManualLinkingService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _ManualLinkingService,
    factory: _ManualLinkingService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManualLinkingService, [{
    type: Injectable
  }], null, null);
})();
var NgDiagramService = class _NgDiagramService extends NgDiagramBaseService {
  manualLinkingService = inject(ManualLinkingService);
  batchResizeObserver = inject(BatchResizeObserverService);
  renderer = inject(RendererService);
  isInitialized = this.renderer.isInitialized.asReadonly();
  config$ = signal({});
  config = this.config$.asReadonly();
  actionState$ = signal({});
  actionState = this.actionState$.asReadonly();
  constructor() {
    super(), effect(() => {
      this.isInitialized() && untracked(() => {
        this.config$.set(this.flowCore.config);
      });
    }), effect((e) => {
      if (!this.isInitialized()) return;
      const t = this.flowCore.eventManager.on("actionStateChanged", (e2) => {
        untracked(() => {
          this.actionState$.set(e2.actionState);
        });
      });
      e(() => t());
    });
  }
  updateConfig(e) {
    this.flowCore.updateConfig(e), this.config$.set(this.flowCore.config);
  }
  getEnvironment() {
    return this.flowCore.getEnvironment();
  }
  registerMiddleware(e) {
    return this.flowCore.registerMiddleware(e);
  }
  unregisterMiddleware(e) {
    this.flowCore.unregisterMiddleware(e);
  }
  registerRouting(e) {
    this.flowCore.edgeRoutingManager.registerRouting(e);
  }
  unregisterRouting(e) {
    this.flowCore.edgeRoutingManager.unregisterRouting(e);
  }
  getRegisteredRoutings() {
    return this.flowCore.edgeRoutingManager.getRegisteredRoutings();
  }
  setDefaultRouting(e) {
    this.flowCore.edgeRoutingManager.setDefaultRouting(e);
  }
  getDefaultRouting() {
    return this.flowCore.edgeRoutingManager.getDefaultRouting();
  }
  startLinking(e, t) {
    this.manualLinkingService.startLinking(e, t);
  }
  addEventListener(e, t) {
    return this.flowCore.eventManager.on(e, t);
  }
  addEventListenerOnce(e, t) {
    return this.flowCore.eventManager.once(e, t);
  }
  removeEventListener(e, t) {
    this.flowCore.eventManager.off(e, t);
  }
  removeAllEventListeners() {
    this.flowCore.eventManager.offAll();
  }
  setEventsEnabled(e) {
    this.flowCore.eventManager.setEnabled(e);
  }
  areEventsEnabled() {
    return this.flowCore.eventManager.isEnabled();
  }
  hasEventListeners(e) {
    return this.flowCore.eventManager.hasListeners(e);
  }
  transaction(e, t) {
    let n = false;
    const i = this.flowCore.transaction(() => {
      const t2 = e();
      return t2 instanceof Promise && (n = true), t2;
    }, t ?? {});
    if (t || n) return i;
  }
  invalidateMeasurements(e) {
    if (e) {
      if (e.nodes) for (const {
        nodeId: t
      } of e.nodes) this.batchResizeObserver.invalidateNode(t);
      if (e.edges) for (const {
        edgeId: t
      } of e.edges) this.batchResizeObserver.invalidateEdgeLabels(t);
    } else this.batchResizeObserver.invalidateAll();
  }
  static "ɵfac" = function NgDiagramService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _NgDiagramService,
    factory: _NgDiagramService.ɵfac
  });
};
function shouldDiscardEvent(e, t) {
  const n = getDiscardEventSelector(t);
  return !!(e.target && e.target instanceof HTMLElement) && e.target.closest(n);
}
function getDiscardEventSelector(e) {
  return `[data-no-${e}="true"]`;
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramService, [{
    type: Injectable
  }], () => [], null);
})();
var PanningDirective = class _PanningDirective {
  inputEventsRouter = inject(InputEventsRouterService);
  elementRef = inject(ElementRef);
  diagramService = inject(NgDiagramService);
  flowCoreProvider = inject(FlowCoreProviderService);
  ngOnDestroy() {
    document.removeEventListener("pointermove", this.onMouseMove), document.removeEventListener("pointerup", this.onPointerUp);
  }
  onPointerDown(e) {
    if ("touch" === e.pointerType) return;
    if (!this.inputEventsRouter.eventGuards.withPrimaryButton(e) || !this.shouldHandle(e)) return;
    this.toggleGrabbingCursor(true), e.preventDefault(), e.stopPropagation();
    const t = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, t), {
      name: "panning",
      phase: "start",
      target: void 0,
      targetType: "diagram",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    })), document.addEventListener("pointermove", this.onMouseMove), document.addEventListener("pointerup", this.onPointerUp);
  }
  onPointerUp = (e) => {
    this.inputEventsRouter.eventGuards.withPrimaryButton(e) && (this.toggleGrabbingCursor(false), e.preventDefault(), e.stopPropagation(), this.finishPanning(e));
  };
  onWheel(e) {
    if (!this.shouldHandleWheel(e)) return;
    e.preventDefault(), e.stopPropagation();
    let {
      deltaX: t,
      deltaY: n
    } = e;
    e.shiftKey && 0 === t && 0 !== n && (t = n, n = 0);
    const i = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, i), {
      name: "wheelPanning",
      deltaX: t,
      deltaY: n
    }));
  }
  onMouseMove = (e) => {
    if (e.zoomingHandled) return void this.finishPanning(e);
    e.preventDefault(), e.stopPropagation();
    const t = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, t), {
      name: "panning",
      phase: "continue",
      target: void 0,
      targetType: "diagram",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    }));
  };
  finishPanning(e) {
    document.removeEventListener("pointermove", this.onMouseMove), document.removeEventListener("pointerup", this.onPointerUp);
    const t = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, t), {
      name: "panning",
      phase: "end",
      target: void 0,
      targetType: "diagram",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    }));
  }
  shouldHandle(e) {
    const {
      viewportPanningEnabled: t
    } = this.diagramService.config();
    return !(!t || shouldDiscardEvent(e, "pan") || e.moveSelectionHandled || e.zoomingHandled || e.linkingHandled || e.rotateHandled || e.boxSelectionHandled);
  }
  shouldHandleWheel(e) {
    const {
      viewportPanningEnabled: t
    } = this.diagramService.config();
    return !(!t || e.zoomingHandled || shouldDiscardEvent(e, "pan") || !this.flowCoreProvider.provide().actionStateManager.isPanning() && (this.inputEventsRouter.eventGuards.withPrimaryModifier(e) || e.ctrlKey));
  }
  toggleGrabbingCursor(e) {
    this.elementRef.nativeElement.classList.toggle("panning", e);
  }
  static "ɵfac" = function PanningDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanningDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _PanningDirective,
    selectors: [["", "ngDiagramPanning", ""]],
    hostBindings: function PanningDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("pointerdown", function PanningDirective_pointerdown_HostBindingHandler($event) {
          return ctx.onPointerDown($event);
        })("wheel", function PanningDirective_wheel_HostBindingHandler($event) {
          return ctx.onWheel($event);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanningDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramPanning]",
      standalone: true,
      host: {
        "(pointerdown)": "onPointerDown($event)",
        "(wheel)": "onWheel($event)"
      }
    }]
  }], null, null);
})();
var MobileZoomingDirective = class _MobileZoomingDirective {
  elementRef = inject(ElementRef);
  flowCoreProvider = inject(FlowCoreProviderService);
  inputEventsRouterService = inject(InputEventsRouterService);
  touchEventsStateService = inject(TouchEventsStateService);
  touchCache = [];
  lastDistance;
  initialDistance;
  isZoomingActive = false;
  ZOOM_TRIGGER_DELTA = 40;
  onTouchStart(e) {
    for (const t of e.changedTouches) this.touchCache.push(t);
    2 === this.touchCache.length && (this.lastDistance = this.computeDistance(), this.initialDistance = this.lastDistance, this.isZoomingActive = false);
  }
  onTouchEnd(e) {
    for (const t of e.changedTouches) this.removeTouchFromCache(t);
    this.touchCache.length < 2 && (this.lastDistance = void 0, this.initialDistance = void 0, this.isZoomingActive = false, this.touchCache = [], this.touchEventsStateService.clearCurrentEvent());
  }
  onTouchMove(e) {
    for (const t2 of e.changedTouches) this.updateTouchInCache(t2);
    if (2 !== this.touchCache.length || void 0 === this.lastDistance || void 0 === this.initialDistance) return;
    const t = this.computeDistance(), n = Math.abs(t - this.initialDistance);
    if (!this.isZoomingActive) {
      if (!(n > this.ZOOM_TRIGGER_DELTA)) return;
      this.isZoomingActive = true, this.touchEventsStateService.currentEvent.set(DiagramEventName.Zooming);
    }
    const i = this.flowCoreProvider.provide(), o = (this.touchCache[0].clientX + this.touchCache[1].clientX) / 2, r = (this.touchCache[0].clientY + this.touchCache[1].clientY) / 2, a = Math.min(Math.max(1 - i.config.zoom.step, t / this.lastDistance), 1 + i.config.zoom.step);
    this.lastDistance = t;
    const s = this.inputEventsRouterService.getBaseEvent(e);
    this.inputEventsRouterService.emit(__spreadProps(__spreadValues({}, s), {
      name: "zoom",
      centerPoint: {
        x: o,
        y: r
      },
      zoomFactor: a
    }));
  }
  removeTouchFromCache(e) {
    const t = this.touchCache.findIndex((t2) => t2.identifier === e.identifier);
    -1 !== t && this.touchCache.splice(t, 1);
  }
  computeDistance() {
    return Math.hypot(this.touchCache[0].clientX - this.touchCache[1].clientX, this.touchCache[0].clientY - this.touchCache[1].clientY);
  }
  updateTouchInCache(e) {
    const t = this.touchCache.findIndex((t2) => t2.identifier === e.identifier);
    -1 !== t && (this.touchCache[t] = e);
  }
  static "ɵfac" = function MobileZoomingDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MobileZoomingDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _MobileZoomingDirective,
    selectors: [["", "ngDiagramZoomingPointer", ""]],
    hostBindings: function MobileZoomingDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("touchstart", function MobileZoomingDirective_touchstart_HostBindingHandler($event) {
          return ctx.onTouchStart($event);
        })("touchend", function MobileZoomingDirective_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        })("touchmove", function MobileZoomingDirective_touchmove_HostBindingHandler($event) {
          return ctx.onTouchMove($event);
        })("touchcancel", function MobileZoomingDirective_touchcancel_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileZoomingDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramZoomingPointer]",
      standalone: true,
      host: {
        "(touchstart)": "onTouchStart($event)",
        "(touchend)": "onTouchEnd($event)",
        "(touchmove)": "onTouchMove($event)",
        "(touchcancel)": "onTouchEnd($event)"
      }
    }]
  }], null, null);
})();
var ZoomingWheelDirective = class _ZoomingWheelDirective {
  flowCoreProvider = inject(FlowCoreProviderService);
  inputEventsRouterService = inject(InputEventsRouterService);
  onWheel(e) {
    if (!this.shouldHandle(e)) return;
    e.stopPropagation(), e.preventDefault(), e.zoomingHandled = true;
    const t = this.flowCoreProvider.provide(), n = this.getZoomFactor(e, t.config.zoom.step), i = this.inputEventsRouterService.getBaseEvent(e);
    this.inputEventsRouterService.emit(__spreadProps(__spreadValues({}, i), {
      name: "zoom",
      centerPoint: {
        x: e.clientX,
        y: e.clientY
      },
      zoomFactor: n
    }));
  }
  shouldHandle(e) {
    if (e.zoomingHandled) return false;
    const t = this.flowCoreProvider.provide();
    if (t.actionStateManager.isPanning()) return false;
    if (e.ctrlKey) return true;
    const n = this.inputEventsRouterService.getBaseEvent(e).modifiers;
    return t.shortcutManager.matchesAction("zoom", {
      modifiers: n
    });
  }
  isPinchGesture(e) {
    return e.ctrlKey && Math.abs(e.deltaY) < 50;
  }
  getZoomFactor(e, t) {
    return this.isPinchGesture(e) ? Math.exp(0.01 * -e.deltaY) : e.deltaY > 0 ? 1 - t : 1 + t;
  }
  static "ɵfac" = function ZoomingWheelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZoomingWheelDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _ZoomingWheelDirective,
    selectors: [["", "ngDiagramZoomingWheel", ""]],
    hostBindings: function ZoomingWheelDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("wheel", function ZoomingWheelDirective_wheel_HostBindingHandler($event) {
          return ctx.onWheel($event);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoomingWheelDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramZoomingWheel]",
      standalone: true,
      host: {
        "(wheel)": "onWheel($event)"
      }
    }]
  }], null, null);
})();
var NodePositionDirective = class _NodePositionDirective {
  node = input.required();
  position = computed(() => this.node().position);
  get transform() {
    const e = this.position();
    return `translate(${e.x}px, ${e.y}px)`;
  }
  static "ɵfac" = function NodePositionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NodePositionDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _NodePositionDirective,
    selectors: [["", "ngDiagramNodePosition", ""]],
    hostVars: 4,
    hostBindings: function NodePositionDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("transform", ctx.transform)("transform-origin", "0 0");
      }
    },
    inputs: {
      node: [1, "node"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodePositionDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramNodePosition]",
      standalone: true,
      host: {
        "[style.transform]": "transform",
        "[style.transform-origin]": '"0 0"'
      }
    }]
  }], null, null);
})();
var NgDiagramNodeSelectedDirective = class _NgDiagramNodeSelectedDirective {
  node = input.required();
  selected = computed(() => this.node().selected ?? false);
  static "ɵfac" = function NgDiagramNodeSelectedDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramNodeSelectedDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _NgDiagramNodeSelectedDirective,
    selectors: [["", "ngDiagramNodeSelected", ""]],
    hostVars: 4,
    hostBindings: function NgDiagramNodeSelectedDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ng-diagram-node-selected", ctx.selected())("ng-diagram-node-wrapper", true);
      }
    },
    inputs: {
      node: [1, "node"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramNodeSelectedDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramNodeSelected]",
      standalone: true,
      host: {
        "[class.ng-diagram-node-selected]": "selected()",
        "[class.ng-diagram-node-wrapper]": "true"
      }
    }]
  }], null, null);
})();
var DEFAULT_NODE_SIZE$1 = {
  width: "11.25rem",
  height: "2rem"
};
var DEFAULT_GROUP_SIZE = {
  width: "9.0625rem",
  height: "9.0625rem"
};
var NodeSizeDirective = class _NodeSizeDirective {
  hostElement = inject(ElementRef);
  renderer = inject(Renderer2);
  batchResizeObserver = inject(BatchResizeObserverService);
  flowCoreProvider = inject(FlowCoreProviderService);
  node = input.required();
  size = computed(() => this.node().size);
  autoSize = computed(() => this.node().autoSize ?? true);
  id = computed(() => this.node().id);
  sizeState = computed(() => ({
    size: this.size(),
    autoSize: this.autoSize()
  }));
  constructor() {
    effect(() => {
      const {
        size: e,
        autoSize: t
      } = this.sizeState();
      if (!t && e) {
        const {
          width: e2,
          height: t2
        } = this.size();
        this.setSize(e2, t2);
      } else this.setSize();
    });
  }
  ngOnInit() {
    this.connectResizeObserver();
  }
  ngOnDestroy() {
    this.disconnectResizeObserver();
  }
  setSize(e, t) {
    const n = this.node();
    void 0 !== e && void 0 !== t ? this.applyExplicitSize(e, t, n) : this.applyAutoSize(n);
  }
  applyExplicitSize(e, t, n) {
    const i = this.hostElement.nativeElement, o = this.flowCoreProvider.provide().config.resize.getMinNodeSize(n), r = !n.type;
    if (this.renderer.setStyle(i, "width", `${e}px`), this.renderer.setStyle(i, "height", `${t}px`), o || r) {
      const e2 = o?.width ?? DEFAULT_NODE_MIN_SIZE.width, t2 = o?.height ?? DEFAULT_NODE_MIN_SIZE.height;
      this.renderer.setStyle(i, "min-width", `${e2}px`), this.renderer.setStyle(i, "min-height", `${t2}px`);
    }
  }
  applyAutoSize(e) {
    e.type ? this.resetExplicitSizes() : isGroup(e) ? this.applyDefaultGroupSize() : this.applyDefaultNodeSize();
  }
  applyDefaultGroupSize() {
    const e = this.hostElement.nativeElement;
    this.renderer.setStyle(e, "width", DEFAULT_GROUP_SIZE.width), this.renderer.setStyle(e, "height", DEFAULT_GROUP_SIZE.height), this.renderer.setStyle(e, "min-width", DEFAULT_GROUP_SIZE.width), this.renderer.setStyle(e, "min-height", DEFAULT_GROUP_SIZE.height);
  }
  applyDefaultNodeSize() {
    const e = this.hostElement.nativeElement;
    this.renderer.setStyle(e, "width", "unset"), this.renderer.setStyle(e, "height", "unset"), this.renderer.setStyle(e, "min-width", DEFAULT_NODE_SIZE$1.width), this.renderer.setStyle(e, "min-height", DEFAULT_NODE_SIZE$1.height);
  }
  resetExplicitSizes() {
    const e = this.hostElement.nativeElement;
    this.renderer.setStyle(e, "width", "unset"), this.renderer.setStyle(e, "height", "unset"), this.renderer.setStyle(e, "min-width", "unset"), this.renderer.setStyle(e, "min-height", "unset");
  }
  connectResizeObserver() {
    this.batchResizeObserver.observe(this.hostElement.nativeElement, {
      type: "node",
      nodeId: this.id()
    });
  }
  disconnectResizeObserver() {
    this.batchResizeObserver.unobserve(this.hostElement.nativeElement);
  }
  static "ɵfac" = function NodeSizeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NodeSizeDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _NodeSizeDirective,
    selectors: [["", "ngDiagramNodeSize", ""]],
    inputs: {
      node: [1, "node"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NodeSizeDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramNodeSize]",
      standalone: true
    }]
  }], () => [], null);
})();
var ViewportDirective = class _ViewportDirective {
  viewport = input({
    x: 0,
    y: 0,
    scale: 1
  });
  get transform() {
    const e = this.viewport();
    return `translate(${e.x}px, ${e.y}px) scale(${e.scale})`;
  }
  static "ɵfac" = function ViewportDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _ViewportDirective,
    selectors: [["", "ngDiagramViewport", ""]],
    hostVars: 2,
    hostBindings: function ViewportDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("transform", ctx.transform);
      }
    },
    inputs: {
      viewport: [1, "viewport"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramViewport]",
      standalone: true,
      host: {
        "[style.transform]": "transform"
      }
    }]
  }], null, null);
})();
var ZIndexDirective = class _ZIndexDirective {
  data = input.required();
  zIndex = computed(() => this.data().computedZIndex ?? 0);
  static "ɵfac" = function ZIndexDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZIndexDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _ZIndexDirective,
    selectors: [["", "ngDiagramZIndex", ""]],
    hostVars: 2,
    hostBindings: function ZIndexDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("z-index", ctx.zIndex());
      }
    },
    inputs: {
      data: [1, "data"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZIndexDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramZIndex]",
      standalone: true,
      host: {
        "[style.z-index]": "zIndex()"
      }
    }]
  }], null, null);
})();
var BoxSelectionDirective = class _BoxSelectionDirective {
  inputEventsRouter = inject(InputEventsRouterService);
  boxSelectionProvider = inject(BoxSelectionProviderService);
  flowCoreProvider = inject(FlowCoreProviderService);
  elementRef = inject(ElementRef);
  startPoint = null;
  ngOnInit() {
    this.elementRef.nativeElement.addEventListener("pointerdown", this.onPointerDownCapture, {
      capture: true
    });
  }
  ngOnDestroy() {
    this.elementRef.nativeElement.removeEventListener("pointerdown", this.onPointerDownCapture, {
      capture: true
    }), document.removeEventListener("pointermove", this.onMouseMove), document.removeEventListener("pointerup", this.onPointerUp);
  }
  onPointerDownCapture = (e) => {
    this.shouldHandle(e) && (e.boxSelectionHandled = true);
  };
  onPointerDown(e) {
    if (!e.boxSelectionHandled) return;
    e.preventDefault(), e.stopPropagation();
    const t = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, t), {
      name: "boxSelection",
      phase: "start",
      target: void 0,
      targetType: "diagram",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    })), this.startPoint = {
      x: e.clientX,
      y: e.clientY
    }, document.addEventListener("pointermove", this.onMouseMove), document.addEventListener("pointerup", this.onPointerUp);
  }
  onPointerUp = (e) => {
    if (!this.inputEventsRouter.eventGuards.withPrimaryButton(e)) return;
    e.preventDefault(), e.stopPropagation(), document.removeEventListener("pointermove", this.onMouseMove), document.removeEventListener("pointerup", this.onPointerUp);
    const t = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, t), {
      name: "boxSelection",
      phase: "end",
      target: void 0,
      targetType: "diagram",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    })), this.startPoint = null, this.boxSelectionProvider.boundingBox.set(null);
  };
  onMouseMove = (e) => {
    e.preventDefault(), e.stopPropagation();
    const t = this.inputEventsRouter.getBaseEvent(e);
    if (this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, t), {
      name: "boxSelection",
      phase: "continue",
      target: void 0,
      targetType: "diagram",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    })), this.startPoint) {
      const t2 = this.flowCoreProvider.provide(), {
        x: n,
        y: i
      } = t2.clientToFlowViewportPosition(this.startPoint), {
        x: o,
        y: r
      } = t2.clientToFlowViewportPosition({
        x: e.clientX,
        y: e.clientY
      }), a = Math.min(n, o), s = Math.min(i, r), d = Math.abs(o - n), l = Math.abs(r - i);
      this.boxSelectionProvider.boundingBox.set({
        x: a,
        y: s,
        width: d,
        height: l
      });
    }
  };
  shouldHandle(e) {
    const t = this.flowCoreProvider.provide(), n = this.inputEventsRouter.getBaseEvent(e).modifiers;
    return t.shortcutManager.matchesAction("boxSelection", {
      modifiers: n
    });
  }
  static "ɵfac" = function BoxSelectionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BoxSelectionDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _BoxSelectionDirective,
    selectors: [["", "ngDiagramBoxSelection", ""]],
    hostBindings: function BoxSelectionDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("pointerdown", function BoxSelectionDirective_pointerdown_HostBindingHandler($event) {
          return ctx.onPointerDown($event);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BoxSelectionDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramBoxSelection]",
      standalone: true,
      host: {
        "(pointerdown)": "onPointerDown($event)"
      }
    }]
  }], null, null);
})();
var MobilePanningDirective = class _MobilePanningDirective {
  inputEventsRouter = inject(InputEventsRouterService);
  diagramService = inject(NgDiagramService);
  touchEventsStateService = inject(TouchEventsStateService);
  isPanning = false;
  lastTouch = null;
  onTouchStart(e) {
    if (!this.isTwoFingerTouch(e) || !this.shouldHandle(e) || this.touchEventsStateService.zoomingHandled()) return void (this.isPanning = false);
    this.isPanning = true, this.touchEventsStateService.currentEvent.set(DiagramEventName.Panning);
    const t = this.getMidpoint(e.touches);
    this.lastTouch = t, this.emitPanningEvent("start", e, t), this.preventDefaultAndStop(e);
  }
  onTouchMove(e) {
    if (this.touchEventsStateService.zoomingHandled() && this.isPanning) return this.isPanning = false, this.lastTouch = null, void this.touchEventsStateService.clearCurrentEvent();
    if (!this.shouldContinuePanning(e)) return;
    const t = this.getMidpoint(e.touches);
    this.lastTouch = t, this.emitPanningEvent("continue", e, t), this.preventDefaultAndStop(e);
  }
  onTouchEnd(e) {
    if (!this.isPanning) return;
    this.isPanning = false;
    const t = this.lastTouch || this.getMidpoint(e.touches);
    this.emitPanningEvent("end", e, t), this.lastTouch = null, this.touchEventsStateService.clearCurrentEvent(), this.preventDefaultAndStop(e);
  }
  getMidpoint(e) {
    return e.length < 2 ? {
      x: 0,
      y: 0
    } : {
      x: (e[0].clientX + e[1].clientX) / 2,
      y: (e[0].clientY + e[1].clientY) / 2
    };
  }
  shouldHandle(e) {
    const {
      viewportPanningEnabled: t
    } = this.diagramService.config();
    return !(!t || shouldDiscardEvent(e, "pan") || this.touchEventsStateService.zoomingHandled());
  }
  isTwoFingerTouch(e) {
    return 2 === e.touches.length;
  }
  shouldContinuePanning(e) {
    return this.isPanning && this.isTwoFingerTouch(e) && !this.touchEventsStateService.zoomingHandled();
  }
  emitPanningEvent(e, t, n) {
    const i = this.inputEventsRouter.getBaseEvent(t);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, i), {
      name: "panning",
      phase: e,
      target: void 0,
      targetType: "diagram",
      lastInputPoint: n
    }));
  }
  preventDefaultAndStop(e) {
    e.preventDefault(), e.stopPropagation();
  }
  static "ɵfac" = function MobilePanningDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MobilePanningDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _MobilePanningDirective,
    selectors: [["", "ngDiagramPanning", ""]],
    hostBindings: function MobilePanningDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("touchstart", function MobilePanningDirective_touchstart_HostBindingHandler($event) {
          return ctx.onTouchStart($event);
        })("touchmove", function MobilePanningDirective_touchmove_HostBindingHandler($event) {
          return ctx.onTouchMove($event);
        })("touchend", function MobilePanningDirective_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        })("touchcancel", function MobilePanningDirective_touchcancel_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobilePanningDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramPanning]",
      standalone: true,
      host: {
        "(touchstart)": "onTouchStart($event)",
        "(touchmove)": "onTouchMove($event)",
        "(touchend)": "onTouchEnd($event)",
        "(touchcancel)": "onTouchEnd($event)"
      }
    }]
  }], null, null);
})();
var NgDiagramServicesAvailabilityCheckerDirective = class _NgDiagramServicesAvailabilityCheckerDirective {
  service = inject(FlowCoreProviderService, {
    optional: true,
    skipSelf: true
  });
  constructor() {
    if (!this.service) throw new Error("NgDiagram services are not available. Please register all required services using `provideNgDiagram()` in your component's providers array.\n\nExample usage:\n\nimport { provideNgDiagram } from 'ng-diagram';\n\n@Component({\n  selector: 'app-root',\n  providers: [provideNgDiagram()], // Add this to register all ng-diagram services\n  template: `<ng-diagram ...></ng-diagram>`\n})\nexport class AppComponent {...}");
  }
  static "ɵfac" = function NgDiagramServicesAvailabilityCheckerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramServicesAvailabilityCheckerDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _NgDiagramServicesAvailabilityCheckerDirective,
    selectors: [["", "ngDiagramServicesAvailabilityChecker", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramServicesAvailabilityCheckerDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramServicesAvailabilityChecker]",
      standalone: true
    }]
  }], () => [], null);
})();
var NODE_TEMPLATE_NOT_REGISTERED_WARNING = (e) => `[ngDiagram] Node template '${e}' is not registered. Falling back to default node template.

Documentation: https://www.ngdiagram.dev/docs/guides/nodes/custom-nodes/
`;
var EDGE_TEMPLATE_NOT_REGISTERED_WARNING = (e) => `[ngDiagram] Edge template '${e}' is not registered. Falling back to default edge template.

Documentation: https://www.ngdiagram.dev/docs/guides/edges/custom-edges/
`;
var TemplateProviderService = class _TemplateProviderService {
  flowConfig = inject(FlowCoreProviderService);
  nodeTemplateMap = new NgDiagramNodeTemplateMap();
  edgeTemplateMap = new NgDiagramEdgeTemplateMap();
  accessedNodeTypes = /* @__PURE__ */ new Set();
  accessedEdgeTypes = /* @__PURE__ */ new Set();
  setNodeTemplateMap(e) {
    this.accessedNodeTypes.clear(), this.nodeTemplateMap = e;
  }
  setEdgeTemplateMap(e) {
    this.accessedEdgeTypes.clear(), this.edgeTemplateMap = e;
  }
  getNodeTemplate(e) {
    if (void 0 === e) return null;
    const t = this.nodeTemplateMap.get(e || "");
    return t || this.accessedNodeTypes.has(e) || (console.warn(NODE_TEMPLATE_NOT_REGISTERED_WARNING(e)), this.accessedNodeTypes.add(e)), t ?? null;
  }
  getEdgeTemplate(e) {
    if (void 0 === e) return null;
    const t = this.edgeTemplateMap.get(e || "");
    return t || this.accessedEdgeTypes.has(e) || (console.warn(EDGE_TEMPLATE_NOT_REGISTERED_WARNING(e)), this.accessedEdgeTypes.add(e)), t ?? null;
  }
  static "ɵfac" = function TemplateProviderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TemplateProviderService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _TemplateProviderService,
    factory: _TemplateProviderService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplateProviderService, [{
    type: Injectable
  }], null, null);
})();
var BUILTIN_MIDDLEWARES = [internalIdMiddleware, zIndexMiddleware, edgesRoutingMiddleware];
function createMiddlewares(e) {
  return e(BUILTIN_MIDDLEWARES);
}
var NgDiagramBoxSelectionComponent = class _NgDiagramBoxSelectionComponent {
  boxSelectionProvider = inject(BoxSelectionProviderService);
  static "ɵfac" = function NgDiagramBoxSelectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramBoxSelectionComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramBoxSelectionComponent,
    selectors: [["ng-diagram-box-selection"]],
    decls: 2,
    vars: 2,
    consts: [[3, "left", "top", "width", "height"]],
    template: function NgDiagramBoxSelectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵdeclareLet(0);
        ɵɵconditionalCreate(1, NgDiagramBoxSelectionComponent_Conditional_1_Template, 1, 8, "div", 0);
      }
      if (rf & 2) {
        const boundingBox_r2 = ɵɵstoreLet(ctx.boxSelectionProvider.boundingBox());
        ɵɵadvance();
        ɵɵconditional(boundingBox_r2 ? 1 : -1);
      }
    },
    styles: ["div[_ngcontent-%COMP%]{position:absolute;pointer-events:none;background-color:var(--ngd-box-selection-background);border:var(--ngd-box-selection-border-size) solid var(--ngd-box-selection-border-color)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramBoxSelectionComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-box-selection",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '@let boundingBox = this.boxSelectionProvider.boundingBox();\n@if (boundingBox) {\n  <div\n    [style.left.px]="boundingBox.x"\n    [style.top.px]="boundingBox.y"\n    [style.width.px]="boundingBox.width"\n    [style.height.px]="boundingBox.height"\n  ></div>\n}\n',
      styles: ["div{position:absolute;pointer-events:none;background-color:var(--ngd-box-selection-background);border:var(--ngd-box-selection-border-size) solid var(--ngd-box-selection-border-color)}\n"]
    }]
  }], null, null);
})();
var NgDiagramCanvasComponent = class _NgDiagramCanvasComponent {
  renderer = inject(RendererService);
  isVisible = this.renderer.isInitialized;
  static "ɵfac" = function NgDiagramCanvasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramCanvasComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramCanvasComponent,
    selectors: [["ng-diagram-canvas"]],
    hostVars: 2,
    hostBindings: function NgDiagramCanvasComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("visibility", ctx.isVisible() ? null : "hidden");
      }
    },
    features: [ɵɵHostDirectivesFeature([{
      directive: ViewportDirective,
      inputs: ["viewport", "viewport"]
    }])],
    ngContentSelectors: _c4,
    decls: 5,
    vars: 0,
    consts: [[1, "edges-container"], [1, "nodes-container"]],
    template: function NgDiagramCanvasComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c3);
        ɵɵdomElementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵprojection(2, 1);
        ɵɵdomElementEnd();
        ɵɵdomElementStart(3, "div", 1);
        ɵɵprojection(4, 2);
        ɵɵdomElementEnd();
      }
    },
    styles: ["[_nghost-%COMP%]{position:absolute;width:100%;height:100%;display:flex;overflow:visible;transform-origin:0 0}.nodes-container[_ngcontent-%COMP%], .edges-container[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramCanvasComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-canvas",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: ViewportDirective,
        inputs: ["viewport"]
      }],
      host: {
        "[style.visibility]": 'isVisible() ? null : "hidden"'
      },
      template: '<div class="edges-container">\n  <ng-content select="ng-diagram-edge"></ng-content>\n  <ng-content select="ng-diagram-marker-arrow"></ng-content>\n</div>\n<div class="nodes-container">\n  <ng-content select="ng-diagram-node"></ng-content>\n</div>\n',
      styles: [":host{position:absolute;width:100%;height:100%;display:flex;overflow:visible;transform-origin:0 0}.nodes-container,.edges-container{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none}\n"]
    }]
  }], null, null);
})();
var INVALID_EDGE_COORDINATES_ERROR = (e, t, n, i, o) => `[ngDiagram] Invalid edge coordinates detected for edge '${e}'.

Edge details:
  • source: ${t} (port: ${n || "not specified"})
  • target: ${i} (port: ${o || "not specified"})

Documentation: https://www.ngdiagram.dev/docs/guides/edges/edges/
`;
var NgDiagramBaseEdgeComponent = class _NgDiagramBaseEdgeComponent {
  flowCoreProvider = inject(FlowCoreProviderService);
  markerRegistry = inject(MarkerRegistryService);
  useInlineMarkers = this.markerRegistry.useInlineMarkers;
  edge = input.required();
  routing = input();
  stroke = input();
  sourceArrowhead = input();
  targetArrowhead = input();
  strokeOpacity = input();
  strokeWidth = input();
  strokeDasharray = input();
  points = computed(() => this.edge().points ?? []);
  path = computed(() => {
    const e = this.edge(), t = this.routing() ?? e.routing, n = this.flowCoreProvider.provide(), i = this.points();
    if (0 === i.length) return "";
    if (i.some((e2) => !isValidPosition(e2))) return console.error(INVALID_EDGE_COORDINATES_ERROR(e.id, e.source, e.sourcePort, e.target, e.targetPort)), "";
    if (t && n.edgeRoutingManager.hasRouting(t)) return n.edgeRoutingManager.computePath(t, i);
    const o = n.edgeRoutingManager.getDefaultRouting();
    return n.edgeRoutingManager.hasRouting(o) ? n.edgeRoutingManager.computePath(o, i) : `M ${i[0].x},${i[0].y}`;
  });
  sourceMarkerId = computed(() => this.edge()?.sourceArrowhead ?? this.sourceArrowhead());
  targetMarkerId = computed(() => this.edge()?.targetArrowhead ?? this.targetArrowhead());
  markerStart = computed(() => {
    const e = this.sourceMarkerId();
    return e ? this.markerRegistry.getMarkerUrl(e, this.edge().id, "source") : null;
  });
  markerEnd = computed(() => {
    const e = this.targetMarkerId();
    return e ? this.markerRegistry.getMarkerUrl(e, this.edge().id, "target") : null;
  });
  selected = computed(() => this.edge().selected);
  temporary = computed(() => this.edge().temporary);
  labels = computed(() => this.edge().measuredLabels ?? []);
  class = computed(() => {
    const e = ["ng-diagram-edge__path"];
    return this.selected() && e.push("selected"), this.temporary() && e.push("temporary"), e.join(" ");
  });
  prevRouting;
  prevRoutingMode;
  prevPoints;
  constructor() {
    effect(() => this.syncEdgePropertiesToModel());
  }
  syncEdgePropertiesToModel() {
    const e = this.edge(), t = {};
    (this.checkRoutingChanges(e, t) || this.checkRoutingModeChanges(e, t) || this.checkPointsChanges(e, t)) && this.flowCoreProvider.provide().commandHandler.emit("updateEdge", {
      id: e.id,
      edgeChanges: t
    });
  }
  checkRoutingChanges(e, t) {
    const n = this.routing() ?? e.routing;
    return !(!n || this.prevRouting === n || (t.routing = n, this.prevRouting = n, 0));
  }
  checkRoutingModeChanges(e, t) {
    return !(!e.routingMode || this.prevRoutingMode === e.routingMode || (t.routingMode = e.routingMode, this.prevRoutingMode = e.routingMode, 0));
  }
  checkPointsChanges(e, t) {
    return !(!("manual" === e.routingMode && e.points && e.points.length > 0) || this.prevPoints && equalPointsArrays(this.prevPoints, e.points) || (t.points = e.points, this.prevPoints = e.points, 0));
  }
  static "ɵfac" = function NgDiagramBaseEdgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramBaseEdgeComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramBaseEdgeComponent,
    selectors: [["ng-diagram-base-edge"]],
    hostVars: 4,
    hostBindings: function NgDiagramBaseEdgeComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("selected", ctx.selected())("temporary", ctx.temporary());
      }
    },
    inputs: {
      edge: [1, "edge"],
      routing: [1, "routing"],
      stroke: [1, "stroke"],
      sourceArrowhead: [1, "sourceArrowhead"],
      targetArrowhead: [1, "targetArrowhead"],
      strokeOpacity: [1, "strokeOpacity"],
      strokeWidth: [1, "strokeWidth"],
      strokeDasharray: [1, "strokeDasharray"]
    },
    features: [ɵɵHostDirectivesFeature([{
      directive: ZIndexDirective,
      inputs: ["data", "edge"]
    }, {
      directive: EdgeSelectionDirective,
      inputs: ["targetData", "edge"]
    }])],
    ngContentSelectors: _c2,
    decls: 5,
    vars: 14,
    consts: [["ngDiagramInlineMarkers", "", 3, "sourceMarkerId", "targetMarkerId", "edgeId"], ["fill", "none", "stroke", "none", "stroke-width", "20", "stroke-opacity", "0"]],
    template: function NgDiagramBaseEdgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg");
        ɵɵconditionalCreate(1, NgDiagramBaseEdgeComponent_Conditional_1_Template, 1, 3, ":svg:defs", 0);
        ɵɵelement(2, "path")(3, "path", 1);
        ɵɵelementEnd();
        ɵɵprojection(4);
      }
      if (rf & 2) {
        ɵɵstyleProp("color", ctx.stroke() || "var(--edge-stroke, var(--ngd-default-edge-stroke))");
        ɵɵadvance();
        ɵɵconditional(ctx.useInlineMarkers ? 1 : -1);
        ɵɵadvance();
        ɵɵclassMap(ctx.class());
        ɵɵattribute("d", ctx.path())("stroke", ctx.stroke() || "var(--edge-stroke, var(--ngd-default-edge-stroke))")("fill", "none")("stroke-width", ctx.strokeWidth() || "var(--edge-stroke-width, 2)")("stroke-dasharray", ctx.strokeDasharray() || "var(--edge-stroke-dasharray, none)")("marker-start", ctx.markerStart())("marker-end", ctx.markerEnd())("stroke-opacity", ctx.strokeOpacity() || "var(--edge-stroke-opacity, 1)");
        ɵɵadvance();
        ɵɵattribute("d", ctx.path());
      }
    },
    dependencies: [InlineMarkersDirective],
    styles: ["[_nghost-%COMP%]{position:relative}svg[_ngcontent-%COMP%]{overflow:visible;position:absolute;cursor:pointer}svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{pointer-events:visibleStroke;cursor:pointer;transition:var(--edge-stroke-transition, none)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramBaseEdgeComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-base-edge",
      standalone: true,
      imports: [InlineMarkersDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: ZIndexDirective,
        inputs: ["data: edge"]
      }, {
        directive: EdgeSelectionDirective,
        inputs: ["targetData: edge"]
      }],
      host: {
        "[class.selected]": "selected()",
        "[class.temporary]": "temporary()"
      },
      template: `<svg [style.color]="stroke() || 'var(--edge-stroke, var(--ngd-default-edge-stroke))'">
  <!-- Inline markers for Safari (context-stroke not supported) -->
  @if (useInlineMarkers) {
    <defs
      ngDiagramInlineMarkers
      [sourceMarkerId]="sourceMarkerId()"
      [targetMarkerId]="targetMarkerId()"
      [edgeId]="edge().id"
    ></defs>
  }

  <path
    [class]="class()"
    [attr.d]="path()"
    [attr.stroke]="stroke() || 'var(--edge-stroke, var(--ngd-default-edge-stroke))'"
    [attr.fill]="'none'"
    [attr.stroke-width]="strokeWidth() || 'var(--edge-stroke-width, 2)'"
    [attr.stroke-dasharray]="strokeDasharray() || 'var(--edge-stroke-dasharray, none)'"
    [attr.marker-start]="markerStart()"
    [attr.marker-end]="markerEnd()"
    [attr.stroke-opacity]="strokeOpacity() || 'var(--edge-stroke-opacity, 1)'"
  />
  <path [attr.d]="path()" fill="none" stroke="none" stroke-width="20" stroke-opacity="0" />
</svg>

<ng-content />
`,
      styles: [":host{position:relative}svg{overflow:visible;position:absolute;cursor:pointer}svg path{pointer-events:visibleStroke;cursor:pointer;transition:var(--edge-stroke-transition, none)}\n"]
    }]
  }], () => [], null);
})();
var NgDiagramBaseEdgeLabelComponent = class _NgDiagramBaseEdgeLabelComponent {
  flowCoreProvider = inject(FlowCoreProviderService);
  hostElement = inject(ElementRef);
  edgeComponent = inject(NgDiagramBaseEdgeComponent);
  batchResizeObserver = inject(BatchResizeObserverService);
  id = input.required();
  positionOnEdge = input.required();
  edgeData = computed(() => this.edgeComponent.edge());
  points = computed(() => this.edgeData()?.points);
  edgeId = computed(() => this.edgeData()?.id);
  ownerInternalId;
  position = computed(() => {
    const e = this.edgeData(), t = e?.measuredLabels?.find((e2) => e2.id === this.id());
    return t?.position || {
      x: 0,
      y: 0
    };
  });
  isVisible = computed(() => {
    const e = this.edgeData();
    if (!e) return false;
    const t = e.measuredLabels?.find((e2) => e2.id === this.id());
    return !(!t?.position || null == t?.position.x || null == t?.position.y || !(e.points && e.points.length >= 2));
  });
  lastPositionOnEdge = signal(void 0);
  get transform() {
    const e = this.position();
    return `translate(${e.x}px, ${e.y}px) translate(-50%, -50%)`;
  }
  constructor() {
    effect(() => {
      const e = this.positionOnEdge(), t = this.lastPositionOnEdge();
      e !== t && (untracked(() => {
        this.lastPositionOnEdge.set(e);
      }), this.flowCoreProvider.provide().updater.applyEdgeLabelChanges(this.edgeId(), [{
        labelId: this.id(),
        labelChanges: {
          positionOnEdge: e
        }
      }]));
    });
  }
  ngOnInit() {
    this.lastPositionOnEdge.set(this.positionOnEdge()), this.ownerInternalId = this.edgeData()?._internalId, this.flowCoreProvider.provide().updater.addEdgeLabel(this.edgeId(), {
      id: this.id(),
      positionOnEdge: this.positionOnEdge()
    }), this.batchResizeObserver.observe(this.hostElement.nativeElement, {
      type: "edge-label",
      edgeId: this.edgeId(),
      labelId: this.id()
    });
  }
  ngOnDestroy() {
    this.batchResizeObserver.unobserve(this.hostElement.nativeElement);
    const e = this.flowCoreProvider.provide();
    if (!e.isInitialized) return;
    const t = this.edgeId(), n = t ? e.getEdgeById(t) : null;
    n && (this.ownerInternalId && n._internalId !== this.ownerInternalId || e.updater.deleteEdgeLabel(t, this.id()));
  }
  static "ɵfac" = function NgDiagramBaseEdgeLabelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramBaseEdgeLabelComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramBaseEdgeLabelComponent,
    selectors: [["ng-diagram-base-edge-label"]],
    hostVars: 4,
    hostBindings: function NgDiagramBaseEdgeLabelComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("transform", ctx.transform)("visibility", ctx.isVisible() ? null : "hidden");
      }
    },
    inputs: {
      id: [1, "id"],
      positionOnEdge: [1, "positionOnEdge"]
    },
    ngContentSelectors: _c2,
    decls: 1,
    vars: 0,
    template: function NgDiagramBaseEdgeLabelComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{position:absolute;pointer-events:all}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramBaseEdgeLabelComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-base-edge-label",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.transform]": "transform",
        "[style.visibility]": 'isVisible() ? null : "hidden"'
      },
      template: "<ng-content />\n",
      styles: [":host{position:absolute;pointer-events:all}\n"]
    }]
  }], () => [], null);
})();
var BaseEdgeLabelComponent = NgDiagramBaseEdgeLabelComponent;
var DefaultEdgeLabelComponent = class _DefaultEdgeLabelComponent {
  edgeComponent = inject(NgDiagramBaseEdgeComponent);
  selected = computed(() => this.edgeComponent.selected());
  static "ɵfac" = function DefaultEdgeLabelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultEdgeLabelComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _DefaultEdgeLabelComponent,
    selectors: [["ng-diagram-default-edge-label"]],
    ngContentSelectors: _c2,
    decls: 2,
    vars: 3,
    consts: [[3, "className"]],
    template: function DefaultEdgeLabelComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵdomElementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("selected", ctx.selected());
        ɵɵdomProperty("className", "ng-diagram-default-edge-label");
      }
    },
    styles: [".ng-diagram-default-edge-label[_ngcontent-%COMP%]{display:flex;padding:var(--edge-label-padding, 4px 8px);border-radius:var(--edge-label-border-radius, 4px);font-size:var(--edge-label-font-size, 12px);background:var(--edge-label-background-color, var(--ngd-default-edge-label-background-color));color:var(--edge-label-text-color, var(--ngd-default-edge-label-color));border:var(--edge-label-border-width, 1px) solid var(--edge-label-border-color, var(--ngd-default-edge-label-border-color));transition:var(--edge-label-border-transition, border-color .1s ease-in-out)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultEdgeLabelComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-default-edge-label",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div [class.selected]="selected()" [className]="'ng-diagram-default-edge-label'">
  <ng-content />
</div>
`,
      styles: [".ng-diagram-default-edge-label{display:flex;padding:var(--edge-label-padding, 4px 8px);border-radius:var(--edge-label-border-radius, 4px);font-size:var(--edge-label-font-size, 12px);background:var(--edge-label-background-color, var(--ngd-default-edge-label-background-color));color:var(--edge-label-text-color, var(--ngd-default-edge-label-color));border:var(--edge-label-border-width, 1px) solid var(--edge-label-border-color, var(--ngd-default-edge-label-border-color));transition:var(--edge-label-border-transition, border-color .1s ease-in-out)}\n"]
    }]
  }], null, null);
})();
var NgDiagramDefaultEdgeComponent = class _NgDiagramDefaultEdgeComponent {
  edge = input.required();
  label = computed(() => this.edge().data?.label);
  positionOnEdge = computed(() => this.edge().data?.positionOnEdge ?? 0.5);
  static "ɵfac" = function NgDiagramDefaultEdgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramDefaultEdgeComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramDefaultEdgeComponent,
    selectors: [["ng-diagram-default-edge"]],
    inputs: {
      edge: [1, "edge"]
    },
    decls: 3,
    vars: 3,
    consts: [[1, "default-edge", 3, "edge"], [1, "ng-diagram-default-label", 3, "id", "positionOnEdge"]],
    template: function NgDiagramDefaultEdgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "ng-diagram-base-edge", 0);
        ɵɵdeclareLet(1);
        ɵɵconditionalCreate(2, NgDiagramDefaultEdgeComponent_Conditional_2_Template, 3, 3, "ng-diagram-base-edge-label", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("edge", ctx.edge());
        ɵɵadvance();
        const edgeLabel_r3 = ɵɵstoreLet(ctx.label());
        ɵɵadvance();
        ɵɵconditional(edgeLabel_r3 ? 2 : -1);
      }
    },
    dependencies: [NgDiagramBaseEdgeComponent, NgDiagramBaseEdgeLabelComponent, DefaultEdgeLabelComponent],
    styles: ["ng-diagram-base-edge.default-edge[_ngcontent-%COMP%]{--edge-stroke: var(--ngd-default-edge-stroke);--edge-stroke-transition: stroke .1s ease-in-out}ng-diagram-base-edge.default-edge[_ngcontent-%COMP%]:hover:not(.selected):not(.temporary){--edge-stroke: var(--ngd-default-edge-stroke-hover);--edge-label-border-color: var(--ngd-default-edge-stroke-hover)}ng-diagram-base-edge.default-edge.selected[_ngcontent-%COMP%]{--edge-stroke: var(--ngd-default-edge-stroke-selected);--edge-label-border-color: var(--ngd-default-edge-stroke-selected)}ng-diagram-base-edge.default-edge.temporary[_ngcontent-%COMP%]{--edge-stroke-opacity: .5}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramDefaultEdgeComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "ng-diagram-default-edge",
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgDiagramBaseEdgeComponent, NgDiagramBaseEdgeLabelComponent, DefaultEdgeLabelComponent],
      template: `<ng-diagram-base-edge class="default-edge" [edge]="edge()">
  @let edgeLabel = label();
  @if (edgeLabel) {
    <ng-diagram-base-edge-label
      class="ng-diagram-default-label"
      [id]="'edge-label'"
      [positionOnEdge]="positionOnEdge()"
    >
      <ng-diagram-default-edge-label>{{ edgeLabel }}</ng-diagram-default-edge-label>
    </ng-diagram-base-edge-label>
  }
</ng-diagram-base-edge>
`,
      styles: ["ng-diagram-base-edge.default-edge{--edge-stroke: var(--ngd-default-edge-stroke);--edge-stroke-transition: stroke .1s ease-in-out}ng-diagram-base-edge.default-edge:hover:not(.selected):not(.temporary){--edge-stroke: var(--ngd-default-edge-stroke-hover);--edge-label-border-color: var(--ngd-default-edge-stroke-hover)}ng-diagram-base-edge.default-edge.selected{--edge-stroke: var(--ngd-default-edge-stroke-selected);--edge-label-border-color: var(--ngd-default-edge-stroke-selected)}ng-diagram-base-edge.default-edge.temporary{--edge-stroke-opacity: .5}\n"]
    }]
  }], null, null);
})();
var NgDiagramMarkerComponent = class _NgDiagramMarkerComponent {
  elementRef = inject(ElementRef);
  markerRegistry = inject(MarkerRegistryService);
  destroyRef = inject(DestroyRef);
  markerId = null;
  ngAfterViewInit() {
    const e = this.elementRef.nativeElement.querySelector("marker");
    if (!e) return void console.warn("[ngDiagram] Marker element not found in projected content");
    const t = e.getAttribute("id");
    t ? (this.markerId = t, this.markerRegistry.registerMarker(t, e), this.destroyRef.onDestroy(() => {
      this.markerId && this.markerRegistry.unregisterMarker(this.markerId);
    })) : console.warn("[ngDiagram] Marker element must have an id attribute");
  }
  static "ɵfac" = function NgDiagramMarkerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramMarkerComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramMarkerComponent,
    selectors: [["ng-diagram-marker"]],
    ngContentSelectors: _c2,
    decls: 1,
    vars: 0,
    template: function NgDiagramMarkerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{display:contents}[_nghost-%COMP%]     svg{position:absolute;pointer-events:none;fill:currentColor}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramMarkerComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-marker",
      standalone: true,
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{display:contents}:host ::ng-deep svg{position:absolute;pointer-events:none;fill:currentColor}\n"]
    }]
  }], null, null);
})();
var NgDiagramMarkerArrowComponent = class _NgDiagramMarkerArrowComponent {
  static "ɵfac" = function NgDiagramMarkerArrowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramMarkerArrowComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramMarkerArrowComponent,
    selectors: [["ng-diagram-marker-arrow"]],
    decls: 5,
    vars: 0,
    consts: [["id", "ng-diagram-arrow", "viewBox", "0 9 8 14", "refX", "6", "refY", "16", "markerWidth", "4", "markerHeight", "7", "orient", "auto-start-reverse"], ["d", "M1 21L6 16L1 11", "stroke", "context-stroke", "fill", "none", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"]],
    template: function NgDiagramMarkerArrowComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "ng-diagram-marker");
        ɵɵnamespaceSVG();
        ɵɵelementStart(1, "svg")(2, "defs")(3, "marker", 0);
        ɵɵelement(4, "path", 1);
        ɵɵelementEnd()()()();
      }
    },
    dependencies: [NgDiagramMarkerComponent],
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramMarkerArrowComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-marker-arrow",
      standalone: true,
      imports: [NgDiagramMarkerComponent],
      template: '\n    <ng-diagram-marker>\n      <svg>\n        <defs>\n          <marker\n            id="ng-diagram-arrow"\n            viewBox="0 9 8 14"\n            refX="6"\n            refY="16"\n            markerWidth="4"\n            markerHeight="7"\n            orient="auto-start-reverse"\n          >\n            <path\n              d="M1 21L6 16L1 11"\n              stroke="context-stroke"\n              fill="none"\n              stroke-width="2"\n              stroke-linecap="round"\n              stroke-linejoin="round"\n            />\n          </marker>\n        </defs>\n      </svg>\n    </ng-diagram-marker>\n  '
    }]
  }], null, null);
})();
var NgDiagramEdgeComponent = class _NgDiagramEdgeComponent {
  static "ɵfac" = function NgDiagramEdgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramEdgeComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramEdgeComponent,
    selectors: [["ng-diagram-edge"]],
    ngContentSelectors: _c2,
    decls: 1,
    vars: 0,
    template: function NgDiagramEdgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{position:absolute;-webkit-user-select:none;user-select:none}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramEdgeComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-edge",
      standalone: true,
      template: "<ng-content />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{position:absolute;-webkit-user-select:none;user-select:none}\n"]
    }]
  }], null, null);
})();
var PointerMoveSelectionDirective = class _PointerMoveSelectionDirective {
  inputEventsRouter = inject(InputEventsRouterService);
  diagramComponent = inject(NgDiagramComponent);
  flowCoreProvider = inject(FlowCoreProviderService);
  touchEventsStateService = inject(TouchEventsStateService);
  targetData = input();
  edgePanningInterval = null;
  cachedDiagramRect = null;
  ngOnDestroy() {
    document.removeEventListener("pointermove", this.onPointerMove), document.removeEventListener("pointerup", this.onPointerUp), this.stopEdgePanning();
  }
  onPointerDown(e) {
    if (!this.shouldHandle(e)) return;
    if (!this.inputEventsRouter.eventGuards.withPrimaryButton(e)) return;
    const t = this.targetData();
    if (!t) return;
    this.touchEventsStateService.currentEvent.set(DiagramEventName.Move), this.cachedDiagramRect = this.diagramComponent.getBoundingClientRect(), e.moveSelectionHandled = true;
    const n = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, n), {
      name: "pointerMoveSelection",
      phase: "start",
      target: t,
      targetType: "node",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      },
      currentDiagramEdge: null
    })), document.addEventListener("pointermove", this.onPointerMove), document.addEventListener("pointerup", this.onPointerUp);
  }
  onPointerUp = (e) => {
    this.inputEventsRouter.eventGuards.withPrimaryButton(e) && this.finishDragging(e);
  };
  onPointerMove = (e) => {
    if (e.zoomingHandled || this.touchEventsStateService.boxSelectionHandled() || this.touchEventsStateService.panningHandled() || this.touchEventsStateService.zoomingHandled()) return void this.finishDragging(e);
    const t = this.targetData();
    if (!t) return;
    const n = this.inputEventsRouter.getBaseEvent(e), {
      selectionMoving: {
        edgePanningThreshold: i,
        edgePanningEnabled: o,
        edgePanningForce: r
      },
      viewportPanningEnabled: a
    } = this.flowCoreProvider.provide().config;
    let s = null;
    a && o && (s = NgDiagramMath.calculateEdgePanningForce(this.cachedDiagramRect || this.diagramComponent.getBoundingClientRect(), {
      x: e.clientX,
      y: e.clientY
    }, i, r), s ? this.startEdgePanning(e.clientX, e.clientY, s) : this.stopEdgePanning()), this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, n), {
      name: "pointerMoveSelection",
      phase: "continue",
      target: t,
      targetType: "node",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      },
      panningForce: s
    }));
  };
  finishDragging(e) {
    const t = this.targetData();
    if (!t) return;
    document.removeEventListener("pointermove", this.onPointerMove), document.removeEventListener("pointerup", this.onPointerUp), this.stopEdgePanning(), this.cachedDiagramRect = null;
    const n = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, n), {
      name: "pointerMoveSelection",
      phase: "end",
      target: t,
      targetType: "node",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      },
      currentDiagramEdge: null
    })), this.touchEventsStateService.clearCurrentEvent();
  }
  shouldHandle(e) {
    return !(!this.flowCoreProvider.provide().config.nodeDraggingEnabled || !(this.targetData()?.draggable ?? 1) || shouldDiscardEvent(e, "drag") || e.zoomingHandled || e.linkingHandled || e.rotateHandled || e.boxSelectionHandled || this.touchEventsStateService.panningHandled() || this.touchEventsStateService.zoomingHandled());
  }
  startEdgePanning(e, t, n) {
    this.stopEdgePanning(), this.edgePanningInterval = window.setInterval(() => {
      const i = this.targetData();
      if (!i) return;
      const o = this.inputEventsRouter.getBaseEvent({});
      this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, o), {
        name: "pointerMoveSelection",
        phase: "continue",
        target: i,
        targetType: "node",
        lastInputPoint: {
          x: e,
          y: t
        },
        panningForce: n
      }));
    }, FPS_60);
  }
  stopEdgePanning() {
    null != this.edgePanningInterval && (window.clearInterval(this.edgePanningInterval), this.edgePanningInterval = null);
  }
  static "ɵfac" = function PointerMoveSelectionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PointerMoveSelectionDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _PointerMoveSelectionDirective,
    selectors: [["", "ngDiagramPointerMoveSelection", ""]],
    hostBindings: function PointerMoveSelectionDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("pointerdown", function PointerMoveSelectionDirective_pointerdown_HostBindingHandler($event) {
          return ctx.onPointerDown($event);
        });
      }
    },
    inputs: {
      targetData: [1, "targetData"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PointerMoveSelectionDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramPointerMoveSelection]",
      standalone: true,
      host: {
        "(pointerdown)": "onPointerDown($event)"
      }
    }]
  }], null, null);
})();
var NgDiagramNodeComponent = class _NgDiagramNodeComponent {
  portsService = inject(UpdatePortsService);
  flowCore = inject(FlowCoreProviderService);
  node = input.required();
  rotate = computed(() => this.node().angle ? `rotate(${this.node().angle}deg)` : "");
  id = computed(() => this.node().id);
  size = computed(() => this.node().size);
  constructor() {
    this.setupPortSyncEffect();
  }
  syncPorts() {
    const e = this.id(), t = this.flowCore.provide();
    if (t.actionStateManager.isResizing()) {
      const n = this.portsService.getNodePortsData(e);
      t.updater.applyPortChanges(e, toPortUpdates(n));
    } else queueMicrotask(() => {
      const n = this.portsService.getNodePortsData(e);
      t.updater.applyPortChanges(e, toPortUpdates(n));
    });
  }
  setupPortSyncEffect() {
    let e, t, n = true;
    effect(() => {
      const i = this.size(), o = this.rotate();
      if (n) return n = false, e = i, void (t = o);
      (i?.width !== e?.width || i?.height !== e?.height || o !== t) && (e = i, t = o, this.syncPorts());
    });
  }
  static "ɵfac" = function NgDiagramNodeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramNodeComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramNodeComponent,
    selectors: [["ng-diagram-node"]],
    inputs: {
      node: [1, "node"]
    },
    features: [ɵɵHostDirectivesFeature([{
      directive: NodeSizeDirective,
      inputs: ["node", "node"]
    }, {
      directive: NodePositionDirective,
      inputs: ["node", "node"]
    }, {
      directive: NodeSelectionDirective,
      inputs: ["targetData", "node"]
    }, {
      directive: PointerMoveSelectionDirective,
      inputs: ["targetData", "node"]
    }, {
      directive: ZIndexDirective,
      inputs: ["data", "node"]
    }])],
    ngContentSelectors: _c2,
    decls: 2,
    vars: 2,
    consts: [[1, "node-content"]],
    template: function NgDiagramNodeComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵdomElementEnd();
      }
      if (rf & 2) {
        ɵɵstyleProp("transform", ctx.rotate());
      }
    },
    styles: ["[_nghost-%COMP%]{position:absolute;top:0;left:0;transform-origin:0 0;pointer-events:none;-webkit-user-select:none;user-select:none;cursor:pointer}.node-content[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;transform-origin:center center;pointer-events:all}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramNodeComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-node",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: NodeSizeDirective,
        inputs: ["node"]
      }, {
        directive: NodePositionDirective,
        inputs: ["node"]
      }, {
        directive: NodeSelectionDirective,
        inputs: ["targetData: node"]
      }, {
        directive: PointerMoveSelectionDirective,
        inputs: ["targetData: node"]
      }, {
        directive: ZIndexDirective,
        inputs: ["data: node"]
      }],
      template: '<div class="node-content" [style.transform]="rotate()">\n  <ng-content />\n</div>\n',
      styles: [":host{position:absolute;top:0;left:0;transform-origin:0 0;pointer-events:none;-webkit-user-select:none;user-select:none;cursor:pointer}.node-content{position:relative;width:100%;height:100%;transform-origin:center center;pointer-events:all}\n"]
    }]
  }], () => [], null);
})();
var NodeContextGuardBase = class {
  nodeComponent = inject(NgDiagramNodeComponent, {
    optional: true
  });
  isRenderedOnCanvas = computed(() => !!this.nodeComponent);
};
var ResizeDirective = class _ResizeDirective {
  inputEventsRouter = inject(InputEventsRouterService);
  touchEventsStateService = inject(TouchEventsStateService);
  direction = input.required();
  targetData = input.required();
  ngOnDestroy() {
    document.removeEventListener("pointermove", this.onPointerMove), document.removeEventListener("pointerup", this.onPointerUp);
  }
  onPointerDown(e) {
    if (!this.shouldHandle(e)) return;
    this.touchEventsStateService.currentEvent.set(DiagramEventName.Resize), e.preventDefault(), e.stopPropagation(), document.addEventListener("pointermove", this.onPointerMove), document.addEventListener("pointerup", this.onPointerUp);
    const t = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, t), {
      name: "resize",
      phase: "start",
      target: this.targetData(),
      direction: this.direction(),
      targetType: "node",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    }));
  }
  onPointerUp = (e) => {
    document.removeEventListener("pointermove", this.onPointerMove), document.removeEventListener("pointerup", this.onPointerUp), this.touchEventsStateService.clearCurrentEvent();
    const t = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, t), {
      name: "resize",
      phase: "end",
      target: this.targetData(),
      direction: this.direction(),
      targetType: "node",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    }));
  };
  onPointerMove = (e) => {
    if (this.touchEventsStateService.panningHandled() || this.touchEventsStateService.zoomingHandled()) return void this.onPointerUp(e);
    const t = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, t), {
      name: "resize",
      phase: "continue",
      target: this.targetData(),
      direction: this.direction(),
      targetType: "node",
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      }
    }));
  };
  shouldHandle(e) {
    return !(e.boxSelectionHandled || this.touchEventsStateService.panningHandled() || this.touchEventsStateService.zoomingHandled());
  }
  static "ɵfac" = function ResizeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _ResizeDirective,
    selectors: [["", "ngDiagramResize", ""]],
    hostBindings: function ResizeDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("pointerdown", function ResizeDirective_pointerdown_HostBindingHandler($event) {
          return ctx.onPointerDown($event);
        });
      }
    },
    inputs: {
      direction: [1, "direction"],
      targetData: [1, "targetData"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramResize]",
      standalone: true,
      host: {
        "(pointerdown)": "onPointerDown($event)"
      }
    }]
  }], null, null);
})();
var NgDiagramResizeHandleComponent = class _NgDiagramResizeHandleComponent {
  position = input.required();
  classes = computed(() => `resize-handle resize-handle--${this.position()}`);
  static "ɵfac" = function NgDiagramResizeHandleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramResizeHandleComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramResizeHandleComponent,
    selectors: [["ng-diagram-resize-handle"]],
    hostVars: 2,
    hostBindings: function NgDiagramResizeHandleComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.classes());
      }
    },
    inputs: {
      position: [1, "position"]
    },
    features: [ɵɵHostDirectivesFeature([{
      directive: ResizeDirective,
      inputs: ["direction", "position", "targetData", "targetData"]
    }])],
    decls: 0,
    vars: 0,
    template: function NgDiagramResizeHandleComponent_Template(rf, ctx) {
    },
    styles: ['[_nghost-%COMP%]:before{content:"";position:absolute;width:16px;height:16px;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%}.resize-handle[_nghost-%COMP%]{position:absolute;width:var(--ngd-resize-handle-size);height:var(--ngd-resize-handle-size);background-color:var(--ngd-resize-handle-background-color);border:var(--ngd-resize-handle-border-size) var(--ngd-resize-handle-border-style) var(--ngd-resize-handle-border-color);border-radius:var(--ngd-resize-handle-border-radius)}.resize-handle--top-left[_nghost-%COMP%]{top:0;left:0;transform:translate(-50%,-50%);cursor:nwse-resize}.resize-handle--top-right[_nghost-%COMP%]{top:0;right:0;transform:translate(50%,-50%);cursor:nesw-resize}.resize-handle--bottom-left[_nghost-%COMP%]{bottom:0;left:0;transform:translate(-50%,50%);cursor:nesw-resize}.resize-handle--bottom-right[_nghost-%COMP%]{bottom:0;right:0;transform:translate(50%,50%);cursor:nwse-resize}']
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramResizeHandleComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-resize-handle",
      standalone: true,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: ResizeDirective,
        inputs: ["direction: position", "targetData"]
      }],
      host: {
        "[class]": "classes()"
      },
      styles: [':host:before{content:"";position:absolute;width:16px;height:16px;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%}:host.resize-handle{position:absolute;width:var(--ngd-resize-handle-size);height:var(--ngd-resize-handle-size);background-color:var(--ngd-resize-handle-background-color);border:var(--ngd-resize-handle-border-size) var(--ngd-resize-handle-border-style) var(--ngd-resize-handle-border-color);border-radius:var(--ngd-resize-handle-border-radius)}:host.resize-handle--top-left{top:0;left:0;transform:translate(-50%,-50%);cursor:nwse-resize}:host.resize-handle--top-right{top:0;right:0;transform:translate(50%,-50%);cursor:nesw-resize}:host.resize-handle--bottom-left{bottom:0;left:0;transform:translate(-50%,50%);cursor:nesw-resize}:host.resize-handle--bottom-right{bottom:0;right:0;transform:translate(50%,50%);cursor:nwse-resize}\n']
    }]
  }], null, null);
})();
var NgDiagramResizeLineComponent = class _NgDiagramResizeLineComponent {
  position = input.required();
  classes = computed(() => `resize-line resize-line--${this.position()}`);
  static "ɵfac" = function NgDiagramResizeLineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramResizeLineComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramResizeLineComponent,
    selectors: [["ng-diagram-resize-line"]],
    hostVars: 2,
    hostBindings: function NgDiagramResizeLineComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.classes());
      }
    },
    inputs: {
      position: [1, "position"]
    },
    features: [ɵɵHostDirectivesFeature([{
      directive: ResizeDirective,
      inputs: ["direction", "position", "targetData", "targetData"]
    }])],
    decls: 0,
    vars: 0,
    template: function NgDiagramResizeLineComponent_Template(rf, ctx) {
    },
    styles: ['[_nghost-%COMP%]:before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.resize-line[_nghost-%COMP%]{position:absolute}.resize-line--top[_nghost-%COMP%]:before, .resize-line--bottom[_nghost-%COMP%]:before{width:100%;height:8px}.resize-line--right[_nghost-%COMP%]:before, .resize-line--left[_nghost-%COMP%]:before{width:8px;height:100%}.resize-line--top[_nghost-%COMP%]{top:0;left:0;width:100%;border-top:var(--ngd-resize-line-border-width) var(--ngd-resize-line-border-style) var(--ngd-resize-line-border-color);cursor:ns-resize;transform:translateY(-50%)}.resize-line--right[_nghost-%COMP%]{top:0;right:0;height:100%;border-right:var(--ngd-resize-line-border-width) var(--ngd-resize-line-border-style) var(--ngd-resize-line-border-color);cursor:ew-resize;transform:translate(50%)}.resize-line--bottom[_nghost-%COMP%]{bottom:0;left:0;width:100%;border-bottom:var(--ngd-resize-line-border-width) var(--ngd-resize-line-border-style) var(--ngd-resize-line-border-color);cursor:ns-resize;transform:translateY(50%)}.resize-line--left[_nghost-%COMP%]{top:0;left:0;height:100%;border-left:var(--ngd-resize-line-border-width) var(--ngd-resize-line-border-style) var(--ngd-resize-line-border-color);cursor:ew-resize;transform:translate(-50%)}']
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramResizeLineComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-resize-line",
      standalone: true,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: ResizeDirective,
        inputs: ["direction: position", "targetData"]
      }],
      host: {
        "[class]": "classes()"
      },
      styles: [':host:before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}:host.resize-line{position:absolute}:host.resize-line--top:before,:host.resize-line--bottom:before{width:100%;height:8px}:host.resize-line--right:before,:host.resize-line--left:before{width:8px;height:100%}:host.resize-line--top{top:0;left:0;width:100%;border-top:var(--ngd-resize-line-border-width) var(--ngd-resize-line-border-style) var(--ngd-resize-line-border-color);cursor:ns-resize;transform:translateY(-50%)}:host.resize-line--right{top:0;right:0;height:100%;border-right:var(--ngd-resize-line-border-width) var(--ngd-resize-line-border-style) var(--ngd-resize-line-border-color);cursor:ew-resize;transform:translate(50%)}:host.resize-line--bottom{bottom:0;left:0;width:100%;border-bottom:var(--ngd-resize-line-border-width) var(--ngd-resize-line-border-style) var(--ngd-resize-line-border-color);cursor:ns-resize;transform:translateY(50%)}:host.resize-line--left{top:0;left:0;height:100%;border-left:var(--ngd-resize-line-border-width) var(--ngd-resize-line-border-style) var(--ngd-resize-line-border-color);cursor:ew-resize;transform:translate(-50%)}\n']
    }]
  }], null, null);
})();
var NgDiagramNodeResizeAdornmentComponent = class _NgDiagramNodeResizeAdornmentComponent extends NodeContextGuardBase {
  diagramService = inject(NgDiagramService);
  defaultResizable = input(void 0);
  nodeData = computed(() => this.nodeComponent?.node());
  dataResizable = computed(() => this.nodeData()?.resizable);
  isResizable = computed(() => this.dataResizable() ?? this.defaultResizable() ?? this.diagramService.config().resize?.defaultResizable);
  showAdornment = computed(() => !!this.isResizable() && this.nodeData()?.selected && this.isRenderedOnCanvas() && !this.nodeData()?.angle);
  linePositions = ["top", "right", "bottom", "left"];
  handlePositions = ["top-left", "top-right", "bottom-left", "bottom-right"];
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵNgDiagramNodeResizeAdornmentComponent_BaseFactory;
    return function NgDiagramNodeResizeAdornmentComponent_Factory(__ngFactoryType__) {
      return (ɵNgDiagramNodeResizeAdornmentComponent_BaseFactory || (ɵNgDiagramNodeResizeAdornmentComponent_BaseFactory = ɵɵgetInheritedFactory(_NgDiagramNodeResizeAdornmentComponent)))(__ngFactoryType__ || _NgDiagramNodeResizeAdornmentComponent);
    };
  })();
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramNodeResizeAdornmentComponent,
    selectors: [["ng-diagram-node-resize-adornment"]],
    inputs: {
      defaultResizable: [1, "defaultResizable"]
    },
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c2,
    decls: 2,
    vars: 1,
    consts: [[3, "position", "targetData"]],
    template: function NgDiagramNodeResizeAdornmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵconditionalCreate(1, NgDiagramNodeResizeAdornmentComponent_Conditional_1_Template, 4, 0);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.showAdornment() ? 1 : -1);
      }
    },
    dependencies: [NgDiagramResizeLineComponent, NgDiagramResizeHandleComponent],
    styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;height:100%}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramNodeResizeAdornmentComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-node-resize-adornment",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgDiagramResizeLineComponent, NgDiagramResizeHandleComponent],
      template: '<ng-content></ng-content>\n\n@if (showAdornment()) {\n  @for (position of linePositions; track position) {\n    <ng-diagram-resize-line [position]="position" [targetData]="nodeData()!" />\n  }\n  @for (position of handlePositions; track position) {\n    <ng-diagram-resize-handle [position]="position" [targetData]="nodeData()!" />\n  }\n}\n',
      styles: [":host{display:flex;position:relative;width:100%;height:100%}\n"]
    }]
  }], null, null);
})();
var NgDiagramDefaultGroupTemplateComponent = class _NgDiagramDefaultGroupTemplateComponent {
  node = input.required();
  isSelected = computed(() => this.node().selected ?? false);
  highlighted = computed(() => this.node().highlighted ?? false);
  classes = computed(() => "ng-diagram-group " + (this.highlighted() ? "highlight" : ""));
  static "ɵfac" = function NgDiagramDefaultGroupTemplateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramDefaultGroupTemplateComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramDefaultGroupTemplateComponent,
    selectors: [["ng-diagram-default-group-template"]],
    inputs: {
      node: [1, "node"]
    },
    ngContentSelectors: _c2,
    decls: 3,
    vars: 3,
    consts: [["ngDiagramNodeSelected", "", "ngDiagramGroupHighlighted", "", 3, "node"]],
    template: function NgDiagramDefaultGroupTemplateComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "ng-diagram-node-resize-adornment")(1, "div", 0);
        ɵɵprojection(2);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵclassMap(ctx.classes());
        ɵɵproperty("node", ctx.node());
      }
    },
    dependencies: [NgDiagramNodeResizeAdornmentComponent, NgDiagramNodeSelectedDirective, NgDiagramGroupHighlightedDirective],
    styles: ["[_nghost-%COMP%]:hover   .ng-diagram-group[_ngcontent-%COMP%]{border-color:var(--ngd-group-border-color-hover)}.ng-diagram-group[_ngcontent-%COMP%]{display:flex;border-radius:var(--ngd-group-border-radius);padding:.625rem;background-color:var(--ngd-node-bg-primary-default);border:.0625rem solid var(--ngd-group-border-color);width:100%;height:100%;box-sizing:border-box}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramDefaultGroupTemplateComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-default-group-template",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgDiagramNodeResizeAdornmentComponent, NgDiagramNodeSelectedDirective, NgDiagramGroupHighlightedDirective],
      template: '<ng-diagram-node-resize-adornment>\n  <div [class]="classes()" ngDiagramNodeSelected ngDiagramGroupHighlighted [node]="node()">\n    <ng-content></ng-content>\n  </div>\n</ng-diagram-node-resize-adornment>\n',
      styles: [":host:hover .ng-diagram-group{border-color:var(--ngd-group-border-color-hover)}.ng-diagram-group{display:flex;border-radius:var(--ngd-group-border-radius);padding:.625rem;background-color:var(--ngd-node-bg-primary-default);border:.0625rem solid var(--ngd-group-border-color);width:100%;height:100%;box-sizing:border-box}\n"]
    }]
  }], null, null);
})();
var originPointClassMap = {
  topLeft: "top-left",
  topCenter: "top-center",
  topRight: "top-right",
  centerLeft: "center-left",
  center: "center",
  centerRight: "center-right",
  bottomLeft: "bottom-left",
  bottomCenter: "bottom-center",
  bottomRight: "bottom-right"
};
var NgDiagramPortComponent = class _NgDiagramPortComponent extends NodeContextGuardBase {
  hostElement = inject(ElementRef);
  flowCoreProvider = inject(FlowCoreProviderService);
  batchResizeObserver = inject(BatchResizeObserverService);
  linkingInputDirective = inject(LinkingInputDirective);
  isInitialized = signal(false);
  lastSide = signal(void 0);
  lastType = signal(void 0);
  lastOriginPoint;
  ownerInternalId;
  nodeData = computed(() => this.nodeComponent?.node());
  id = input.required();
  type = input.required();
  side = input.required();
  originPoint = input("center");
  get portClass() {
    const e = originPointClassMap[this.originPoint()] || "center";
    return `ng-diagram-port ${this.hasContent ? "custom-content" : ""} ${this.side()} origin-${e}`;
  }
  constructor() {
    super(), effect(() => {
      const e = this.nodeData(), t = this.isInitialized(), n = this.side(), i = this.type(), o = this.originPoint();
      if (!t || !e) return;
      const r = {};
      this.lastSide() !== n && (this.lastSide.set(n), r.side = n), this.lastType() !== i && (this.lastType.set(i), r.type = i);
      const a = this.lastOriginPoint !== o;
      a && (this.lastOriginPoint = o), Object.keys(r).length > 0 && this.flowCoreProvider.provide().updater.applyPortChanges(e.id, [{
        portId: this.id(),
        portChanges: r
      }]), (r.side || a) && this.batchResizeObserver.invalidate(this.hostElement.nativeElement);
    }), effect(() => {
      const e = this.nodeData();
      this.isInitialized() && e && untracked(() => {
        this.linkingInputDirective.setTargetNode(e);
      });
    });
  }
  ngOnInit() {
    this.lastSide.set(this.side()), this.lastType.set(this.type()), this.lastOriginPoint = this.originPoint();
    const e = this.nodeData();
    e && (this.ownerInternalId = e._internalId, this.flowCoreProvider.provide().updater.addPort(e.id, {
      id: this.id(),
      type: this.type(),
      nodeId: e.id,
      side: this.side()
    }), this.batchResizeObserver.observe(this.hostElement.nativeElement, {
      type: "port",
      nodeId: e.id,
      portId: this.id()
    }), this.isInitialized.set(true));
  }
  ngOnDestroy() {
    this.batchResizeObserver.unobserve(this.hostElement.nativeElement);
    const e = this.id(), t = this.nodeData();
    if (!t) return;
    const n = this.flowCoreProvider.provide();
    if (!n.isInitialized) return;
    const i = n.getNodeById(t.id);
    i && (this.ownerInternalId && i._internalId !== this.ownerInternalId || n.isVirtualizationActive && !n.isNodeCurrentlyRendered(t.id) || n.internalUpdater.deletePort(t.id, e));
  }
  custom = viewChild("contentProjection");
  hasContent = false;
  ngAfterContentInit() {
    this.hasContent = (this.custom()?.nativeElement?.childNodes?.length ?? 0) > 0;
  }
  static "ɵfac" = function NgDiagramPortComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramPortComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramPortComponent,
    selectors: [["ng-diagram-port"]],
    viewQuery: function NgDiagramPortComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuerySignal(ctx.custom, _c1, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
      }
    },
    hostVars: 5,
    hostBindings: function NgDiagramPortComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-port-id", ctx.id());
        ɵɵclassMap(ctx.portClass);
        ɵɵstyleProp("display", ctx.isRenderedOnCanvas() ? "block" : "none");
      }
    },
    inputs: {
      id: [1, "id"],
      type: [1, "type"],
      side: [1, "side"],
      originPoint: [1, "originPoint"]
    },
    features: [ɵɵHostDirectivesFeature([{
      directive: LinkingInputDirective,
      inputs: ["portId", "id"]
    }]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c2,
    decls: 3,
    vars: 0,
    consts: [["contentProjection", ""], [1, "content-projection"]],
    template: function NgDiagramPortComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "div", 1, 0);
        ɵɵprojection(2);
        ɵɵdomElementEnd();
      }
    },
    styles: ['[_nghost-%COMP%]{position:absolute;width:fit-content;height:fit-content;inset:0;box-sizing:content-box;z-index:2;border-radius:var(--ngd-port-border-radius);cursor:crosshair}[_nghost-%COMP%]:has(.content-projection:not(:empty)){--ngd-port-border-radius: 0%}[_nghost-%COMP%]:has(.content-projection:empty), [_nghost-%COMP%]   .content-projection[_ngcontent-%COMP%]:not(:empty){display:flex;background:var(--ngd-port-background-color);border:var(--ngd-port-border-size) solid var(--ngd-port-border-color);border-radius:var(--ngd-port-border-radius);transition-property:background-color,border-color,outline,box-shadow;transition-timing-function:ease-in-out;transition-duration:.1s;transform-origin:center}[_nghost-%COMP%]:has(.content-projection:empty){width:var(--ngd-port-size);height:var(--ngd-port-size)}[_nghost-%COMP%]:has(.content-projection:empty):before{content:"";position:absolute;width:18px;height:18px;top:50%;left:50%;translate:-50% -50%;border-radius:var(--ngd-port-border-radius)}.left[_nghost-%COMP%]{top:50%;left:0}.right[_nghost-%COMP%]{top:50%;left:100%}.top[_nghost-%COMP%]{top:0;left:50%}.bottom[_nghost-%COMP%]{top:100%;left:50%}.origin-top-left[_nghost-%COMP%]{transform:translate(0)}.origin-top-center[_nghost-%COMP%]{transform:translate(-50%)}.origin-top-right[_nghost-%COMP%]{transform:translate(-100%)}.origin-center-left[_nghost-%COMP%]{transform:translateY(-50%)}.origin-center[_nghost-%COMP%]{transform:translate(-50%,-50%)}.origin-center-right[_nghost-%COMP%]{transform:translate(-100%,-50%)}.origin-bottom-left[_nghost-%COMP%]{transform:translateY(-100%)}.origin-bottom-center[_nghost-%COMP%]{transform:translate(-50%,-100%)}.origin-bottom-right[_nghost-%COMP%]{transform:translate(-100%,-100%)}']
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramPortComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-port",
      standalone: true,
      template: '\n    <div #contentProjection class="content-projection">\n      <ng-content />\n    </div>\n  ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-port-id]": "id()",
        "[class]": "portClass",
        "[style.display]": 'isRenderedOnCanvas() ? "block" : "none"'
      },
      hostDirectives: [{
        directive: LinkingInputDirective,
        inputs: ["portId: id"]
      }],
      styles: [':host{position:absolute;width:fit-content;height:fit-content;inset:0;box-sizing:content-box;z-index:2;border-radius:var(--ngd-port-border-radius);cursor:crosshair}:host:has(.content-projection:not(:empty)){--ngd-port-border-radius: 0%}:host:has(.content-projection:empty),:host .content-projection:not(:empty){display:flex;background:var(--ngd-port-background-color);border:var(--ngd-port-border-size) solid var(--ngd-port-border-color);border-radius:var(--ngd-port-border-radius);transition-property:background-color,border-color,outline,box-shadow;transition-timing-function:ease-in-out;transition-duration:.1s;transform-origin:center}:host:has(.content-projection:empty){width:var(--ngd-port-size);height:var(--ngd-port-size)}:host:has(.content-projection:empty):before{content:"";position:absolute;width:18px;height:18px;top:50%;left:50%;translate:-50% -50%;border-radius:var(--ngd-port-border-radius)}:host.left{top:50%;left:0}:host.right{top:50%;left:100%}:host.top{top:0;left:50%}:host.bottom{top:100%;left:50%}:host.origin-top-left{transform:translate(0)}:host.origin-top-center{transform:translate(-50%)}:host.origin-top-right{transform:translate(-100%)}:host.origin-center-left{transform:translateY(-50%)}:host.origin-center{transform:translate(-50%,-50%)}:host.origin-center-right{transform:translate(-100%,-50%)}:host.origin-bottom-left{transform:translateY(-100%)}:host.origin-bottom-center{transform:translate(-50%,-100%)}:host.origin-bottom-right{transform:translate(-100%,-100%)}\n']
    }]
  }], () => [], null);
})();
var RotateHandleDirective = class _RotateHandleDirective {
  inputEventsRouter = inject(InputEventsRouterService);
  touchEventsStateService = inject(TouchEventsStateService);
  targetData = input();
  ngOnDestroy() {
    this.cleanup();
  }
  onPointerDown(e) {
    if (!this.shouldHandle(e)) return;
    e.rotateHandled = true, this.touchEventsStateService.currentEvent.set(DiagramEventName.Rotate);
    const t = this.targetData();
    if (!t) return;
    const n = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, n), {
      name: "rotate",
      phase: "start",
      target: t,
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      },
      center: this.getNodeCenter(t)
    })), document.addEventListener("pointermove", this.onPointerMove), document.addEventListener("pointerup", this.onPointerUp), document.addEventListener("pointercancel", this.onPointerCancel);
  }
  onPointerMove = (e) => {
    if (this.touchEventsStateService.panningHandled() || this.touchEventsStateService.zoomingHandled()) return void this.onPointerUp(e);
    e.rotateHandled = true;
    const t = this.targetData();
    if (!t) return;
    const n = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, n), {
      name: "rotate",
      phase: "continue",
      target: t,
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      },
      center: this.getNodeCenter(t)
    }));
  };
  onPointerUp = (e) => {
    const t = this.targetData();
    if (!t) return;
    const n = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, n), {
      name: "rotate",
      phase: "end",
      target: t,
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      },
      center: this.getNodeCenter(t)
    })), this.cleanup();
  };
  onPointerCancel = (e) => {
    const t = this.targetData();
    if (!t) return;
    const n = this.inputEventsRouter.getBaseEvent(e);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, n), {
      name: "rotate",
      phase: "end",
      target: t,
      lastInputPoint: {
        x: e.clientX,
        y: e.clientY
      },
      center: this.getNodeCenter(t)
    })), this.cleanup();
  };
  shouldHandle(e) {
    return !(e.boxSelectionHandled || this.touchEventsStateService.panningHandled() || this.touchEventsStateService.zoomingHandled());
  }
  cleanup() {
    this.touchEventsStateService.clearCurrentEvent(), document.removeEventListener("pointermove", this.onPointerMove), document.removeEventListener("pointerup", this.onPointerUp), document.removeEventListener("pointercancel", this.onPointerCancel);
  }
  getNodeCenter(e) {
    const {
      x: t,
      y: n
    } = e.position, {
      width: i,
      height: o
    } = e.size || {
      width: 0,
      height: 0
    };
    return {
      x: t + i / 2,
      y: n + o / 2
    };
  }
  static "ɵfac" = function RotateHandleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RotateHandleDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _RotateHandleDirective,
    selectors: [["", "ngDiagramRotateHandle", ""]],
    hostBindings: function RotateHandleDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("pointerdown", function RotateHandleDirective_pointerdown_HostBindingHandler($event) {
          return ctx.onPointerDown($event);
        });
      }
    },
    inputs: {
      targetData: [1, "targetData"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RotateHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramRotateHandle]",
      standalone: true,
      host: {
        "(pointerdown)": "onPointerDown($event)"
      }
    }]
  }], null, null);
})();
var NgDiagramRotateHandleComponent = class _NgDiagramRotateHandleComponent {
  custom = viewChild("contentProjection");
  data = input.required();
  isRotating = signal(false);
  hasCustomHandle = false;
  ngAfterContentInit() {
    this.hasCustomHandle = (this.custom()?.nativeElement?.childNodes?.length ?? 0) > 0;
  }
  get pointerDownAttr() {
    return this.isRotating() ? "true" : null;
  }
  pointerDown() {
    this.isRotating.set(true);
  }
  pointerUp() {
    this.isRotating.set(false);
  }
  static "ɵfac" = function NgDiagramRotateHandleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramRotateHandleComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramRotateHandleComponent,
    selectors: [["ng-diagram-rotate-handle"]],
    viewQuery: function NgDiagramRotateHandleComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuerySignal(ctx.custom, _c1, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
      }
    },
    hostVars: 5,
    hostBindings: function NgDiagramRotateHandleComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("pointerdown", function NgDiagramRotateHandleComponent_pointerdown_HostBindingHandler() {
          return ctx.pointerDown();
        })("pointerup", function NgDiagramRotateHandleComponent_pointerup_HostBindingHandler() {
          return ctx.pointerUp();
        }, ɵɵresolveDocument);
      }
      if (rf & 2) {
        ɵɵattribute("data-rotating", ctx.pointerDownAttr);
        ɵɵclassProp("rotate-handle", !ctx.hasCustomHandle)("ng-diagram-rotate-handle", true);
      }
    },
    inputs: {
      data: [1, "data"]
    },
    features: [ɵɵHostDirectivesFeature([{
      directive: RotateHandleDirective,
      inputs: ["targetData", "data"]
    }])],
    ngContentSelectors: _c2,
    decls: 4,
    vars: 1,
    consts: [["contentProjection", ""], [1, "content-projection"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "19", "viewBox", "0 0 18 19", "fill", "none"], ["d", "M15.75 9.5637C15.7502 11.3383 15.0515 13.0416 13.8051 14.3049C12.5588 15.5682 10.8651 16.2899 9.0907 16.3137H9C7.27611 16.318 5.61676 15.6583 4.36641 14.4715C4.31271 14.4207 4.26955 14.3599 4.23938 14.2924C4.20921 14.2249 4.19262 14.1522 4.19056 14.0783C4.1885 14.0044 4.20102 13.9309 4.22739 13.8618C4.25376 13.7928 4.29347 13.7296 4.34426 13.6759C4.39504 13.6222 4.45591 13.5791 4.52337 13.5489C4.59084 13.5187 4.66359 13.5021 4.73746 13.5001C4.81134 13.498 4.8849 13.5105 4.95394 13.5369C5.02298 13.5633 5.08615 13.603 5.13984 13.6538C5.94408 14.4122 6.95396 14.9169 8.04335 15.1047C9.13273 15.2926 10.2533 15.1553 11.2651 14.7099C12.2769 14.2646 13.1351 13.531 13.7324 12.6008C14.3297 11.6706 14.6396 10.585 14.6235 9.4797C14.6075 8.37436 14.266 7.29826 13.6419 6.38583C13.0178 5.4734 12.1387 4.76509 11.1144 4.34939C10.09 3.9337 8.96594 3.82904 7.88249 4.04849C6.79903 4.26794 5.80425 4.80178 5.02242 5.58331C5.01668 5.58952 5.01057 5.59539 5.00414 5.60089L3.13523 7.3137H5.0625C5.21168 7.3137 5.35476 7.37296 5.46025 7.47845C5.56574 7.58394 5.625 7.72701 5.625 7.8762C5.625 8.02538 5.56574 8.16846 5.46025 8.27395C5.35476 8.37944 5.21168 8.4387 5.0625 8.4387H1.6875C1.53832 8.4387 1.39524 8.37944 1.28975 8.27395C1.18426 8.16846 1.125 8.02538 1.125 7.8762V4.5012C1.125 4.35201 1.18426 4.20894 1.28975 4.10345C1.39524 3.99796 1.53832 3.9387 1.6875 3.9387C1.83668 3.9387 1.97976 3.99796 2.08525 4.10345C2.19074 4.20894 2.25 4.35201 2.25 4.5012V6.59651L4.23633 4.78245C5.18131 3.84113 6.384 3.20089 7.69256 2.94253C9.00112 2.68418 10.3569 2.8193 11.5887 3.33084C12.8205 3.84238 13.8732 4.7074 14.6138 5.81671C15.3544 6.92602 15.7498 8.22988 15.75 9.5637Z", "fill", "white"]],
    template: function NgDiagramRotateHandleComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "div", 1, 0);
        ɵɵprojection(2);
        ɵɵdomElementEnd();
        ɵɵconditionalCreate(3, NgDiagramRotateHandleComponent_Conditional_3_Template, 2, 0, ":svg:svg", 2);
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵconditional(!ctx.hasCustomHandle ? 3 : -1);
      }
    },
    styles: [".content-projection[_ngcontent-%COMP%]:not(:empty){width:100%;height:100%}.rotate-handle[_nghost-%COMP%]{background-color:var(--ngd-rotate-handle-background-color);border-radius:50%;transition:background-color .1s ease-in-out}.rotate-handle[_nghost-%COMP%]:hover, .rotate-handle[_nghost-%COMP%]:focus-visible{background-color:var(--ngd-rotate-handle-background-color-hover)}.rotate-handle[data-rotating][_nghost-%COMP%], .rotate-handle.active[_nghost-%COMP%]{background-color:var(--ngd-rotate-handle-background-color-active)}[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:var(--ngd-rotate-handle-size);height:var(--ngd-rotate-handle-size);position:absolute;transform:translate(50%,-50%);z-index:10;box-sizing:border-box;pointer-events:auto;cursor:grab;top:var(--ngd-rotate-handle-top);right:var(--ngd-rotate-handle-right);bottom:var(--ngd-rotate-handle-bottom);left:var(--ngd-rotate-handle-left)}[data-rotating][_nghost-%COMP%], .active[_nghost-%COMP%], .active[_nghost-%COMP%], .active   [_nghost-%COMP%]{cursor:grabbing}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramRotateHandleComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-rotate-handle",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.rotate-handle]": "!hasCustomHandle",
        "[class.ng-diagram-rotate-handle]": "true"
      },
      hostDirectives: [{
        directive: RotateHandleDirective,
        inputs: ["targetData: data"]
      }],
      template: '<div #contentProjection class="content-projection">\n  <ng-content></ng-content>\n</div>\n\n@if (!hasCustomHandle) {\n  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">\n    <path\n      d="M15.75 9.5637C15.7502 11.3383 15.0515 13.0416 13.8051 14.3049C12.5588 15.5682 10.8651 16.2899 9.0907 16.3137H9C7.27611 16.318 5.61676 15.6583 4.36641 14.4715C4.31271 14.4207 4.26955 14.3599 4.23938 14.2924C4.20921 14.2249 4.19262 14.1522 4.19056 14.0783C4.1885 14.0044 4.20102 13.9309 4.22739 13.8618C4.25376 13.7928 4.29347 13.7296 4.34426 13.6759C4.39504 13.6222 4.45591 13.5791 4.52337 13.5489C4.59084 13.5187 4.66359 13.5021 4.73746 13.5001C4.81134 13.498 4.8849 13.5105 4.95394 13.5369C5.02298 13.5633 5.08615 13.603 5.13984 13.6538C5.94408 14.4122 6.95396 14.9169 8.04335 15.1047C9.13273 15.2926 10.2533 15.1553 11.2651 14.7099C12.2769 14.2646 13.1351 13.531 13.7324 12.6008C14.3297 11.6706 14.6396 10.585 14.6235 9.4797C14.6075 8.37436 14.266 7.29826 13.6419 6.38583C13.0178 5.4734 12.1387 4.76509 11.1144 4.34939C10.09 3.9337 8.96594 3.82904 7.88249 4.04849C6.79903 4.26794 5.80425 4.80178 5.02242 5.58331C5.01668 5.58952 5.01057 5.59539 5.00414 5.60089L3.13523 7.3137H5.0625C5.21168 7.3137 5.35476 7.37296 5.46025 7.47845C5.56574 7.58394 5.625 7.72701 5.625 7.8762C5.625 8.02538 5.56574 8.16846 5.46025 8.27395C5.35476 8.37944 5.21168 8.4387 5.0625 8.4387H1.6875C1.53832 8.4387 1.39524 8.37944 1.28975 8.27395C1.18426 8.16846 1.125 8.02538 1.125 7.8762V4.5012C1.125 4.35201 1.18426 4.20894 1.28975 4.10345C1.39524 3.99796 1.53832 3.9387 1.6875 3.9387C1.83668 3.9387 1.97976 3.99796 2.08525 4.10345C2.19074 4.20894 2.25 4.35201 2.25 4.5012V6.59651L4.23633 4.78245C5.18131 3.84113 6.384 3.20089 7.69256 2.94253C9.00112 2.68418 10.3569 2.8193 11.5887 3.33084C12.8205 3.84238 13.8732 4.7074 14.6138 5.81671C15.3544 6.92602 15.7498 8.22988 15.75 9.5637Z"\n      fill="white"\n    />\n  </svg>\n}\n',
      styles: [".content-projection:not(:empty){width:100%;height:100%}:host(.rotate-handle){background-color:var(--ngd-rotate-handle-background-color);border-radius:50%;transition:background-color .1s ease-in-out}:host(.rotate-handle):hover,:host(.rotate-handle):focus-visible{background-color:var(--ngd-rotate-handle-background-color-hover)}:host(.rotate-handle)[data-rotating],:host(.rotate-handle).active{background-color:var(--ngd-rotate-handle-background-color-active)}:host{display:flex;justify-content:center;align-items:center;width:var(--ngd-rotate-handle-size);height:var(--ngd-rotate-handle-size);position:absolute;transform:translate(50%,-50%);z-index:10;box-sizing:border-box;pointer-events:auto;cursor:grab;top:var(--ngd-rotate-handle-top);right:var(--ngd-rotate-handle-right);bottom:var(--ngd-rotate-handle-bottom);left:var(--ngd-rotate-handle-left)}:host([data-rotating]),:host(.active),:host-context(.active){cursor:grabbing}\n"]
    }]
  }], null, {
    pointerDownAttr: [{
      type: HostBinding,
      args: ["attr.data-rotating"]
    }],
    pointerDown: [{
      type: HostListener,
      args: ["pointerdown"]
    }],
    pointerUp: [{
      type: HostListener,
      args: ["document:pointerup"]
    }]
  });
})();
var NgDiagramNodeRotateAdornmentComponent = class _NgDiagramNodeRotateAdornmentComponent extends NodeContextGuardBase {
  diagramService = inject(NgDiagramService);
  defaultRotatable = input(void 0);
  dataRotatable = computed(() => this.nodeData()?.rotatable);
  isRotating = signal(false);
  nodeData = computed(() => this.nodeComponent?.node());
  isRotatable = computed(() => this.dataRotatable() ?? this.defaultRotatable() ?? this.diagramService.config().nodeRotation?.defaultRotatable);
  eventTarget = computed(() => ({
    type: "rotate-handle",
    element: this.nodeData()
  }));
  showAdornment = computed(() => !!this.nodeData()?.selected && this.isRenderedOnCanvas() && !!this.isRotatable());
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵNgDiagramNodeRotateAdornmentComponent_BaseFactory;
    return function NgDiagramNodeRotateAdornmentComponent_Factory(__ngFactoryType__) {
      return (ɵNgDiagramNodeRotateAdornmentComponent_BaseFactory || (ɵNgDiagramNodeRotateAdornmentComponent_BaseFactory = ɵɵgetInheritedFactory(_NgDiagramNodeRotateAdornmentComponent)))(__ngFactoryType__ || _NgDiagramNodeRotateAdornmentComponent);
    };
  })();
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramNodeRotateAdornmentComponent,
    selectors: [["ng-diagram-node-rotate-adornment"]],
    hostAttrs: [1, "node-rotate-adornment"],
    inputs: {
      defaultRotatable: [1, "defaultRotatable"]
    },
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c2,
    decls: 1,
    vars: 1,
    consts: [[3, "data"]],
    template: function NgDiagramNodeRotateAdornmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵconditionalCreate(0, NgDiagramNodeRotateAdornmentComponent_Conditional_0_Template, 2, 1, "ng-diagram-rotate-handle", 0);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.showAdornment() ? 0 : -1);
      }
    },
    dependencies: [NgDiagramRotateHandleComponent],
    styles: ["[_nghost-%COMP%]{position:absolute;inset:0;pointer-events:none}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramNodeRotateAdornmentComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-node-rotate-adornment",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgDiagramRotateHandleComponent],
      host: {
        class: "node-rotate-adornment"
      },
      template: '@if (showAdornment()) {\n  <ng-diagram-rotate-handle [data]="nodeData()!">\n    <ng-content />\n  </ng-diagram-rotate-handle>\n}\n',
      styles: [":host{position:absolute;inset:0;pointer-events:none}\n"]
    }]
  }], null, null);
})();
var NgDiagramBaseNodeTemplateComponent = class _NgDiagramBaseNodeTemplateComponent {
  diagramService = inject(NgDiagramService);
  node = input.required();
  isSelected = computed(() => this.node().selected ?? false);
  classes = computed(() => "node " + (this.isSelected() ? "isSelected" : ""));
  enablePortHover = computed(() => !this.diagramService.actionState().resize);
  static "ɵfac" = function NgDiagramBaseNodeTemplateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramBaseNodeTemplateComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramBaseNodeTemplateComponent,
    selectors: [["ng-diagram-base-node-template"]],
    hostVars: 4,
    hostBindings: function NgDiagramBaseNodeTemplateComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("isSelected", ctx.isSelected())("ng-diagram-port-hoverable-over-node", ctx.enablePortHover());
      }
    },
    inputs: {
      node: [1, "node"]
    },
    ngContentSelectors: _c2,
    decls: 6,
    vars: 3,
    consts: [["ngDiagramNodeSelected", "", 3, "node"], ["id", "port-left", "type", "both", "side", "left"], ["id", "port-right", "type", "both", "side", "right"]],
    template: function NgDiagramBaseNodeTemplateComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelement(0, "ng-diagram-node-rotate-adornment");
        ɵɵelementStart(1, "ng-diagram-node-resize-adornment")(2, "div", 0);
        ɵɵprojection(3);
        ɵɵelementEnd();
        ɵɵelement(4, "ng-diagram-port", 1)(5, "ng-diagram-port", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵclassMap(ctx.classes());
        ɵɵproperty("node", ctx.node());
      }
    },
    dependencies: [NgDiagramPortComponent, NgDiagramNodeSelectedDirective, NgDiagramNodeResizeAdornmentComponent, NgDiagramNodeRotateAdornmentComponent],
    styles: ["[_nghost-%COMP%]:hover   .node[_ngcontent-%COMP%]{border-color:var(--ngd-node-border-color-hover)}.node[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:.5rem;width:100%;background-color:var(--ngd-node-bg-primary-default);border:var(--ngd-node-border-size) solid var(--ngd-node-border-color);color:var(--ngd-txt-primary-default);border-radius:var(--ngd-node-border-radius)}.node.isSelected[_ngcontent-%COMP%]{border-color:var(--ngd-node-border-color-hover)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramBaseNodeTemplateComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-base-node-template",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgDiagramPortComponent, NgDiagramNodeSelectedDirective, NgDiagramNodeResizeAdornmentComponent, NgDiagramNodeRotateAdornmentComponent],
      host: {
        "[class.isSelected]": "isSelected()",
        "[class.ng-diagram-port-hoverable-over-node]": "enablePortHover()"
      },
      template: '<ng-diagram-node-rotate-adornment />\n<ng-diagram-node-resize-adornment>\n  <div [class]="classes()" ngDiagramNodeSelected [node]="node()">\n    <ng-content></ng-content>\n  </div>\n  <ng-diagram-port id="port-left" type="both" side="left" />\n  <ng-diagram-port id="port-right" type="both" side="right" />\n</ng-diagram-node-resize-adornment>\n',
      styles: [":host:hover .node{border-color:var(--ngd-node-border-color-hover)}.node{display:flex;justify-content:center;align-items:center;padding:.5rem;width:100%;background-color:var(--ngd-node-bg-primary-default);border:var(--ngd-node-border-size) solid var(--ngd-node-border-color);color:var(--ngd-txt-primary-default);border-radius:var(--ngd-node-border-radius)}.node.isSelected{border-color:var(--ngd-node-border-color-hover)}\n"]
    }]
  }], null, null);
})();
var NgDiagramDefaultNodeTemplateComponent = class _NgDiagramDefaultNodeTemplateComponent {
  node = input.required();
  label = computed(() => {
    const e = this.node().data;
    return "label" in e ? e.label : this.node().id;
  });
  static "ɵfac" = function NgDiagramDefaultNodeTemplateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramDefaultNodeTemplateComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramDefaultNodeTemplateComponent,
    selectors: [["ng-diagram-default-node-template"]],
    inputs: {
      node: [1, "node"]
    },
    decls: 3,
    vars: 2,
    consts: [[3, "node"]],
    template: function NgDiagramDefaultNodeTemplateComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "ng-diagram-base-node-template", 0)(1, "span");
        ɵɵtext(2);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵproperty("node", ctx.node());
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.label());
      }
    },
    dependencies: [NgDiagramBaseNodeTemplateComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramDefaultNodeTemplateComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-default-node-template",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgDiagramBaseNodeTemplateComponent],
      template: '<ng-diagram-base-node-template [node]="node()">\n  <span>{{ label() }}</span>\n</ng-diagram-base-node-template>\n'
    }]
  }], null, null);
})();
var PanelRegistryService = class _PanelRegistryService {
  panel = signal(null);
  position = computed(() => this.panel()?.position());
  register(e) {
    this.panel.set(e);
  }
  unregister() {
    this.panel.set(null);
  }
  static "ɵfac" = function PanelRegistryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelRegistryService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _PanelRegistryService,
    factory: _PanelRegistryService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelRegistryService, [{
    type: Injectable
  }], null, null);
})();
var FALLBACKS = {
  "bottom-right": ["top-right", "bottom-left", "top-left"],
  "top-right": ["bottom-right", "top-left", "bottom-left"],
  "bottom-left": ["top-left", "bottom-right", "top-right"],
  "top-left": ["bottom-left", "top-right", "bottom-right"]
};
var NgDiagramWatermarkComponent = class _NgDiagramWatermarkComponent {
  preferredPosition = input(void 0);
  panelRegistry = inject(PanelRegistryService);
  position = computed(() => {
    const e = this.preferredPosition() ?? "bottom-right", t = this.panelRegistry.position();
    return t !== e ? e : FALLBACKS[e].find((e2) => e2 !== t) ?? e;
  });
  static "ɵfac" = function NgDiagramWatermarkComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramWatermarkComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramWatermarkComponent,
    selectors: [["ng-diagram-watermark"]],
    hostVars: 2,
    hostBindings: function NgDiagramWatermarkComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.position());
      }
    },
    inputs: {
      preferredPosition: [1, "preferredPosition"]
    },
    decls: 5,
    vars: 0,
    consts: [["href", "https://www.ngdiagram.dev/", "target", "_blank"], [1, "sr-only"], ["width", "479", "height", "90", "viewBox", "0 0 479 90", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M78.1895 20.5088C82.5953 20.5088 85.9324 21.2858 88.2002 22.8408C90.468 24.3959 92.1205 26.0165 93.1572 27.7012H94.9062V21.8691H106.958V78.6289C106.958 81.9333 105.986 84.5572 104.042 86.501C102.098 88.5096 99.5063 89.5146 96.2666 89.5146H64V78.8232H91.9902C93.8044 78.8232 94.7119 77.8511 94.7119 75.9072V63.3701H92.9629C92.315 64.4068 91.4075 65.4757 90.2412 66.5771C89.075 67.6138 87.5199 68.4884 85.5762 69.2012C83.6324 69.9139 81.1699 70.2705 78.1895 70.2705C74.2371 70.2705 70.5762 69.3312 67.207 67.4521C63.9026 65.5083 61.2459 62.7541 59.2373 59.1904C57.2288 55.562 56.2246 51.2208 56.2246 46.167V44.6123C56.2246 39.5584 57.2287 35.2492 59.2373 31.6855C61.2458 28.0572 63.9027 25.3038 67.207 23.4248C70.5763 21.481 74.2371 20.5088 78.1895 20.5088ZM278.176 20.5088C282.582 20.5088 285.919 21.2858 288.187 22.8408C290.454 24.3959 292.107 26.0165 293.144 27.7012H294.893V21.8691H306.944V78.6289C306.944 81.9333 305.972 84.5572 304.028 86.501C302.085 88.5096 299.493 89.5146 296.253 89.5146H263.986V78.8232H291.977C293.791 78.8232 294.698 77.8511 294.698 75.9072V63.3701H292.949C292.301 64.4068 291.394 65.4757 290.228 66.5771C289.061 67.6138 287.506 68.4885 285.562 69.2012C283.619 69.9139 281.156 70.2705 278.176 70.2705C274.223 70.2705 270.563 69.3311 267.193 67.4521C263.889 65.5083 261.232 62.7541 259.224 59.1904C257.215 55.562 256.211 51.2208 256.211 46.167V44.6123C256.211 39.5584 257.215 35.2492 259.224 31.6855C261.232 28.0572 263.889 25.3038 267.193 23.4248C270.563 21.481 274.223 20.5088 278.176 20.5088ZM225.268 20.5088C231.617 20.5088 236.639 22.0958 240.332 25.2705C244.025 28.4454 245.872 33.0464 245.872 39.0723V57.0527C245.872 58.9964 246.78 59.9678 248.594 59.9678H252.481V70.0762H244.317C241.92 70.0762 239.944 69.4933 238.389 68.3271C236.834 67.1609 236.056 65.605 236.056 63.6611V63.5645H234.209C233.95 64.342 233.367 65.3791 232.46 66.6748C231.553 67.9058 230.127 69.0067 228.184 69.9785C226.24 70.9504 223.583 71.4365 220.214 71.4365C216.78 71.4365 213.703 70.8537 210.981 69.6875C208.26 68.4565 206.09 66.707 204.47 64.4395C202.915 62.1069 202.137 59.2879 202.137 55.9834C202.137 52.6789 202.915 49.9247 204.47 47.7217C206.09 45.4541 208.292 43.7694 211.078 42.668C213.929 41.5017 217.169 40.919 220.797 40.9189H234.015V38.1973C234.015 35.9295 233.302 34.0827 231.877 32.6572C230.451 31.167 228.183 30.4219 225.073 30.4219C222.028 30.4219 219.761 31.1351 218.271 32.5605C216.78 33.9212 215.808 35.7032 215.354 37.9062L204.08 34.1152C204.858 31.6531 206.089 29.4178 207.773 27.4092C209.523 25.3358 211.823 23.6832 214.674 22.4521C217.589 21.1563 221.121 20.5088 225.268 20.5088ZM374.047 20.5088C380.396 20.5088 385.418 22.0959 389.111 25.2705C392.805 28.4454 394.651 33.0464 394.651 39.0723V57.0527C394.651 58.9964 395.559 59.9678 397.373 59.9678H401.261V70.0762H393.097C390.699 70.0762 388.723 69.4933 387.168 68.3271C385.613 67.1609 384.835 65.605 384.835 63.6611V63.5645H382.988C382.729 64.342 382.146 65.3791 381.239 66.6748C380.332 67.9058 378.906 69.0067 376.963 69.9785C375.019 70.9504 372.362 71.4365 368.993 71.4365C365.559 71.4365 362.482 70.8537 359.761 69.6875C357.04 68.4565 354.869 66.707 353.249 64.4395C351.694 62.1069 350.916 59.2879 350.916 55.9834C350.916 52.6789 351.694 49.9247 353.249 47.7217C354.869 45.4541 357.072 43.7694 359.857 42.668C362.708 41.5017 365.948 40.919 369.576 40.9189H382.794V38.1973C382.794 35.9295 382.082 34.0827 380.656 32.6572C379.231 31.167 376.963 30.4219 373.853 30.4219C370.807 30.4219 368.54 31.1351 367.05 32.5605C365.56 33.9212 364.587 35.7032 364.134 37.9062L352.859 34.1152C353.637 31.6531 354.868 29.4178 356.553 27.4092C358.302 25.3358 360.602 23.6832 363.453 22.4521C366.369 21.1563 369.9 20.5088 374.047 20.5088ZM28.5029 21.0918C32.2609 21.0918 35.5332 21.9664 38.3193 23.7158C41.1701 25.4004 43.3727 27.7654 44.9277 30.8105C46.4828 33.7911 47.2607 37.2904 47.2607 41.3076V70.0762H35.0146V42.2793C35.0146 38.6509 34.1072 35.9294 32.293 34.1152C30.5436 32.3012 28.017 31.3936 24.7129 31.3936C20.9549 31.3936 18.0392 32.6577 15.9658 35.1846C13.8924 37.6468 12.8555 41.1132 12.8555 45.584V70.0762H0.609375V21.8691H12.6611V28.1865H14.4102C15.1877 26.5019 16.6461 24.915 18.7842 23.4248C20.9224 21.8697 24.1618 21.0918 28.5029 21.0918ZM144.251 2.04199C153.387 2.04207 160.319 4.37504 165.049 9.04004C169.844 13.6404 172.241 20.5086 172.241 29.6445V42.4736C172.241 51.6096 169.844 58.5106 165.049 63.1758C160.319 67.7759 153.386 70.0761 144.251 70.0762H116.26V58.8018H125.201V13.3164H116.26V2.04199H144.251ZM193.622 70.0762H181.376V21.8691H193.622V70.0762ZM347.539 32.5605H341.513C338.403 32.5606 335.843 33.4024 333.835 35.0869C331.826 36.7067 330.822 39.234 330.822 42.668V70.0762H318.576V21.8691H330.628V27.3115H332.377C333.09 25.3679 334.256 23.9422 335.876 23.0352C337.56 22.1281 339.504 21.6749 341.707 21.6748H347.539V32.5605ZM461.921 21.0918C464.901 21.0919 467.59 21.7394 469.987 23.0352C472.449 24.2662 474.393 26.1779 475.818 28.7695C477.309 31.2965 478.054 34.504 478.054 38.3916V70.0762H465.808V39.2666C465.808 36.61 465.127 34.6338 463.767 33.3379C462.406 31.9774 460.495 31.2969 458.033 31.2969C455.247 31.2969 453.077 32.2043 451.521 34.0186C450.031 35.7679 449.286 38.2944 449.286 41.5986V70.0762H437.04V39.2666C437.04 36.6101 436.36 34.6338 434.999 33.3379C433.638 31.9772 431.727 31.2969 429.265 31.2969C426.479 31.2969 424.308 32.2043 422.753 34.0186C421.263 35.7679 420.518 38.2945 420.518 41.5986V70.0762H408.271V21.8691H420.323V27.1172H422.072C422.915 25.4974 424.308 24.1047 426.252 22.9385C428.196 21.7075 430.755 21.0918 433.93 21.0918C437.364 21.0918 440.117 21.7723 442.19 23.1328C444.264 24.4287 445.852 26.146 446.953 28.2842H448.702C449.804 26.2108 451.36 24.4935 453.368 23.1328C455.377 21.7723 458.228 21.0918 461.921 21.0918ZM221.672 50.0547C219.404 50.0547 217.622 50.5408 216.326 51.5127C215.03 52.4846 214.383 53.8454 214.383 55.5947C214.383 57.3441 215.063 58.7696 216.424 59.8711C217.784 60.9725 219.761 61.5234 222.353 61.5234C225.786 61.5234 228.573 60.5841 230.711 58.7051C232.914 56.7613 234.015 54.2013 234.015 51.0264V50.0547H221.672ZM370.451 50.0547C368.183 50.0547 366.401 50.5408 365.105 51.5127C363.81 52.4846 363.162 53.8454 363.162 55.5947C363.162 57.3441 363.842 58.7696 365.203 59.8711C366.564 60.9725 368.54 61.5234 371.132 61.5234C374.566 61.5234 377.352 60.5841 379.49 58.7051C381.693 56.7613 382.794 54.2013 382.794 51.0264V50.0547H370.451ZM81.6885 31.1992C77.9305 31.1992 74.7877 32.3985 72.2607 34.7959C69.734 37.1284 68.4708 40.4976 68.4707 44.9033V45.876C68.4708 50.2169 69.734 53.5861 72.2607 55.9834C74.7877 58.3808 77.9305 59.5791 81.6885 59.5791C85.4465 59.5791 88.5893 58.3808 91.1162 55.9834C93.6429 53.5861 94.9062 50.2169 94.9062 45.876V44.9033C94.9062 40.4976 93.6429 37.1284 91.1162 34.7959C88.6541 32.3985 85.5113 31.1992 81.6885 31.1992ZM281.675 31.1992C277.917 31.1992 274.774 32.3985 272.247 34.7959C269.72 37.1284 268.457 40.4976 268.457 44.9033V45.876C268.457 50.2169 269.72 53.5861 272.247 55.9834C274.774 58.3808 277.917 59.5791 281.675 59.5791C285.433 59.5791 288.576 58.3808 291.103 55.9834C293.629 53.5861 294.892 50.2169 294.893 45.876V44.9033C294.893 40.4976 293.629 37.1284 291.103 34.7959C288.64 32.3985 285.498 31.1992 281.675 31.1992ZM138.03 58.4131H144.445C149.629 58.413 153.419 57.0523 155.816 54.3311C158.214 51.6097 159.412 47.7866 159.412 42.8623V29.2559C159.412 24.2668 158.214 20.4437 155.816 17.7871C153.419 15.0658 149.629 13.7052 144.445 13.7051H138.03V58.4131ZM187.499 0.681641C189.767 0.681641 191.646 1.3939 193.137 2.81934C194.627 4.24481 195.372 6.12444 195.372 8.45703C195.372 10.7894 194.627 12.6683 193.137 14.0938C191.646 15.5192 189.767 16.2324 187.499 16.2324C185.296 16.2324 183.417 15.5192 181.862 14.0938C180.372 12.6683 179.627 10.7895 179.627 8.45703C179.627 6.12444 180.372 4.24481 181.862 2.81934C183.417 1.39408 185.296 0.681711 187.499 0.681641Z"]],
    template: function NgDiagramWatermarkComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵdomElementStart(0, "a", 0)(1, "span", 1);
        ɵɵtext(2, "ngDiagram");
        ɵɵdomElementEnd();
        ɵɵnamespaceSVG();
        ɵɵdomElementStart(3, "svg", 2);
        ɵɵdomElement(4, "path", 3);
        ɵɵdomElementEnd()();
      }
    },
    styles: ["[_nghost-%COMP%]{position:absolute;width:var(--watermark-size)}.bottom-right[_nghost-%COMP%]{bottom:1rem;right:1rem}.top-right[_nghost-%COMP%]{top:1rem;right:1rem}.bottom-left[_nghost-%COMP%]{bottom:1rem;left:1rem}.top-left[_nghost-%COMP%]{top:1rem;left:1rem}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{opacity:.7;height:100%;width:100%;display:block}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--watermark-fill)}[_nghost-%COMP%]   [_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]{--watermark-size: min(4rem, 10%);--watermark-fill: #b3b3b3}[_nghost-%COMP%]   .sr-only[_ngcontent-%COMP%]{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}"],
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramWatermarkComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-watermark",
      standalone: true,
      host: {
        "[class]": "position()"
      },
      template: '<a href="https://www.ngdiagram.dev/" target="_blank">\n  <span class="sr-only">ngDiagram</span>\n  <svg width="479" height="90" viewBox="0 0 479 90" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path\n      d="M78.1895 20.5088C82.5953 20.5088 85.9324 21.2858 88.2002 22.8408C90.468 24.3959 92.1205 26.0165 93.1572 27.7012H94.9062V21.8691H106.958V78.6289C106.958 81.9333 105.986 84.5572 104.042 86.501C102.098 88.5096 99.5063 89.5146 96.2666 89.5146H64V78.8232H91.9902C93.8044 78.8232 94.7119 77.8511 94.7119 75.9072V63.3701H92.9629C92.315 64.4068 91.4075 65.4757 90.2412 66.5771C89.075 67.6138 87.5199 68.4884 85.5762 69.2012C83.6324 69.9139 81.1699 70.2705 78.1895 70.2705C74.2371 70.2705 70.5762 69.3312 67.207 67.4521C63.9026 65.5083 61.2459 62.7541 59.2373 59.1904C57.2288 55.562 56.2246 51.2208 56.2246 46.167V44.6123C56.2246 39.5584 57.2287 35.2492 59.2373 31.6855C61.2458 28.0572 63.9027 25.3038 67.207 23.4248C70.5763 21.481 74.2371 20.5088 78.1895 20.5088ZM278.176 20.5088C282.582 20.5088 285.919 21.2858 288.187 22.8408C290.454 24.3959 292.107 26.0165 293.144 27.7012H294.893V21.8691H306.944V78.6289C306.944 81.9333 305.972 84.5572 304.028 86.501C302.085 88.5096 299.493 89.5146 296.253 89.5146H263.986V78.8232H291.977C293.791 78.8232 294.698 77.8511 294.698 75.9072V63.3701H292.949C292.301 64.4068 291.394 65.4757 290.228 66.5771C289.061 67.6138 287.506 68.4885 285.562 69.2012C283.619 69.9139 281.156 70.2705 278.176 70.2705C274.223 70.2705 270.563 69.3311 267.193 67.4521C263.889 65.5083 261.232 62.7541 259.224 59.1904C257.215 55.562 256.211 51.2208 256.211 46.167V44.6123C256.211 39.5584 257.215 35.2492 259.224 31.6855C261.232 28.0572 263.889 25.3038 267.193 23.4248C270.563 21.481 274.223 20.5088 278.176 20.5088ZM225.268 20.5088C231.617 20.5088 236.639 22.0958 240.332 25.2705C244.025 28.4454 245.872 33.0464 245.872 39.0723V57.0527C245.872 58.9964 246.78 59.9678 248.594 59.9678H252.481V70.0762H244.317C241.92 70.0762 239.944 69.4933 238.389 68.3271C236.834 67.1609 236.056 65.605 236.056 63.6611V63.5645H234.209C233.95 64.342 233.367 65.3791 232.46 66.6748C231.553 67.9058 230.127 69.0067 228.184 69.9785C226.24 70.9504 223.583 71.4365 220.214 71.4365C216.78 71.4365 213.703 70.8537 210.981 69.6875C208.26 68.4565 206.09 66.707 204.47 64.4395C202.915 62.1069 202.137 59.2879 202.137 55.9834C202.137 52.6789 202.915 49.9247 204.47 47.7217C206.09 45.4541 208.292 43.7694 211.078 42.668C213.929 41.5017 217.169 40.919 220.797 40.9189H234.015V38.1973C234.015 35.9295 233.302 34.0827 231.877 32.6572C230.451 31.167 228.183 30.4219 225.073 30.4219C222.028 30.4219 219.761 31.1351 218.271 32.5605C216.78 33.9212 215.808 35.7032 215.354 37.9062L204.08 34.1152C204.858 31.6531 206.089 29.4178 207.773 27.4092C209.523 25.3358 211.823 23.6832 214.674 22.4521C217.589 21.1563 221.121 20.5088 225.268 20.5088ZM374.047 20.5088C380.396 20.5088 385.418 22.0959 389.111 25.2705C392.805 28.4454 394.651 33.0464 394.651 39.0723V57.0527C394.651 58.9964 395.559 59.9678 397.373 59.9678H401.261V70.0762H393.097C390.699 70.0762 388.723 69.4933 387.168 68.3271C385.613 67.1609 384.835 65.605 384.835 63.6611V63.5645H382.988C382.729 64.342 382.146 65.3791 381.239 66.6748C380.332 67.9058 378.906 69.0067 376.963 69.9785C375.019 70.9504 372.362 71.4365 368.993 71.4365C365.559 71.4365 362.482 70.8537 359.761 69.6875C357.04 68.4565 354.869 66.707 353.249 64.4395C351.694 62.1069 350.916 59.2879 350.916 55.9834C350.916 52.6789 351.694 49.9247 353.249 47.7217C354.869 45.4541 357.072 43.7694 359.857 42.668C362.708 41.5017 365.948 40.919 369.576 40.9189H382.794V38.1973C382.794 35.9295 382.082 34.0827 380.656 32.6572C379.231 31.167 376.963 30.4219 373.853 30.4219C370.807 30.4219 368.54 31.1351 367.05 32.5605C365.56 33.9212 364.587 35.7032 364.134 37.9062L352.859 34.1152C353.637 31.6531 354.868 29.4178 356.553 27.4092C358.302 25.3358 360.602 23.6832 363.453 22.4521C366.369 21.1563 369.9 20.5088 374.047 20.5088ZM28.5029 21.0918C32.2609 21.0918 35.5332 21.9664 38.3193 23.7158C41.1701 25.4004 43.3727 27.7654 44.9277 30.8105C46.4828 33.7911 47.2607 37.2904 47.2607 41.3076V70.0762H35.0146V42.2793C35.0146 38.6509 34.1072 35.9294 32.293 34.1152C30.5436 32.3012 28.017 31.3936 24.7129 31.3936C20.9549 31.3936 18.0392 32.6577 15.9658 35.1846C13.8924 37.6468 12.8555 41.1132 12.8555 45.584V70.0762H0.609375V21.8691H12.6611V28.1865H14.4102C15.1877 26.5019 16.6461 24.915 18.7842 23.4248C20.9224 21.8697 24.1618 21.0918 28.5029 21.0918ZM144.251 2.04199C153.387 2.04207 160.319 4.37504 165.049 9.04004C169.844 13.6404 172.241 20.5086 172.241 29.6445V42.4736C172.241 51.6096 169.844 58.5106 165.049 63.1758C160.319 67.7759 153.386 70.0761 144.251 70.0762H116.26V58.8018H125.201V13.3164H116.26V2.04199H144.251ZM193.622 70.0762H181.376V21.8691H193.622V70.0762ZM347.539 32.5605H341.513C338.403 32.5606 335.843 33.4024 333.835 35.0869C331.826 36.7067 330.822 39.234 330.822 42.668V70.0762H318.576V21.8691H330.628V27.3115H332.377C333.09 25.3679 334.256 23.9422 335.876 23.0352C337.56 22.1281 339.504 21.6749 341.707 21.6748H347.539V32.5605ZM461.921 21.0918C464.901 21.0919 467.59 21.7394 469.987 23.0352C472.449 24.2662 474.393 26.1779 475.818 28.7695C477.309 31.2965 478.054 34.504 478.054 38.3916V70.0762H465.808V39.2666C465.808 36.61 465.127 34.6338 463.767 33.3379C462.406 31.9774 460.495 31.2969 458.033 31.2969C455.247 31.2969 453.077 32.2043 451.521 34.0186C450.031 35.7679 449.286 38.2944 449.286 41.5986V70.0762H437.04V39.2666C437.04 36.6101 436.36 34.6338 434.999 33.3379C433.638 31.9772 431.727 31.2969 429.265 31.2969C426.479 31.2969 424.308 32.2043 422.753 34.0186C421.263 35.7679 420.518 38.2945 420.518 41.5986V70.0762H408.271V21.8691H420.323V27.1172H422.072C422.915 25.4974 424.308 24.1047 426.252 22.9385C428.196 21.7075 430.755 21.0918 433.93 21.0918C437.364 21.0918 440.117 21.7723 442.19 23.1328C444.264 24.4287 445.852 26.146 446.953 28.2842H448.702C449.804 26.2108 451.36 24.4935 453.368 23.1328C455.377 21.7723 458.228 21.0918 461.921 21.0918ZM221.672 50.0547C219.404 50.0547 217.622 50.5408 216.326 51.5127C215.03 52.4846 214.383 53.8454 214.383 55.5947C214.383 57.3441 215.063 58.7696 216.424 59.8711C217.784 60.9725 219.761 61.5234 222.353 61.5234C225.786 61.5234 228.573 60.5841 230.711 58.7051C232.914 56.7613 234.015 54.2013 234.015 51.0264V50.0547H221.672ZM370.451 50.0547C368.183 50.0547 366.401 50.5408 365.105 51.5127C363.81 52.4846 363.162 53.8454 363.162 55.5947C363.162 57.3441 363.842 58.7696 365.203 59.8711C366.564 60.9725 368.54 61.5234 371.132 61.5234C374.566 61.5234 377.352 60.5841 379.49 58.7051C381.693 56.7613 382.794 54.2013 382.794 51.0264V50.0547H370.451ZM81.6885 31.1992C77.9305 31.1992 74.7877 32.3985 72.2607 34.7959C69.734 37.1284 68.4708 40.4976 68.4707 44.9033V45.876C68.4708 50.2169 69.734 53.5861 72.2607 55.9834C74.7877 58.3808 77.9305 59.5791 81.6885 59.5791C85.4465 59.5791 88.5893 58.3808 91.1162 55.9834C93.6429 53.5861 94.9062 50.2169 94.9062 45.876V44.9033C94.9062 40.4976 93.6429 37.1284 91.1162 34.7959C88.6541 32.3985 85.5113 31.1992 81.6885 31.1992ZM281.675 31.1992C277.917 31.1992 274.774 32.3985 272.247 34.7959C269.72 37.1284 268.457 40.4976 268.457 44.9033V45.876C268.457 50.2169 269.72 53.5861 272.247 55.9834C274.774 58.3808 277.917 59.5791 281.675 59.5791C285.433 59.5791 288.576 58.3808 291.103 55.9834C293.629 53.5861 294.892 50.2169 294.893 45.876V44.9033C294.893 40.4976 293.629 37.1284 291.103 34.7959C288.64 32.3985 285.498 31.1992 281.675 31.1992ZM138.03 58.4131H144.445C149.629 58.413 153.419 57.0523 155.816 54.3311C158.214 51.6097 159.412 47.7866 159.412 42.8623V29.2559C159.412 24.2668 158.214 20.4437 155.816 17.7871C153.419 15.0658 149.629 13.7052 144.445 13.7051H138.03V58.4131ZM187.499 0.681641C189.767 0.681641 191.646 1.3939 193.137 2.81934C194.627 4.24481 195.372 6.12444 195.372 8.45703C195.372 10.7894 194.627 12.6683 193.137 14.0938C191.646 15.5192 189.767 16.2324 187.499 16.2324C185.296 16.2324 183.417 15.5192 181.862 14.0938C180.372 12.6683 179.627 10.7895 179.627 8.45703C179.627 6.12444 180.372 4.24481 181.862 2.81934C183.417 1.39408 185.296 0.681711 187.499 0.681641Z"\n    />\n  </svg>\n</a>\n',
      styles: [":host{position:absolute;width:var(--watermark-size)}:host.bottom-right{bottom:1rem;right:1rem}:host.top-right{top:1rem;right:1rem}:host.bottom-left{bottom:1rem;left:1rem}:host.top-left{top:1rem;left:1rem}:host svg{opacity:.7;height:100%;width:100%;display:block}:host svg path{fill:var(--watermark-fill)}:host :hover svg{opacity:1}:host{--watermark-size: min(4rem, 10%);--watermark-fill: #b3b3b3}:host .sr-only{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}\n"]
    }]
  }], null, null);
})();
var MobileBoxSelectionDirective = class _MobileBoxSelectionDirective {
  inputEventsRouter = inject(InputEventsRouterService);
  boxSelectionProvider = inject(BoxSelectionProviderService);
  flowCoreProvider = inject(FlowCoreProviderService);
  touchEventsStateService = inject(TouchEventsStateService);
  touchStartPoint = null;
  isBoxSelectionActive = false;
  longPressTimer = null;
  LONG_PRESS_DELAY = 400;
  MOVE_THRESHOLD = 10;
  onTouchStart(e) {
    !this.isSingleTouch(e) || this.touchEventsStateService.rotateHandled() || this.touchEventsStateService.resizeHandled() || this.touchEventsStateService.linkingHandled() ? this.cancelBoxSelection() : (this.touchStartPoint = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    }, this.longPressTimer = setTimeout(() => {
      this.isBoxSelectionActive = true, this.touchEventsStateService.currentEvent.set(DiagramEventName.BoxSelection);
      const t = e.touches[0] || this.touchStartPoint;
      t && this.emitBoxSelectionEvent("start", e, t);
    }, this.LONG_PRESS_DELAY));
  }
  onTouchMove(e) {
    if (!this.isSingleTouch(e) || this.shouldCancelDuringLongPress(e)) return void this.cancelBoxSelection();
    if (!this.isBoxSelectionActive || !this.touchStartPoint) return;
    const t = e.touches[0];
    this.emitBoxSelectionEvent("continue", e, t), this.updateBoundingBox(t), e.preventDefault(), e.stopPropagation();
  }
  onTouchEnd(e) {
    if (this.clearLongPressTimer(), !this.isBoxSelectionActive) return void (this.touchStartPoint = null);
    const t = e.changedTouches[0] || e.touches[0] || this.touchStartPoint;
    t && this.emitBoxSelectionEvent("end", e, t), this.touchEventsStateService.clearCurrentEvent(), this.cancelBoxSelection(), e.preventDefault(), e.stopPropagation();
  }
  cancelBoxSelection() {
    this.isBoxSelectionActive = false, this.touchStartPoint = null, this.boxSelectionProvider.boundingBox.set(null), this.clearLongPressTimer();
  }
  clearLongPressTimer() {
    this.longPressTimer && (clearTimeout(this.longPressTimer), this.longPressTimer = null);
  }
  isSingleTouch(e) {
    return 1 === e.touches.length;
  }
  shouldCancelDuringLongPress(e) {
    if (!this.longPressTimer || !this.touchStartPoint || this.isBoxSelectionActive) return false;
    const t = e.touches[0];
    return Math.max(Math.abs(t.clientX - this.touchStartPoint.x), Math.abs(t.clientY - this.touchStartPoint.y)) > this.MOVE_THRESHOLD;
  }
  emitBoxSelectionEvent(e, t, n) {
    if (!n) return;
    const i = this.inputEventsRouter.getBaseEvent(t);
    this.inputEventsRouter.emit(__spreadProps(__spreadValues({}, i), {
      name: "boxSelection",
      phase: e,
      target: void 0,
      targetType: "diagram",
      lastInputPoint: {
        x: "clientX" in n ? n.clientX : n.x,
        y: "clientY" in n ? n.clientY : n.y
      }
    }));
  }
  updateBoundingBox(e) {
    const t = this.flowCoreProvider.provide(), {
      x: n,
      y: i
    } = t.clientToFlowViewportPosition(this.touchStartPoint), {
      x: o,
      y: r
    } = t.clientToFlowViewportPosition({
      x: e.clientX,
      y: e.clientY
    }), a = Math.min(n, o), s = Math.min(i, r), d = Math.abs(o - n), l = Math.abs(r - i);
    this.boxSelectionProvider.boundingBox.set({
      x: a,
      y: s,
      width: d,
      height: l
    });
  }
  static "ɵfac" = function MobileBoxSelectionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MobileBoxSelectionDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _MobileBoxSelectionDirective,
    selectors: [["", "ngDiagramMobileBoxSelection", ""]],
    hostBindings: function MobileBoxSelectionDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("touchstart", function MobileBoxSelectionDirective_touchstart_HostBindingHandler($event) {
          return ctx.onTouchStart($event);
        })("touchmove", function MobileBoxSelectionDirective_touchmove_HostBindingHandler($event) {
          return ctx.onTouchMove($event);
        })("touchend", function MobileBoxSelectionDirective_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        })("touchcancel", function MobileBoxSelectionDirective_touchcancel_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileBoxSelectionDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramMobileBoxSelection]",
      standalone: true,
      host: {
        "(touchstart)": "onTouchStart($event)",
        "(touchmove)": "onTouchMove($event)",
        "(touchend)": "onTouchEnd($event)",
        "(touchcancel)": "onTouchEnd($event)"
      }
    }]
  }], null, null);
})();
var NgDiagramComponent = class _NgDiagramComponent {
  elementRef = inject(ElementRef);
  flowCoreProvider = inject(FlowCoreProviderService);
  renderer = inject(RendererService);
  flowResizeBatchProcessor = inject(FlowResizeBatchProcessorService);
  flowOffsetService = inject(FlowOffsetService);
  templateProviderService = inject(TemplateProviderService);
  initializedModel = null;
  resizeObserver = null;
  config = input();
  model = input.required();
  middlewares = input(BUILTIN_MIDDLEWARES);
  nodeTemplateMap = input(new NgDiagramNodeTemplateMap());
  edgeTemplateMap = input(new NgDiagramEdgeTemplateMap());
  nodes = this.renderer.nodes;
  edges = this.renderer.edges;
  viewport = this.renderer.viewport;
  viewportPannable = this.renderer.viewportPannable;
  diagramInit = new EventEmitter();
  edgeDrawn = new EventEmitter();
  edgeDrawEnded = new EventEmitter();
  selectionMoved = new EventEmitter();
  selectionChanged = new EventEmitter();
  selectionGestureEnded = new EventEmitter();
  selectionRemoved = new EventEmitter();
  groupMembershipChanged = new EventEmitter();
  selectionRotated = new EventEmitter();
  nodeRotateStarted = new EventEmitter();
  nodeRotateEnded = new EventEmitter();
  viewportChanged = new EventEmitter();
  clipboardPasted = new EventEmitter();
  nodeResized = new EventEmitter();
  nodeResizeStarted = new EventEmitter();
  nodeResizeEnded = new EventEmitter();
  paletteItemDropped = new EventEmitter();
  nodeDragStarted = new EventEmitter();
  nodeDragEnded = new EventEmitter();
  constructor() {
    effect(() => {
      const e = this.model();
      this.initializedModel != e && (untracked(() => {
        this.renderer.isInitialized.set(false), this.renderer.viewportPannable.set(this.config()?.viewportPanningEnabled ?? true), this.flowCoreProvider.destroy(), this.flowOffsetService.reset(), this.flowCoreProvider.init(e, this.middlewares(), this.flowOffsetService.getFlowOffset, this.getViewportSize, this.config());
      }), this.initializedModel = e, this.flowOffsetService.initialize(this.elementRef.nativeElement), this.setupEventBridge());
    }), effect(() => {
      const e = this.nodeTemplateMap();
      this.templateProviderService.setNodeTemplateMap(e);
    }), effect(() => {
      const e = this.edgeTemplateMap();
      this.templateProviderService.setEdgeTemplateMap(e);
    });
  }
  ngOnInit() {
    this.flowResizeBatchProcessor.initialize(), this.setupViewportSizeTracking();
  }
  ngOnDestroy() {
    this.flowCoreProvider.destroy(), this.cleanupViewportSizeTracking();
  }
  getNodeTemplate(e) {
    return this.templateProviderService.getNodeTemplate(e);
  }
  getEdgeTemplate(e) {
    return this.templateProviderService.getEdgeTemplate(e);
  }
  trackNode = (e, t) => t._internalId || t.id;
  trackEdge = (e, t) => t._internalId || t.id;
  isGroup(e) {
    return "isGroup" in e;
  }
  castToGroupNode(e) {
    return e;
  }
  getBoundingClientRect() {
    return this.elementRef.nativeElement.getBoundingClientRect();
  }
  getViewportSize = () => {
    const {
      width: e,
      height: t
    } = this.elementRef.nativeElement.getBoundingClientRect();
    return {
      width: e,
      height: t
    };
  };
  setupViewportSizeTracking() {
    if ("undefined" == typeof ResizeObserver) return;
    this.resizeObserver = new ResizeObserver((e2) => {
      const t = e2[0];
      if (t) {
        this.flowOffsetService.invalidateCache();
        const {
          width: e3,
          height: n
        } = t.contentRect;
        this.updateViewportSize(e3, n);
      }
    }), this.resizeObserver.observe(this.elementRef.nativeElement);
    const e = this.elementRef.nativeElement.getBoundingClientRect();
    this.updateViewportSize(e.width, e.height);
  }
  cleanupViewportSizeTracking() {
    this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
  }
  updateViewportSize(e, t) {
    if (!this.flowCoreProvider.isInitialized()) return;
    const n = this.flowCoreProvider.provide(), i = n.getState().metadata.viewport;
    i.width === e && i.height === t || n.applyUpdate({
      metadataUpdate: {
        viewport: __spreadProps(__spreadValues({}, i), {
          width: e,
          height: t
        })
      }
    }, "updateViewportSize");
  }
  setupEventBridge() {
    const e = this.flowCoreProvider.provide(), t = e.eventManager;
    t.on("diagramInit", (t2) => {
      setTimeout(() => {
        this.renderer.isInitialized.set(true), this.diagramInit.emit(t2), e.config.zoom.zoomToFit.onInit && e.commandHandler.emit("zoomToFit", {});
      });
    }), t.on("edgeDrawn", (e2) => this.edgeDrawn.emit(e2)), t.on("edgeDrawEnded", (e2) => this.edgeDrawEnded.emit(e2)), t.on("selectionMoved", (e2) => this.selectionMoved.emit(e2)), t.on("selectionChanged", (e2) => this.selectionChanged.emit(e2)), t.on("selectionGestureEnded", (e2) => this.selectionGestureEnded.emit(e2)), t.on("selectionRemoved", (e2) => this.selectionRemoved.emit(e2)), t.on("groupMembershipChanged", (e2) => this.groupMembershipChanged.emit(e2)), t.on("selectionRotated", (e2) => this.selectionRotated.emit(e2)), t.on("nodeRotateStarted", (e2) => this.nodeRotateStarted.emit(e2)), t.on("nodeRotateEnded", (e2) => this.nodeRotateEnded.emit(e2)), t.on("viewportChanged", (e2) => this.viewportChanged.emit(e2)), t.on("clipboardPasted", (e2) => this.clipboardPasted.emit(e2)), t.on("nodeResized", (e2) => this.nodeResized.emit(e2)), t.on("nodeResizeStarted", (e2) => this.nodeResizeStarted.emit(e2)), t.on("nodeResizeEnded", (e2) => this.nodeResizeEnded.emit(e2)), t.on("paletteItemDropped", (e2) => this.paletteItemDropped.emit(e2)), t.on("nodeDragStarted", (e2) => this.nodeDragStarted.emit(e2)), t.on("nodeDragEnded", (e2) => this.nodeDragEnded.emit(e2));
  }
  static "ɵfac" = function NgDiagramComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramComponent,
    selectors: [["ng-diagram"]],
    hostVars: 2,
    hostBindings: function NgDiagramComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("pannable", ctx.viewportPannable());
      }
    },
    inputs: {
      config: [1, "config"],
      model: [1, "model"],
      middlewares: [1, "middlewares"],
      nodeTemplateMap: [1, "nodeTemplateMap"],
      edgeTemplateMap: [1, "edgeTemplateMap"]
    },
    outputs: {
      diagramInit: "diagramInit",
      edgeDrawn: "edgeDrawn",
      edgeDrawEnded: "edgeDrawEnded",
      selectionMoved: "selectionMoved",
      selectionChanged: "selectionChanged",
      selectionGestureEnded: "selectionGestureEnded",
      selectionRemoved: "selectionRemoved",
      groupMembershipChanged: "groupMembershipChanged",
      selectionRotated: "selectionRotated",
      nodeRotateStarted: "nodeRotateStarted",
      nodeRotateEnded: "nodeRotateEnded",
      viewportChanged: "viewportChanged",
      clipboardPasted: "clipboardPasted",
      nodeResized: "nodeResized",
      nodeResizeStarted: "nodeResizeStarted",
      nodeResizeEnded: "nodeResizeEnded",
      paletteItemDropped: "paletteItemDropped",
      nodeDragStarted: "nodeDragStarted",
      nodeDragEnded: "nodeDragEnded"
    },
    features: [ɵɵHostDirectivesFeature([NgDiagramServicesAvailabilityCheckerDirective, BoxSelectionDirective, MobileBoxSelectionDirective, CursorPositionTrackerDirective, ZoomingWheelDirective, PanningDirective, MobilePanningDirective, MobileZoomingDirective, KeyboardInputsDirective, PaletteDropDirective, DiagramSelectionDirective])],
    ngContentSelectors: _c6,
    decls: 10,
    vars: 2,
    consts: [[1, "diagram-background-container"], [3, "viewport"], [1, "ng-diagram-node", 3, "node"], [3, "preferredPosition"], [3, "edge"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "node"]],
    template: function NgDiagramComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c5);
        ɵɵelementStart(0, "div", 0);
        ɵɵprojection(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "ng-diagram-canvas", 1);
        ɵɵrepeaterCreate(3, NgDiagramComponent_For_4_Template, 3, 2, "ng-diagram-edge", null, ctx.trackEdge, true);
        ɵɵelement(5, "ng-diagram-marker-arrow");
        ɵɵrepeaterCreate(6, NgDiagramComponent_For_7_Template, 4, 3, "ng-diagram-node", 2, ctx.trackNode, true);
        ɵɵelementEnd();
        ɵɵconditionalCreate(8, NgDiagramComponent_Conditional_8_Template, 1, 1, "ng-diagram-watermark", 3);
        ɵɵelement(9, "ng-diagram-box-selection");
      }
      if (rf & 2) {
        let tmp_3_0;
        ɵɵadvance(2);
        ɵɵproperty("viewport", ctx.viewport());
        ɵɵadvance();
        ɵɵrepeater(ctx.edges());
        ɵɵadvance(3);
        ɵɵrepeater(ctx.nodes());
        ɵɵadvance(2);
        ɵɵconditional(!((tmp_3_0 = ctx.config()) == null ? null : tmp_3_0.hideWatermark) ? 8 : -1);
      }
    },
    dependencies: [CommonModule, NgComponentOutlet, NgDiagramCanvasComponent, NgDiagramNodeComponent, NgDiagramMarkerArrowComponent, NgDiagramDefaultEdgeComponent, NgDiagramDefaultNodeTemplateComponent, NgDiagramDefaultGroupTemplateComponent, NgDiagramEdgeComponent, NgDiagramWatermarkComponent, NgDiagramBoxSelectionComponent],
    styles: ["[_nghost-%COMP%]{width:100%;height:100%;display:flex;position:relative;overflow:hidden;background-color:var(--ngd-diagram-background-color);touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;transform:translateZ(0);-webkit-font-smoothing:antialiased;outline:none}.pannable[_nghost-%COMP%]{cursor:grab}.pannable.panning[_nghost-%COMP%]{cursor:grabbing}[_nghost-%COMP%]   .diagram-background-container[_ngcontent-%COMP%]{width:100%;height:100%}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram",
      standalone: true,
      imports: [CommonModule, NgDiagramCanvasComponent, NgDiagramNodeComponent, NgDiagramMarkerArrowComponent, NgDiagramDefaultEdgeComponent, NgDiagramDefaultNodeTemplateComponent, NgDiagramDefaultGroupTemplateComponent, NgDiagramEdgeComponent, NgDiagramWatermarkComponent, NgDiagramBoxSelectionComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [NgDiagramServicesAvailabilityCheckerDirective, BoxSelectionDirective, MobileBoxSelectionDirective, CursorPositionTrackerDirective, ZoomingWheelDirective, PanningDirective, MobilePanningDirective, MobileZoomingDirective, KeyboardInputsDirective, PaletteDropDirective, DiagramSelectionDirective],
      host: {
        "[class.pannable]": "viewportPannable()"
      },
      template: '<div class="diagram-background-container">\n  <ng-content select="ng-diagram-background"></ng-content>\n</div>\n<ng-diagram-canvas [viewport]="viewport()">\n  @for (edge of edges(); track trackEdge($index, edge)) {\n    <ng-diagram-edge [attr.data-edge-id]="edge.id">\n      @if (getEdgeTemplate(edge.type)) {\n        <ng-container *ngComponentOutlet="getEdgeTemplate(edge.type); inputs: { edge }" />\n      } @else {\n        <ng-diagram-default-edge [edge]="edge" />\n      }\n    </ng-diagram-edge>\n  }\n  <ng-diagram-marker-arrow />\n  @for (node of nodes(); track trackNode($index, node)) {\n    <ng-diagram-node class="ng-diagram-node" [attr.data-node-id]="node.id" [node]="node">\n      @if (getNodeTemplate(node.type)) {\n        <ng-container *ngComponentOutlet="getNodeTemplate(node.type); inputs: { node }" />\n      } @else if (isGroup(node)) {\n        <ng-diagram-default-group-template [node]="castToGroupNode(node)" />\n      } @else {\n        <ng-diagram-default-node-template [node]="node" />\n      }\n    </ng-diagram-node>\n  }\n</ng-diagram-canvas>\n\n@if (!config()?.hideWatermark) {\n  <ng-diagram-watermark [preferredPosition]="config()?.watermarkPosition" />\n}\n<ng-diagram-box-selection />\n',
      styles: [":host{width:100%;height:100%;display:flex;position:relative;overflow:hidden;background-color:var(--ngd-diagram-background-color);touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;transform:translateZ(0);-webkit-font-smoothing:antialiased;outline:none}:host.pannable{cursor:grab}:host.pannable.panning{cursor:grabbing}:host .diagram-background-container{width:100%;height:100%}\n"]
    }]
  }], () => [], {
    diagramInit: [{
      type: Output
    }],
    edgeDrawn: [{
      type: Output
    }],
    edgeDrawEnded: [{
      type: Output
    }],
    selectionMoved: [{
      type: Output
    }],
    selectionChanged: [{
      type: Output
    }],
    selectionGestureEnded: [{
      type: Output
    }],
    selectionRemoved: [{
      type: Output
    }],
    groupMembershipChanged: [{
      type: Output
    }],
    selectionRotated: [{
      type: Output
    }],
    nodeRotateStarted: [{
      type: Output
    }],
    nodeRotateEnded: [{
      type: Output
    }],
    viewportChanged: [{
      type: Output
    }],
    clipboardPasted: [{
      type: Output
    }],
    nodeResized: [{
      type: Output
    }],
    nodeResizeStarted: [{
      type: Output
    }],
    nodeResizeEnded: [{
      type: Output
    }],
    paletteItemDropped: [{
      type: Output
    }],
    nodeDragStarted: [{
      type: Output
    }],
    nodeDragEnded: [{
      type: Output
    }]
  });
})();
var NgDiagramPanelComponent = class _NgDiagramPanelComponent {
  panelRegistry = inject(PanelRegistryService);
  position = input("bottom-right");
  ngAfterViewInit() {
    this.panelRegistry?.register(this);
  }
  ngOnDestroy() {
    this.panelRegistry?.unregister();
  }
  static "ɵfac" = function NgDiagramPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramPanelComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramPanelComponent,
    selectors: [["ng-diagram-panel"]],
    hostVars: 2,
    hostBindings: function NgDiagramPanelComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.position());
      }
    },
    inputs: {
      position: [1, "position"]
    },
    ngContentSelectors: _c2,
    decls: 1,
    vars: 0,
    template: function NgDiagramPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: ["[_nghost-%COMP%]{overflow:hidden;border-radius:var(--ngd-minimap-border-radius);padding:var(--ngd-minimap-padding);background-color:var(--ngd-minimap-background);box-shadow:0 8px 16px -4px var(--ngd-minimap-shadow-color);border:1px solid var(--ngd-minimap-border-color);display:flex;flex-direction:column;gap:var(--ngd-minimap-padding)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramPanelComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-panel",
      standalone: true,
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class]": "position()"
      },
      styles: [":host{overflow:hidden;border-radius:var(--ngd-minimap-border-radius);padding:var(--ngd-minimap-padding);background-color:var(--ngd-minimap-background);box-shadow:0 8px 16px -4px var(--ngd-minimap-shadow-color);border:1px solid var(--ngd-minimap-border-color);display:flex;flex-direction:column;gap:var(--ngd-minimap-padding)}\n"]
    }]
  }], null, null);
})();
var NgDiagramZoomControlsComponent = class _NgDiagramZoomControlsComponent {
  viewportService = inject(NgDiagramViewportService);
  step = input(0.1);
  zoomPercentage = computed(() => Math.round(100 * this.viewportService.scale()));
  canZoomIn = computed(() => this.viewportService.scale() + this.step() <= this.viewportService.maxZoom);
  canZoomOut = computed(() => this.viewportService.scale() - this.step() >= this.viewportService.minZoom);
  zoomIn() {
    const e = this.viewportService.scale(), t = (e + this.step()) / e;
    this.viewportService.zoom(t);
  }
  zoomOut() {
    const e = this.viewportService.scale(), t = (e - this.step()) / e;
    this.viewportService.zoom(t);
  }
  static "ɵfac" = function NgDiagramZoomControlsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramZoomControlsComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramZoomControlsComponent,
    selectors: [["ng-diagram-zoom-controls"]],
    inputs: {
      step: [1, "step"]
    },
    decls: 7,
    vars: 3,
    consts: [[1, "zoom-controls-container"], ["aria-label", "Zoom out", 1, "nav-button", 3, "click", "disabled"], [1, "label"], ["aria-label", "Zoom in", 1, "nav-button", 3, "click", "disabled"]],
    template: function NgDiagramZoomControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵdomElementStart(0, "div", 0)(1, "button", 1);
        ɵɵdomListener("click", function NgDiagramZoomControlsComponent_Template_button_click_1_listener() {
          return ctx.zoomOut();
        });
        ɵɵtext(2, "−");
        ɵɵdomElementEnd();
        ɵɵdomElementStart(3, "span", 2);
        ɵɵtext(4);
        ɵɵdomElementEnd();
        ɵɵdomElementStart(5, "button", 3);
        ɵɵdomListener("click", function NgDiagramZoomControlsComponent_Template_button_click_5_listener() {
          return ctx.zoomIn();
        });
        ɵɵtext(6, "+");
        ɵɵdomElementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵdomProperty("disabled", !ctx.canZoomOut());
        ɵɵadvance(3);
        ɵɵtextInterpolate1("", ctx.zoomPercentage(), "%");
        ɵɵadvance();
        ɵɵdomProperty("disabled", !ctx.canZoomIn());
      }
    },
    styles: [".zoom-controls-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.zoom-controls-container[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{text-align:center;font-size:var(--ngd-zoom-controls-font-size);font-weight:var(--ngd-zoom-controls-font-weight);color:var(--ngd-zoom-controls-color);-webkit-user-select:none;user-select:none}.nav-button[_ngcontent-%COMP%]{width:var(--ngd-nav-button-size);height:var(--ngd-nav-button-size);color:var(--ngd-nav-button-color);border-radius:var(--ngd-nav-button-border-radius);padding:var(--ngd-nav-button-padding);border:none;background:none;box-sizing:content-box;cursor:pointer;font-size:var(--ngd-nav-button-size);line-height:var(--ngd-nav-button-size)}.nav-button[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--ngd-nav-button-background-color-hover)}.nav-button[_ngcontent-%COMP%]:active{color:var(--ngd-nav-button-color-active)}.nav-button[_ngcontent-%COMP%]:disabled{color:var(--ngd-nav-button-color-disabled);cursor:default}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramZoomControlsComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-zoom-controls",
      standalone: true,
      template: '\n    <div class="zoom-controls-container">\n      <button class="nav-button" [disabled]="!canZoomOut()" (click)="zoomOut()" aria-label="Zoom out">−</button>\n      <span class="label">{{ zoomPercentage() }}%</span>\n      <button class="nav-button" [disabled]="!canZoomIn()" (click)="zoomIn()" aria-label="Zoom in">+</button>\n    </div>\n  ',
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".zoom-controls-container{display:flex;align-items:center;justify-content:space-between}.zoom-controls-container .label{text-align:center;font-size:var(--ngd-zoom-controls-font-size);font-weight:var(--ngd-zoom-controls-font-weight);color:var(--ngd-zoom-controls-color);-webkit-user-select:none;user-select:none}.nav-button{width:var(--ngd-nav-button-size);height:var(--ngd-nav-button-size);color:var(--ngd-nav-button-color);border-radius:var(--ngd-nav-button-border-radius);padding:var(--ngd-nav-button-padding);border:none;background:none;box-sizing:content-box;cursor:pointer;font-size:var(--ngd-nav-button-size);line-height:var(--ngd-nav-button-size)}.nav-button:hover:not(:disabled){background-color:var(--ngd-nav-button-background-color-hover)}.nav-button:active{color:var(--ngd-nav-button-color-active)}.nav-button:disabled{color:var(--ngd-nav-button-color-disabled);cursor:default}\n"]
    }]
  }], null, null);
})();
var NgDiagramDefaultMinimapNodeComponent = class _NgDiagramDefaultMinimapNodeComponent {
  bounds = input.required();
  nodeStyle = input();
  computedStyle = computed(() => this.nodeStyle() ?? {});
  shape = computed(() => this.computedStyle().shape ?? "rect");
  hostClass = computed(() => {
    const e = this.computedStyle().cssClass;
    return e ? `minimap-node ${e}` : "minimap-node";
  });
  cx = computed(() => this.bounds().x + this.bounds().width / 2);
  cy = computed(() => this.bounds().y + this.bounds().height / 2);
  radius = computed(() => Math.min(this.bounds().width, this.bounds().height) / 2);
  rx = computed(() => this.bounds().width / 2);
  ry = computed(() => this.bounds().height / 2);
  static "ɵfac" = function NgDiagramDefaultMinimapNodeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramDefaultMinimapNodeComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramDefaultMinimapNodeComponent,
    selectors: [["g", "ng-diagram-default-minimap-node", ""]],
    hostVars: 11,
    hostBindings: function NgDiagramDefaultMinimapNodeComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("transform", ctx.bounds().transform);
        ɵɵclassMap(ctx.hostClass());
        ɵɵstyleProp("fill", ctx.computedStyle().fill)("stroke", ctx.computedStyle().stroke)("stroke-width", ctx.computedStyle().strokeWidth, "px")("opacity", ctx.computedStyle().opacity);
      }
    },
    inputs: {
      bounds: [1, "bounds"],
      nodeStyle: [1, "nodeStyle"]
    },
    decls: 3,
    vars: 1,
    template: function NgDiagramDefaultMinimapNodeComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵconditionalCreate(0, NgDiagramDefaultMinimapNodeComponent_Case_0_Template, 1, 3, ":svg:circle")(1, NgDiagramDefaultMinimapNodeComponent_Case_1_Template, 1, 4, ":svg:ellipse")(2, NgDiagramDefaultMinimapNodeComponent_Case_2_Template, 1, 4, ":svg:rect");
      }
      if (rf & 2) {
        let tmp_0_0;
        ɵɵconditional((tmp_0_0 = ctx.shape()) === "circle" ? 0 : tmp_0_0 === "ellipse" ? 1 : 2);
      }
    },
    styles: ["[_nghost-%COMP%]{fill:var(--ngd-minimap-node-color);opacity:var(--ngd-minimap-node-opacity)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramDefaultMinimapNodeComponent, [{
    type: Component,
    args: [{
      selector: "g[ng-diagram-default-minimap-node]",
      standalone: true,
      host: {
        "[class]": "hostClass()",
        "[attr.transform]": "bounds().transform",
        "[style.fill]": "computedStyle().fill",
        "[style.stroke]": "computedStyle().stroke",
        "[style.stroke-width.px]": "computedStyle().strokeWidth",
        "[style.opacity]": "computedStyle().opacity"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@switch (shape()) {
  @case ('circle') {
    <svg:circle [attr.cx]="cx()" [attr.cy]="cy()" [attr.r]="radius()" />
  }
  @case ('ellipse') {
    <svg:ellipse [attr.cx]="cx()" [attr.cy]="cy()" [attr.rx]="rx()" [attr.ry]="ry()" />
  }
  @default {
    <svg:rect
      [attr.x]="bounds().x"
      [attr.y]="bounds().y"
      [attr.width]="bounds().width"
      [attr.height]="bounds().height"
    />
  }
}
`,
      styles: [":host{fill:var(--ngd-minimap-node-color);opacity:var(--ngd-minimap-node-opacity)}\n"]
    }]
  }], null, null);
})();
var NgDiagramMinimapDiagramBoundsComponent = class _NgDiagramMinimapDiagramBoundsComponent {
  diagramBounds = input.required();
  minimapTransform = input.required();
  rect = computed(() => {
    const e = this.diagramBounds(), t = this.minimapTransform();
    return {
      x: e.x * t.scale + t.offsetX,
      y: e.y * t.scale + t.offsetY,
      width: e.width * t.scale,
      height: e.height * t.scale
    };
  });
  static "ɵfac" = function NgDiagramMinimapDiagramBoundsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramMinimapDiagramBoundsComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramMinimapDiagramBoundsComponent,
    selectors: [["rect", "ng-diagram-minimap-diagram-bounds", ""]],
    hostVars: 4,
    hostBindings: function NgDiagramMinimapDiagramBoundsComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("x", ctx.rect().x)("y", ctx.rect().y)("width", ctx.rect().width)("height", ctx.rect().height);
      }
    },
    inputs: {
      diagramBounds: [1, "diagramBounds"],
      minimapTransform: [1, "minimapTransform"]
    },
    decls: 0,
    vars: 0,
    template: function NgDiagramMinimapDiagramBoundsComponent_Template(rf, ctx) {
    },
    styles: ["[_nghost-%COMP%]{fill:var(--ngd-minimap-diagram-bounds-color);opacity:var(--ngd-minimap-diagram-bounds-opacity);stroke:none;pointer-events:none}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramMinimapDiagramBoundsComponent, [{
    type: Component,
    args: [{
      selector: "rect[ng-diagram-minimap-diagram-bounds]",
      standalone: true,
      template: "",
      host: {
        "[attr.x]": "rect().x",
        "[attr.y]": "rect().y",
        "[attr.width]": "rect().width",
        "[attr.height]": "rect().height"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{fill:var(--ngd-minimap-diagram-bounds-color);opacity:var(--ngd-minimap-diagram-bounds-opacity);stroke:none;pointer-events:none}\n"]
    }]
  }], null, null);
})();
var MinimapInteractionTracker = class _MinimapInteractionTracker {
  diagramService = inject(NgDiagramService);
  isInteracting = computed(() => {
    const e = this.diagramService.actionState();
    return !!e.dragging?.movementStarted || !!e.resize || !!e.rotation;
  });
  static "ɵfac" = function MinimapInteractionTracker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MinimapInteractionTracker)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _MinimapInteractionTracker,
    factory: _MinimapInteractionTracker.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinimapInteractionTracker, [{
    type: Injectable
  }], null, null);
})();
var NgDiagramMinimapNavigationDirective = class _NgDiagramMinimapNavigationDirective {
  viewportService = inject(NgDiagramViewportService);
  flowCoreProvider = inject(FlowCoreProviderService);
  transform = input.required();
  viewport = input.required();
  dragState = {
    isDragging: false,
    lastPosition: {
      x: 0,
      y: 0
    },
    pointerId: null
  };
  ngOnDestroy() {
    this.removeDocumentListeners();
  }
  onPointerDown(e) {
    0 === e.button && (e.preventDefault(), this.capturePointer(e), this.dragState.isDragging = true, this.dragState.lastPosition = {
      x: e.clientX,
      y: e.clientY
    }, this.setPanningState(true), this.attachDocumentListeners());
  }
  onPointerMove = (e) => {
    if (!this.dragState.isDragging) return;
    const t = this.calculateClientDelta(e);
    this.dragState.lastPosition = {
      x: e.clientX,
      y: e.clientY
    };
    const n = this.calculateViewportDelta(t);
    this.viewportService.moveViewportBy(n.x, n.y);
  };
  onPointerUp = (e) => {
    this.dragState.isDragging = false, this.setPanningState(false), this.releasePointer(e), this.removeDocumentListeners();
  };
  capturePointer(e) {
    e.target.setPointerCapture(e.pointerId), this.dragState.pointerId = e.pointerId;
  }
  releasePointer(e) {
    if (null === this.dragState.pointerId) return;
    const t = e.target;
    t.hasPointerCapture(this.dragState.pointerId) && t.releasePointerCapture(this.dragState.pointerId), this.dragState.pointerId = null;
  }
  attachDocumentListeners() {
    document.addEventListener("pointermove", this.onPointerMove), document.addEventListener("pointerup", this.onPointerUp), document.addEventListener("pointercancel", this.onPointerUp);
  }
  removeDocumentListeners() {
    document.removeEventListener("pointermove", this.onPointerMove), document.removeEventListener("pointerup", this.onPointerUp), document.removeEventListener("pointercancel", this.onPointerUp);
  }
  setPanningState(e) {
    const t = this.flowCoreProvider.provide().actionStateManager;
    e ? t.panning = {
      active: true
    } : t.clearPanning();
  }
  calculateClientDelta(e) {
    return {
      x: e.clientX - this.dragState.lastPosition.x,
      y: e.clientY - this.dragState.lastPosition.y
    };
  }
  calculateViewportDelta(e) {
    const {
      scale: t
    } = this.transform(), {
      scale: n
    } = this.viewport();
    return {
      x: -e.x / t * n,
      y: -e.y / t * n
    };
  }
  static "ɵfac" = function NgDiagramMinimapNavigationDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramMinimapNavigationDirective)();
  };
  static "ɵdir" = ɵɵdefineDirective({
    type: _NgDiagramMinimapNavigationDirective,
    selectors: [["", "ngDiagramMinimapNavigation", ""]],
    hostBindings: function NgDiagramMinimapNavigationDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("pointerdown", function NgDiagramMinimapNavigationDirective_pointerdown_HostBindingHandler($event) {
          return ctx.onPointerDown($event);
        });
      }
    },
    inputs: {
      transform: [1, "transform"],
      viewport: [1, "viewport"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramMinimapNavigationDirective, [{
    type: Directive,
    args: [{
      selector: "[ngDiagramMinimapNavigation]",
      standalone: true,
      host: {
        "(pointerdown)": "onPointerDown($event)"
      }
    }]
  }], null, null);
})();
var convertViewportToDiagramBounds = (e) => ({
  x: -e.x / e.scale,
  y: -e.y / e.scale,
  width: (e.width ?? 0) / e.scale,
  height: (e.height ?? 0) / e.scale
});
var combineDiagramAndViewportBounds = (e, t) => 0 === t.width || 0 === t.height ? e : unionRect([e, t]);
var calculateScaleToFitBounds = (e, t, n, i) => 0 === e.width || 0 === e.height ? 1 : Math.min((t - 2 * i) / e.width, (n - 2 * i) / e.height);
var calculateCenteringOffset = (e, t, n, i) => ({
  offsetX: (t - e.width * i) / 2 - e.x * i,
  offsetY: (n - e.height * i) / 2 - e.y * i
});
var calculateMinimapTransform = (e, t, n, i) => {
  const o = calculateScaleToFitBounds(e, t, n, i), {
    offsetX: r,
    offsetY: a
  } = calculateCenteringOffset(e, t, n, o);
  return {
    scale: o,
    offsetX: r,
    offsetY: a
  };
};
var DEFAULT_NODE_SIZE = {
  width: 100,
  height: 50
};
var extractNodeBounds = (e, t = DEFAULT_NODE_SIZE) => {
  const n = e.size ?? t, i = e.angle ?? 0;
  return {
    id: e.id,
    x: e.position.x,
    y: e.position.y,
    width: n.width,
    height: n.height,
    angle: i,
    transform: `rotate(${i} ${e.position.x + n.width / 2} ${e.position.y + n.height / 2})`
  };
};
var calculateBoundsFromPositions = (e, t = DEFAULT_NODE_SIZE) => {
  if (0 === e.length) return {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  const n = e.map((e2) => {
    const n2 = e2.size ?? t;
    return getRotatedBoundingRect({
      x: e2.position.x,
      y: e2.position.y,
      width: n2.width,
      height: n2.height
    }, e2.angle ?? 0);
  });
  return unionRect(n);
};
var transformViewportToMinimapSpace = (e, t) => ({
  x: -e.x / e.scale * t.scale + t.offsetX,
  y: -e.y / e.scale * t.scale + t.offsetY,
  width: (e.width ?? 0) / e.scale * t.scale,
  height: (e.height ?? 0) / e.scale * t.scale
});
var NgDiagramMinimapNodeTemplateMap = class extends Map {
};
var MinimapNodeCache = class {
  cache = /* @__PURE__ */ new WeakMap();
  clear() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
  getOrCompute(e, t) {
    const n = this.cache.get(e);
    if (n) return n;
    const i = t();
    return this.cache.set(e, i), i;
  }
};
var DirectMinimapStrategy = class _DirectMinimapStrategy {
  renderer = inject(RendererService);
  cache = new MinimapNodeCache();
  lastStyleFn;
  lastTemplateMap;
  computeMinimapNodes(e, t) {
    return this.invalidateCacheIfNeeded(e, t), this.renderer.nodes().map((n) => this.cache.getOrCompute(n, () => ({
      bounds: extractNodeBounds(n),
      diagramNode: n,
      nodeStyle: e?.(n) ?? {},
      template: n.type ? t.get(n.type) ?? null : null
    })));
  }
  computeDiagramBounds() {
    return calculatePartsBounds(this.renderer.nodes(), []);
  }
  invalidateCacheIfNeeded(e, t) {
    e === this.lastStyleFn && t === this.lastTemplateMap || (this.cache.clear(), this.lastStyleFn = e, this.lastTemplateMap = t);
  }
  static "ɵfac" = function DirectMinimapStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DirectMinimapStrategy)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _DirectMinimapStrategy,
    factory: _DirectMinimapStrategy.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirectMinimapStrategy, [{
    type: Injectable
  }], null, null);
})();
var NgDiagramModelService = class _NgDiagramModelService extends NgDiagramBaseService {
  diagramService = inject(NgDiagramService);
  _nodes = signal([]);
  _edges = signal([]);
  _metadata = signal({
    viewport: {
      x: 0,
      y: 0,
      scale: 1
    }
  });
  nodes = this._nodes.asReadonly();
  edges = this._edges.asReadonly();
  metadata = this._metadata.asReadonly();
  constructor() {
    super(), effect(() => {
      this.diagramService.isInitialized() && (this.flowCore.model.onChange(this.modelListener), untracked(() => this.modelListener({
        nodes: this.flowCore.model.getNodes(),
        edges: this.flowCore.model.getEdges(),
        metadata: this.flowCore.model.getMetadata()
      })));
    });
  }
  ngOnDestroy() {
    this.flowCoreProvider.isInitialized() && this.flowCore.model.unregisterOnChange(this.modelListener);
  }
  getModel() {
    return this.flowCore.model;
  }
  toJSON() {
    return this.flowCore.model.toJSON();
  }
  addEdges(e) {
    this.flowCore.commandHandler.emit("addEdges", {
      edges: e
    });
  }
  addNodes(e) {
    this.flowCore.commandHandler.emit("addNodes", {
      nodes: e
    });
  }
  getEdgeById(e) {
    return this.flowCore.getEdgeById(e) || null;
  }
  getNearestNodeInRange(e, t) {
    return this.flowCore.getNearestNodeInRange(e, t) || null;
  }
  getNearestPortInRange(e, t) {
    return this.flowCore.getNearestPortInRange(e, t) || null;
  }
  getNodeById(e) {
    return this.flowCore.getNodeById(e);
  }
  getNodesInRange(e, t) {
    return this.flowCore.getNodesInRange(e, t);
  }
  getConnectedEdges(e) {
    return this.flowCore.getConnectedEdges(e);
  }
  getConnectedNodes(e) {
    return this.flowCore.getConnectedNodes(e);
  }
  getNodeEnds(e) {
    return this.flowCore.getNodeEnds(e);
  }
  getChildren(e) {
    return this.flowCore.getChildren(e);
  }
  getChildrenNested(e) {
    return this.flowCore.getChildrenNested(e);
  }
  isNestedChild(e, t) {
    return this.flowCore.isNestedChild(e, t);
  }
  getParentHierarchy(e) {
    return this.flowCore.getParentHierarchy(e);
  }
  getOverlappingNodes(e) {
    return this.flowCore.getOverlappingNodes(e);
  }
  computePartsBounds(e, t) {
    return calculatePartsBounds(e, t);
  }
  updateEdge(e, t) {
    this.flowCore.commandHandler.emit("updateEdge", {
      id: e,
      edgeChanges: __spreadValues({}, t)
    });
  }
  updateEdgeData(e, t) {
    this.flowCore.commandHandler.emit("updateEdge", {
      id: e,
      edgeChanges: {
        data: t
      }
    });
  }
  updateNode(e, t) {
    this.flowCore.commandHandler.emit("updateNode", {
      id: e,
      nodeChanges: __spreadValues({}, t)
    });
  }
  updateNodeData(e, t) {
    this.flowCore.commandHandler.emit("updateNode", {
      id: e,
      nodeChanges: {
        data: t
      }
    });
  }
  updateNodes(e) {
    this.flowCore.commandHandler.emit("updateNodes", {
      nodes: e
    });
  }
  updateEdges(e) {
    this.flowCore.commandHandler.emit("updateEdges", {
      edges: e
    });
  }
  deleteEdges(e) {
    this.flowCore.commandHandler.emit("deleteEdges", {
      ids: e
    });
  }
  deleteNodes(e) {
    this.flowCore.commandHandler.emit("deleteNodes", {
      ids: e
    });
  }
  modelListener = (e) => {
    this._nodes.set(e.nodes), this._edges.set(e.edges), this._metadata.set(e.metadata);
  };
  static "ɵfac" = function NgDiagramModelService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramModelService)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _NgDiagramModelService,
    factory: _NgDiagramModelService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramModelService, [{
    type: Injectable
  }], () => [], null);
})();
var VirtualizedMinimapStrategy = class _VirtualizedMinimapStrategy {
  modelService = inject(NgDiagramModelService);
  computeMinimapNodes() {
    return [];
  }
  computeDiagramBounds() {
    return calculateBoundsFromPositions(this.modelService.nodes());
  }
  static "ɵfac" = function VirtualizedMinimapStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VirtualizedMinimapStrategy)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _VirtualizedMinimapStrategy,
    factory: _VirtualizedMinimapStrategy.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VirtualizedMinimapStrategy, [{
    type: Injectable
  }], null, null);
})();
var NgDiagramMinimapComponent = class _NgDiagramMinimapComponent {
  VIEWPORT_STROKE_WIDTH_CSS_VAR = "--ngd-minimap-viewport-stroke-width";
  renderer = inject(RendererService);
  flowCoreProvider = inject(FlowCoreProviderService);
  interactionTracker = inject(MinimapInteractionTracker);
  elementRef = inject(ElementRef);
  directStrategy = inject(DirectMinimapStrategy);
  virtualizedStrategy = inject(VirtualizedMinimapStrategy);
  strokePadding = signal(1);
  position = input("bottom-right");
  width = input(200);
  height = input(150);
  showZoomControls = input(true);
  nodeStyle = input();
  minimapNodeTemplateMap = input(new NgDiagramMinimapNodeTemplateMap());
  deferNodeUpdates = input(false);
  ngAfterViewInit() {
    this.strokePadding.set(this.getStrokePaddingFromCss());
  }
  isDiagramInitialized = this.renderer.isInitialized;
  viewport = this.renderer.viewport;
  hasValidViewport = computed(() => {
    const e = this.viewport();
    return !!e.width && !!e.height && e.width > 0 && e.height > 0;
  });
  viewportRect = computed(() => transformViewportToMinimapSpace(this.viewport(), this.transform()));
  strategy = computed(() => this.isDiagramInitialized() && this.flowCoreProvider.provide().isVirtualizationActive ? this.virtualizedStrategy : this.directStrategy);
  transform = computed(() => calculateMinimapTransform(this.combinedBounds(), this.width(), this.height(), this.strokePadding()));
  nodesGroupTransform = computed(() => {
    const e = this.transform();
    return `translate(${e.offsetX}, ${e.offsetY}) scale(${e.scale})`;
  });
  isDeferringUpdates = computed(() => this.deferNodeUpdates() && this.interactionTracker.isInteracting());
  cachedMinimapNodes = [];
  cachedDiagramBounds = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  minimapNodes = computed(() => {
    if (this.isDeferringUpdates()) return this.cachedMinimapNodes;
    const e = this.strategy().computeMinimapNodes(this.nodeStyle(), this.minimapNodeTemplateMap());
    return this.cachedMinimapNodes = e, e;
  });
  showDiagramBounds = computed(() => this.isDiagramInitialized() && this.flowCoreProvider.provide().isVirtualizationActive);
  diagramBounds = computed(() => {
    if (this.isDeferringUpdates()) return this.cachedDiagramBounds;
    const e = this.strategy().computeDiagramBounds();
    return this.cachedDiagramBounds = e, e;
  });
  viewportBoundsInDiagramSpace = computed(() => convertViewportToDiagramBounds(this.viewport()));
  combinedBounds = computed(() => combineDiagramAndViewportBounds(this.diagramBounds(), this.viewportBoundsInDiagramSpace()));
  getStrokePaddingFromCss() {
    const e = getComputedStyle(this.elementRef.nativeElement).getPropertyValue(this.VIEWPORT_STROKE_WIDTH_CSS_VAR).trim();
    return parseFloat(e) || 1;
  }
  static "ɵfac" = function NgDiagramMinimapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramMinimapComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramMinimapComponent,
    selectors: [["ng-diagram-minimap"]],
    hostVars: 2,
    hostBindings: function NgDiagramMinimapComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.position());
      }
    },
    inputs: {
      position: [1, "position"],
      width: [1, "width"],
      height: [1, "height"],
      showZoomControls: [1, "showZoomControls"],
      nodeStyle: [1, "nodeStyle"],
      minimapNodeTemplateMap: [1, "minimapNodeTemplateMap"],
      deferNodeUpdates: [1, "deferNodeUpdates"]
    },
    features: [ɵɵProvidersFeature([DirectMinimapStrategy, VirtualizedMinimapStrategy, MinimapInteractionTracker])],
    decls: 5,
    vars: 10,
    consts: [[3, "position"], ["ngDiagramMinimapNavigation", "", 1, "minimap-svg", 3, "transform", "viewport"], ["x", "0", "y", "0", 1, "minimap-background"], ["ng-diagram-minimap-diagram-bounds", "", 3, "diagramBounds", "minimapTransform"], [1, "minimap-viewport"], ["ng-diagram-default-minimap-node", "", 3, "bounds", "nodeStyle"], [4, "ngComponentOutlet", "ngComponentOutletInputs"]],
    template: function NgDiagramMinimapComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "ng-diagram-panel", 0);
        ɵɵnamespaceSVG();
        ɵɵelementStart(1, "svg", 1);
        ɵɵelement(2, "rect", 2);
        ɵɵconditionalCreate(3, NgDiagramMinimapComponent_Conditional_3_Template, 5, 3);
        ɵɵelementEnd();
        ɵɵconditionalCreate(4, NgDiagramMinimapComponent_Conditional_4_Template, 1, 0, "ng-diagram-zoom-controls");
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("position", ctx.position());
        ɵɵadvance();
        ɵɵproperty("transform", ctx.transform())("viewport", ctx.viewport());
        ɵɵattribute("viewBox", "0 0 " + ctx.width() + " " + ctx.height())("width", ctx.width())("height", ctx.height());
        ɵɵadvance();
        ɵɵattribute("width", ctx.width())("height", ctx.height());
        ɵɵadvance();
        ɵɵconditional(ctx.isDiagramInitialized() ? 3 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.showZoomControls() && ctx.isDiagramInitialized() ? 4 : -1);
      }
    },
    dependencies: [NgDiagramMinimapNavigationDirective, CommonModule, NgComponentOutlet, NgDiagramDefaultMinimapNodeComponent, NgDiagramMinimapDiagramBoundsComponent, NgDiagramZoomControlsComponent, NgDiagramPanelComponent],
    styles: ["[_nghost-%COMP%]{display:block;position:absolute;pointer-events:auto;z-index:10}.bottom-right[_nghost-%COMP%]{bottom:var(--ngd-minimap-margin);right:var(--ngd-minimap-margin)}.bottom-left[_nghost-%COMP%]{bottom:var(--ngd-minimap-margin);left:var(--ngd-minimap-margin)}.top-right[_nghost-%COMP%]{top:var(--ngd-minimap-margin);right:var(--ngd-minimap-margin)}.top-left[_nghost-%COMP%]{top:var(--ngd-minimap-margin);left:var(--ngd-minimap-margin)}.minimap-svg[_ngcontent-%COMP%]{display:block;cursor:pointer;touch-action:none}.minimap-background[_ngcontent-%COMP%]{fill:transparent}.minimap-viewport[_ngcontent-%COMP%]{stroke:var(--ngd-minimap-viewport-stroke-color);stroke-width:var(--ngd-minimap-viewport-stroke-width);fill:transparent;pointer-events:none}.minimap-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramMinimapComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-minimap",
      standalone: true,
      imports: [NgDiagramMinimapNavigationDirective, CommonModule, NgDiagramDefaultMinimapNodeComponent, NgDiagramMinimapDiagramBoundsComponent, NgDiagramZoomControlsComponent, NgDiagramPanelComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [DirectMinimapStrategy, VirtualizedMinimapStrategy, MinimapInteractionTracker],
      host: {
        "[class]": "position()"
      },
      template: `<ng-diagram-panel [position]="position()">
  <svg
    ngDiagramMinimapNavigation
    [transform]="transform()"
    [viewport]="viewport()"
    class="minimap-svg"
    [attr.viewBox]="'0 0 ' + width() + ' ' + height()"
    [attr.width]="width()"
    [attr.height]="height()"
  >
    <rect class="minimap-background" x="0" y="0" [attr.width]="width()" [attr.height]="height()" />
    @if (isDiagramInitialized()) {
      <g [attr.transform]="nodesGroupTransform()">
        @for (item of minimapNodes(); track item.bounds.id) {
          @if (item.template) {
            <svg:foreignObject
              [attr.x]="item.bounds.x"
              [attr.y]="item.bounds.y"
              [attr.width]="item.bounds.width"
              [attr.height]="item.bounds.height"
              [attr.transform]="item.bounds.transform"
            >
              <ng-container
                *ngComponentOutlet="item.template; inputs: { node: item.diagramNode, nodeStyle: item.nodeStyle }"
              />
            </svg:foreignObject>
          } @else {
            <svg:g ng-diagram-default-minimap-node [bounds]="item.bounds" [nodeStyle]="item.nodeStyle" />
          }
        }
      </g>
      @if (showDiagramBounds()) {
        <svg:rect
          ng-diagram-minimap-diagram-bounds
          [diagramBounds]="diagramBounds()"
          [minimapTransform]="transform()"
        />
      }
      @if (hasValidViewport()) {
        <rect
          class="minimap-viewport"
          [attr.x]="viewportRect().x"
          [attr.y]="viewportRect().y"
          [attr.width]="viewportRect().width"
          [attr.height]="viewportRect().height"
        />
      }
    }
  </svg>
  @if (showZoomControls() && isDiagramInitialized()) {
    <ng-diagram-zoom-controls />
  }
</ng-diagram-panel>
`,
      styles: [":host{display:block;position:absolute;pointer-events:auto;z-index:10}:host.bottom-right{bottom:var(--ngd-minimap-margin);right:var(--ngd-minimap-margin)}:host.bottom-left{bottom:var(--ngd-minimap-margin);left:var(--ngd-minimap-margin)}:host.top-right{top:var(--ngd-minimap-margin);right:var(--ngd-minimap-margin)}:host.top-left{top:var(--ngd-minimap-margin);left:var(--ngd-minimap-margin)}.minimap-svg{display:block;cursor:pointer;touch-action:none}.minimap-background{fill:transparent}.minimap-viewport{stroke:var(--ngd-minimap-viewport-stroke-color);stroke-width:var(--ngd-minimap-viewport-stroke-width);fill:transparent;pointer-events:none}.minimap-footer{display:flex;justify-content:center;align-items:center}\n"]
    }]
  }], null, null);
})();
var NgDiagramPaletteItemPreviewComponent = class _NgDiagramPaletteItemPreviewComponent {
  paletteService = inject(PaletteService);
  environment = inject(EnvironmentProviderService);
  browser = this.environment.browser;
  id = this.environment.generateId();
  preview = viewChild("preview");
  scale = inject(NgDiagramViewportService).scale;
  isSafari = "Safari" === this.browser;
  isChrome = "Chrome" === this.browser;
  isVisible = computed(() => this.paletteService.previewId() === this.id);
  get scaleTransform() {
    return `scale(${this.scale()})`;
  }
  static "ɵfac" = function NgDiagramPaletteItemPreviewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramPaletteItemPreviewComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramPaletteItemPreviewComponent,
    selectors: [["ng-diagram-palette-item-preview"]],
    viewQuery: function NgDiagramPaletteItemPreviewComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuerySignal(ctx.preview, _c10, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
      }
    },
    ngContentSelectors: _c2,
    decls: 4,
    vars: 8,
    consts: [["preview", ""]],
    template: function NgDiagramPaletteItemPreviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "div", null, 0)(2, "div");
        ɵɵprojection(3);
        ɵɵdomElementEnd()();
      }
      if (rf & 2) {
        ɵɵstyleProp("zoom", ctx.isSafari ? ctx.scale() : null);
        ɵɵclassProp("dragged-node", ctx.isSafari);
        ɵɵadvance(2);
        ɵɵstyleProp("transform", !ctx.isSafari ? ctx.scaleTransform : null);
        ɵɵclassProp("dragged-node", !ctx.isSafari);
      }
    },
    styles: [".dragged-node[_ngcontent-%COMP%]{position:absolute;background-color:transparent;pointer-events:none;left:-1000px}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramPaletteItemPreviewComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-palette-item-preview",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div #preview [class.dragged-node]="isSafari" [style.zoom]="isSafari ? scale() : null">\n  <div [class.dragged-node]="!isSafari" [style.transform]="!isSafari ? scaleTransform : null">\n    <ng-content></ng-content>\n  </div>\n</div>\n',
      styles: [".dragged-node{position:absolute;background-color:transparent;pointer-events:none;left:-1000px}\n"]
    }]
  }], null, null);
})();
var NgDiagramPaletteItemComponent = class _NgDiagramPaletteItemComponent {
  paletteService = inject(PaletteService);
  paletteItemPreviewComponent = contentChild(NgDiagramPaletteItemPreviewComponent);
  item = input.required();
  onDragStart(e) {
    this.setDragPreviewImage(e), this.paletteService.onDragStartFromPalette(e, this.item());
  }
  onMouseDown() {
    this.paletteService.onMouseDown(this.item(), this.paletteItemPreviewComponent()?.id || "");
  }
  onTouchStart(e) {
    e.preventDefault(), this.paletteService.onMouseDown(this.item(), this.paletteItemPreviewComponent()?.id || "");
  }
  setDragPreviewImage(e) {
    const t = this.paletteItemPreviewComponent()?.preview();
    if (!t?.nativeElement || !e.dataTransfer) return;
    const n = t.nativeElement.cloneNode(true);
    n.classList.add("dragged-node"), n.style.position = "fixed", document.body.appendChild(n), e.dataTransfer.setDragImage(n, 0, 0), requestAnimationFrame(() => n.remove());
  }
  static "ɵfac" = function NgDiagramPaletteItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgDiagramPaletteItemComponent)();
  };
  static "ɵcmp" = ɵɵdefineComponent({
    type: _NgDiagramPaletteItemComponent,
    selectors: [["ng-diagram-palette-item"]],
    contentQueries: function NgDiagramPaletteItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuerySignal(dirIndex, ctx.paletteItemPreviewComponent, NgDiagramPaletteItemPreviewComponent, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
      }
    },
    hostAttrs: [2, "width", "100%"],
    inputs: {
      item: [1, "item"]
    },
    ngContentSelectors: _c2,
    decls: 2,
    vars: 0,
    consts: [["draggable", "true", 1, "draggable", 3, "dragstart", "mousedown", "touchstart"]],
    template: function NgDiagramPaletteItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵdomElementStart(0, "div", 0);
        ɵɵdomListener("dragstart", function NgDiagramPaletteItemComponent_Template_div_dragstart_0_listener($event) {
          return ctx.onDragStart($event);
        })("mousedown", function NgDiagramPaletteItemComponent_Template_div_mousedown_0_listener() {
          return ctx.onMouseDown();
        })("touchstart", function NgDiagramPaletteItemComponent_Template_div_touchstart_0_listener($event) {
          return ctx.onTouchStart($event);
        });
        ɵɵprojection(1);
        ɵɵdomElementEnd();
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramPaletteItemComponent, [{
    type: Component,
    args: [{
      selector: "ng-diagram-palette-item",
      standalone: true,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        style: "width: 100%;"
      },
      template: '<div\n  class="draggable"\n  draggable="true"\n  (dragstart)="onDragStart($event)"\n  (mousedown)="onMouseDown()"\n  (touchstart)="onTouchStart($event)"\n>\n  <ng-content></ng-content>\n</div>\n'
    }]
  }], null, null);
})();
var NgDiagramClipboardService = class _NgDiagramClipboardService extends NgDiagramBaseService {
  copy() {
    this.flowCore.commandHandler.emit("copy");
  }
  cut() {
    this.flowCore.commandHandler.emit("cut");
  }
  paste(e) {
    this.flowCore.commandHandler.emit("paste", {
      position: e
    });
  }
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵNgDiagramClipboardService_BaseFactory;
    return function NgDiagramClipboardService_Factory(__ngFactoryType__) {
      return (ɵNgDiagramClipboardService_BaseFactory || (ɵNgDiagramClipboardService_BaseFactory = ɵɵgetInheritedFactory(_NgDiagramClipboardService)))(__ngFactoryType__ || _NgDiagramClipboardService);
    };
  })();
  static "ɵprov" = ɵɵdefineInjectable({
    token: _NgDiagramClipboardService,
    factory: _NgDiagramClipboardService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramClipboardService, [{
    type: Injectable
  }], null, null);
})();
var NgDiagramGroupsService = class _NgDiagramGroupsService extends NgDiagramBaseService {
  addToGroup(e, t) {
    this.flowCore.commandHandler.emit("addToGroup", {
      groupId: e,
      nodeIds: t
    });
  }
  highlightGroup(e, t) {
    this.flowCore.commandHandler.emit("highlightGroup", {
      groupId: e,
      nodes: t
    });
  }
  highlightGroupClear() {
    this.flowCore.commandHandler.emit("highlightGroupClear");
  }
  removeFromGroup(e, t) {
    this.flowCore.commandHandler.emit("removeFromGroup", {
      groupId: e,
      nodeIds: t
    });
  }
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵNgDiagramGroupsService_BaseFactory;
    return function NgDiagramGroupsService_Factory(__ngFactoryType__) {
      return (ɵNgDiagramGroupsService_BaseFactory || (ɵNgDiagramGroupsService_BaseFactory = ɵɵgetInheritedFactory(_NgDiagramGroupsService)))(__ngFactoryType__ || _NgDiagramGroupsService);
    };
  })();
  static "ɵprov" = ɵɵdefineInjectable({
    token: _NgDiagramGroupsService,
    factory: _NgDiagramGroupsService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramGroupsService, [{
    type: Injectable
  }], null, null);
})();
var NgDiagramNodeService = class _NgDiagramNodeService extends NgDiagramBaseService {
  moveNodesBy(e, t) {
    this.flowCore.commandHandler.emit("moveNodesBy", {
      nodes: e,
      delta: t
    });
  }
  resizeNode(e, t, n, i) {
    this.flowCore.commandHandler.emit("resizeNode", {
      id: e,
      size: t,
      position: n,
      disableAutoSize: i
    });
  }
  rotateNodeTo(e, t) {
    this.flowCore.commandHandler.emit("rotateNodeTo", {
      nodeId: e,
      angle: t
    });
  }
  bringToFront(e, t) {
    this.flowCore.commandHandler.emit("bringToFront", {
      nodeIds: e,
      edgeIds: t
    });
  }
  sendToBack(e, t) {
    this.flowCore.commandHandler.emit("sendToBack", {
      nodeIds: e,
      edgeIds: t
    });
  }
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵNgDiagramNodeService_BaseFactory;
    return function NgDiagramNodeService_Factory(__ngFactoryType__) {
      return (ɵNgDiagramNodeService_BaseFactory || (ɵNgDiagramNodeService_BaseFactory = ɵɵgetInheritedFactory(_NgDiagramNodeService)))(__ngFactoryType__ || _NgDiagramNodeService);
    };
  })();
  static "ɵprov" = ɵɵdefineInjectable({
    token: _NgDiagramNodeService,
    factory: _NgDiagramNodeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramNodeService, [{
    type: Injectable
  }], null, null);
})();
var NgDiagramSelectionService = class _NgDiagramSelectionService extends NgDiagramBaseService {
  modelService = inject(NgDiagramModelService);
  selection = computed(() => ({
    nodes: this.modelService.nodes().filter((e) => e.selected),
    edges: this.modelService.edges().filter((e) => e.selected)
  }));
  select(e = [], t = []) {
    this.flowCore.commandHandler.emit("select", {
      nodeIds: e,
      edgeIds: t
    });
  }
  deselect(e = [], t = []) {
    this.flowCore.commandHandler.emit("deselect", {
      nodeIds: e,
      edgeIds: t
    });
  }
  deselectAll() {
    this.flowCore.commandHandler.emit("deselectAll");
  }
  deleteSelection() {
    this.flowCore.commandHandler.emit("deleteSelection");
  }
  static "ɵfac" = /* @__PURE__ */ (() => {
    let ɵNgDiagramSelectionService_BaseFactory;
    return function NgDiagramSelectionService_Factory(__ngFactoryType__) {
      return (ɵNgDiagramSelectionService_BaseFactory || (ɵNgDiagramSelectionService_BaseFactory = ɵɵgetInheritedFactory(_NgDiagramSelectionService)))(__ngFactoryType__ || _NgDiagramSelectionService);
    };
  })();
  static "ɵprov" = ɵɵdefineInjectable({
    token: _NgDiagramSelectionService,
    factory: _NgDiagramSelectionService.ɵfac
  });
};
function stripNodeRuntimeProperties(e) {
  const _a = e, {
    selected: t,
    measuredPorts: n,
    measuredBounds: i,
    computedZIndex: o,
    _internalId: r
  } = _a, a = __objRest(_a, [
    "selected",
    "measuredPorts",
    "measuredBounds",
    "computedZIndex",
    "_internalId"
  ]);
  return a;
}
function stripEdgeRuntimeProperties(e) {
  const _a = e, {
    sourcePosition: t,
    targetPosition: n,
    measuredLabels: i,
    computedZIndex: o,
    _internalId: r
  } = _a, a = __objRest(_a, [
    "sourcePosition",
    "targetPosition",
    "measuredLabels",
    "computedZIndex",
    "_internalId"
  ]);
  return a;
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgDiagramSelectionService, [{
    type: Injectable
  }], null, null);
})();
var SignalModelAdapter = class _SignalModelAdapter {
  effectRef = null;
  nodes = signal([]);
  edges = signal([]);
  metadata = signal({
    viewport: {
      x: 0,
      y: 0,
      scale: 1
    }
  });
  callbacks = [];
  constructor() {
    this.effectRef = effect(() => {
      const e = this.nodes(), t = this.edges(), n = this.metadata();
      untracked(() => {
        for (const i of this.callbacks) i({
          nodes: e,
          edges: t,
          metadata: n
        });
      });
    });
  }
  destroy() {
    this.effectRef?.destroy(), this.callbacks = [], this.nodes.set([]), this.edges.set([]), this.metadata.set({
      viewport: {
        x: 0,
        y: 0,
        scale: 1
      }
    });
  }
  getNodes() {
    return this.nodes();
  }
  getEdges() {
    return this.edges();
  }
  updateNodes(e) {
    this.nodes.update((t) => "function" == typeof e ? e(t) : e);
  }
  updateEdges(e) {
    this.edges.update((t) => "function" == typeof e ? e(t) : e);
  }
  getMetadata() {
    return this.metadata();
  }
  updateMetadata(e) {
    this.metadata.update((t) => "function" == typeof e ? e(t) : e);
  }
  onChange(e) {
    this.callbacks.push(e);
  }
  unregisterOnChange(e) {
    this.callbacks = this.callbacks.filter((t) => t !== e);
  }
  undo() {
    console.warn("Undo is not implemented in the current model. Please implement a custom ModelAdapter to support undo functionality.");
  }
  redo() {
    console.warn("Redo is not implemented in the current model. Please implement a custom ModelAdapter to support redo functionality.");
  }
  toJSON() {
    const e = this.metadata();
    return JSON.stringify({
      nodes: this.nodes().map(stripNodeRuntimeProperties),
      edges: this.edges().map(stripEdgeRuntimeProperties),
      metadata: e
    });
  }
  static "ɵfac" = function SignalModelAdapter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignalModelAdapter)();
  };
  static "ɵprov" = ɵɵdefineInjectable({
    token: _SignalModelAdapter,
    factory: _SignalModelAdapter.ɵfac
  });
};
function initializeModel(e = {}, t) {
  return untracked(() => {
    const n = () => initializeModelAdapter(new SignalModelAdapter(), e);
    return t ? runInInjectionContext(t, n) : n();
  });
}
function initializeModelAdapter(e, t, n) {
  const i = () => {
    const n2 = inject(EnvironmentProviderService), i2 = () => n2.generateId();
    return t && (e.updateNodes(t.nodes || []), e.updateEdges(t.edges || []), e.updateMetadata((e2) => __spreadValues(__spreadValues({}, e2), t.metadata))), e.updateNodes(e.getNodes().map((e2) => assignInternalId(stripNodeRuntimeProperties(e2), i2))), e.updateEdges(e.getEdges().map((e2) => assignInternalId(stripEdgeRuntimeProperties(e2), i2))), e;
  };
  return n ? runInInjectionContext(n, i) : i();
}
function provideNgDiagram() {
  return [PaletteService, FlowCoreProviderService, FlowOffsetService, UpdatePortsService, RendererService, InputEventsRouterService, FlowResizeBatchProcessorService, NgDiagramService, CursorPositionTrackerService, BatchResizeObserverService, NgDiagramViewportService, NgDiagramModelService, NgDiagramSelectionService, NgDiagramClipboardService, NgDiagramNodeService, NgDiagramGroupsService, LinkingEventService, ManualLinkingService, TemplateProviderService, MarkerRegistryService, PanelRegistryService];
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalModelAdapter, [{
    type: Injectable
  }], () => [], null);
})();
export {
  BaseEdgeLabelComponent,
  BoxSelectionDirective,
  CursorPositionTrackerDirective,
  DiagramSelectionDirective,
  EdgeSelectionDirective,
  KeyboardInputsDirective,
  LinkingInputDirective,
  MobileBoxSelectionDirective,
  MobilePanningDirective,
  MobileZoomingDirective,
  NgDiagramBackgroundComponent,
  NgDiagramBaseEdgeComponent,
  NgDiagramBaseEdgeLabelComponent,
  NgDiagramBaseNodeTemplateComponent,
  NgDiagramClipboardService,
  NgDiagramComponent,
  NgDiagramEdgeTemplateMap,
  NgDiagramGroupHighlightedDirective,
  NgDiagramGroupsService,
  NgDiagramMarkerComponent,
  NgDiagramMinimapComponent,
  NgDiagramMinimapNavigationDirective,
  NgDiagramMinimapNodeTemplateMap,
  NgDiagramModelService,
  NgDiagramNodeResizeAdornmentComponent,
  NgDiagramNodeRotateAdornmentComponent,
  NgDiagramNodeSelectedDirective,
  NgDiagramNodeService,
  NgDiagramNodeTemplateMap,
  NgDiagramPaletteItemComponent,
  NgDiagramPaletteItemPreviewComponent,
  NgDiagramPortComponent,
  NgDiagramSelectionService,
  NgDiagramService,
  NgDiagramServicesAvailabilityCheckerDirective,
  NgDiagramViewportService,
  NodePositionDirective,
  NodeSelectionDirective,
  NodeSizeDirective,
  PaletteDropDirective,
  PanningDirective,
  ViewportDirective,
  ZIndexDirective,
  ZoomingWheelDirective,
  configureShortcuts,
  createMiddlewares,
  initializeModel,
  initializeModelAdapter,
  provideNgDiagram
};
//# sourceMappingURL=ng-diagram.js.map

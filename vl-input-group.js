import{NativeVlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlInputGroup extends NativeVlElement(HTMLDivElement){connectedCallback(){this.classList.add("vl-input-group")}get _stylePath(){return"/node_modules/vl-ui-input-group/style.css"}};define("vl-input-group",VlInputGroup,{extends:"div"});
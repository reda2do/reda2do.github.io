import{c as x}from"./chunk-6J2BL2C4.js";import{A as I,B as c,E as L,_ as M,ba as b,c as C,e as o,l as D,x as p,z as w}from"./chunk-FKOSXIOU.js";import{m as k}from"./chunk-DNSRGP4K.js";import{Eb as v,R as d,Va as f,W as l,ba as m,db as u,fb as h,fc as y,hb as a,oa as s,tc as g}from"./chunk-XDOHSWU4.js";var S=["data-p-icon","chevron-down"],P=(()=>{class n extends x{static \u0275fac=(()=>{let e;return function(i){return(e||(e=s(n)))(i||n)}})();static \u0275cmp=u({type:n,selectors:[["","data-p-icon","chevron-down"]],features:[a],attrs:S,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(t,i){t&1&&(m(),v(0,"path",0))},encapsulation:2})}return n})();var F=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var j=`
    ${F}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,O={root:"p-ink"},E=(()=>{class n extends M{name="ripple";style=j;classes=O;static \u0275fac=(()=>{let e;return function(i){return(e||(e=s(n)))(i||n)}})();static \u0275prov=d({token:n,factory:n.\u0275fac})}return n})();var Q=(()=>{class n extends b{zone=l(f);_componentStyle=l(E);animationListener;mouseDownListener;timeout;constructor(){super(),g(()=>{k(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(o(t,"p-ink-active"),!p(t)&&!c(t)){let r=Math.max(D(this.el.nativeElement),I(this.el.nativeElement));t.style.height=r+"px",t.style.width=r+"px"}let i=w(this.el.nativeElement),A=e.pageX-i.left+this.document.body.scrollTop-c(t)/2,B=e.pageY-i.top+this.document.body.scrollLeft-p(t)/2;this.renderer.setStyle(t,"top",B+"px"),this.renderer.setStyle(t,"left",A+"px"),C(t,"p-ink-active"),this.timeout=setTimeout(()=>{let r=this.getInk();r&&o(r,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&o(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),o(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,L(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=h({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[y([E]),a]})}return n})();export{P as a,Q as b};

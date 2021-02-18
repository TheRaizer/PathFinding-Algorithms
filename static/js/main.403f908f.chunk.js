(this["webpackJsonppath-finding"]=this["webpackJsonppath-finding"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),i=n.n(a),s=n(15),c=n.n(s),u=n(6),o=n.n(u),l=n(8),h=n(10),f=n(11),d=n(13),p=n(16),b="IS_SEARCHING",x="IS_CREATING_MAZE",m={isSearching:!1,isCreatingMaze:!1};function g(e,t){switch(t.type){case b:return Object(p.a)(Object(p.a)({},e),{},{isSearching:t.payload});case x:return Object(p.a)(Object(p.a)({},e),{},{isCreatingMaze:t.payload});default:console.error("no matching action types")}}var C={isCreatingMaze:!1};function v(){return(v=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.isCreatingMaze||w.isSearching){e.next=6;break}return C.isCreatingMaze=!0,n({type:x,payload:!0}),K.clearEntireGrid(),e.next=6,K.outlineGrid(1).then((function(){t().then((function(){C.isCreatingMaze=!1,n({type:x,payload:!1})}))}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){return new Promise((function(t){return setTimeout(t,e)}))},j=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},k=function(e,t){return 2*Math.floor(j(e,t)/2)},O=function(e,t){return t=t%2===0?t:t-1,2*Math.floor(j(e,t)/2)+1},S="A*",T="DIJKSTRA",I="BEST_FIRST",w={isSearching:!1,stopSearch:!1,maxSearchTime:3e3,minSearchTime:1,pathAnimationTime:10,searchAnimationTime:15};function M(e,t){for(var n=[],r=t;r!==e;)n.push(r),r=r.parentCell;return n.reverse(),n}function E(){return(E=Object(l.a)(o.a.mark((function e(t,n,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w.isSearching&&!C.isCreatingMaze){e.next=2;break}return e.abrupt("return");case 2:return w.isSearching=!0,n({type:b,payload:!0}),e.next=6,N(t,r).then(function(){var e=Object(l.a)(o.a.mark((function e(t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t){e.next=5;break}return w.isSearching=!1,w.stopSearch=!1,n({type:b,payload:!1}),e.abrupt("return");case 5:r=0;case 6:if(!(r<t.length)){e.next=15;break}return(a=t[r]).isOnPath=!0,a.setCellRerender((function(e){return!e})),e.next=12,y(w.pathAnimationTime);case 12:r++,e.next=6;break;case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:w.isSearching=!1,w.stopSearch=!1,n({type:b,payload:!1});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return new Promise((function(n,r){n(t(e).catch((function(e){console.log(e),r(e)})))}))}var A=0,R=1,F=2,G=3,P=function(e,t){return K.grid[t][e]===K.startCell||K.grid[t][e]===K.endCell},z=function(e,t,n,r){if(t){if(-1===n)return;var a=n===A?G:A;if(r.cellType!==a&&!e.altKey&&!e.ctrlKey){if(P(r.x,r.y))return;if((r.closed||r.opened)&&w.isSearching)return;X(r,a)}}},X=function(e,t){e.cellType=t,e.setCellRerender((function(e){return!e}))},_=(n(32),function(){function e(t,n){var r=this;Object(h.a)(this,e),this.setCellRerender=null,this.isOnPath=!1,this.opened=!1,this.closed=!1,this.cellType=A,this.gCost=Number.MAX_SAFE_INTEGER,this.hCost=0,this.fCost=function(){return r.hCost+r.gCost},this.heapIndex=-1,this.parentCell=null,this.getCellColor=function(){if((r.opened||r.isOnPath||r.closed)&&0===r.cellType){if(r.isOnPath)return"lightskyblue";if(r.closed)return"lightgray";if(r.opened)return"lightgreen"}else switch(r.cellType){case A:return"rgba(221, 221, 221, 0.603)";case R:return"green";case F:return"red";case G:return"black";default:throw new Error("Out of range exception")}},this.x=t,this.y=n}return Object(f.a)(e,[{key:"compareTo",value:function(e,t){var n=0;switch(t){case S:return n=this.fCost()<e.fCost()?1:-1,this.fCost()===e.fCost()&&(n=this.hCost<e.hCost?1:0),n;case T:return n=this.gCost<e.gCost?1:-1,this.gCost===e.gCost&&(n=0),n;case I:return n=this.hCost<e.hCost?1:-1,this.hCost===e.hCost&&(n=0),n;default:throw new Error("No proper search type given")}}}]),e}()),Y=!1,D=-1;function H(e){var t=e.cell,n=Object(a.useState)(!1),i=Object(d.a)(n,2)[1];return Object(a.useEffect)((function(){null==t.rerenderCell&&(t.setCellRerender=i)}),[t]),document.onmousedown=function(){return Y=!0},document.onmouseup=function(){Y=!1,D=-1},Object(r.jsx)(V,{state:{cell:t}})}function V(e){var t=e.state.cell,n=Object(a.useState)("load-cell"),i=Object(d.a)(n,2),s=i[0],c=i[1];return Object(r.jsx)("div",{className:s,style:{backgroundColor:t.getCellColor()},onMouseMove:function(e){return z(e,Y,D,t)},onMouseDown:function(e){D=t.cellType,z(e,!0,D,t)},onMouseEnter:function(){"cell-hovered"!==s&&c("cell-hovered")},onMouseLeave:function(){"cell-unhovered"!==s&&c("cell-unhovered")},onClick:function(e){return function(e,t){e.altKey?t.cellType===F?(K.endCell=null,X(t,A)):(t.cellType===R&&(K.startCell=null),null!=K.endCell&&X(K.endCell,A),X(t,F),K.endCell=t):e.ctrlKey&&(t.cellType===R?(K.startCell=null,X(t,A)):(t.cellType===F&&(K.endCell=null),null!=K.startCell&&X(K.startCell,A),X(t,R),K.startCell=t))}(e,t)},children:Object(r.jsx)("p",{})})}n(33);var K=new(function(){function e(){var t=this;Object(h.a)(this,e),this.grid=[],this.startCell=null,this.endCell=null,this.maxY=27,this.maxX=61,this.initGrid=function(){for(var e=0;e<t.maxY;e++){for(var n=[],r=0;r<t.maxX;r++)n.push(new _(r,e));t.grid.push(n)}var a=t.grid[Math.floor(t.maxY/2)][Math.floor(t.maxX/4)],i=t.grid[Math.floor(t.maxY/2)][Math.floor(t.maxX-t.maxX/4)];a.cellType=R,i.cellType=F,t.startCell=a,t.endCell=i},this.getMooreNeighbours=function(e,n){for(var r=[],a=-1;a<=1;a++)for(var i=-1;i<=1;i++)0===i&&0===a||t.cellIsInGrid(e+i,n+a)&&r.push(t.grid[n+a][e+i]);return r},this.getVonNeumannNeighbours=function(e,n){var r=[];return t.cellIsInGrid(e-1,n)&&r.push(t.grid[n][e-1]),t.cellIsInGrid(e+1,n)&&r.push(t.grid[n][e+1]),t.cellIsInGrid(e,n-1)&&r.push(t.grid[n-1][e]),t.cellIsInGrid(e,n+1)&&r.push(t.grid[n+1][e]),r},this.cellIsInGrid=function(e,n){return!(e<0||n<0||e>=t.maxX||n>=t.maxY)},this.clearEntireGrid=function(){t.grid.forEach((function(e){e.forEach((function(e){var t=!1;e.opened&&(e.opened=!1,t=!0),e.isOnPath&&(e.isOnPath=!1,t=!0),e.closed&&(e.closed=!1,t=!0),e.cellType!==A&&e.cellType!==R&&e.cellType!==F&&(e.cellType=A,t=!0),t&&e.setCellRerender((function(e){return!e}))}))}))},this.clearWalls=function(){t.grid.forEach((function(e){e.forEach((function(e){e.cellType===G&&(e.cellType=A,e.setCellRerender((function(e){return!e})))}))}))},this.initGrid()}return Object(f.a)(e,[{key:"resetForSearch",value:function(){var e=this;return new Promise((function(t,n){t(e.resetCellsForSearch().catch((function(e){console.log(e),n(e)})))}))}},{key:"resetCellsForSearch",value:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K.grid.forEach((function(e){e.forEach((function(e){var t=!1;e.opened&&(e.opened=!1,t=!0),e.isOnPath&&(e.isOnPath=!1,t=!0),e.closed&&(e.closed=!1,t=!0),t&&e.setCellRerender((function(e){return!e}))}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"calculateDistance",value:function(e,t){var n=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y);return n>r?14*r+10*(n-r):14*n+10*(r-n)}},{key:"outlineGrid",value:function(e){var t=this;return new Promise((function(n,r){return n(t.outLine(e).catch((function(e){console.log(e),r(e)})))}))}},{key:"outLine",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<this.maxY)){e.next=9;break}return P(0,n)||(this.grid[n][0].cellType=G,this.grid[n][0].setCellRerender((function(e){return!e}))),P(this.maxX-1,n)||(this.grid[n][this.maxX-1].cellType=G,this.grid[n][this.maxX-1].setCellRerender((function(e){return!e}))),e.next=6,y(t);case 6:n++,e.next=1;break;case 9:r=0;case 10:if(!(r<this.maxX)){e.next=18;break}return P(r,0)||(this.grid[0][r].cellType=G,this.grid[0][r].setCellRerender((function(e){return!e}))),P(r,this.maxY-1)||(this.grid[this.maxY-1][r].cellType=G,this.grid[this.maxY-1][r].setCellRerender((function(e){return!e}))),e.next=15,y(t);case 15:r++,e.next=10;break;case 18:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}());var L=function(){return Object(r.jsx)("section",{id:"grid",children:K.grid.map((function(e){return e.map((function(e){return Object(r.jsx)(H,{cell:e},e.x+" "+e.y)}))}))})},Q=n(43),B=n(44),J=n(22),U=n(45),W=n(23),Z=n(48),q=n(46),$=n(47),ee=function(){function e(t){Object(h.a)(this,e),this.items=[],this.lastHeapItemIndex=-1,this.searchType=t}return Object(f.a)(e,[{key:"contains",value:function(e){return this.items.includes(e)}},{key:"add",value:function(e){this.lastHeapItemIndex++,e.heapIndex=this.lastHeapItemIndex,this.items[this.lastHeapItemIndex]=e,this.sortUp(e)}},{key:"removeFirst",value:function(){var e=this.items[0];return this.items[0]=this.items.pop(),this.items[0].heapIndex=0,this.lastHeapItemIndex--,this.sortDown(this.items[0]),e}},{key:"update",value:function(e,t){t?this.sortUp(e):this.sortDown(e)}},{key:"sortUp",value:function(e){for(;;){var t=Math.floor((e.heapIndex-1)/2);t=t<0?0:t;var n=this.items[t];if(!(e.compareTo(n,this.searchType)>0))break;this.swap(e,n)}}},{key:"sortDown",value:function(e){for(;;){var t=Math.floor(2*e.heapIndex+1);t=t<0?0:t;var n=Math.floor(2*e.heapIndex+2);if(n=n<0?0:n,!(t<this.items.length))return;var r=t;if(n<this.items.length&&this.items[n].compareTo(this.items[t],this.searchType)>0&&(r=n),!(e.compareTo(this.items[r],this.searchType)<0))return;this.swap(e,this.items[r])}}},{key:"swap",value:function(e,t){this.items[e.heapIndex]=t,this.items[t.heapIndex]=e;var n=e.heapIndex;e.heapIndex=t.heapIndex,t.heapIndex=n}}]),e}();function te(e){return ne.apply(this,arguments)}function ne(){return(ne=Object(l.a)(o.a.mark((function e(t){var n,r,a,i,s,c,u,l,h,f,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.resetForSearch();case 2:n=new ee(S),r=new Set,a=K.startCell,i=K.endCell,a.parentCell=a,a.opened=!0,n.add(a),s=!1;case 10:if(!(n.lastHeapItemIndex>=0)){e.next=38;break}if(!w.stopSearch){e.next=14;break}return w.stopSearch=!1,e.abrupt("return");case 14:if((c=n.removeFirst())!==i){e.next=18;break}return s=!0,e.abrupt("break",38);case 18:u=[],u=t?K.getMooreNeighbours(c.x,c.y):K.getVonNeumannNeighbours(c.x,c.y),l=0;case 21:if(!(l<u.length)){e.next=30;break}if((h=u[l]).cellType!==G&&!r.has(h)){e.next=25;break}return e.abrupt("continue",27);case 25:((f=c.gCost+K.calculateDistance(c,h))<h.gCost||!n.contains(h))&&(h.gCost=f,h.hCost=K.calculateDistance(h,i),h.parentCell=c,n.contains(h)?n.update(h,!0):(n.add(h),h.opened=!0,h.setCellRerender((function(e){return!e}))));case 27:l++,e.next=21;break;case 30:if(c.closed=!0,c.setCellRerender((function(e){return!e})),r.add(c),!(w.searchAnimationTime>0)){e.next=36;break}return e.next=36,y(w.searchAnimationTime);case 36:e.next=10;break;case 38:if(!s){e.next=43;break}return d=M(a,i),e.abrupt("return",d);case 43:return console.log("no path found"),e.abrupt("return",null);case 45:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(l.a)(o.a.mark((function e(t){var n,r,a,i,s,c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.resetForSearch();case 2:return n=K.startCell,r=K.endCell,a=new ee(T),e.next=7,ie(a);case 7:n.parentCell=n,n.opened=!0,n.gCost=0,a.update(n,!0),i=a.removeFirst(),s=[],c=o.a.mark((function e(){var c,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w.stopSearch){e.next=3;break}return w.stopSearch=!1,e.abrupt("return",{v:void 0});case 3:if(s=t?K.getMooreNeighbours(i.x,i.y):K.getVonNeumannNeighbours(i.x,i.y),c=s.filter((function(e){return!e.closed})),u=i,c.forEach((function(e){if(e.cellType!==G){var t=u.gCost+K.calculateDistance(u,e);e.gCost>t&&(e.gCost=t,e.parentCell=u,e.opened=!0,e.setCellRerender((function(e){return!e})),a.update(e,!0))}})),i.closed=!0,i.setCellRerender((function(e){return!e})),!(w.searchAnimationTime>0)){e.next=12;break}return e.next=12,y(w.searchAnimationTime);case 12:if((i=a.removeFirst())!==r){e.next=16;break}return l=M(n,r),e.abrupt("return",{v:l});case 16:if(i.gCost!==Number.MAX_SAFE_INTEGER){e.next=18;break}return e.abrupt("return","break");case 18:case"end":return e.stop()}}),e)}));case 14:if(!(a.lastHeapItemIndex>=0)){e.next=23;break}return e.delegateYield(c(),"t0",16);case 16:if("break"!==(u=e.t0)){e.next=19;break}return e.abrupt("break",23);case 19:if("object"!==typeof u){e.next=21;break}return e.abrupt("return",u.v);case 21:e.next=14;break;case 23:console.log("no path found");case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){return new Promise((function(t){return t(K.grid.forEach((function(t){return t.forEach((function(t){t.gCost=Number.MAX_SAFE_INTEGER,e.add(t)}))})))}))}var se=function(){function e(){Object(h.a)(this,e),this.items={},this.head=0,this.tail=0}return Object(f.a)(e,[{key:"enQueue",value:function(e){this.items[this.tail]=e,this.tail++}},{key:"deQueue",value:function(){if(!(this.tail-this.head<=0)){var e=this.items[this.head];return delete this.items[this.head],this.head++,this.head===this.tail&&(this.head=0,this.tail=0),e}}},{key:"size",value:function(){return this.tail-this.head}},{key:"peek",value:function(){return this.items[this.head]}},{key:"print",value:function(){var e=[];for(var t in this.items)e.push(this.items[t]);return e}}]),e}();function ce(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(l.a)(o.a.mark((function e(t){var n,r,a,i,s,c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.resetForSearch();case 2:return n=K.startCell,r=K.endCell,a=new se,e.next=7,oe();case 7:n.parentCell=n,i=null,s=[],n.opened=!0,n.gCost=0,a.enQueue(n),c=o.a.mark((function e(){var c,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w.stopSearch){e.next=3;break}return w.stopSearch=!1,e.abrupt("return",{v:void 0});case 3:if(void 0!==(i=a.deQueue())){e.next=6;break}return e.abrupt("return","break");case 6:if(i!==r){e.next=9;break}return c=M(n,r),e.abrupt("return",{v:c});case 9:if(s=t?K.getMooreNeighbours(i.x,i.y):K.getVonNeumannNeighbours(i.x,i.y),u=s.filter((function(e){return!e.closed})),l=i,u.forEach((function(e){if(e.cellType!==G){e.closed||e.opened||a.enQueue(e);var t=l.gCost+K.calculateDistance(l,e);e.gCost>t&&(e.gCost=t,e.parentCell=l,e.opened=!0,e.setCellRerender((function(e){return!e})))}})),i.closed=!0,i.setCellRerender((function(e){return!e})),!(w.searchAnimationTime>0)){e.next=18;break}return e.next=18,y(w.searchAnimationTime);case 18:case"end":return e.stop()}}),e)}));case 14:if(!(a.size()>0)){e.next=23;break}return e.delegateYield(c(),"t0",16);case 16:if("break"!==(u=e.t0)){e.next=19;break}return e.abrupt("break",23);case 19:if("object"!==typeof u){e.next=21;break}return e.abrupt("return",u.v);case 21:e.next=14;break;case 23:console.log("no path found");case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return new Promise((function(e){return e(K.grid.forEach((function(e){return e.forEach((function(e){e.gCost=Number.MAX_SAFE_INTEGER}))})))}))}function le(e){return he.apply(this,arguments)}function he(){return(he=Object(l.a)(o.a.mark((function e(t){var n,r,a,i,s,c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.resetForSearch();case 2:return n=K.startCell,r=K.endCell,a=new ee(I),e.next=7,fe(a);case 7:n.parentCell=n,n.opened=!0,n.hCost=K.calculateDistance(n,r),a.update(n,!0),i=a.removeFirst(),s=[],c=o.a.mark((function e(){var c,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w.stopSearch){e.next=3;break}return w.stopSearch=!1,e.abrupt("return",{v:void 0});case 3:if(s=t?K.getMooreNeighbours(i.x,i.y):K.getVonNeumannNeighbours(i.x,i.y),c=s.filter((function(e){return!e.closed&&!e.opened})),u=i,c.forEach((function(e){e.cellType!==G&&(e.hCost=K.calculateDistance(e,r),e.parentCell=u,e.opened=!0,e.setCellRerender((function(e){return!e})),a.update(e,!0))})),i.closed=!0,i.setCellRerender((function(e){return!e})),!(w.searchAnimationTime>0)){e.next=12;break}return e.next=12,y(w.searchAnimationTime);case 12:if((i=a.removeFirst())!==r){e.next=16;break}return l=M(n,r),e.abrupt("return",{v:l});case 16:if(i.hCost!==Number.MAX_SAFE_INTEGER){e.next=18;break}return e.abrupt("return","break");case 18:case"end":return e.stop()}}),e)}));case 14:if(!(a.lastHeapItemIndex>=0)){e.next=23;break}return e.delegateYield(c(),"t0",16);case 16:if("break"!==(u=e.t0)){e.next=19;break}return e.abrupt("break",23);case 19:if("object"!==typeof u){e.next=21;break}return e.abrupt("return",u.v);case 21:e.next=14;break;case 23:console.log("no path found");case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){return new Promise((function(t){return t(K.grid.forEach((function(t){return t.forEach((function(t){t.hCost=Number.MAX_SAFE_INTEGER,e.add(t)}))})))}))}var de="HORIZONTAL",pe="VERTICAL";function be(){return new Promise((function(e,t){e(me(1,1,K.maxX-2,K.maxY-2,xe(1,1,K.maxX-2,K.maxY-2)).catch((function(e){console.log(e),t(e)})))}))}function xe(e,t,n,r){var a=n-e,i=r-t;return a>i?pe:i>a||Math.random()>.5?de:pe}function me(e,t,n,r,a){return ge.apply(this,arguments)}function ge(){return(ge=Object(l.a)(o.a.mark((function e(t,n,r,a,i){var s,c,u,l,h,f,d,p,b,x;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r-t<2||a-n<2)){e.next=2;break}return e.abrupt("return");case 2:return c=je(s=i===de,t,n,r,a),u=c.xStartIdx,l=c.yStartIdx,h=ye(s,t,n,r,a),f=h.xPassageIdx,d=h.yPassageIdx,p=s?r-t:a-n,b=s?1:0,x=s?0:1,e.next=10,Ce(u,l,f,d,p,b,x);case 10:if(!s){e.next=17;break}return e.next=13,me(t,n,r,l-1,xe(t,n,r,l-1));case 13:return e.next=15,me(t,l+1,r,a,xe(t,l+1,r,a));case 15:e.next=21;break;case 17:return e.next=19,me(t,n,u-1,a,xe(t,n,u-1,a));case 19:return e.next=21,me(u+1,n,r,a,xe(u+1,n,r,a));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(e,t,n,r,a,i,s){return ve.apply(this,arguments)}function ve(){return(ve=Object(l.a)(o.a.mark((function e(t,n,r,a,i,s,c){var u,l,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=t,l=n,h=0;case 3:if(!(h<=i)){e.next=17;break}if(u!==r&&l!==a&&!P(u,l)){e.next=8;break}return u+=s,l+=c,e.abrupt("continue",14);case 8:return K.grid[l][u].cellType=G,K.grid[l][u].setCellRerender((function(e){return!e})),u+=s,l+=c,e.next=14,y(1);case 14:h++,e.next=3;break;case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e,t,n,r,a){var i=0,s=0;return e?(i=O(t,r),s=n):(i=t,s=O(n,a)),{xPassageIdx:i,yPassageIdx:s}}function je(e,t,n,r,a){var i=0,s=0;return e?(i=t,s=k(n+1,a-1)):(i=k(t+1,r-1),s=n),{xStartIdx:i,yStartIdx:s}}n(34);var ke=function(){var e=Object(a.useReducer)(g,m),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!0),c=Object(d.a)(s,2),u=c[0],o=c[1],l=Object(a.useState)(15),h=Object(d.a)(l,2),f=h[0],p=h[1],b=Object(a.useState)(!1),x=Object(d.a)(b,2),y=x[0],j=x[1],k=function(e){null!=K.startCell&&null!=K.endCell?function(e,t,n){E.apply(this,arguments)}(u,i,e):j(!0)};return Object(r.jsxs)(Q.a,{id:"header",className:"py-3",fluid:!0,children:[Object(r.jsxs)(B.a,{className:"unselectable",children:[Object(r.jsx)(J.a,{children:Object(r.jsxs)(U.a,{className:"mt-3",children:[Object(r.jsx)(U.a.Prepend,{children:Object(r.jsx)(U.a.Text,{id:"prepending-text",children:"Animation Interval (ms)"})}),Object(r.jsx)(W.a,{id:"basic-number","aria-describedby":"prepending-text",value:f,onChange:function(e){if(""!==e.target.value){var t=(n=parseFloat(e.target.value),r=w.minSearchTime,a=w.maxSearchTime,Math.min(Math.max(n,r),a));p(t),w.searchAnimationTime=t}var n,r,a},min:w.minSearchTime,max:w.maxSearchTime,step:"50",type:"number"})]})}),Object(r.jsx)(J.a,{className:"can-cross-diagonals",children:Object(r.jsx)(Z.a,{children:Object(r.jsx)(Z.a.Check,{type:"switch",id:"custom-switch",label:"Can Cross Diagonals",checked:u,onChange:function(){return o((function(e){return!e}))}})})}),Object(r.jsxs)(J.a,{xs:4,className:"algorithms",children:[Object(r.jsx)(q.a,{variant:"outline-dark",onClick:function(){return function(e,t){return v.apply(this,arguments)}(be,i)},type:"button",className:n.isSearching||n.isCreatingMaze?"disabled":"",children:"Create Maze"}),Object(r.jsx)(q.a,{variant:"outline-dark",onClick:function(){return k(te)},type:"button",className:n.isSearching||n.isCreatingMaze?"disabled":"",children:"A*"}),Object(r.jsx)(q.a,{variant:"outline-dark",onClick:function(){return k(re)},type:"button",className:n.isSearching||n.isCreatingMaze?"disabled":"",children:"Dijkstras"}),Object(r.jsx)(q.a,{variant:"outline-dark",onClick:function(){return k(ce)},type:"button",className:n.isSearching||n.isCreatingMaze?"disabled":"",children:"Breadth First Search"}),Object(r.jsx)(q.a,{variant:"outline-dark",onClick:function(){return k(le)},type:"button",className:n.isSearching||n.isCreatingMaze?"disabled":"",children:"Best First Search"})]}),Object(r.jsxs)(J.a,{className:"clears",children:[Object(r.jsx)(q.a,{variant:"outline-danger",onClick:function(){w.isSearching||C.isCreatingMaze||K.clearEntireGrid()},type:"button",className:n.isSearching||n.isCreatingMaze?"disabled":"",children:"Clear Entire Grid"}),Object(r.jsx)(q.a,{variant:"outline-danger",onClick:function(){C.isCreatingMaze||K.clearWalls()},type:"button",className:n.isCreatingMaze?"disabled":"",children:"Clear Walls"}),Object(r.jsx)(q.a,{variant:"outline-danger",onClick:function(){w.isSearching&&(w.stopSearch=!0)},type:"button",className:n.isSearching?"":"disabled",children:"Stop Search"})]}),Object(r.jsxs)(J.a,{xs:2,children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Ctrl Click:"})," set start cell"]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("b",{children:"Alt Click:"})," set end cell"]})]})]}),y?Object(r.jsx)($.a,{variant:"danger",onClose:function(){return j(!1)},dismissible:!0,children:Object(r.jsx)($.a.Heading,{children:"You are missing a start or end cell"})}):Object(r.jsx)("div",{})]})};var Oe=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(ke,{}),Object(r.jsx)(L,{})]})};n(38),n(39);c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Oe,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.403f908f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(33)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(2),l=n(1);n(17);var s=function(e){return r.a.createElement("header",null,e.children)};n(18);function u(e){return r.a.createElement("h1",{className:"logo"},e.data)}n(19);function f(e){function t(e){return r.a.createElement("p",{href:"#",className:"dropdown-item",onClick:function(t){e.onChange(t.currentTarget.innerText),e.changeParentState(t.currentTarget.innerText)}},e.name)}return r.a.createElement("div",{className:"dropdown"},e.listItems.map(function(n){return r.a.createElement(t,{key:n,name:n,onChange:e.onChange,changeParentState:e.changeParentState})}))}n(20);function h(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),u=s[0],h=s[1];return r.a.createElement("div",{className:"dropdown-menu",onClick:function(){return o(!i)}},u||e.name," ",r.a.createElement("i",{className:"fa-solid fa-caret-down"}),i&&r.a.createElement(f,{changeParentState:e.changeParentState,listItems:e.listItems,onChange:h}))}n(21);function d(e){return r.a.createElement("div",{className:"generic-button",onClick:e.onClick},e.name)}n(22);function m(e){return r.a.createElement("div",{className:"start-button",onClick:e.onClick},e.name)}n(23);function g(e){return r.a.createElement("main",null,e.children)}n(24);function p(e){return r.a.createElement("div",{className:"container"},e.children)}n(25);function E(e){return r.a.createElement("div",{className:"clear-button",onClick:e.clearingFunction},e.data)}n(26);function v(e){return r.a.createElement("div",{className:"grid-container"},e.children)}n(27);function b(e){return r.a.createElement("div",{className:"grid-node "+e.content+" "+e.seen,onClick:function(){"isEmpty"===e.content?e.alterBoard(e.x,e.y,"isEmpty"):"isStart"===e.content?e.alterBoard(e.x,e.y,"isStart"):"isEnd"===e.content&&e.alterBoard(e.x,e.y,"isEnd")},onContextMenu:function(t){t.preventDefault(),"isEmpty"!==e.content&&"isWall"!==e.content||e.alterBoard(e.x,e.y,"isWall")}},"isStart"===e.content?r.a.createElement("i",{className:"fa-solid fa-play "+e.content}):"isEnd"===e.content?r.a.createElement("i",{className:"fa-solid fa-flag-checkered "+e.content}):"isWall"===e.content?r.a.createElement("i",{className:"fa-solid fa-ghost "+e.content}):"")}n(28);function S(e){return r.a.createElement("div",{className:"grid"},e.board.map(function(t){return t.map(function(t){return r.a.createElement(b,{key:t.x+t.y,x:t.x,y:t.y,content:t.isStart?"isStart":t.isEnd?"isEnd":t.isWall?"isWall":"isEmpty",seen:t.isPath?"isPath":t.isSeen?"isSeen":"isNotSeen",alterBoard:e.alterBoard})})}))}n(29);function w(e){function t(e){return r.a.createElement("button",{className:"language-button",onClick:function(t){var a=t.target.innerText;e.onClick(a),n()}},e.language)}function n(){e.onInstructionChange(1)}return r.a.createElement("div",{className:"instructions-container"},r.a.createElement("i",{className:"fa-solid fa-arrow-left arrow-left",onClick:function(){e.onInstructionChange(-1)}}),r.a.createElement("div",{className:"instructions-container-data"},r.a.createElement("div",{className:"instructions-container-close",onClick:e.onClosure},r.a.createElement("i",{className:"fa-solid fa-xmark"})),0===e.instructionNumber?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,e.instructions[0][e.instructionNumber]),r.a.createElement("div",{className:"language-buttons-container"},r.a.createElement(t,{language:"Espa\xf1ol",onClick:e.onLanguageChange}),r.a.createElement(t,{language:"English",onClick:e.onLanguageChange}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,e.instructions[0][e.instructionNumber]),r.a.createElement("p",null,e.instructions[1][e.instructionNumber]),3===e.instructionNumber&&r.a.createElement("a",{href:e.instructions[1][4]},e.instructions[1][4]))),r.a.createElement("i",{className:"fa-solid fa-arrow-right arrow-right",onClick:n}))}n(30);function y(e){return r.a.createElement("div",{className:"window-warning"},r.a.createElement("h1",{className:"error-title"},e.error.errorTitle),r.a.createElement("p",{className:"error-message"},e.error.errorContent),r.a.createElement("iframe",{title:"sad-gif",src:"https://giphy.com/embed/7SF5scGB2AFrgsXP63",width:"480",height:"272",frameBorder:"0",className:"giphy-embed",allowFullScreen:!0}))}var O,j,k,T;n(31);function C(e,t,n,a){var r=0,i=[1,0,-1,0],o=[0,-1,0,1],c=[];for(r=0;r<4;r++){var l=e+i[r],s=t+o[r];s>=0&&s<n.length&&l>=0&&l<n[0].length&&!1===n[s][l].isWall&&!1===a[s][l]&&c.push(n[s][l])}return c}var x=n(5),N=n(6),F=function(){function e(t){Object(x.a)(this,e),this.data=[],this.rear=0,this.size=t}return Object(N.a)(e,[{key:"add",value:function(e){this.rear<this.size&&(this.data[this.rear]=e,this.rear=this.rear+1)}},{key:"length",value:function(){return this.rear}},{key:"isEmpty",value:function(){return 0===this.rear}},{key:"getFront",value:function(){if(!1===this.isEmpty())return this.data[0]}},{key:"getLast",value:function(){if(!1===this.isEmpty())return this.data[this.rear-1]}},{key:"pop",value:function(){if(!1===this.isEmpty())return this.rear=this.rear-1,this.data.shift()}},{key:"print",value:function(){for(var e=0;e<this.rear;e++)console.log(this.data[e])}},{key:"clear",value:function(){this.data.length=0,this.rear=0}}]),e}();var P,B,W=n(7);for(var I={algoTitle:"Algorithms",algoOptions:["DFS","BFS"],speedTitle:"Speed",speedOptions:["Slow","Medium","Fast"],mazeTitle:"Maze",startTitle:"Start"},z={clearTitle:"Clear",boardTitle:"Board",pathTitle:"Path",wallsTitle:"Walls"},M={0:"Select a language",1:"Welcome to Pathfinder!",2:"What is Pathfinder?",3:"Investigate!"},D={1:"To begin, choose an algorithm and a speed. You can also add your own walls or select the maze generation option. Finally, select a starting and ending point. When you are ready, press the start button to visualize the algorithm. By default, the starting algorithm is DFS with a fast speed.",2:"Pathfinder allows you to visualize algorithms such as DFS and BFS. It is important to know that DFS does not necessarily find the shortest path, while BFS does.",3:"You can do some research about the algorithms DFS, also known as Depth First Search; and BFS, known as Breadth First Search in the following link:",4:"https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/"},L={errorTitle:"Window Error!",errorContent:"The content of this page cannot be displayed in a screen with a width smaller than 1360px"},q={algoTitle:"Algoritmos",algoOptions:["DFS","BFS"],speedTitle:"Velocidad",speedOptions:["Lento","Medio","R\xe1pido"],mazeTitle:"Laberinto",startTitle:"Iniciar"},A={clearTitle:"Limpiar",boardTitle:"Tablero",pathTitle:"Camino",wallsTitle:"Paredes"},H={0:"Elija un idioma",1:"\xa1Bienvenido a Pathfinder!",2:"\xbfQu\xe9 hace Pathfinder?",3:"\xa1Tiempo de investigar!"},J={1:"Para empezar, selecciona un algoritmo y una velocidad. Adem\xe1s, puedes a\xf1adir tus propias paredes con el click derecho o seleccionar la opci\xf3n de generar un laberinto. Finalmente, selecciona un punto de inicio y un punto de destino. Cuando est\xe9s listo, presiona el bot\xf3n de iniciar para comenzar el algoritmo. Por defecto, el algoritmo inicial es DFS con una velocidad de r\xe1pido.",2:"Pathfinder permite visualizar algoritmos de b\xfasqueda de caminos, como DFS y BFS. Es importante saber que DFS no necesariamente encuentra el camino m\xe1s corto, mientras que BFS s\xed.",3:"Puedes investigar sobre los algoritmos DFS, tambi\xe9n conocido como B\xfasqueda en Profundidad; y BFS, conocido como B\xfasqueda en anchura en el siguiente enlace:",4:"https://www.encora.com/es/blog/dfs-vs-bfs"},R={errorTitle:"\xa1Error de ventana!",errorContent:"El contenido de esta p\xe1gina no se puede mostrar en una pantalla con un ancho inferior a 1360px"},V=[],Y=0;Y<15;Y++){for(var G=[],Q=0;Q<41;Q++){var X={x:Q,y:Y,isStart:!1,isEnd:!1,isWall:!1,isSeen:!1,isPath:!1};G.push(X)}V.push(G)}function K(){var e=window;return{innerWidth:e.innerWidth,innerHeight:e.innerHeight}}var U=function(){var e=Object(a.useState)(K()),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)("english"),f=Object(l.a)(o,2),b=f[0],x=f[1],N=Object(a.useState)(I),Y=Object(l.a)(N,2),G=Y[0],Q=Y[1],X=Object(a.useState)(z),U=Object(l.a)(X,2),Z=U[0],$=U[1],_=Object(a.useState)(!0),ee=Object(l.a)(_,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(0),re=Object(l.a)(ae,2),ie=re[0],oe=re[1],ce=Object(a.useState)(M),le=Object(l.a)(ce,2),se=le[0],ue=le[1],fe=Object(a.useState)(D),he=Object(l.a)(fe,2),de=he[0],me=he[1],ge=Object(a.useState)(L),pe=Object(l.a)(ge,2),Ee=pe[0],ve=pe[1],be=Object(a.useState)(!1),Se=Object(l.a)(be,2),we=Se[0],ye=Se[1],Oe=Object(a.useState)(50),je=Object(l.a)(Oe,2),ke=je[0],Te=je[1],Ce=Object(a.useState)(V),xe=Object(l.a)(Ce,2),Ne=xe[0],Fe=xe[1],Pe=Object(a.useState)([]),Be=Object(l.a)(Pe,2),We=Be[0],Ie=Be[1],ze=Object(a.useState)([]),Me=Object(l.a)(ze,2),De=Me[0],Le=Me[1],qe=Object(a.useState)([]),Ae=Object(l.a)(qe,2),He=Ae[0],Je=Ae[1],Re=Object(a.useState)("dfs"),Ve=Object(l.a)(Re,2),Ye=Ve[0],Ge=Ve[1];function Qe(){var e=[],t=[];return Ne.forEach(function(n){return n.forEach(function(n){n.isStart?e.push(n):n.isEnd&&t.push(n)})}),[e,t]}function Xe(){if(!we){var e=Object(c.a)(Ne);e.forEach(function(e){return e.forEach(function(e){e.isSeen=!1,e.isPath=!1})}),Fe(e)}}function Ke(){if(!we){var e=Object(c.a)(Ne);e.forEach(function(e){return e.forEach(function(e){e.isStart=!1,e.isEnd=!1,e.isWall=!1,e.isSeen=!1,e.isPath=!1})}),Fe(e)}}return Object(a.useEffect)(function(){"english"===b?(Q(I),$(z),ue(M),me(D),ve(L)):(Q(q),$(A),ue(H),me(J),ve(R))},[b]),Object(a.useEffect)(function(){function e(){i(K())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),Object(a.useEffect)(function(){!function(){var e=0;if(We)var t=setInterval(function(){if(e<We.length){var n=We[e].x,a=We[e].y,r=Object(c.a)(Ne);r[a][n].isSeen=!0,Fe(r),e++}e===We.length&&(clearInterval(t),setTimeout(function(){!function(){var e=0;if(He)var t=setInterval(function(){if(e<He.length){var n=He[e].x,a=He[e].y,r=Object(c.a)(Ne);r[a][n].isPath=!0,Fe(r),e++}e===He.length&&(clearInterval(t),ye(!1))},ke)}()},250))},ke)}()},[We]),Object(a.useEffect)(function(){!function(){var e=0,t=setInterval(function(){if(e<De.length){var n=De[e].x,a=De[e].y,r=Object(c.a)(Ne);r[a][n].isWall=!0,Fe(r),e++}e===De.length&&(clearInterval(t),ye(!1))},50)}()},[De]),r.a.createElement("div",{className:"App"},n.innerWidth>=1360?r.a.createElement(r.a.Fragment,null,te&&r.a.createElement(w,{instructions:[se,de],instructionNumber:ie,onLanguageChange:function(e){x(e.toLowerCase())},onClosure:function(){return ne(!1)},onInstructionChange:function(e){ie+e>=0&&ie+e<4?oe(ie+e):ie+e===4&&ne(!1)}}),r.a.createElement(s,null,r.a.createElement(u,{data:"Pathfinder"}),r.a.createElement(h,{name:G.algoTitle,changeParentState:function(e){Ge(e.toLowerCase())},listItems:G.algoOptions}),r.a.createElement(h,{name:G.speedTitle,changeParentState:function(e){e===G.speedOptions[0]?Te(200):e===G.speedOptions[1]?Te(100):e===G.speedOptions[2]&&Te(50)},listItems:G.speedOptions}),r.a.createElement(d,{name:G.mazeTitle,onClick:function(){we||(Ke(),ye(!0),De&&function(){var e;e=function e(t,n,a,r){if(r){P=t.map(function(e){return e.map(function(e){return Object(W.a)({},e,{wall:!1})})}),B=[];for(var i=0;i<t[0].length;i++)P[0][i].wall=!0,B.push(P[0][i]),P[t.length-1][i].wall=!0,B.push(P[t.length-1][i]);for(var o=0;o<t.length;o++)P[o][0].wall=!0,B.push(P[o][0]),P[o][t[0].length-1].wall=!0,B.push(P[o][t[0].length-1])}var c,l=n[1]-n[0]+1,s=a[1]-a[0]+1;if((c=l>s||!(l<s)&&[!0,!1][Math.floor(2*Math.random())])&&l>2&&s>2){var u=Math.floor(Math.random()*(l-2))+n[0]+1,f=[];f.push(Math.floor(Math.random()*s)+a[0]),!0!==P[a[0]-1][u].wall&&f.push(a[0]),!0!==P[a[1]+1][u].wall&&f.push(a[1]),f.length>1&&f.shift();for(var h=a[0];h<=a[1];h++){for(var d=!0,m=0;m<f.length;m++)if(h===f[m]){d=!1;break}d&&(P[h][u].wall=!P[h][u].wall,B.push(P[h][u]))}for(var g=[[n[0],u-1],[u+1,n[1]]],p=a,E=0;E<2;E++)e(t,g[E],p,!1)}else if(!c&&l>2&&s>2){var v=Math.floor(Math.random()*(s-2))+a[0]+1,b=[];b.push(Math.floor(Math.random()*l)+n[0]),!0!==P[v][n[0]-1].wall&&b.push(n[0]),!0!==P[v][n[1]+1].wall&&b.push(n[1]),b.length>1&&b.shift();for(var S=n[0];S<=n[1];S++){for(var w=!0,y=0;y<b.length;y++)if(S===b[y]){w=!1;break}w&&(P[v][S].wall=!P[v][S].wall,B.push(P[v][S]))}for(var O=[[a[0],v-1],[v+1,a[1]]],j=n,k=0;k<2;k++)e(t,j,O[k],!1)}return B}(Ne,[1,Ne[0].length-2],[1,Ne.length-2],!0),Le(function(){return e})}())}}),r.a.createElement(m,{name:G.startTitle,onClick:function(){we||(Xe(),ye(!0),We&&function(){var e,t=Qe();if(0!==t[0].length&&0!==t[1].length&&""!==Ye){"dfs"===Ye?e=function e(t,n,a,r){if(r){O=Object(c.a)(t),k=[],T=[],j=[];for(var i=0;i<15;i++){for(var o=[],l=0;l<41;l++)o.push(!1);j.push(o)}}var s=O[n[1]][n[0]],u=O[a[1]][a[0]];if(n[0]===a[0]&&n[1]===a[1])return[k,T,!0];j[s.y][s.x]=!0,k.push(s);for(var f=C(s.x,s.y,O,j),h=0;h<f.length;h++)if(f[h].parent=s,e(O,[f[h].x,f[h].y],[u.x,u.y],!1)[2]){if(r){for(var d=u;d.x!==s.x||d.y!==s.y;)T.push(d),d=d.parent;d.x===s.x&&d.y===s.y||T.push(d)}return[k,T,!0]}return[k,T,!1]}(Ne,[t[0][0].x,t[0][0].y],[t[1][0].x,t[1][0].y],!0):"bfs"===Ye&&(e=function(e,t,n){for(var a=e.length*e[0].length,r=new F(a),i=[],o=0;o<e.length;o++){for(var l=[],s=0;s<e[0].length;s++)l.push(!1);i.push(l)}var u=[],f=[],h=Object(c.a)(e),d=h[t[1]][t[0]],m=h[n[1]][n[0]];r.add(d);for(var g=function(){var e=r.pop();if(u.push(e),e===m)return"break";C(e.x,e.y,h,i).forEach(function(t){r.add(t),i[t.y][t.x]=!0,t.parent=e})};r.length()>0&&"break"!==g(););for(var p=m;p.x!==d.x||p.y!==d.y;)f.push(p),p=p.parent;return p.x===d.x&&p.y===d.y||f.push(p),[u,f]}(Ne,[t[0][0].x,t[0][0].y],[t[1][0].x,t[1][0].y]));var n=e[0],a=e[1];a.reverse(),Ie(function(){return n}),Je(function(){return a})}else ye(!1)}())}}),r.a.createElement(u,{data:"Visualizer"})),r.a.createElement(g,null,r.a.createElement(p,null,r.a.createElement(E,{data:Z.clearTitle+" "+Z.pathTitle,clearingFunction:Xe}),r.a.createElement(E,{data:Z.clearTitle+" "+Z.boardTitle,clearingFunction:Ke}),r.a.createElement(E,{data:Z.clearTitle+" "+Z.wallsTitle,clearingFunction:function(){if(!we){var e=Object(c.a)(Ne);e.forEach(function(e){return e.forEach(function(e){e.isWall=!1,e.isSeen=!1,e.isPath=!1})}),Fe(e)}}})),r.a.createElement(v,null,r.a.createElement(S,{started:we,board:Ne,alterBoard:function(e,t,n){if(!we){Ie([]),Je([]),Xe();var a=Object(c.a)(Ne);if("isEmpty"===n){var r=Qe();0===r[0].length?(a[t][e].isStart=!0,Fe(a)):0===r[1].length&&(a[t][e].isEnd=!0,Fe(a))}"isWall"!==n&&"isStart"!==n&&"isEnd"!==n||(a[t][e][n]=!a[t][e][n],Fe(a))}}})))):r.a.createElement(y,{error:Ee}))};n(32);o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)))}],[[8,1,2]]]);
//# sourceMappingURL=main.5d9f98b8.chunk.js.map
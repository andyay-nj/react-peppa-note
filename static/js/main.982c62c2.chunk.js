(this["webpackJsonpreact-peppa-note"]=this["webpackJsonpreact-peppa-note"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/peppa6.a8004c86.png"},function(e,t,n){e.exports=n.p+"static/media/peppa7.a9bd1d16.jpg"},function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(7),o=n.n(i),r=(n(15),n(5)),s=n(1),l=n(2),d=n(4),u=n(3),m=(n(16),n(17),n(8)),p=n.n(m),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onAddNote;e.onDeleteNote;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-title"},c.a.createElement("div",{className:"header-text"},c.a.createElement("span",null,"Peppa note"))),c.a.createElement("div",{className:"header-buttons"},c.a.createElement("button",{className:"header-add",onClick:t},c.a.createElement("img",{className:"header-image",src:p.a}))))}}]),n}(c.a.Component),h=(n(18),n(19),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.id,e.active),n=e.title,a=e.contents,i=e.onClick;return c.a.createElement("div",{className:t?"list-item active":"list-item",onClick:i},c.a.createElement("div",{className:"list-title"},n||"\uc81c\ubaa9"),c.a.createElement("div",{className:"list-contents"},a||"\ub0b4\uc6a9"))}}]),n}(c.a.Component)),f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.notes,n=e.activeId,a=e.onListItemClick;return c.a.createElement("div",{className:"list"},t.map((function(e){var t=e.id,i=e.title,o=e.contents;return c.a.createElement(h,{key:t,id:t,active:t===n,title:i,contents:o,onClick:function(){a(t)}})})))}}]),n}(c.a.Component),N=(n(20),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.theNote,n=e.onEditNote,a=t.title,i=t.contents;return c.a.createElement("div",{className:"note"},c.a.createElement("div",{className:"note-wrapper"},c.a.createElement("input",{className:"note-title",value:a,onChange:function(e){return n("title",e)}}),c.a.createElement("textarea",{className:"note-contents",value:i,onChange:function(e){return n("contents",e)}})))}}]),n}(c.a.Component)),E=function(){return"_"+Math.random().toString(36).substr(2,9)},b=n(9),j=n.n(b),O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={notes:[{id:"_dsafd111",title:"\uc81c\ubaa91",contents:"\ub0b4\uc6a91"},{id:"_dsafd222",title:"\uc81c\ubaa92",contents:"\ub0b4\uc6a92"},{id:"_dsafd333",title:"\uc81c\ubaa93",contents:"\ub0b4\uc6a93"}],activeId:"_dsafd222"},e.handleListItemClick=function(t){e.setState({activeId:t})},e.handelEditNote=function(t,n){var a=Object(r.a)(e.state.notes);a.find((function(t){return t.id===e.state.activeId}))[t]=n.target.value,e.setState({notes:a})},e.handleAddNote=function(){var t=E();e.setState({notes:[].concat(Object(r.a)(e.state.notes),[{id:t,title:"\uc81c\ubaa9",contents:"\ub0b4\uc6a9"}]),activeId:t})},e.handleDeleteNote=function(){var t=e.state.notes.filter((function(t){return t.id!==e.state.activeId}));e.setState({notes:t,activeId:0===t.length?null:t[0].id})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.notes,n=e.activeId,a=t.filter((function(e){return e.id===n}))[0];return c.a.createElement("div",{className:"app"},c.a.createElement(v,{onAddNote:this.handleAddNote,onDeleteNote:this.handleDeleteNote}),c.a.createElement("div",{className:"app-container"},c.a.createElement(f,{notes:t,activeId:n,onListItemClick:this.handleListItemClick}),0!==t.length&&c.a.createElement(N,{theNote:a,onEditNote:this.handelEditNote})),c.a.createElement("div",{className:"app-remove",onClick:this.handleDeleteNote},c.a.createElement("img",{className:"app-remove-icon",src:j.a})))}}]),n}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.982c62c2.chunk.js.map
(this["webpackJsonpportfolio-tracker"]=this["webpackJsonpportfolio-tracker"]||[]).push([[0],{367:function(e,t){},427:function(e,t,a){},428:function(e,t,a){},430:function(e,t,a){},439:function(e,t,a){},440:function(e,t,a){},441:function(e,t,a){},547:function(e,t,a){},548:function(e,t,a){},549:function(e,t,a){},554:function(e,t){},555:function(e,t){},556:function(e,t,a){},620:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(17),i=a.n(s),c=(a(427),a(15)),r=a(16),l=a(18),o=a(19),d=(a(428),a(4)),u=["btn--primary","btn--outline"],j=["btn--medium","btn--large"],h=function(e){var t=e.children,a=e.type,n=e.onClick,s=e.buttonStyle,i=e.buttonSize,c=u.includes(s)?s:u[0],r=j.includes(i)?i:j[0];return Object(d.jsx)("button",{className:"btn ".concat(c," ").concat(r),onClick:n,type:a,children:t})},b=[{title:"Home",url:"/portfolio-tracker",cName:"nav-links"},{title:"Stock Research",url:"/stock-research",cName:"nav-links"},{title:"Portfolio Dashboard",url:"/portfolio-dashboard",cName:"nav-links"},{title:"Import File",url:"/import-file",cName:"nav-links-mobile"}],p=(a(430),a(209)),x=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"NavbarItems",children:[Object(d.jsxs)("h1",{className:"navbar-logo",children:["Portfolio Calculator ",Object(d.jsx)("i",{className:"fas fa-dollar-sign"})]}),Object(d.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(d.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(d.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:b.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:e.cName,href:e.url,children:Object(d.jsx)("b",{children:e.title})})},t)}))}),Object(d.jsx)(p.b,{to:"/import-file",children:Object(d.jsx)(h,{children:Object(d.jsx)("b",{children:"Import File"})})})]})}}]),a}(n.Component),O=x,m=a(34),v=a(91),f=a.n(v),g=a(128),y=(a(439),a(440),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).handleClick=function(t){t.preventDefault(),console.log("clicked: "+e.props.url),window.open(e.props.url,"_blank").focus()},e.handleMouseOver=function(e){e.preventDefault(),e.target.style.color="purple"},e.handleMouseOut=function(e){e.preventDefault(),e.target.style.color=""},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("img",{src:this.props.image_url,alt:"image_url"})}),Object(d.jsxs)("div",{className:"text-box",children:[Object(d.jsx)("div",{className:"title",onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,children:this.props.title}),Object(d.jsx)("div",{className:"description",children:this.props.description}),Object(d.jsx)("div",{className:"source",children:this.props.source})]})]})})}}]),a}(n.Component)),k=y,N=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={box0:{title:"",description:"",url:"",image_url:"",snippet:"",source:""},box1:{title:"",description:"",url:"",image_url:"",snippet:"",source:""},box2:{title:"",description:"",url:"",image_url:"",snippet:"",source:""},rebelInvestorBox:{title:"Rebel Investor",description:"Financially independent self-directed investors sharing unbiased and fact-based investment knowledge for family and friends",url:"https://pilotprojectsite.wordpress.com/",image_url:"https://pilotprojectsite.files.wordpress.com/2015/12/cropped-rebelinvestor3.png?w=387",source:"Anonymous"}},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,a=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={api_token:"DoixORqY2kR8bCCiERMVK6Z844d6TNWXJUqY7oFo",symbols:"SPY,DIA,QQQ",limit:"3"},fetch("https://api.marketaux.com/v1/news/all?"+("symbols="+t.symbols+"&filter_entities=truelimit&api_token="+t.api_token),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({box0:{title:e.data[0].title,description:e.data[0].description,url:e.data[0].url,image_url:e.data[0].image_url,snippet:e.data[0].snippet,source:e.data[0].source},box1:{title:e.data[1].title,description:e.data[1].description,url:e.data[1].url,image_url:e.data[1].image_url,snippet:e.data[1].snippet,source:e.data[1].source},box2:{title:e.data[2].title,description:e.data[2].description,url:e.data[2].url,image_url:e.data[2].image_url,snippet:e.data[2].snippet,source:e.data[2].source}})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"text-padding",children:[Object(d.jsx)(k,{title:this.state.box0.title,description:this.state.box0.description,image_url:this.state.box0.image_url,url:this.state.box0.url,source:this.state.box0.source}),Object(d.jsx)(k,{title:this.state.box1.title,description:this.state.box1.description,image_url:this.state.box1.image_url,url:this.state.box1.url,source:this.state.box1.source}),Object(d.jsx)(k,{title:this.state.box2.title,description:this.state.box2.description,image_url:this.state.box2.image_url,url:this.state.box2.url,source:this.state.box2.source}),Object(d.jsx)(k,{title:this.state.rebelInvestorBox.title,description:this.state.rebelInvestorBox.description,image_url:this.state.rebelInvestorBox.image_url,url:this.state.rebelInvestorBox.url,source:this.state.rebelInvestorBox.source})]})})}}]),a}(n.Component),T=N,w=(a(441),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={live_stanPoor:null,stanPoor:null,prev_stanPoor:null,live_dow:null,dow:null,prev_dow:null,live_nasdaq:null,nasdaq:null,prev_nasdaq:null,marketStatus:null,loading:!0},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://127.0.0.1:5000/index",{mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Origin":"http://localhost:3000"}}).then((function(e){return e.json()})).then((function(e){return t.setState({live_stanPoor:e.live_stanPoor,stanPoor:e.stanPoor,prev_stanPoor:e.prev_stanPoor,live_dow:e.live_dow,dow:e.dow,prev_dow:e.prev_dow,live_nasdaq:e.live_nasdaq,nasdaq:e.nasdaq,prev_nasdaq:e.prev_nasdaq,marketStatus:e.marketStatus,loading:!1})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.live_stanPoor,t=this.state.prev_stanPoor,a=this.state.stanPoor,n=this.state.live_dow,s=this.state.prev_dow,i=this.state.dow,c=this.state.live_nasdaq,r=this.state.prev_nasdaq,l=this.state.nasdaq,o=(e-t).toFixed(2),u=(o/e*100).toFixed(2),j=(n-s).toFixed(2),h=(j/n*100).toFixed(2),b=(c-r).toFixed(2),p=(b/c*100).toFixed(2);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:this.state.loading?Object(d.jsx)("div",{className:"indexBox",children:Object(d.jsx)("b",{children:"Loading..."})}):Object(d.jsx)(d.Fragment,{children:"open"===this.state.marketStatus?Object(d.jsxs)("div",{className:"indexBox",children:[Object(d.jsx)("div",{className:"marketStatusBox",children:Object(d.jsx)("b",{children:Object(d.jsx)("p",{children:"Market Open"})})}),Object(d.jsxs)("div",{className:"index",children:["S","&","P 500 : ",a," Dow Jones : ",i," Nasdaq : ",l]})]}):Object(d.jsxs)("div",{className:"indexBox",children:[Object(d.jsx)("div",{className:"marketStatusBox",children:Object(d.jsx)("b",{children:Object(d.jsx)("p",{children:"Market Closed"})})}),Object(d.jsxs)("div",{className:"index",children:[Object(d.jsx)("div",{className:"child-index",children:Object(d.jsxs)("b",{children:[Object(d.jsxs)("div",{className:"index-value",children:["S","&","P 500 : ",e]}),o>=0?Object(d.jsxs)("div",{className:"index-positive",children:["+",o," (",u,"%)"]}):Object(d.jsxs)("div",{className:"index-negative",children:[o," (",u,"%)"]})]})}),Object(d.jsx)("div",{className:"child-index",children:Object(d.jsxs)("b",{children:[Object(d.jsxs)("div",{className:"index-value",children:["Dow Jones : ",n]}),j>=0?Object(d.jsxs)("div",{className:"index-positive",children:["+",j," (",h,"%)"]}):Object(d.jsxs)("div",{className:"index-negative",children:[j," (",h,"%)"]})]})}),Object(d.jsx)("div",{className:"child-index",children:Object(d.jsxs)("b",{children:[Object(d.jsxs)("div",{className:"index-value",children:["Nasdaq : ",c]}),b>=0?Object(d.jsxs)("div",{className:"index-positive",children:["+",b," (",p,"%)"]}):Object(d.jsxs)("div",{className:"index-negative",children:[b," (",p,"%)"]})]})})]})]})})})})}}]),a}(n.Component)),C=w,S=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(C,{}),Object(d.jsx)(T,{})]})},D=a(33),_=a(37),I=a(140),P=(a(547),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={list:[],accountType:"",dateOfTransaction:"",amount:"",typeOfTransaction:"",newTransaction:{accountType:"",dateOfTransaction:"",amount:"",typeOfTransaction:""},data:[],dates:[],amountList:[],colors:[]},n}return Object(r.a)(a,[{key:"updateInput",value:function(e,t){this.setState(Object(_.a)({},e,t))}},{key:"removeTransaction",value:function(e){for(var t=Object(D.a)(this.state.list),a=t.findIndex((function(t){return t.id===e})),n=(Object(D.a)(this.state.data),Object(D.a)(this.state.dates)),s=Object(D.a)(this.state.amountList),i=t[a].dateOfTransaction,c=n.indexOf(i),r=t[a].amount,l=s.indexOf(parseInt(r)),o=t.filter((function(t){return t.id!==e})),d=[],u=[],j=[],h=[],b=0;b<n.length;b++)b!==c&&d.push(n[b]);for(var p=0;p<s.length;p++)p!==l&&u.push(s[p]);console.log(u);for(var x=0;x<u.length;x++)u[x]>0?h.push("#00b33c"):h.push("#ff1a1a");for(var O=0;O<d.length;O++)j.push({amountTotal:u[O],date:new Date(d[O]+"T00:00:00Z")});this.setState({list:o,amountList:u,dates:d,data:j,colors:h})}},{key:"addTransaction",value:function(){var e={id:1+Math.random(),accountType:this.state.accountType,dateOfTransaction:this.state.dateOfTransaction,amount:this.state.amount,typeOfTransaction:this.state.typeOfTransaction.toUpperCase()},t=Object(D.a)(this.state.list);t.push(e);var a=Object(D.a)(this.state.data),n=[],s=[],i=Object(D.a)(this.state.colors);if("SELL"===this.state.typeOfTransaction.toUpperCase()?i.push("#ff1a1a"):i.push("#00b33c"),console.log(i),"SELL"===this.state.typeOfTransaction.toUpperCase()){var c=-1*parseFloat(this.state.amount);a.push({amountTotal:c,date:new Date(this.state.dateOfTransaction+"T00:00:00Z")})}else a.push({amountTotal:parseFloat(this.state.amount),date:new Date(this.state.dateOfTransaction+"T00:00:00Z")});var r=a.sort((function(e,t){return e.date-t.date}));console.log(r);for(var l=0;l<r.length;l++){var o=r[l];n.push(o.date.toISOString().slice(0,10)),s.push(o.amountTotal)}this.setState({list:t,accountType:"",dateOfTransaction:"",amount:"",typeOfTransaction:"",newTransaction:{accountType:"",dateOfTransaction:"",amount:"",typeOfTransaction:""},data:r,dates:n,amountList:s,colors:i})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)(d.Fragment,{children:[this.state.list.length>0?Object(d.jsx)("div",{className:"barchart-container",children:Object(d.jsx)(I.a,{data:{labels:this.state.dates,datasets:[{data:this.state.amountList,backgroundColor:this.state.colors}]},options:{maintainAspectRatio:!1,responsive:!0,legend:{display:!1},plugins:{legend:{display:!1}},scales:{xAxes:[{type:"time"}]}},height:10,width:10})}):Object(d.jsx)("div",{}),Object(d.jsxs)("div",{className:"data-input",children:[Object(d.jsx)("input",{className:"input",type:"text",placeholder:"Buy or Sell",value:this.state.typeOfTransaction,onChange:function(t){return e.updateInput("typeOfTransaction",t.target.value)}}),Object(d.jsx)("input",{className:"input",type:"text",placeholder:"Account Type",value:this.state.accountType,onChange:function(t){return e.updateInput("accountType",t.target.value)}}),Object(d.jsx)("input",{className:"input",type:"date",placeholder:"Date of Transaction",value:this.state.dateOfTransaction,onChange:function(t){return e.updateInput("dateOfTransaction",t.target.value)}}),Object(d.jsx)("input",{className:"input",type:"number",placeholder:"Amount ($)",value:this.state.amount,onChange:function(t){return e.updateInput("amount",t.target.value)}}),Object(d.jsx)("button",{className:"transaction-add-button",onClick:function(){return e.addTransaction()},children:"Add"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:this.state.list.map((function(t){return Object(d.jsxs)("li",{className:"SELL"===t.typeOfTransaction.toUpperCase()?"transaction-list-sell":"transaction-list-buy",children:["Type of Transaction : "+t.typeOfTransaction+" Account Type : "+t.accountType+" Year of Transaction : "+t.dateOfTransaction+" Amount : "+t.amount+" ",Object(d.jsx)(h,{onClick:function(){return e.removeTransaction(t.id)},children:"X"})]},t.id)}))})})]})}}]),a}(n.Component)),F=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(d.jsx)("h1",{children:"Portfolio Dashboard"})}),Object(d.jsx)(P,{})]})},R=a(80),E=(a(95),a(548),["intbtn--primary","intbtn--outline"]),M=["intbtn--medium","intbtn--large"],B=function(e){var t=e.children,a=e.type,n=e.onClick,s=e.buttonStyle,i=e.buttonSize,c=E.includes(s)?s:E[0],r=M.includes(i)?i:M[0];return Object(d.jsx)("button",{className:"intbtn ".concat(c," ").concat(r),onClick:n,type:a,children:t})},A=(a(549),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={ticket:"",interval:"1y",date:[],stockPrice:[],companyName:"",validTicket:!1,weekRange:"",prevClose:"",open:"",ask:"",bid:"",dayRange:"",yTargetEst:"",averageVolume:"",volume:"",marketCap:"",eps:"",forwardDividend:"",peRatio:"",beta:"",earningsDate:"",exDividendDate:""},n.handleChange=n.handleChange.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(r.a)(a,[{key:"handleSubmit",value:function(){var e=Object(g.a)(f.a.mark((function e(t){var a=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),fetch("http://127.0.0.1:5000/stockData?ticket=".concat(this.state.ticket,"&interval=").concat(this.state.interval)).then((function(e){return e.json()})).then((function(e){return a.setState({date:e.date,stockPrice:e.stockPrice,companyName:e.companyName,validTicket:!0,attribute:e.attribute,value:e.value,weekRange:e.weekRange,prevClose:e.prevClose,open:e.open,ask:e.ask,bid:e.bid,dayRange:e.dayRange,yTargetEst:e.yTargetEst,averageVolume:e.averageVolume,volume:e.volume,marketCap:e.marketCap,eps:e.eps,forwardDividend:e.forwardDividend,peRatio:e.peRatio,beta:e.beta,earningsDate:e.earningsDate,exDividendDate:e.exDividendDate})}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmitInterval",value:function(e){e.preventDefault(),console.log(this.state.interval)}},{key:"handleChange",value:function(e){this.setState({ticket:e.target.value})}},{key:"handleInterval",value:function(e,t){var a=this;e.preventDefault(),this.setState({interval:t},(function(){return a.handleSubmit(e)}))}},{key:"render",value:function(){var e=this,t=this.state.validTicket;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"stock-finder",children:Object(d.jsxs)("form",{onSubmit:function(t){e.handleSubmit(t)},children:[Object(d.jsx)("label",{className:"ticker",children:"Stock ticker :"}),Object(d.jsx)("input",{className:"input",onChange:this.handleChange}),Object(d.jsx)(h,{type:"submit",children:"Find"}),Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"company-name",children:this.state.companyName})}),t?Object(d.jsxs)("div",{className:"intervalButtons",children:[Object(d.jsx)(B,{type:"submit",onClick:function(t){return e.handleInterval(t,"2mo")},children:"2mo"===this.state.interval?Object(d.jsx)("b",{className:"boldIntervalButton",children:"2M"}):Object(d.jsx)("div",{children:"2M"})}),Object(d.jsx)(B,{type:"submit",onClick:function(t){return e.handleInterval(t,"6mo")},children:"6mo"===this.state.interval?Object(d.jsx)("b",{className:"boldIntervalButton",children:"6M"}):Object(d.jsx)("div",{children:"6M"})}),Object(d.jsx)(B,{type:"submit",onClick:function(t){return e.handleInterval(t,"1y")},children:"1y"===this.state.interval?Object(d.jsx)("b",{className:"boldIntervalButton",children:"1Y"}):Object(d.jsx)("div",{children:"1Y"})}),Object(d.jsx)(B,{type:"submit",onClick:function(t){return e.handleInterval(t,"5y")},children:"5y"===this.state.interval?Object(d.jsx)("b",{className:"boldIntervalButton",children:"5Y"}):Object(d.jsx)("div",{children:"5Y"})}),Object(d.jsx)(B,{type:"submit",onClick:function(t){return e.handleInterval(t,"10y")},children:"10y"===this.state.interval?Object(d.jsx)("b",{className:"boldIntervalButton",children:"10Y"}):Object(d.jsx)("div",{children:"10Y"})})]}):Object(d.jsx)("div",{})]})}),Object(d.jsx)("div",{className:"chart-container",children:t?Object(d.jsx)(I.b,{data:{labels:this.state.date,datasets:[{data:this.state.stockPrice,borderColor:"#028A0f",fill:!1,label:"Stock Price"}]},height:10,width:10,options:{maintainAspectRatio:!1,responsive:!0,legend:{display:!1},plugins:{legend:{display:!1}}}}):Object(d.jsx)("div",{})}),Object(d.jsx)("div",{className:"stock-stats",children:t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"52 Week Range"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Previous Close"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Open"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Ask"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Bid"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Day's Range"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"1y Target Est"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Average Volume"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Volume"})})]}),Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("p",{children:this.state.weekRange}),Object(d.jsx)("p",{children:this.state.prevClose}),Object(d.jsx)("p",{children:this.state.open}),Object(d.jsx)("p",{children:this.state.ask}),Object(d.jsx)("p",{children:this.state.bid}),Object(d.jsx)("p",{children:this.state.dayRange}),Object(d.jsx)("p",{children:this.state.yTargetEst}),Object(d.jsx)("p",{children:this.state.averageVolume}),Object(d.jsx)("p",{children:this.state.volume})]})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Market Cap"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"EPS (TTM)"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Forward Dividend (Yield)"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"PE Ratio (TTM)"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Beta (5Y Monthly)"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Earnings Date"})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Ex-Dividend Date"})})]}),Object(d.jsxs)("div",{className:"column",children:[Object(d.jsx)("p",{children:this.state.marketCap}),Object(d.jsx)("p",{children:this.state.eps}),Object(d.jsx)("p",{children:this.state.forwardDividend}),Object(d.jsx)("p",{children:this.state.peRatio}),Object(d.jsx)("p",{children:this.state.beta}),Object(d.jsx)("p",{children:this.state.earningsDate}),Object(d.jsx)("p",{children:this.state.exDividendDate})]})]})]}):Object(d.jsx)("div",{})})]})}}]),a}(n.Component)),q=A,Y=function(){return Object(d.jsx)(q,{})},L=a(94),J=a(282),V=a.n(J),z=(a(556),a(557),a(274)),G=a.n(z),U=a.p+"static/media/spreadsheet-example.85fa1f49.JPG",W=a.p+"static/media/debugging-columns.3f794059.JPG",Z=a.p+"static/media/data-table.688c7ddc.JPG",Q=a.p+"static/media/data-graph.b7f1b226.JPG",H=["xlsx","xls","csv"];var X=function(){var e=Object(n.useState)(),t=Object(L.a)(e,2),s=t[0],i=t[1],c=Object(n.useState)(),r=Object(L.a)(c,2),l=r[0],o=r[1],u=Object(n.useState)(!1),j=Object(L.a)(u,2),h=j[0],b=j[1],p=Object(n.useState)([]),x=Object(L.a)(p,2),O=x[0],m=x[1],v=Object(n.useState)(0),f=Object(L.a)(v,2),g=f[0],y=f[1],k=function(e,t){var a=[];return t.forEach((function(t){var n={};t.forEach((function(t,a){null==e[a]||(0===a&&"date"===e[0].toLowerCase()?n[e[0]]=function(e){var t=new Date(Math.round(864e5*(e-25568))),a=(e=(t=String(t).slice(4,15)).split(" "))[1],n=e[0];(n="JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(n)/3+1).toString().length<=1&&(n="0"+n);var s=e[2];return String(n+"-"+a+"-"+s)}(t):n[e[a]]=t)})),a.push(n)})),console.log(a),a},N=function(){for(var e=[],t=0;t<l.length;){for(var a=0,n=0;n<g;)a+=l[t][Object.keys(l[t])[n+1]],n++;e.push(a),t++}return console.log(e),e},T=function(){for(var e=N(),t=O,a=[],n=0;n<e.length;n++)a.push({amount:e[n],when:new Date(t[n])});return console.log(a),a};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"import",children:[Object(d.jsxs)("label",{className:"custom-file-upload",children:[Object(d.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onload=function(e){var t=e.target.result,a=V.a.read(t,{type:"binary"}),n=a.SheetNames[0],s=a.Sheets[n],c=V.a.utils.sheet_to_json(s,{header:1}),r=c[0],l=r.map((function(e){return{title:e,field:e}}));i(l),c.splice(0,1),o(k(r,c));var d=[];k(r,c).forEach((function(e){void 0!==e.Date&&d.push(e.Date)})),m(d),y(l.length-1);var u=[];k(r,c).forEach((function(e){void 0!==e.Date&&u.push(e[Object.keys(e)[1]])})),b(!0)},t?!function(e){var t=e.name.split("."),a=t[t.length-1];return H.includes(a)}(t)?alert("Invalid file input, Select Excel file"):a.readAsBinaryString(t):(o([]),i([]))}}),"Choose File"]}),Object(d.jsx)("div",{children:h?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"table",children:Object(d.jsx)(G.a,{title:"Portfolio Data",options:{emptyRowsWhenPaging:!1,search:!1,showTitle:!0,toolbar:!1,paging:!0,headerStyle:{fontWeight:"bold",fontSize:20},pageSize:10,pageSizeOptions:[10,20,30],showFirstLastPageButtons:!1},data:l,columns:s,minRows:0})}),Object(d.jsx)("div",{className:"title",children:"Insert Title Here"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"line-chart-container",children:Object(d.jsx)(I.b,{style:{display:"flex",flexDirection:"row",boxSizing:"content-box"},data:{labels:O,datasets:function(){for(var e=[],t=["#ff0000","#ff8000","#ffff00","#40ff00","#0000ff","#8000ff","#ff00bf"],a=function(a){var n=[];l.forEach((function(e){void 0!==e.Date&&n.push(e[Object.keys(e)[a+1]])})),e.push({label:s[a+1].title,data:n,borderColor:t[a]})},n=0;n<g;n++)a(n);return e.push({label:"Total",data:N(),borderColor:"#000000"}),e}()},height:10,width:10,options:{maintainAspectRatio:!1,responsive:!0}})}),Object(d.jsxs)("div",{className:"interest-rate",children:["Internal Rate of Return",Object(d.jsx)("br",{})," ",function(){var e=a(618);return(100*e(T())).toFixed(2)}(),"%"]})]})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"Import your Excel portfolio spreadsheet to access additional statistics on your portfolio"}),Object(d.jsx)("img",{src:Z,alt:"data Table",width:"900",height:"400"}),Object(d.jsx)("img",{src:Q,alt:"data Graph",width:"900",height:"400"}),Object(d.jsx)("h4",{children:"Before importing your file"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Follow the following template in a Excel spreadsheet"}),Object(d.jsx)("img",{src:U,alt:"Excel template"}),Object(d.jsx)("li",{children:"The first column must be named 'Date' followed by the names of your accounts"}),Object(d.jsx)("li",{children:"The dates must be in the following format : YYYY-MM-DD"})]}),Object(d.jsx)("h4",{children:"Debugging"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"The Excel file must be closed on the computer in order to import it on the website"}),Object(d.jsx)("li",{children:"Remove the columns and rows after your data by selecting the rows/columns and right clicking 'delete' as seen below"}),Object(d.jsx)("img",{src:W,alt:"Debug 1"})]})]})})]})})},K=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(p.a,{children:[Object(d.jsx)(O,{}),Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/portfolio-tracker",exact:!0,component:S}),Object(d.jsx)(m.a,{path:"/stock-research",component:Y}),Object(d.jsx)(m.a,{path:"/portfolio-dashboard",exact:!0,component:F}),Object(d.jsx)(m.a,{path:"/import-file",component:X})]})]})})};i.a.render(Object(d.jsx)(K,{}),document.getElementById("root"))}},[[620,1,2]]]);
//# sourceMappingURL=main.3864fda8.chunk.js.map
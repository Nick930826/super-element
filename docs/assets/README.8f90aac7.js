import{a,o as d,c as l,e as o,w as r,g as c,b as i}from"./vendor.2c6db387.js";const u=c("\u7B2C\u4E00\u4E2A"),p=c("\u7B2C\u4E8C\u4E2A"),f=c("\u7B2C\u4E09\u4E2A"),v={setup(m){const e=_=>{console.log(`\u6211\u662F\u7B2C ${_} \u4E2A\u81EA\u5B9A\u4E49\u6309\u94AE`)};return(_,t)=>{const n=a("my-button");return d(),l("div",null,[o(n,{onClick:t[0]||(t[0]=s=>e(1))},{default:r(()=>[u]),_:1}),o(n,{onClick:t[1]||(t[1]=s=>e(2))},{default:r(()=>[p]),_:1}),o(n,{onClick:t[2]||(t[2]=s=>e(3))},{default:r(()=>[f]),_:1})])}}},k={class:"markdown-body"},$=i("h1",null,"\u6309\u94AE",-1),b={setup(m,{expose:e}){return e({frontmatter:{}}),(t,n)=>{const s=a("Preview");return d(),l("div",k,[$,o(s,{compName:"Button",demoName:"demo"},{default:r(()=>[o(v)]),_:1})])}}};export{b as default};

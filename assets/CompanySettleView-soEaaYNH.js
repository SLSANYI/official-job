import{_ as j}from"./OfferFormDialog-DYX9zLnc.js";import{r as _,o as P,a as x,n as y,f as s,w as n,F as k,t as q,e,p as z,v as t,i as a,u as d,x as F,y as H,z as J,k as L,A as R,B as S,q as $,D as I,G as Z,H as G,I as O}from"./index-CcbdXH3D.js";/* empty css                      */import{g as U,w as Y,e as K,a as h}from"./constants-B4IgHbVj.js";import{_ as Q}from"./AdminLayout-UobhJYfl.js";const W={class:"flex justify-between"},X={class:"w-full"},ee=e("div",{class:"text-[12px]"},[e("p",null,"温馨提示："),e("p",null,"线上HR推荐人才到企业面试，企业需及时更改求职者状态。")],-1),le={class:"flex justify-between text-sm text-[#606266]"},te={class:"w-1/2 flex-shrink-0 list-disc px-4"},ae=e("b",null,"招聘职位:",-1),se=e("b",null,"性别:",-1),ne=e("b",null,"年龄:",-1),oe=e("b",null,"工作年限:",-1),ie=e("b",null,"学历要求:",-1),ue=e("b",null,"招聘人数:",-1),ce=e("b",null,"工作地址:",-1),de=e("b",null,"佣金/",-1),re=e("b",null,"薪资待遇:",-1),_e=e("b",null,"面试时间:",-1),pe=e("b",null,"面试电话:",-1),ve=e("b",null,"面试联系人:",-1),me=e("b",null,"福利待遇:",-1),fe=e("b",null,"职位描述:",-1),he={class:"mt-2"},be=e("b",null,"其他要求:",-1),we={class:"mt-2 flex gap-2"},ge=e("span",null,"您共有xx条推荐信息",-1),xe={class:"w-full"},ye=e("p",null,"常见问题",-1),ke={class:"bg-white px-2"},Ce={class:"text-left !leading-5"},Ee={class:"whitespace-break-spaces"},Te={__name:"CompanySettleView",setup(Me){const b=_(),l=_({}),p=_(),i=_(1),v=_(!1),C=[{title:"电话客服或微信客服不回复？",content:"您好，电话客服或微信客服的工作时间周一到周五，早9：00到12:00 下午1：30到6:30为工作时间"},{title:"手机无法获取验证码？",content:`请确保您的手机处于非欠费、可通信状态；
普通用户，当日可获取短信验证码条数上限为：5条/日；
请确保您的手机号码合法、真实、有效；`},{title:"如何修改密码？",content:"将鼠标停放在最顶部导航栏的最右侧，弹出下拉菜单中，有“修改密码”的快捷入口，点击即在弹框表单中填写数据，确认后提交修改。"}],E=async()=>{await F.confirm("确定删除当前页的职位吗?",{cancelButtonText:"取消",confirmButtonText:"确认删除"}),await H(l.value.id),J.success("删除成功"),i.value>1&&(i.value=i.value-1),m()},m=async()=>{const u=await q({pageNum:i.value,pageSize:1});p.value=u.total,l.value=u.rows[0]??{}};P(async()=>{m()});const M=u=>{i.value=u,m()};return(u,c)=>{const r=L,D=R,A=S,w=$,f=I,B=Z,V=O,N=G,T=j;return x(),y(k,null,[s(Q,null,{side:n(()=>[ye,e("div",ke,[s(N,{modelValue:b.value,"onUpdate:modelValue":c[1]||(c[1]=o=>b.value=o),accordion:""},{default:n(()=>[(x(),y(k,null,z(C,(o,g)=>s(V,{key:g,name:g},{title:n(()=>[e("div",Ce,t(o.title),1)]),default:n(()=>[e("div",Ee,t(o.content),1)]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])])]),default:n(()=>[s(w,{class:"w-full p-2"},{header:n(()=>[e("div",W,[e("span",null,"我的职位: "+t(p.value),1),e("div",null,[s(r,{type:"danger",onClick:E},{default:n(()=>[a("- 删除职位")]),_:1}),s(r,{type:"primary",onClick:c[0]||(c[0]=o=>v.value=!0)},{default:n(()=>[a("+ 发布职位")]),_:1})])])]),default:n(()=>[e("div",X,[ee,s(D),e("div",le,[e("ul",te,[e("li",null,[ae,a(" "+t(l.value.jobName),1)]),e("li",null,[se,a(" "+t(d(U)[l.value.gender]),1)]),e("li",null,[ne,a(" "+t(l.value.ageMin)+" ~ "+t(l.value.ageMax),1)]),e("li",null,[oe,a(" "+t(d(Y)[l.value.workYears]),1)]),e("li",null,[ie,a(" "+t(d(K)[l.value.education]),1)]),e("li",null,[ue,a(" "+t(l.value.quantity),1)]),e("li",null,[ce,a(" "+t(d(h)[l.value.workAddressProvince]||l.value.workAddressProvince)+"-"+t(d(h)[l.value.workAddressCity]||l.value.workAddressCity)+"-"+t(d(h)[l.value.workAddressZone]||l.value.workAddressZone)+"-"+t(l.value.workAddressDetail),1)]),e("li",null,[de,a("人: "+t(l.value.kickback),1)]),e("li",null,[re,a(" "+t(l.value.salaryMin)+" ~ "+t(l.value.salaryMax),1)]),e("li",null,[_e,a(" "+t(l.value.interviewTime),1)]),e("li",null,[pe,a(" "+t(l.value.interviewPhone),1)]),e("li",null,[ve,a(" "+t(l.value.interviewContacts),1)]),e("li",null,[me,a(" "+t(l.value.welfare),1)])]),e("div",null,[e("p",null,[fe,a(" "+t(l.value.desc),1)]),e("p",he,[be,a(" "+t(l.value.otherRequirements),1)]),e("div",we,[s(r,{type:"primary"},{default:n(()=>[a("刷新置顶帖")]),_:1}),s(r,{type:"primary"},{default:n(()=>[a("佣金结算")]),_:1}),s(r,{type:"primary"},{default:n(()=>[a("已被xx个HR收藏")]),_:1})])])]),s(A,{class:"mt-5 flex justify-end","current-page":i.value,"page-size":1,layout:"prev, pager, next, jumper",total:p.value,onCurrentChange:M},null,8,["current-page","total"])])]),_:1}),s(w,{class:"mt-2 w-full p-2"},{header:n(()=>[ge]),default:n(()=>[e("div",xe,[s(B,{data:u.tableData,stripe:"",style:{width:"100%"}},{default:n(()=>[s(f,{prop:"date",label:"Date",width:"180"}),s(f,{prop:"name",label:"Name",width:"180"}),s(f,{prop:"address",label:"Address"})]),_:1},8,["data"])])]),_:1})]),_:1}),s(T,{visible:v.value,onChangeVisible:c[2]||(c[2]=o=>v.value=o)},null,8,["visible"])],64)}}};export{Te as default};

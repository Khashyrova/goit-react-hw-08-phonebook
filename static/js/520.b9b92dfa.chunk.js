"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[520],{6520:function(a,t,e){e.r(t),e.d(t,{default:function(){return V}});var n=e(2791),s=e(9434),r=e(5861),c=e(7757),o=e.n(c),l=function(a){return a.contacts.loading},i=function(a){return a.contacts.items},h=e(3634),f=e(3402),d=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(a)).reduce((function(a,t){return a+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},x={phonebook:"ContactForm_phonebook__3VpZj"},u=e(184),p=function(){var a=(0,s.I0)(),t=(0,s.v9)(i),e=function(){var e=(0,r.Z)(o().mark((function e(n){var s,r,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),s=n.target,r=s.name.value,c=s.number.value,t.find((function(a){return a.name.toLowerCase()===r.toLowerCase()}))?f.ZP.error("".concat(r," is already your friend...")):(a((0,h.uK)({id:d(),name:r,number:c})),f.ZP.success("".concat(r," is now on your Friends List")),s.reset());case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:x.phonebook,children:[(0,u.jsx)("svg",{className:x.phonebookSvg,id:"name",width:"60px",height:"60px",viewBox:"0 0 299.995 299.995",children:(0,u.jsx)("g",{children:(0,u.jsx)("g",{children:(0,u.jsxs)("g",{children:[(0,u.jsx)("path",{d:"M149.992,0.001C67.156,0.001,0,67.159,0,149.998c0,82.837,67.156,149.997,149.992,149.997 c82.842,0,150.003-67.161,150.003-149.997C299.995,67.159,232.834,0.001,149.992,0.001z M210.947,217.132v10.374 c0,5.729-4.645,10.374-10.374,10.374h-10.374h-57.256H96.829c-11.458,0-20.749-9.29-20.749-20.749V86.592 c0-11.458,9.29-20.749,20.749-20.749h36.113h57.256h10.374c5.729,0,10.374,4.645,10.374,10.374v10.375h0.001V217.132z M231.695,86.592v130.54v10.374c0,5.729-4.645,10.374-10.374,10.374h-2.806c1.774-3.055,2.806-6.593,2.806-10.374v-10.374V86.592 V76.219c0-3.781-1.032-7.319-2.806-10.374h2.806c5.729,0,10.374,4.645,10.374,10.374V86.592z"}),(0,u.jsx)("path",{d:"M175.591,165.517c0,0-3.909-4.692-8.237-1.455c-3.226,2.412-9.023,7.776-10.416,9.078c0,0-9.69-5.166-15.424-9.884 c-8.494-6.985-14.174-15.608-17.151-20.513l-2.223-4.191c0.775-0.835,6.71-7.189,9.277-10.639 c3.232-4.326-1.452-8.235-1.452-8.235s-13.183-13.183-16.184-15.798c-3.003-2.622-6.461-1.167-6.461-1.167 c-6.315,4.082-12.859,7.628-13.248,24.686c-0.013,15.969,12.109,32.438,25.215,45.188c13.131,14.402,31.162,28.833,48.588,28.817 c17.055-0.384,20.598-6.93,24.678-13.245c0,0,1.46-3.455-1.159-6.458C188.774,178.693,175.591,165.517,175.591,165.517z"})]})})})}),(0,u.jsx)("h2",{children:"Phonebook"}),(0,u.jsxs)("form",{onSubmit:e,children:[(0,u.jsx)("label",{htmlFor:"name",children:"Name"}),(0,u.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,u.jsx)("br",{}),(0,u.jsx)("label",{htmlFor:"number",children:"Number"}),(0,u.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,u.jsx)("button",{type:"submit",children:"Add contact"}),(0,u.jsx)("br",{})]})]})},m=e(8809),j={contactItem:"ContactItem_contactItem__Z4FuP"},v=function(a){var t=a.id,e=a.name,n=a.number,r=(0,s.I0)();return(0,u.jsxs)("li",{className:j.contactItem,children:[(0,u.jsxs)("p",{children:[(0,u.jsxs)("span",{children:[e,": "]}),n]}),(0,u.jsx)("button",{type:"button",className:j.btn,onClick:function(){r((0,h.GK)(t))},children:"\u26cc"})]})},b=e(8873),g="Filter_filter__vxThR",_=function(){var a=(0,s.I0)();return(0,u.jsx)("input",{className:g,type:"text",onChange:function(t){t.preventDefault();var e=t.currentTarget.value;a((0,b.x)(e))},placeholder:"Enter name for Search"})},M={sadMessage:"NoContactsMessage_sadMessage__tzUpR"},y=function(){return(0,u.jsxs)("div",{className:M.sadMessage,children:[(0,u.jsxs)("svg",{className:M.sadSvg,version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"150px",height:"150px",viewBox:"0 0 128 128",children:[(0,u.jsxs)("g",{children:[(0,u.jsx)("polygon",{points:"117.4,68.8 117.4,59.3 57.6,59.3 57.6,68.8 104.7,68.8 104.7,119.7 83.2,119.7 83.2,124.9 114.8,124.9  114.8,119.7 111.5,119.7 111.5,68.8 \t"}),(0,u.jsx)("path",{d:"M49.4,91.4H16.7V58.6h-6.6v37.7h0c0,0.2,0,0.4,0,0.6V126h5.8v-23H49v23h5.8V96.9C54.8,93.9,52.4,91.4,49.4,91.4z"}),(0,u.jsx)("polygon",{points:"95.6,32 103,52.8 90.2,52.8 90.2,56.7 106.8,56.7 106.8,55.4 106.8,52.8 97.2,26.2 103.2,3.5 98.9,2.3 87.5,44.7  91.9,45.9 \t"}),(0,u.jsx)("path",{d:"M86.5,108.5L70.1,78.4c-1.2-2.6-3.9-4.2-6.5-4.2H43.7v-8.7H44c-4.3,0-7.9-3.6-7.9-7.9V44.8c0-0.9,0.5-1.4,1.4-1.4 s1.4,0.5,1.4,1.4v12.8c0,2.8,2.4,5,5,5h12v-5.2h21.2c0,0,0-0.1,0-0.1c0-2.6-2.1-4.8-4.8-4.8c0,0,0,0,0,0H49v-18 c0-2.6-1.8-4.6-4.5-5c-0.9-0.1-1.7-0.1-2.8,0c-9.9,0.7-19.9,8.8-21.2,19.3c-1.2,9.3-1.4,19.9-0.4,28.8c0.9,5.5,5.1,10.1,11.1,10.8 c0.6,0.1,1.2,0.1,1.9,0.1H59l14.5,26.2c1.7,3.6,5.9,5,9.5,3.4C86.6,116.5,88.2,112.2,86.5,108.5z"})]}),(0,u.jsx)("circle",{cx:"65.3",cy:"36.9",r:"11.4"})]}),(0,u.jsx)("p",{children:"It looks like you don't have any friends. Try to find some and add them to your phonebook"})]})},Z="ContactList_contacts__jDmyV",k=function(){var a=(0,s.v9)(i),t=(0,s.v9)(l),e=(0,s.v9)((function(a){return a.filter})),n=a.filter((function(a){return a.name.toLowerCase().includes(e)})).sort((function(a,t){return a.name.localeCompare(t.name)}));return(0,u.jsxs)("div",{children:[t&&(0,u.jsx)(m.Z,{}),(null===a||void 0===a?void 0:a.length)>0?(0,u.jsxs)("div",{className:Z,children:[(0,u.jsx)(_,{}),(0,u.jsx)("ul",{children:n.map((function(a){var t=a.id,e=a.name,n=a.number;return(0,u.jsx)(v,{id:t,name:e,number:n},t)}))})]}):(0,u.jsx)(y,{})]})},w="Phonebook_phonebookBox__P-xvV",C="Phonebook_contactskBox__Q4c6e",A="Phonebook_phonebookSvg__k+Th8",N=function(){return(0,u.jsxs)("div",{className:w,children:[(0,u.jsxs)("div",{className:C,children:[(0,u.jsx)(p,{}),(0,u.jsx)(k,{})]}),(0,u.jsxs)("svg",{className:A,"data-name":"Layer 1",width:"972.0042",height:"639.89567",viewBox:"0 0 972.0042 639.89567",children:[(0,u.jsx)("path",{d:"M748.37222,409.45784q-1.68018,8.835-4.03028,17.49c-.16992.67-.35986,1.33-.5498,2h-21.79a7.00779,7.00779,0,0,0-7,7v62.12c-.66016,1.23-1.33008,2.45-2,3.67-3.46,6.3-7.06006,12.53-10.74023,18.68a710.14341,710.14341,0,0,1-243.69,243.55l5.92041-13.36c-2.17041-.15-4.35009-.3-6.52-.44995-47.25-3.23-94.66016-6.81-140.8003-17.43-48.27-11.11-95.48974-30.38-133.31982-62.33-37.84033-31.96-65.58008-77.6-69.43018-126.98a144.88337,144.88337,0,0,1,5.07031-50.41c8.86963-31.52,28.25-59.88,56.21-76.66,43.91992-26.35,101.21-20.98,147.50976.94,46.29,21.91,83.97022,58.18,120.76026,93.81995a466.42118,466.42118,0,0,0-150.91016-157.52c-20.56006-13.16-42.37988-24.88-59.85986-41.93-17.47022-17.04-30.36036-40.93-27.27-65.14,3.50976-27.46,26-48.3,48.52978-64.37,9-6.42,18.29-12.51,27.87012-18.11,27.02978-15.84,56.27-27.79,87.1499-32.22,41.83008-6.01,87.01025,3.11,119.08008,30.63,36.12988,31.01,50.94971,81.02,49.54,128.86,22.25976-32.36,56.58984-57.13,95.35986-58.18,40.25-1.08,78.51026,24.35,98.66992,59.21C752.28237,327.18782,755.902,369.90786,748.37222,409.45784Z",transform:"translate(-113.9979 -130.05217)",fill:"#e6e6e6"}),(0,u.jsx)("path",{d:"M493.714,543.853c23.57462-2.07613,45.35181-4.50171,68.19624-10.966,22.14346-6.26588,43.45115-16.755,59.21453-33.88211,16.95474-18.42154,26.107-42.34547,32.56437-66.16088,3.60029-13.2782,6.55859-26.74191,9.3499-40.21016q4.5429-21.91983,8.0729-44.0334,7.02688-44.01759,10.03312-88.55371.36315-5.406.66589-10.81583c.12515-2.22475-3.33532-2.21765-3.46007,0q-2.46957,43.89984-8.885,87.45746c-4.22061,28.53-9.62074,56.93651-16.4723,84.95519-5.80436,23.73626-13.31957,47.84312-28.20589,67.60251-13.95951,18.5292-34.12179,30.63771-55.89217,37.87744-22.15269,7.36687-45.51013,10.30809-68.65936,12.49516-2.83979.2683-3.68075.524-6.52219.77421-2.20087.19382-2.22133,3.6557,0,3.46007Z",transform:"translate(-113.9979 -130.05217)",fill:"#fff"}),(0,u.jsx)("path",{d:"M121.48935,495.5606a375.00513,375.00513,0,0,1,87.7008,15.45407,379.00972,379.00972,0,0,1,81.67626,35.55178,369.763,369.763,0,0,1,68.78,51.786,378.86155,378.86155,0,0,1,53.72732,64.062A375.10127,375.10127,0,0,1,451.82,736.94738q1.82712,4.81062,3.51989,9.67046c.7291,2.089,4.073,1.19038,3.33647-.91983a378.64264,378.64264,0,0,0-36.72857-76.38714,383.57085,383.57085,0,0,0-52.70037-66.3915A373.9613,373.9613,0,0,0,301.967,549.22721a381.91664,381.91664,0,0,0-169.5742-56.37564q-5.44594-.45642-10.90341-.751c-2.225-.12179-2.21817,3.33866,0,3.46008Z",transform:"translate(-113.9979 -130.05217)",fill:"#fff"}),(0,u.jsx)("path",{d:"M283.26691,168.09379A203.79908,203.79908,0,0,1,336.76826,194.238a251.24589,251.24589,0,0,1,45.67206,40.56014,336.2502,336.2502,0,0,1,37.81981,52.12109,444.66152,444.66152,0,0,1,30.07012,61.13547,553.19446,553.19446,0,0,1,21.8983,66.49512,621.48414,621.48414,0,0,1,14.00264,69.475,620.23132,620.23132,0,0,1,6.0274,69.86938,553.4891,553.4891,0,0,1-1.97945,67.02454,426.91315,426.91315,0,0,1-10.063,61.706,291.56248,291.56248,0,0,1-18.15494,53.35662q-2.69669,5.84088-5.72231,11.52063c-1.04652,1.96452,1.93922,3.71452,2.98767,1.74637A266.70637,266.70637,0,0,0,479.7605,697.819a398.28713,398.28713,0,0,0,12.18558-60.49935,526.37456,526.37456,0,0,0,4.02614-66.88946,613.74369,613.74369,0,0,0-4.18784-70.28791,633.10727,633.10727,0,0,0-12.19009-70.23182,573.11338,573.11338,0,0,0-20.38091-68.39936,475.91036,475.91036,0,0,0-28.34164-62.94527,364.89738,364.89738,0,0,0-36.34133-54.851A270.58336,270.58336,0,0,0,350.134,199.71859a214.68529,214.68529,0,0,0-52.06528-30.03253q-6.8463-2.725-13.882-4.92875c-2.129-.66982-3.04,2.66945-.91983,3.33648Z",transform:"translate(-113.9979 -130.05217)",fill:"#fff"}),(0,u.jsx)("ellipse",{cx:"374.5042",cy:"629.89567",rx:"247.5",ry:"10",fill:"#e6e6e6"}),(0,u.jsx)("path",{d:"M707.17106,446.73729a10.52585,10.52585,0,0,0-.2393,1.64013l-42.95745,24.782-10.44141-6.01094-11.13117,14.57228,22.33714,15.92056,49.00792-38.66268a10.4958,10.4958,0,1,0-6.57573-12.24133Z",transform:"translate(-113.9979 -130.05217)",fill:"#ffb8b8"}),(0,u.jsx)("path",{d:"M609.33835,461.94155l33.82412,24.10721,15.128-18.96712L625.41026,440.699a13.32413,13.32413,0,0,0-19.18895,2.659v0A13.32412,13.32412,0,0,0,609.33835,461.94155Z",transform:"translate(-113.9979 -130.05217)",fill:"#6c63ff"}),(0,u.jsx)("polygon",{points:"425.519 606.957 437.379 610.064 455.009 565.8 437.506 561.213 425.519 606.957",fill:"#ffb8b8"}),(0,u.jsx)("path",{d:"M535.34805,737.59489h38.53073a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H550.23491a14.88686,14.88686,0,0,1-14.88686-14.88686v0A0,0,0,0,1,535.34805,737.59489Z",transform:"translate(788.27138 1476.27215) rotate(-165.317)",fill:"#2f2e41"}),(0,u.jsx)("polygon",{points:"530.942 615.401 543.011 613.245 540.439 565.668 522.627 568.85 530.942 615.401",fill:"#ffb8b8"}),(0,u.jsx)("path",{d:"M642.74684,738.96328h38.53072a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H657.63371a14.88687,14.88687,0,0,1-14.88687-14.88687v0A0,0,0,0,1,642.74684,738.96328Z",transform:"translate(1330.96309 1234.71881) rotate(169.87214)",fill:"#2f2e41"}),(0,u.jsx)("path",{d:"M621.17529,395.56062c2.97389.7239,5.39344,3.75427,6.84643,7.26492A50.67542,50.67542,0,0,1,630.72578,414.24c1.14169,7.25673,2.2381,15.11271-.12326,21.83369-2.76764,7.87732-10.14212,12.00315-16.53891,10.06427s-11.48427-9.21664-13.22252-17.59408a42.6097,42.6097,0,0,1,2.92436-25.08432c1.81714-4.13706,4.32184-7.95379,7.6504-9.82035a7.54966,7.54966,0,0,1,10.06835,2.098",transform:"translate(-113.9979 -130.05217)",fill:"#2f2e41"}),(0,u.jsx)("path",{d:"M638.0021,526.94783,660.97891,732.7419l-18.97681,7.20593-35-138L558.2739,728.12594l-20.7718,1.154s28.5-196.3321,49.62152-200.79406Z",transform:"translate(-113.9979 -130.05217)",fill:"#2f2e41"}),(0,u.jsx)("circle",{cx:"504.70499",cy:"267.21063",r:"24.56103",fill:"#ffb8b8"}),(0,u.jsx)("path",{d:"M629.24429,432.12783l-26.54182-3.462s-17.30983,20.7718-16.15584,56.54546-2.885,46.73654-2.885,46.73654l55.34045,1C631.0021,521.94783,664.46353,458.77071,629.24429,432.12783Z",transform:"translate(-113.9979 -130.05217)",fill:"#6c63ff"}),(0,u.jsx)("path",{d:"M643.5021,537.94783a10.52608,10.52608,0,0,0-1.65137.1424l-33.95508-36.14612,3.46192-11.53992-16.73291-7.50091L584.23843,508.291l48.852,38.85943a10.49579,10.49579,0,1,0,10.41162-9.20264Z",transform:"translate(-113.9979 -130.05217)",fill:"#ffb8b8"}),(0,u.jsx)("path",{d:"M606.31244,446.19088l-15.72685,38.44341,21.92579,10.3859,18.158-38.04525a13.32414,13.32414,0,0,0-6.97982-18.0712h0A13.32412,13.32412,0,0,0,606.31244,446.19088Z",transform:"translate(-113.9979 -130.05217)",fill:"#6c63ff"}),(0,u.jsx)("path",{d:"M612.27817,419.592c3.84844-2.22012,4.259-7.57567,3.736-11.98768s-1.39666-9.33053,1.19673-12.938c3.09522-4.30552,9.31374-4.39124,14.61451-4.53178s11.75595-1.69268,13.1294-6.81435c.90752-3.3842-1.03415-7.01583-3.82049-9.14014s-6.2722-3.0635-9.66037-3.95608c-7.57934-1.99671-15.4055-4.01025-23.16624-2.91282a29.5352,29.5352,0,0,0-25.16265,32.98007c1.25611,9.851,3.07792,14.15262,1.88212,18.49613-2.22732,8.09027-11.831,13.2875-12.02224,21.6766-.1496,6.562,5.64658,11.62417,11.30167,14.95607,4.48561,2.64287,9.32664,4.88544,14.496,5.50415s10.73488-.56586,14.58577-4.0696c4.96672-4.519,6.1953-12.06877,4.77109-18.63088s-5.07749-12.38957-8.69149-18.04895",transform:"translate(-113.9979 -130.05217)",fill:"#2f2e41"}),(0,u.jsx)("path",{d:"M1077.0021,426.94783h-355a9.01357,9.01357,0,0,0-9,9v228a9.01357,9.01357,0,0,0,9,9h355a9.01357,9.01357,0,0,0,9-9v-228A9.01357,9.01357,0,0,0,1077.0021,426.94783Zm7,237a7.00778,7.00778,0,0,1-7,7h-355a7.00778,7.00778,0,0,1-7-7v-228a7.00779,7.00779,0,0,1,7-7h355a7.00779,7.00779,0,0,1,7,7Z",transform:"translate(-113.9979 -130.05217)",fill:"#3f3d56"}),(0,u.jsx)("path",{d:"M797.77734,540.44336h-56a8.51014,8.51014,0,0,1-8.5-8.5v-56a8.51014,8.51014,0,0,1,8.5-8.5h56a8.51013,8.51013,0,0,1,8.5,8.5v56A8.51013,8.51013,0,0,1,797.77734,540.44336Z",transform:"translate(-113.9979 -130.05217)",fill:"#6c63ff"}),(0,u.jsx)("path",{d:"M1058.51333,599.95272H740.51321a6.5,6.5,0,1,1,0-13h318.00012a6.5,6.5,0,0,1,0,13Z",transform:"translate(-113.9979 -130.05217)",fill:"#ccc"}),(0,u.jsx)("path",{d:"M1058.72671,568.45272h-318a6.5,6.5,0,0,1,0-13h318a6.5,6.5,0,0,1,0,13Z",transform:"translate(-113.9979 -130.05217)",fill:"#ccc"}),(0,u.jsx)("path",{d:"M901.72671,525.443h-47a6.5,6.5,0,0,1,0-13h47a6.5,6.5,0,0,1,0,13Z",transform:"translate(-113.9979 -130.05217)",fill:"#ccc"}),(0,u.jsx)("path",{d:"M1058.72671,493.45272h-204a6.5,6.5,0,0,1,0-13h204a6.5,6.5,0,0,1,0,13Z",transform:"translate(-113.9979 -130.05217)",fill:"#ccc"}),(0,u.jsx)("path",{d:"M893.72671,631.95272H740.51321a6.5,6.5,0,1,1,0-13h153.2135a6.5,6.5,0,1,1,0,13Z",transform:"translate(-113.9979 -130.05217)",fill:"#ccc"})]})]})};function V(){var a=(0,s.I0)();return(0,n.useEffect)((function(){a((0,h.yF)())}),[a]),(0,u.jsx)("div",{children:(0,u.jsx)(N,{})})}}}]);
//# sourceMappingURL=520.b9b92dfa.chunk.js.map
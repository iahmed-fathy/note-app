(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(n){if(n.ep)return;n.ep=!0;const t=i(n);fetch(n.href,t)}})();function p(){const e=new Date,s={year:"numeric",month:"short",day:"numeric"};return e.toLocaleDateString("en-US",s)}let $=[{id:"note-1",title:"ملاحظة مثبتة: أهلاً بك في تطبيق الملاحظات",author:"أحمد فتحي",date:p(),content:"هذه ملاحظة مثبتة لمساعدتك على البدء. يمكنك تثبيت ملاحظاتك المهمة في الأعلى لتسهيل الوصول إليها. جرّب إضافة ملاحظة جديدة الآن",isPinned:!0},{id:"note-2",title:"مهمة اليوم: شراء الأغراض",author:"أحمد فتحي",date:p(),content:`قائمة المشتريات:
- خبز
- حليب
- قهوة
- فواكه (تفاح وموز)
- أرز`,isPinned:!1},{id:"note-3",title:"فكرة مشروع جديد",author:"أحمد فتحي",date:p(),content:"تطوير تطبيق لإدارة المهام مع ميزة تذكير. يجب أن يكون التصميم بسيطًا ومناسبًا للاستخدام على الهاتف المحمول.",isPinned:!1}];function b(e){localStorage.setItem("notesAppData",JSON.stringify(e))}function C(){const e=localStorage.getItem("notesAppData");return e?JSON.parse(e):$}function x(e){return/[\u0600-\u06FF]/.test(e)}function f(e){const s=document.querySelectorAll(".note"),i=document.getElementById("notePane"),d=document.getElementById("asideNoteList"),n=document.getElementById("notePaneContainer");if(e.length===0)i.innerHTML="";else{const t=e[0],c=x(t.content)?"rtl text-right":"ltr text-left";i.innerHTML=`
      <div class="p-14 ${c}">
        <h2 class="text-[26px] font-[400] leading-[31px] mb-4">
          ${t.title}
        </h2>
        <p class="text-[#898989] text-[13px] font-[400] mb-10">
          <span>${t.date} </span>/<span> ${t.author}</span>
        </p>
        <p class="text-[16px] font-[400] leading-[31px]">
          ${t.content}</p>
      </div>
    `}s.forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.noteId,c=e.find(S=>S.id===o);console.log(t),d.classList.add("max-sm:hidden"),n.classList.remove("max-sm:hidden");const w=x(c.content)?"rtl text-right":"ltr text-left";i.innerHTML=`
        <div class="p-14 ${w}">          <h2 class="text-[26px] font-[400] leading-[31px] mb-4">
            ${c.title}
          </h2>
          <p class="text-[#898989] text-[13px] font-[400] mb-10">
            <span>${c.date} </span>/<span> ${c.author}</span>
          </p>
          <p class="text-[16px] font-[400] leading-[31px]">
            ${c.content}</p>
        </div>
      `})}),I(e)}function I(e){document.querySelectorAll(".deleteNote").forEach(s=>{s.replaceWith(s.cloneNode(!0))}),document.querySelectorAll(".deleteNote").forEach(s=>{s.addEventListener("click",i=>{i.stopPropagation(),i.preventDefault();const d=s.dataset.noteId,n=e.findIndex(t=>t.id===d);n!==-1&&window.confirm("هل أنت متأكد من أنك تريد حذف هذه الملاحظة؟")&&(e.splice(n,1),l(e),f(e),b(e))})})}function F(e){document.querySelectorAll(".pinBtn").forEach(i=>i.addEventListener("click",d=>{d.stopPropagation(),d.preventDefault();const n=i.dataset.noteId,t=e.findIndex(o=>o.id===n);e[t].isPinned===!0?e[t].isPinned=!1:e[t].isPinned=!0,l(e),f(e),b(e)}))}function l(e){const s=document.getElementById("pinnedNotesList"),i=document.getElementById("unPinnedNotesList"),d=s.parentElement,n=document.getElementById("noteInAside");if(s.innerHTML="",i.innerHTML="",e.length===0&&(i.innerHTML=`
      <div class="p-4 text-center text-[#898989]">
        <p>No Found Notes</p>
      </div>
    `),e.forEach(t=>{const c=x(t.content)?"rtl text-right":"ltr text-left",L=`
      <li data-note-id=${t.id} class="group flex flex-col note h-full w-full p-4 rounded-[8px] focus-within:bg-[#F6F6F6] cursor-pointer shadow" tabindex="0">
        <div class="flex justify-end mb-1">
          <button data-note-id=${t.id} class="pinBtn ${t.isPinned?"visible ":"invisible"} group-hover:visible group-focus:visible">
            <svg class=" fill-[#EC7160] hover:fill-[#D82700]" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
              width="15px" height="15px" viewBox="0 0 425.963 425.963"
              xml:space="preserve">
              <g>
                <path d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081
                  c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002
                  c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482
                  C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884
                  c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"/>
              </g>
            </svg>
          </button>
        </div>
        <h4 class="text-[16px] ${c} leading-[27px] font-[400] mb-2">
          ${t.title}
        </h4>
        <p class="text-[13px] ${c} leading-[27px] font-[400] text-[#898989] mb-4 overflow-hidden w-full h-[60px]">
          ${t.content}
        </p>
        <div class="flex justify-between">
          <p class="text-[14px] font-[400] text-[#898989]">
            ${t.date}
          </p>
          <button data-note-id=${t.id} class="deleteNote text-[15px] font-[400] hover:font-[600] text-[#D82700]">
            Delete
          </button>
        </div>
      </li>
    `;t.isPinned?s.insertAdjacentHTML("beforeend",L):i.insertAdjacentHTML("beforeend",L)}),e.length>0){const t=`[data-note-id='${e[0].id}']`,o=document.querySelector(t);o&&o.click()}s.children.length===0?(d.classList.add("hidden"),n.classList.remove("border-t")):(d.classList.remove("hidden"),n.classList.add("border-t")),f(e),I(e),F(e)}const B=document.getElementById("myForm");function A(e,s){const i=new FormData(B),d=i.get("title"),n=i.get("author"),t=i.get("youNote"),c={id:`note-${Date.now()}`,title:d,author:n,date:p(),content:t,isPinned:e};s.push(c),l(s),f(s),b(s),B.reset()}function T(e,s){let i;return function(...d){clearTimeout(i),i=setTimeout(()=>{e.apply(this,d)},s)}}function M(e){const s=document.querySelectorAll(".searchBar"),d=T(n=>{if(n===""){l(e);return}const t=e.filter(o=>o.title.toLowerCase().includes(n.toLowerCase())||o.content.toLowerCase().includes(n.toLowerCase()));l(t)},1e3);s.forEach(n=>{n.addEventListener("keyup",t=>{d(t.target.value)})})}const E=document.getElementById("addNote"),k=document.getElementById("notesPage"),H=document.getElementById("addNotesPage"),O=document.getElementById("myForm"),N=document.getElementById("CircularBtn"),u=document.getElementById("ToggleSidebarBtn"),q=document.getElementById("closeNav"),r=document.getElementById("navbar"),j=document.getElementById("menuIcon"),v=document.getElementById("searchIcon"),P=document.getElementById("mobileSearchBar"),y=document.getElementById("closeSearchIcon"),a=document.querySelector("header"),m=document.getElementById("asideNoteList"),g=document.getElementById("notePaneContainer");let h=C();k.addEventListener("click",()=>{m.classList.remove("hidden"),g.classList.remove("hidden"),E.classList.add("hidden"),N.classList.remove("hidden"),m.classList.remove("max-sm:hidden"),g.classList.add("max-sm:hidden"),u.classList.remove("hidden")});H.addEventListener("click",()=>{m.classList.add("hidden"),g.classList.add("hidden"),E.classList.remove("hidden"),N.classList.add("hidden"),u.classList.add("hidden")});N.addEventListener("click",()=>{m.classList.add("hidden"),g.classList.add("hidden"),E.classList.remove("hidden"),u.classList.add("hidden")});O.addEventListener("submit",e=>{e.preventDefault();const s=e.submitter.id==="AddPinNoteBtn";A(s,h)});u.addEventListener("click",()=>{m.classList.toggle("hidden"),u.classList.toggle("rotate-180")});q.addEventListener("click",()=>{r.classList.add("max-sm:translate-x-[-100%]"),setTimeout(()=>{r.classList.add("max-sm:hidden")},500)});j.addEventListener("click",()=>{r.classList.contains("max-sm:hidden")?(r.classList.remove("max-sm:hidden"),m.classList.remove("hidden"),setTimeout(()=>{r.classList.remove("max-sm:translate-x-[-100%]")},200)):(r.classList.add("max-sm:translate-x-[-100%]"),setTimeout(()=>{r.classList.add("max-sm:hidden")},500))});v.addEventListener("click",()=>{P.classList.remove("hidden"),y.classList.remove("hidden"),v.classList.add("hidden"),a.classList.remove("bg-white"),a.classList.add("bg-[#F6F6F6]"),a.classList.remove("h-20"),a.classList.add("h-50")});y.addEventListener("click",()=>{P.classList.add("hidden"),y.classList.add("hidden"),v.classList.remove("hidden"),a.classList.remove("bg-[##F6F6F6]"),a.classList.add("bg-white"),a.classList.remove("h-50"),a.classList.add("h-20")});M(h);l(h);f(h);I(h);

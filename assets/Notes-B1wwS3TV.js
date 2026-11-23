import{D as e,E as t,P as n,V as r,X as i,a,gt as o,ht as s,l as c,mt as l,o as u,p as d,r as f,u as p,x as m}from"./ui-CjeDNdpo.js";import{t as h}from"./plus-Bi5OR_xT.js";import{Dn as g,Tn as _,Un as v,an as y,en as b,kn as x,on as S,rn as C,sn as w,tn as T}from"./index-BEPibw7W.js";import{t as E}from"./star-DI-GMWdb.js";import{t as D}from"./trash-CqXXEYIO.js";import{t as O}from"./arrow-left-CfY89-03.js";import{n as k,r as A}from"./curriculum-D9r45lPx.js";import{p as j}from"./studyPlan-to-4eHmE.js";import{r as M}from"./search-BoBsOtCd.js";import{f as N,o as P,p as F,s as I,t as L}from"./date-C94hA2Y9.js";import{n as R}from"./Markdown-D-jA5-hD.js";var z={name:`folder`,size:24,node:[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]};z.node;var ee=l(z),B=o(),V=[{id:`blank`,name:`Nota en blanco`,icon:`FileText`,folder:``,tags:[],body:``},{id:`concept`,name:`Concepto QA`,icon:`GraduationCap`,folder:`Conceptos`,tags:[`concepto`],body:`## Definición (con mis palabras)

## Por qué importa en QA

## Ejemplo real

## Se confunde con…
-

## Pregunta de entrevista relacionada
>

## Fuentes
- `},{id:`bug`,name:`Bug Report`,icon:`Bug`,folder:`Bugs`,tags:[`bug`],body:`**ID:** BUG-
**Título:** [Módulo] Qué falla + en qué condición
**Entorno:** navegador / SO / versión / URL
**Severidad:** Alta · Media · Baja      **Prioridad:** Alta · Media · Baja
**Estado:** Nuevo

## Precondiciones
-

## Pasos para reproducir
1.
2.
3.

## Resultado esperado

## Resultado actual

## Evidencia
- Captura / video / log / HAR:
`},{id:`testcase`,name:`Test Case`,icon:`ClipboardList`,folder:`Casos de prueba`,tags:[`test-case`],body:`**ID:** TC-
**Escenario:**
**Precondiciones:**
**Datos de prueba:**

| # | Paso | Resultado esperado | Resultado actual | Estado |
|---|------|--------------------|------------------|--------|
| 1 |      |                    |                  | Pendiente |
| 2 |      |                    |                  | Pendiente |

**Notas:**
`},{id:`api`,name:`Notas de API`,icon:`Send`,folder:`APIs`,tags:[`api`],body:`**Endpoint:** \`GET /recurso\`
**Autenticación:** ninguna · API key · Bearer
**Documentación:**

## Request
\`\`\`http
GET https://api.ejemplo.com/recurso?id=1
Accept: application/json
\`\`\`

## Response esperada (200)
\`\`\`json
{
  "id": 1
}
\`\`\`

## Asserts
- [ ] Status 200
- [ ] Tiempo < 500 ms
- [ ] Esquema válido

## Casos negativos
- 400:
- 401:
- 404:
`},{id:`interview`,name:`Notas de entrevista`,icon:`Briefcase`,folder:`Entrevistas`,tags:[`entrevista`],body:`**Empresa:**
**Puesto:**
**Fecha:** {fecha}
**Entrevistador(es):**

## Preguntas que me hicieron
1.

## Cómo respondí / qué mejorar

## Preguntas que hice yo

## Siguientes pasos
- [ ] Enviar agradecimiento
`},{id:`istqb`,name:`Notas ISTQB`,icon:`Award`,folder:`ISTQB`,tags:[`istqb`],body:`**Capítulo / sección:**
**Objetivos de aprendizaje (K1/K2/K3):**

## Ideas clave
-

## Términos del glosario
| Término (EN) | Término (ES) | Mi definición |
|--------------|--------------|---------------|
|              |              |               |

## Dudas para repasar
- [ ]
`},{id:`daily`,name:`Bitácora diaria`,icon:`CalendarCheck`,folder:`Bitácora`,tags:[`bitácora`],body:`# Bitácora {fecha}

## Qué estudié

## Qué practiqué (con evidencia)

## Qué no entendí

## Qué haré mañana
- [ ]
`},{id:`plan-testcase`,name:`Caso de prueba (formato del plan)`,icon:`ClipboardList`,folder:`Plan QA Automation`,tags:[`test-case`,`plan`],body:"| ID | Título | Precondiciones | Pasos | Datos | Resultado esperado | Prioridad | ¿Automatizar? |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| TC-LOGIN-001 | Login exitoso con usuario estándar | Estar en saucedemo.com sin sesión | 1. Escribir usuario. 2. Escribir contraseña. 3. Clic en Login. | `standard_user` / `secret_sauce` | Abre `/inventory.html` y muestra el título “Products” | Alta | Sí: flujo crítico y repetitivo |\n|  |  |  |  |  |  |  |  |\n"},{id:`plan-jira-bug`,name:`Bug en Jira (formato del plan)`,icon:`Bug`,folder:`Plan QA Automation`,tags:[`bug`,`jira`,`plan`],body:`\`\`\`text
Resumen: [Componente] Qué falla y en qué condición
Tipo: Bug · Prioridad:  · Componente:
Historia:  · Entorno: QA · Chrome · Windows 11
Pasos: 1.   2.   3.
Esperado:
Actual:
Evidencia: captura adjunta
\`\`\`
`},{id:`csharp`,name:`Apunte de C# / .NET`,icon:`Code`,folder:`C#`,tags:[`c#`],body:`# Tema:

**Fecha:** {fecha} · **Paso de la ruta C#:**

## Qué es (con mis palabras)


## Ejemplo mínimo
\`\`\`csharp

\`\`\`

## Errores comunes / cómo lo depuré
-

## Cómo lo pruebo (xUnit)
\`\`\`csharp
[Fact]
public void Nombre_Escenario_Resultado()
{
    // Arrange
    // Act
    // Assert
}
\`\`\`

## Preguntas de entrevista que me podrían hacer
-
`},{id:`itla-class`,name:`Clase del ITLA`,icon:`GraduationCap`,folder:`Clases ITLA`,tags:[`itla`],body:`# Materia: · Clase del {fecha}

## Temas de hoy
-

## Lo más importante (resumen en 3 líneas)
1.
2.
3.

## Tareas y fechas de entrega
- [ ]

## Dudas para el profesor
-

## Cómo se conecta con QA o con la ruta C#
`}];Object.fromEntries(V.map(e=>[e.id,e]));var H=e=>N(new Date(e)),U=e=>new Date(e).toLocaleTimeString(`es-MX`,{hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`});function W(e,t=new Date){let n=N(t),r=L(n,-6),i=[{id:`favorites`,label:`Favoritas`,notes:[]},{id:`today`,label:`Hoy`,notes:[]},{id:`week`,label:`Últimos 7 días`,notes:[]},{id:`older`,label:`Antes`,notes:[]}],[a,o,s,c]=i;for(let t of e){let e=H(t.updatedAt);t.favorite?a.notes.push(t):e>=n?o.notes.push(t):e>=r?s.notes.push(t):c.notes.push(t)}return i.filter(e=>e.notes.length)}function G(e,t=new Date){let n=H(e),r=N(t);return n>=r?U(e):n>=L(r,-6)?I(n):P(n)}function K(e,t=new Date){let n=Math.floor((t-new Date(e))/6e4);return n<1?`Guardado hace un momento`:n<60?`Guardado hace ${n} min`:H(e)===N(t)?`Guardado hoy a las ${U(e)}`:`Guardado el ${P(H(e))}`}var q=`qa-tracker:sync-base`;function J(e=[],t=[]){let n=new Set(e.map(e=>e.id)),r=new Map;for(let e of t)for(let t of e.notes??[]){if(!t?.id||n.has(t.id))continue;let i=C(t),a=r.get(i.id);(!a||(i.updatedAt??``)>(a.note.updatedAt??``))&&r.set(i.id,{note:i,from:e.label,at:e.createdAt})}return[...r.values()].sort((e,t)=>(t.note.updatedAt??``).localeCompare(e.note.updatedAt??``))}var Y={auto:`Respaldo diario`,manual:`Respaldo manual`,"pre-sync":`Antes de sincronizar`,"sync-remote":`Copia de la nube`,"sync-conflict":`Copia de la nube`,"pre-import":`Antes de importar`,"pre-restore":`Antes de restaurar`,"pre-reset":`Antes de reiniciar`,"pre-recovery":`Antes de recuperar`};async function te(e){let t=[];for(let e of await T().catch(()=>[])){let n=(await b(e.id).catch(()=>null))?.data?.notes;Array.isArray(n)&&n.length&&t.push({label:Y[e.reason]??e.reason,createdAt:e.createdAt,notes:n})}try{let e=JSON.parse(localStorage.getItem(q));e?.notes?.length&&t.push({label:`Última sincronización`,createdAt:e.updatedAt,notes:e.notes})}catch{}return{lost:J(e,t),scanned:t.length}}var X=new Set,ne=e=>{X.add(e)},re=e=>{X.delete(e)},ie=e=>X.has(e),Z=s(),ae=e=>e?new Date(e).toLocaleString(`es-DO`,{dateStyle:`medium`,timeStyle:`short`}):``;function oe(){let e=g(),t=x(),[n,i]=(0,B.useState)(null),[o,s]=(0,B.useState)(null),[c,l]=(0,B.useState)(!1),u=e.notes.map(e=>e.id).join(`|`);if((0,B.useEffect)(()=>{let t=!0;return te(e.notes).then(e=>{if(!t)return;let n=e.lost.filter(e=>!ie(e.note.id));i({...e,lost:n}),s(new Set(n.map(e=>e.note.id)))}),()=>{t=!1}},[u]),!n||!n.lost.length)return null;let d=()=>{let r=n.lost.filter(e=>o.has(e.note.id));for(let t of r)e.restoreNote(t.note);t.show(`${r.length} nota${r.length===1?``:`s`} recuperada${r.length===1?``:`s`}.`,{tone:`success`}),l(!1)},p=e=>s(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,Z.jsxs)(`section`,{"aria-labelledby":`recover-notes`,className:`mb-4 rounded-xl border border-amber-400/30 bg-amber-400/[0.05] p-4`,children:[(0,Z.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,Z.jsx)(r,{size:18,className:`shrink-0 text-amber-300`,"aria-hidden":`true`}),(0,Z.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,Z.jsxs)(`h2`,{id:`recover-notes`,className:`text-sm font-semibold text-amber-100`,children:[`Encontré `,n.lost.length,` nota`,n.lost.length===1?``:`s`,` en tus respaldos que ya no tienes`]}),(0,Z.jsx)(`p`,{className:`text-xs text-amber-200/80`,children:`Puedes devolverlas sin deshacer nada más de lo que hiciste después.`})]}),(0,Z.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>l(e=>!e),children:c?`Ocultar`:`Ver y recuperar`})]}),c&&(0,Z.jsxs)(`div`,{className:`mt-3`,children:[(0,Z.jsx)(`ul`,{className:`flex max-h-80 flex-col gap-1 overflow-y-auto`,children:n.lost.map(({note:e,from:t,at:n})=>(0,Z.jsx)(`li`,{children:(0,Z.jsxs)(`button`,{type:`button`,role:`checkbox`,"aria-checked":o.has(e.id),onClick:()=>p(e.id),className:`flex w-full items-start gap-3 rounded-lg px-2 py-1.5 text-left hover:bg-surface-2`,children:[(0,Z.jsx)(a,{checked:o.has(e.id)}),(0,Z.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,Z.jsx)(`span`,{className:`block truncate text-sm text-fg`,children:e.title}),(0,Z.jsx)(`span`,{className:`block truncate text-xs text-fg-subtle`,children:e.body.slice(0,90)||`Sin contenido`})]}),(0,Z.jsxs)(`span`,{className:`shrink-0 text-right text-xs text-fg-subtle`,children:[t,(0,Z.jsx)(`br`,{}),ae(n)]})]})},e.id))}),(0,Z.jsxs)(`div`,{className:`mt-3 flex items-center gap-3`,children:[(0,Z.jsxs)(f,{size:`sm`,onClick:d,disabled:!o.size,children:[`Recuperar `,o.size,` nota`,o.size===1?``:`s`]}),(0,Z.jsxs)(`span`,{className:`text-xs text-fg-subtle`,children:[`Revisé `,n.scanned,` respaldo`,n.scanned===1?``:`s`,` de este dispositivo.`]})]})]})]})}var se=400;function Q({section:e,className:t=``}){return(0,Z.jsx)(`span`,{"aria-hidden":`true`,className:`inline-block size-2 shrink-0 rounded-full ${S[e]?.dot??`bg-zinc-500`} ${t}`})}function ce({open:e,onClose:t,onPick:n}){return(0,Z.jsx)(_,{open:e,onClose:t,title:`Nueva nota`,description:`Elige una plantilla para empezar.`,size:`lg`,children:(0,Z.jsx)(`ul`,{className:`grid gap-2 sm:grid-cols-2`,children:V.map(e=>(0,Z.jsx)(`li`,{children:(0,Z.jsxs)(`button`,{onClick:()=>n(e),className:`flex w-full items-start gap-3 rounded-xl border border-line p-3 text-left hover:border-accent/50 hover:bg-surface-2`,children:[(0,Z.jsx)(c,{name:e.icon,size:18,className:`mt-0.5 text-emerald-300`}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(`span`,{className:`block text-sm font-medium text-fg`,children:e.name}),(0,Z.jsx)(`span`,{className:`block text-xs text-fg-subtle`,children:e.folder?`Carpeta “${e.folder}”`:`Sin estructura`})]})]})},e.id))})})}var $=`inline-flex items-center gap-1.5 rounded-md bg-surface-2 px-2 py-0.5 text-xs text-fg`,le=e=>[...new Set(e.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean))];function ue({note:t,onBack:r}){let i=g(),a=x(),o=(0,B.useId)(),[s,c]=(0,B.useState)({title:t.title,body:t.body,folder:t.folder??``}),[l,u]=(0,B.useState)(t.body&&t.updatedAt!==t.createdAt?`preview`:`edit`),[d,f]=(0,B.useState)(t.tags.join(`, `)),[h,_]=(0,B.useState)(!1),[v,b]=(0,B.useState)(()=>new Date);(0,B.useEffect)(()=>{let e=setInterval(()=>b(new Date),3e4);return()=>clearInterval(e)},[]);let C=(0,B.useRef)(null),w=(0,B.useRef)(null),T=()=>{clearTimeout(C.current),w.current&&i.updateNote(t.id,w.current),w.current=null};(0,B.useEffect)(()=>T,[t.id]);let j=e=>{w.current={...w.current??{},...e},clearTimeout(C.current),C.current=setTimeout(T,se)},M=e=>{c(t=>({...t,...e})),j(e)},N=[...new Set(i.notes.map(e=>e.folder).filter(Boolean))].sort(),P=S[t.section],F=t.moduleId?A[t.moduleId]:null,I=t.taskId?i.tasks.find(e=>e.id===t.taskId):null;return(0,Z.jsxs)(`article`,{"aria-label":`Nota`,className:`flex min-h-[36rem] flex-col`,children:[(0,Z.jsxs)(`div`,{className:`flex items-center gap-2 border-b border-line px-3 py-2`,children:[(0,Z.jsx)(p,{label:`Volver a la lista`,onClick:()=>{T(),r()},className:`lg:hidden`,children:(0,Z.jsx)(O,{size:17})}),(0,Z.jsxs)(`span`,{className:`flex min-w-0 flex-1 items-center gap-1.5 text-sm text-fg-muted`,children:[(0,Z.jsx)(Q,{section:t.section}),(0,Z.jsxs)(`span`,{className:`truncate`,children:[P?.label??`General`,t.folder&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`span`,{className:`px-1 text-fg-subtle`,children:`/`}),t.folder]})]})]}),(0,Z.jsx)(`span`,{className:`hidden shrink-0 text-xs text-fg-subtle 2xl:inline`,children:K(t.updatedAt,v)}),(0,Z.jsx)(m,{label:`Modo del editor`,value:l,onChange:u,tabs:[{value:`edit`,label:`Editar`},{value:`split`,label:`Dividido`},{value:`preview`,label:`Vista previa`}]}),(0,Z.jsx)(p,{label:t.favorite?`Quitar de favoritas`:`Marcar como favorita`,"aria-pressed":t.favorite,tone:t.favorite?`active`:`neutral`,onClick:()=>i.updateNote(t.id,{favorite:!t.favorite}),children:(0,Z.jsx)(E,{size:17,fill:t.favorite?`currentColor`:`none`})}),(0,Z.jsx)(p,{label:`Eliminar nota`,tone:`danger`,onClick:()=>{let e={...i.notes.find(e=>e.id===t.id),...w.current??{}};T(),ne(t.id),i.deleteNote(t.id),r(),a.show(`Nota “${e.title}” eliminada.`,{tone:`info`,duration:8e3,action:{label:`Deshacer`,onClick:()=>{re(e.id),i.restoreNote(e)}}})},children:(0,Z.jsx)(D,{size:16})})]}),(0,Z.jsxs)(`div`,{className:`px-4 pt-6 sm:px-8 lg:px-10`,children:[(0,Z.jsx)(`input`,{value:s.title,onChange:e=>M({title:e.target.value}),className:`w-full bg-transparent text-2xl font-semibold tracking-tight text-fg outline-none placeholder:text-fg-subtle sm:text-[1.75rem]`,placeholder:`Título`,"aria-label":`Título de la nota`}),(0,Z.jsxs)(`div`,{className:`mt-3 flex flex-wrap items-center gap-1.5`,children:[(0,Z.jsxs)(`span`,{className:$,children:[(0,Z.jsx)(Q,{section:t.section}),P?.label??`General`]}),t.folder&&(0,Z.jsxs)(`span`,{className:$,children:[(0,Z.jsx)(ee,{size:12,"aria-hidden":`true`}),t.folder]}),t.tags.map(e=>(0,Z.jsxs)(`span`,{className:$,children:[`#`,e]},e)),F&&(0,Z.jsxs)(`span`,{className:$,children:[`Roadmap: `,F.title]}),I&&(0,Z.jsxs)(`span`,{className:$,children:[`Tarea: `,I.title]}),(0,Z.jsxs)(`button`,{type:`button`,onClick:()=>_(e=>!e),"aria-expanded":h,"aria-controls":o,className:`inline-flex items-center gap-1.5 rounded-md border border-dashed border-line-strong px-2 py-0.5 text-xs text-fg-muted hover:border-line-strong hover:text-fg`,children:[(0,Z.jsx)(n,{size:12,"aria-hidden":`true`}),h?`Ocultar propiedades`:`Editar propiedades`]})]}),(0,Z.jsxs)(`div`,{id:o,hidden:!h,className:`mt-3 grid gap-2 rounded-xl border border-line bg-surface-2 p-3 sm:grid-cols-2 xl:grid-cols-3`,children:[(0,Z.jsxs)(`label`,{className:`text-xs text-fg-subtle`,children:[`Sección`,(0,Z.jsx)(`select`,{value:t.section,onChange:e=>i.updateNote(t.id,{section:e.target.value}),className:`${e} mt-0.5 py-1.5`,children:y.map(e=>(0,Z.jsx)(`option`,{value:e.id,children:e.label},e.id))})]}),(0,Z.jsxs)(`label`,{className:`text-xs text-fg-subtle`,children:[`Carpeta`,(0,Z.jsx)(`input`,{list:`note-folders`,value:s.folder,onChange:e=>M({folder:e.target.value}),className:`${e} mt-0.5 py-1.5`,placeholder:`Sin carpeta`}),(0,Z.jsx)(`datalist`,{id:`note-folders`,children:N.map(e=>(0,Z.jsx)(`option`,{value:e},e))})]}),(0,Z.jsxs)(`label`,{className:`text-xs text-fg-subtle`,children:[`Etiquetas`,(0,Z.jsx)(`input`,{value:d,onChange:e=>{f(e.target.value),j({tags:le(e.target.value)})},className:`${e} mt-0.5 py-1.5`,placeholder:`api, entrevista`})]}),(0,Z.jsxs)(`label`,{className:`text-xs text-fg-subtle`,children:[`Tema del roadmap`,(0,Z.jsxs)(`select`,{value:t.moduleId??``,onChange:e=>i.updateNote(t.id,{moduleId:e.target.value||null}),className:`${e} mt-0.5 py-1.5`,children:[(0,Z.jsx)(`option`,{value:``,children:`Ninguno`}),k.map(e=>(0,Z.jsxs)(`option`,{value:e.id,children:[`F`,e.phase,` · `,e.title]},e.id))]})]}),(0,Z.jsxs)(`label`,{className:`text-xs text-fg-subtle`,children:[`Tarea o proyecto`,(0,Z.jsxs)(`select`,{value:t.taskId??``,onChange:e=>i.updateNote(t.id,{taskId:e.target.value||null}),className:`${e} mt-0.5 py-1.5`,children:[(0,Z.jsx)(`option`,{value:``,children:`Ninguna`}),i.tasks.map(e=>(0,Z.jsx)(`option`,{value:e.id,children:e.title},e.id))]})]})]})]}),(0,Z.jsxs)(`div`,{className:`grid flex-1 ${l===`split`?`md:grid-cols-2`:``}`,children:[l!==`preview`&&(0,Z.jsx)(`textarea`,{value:s.body,onChange:e=>M({body:e.target.value}),onBlur:T,className:`min-h-96 w-full max-w-[72ch] resize-none bg-transparent px-4 py-5 text-[15px] leading-7 text-fg outline-none placeholder:text-fg-subtle sm:px-8 lg:px-10`,placeholder:"Escribe en Markdown…\n\n# Título\n- lista\n**negrita**  `código`\n```js\ncódigo\n```","aria-label":`Contenido de la nota (Markdown)`,spellCheck:!0}),l!==`edit`&&(0,Z.jsx)(`div`,{className:`overflow-auto px-4 py-5 sm:px-8 lg:px-10 ${l===`split`?`border-t border-line md:border-l md:border-t-0`:``}`,children:(0,Z.jsx)(R,{source:s.body,className:`max-w-[68ch] text-[15px]! leading-7!`})})]}),(0,Z.jsx)(`p`,{className:`border-t border-line px-4 py-2 text-xs text-fg-subtle 2xl:hidden`,children:K(t.updatedAt,v)})]})}function de({param:e,onNavigate:n}){let r=g(),[a,o]=(0,B.useState)(!1),[s,c]=(0,B.useState)(``),[l,p]=(0,B.useState)(`all`),[m,_]=(0,B.useState)({type:`all`,value:null}),[b,x]=(0,B.useState)(!1),C=r.notes.find(t=>t.id===e),T=e=>l===`all`||e.section===l,D=e=>{p(e),_({type:`all`,value:null})},O=(0,B.useMemo)(()=>{let e=new Map;for(let t of r.notes)t.folder&&(l===`all`||t.section===l)&&e.set(t.folder,(e.get(t.folder)??0)+1);return[...e.entries()].sort((e,t)=>e[0].localeCompare(t[0],`es`))},[r.notes,l]),k=(0,B.useMemo)(()=>[...new Set(r.notes.filter(e=>l===`all`||e.section===l).flatMap(e=>e.tags))].sort(),[r.notes,l]),A=M(s),N=r.notes.filter(T).filter(e=>!b||e.favorite).filter(e=>m.type!==`folder`||e.folder===m.value).filter(e=>m.type!==`tag`||e.tags.includes(m.value)).filter(e=>!A||M(`${e.title} ${e.body} ${e.tags.join(` `)} ${e.folder}`).includes(A)).sort((e,t)=>t.updatedAt.localeCompare(e.updatedAt)),P=W(N),I=e=>{o(!1);let t=e.body.replaceAll(`{fecha}`,F()),i=e.id===`blank`&&l!==`all`?l:w({template:e.id,folder:e.folder,tags:e.tags});n(`notes`,r.addNote({title:e.id===`blank`?`Nota nueva`:`${e.name} ${F()}`,body:t,folder:e.folder,tags:e.tags,template:e.id,section:i}))},L=e=>`pressable inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-13 ${e?`border-accent/50 bg-accent-soft font-medium text-accent-text`:`border-line text-fg-muted hover:bg-surface-2 hover:text-fg`}`;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(d,{icon:`NotebookPen`,title:`Notas`,children:(0,Z.jsxs)(f,{onClick:()=>o(!0),children:[(0,Z.jsx)(h,{size:16}),` Nueva nota`]})}),(0,Z.jsx)(oe,{}),(0,Z.jsxs)(`div`,{className:`lg:grid lg:min-h-[36rem] lg:grid-cols-[19rem_minmax(0,1fr)] lg:overflow-hidden lg:rounded-2xl lg:border lg:border-line lg:bg-surface`,children:[(0,Z.jsxs)(`section`,{"aria-label":`Lista de notas`,className:`${C?`hidden lg:block`:``} lg:border-r lg:border-line`,children:[(0,Z.jsxs)(`div`,{className:`flex flex-col gap-2.5 pb-3 lg:border-b lg:border-line lg:p-3.5`,children:[(0,Z.jsxs)(`div`,{className:`relative`,children:[(0,Z.jsx)(v,{size:15,className:`absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle`,"aria-hidden":`true`}),(0,Z.jsx)(`input`,{value:s,onChange:e=>c(e.target.value),placeholder:r.notes.length?`Buscar en ${r.notes.length} nota${r.notes.length===1?``:`s`}`:`Buscar en notas`,className:`${t} w-full py-2 pl-9`,"aria-label":`Buscar en notas`})]}),(0,Z.jsx)(`div`,{role:`group`,"aria-label":`Secciones de notas`,className:`flex flex-wrap gap-1.5`,children:[{id:`all`,label:`Todas`},...y].map(e=>(0,Z.jsxs)(`button`,{type:`button`,"aria-pressed":l===e.id,title:e.hint,onClick:()=>D(e.id),className:L(l===e.id),children:[e.dot&&(0,Z.jsx)(`span`,{"aria-hidden":`true`,className:`size-2 rounded-full ${e.dot}`}),e.label]},e.id))}),(0,Z.jsxs)(`div`,{className:`flex gap-1.5`,children:[(O.length>0||k.length>0)&&(0,Z.jsxs)(`select`,{"aria-label":`Filtrar por carpeta o etiqueta`,className:`rounded-lg border border-line-strong bg-field px-3 py-2 text-sm text-fg placeholder:text-fg-subtle outline-none transition-[border-color,box-shadow] duration-150 hover:border-fg-subtle/50 focus:border-accent focus:ring-3 focus:ring-accent/30 disabled:opacity-50 min-w-0 flex-1 py-1.5 text-sm`,value:`${m.type}:${m.value??``}`,onChange:e=>{let[t,...n]=e.target.value.split(`:`);_({type:t,value:n.join(`:`)||null})},children:[(0,Z.jsx)(`option`,{value:`all:`,children:`Carpetas`}),O.length>0&&(0,Z.jsx)(`optgroup`,{label:`Carpetas`,children:O.map(([e,t])=>(0,Z.jsxs)(`option`,{value:`folder:${e}`,children:[e,` (`,t,`)`]},e))}),k.length>0&&(0,Z.jsx)(`optgroup`,{label:`Etiquetas`,children:k.map(e=>(0,Z.jsxs)(`option`,{value:`tag:${e}`,children:[`#`,e]},e))})]}),(0,Z.jsxs)(`button`,{type:`button`,"aria-pressed":b,onClick:()=>x(e=>!e),className:L(b),children:[(0,Z.jsx)(E,{size:13,"aria-hidden":`true`,fill:b?`currentColor`:`none`}),`Favoritas`]})]})]}),N.length===0?(0,Z.jsx)(`div`,{className:`lg:p-3.5`,children:(0,Z.jsx)(u,{icon:`FileText`,title:r.notes.length?`Sin resultados`:`Aún no hay notas`,action:!r.notes.length&&(0,Z.jsxs)(f,{size:`sm`,onClick:()=>o(!0),children:[(0,Z.jsx)(h,{size:14}),` Crear la primera`]}),children:r.notes.length?`Prueba con otra palabra o quita los filtros.`:`Usa una plantilla: concepto, bug report, test case, API, entrevista, ISTQB o bitácora.`})}):(0,Z.jsx)(`div`,{className:`lg:max-h-[calc(100vh-12rem)] lg:overflow-y-auto`,children:P.map(t=>(0,Z.jsxs)(`div`,{role:`group`,"aria-labelledby":`notes-group-${t.id}`,children:[(0,Z.jsx)(`h2`,{id:`notes-group-${t.id}`,className:`px-4 pb-1 pt-3 text-xs font-medium text-fg-subtle`,children:t.label}),(0,Z.jsx)(`ul`,{children:t.notes.map(t=>(0,Z.jsx)(`li`,{children:(0,Z.jsxs)(`button`,{onClick:()=>n(`notes`,t.id),"aria-current":t.id===e?`true`:void 0,className:`flex w-full gap-2.5 border-l-2 px-4 py-2.5 text-left ${t.id===e?`border-emerald-400 bg-surface-2`:`border-transparent hover:bg-surface-2`}`,children:[(0,Z.jsx)(Q,{section:t.section,className:`mt-1.5`}),(0,Z.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,Z.jsxs)(`span`,{className:`flex items-baseline gap-2`,children:[(0,Z.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-sm font-medium text-fg`,children:t.title}),(0,Z.jsx)(`span`,{className:`shrink-0 text-xs tabular-nums text-fg-subtle`,children:G(t.updatedAt)})]}),(0,Z.jsx)(`span`,{className:`block truncate text-[13px] text-fg-subtle`,children:j(t.body).slice(0,140)||`Vacía`}),l===`all`&&(0,Z.jsxs)(`span`,{className:`sr-only`,children:[`Sección `,S[t.section]?.label??`General`]})]})]})},t.id))})]},t.id))})]}),(0,Z.jsx)(`div`,{className:`${C?``:`hidden lg:block`} overflow-hidden rounded-2xl border border-line bg-surface lg:rounded-none lg:border-0`,children:C?(0,Z.jsx)(ue,{note:C,onBack:()=>n(`notes`)},C.id):(0,Z.jsx)(`div`,{className:`grid h-full min-h-64 place-items-center p-6 text-center`,children:(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(i,{size:26,className:`mx-auto mb-2 text-fg-subtle`,"aria-hidden":`true`}),(0,Z.jsx)(`p`,{className:`text-sm text-fg-muted`,children:`Abre una nota de la lista o crea una nueva.`}),r.notes.length>0&&(0,Z.jsx)(`p`,{className:`mt-1 text-xs text-fg-subtle`,children:`Ctrl K también busca dentro de tus notas.`})]})})})]}),(0,Z.jsx)(ce,{open:a,onClose:()=>o(!1),onPick:I})]})}export{de as default};
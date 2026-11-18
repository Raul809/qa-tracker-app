import{D as e,F as t,H as n,O as r,S as i,Z as a,a as o,gt as s,ht as c,l,o as u,p as d,r as f,u as p,x as m}from"./ui-DCXjIZTI.js";import{n as h,t as g}from"./trash-DTyz6cuA.js";import{$t as _,Fn as v,Kt as y,Qt as b,Yt as x,Zt as S,_n as C,qt as w,xn as T,yn as E}from"./index-Di8RfnI3.js";import{t as D}from"./star-Czj_HGvz.js";import{t as O}from"./arrow-left-ttiixiHW.js";import{n as k,r as A}from"./curriculum-DlxG-mfD.js";import{p as j}from"./studyPlan-CQCehaJa.js";import{r as M}from"./search-CT6a-4RY.js";import{f as N,o as P,p as F,s as I,t as L}from"./date-C94hA2Y9.js";import{n as ee}from"./Markdown-C6HtvXsA.js";var R={name:`folder`,size:24,node:[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]};R.node;var z=c(R),B=s(),V=[{id:`blank`,name:`Nota en blanco`,icon:`FileText`,folder:``,tags:[],body:``},{id:`concept`,name:`Concepto QA`,icon:`GraduationCap`,folder:`Conceptos`,tags:[`concepto`],body:`## Definición (con mis palabras)

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
`}];Object.fromEntries(V.map(e=>[e.id,e]));var H=e=>N(new Date(e)),U=e=>new Date(e).toLocaleTimeString(`es-MX`,{hour:`2-digit`,minute:`2-digit`,hourCycle:`h23`});function W(e,t=new Date){let n=N(t),r=L(n,-6),i=[{id:`favorites`,label:`Favoritas`,notes:[]},{id:`today`,label:`Hoy`,notes:[]},{id:`week`,label:`Últimos 7 días`,notes:[]},{id:`older`,label:`Antes`,notes:[]}],[a,o,s,c]=i;for(let t of e){let e=H(t.updatedAt);t.favorite?a.notes.push(t):e>=n?o.notes.push(t):e>=r?s.notes.push(t):c.notes.push(t)}return i.filter(e=>e.notes.length)}function G(e,t=new Date){let n=H(e),r=N(t);return n>=r?U(e):n>=L(r,-6)?I(n):P(n)}function K(e,t=new Date){let n=Math.floor((t-new Date(e))/6e4);return n<1?`Guardado hace un momento`:n<60?`Guardado hace ${n} min`:H(e)===N(t)?`Guardado hoy a las ${U(e)}`:`Guardado el ${P(H(e))}`}var q=`qa-tracker:sync-base`;function J(e=[],t=[]){let n=new Set(e.map(e=>e.id)),r=new Map;for(let e of t)for(let t of e.notes??[]){if(!t?.id||n.has(t.id))continue;let i=x(t),a=r.get(i.id);(!a||(i.updatedAt??``)>(a.note.updatedAt??``))&&r.set(i.id,{note:i,from:e.label,at:e.createdAt})}return[...r.values()].sort((e,t)=>(t.note.updatedAt??``).localeCompare(e.note.updatedAt??``))}var Y={auto:`Respaldo diario`,manual:`Respaldo manual`,"pre-sync":`Antes de sincronizar`,"sync-remote":`Copia de la nube`,"sync-conflict":`Copia de la nube`,"pre-import":`Antes de importar`,"pre-restore":`Antes de restaurar`,"pre-reset":`Antes de reiniciar`};async function X(e){let t=[];for(let e of await w().catch(()=>[])){let n=(await y(e.id).catch(()=>null))?.data?.notes;Array.isArray(n)&&n.length&&t.push({label:Y[e.reason]??e.reason,createdAt:e.createdAt,notes:n})}try{let e=JSON.parse(localStorage.getItem(q));e?.notes?.length&&t.push({label:`Última sincronización`,createdAt:e.updatedAt,notes:e.notes})}catch{}return{lost:J(e,t),scanned:t.length}}var Z=i(),te=e=>e?new Date(e).toLocaleString(`es-DO`,{dateStyle:`medium`,timeStyle:`short`}):``;function ne(){let e=E(),t=T(),[r,i]=(0,B.useState)(null),[a,s]=(0,B.useState)(null),[c,l]=(0,B.useState)(!1),u=e.notes.map(e=>e.id).join(`|`);if((0,B.useEffect)(()=>{let t=!0;return X(e.notes).then(e=>{t&&(i(e),s(new Set(e.lost.map(e=>e.note.id))))}),()=>{t=!1}},[u]),!r||!r.lost.length)return null;let d=()=>{let n=r.lost.filter(e=>a.has(e.note.id));for(let t of n)e.restoreNote(t.note);t.show(`${n.length} nota${n.length===1?``:`s`} recuperada${n.length===1?``:`s`}.`,{tone:`success`}),l(!1)},p=e=>s(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n});return(0,Z.jsxs)(`section`,{"aria-labelledby":`recover-notes`,className:`mb-4 rounded-xl border border-amber-400/30 bg-amber-400/[0.05] p-4`,children:[(0,Z.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,Z.jsx)(n,{size:18,className:`shrink-0 text-amber-300`,"aria-hidden":`true`}),(0,Z.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,Z.jsxs)(`h2`,{id:`recover-notes`,className:`text-sm font-semibold text-amber-100`,children:[`Encontré `,r.lost.length,` nota`,r.lost.length===1?``:`s`,` en tus respaldos que ya no tienes`]}),(0,Z.jsx)(`p`,{className:`text-xs text-amber-200/80`,children:`Puedes devolverlas sin deshacer nada más de lo que hiciste después.`})]}),(0,Z.jsx)(f,{size:`sm`,variant:`outline`,onClick:()=>l(e=>!e),children:c?`Ocultar`:`Ver y recuperar`})]}),c&&(0,Z.jsxs)(`div`,{className:`mt-3`,children:[(0,Z.jsx)(`ul`,{className:`flex max-h-80 flex-col gap-1 overflow-y-auto`,children:r.lost.map(({note:e,from:t,at:n})=>(0,Z.jsx)(`li`,{children:(0,Z.jsxs)(`button`,{type:`button`,role:`checkbox`,"aria-checked":a.has(e.id),onClick:()=>p(e.id),className:`flex w-full items-start gap-3 rounded-lg px-2 py-1.5 text-left hover:bg-surface-2`,children:[(0,Z.jsx)(o,{checked:a.has(e.id)}),(0,Z.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,Z.jsx)(`span`,{className:`block truncate text-sm text-fg`,children:e.title}),(0,Z.jsx)(`span`,{className:`block truncate text-xs text-fg-subtle`,children:e.body.slice(0,90)||`Sin contenido`})]}),(0,Z.jsxs)(`span`,{className:`shrink-0 text-right text-xs text-fg-subtle`,children:[t,(0,Z.jsx)(`br`,{}),te(n)]})]})},e.id))}),(0,Z.jsxs)(`div`,{className:`mt-3 flex items-center gap-3`,children:[(0,Z.jsxs)(f,{size:`sm`,onClick:d,disabled:!a.size,children:[`Recuperar `,a.size,` nota`,a.size===1?``:`s`]}),(0,Z.jsxs)(`span`,{className:`text-xs text-fg-subtle`,children:[`Revisé `,r.scanned,` respaldo`,r.scanned===1?``:`s`,` de este dispositivo.`]})]})]})]})}var re=400;function Q({section:e,className:t=``}){return(0,Z.jsx)(`span`,{"aria-hidden":`true`,className:`inline-block size-2 shrink-0 rounded-full ${b[e]?.dot??`bg-zinc-500`} ${t}`})}function ie({open:e,onClose:t,onPick:n}){return(0,Z.jsx)(C,{open:e,onClose:t,title:`Nueva nota`,description:`Elige una plantilla para empezar.`,size:`lg`,children:(0,Z.jsx)(`ul`,{className:`grid gap-2 sm:grid-cols-2`,children:V.map(e=>(0,Z.jsx)(`li`,{children:(0,Z.jsxs)(`button`,{onClick:()=>n(e),className:`flex w-full items-start gap-3 rounded-xl border border-line p-3 text-left hover:border-accent/50 hover:bg-surface-2`,children:[(0,Z.jsx)(l,{name:e.icon,size:18,className:`mt-0.5 text-emerald-300`}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(`span`,{className:`block text-sm font-medium text-fg`,children:e.name}),(0,Z.jsx)(`span`,{className:`block text-xs text-fg-subtle`,children:e.folder?`Carpeta “${e.folder}”`:`Sin estructura`})]})]})},e.id))})})}var $=`inline-flex items-center gap-1.5 rounded-md bg-surface-2 px-2 py-0.5 text-xs text-fg`;function ae({note:e,onBack:n}){let i=E(),a=T(),o=(0,B.useId)(),[s,c]=(0,B.useState)({title:e.title,body:e.body}),[l,u]=(0,B.useState)(e.body&&e.updatedAt!==e.createdAt?`preview`:`edit`),[d,f]=(0,B.useState)(e.tags.join(`, `)),[h,_]=(0,B.useState)(!1),[v,y]=(0,B.useState)(()=>new Date);(0,B.useEffect)(()=>{let e=setInterval(()=>y(new Date),3e4);return()=>clearInterval(e)},[]);let x=(0,B.useRef)(null),C=(0,B.useRef)(null),w=()=>{clearTimeout(x.current),C.current&&i.updateNote(e.id,C.current),C.current=null};(0,B.useEffect)(()=>w,[e.id]);let j=e=>{c(t=>({...t,...e})),C.current={...C.current??{},...e},clearTimeout(x.current),x.current=setTimeout(w,re)},M=[...new Set(i.notes.map(e=>e.folder).filter(Boolean))].sort(),N=b[e.section],P=e.moduleId?A[e.moduleId]:null,F=e.taskId?i.tasks.find(t=>t.id===e.taskId):null;return(0,Z.jsxs)(`article`,{"aria-label":`Nota`,className:`flex min-h-[36rem] flex-col`,children:[(0,Z.jsxs)(`div`,{className:`flex items-center gap-2 border-b border-line px-3 py-2`,children:[(0,Z.jsx)(p,{label:`Volver a la lista`,onClick:()=>{w(),n()},className:`lg:hidden`,children:(0,Z.jsx)(O,{size:17})}),(0,Z.jsxs)(`span`,{className:`flex min-w-0 flex-1 items-center gap-1.5 text-sm text-fg-muted`,children:[(0,Z.jsx)(Q,{section:e.section}),(0,Z.jsxs)(`span`,{className:`truncate`,children:[N?.label??`General`,e.folder&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`span`,{className:`px-1 text-fg-subtle`,children:`/`}),e.folder]})]})]}),(0,Z.jsx)(`span`,{className:`hidden shrink-0 text-xs text-fg-subtle 2xl:inline`,children:K(e.updatedAt,v)}),(0,Z.jsx)(m,{label:`Modo del editor`,value:l,onChange:u,tabs:[{value:`edit`,label:`Editar`},{value:`split`,label:`Dividido`},{value:`preview`,label:`Vista previa`}]}),(0,Z.jsx)(p,{label:e.favorite?`Quitar de favoritas`:`Marcar como favorita`,"aria-pressed":e.favorite,tone:e.favorite?`active`:`neutral`,onClick:()=>i.updateNote(e.id,{favorite:!e.favorite}),children:(0,Z.jsx)(D,{size:17,fill:e.favorite?`currentColor`:`none`})}),(0,Z.jsx)(p,{label:`Eliminar nota`,tone:`danger`,onClick:()=>{w();let t=i.notes.find(t=>t.id===e.id);i.deleteNote(e.id),n(),a.show(`Nota “${t.title}” eliminada.`,{tone:`info`,duration:8e3,action:{label:`Deshacer`,onClick:()=>i.restoreNote(t)}})},children:(0,Z.jsx)(g,{size:16})})]}),(0,Z.jsxs)(`div`,{className:`px-4 pt-6 sm:px-8 lg:px-10`,children:[(0,Z.jsx)(`input`,{value:s.title,onChange:e=>j({title:e.target.value}),className:`w-full bg-transparent text-2xl font-semibold tracking-tight text-fg outline-none placeholder:text-fg-subtle sm:text-[1.75rem]`,placeholder:`Título`,"aria-label":`Título de la nota`}),(0,Z.jsxs)(`div`,{className:`mt-3 flex flex-wrap items-center gap-1.5`,children:[(0,Z.jsxs)(`span`,{className:$,children:[(0,Z.jsx)(Q,{section:e.section}),N?.label??`General`]}),e.folder&&(0,Z.jsxs)(`span`,{className:$,children:[(0,Z.jsx)(z,{size:12,"aria-hidden":`true`}),e.folder]}),e.tags.map(e=>(0,Z.jsxs)(`span`,{className:$,children:[`#`,e]},e)),P&&(0,Z.jsxs)(`span`,{className:$,children:[`Roadmap: `,P.title]}),F&&(0,Z.jsxs)(`span`,{className:$,children:[`Tarea: `,F.title]}),(0,Z.jsxs)(`button`,{type:`button`,onClick:()=>_(e=>!e),"aria-expanded":h,"aria-controls":o,className:`inline-flex items-center gap-1.5 rounded-md border border-dashed border-line-strong px-2 py-0.5 text-xs text-fg-muted hover:border-line-strong hover:text-fg`,children:[(0,Z.jsx)(t,{size:12,"aria-hidden":`true`}),h?`Ocultar propiedades`:`Editar propiedades`]})]}),(0,Z.jsxs)(`div`,{id:o,hidden:!h,className:`mt-3 grid gap-2 rounded-xl border border-line bg-surface-2 p-3 sm:grid-cols-2 xl:grid-cols-3`,children:[(0,Z.jsxs)(`label`,{className:`text-xs text-fg-subtle`,children:[`Sección`,(0,Z.jsx)(`select`,{value:e.section,onChange:t=>i.updateNote(e.id,{section:t.target.value}),className:`${r} mt-0.5 py-1.5`,children:S.map(e=>(0,Z.jsx)(`option`,{value:e.id,children:e.label},e.id))})]}),(0,Z.jsxs)(`label`,{className:`text-xs text-fg-subtle`,children:[`Carpeta`,(0,Z.jsx)(`input`,{list:`note-folders`,defaultValue:e.folder,onBlur:t=>i.updateNote(e.id,{folder:t.target.value}),className:`${r} mt-0.5 py-1.5`,placeholder:`Sin carpeta`}),(0,Z.jsx)(`datalist`,{id:`note-folders`,children:M.map(e=>(0,Z.jsx)(`option`,{value:e},e))})]}),(0,Z.jsxs)(`label`,{className:`text-xs text-fg-subtle`,children:[`Etiquetas`,(0,Z.jsx)(`input`,{value:d,onChange:e=>f(e.target.value),onBlur:()=>i.updateNote(e.id,{tags:[...new Set(d.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean))]}),className:`${r} mt-0.5 py-1.5`,placeholder:`api, entrevista`})]}),(0,Z.jsxs)(`label`,{className:`text-xs text-fg-subtle`,children:[`Tema del roadmap`,(0,Z.jsxs)(`select`,{value:e.moduleId??``,onChange:t=>i.updateNote(e.id,{moduleId:t.target.value||null}),className:`${r} mt-0.5 py-1.5`,children:[(0,Z.jsx)(`option`,{value:``,children:`Ninguno`}),k.map(e=>(0,Z.jsxs)(`option`,{value:e.id,children:[`F`,e.phase,` · `,e.title]},e.id))]})]}),(0,Z.jsxs)(`label`,{className:`text-xs text-fg-subtle`,children:[`Tarea o proyecto`,(0,Z.jsxs)(`select`,{value:e.taskId??``,onChange:t=>i.updateNote(e.id,{taskId:t.target.value||null}),className:`${r} mt-0.5 py-1.5`,children:[(0,Z.jsx)(`option`,{value:``,children:`Ninguna`}),i.tasks.map(e=>(0,Z.jsx)(`option`,{value:e.id,children:e.title},e.id))]})]})]})]}),(0,Z.jsxs)(`div`,{className:`grid flex-1 ${l===`split`?`md:grid-cols-2`:``}`,children:[l!==`preview`&&(0,Z.jsx)(`textarea`,{value:s.body,onChange:e=>j({body:e.target.value}),onBlur:w,className:`min-h-96 w-full max-w-[72ch] resize-none bg-transparent px-4 py-5 text-[15px] leading-7 text-fg outline-none placeholder:text-fg-subtle sm:px-8 lg:px-10`,placeholder:"Escribe en Markdown…\n\n# Título\n- lista\n**negrita**  `código`\n```js\ncódigo\n```","aria-label":`Contenido de la nota (Markdown)`,spellCheck:!0}),l!==`edit`&&(0,Z.jsx)(`div`,{className:`overflow-auto px-4 py-5 sm:px-8 lg:px-10 ${l===`split`?`border-t border-line md:border-l md:border-t-0`:``}`,children:(0,Z.jsx)(ee,{source:s.body,className:`max-w-[68ch] text-[15px]! leading-7!`})})]}),(0,Z.jsx)(`p`,{className:`border-t border-line px-4 py-2 text-xs text-fg-subtle 2xl:hidden`,children:K(e.updatedAt,v)})]})}function oe({param:t,onNavigate:n}){let r=E(),[i,o]=(0,B.useState)(!1),[s,c]=(0,B.useState)(``),[l,p]=(0,B.useState)(`all`),[m,g]=(0,B.useState)({type:`all`,value:null}),[y,x]=(0,B.useState)(!1),C=r.notes.find(e=>e.id===t),w=e=>l===`all`||e.section===l,T=e=>{p(e),g({type:`all`,value:null})},O=(0,B.useMemo)(()=>{let e=new Map;for(let t of r.notes)t.folder&&(l===`all`||t.section===l)&&e.set(t.folder,(e.get(t.folder)??0)+1);return[...e.entries()].sort((e,t)=>e[0].localeCompare(t[0],`es`))},[r.notes,l]),k=(0,B.useMemo)(()=>[...new Set(r.notes.filter(e=>l===`all`||e.section===l).flatMap(e=>e.tags))].sort(),[r.notes,l]),A=M(s),N=r.notes.filter(w).filter(e=>!y||e.favorite).filter(e=>m.type!==`folder`||e.folder===m.value).filter(e=>m.type!==`tag`||e.tags.includes(m.value)).filter(e=>!A||M(`${e.title} ${e.body} ${e.tags.join(` `)} ${e.folder}`).includes(A)).sort((e,t)=>t.updatedAt.localeCompare(e.updatedAt)),P=W(N),I=e=>{o(!1);let t=e.body.replaceAll(`{fecha}`,F()),i=e.id===`blank`&&l!==`all`?l:_({template:e.id,folder:e.folder,tags:e.tags});n(`notes`,r.addNote({title:e.id===`blank`?`Nota nueva`:`${e.name} ${F()}`,body:t,folder:e.folder,tags:e.tags,template:e.id,section:i}))},L=e=>`pressable inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-13 ${e?`border-accent/50 bg-accent-soft font-medium text-accent-text`:`border-line text-fg-muted hover:bg-surface-2 hover:text-fg`}`;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(d,{icon:`NotebookPen`,title:`Notas`,children:(0,Z.jsxs)(f,{onClick:()=>o(!0),children:[(0,Z.jsx)(h,{size:16}),` Nueva nota`]})}),(0,Z.jsx)(ne,{}),(0,Z.jsxs)(`div`,{className:`lg:grid lg:min-h-[36rem] lg:grid-cols-[19rem_minmax(0,1fr)] lg:overflow-hidden lg:rounded-2xl lg:border lg:border-line lg:bg-surface`,children:[(0,Z.jsxs)(`section`,{"aria-label":`Lista de notas`,className:`${C?`hidden lg:block`:``} lg:border-r lg:border-line`,children:[(0,Z.jsxs)(`div`,{className:`flex flex-col gap-2.5 pb-3 lg:border-b lg:border-line lg:p-3.5`,children:[(0,Z.jsxs)(`div`,{className:`relative`,children:[(0,Z.jsx)(v,{size:15,className:`absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle`,"aria-hidden":`true`}),(0,Z.jsx)(`input`,{value:s,onChange:e=>c(e.target.value),placeholder:r.notes.length?`Buscar en ${r.notes.length} nota${r.notes.length===1?``:`s`}`:`Buscar en notas`,className:`${e} w-full py-2 pl-9`,"aria-label":`Buscar en notas`})]}),(0,Z.jsx)(`div`,{role:`group`,"aria-label":`Secciones de notas`,className:`flex flex-wrap gap-1.5`,children:[{id:`all`,label:`Todas`},...S].map(e=>(0,Z.jsxs)(`button`,{type:`button`,"aria-pressed":l===e.id,title:e.hint,onClick:()=>T(e.id),className:L(l===e.id),children:[e.dot&&(0,Z.jsx)(`span`,{"aria-hidden":`true`,className:`size-2 rounded-full ${e.dot}`}),e.label]},e.id))}),(0,Z.jsxs)(`div`,{className:`flex gap-1.5`,children:[(O.length>0||k.length>0)&&(0,Z.jsxs)(`select`,{"aria-label":`Filtrar por carpeta o etiqueta`,className:`rounded-lg border border-line-strong bg-field px-3 py-2 text-sm text-fg placeholder:text-fg-subtle outline-none transition-[border-color,box-shadow] duration-150 hover:border-fg-subtle/50 focus:border-accent focus:ring-3 focus:ring-accent/30 disabled:opacity-50 min-w-0 flex-1 py-1.5 text-sm`,value:`${m.type}:${m.value??``}`,onChange:e=>{let[t,...n]=e.target.value.split(`:`);g({type:t,value:n.join(`:`)||null})},children:[(0,Z.jsx)(`option`,{value:`all:`,children:`Carpetas`}),O.length>0&&(0,Z.jsx)(`optgroup`,{label:`Carpetas`,children:O.map(([e,t])=>(0,Z.jsxs)(`option`,{value:`folder:${e}`,children:[e,` (`,t,`)`]},e))}),k.length>0&&(0,Z.jsx)(`optgroup`,{label:`Etiquetas`,children:k.map(e=>(0,Z.jsxs)(`option`,{value:`tag:${e}`,children:[`#`,e]},e))})]}),(0,Z.jsxs)(`button`,{type:`button`,"aria-pressed":y,onClick:()=>x(e=>!e),className:L(y),children:[(0,Z.jsx)(D,{size:13,"aria-hidden":`true`,fill:y?`currentColor`:`none`}),`Favoritas`]})]})]}),N.length===0?(0,Z.jsx)(`div`,{className:`lg:p-3.5`,children:(0,Z.jsx)(u,{icon:`FileText`,title:r.notes.length?`Sin resultados`:`Aún no hay notas`,action:!r.notes.length&&(0,Z.jsxs)(f,{size:`sm`,onClick:()=>o(!0),children:[(0,Z.jsx)(h,{size:14}),` Crear la primera`]}),children:r.notes.length?`Prueba con otra palabra o quita los filtros.`:`Usa una plantilla: concepto, bug report, test case, API, entrevista, ISTQB o bitácora.`})}):(0,Z.jsx)(`div`,{className:`lg:max-h-[calc(100vh-12rem)] lg:overflow-y-auto`,children:P.map(e=>(0,Z.jsxs)(`div`,{role:`group`,"aria-labelledby":`notes-group-${e.id}`,children:[(0,Z.jsx)(`h2`,{id:`notes-group-${e.id}`,className:`px-4 pb-1 pt-3 text-xs font-medium text-fg-subtle`,children:e.label}),(0,Z.jsx)(`ul`,{children:e.notes.map(e=>(0,Z.jsx)(`li`,{children:(0,Z.jsxs)(`button`,{onClick:()=>n(`notes`,e.id),"aria-current":e.id===t?`true`:void 0,className:`flex w-full gap-2.5 border-l-2 px-4 py-2.5 text-left ${e.id===t?`border-emerald-400 bg-surface-2`:`border-transparent hover:bg-surface-2`}`,children:[(0,Z.jsx)(Q,{section:e.section,className:`mt-1.5`}),(0,Z.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,Z.jsxs)(`span`,{className:`flex items-baseline gap-2`,children:[(0,Z.jsx)(`span`,{className:`min-w-0 flex-1 truncate text-sm font-medium text-fg`,children:e.title}),(0,Z.jsx)(`span`,{className:`shrink-0 text-xs tabular-nums text-fg-subtle`,children:G(e.updatedAt)})]}),(0,Z.jsx)(`span`,{className:`block truncate text-[13px] text-fg-subtle`,children:j(e.body).slice(0,140)||`Vacía`}),l===`all`&&(0,Z.jsxs)(`span`,{className:`sr-only`,children:[`Sección `,b[e.section]?.label??`General`]})]})]})},e.id))})]},e.id))})]}),(0,Z.jsx)(`div`,{className:`${C?``:`hidden lg:block`} overflow-hidden rounded-2xl border border-line bg-surface lg:rounded-none lg:border-0`,children:C?(0,Z.jsx)(ae,{note:C,onBack:()=>n(`notes`)},C.id):(0,Z.jsx)(`div`,{className:`grid h-full min-h-64 place-items-center p-6 text-center`,children:(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(a,{size:26,className:`mx-auto mb-2 text-fg-subtle`,"aria-hidden":`true`}),(0,Z.jsx)(`p`,{className:`text-sm text-fg-muted`,children:`Abre una nota de la lista o crea una nueva.`}),r.notes.length>0&&(0,Z.jsx)(`p`,{className:`mt-1 text-xs text-fg-subtle`,children:`Ctrl K también busca dentro de tus notas.`})]})})})]}),(0,Z.jsx)(ie,{open:i,onClose:()=>o(!1),onPick:I})]})}export{oe as default};
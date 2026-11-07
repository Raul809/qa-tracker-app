import{G as e,K as t,P as n,a as r,b as i,h as a,l as o,m as s,n as c,o as l,r as u,x as d}from"./ui-DnR0Sl5_.js";import{n as f,t as p}from"./trash-BtSriB7o.js";import{St as m,wt as h,xt as g,zt as _}from"./index-DXkY-T1v.js";import{t as v}from"./arrow-left-D3OyJjxS.js";import{n as y,r as b}from"./curriculum-DlxG-mfD.js";import{p as x}from"./studyPlan-DviH7aOq.js";import{r as S}from"./search-CpdmJAfv.js";import{f as C,o as w,p as T}from"./date-C94hA2Y9.js";import{n as E}from"./Markdown-DcT5rCir.js";var D={name:`folder`,size:24,node:[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]};D.node;var O=e(D),k={name:`hash`,size:24,node:[[`line`,{x1:`4`,x2:`20`,y1:`9`,y2:`9`,key:`4lhtct`}],[`line`,{x1:`4`,x2:`20`,y1:`15`,y2:`15`,key:`vyu0kd`}],[`line`,{x1:`10`,x2:`8`,y1:`3`,y2:`21`,key:`1ggp8o`}],[`line`,{x1:`16`,x2:`14`,y1:`3`,y2:`21`,key:`weycgp`}]]};k.node;var A=e(k),j={name:`star`,size:24,node:[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]};j.node;var M=e(j),N=t(),P=[{id:`blank`,name:`Nota en blanco`,icon:`FileText`,folder:``,tags:[],body:``},{id:`concept`,name:`Concepto QA`,icon:`GraduationCap`,folder:`Conceptos`,tags:[`concepto`],body:`## Definición (con mis palabras)

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
`}];Object.fromEntries(P.map(e=>[e.id,e]));var F=a(),I=400;function L({open:e,onClose:t,onPick:n}){return(0,F.jsx)(g,{open:e,onClose:t,title:`Nueva nota`,description:`Elige una plantilla para empezar.`,size:`lg`,children:(0,F.jsx)(`ul`,{className:`grid gap-2 sm:grid-cols-2`,children:P.map(e=>(0,F.jsx)(`li`,{children:(0,F.jsxs)(`button`,{onClick:()=>n(e),className:`flex w-full items-start gap-3 rounded-xl border border-white/[0.08] p-3 text-left hover:border-emerald-400/40 hover:bg-white/[0.03]`,children:[(0,F.jsx)(l,{name:e.icon,size:18,className:`mt-0.5 text-emerald-300`}),(0,F.jsxs)(`span`,{children:[(0,F.jsx)(`span`,{className:`block text-sm font-medium text-zinc-100`,children:e.name}),(0,F.jsx)(`span`,{className:`block text-xs text-zinc-500`,children:e.folder?`Carpeta “${e.folder}”`:`Sin estructura`})]})]})},e.id))})})}function R({note:e,onBack:t}){let n=m(),r=h(),[i,a]=(0,N.useState)({title:e.title,body:e.body}),[o,l]=(0,N.useState)(e.body&&e.updatedAt!==e.createdAt?`preview`:`edit`),[f,g]=(0,N.useState)(e.tags.join(`, `)),_=(0,N.useRef)(null),x=(0,N.useRef)(null),S=()=>{clearTimeout(_.current),x.current&&n.updateNote(e.id,x.current),x.current=null};(0,N.useEffect)(()=>S,[e.id]);let C=e=>{a(t=>({...t,...e})),x.current={...x.current??{},...e},clearTimeout(_.current),_.current=setTimeout(S,I)},w=[...new Set(n.notes.map(e=>e.folder).filter(Boolean))].sort();return(0,F.jsxs)(u,{className:`flex min-h-[32rem] flex-col p-0`,children:[(0,F.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 border-b border-white/[0.06] p-3`,children:[(0,F.jsx)(`button`,{onClick:()=>{S(),t()},className:`rounded-lg p-1.5 text-zinc-400 hover:bg-white/[0.06] lg:hidden`,"aria-label":`Volver a la lista`,children:(0,F.jsx)(v,{size:17})}),(0,F.jsx)(`input`,{value:i.title,onChange:e=>C({title:e.target.value}),className:`min-w-0 flex-1 bg-transparent text-lg font-semibold text-zinc-50 outline-none placeholder:text-zinc-500`,placeholder:`Título`,"aria-label":`Título de la nota`}),(0,F.jsx)(`button`,{onClick:()=>n.updateNote(e.id,{favorite:!e.favorite}),"aria-pressed":e.favorite,"aria-label":e.favorite?`Quitar de favoritas`:`Marcar como favorita`,className:`rounded-lg p-1.5 hover:bg-white/[0.06] ${e.favorite?`text-amber-300`:`text-zinc-500`}`,children:(0,F.jsx)(M,{size:17,fill:e.favorite?`currentColor`:`none`})}),(0,F.jsx)(s,{label:`Modo del editor`,value:o,onChange:l,tabs:[{value:`edit`,label:`Editar`},{value:`split`,label:`Dividido`},{value:`preview`,label:`Vista previa`}]}),(0,F.jsx)(c,{variant:`danger`,size:`sm`,onClick:()=>{S();let i=n.notes.find(t=>t.id===e.id);n.deleteNote(e.id),t(),r.show(`Nota “${i.title}” eliminada.`,{tone:`info`,duration:8e3,action:{label:`Deshacer`,onClick:()=>n.restoreNote(i)}})},"aria-label":`Eliminar nota`,children:(0,F.jsx)(p,{size:15})})]}),(0,F.jsxs)(`div`,{className:`grid gap-2 border-b border-white/[0.06] p-3 sm:grid-cols-4`,children:[(0,F.jsxs)(`label`,{className:`text-[11px] text-zinc-500`,children:[`Carpeta`,(0,F.jsx)(`input`,{list:`note-folders`,defaultValue:e.folder,onBlur:t=>n.updateNote(e.id,{folder:t.target.value}),className:`${d} mt-0.5 py-1.5`,placeholder:`Sin carpeta`}),(0,F.jsx)(`datalist`,{id:`note-folders`,children:w.map(e=>(0,F.jsx)(`option`,{value:e},e))})]}),(0,F.jsxs)(`label`,{className:`text-[11px] text-zinc-500`,children:[`Etiquetas`,(0,F.jsx)(`input`,{value:f,onChange:e=>g(e.target.value),onBlur:()=>n.updateNote(e.id,{tags:[...new Set(f.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean))]}),className:`${d} mt-0.5 py-1.5`,placeholder:`api, entrevista`})]}),(0,F.jsxs)(`label`,{className:`text-[11px] text-zinc-500`,children:[`Tema del roadmap`,(0,F.jsxs)(`select`,{value:e.moduleId??``,onChange:t=>n.updateNote(e.id,{moduleId:t.target.value||null}),className:`${d} mt-0.5 py-1.5`,children:[(0,F.jsx)(`option`,{value:``,children:`— Ninguno —`}),y.map(e=>(0,F.jsxs)(`option`,{value:e.id,children:[`F`,e.phase,` · `,e.title]},e.id))]})]}),(0,F.jsxs)(`label`,{className:`text-[11px] text-zinc-500`,children:[`Tarea / proyecto`,(0,F.jsxs)(`select`,{value:e.taskId??``,onChange:t=>n.updateNote(e.id,{taskId:t.target.value||null}),className:`${d} mt-0.5 py-1.5`,children:[(0,F.jsx)(`option`,{value:``,children:`— Ninguna —`}),n.tasks.map(e=>(0,F.jsx)(`option`,{value:e.id,children:e.title},e.id))]})]})]}),(0,F.jsxs)(`div`,{className:`grid flex-1 ${o===`split`?`md:grid-cols-2`:``}`,children:[o!==`preview`&&(0,F.jsx)(`textarea`,{value:i.body,onChange:e=>C({body:e.target.value}),onBlur:S,className:`min-h-96 w-full resize-none bg-transparent p-4 font-mono text-[13px] leading-relaxed text-zinc-200 outline-none placeholder:text-zinc-500`,placeholder:"Escribe en Markdown…\n\n# Título\n- lista\n**negrita**  `código`\n```js\ncódigo\n```","aria-label":`Contenido de la nota (Markdown)`,spellCheck:!0}),o!==`edit`&&(0,F.jsx)(`div`,{className:`overflow-auto p-4 ${o===`split`?`border-t border-white/[0.06] md:border-l md:border-t-0`:``}`,children:(0,F.jsx)(E,{source:i.body})})]}),(0,F.jsxs)(`div`,{className:`border-t border-white/[0.06] px-4 py-2 text-[11px] text-zinc-500`,children:[`Guardado automático · editada `,new Date(e.updatedAt).toLocaleString(`es-MX`),e.moduleId&&b[e.moduleId]&&(0,F.jsxs)(F.Fragment,{children:[` · `,b[e.moduleId].title]})]})]})}function z({param:e,onNavigate:t}){let a=m(),[s,l]=(0,N.useState)(!1),[d,p]=(0,N.useState)(``),[h,g]=(0,N.useState)({type:`all`,value:null}),v=a.notes.find(t=>t.id===e),y=(0,N.useMemo)(()=>{let e=new Map;for(let t of a.notes)t.folder&&e.set(t.folder,(e.get(t.folder)??0)+1);return[...e.entries()].sort((e,t)=>e[0].localeCompare(t[0],`es`))},[a.notes]),b=(0,N.useMemo)(()=>[...new Set(a.notes.flatMap(e=>e.tags))].sort(),[a.notes]),E=S(d),D=a.notes.filter(e=>h.type!==`favorites`||e.favorite).filter(e=>h.type!==`folder`||e.folder===h.value).filter(e=>h.type!==`tag`||e.tags.includes(h.value)).filter(e=>!E||S(`${e.title} ${e.body} ${e.tags.join(` `)} ${e.folder}`).includes(E)).sort((e,t)=>t.favorite-e.favorite||t.updatedAt.localeCompare(e.updatedAt)),k=e=>{l(!1);let n=e.body.replaceAll(`{fecha}`,T());t(`notes`,a.addNote({title:e.id===`blank`?`Nota nueva`:`${e.name} ${T()}`,body:n,folder:e.folder,tags:e.tags,template:e.id}))},j=(e,t,n,r,i)=>{let a=h.type===e&&h.value===t;return(0,F.jsx)(`li`,{children:(0,F.jsxs)(`button`,{onClick:()=>g({type:e,value:t}),"aria-current":a?`true`:void 0,className:`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm ${a?`bg-white/[0.07] text-zinc-50`:`text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-100`}`,children:[r,(0,F.jsx)(`span`,{className:`min-w-0 flex-1 truncate`,children:n}),i!==void 0&&(0,F.jsx)(`span`,{className:`text-xs tabular-nums text-zinc-500`,children:i})]})},`${e}-${t}`)};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(o,{icon:`FileText`,title:`Notas`,subtitle:`Tu base de conocimiento: apuntes en Markdown ligados a temas y tareas.`,children:(0,F.jsxs)(c,{onClick:()=>l(!0),children:[(0,F.jsx)(f,{size:16}),` Nueva nota`]})}),(0,F.jsxs)(`div`,{className:`grid gap-4 lg:grid-cols-[13rem_18rem_minmax(0,1fr)]`,children:[(0,F.jsxs)(`nav`,{"aria-label":`Carpetas y etiquetas`,className:`${v?`hidden lg:block`:``}`,children:[(0,F.jsxs)(`ul`,{className:`flex flex-col gap-0.5`,children:[j(`all`,null,`Todas`,(0,F.jsx)(n,{size:14}),a.notes.length),j(`favorites`,null,`Favoritas`,(0,F.jsx)(M,{size:14}),a.notes.filter(e=>e.favorite).length)]}),y.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`h2`,{className:`mb-1 mt-4 px-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500`,children:`Carpetas`}),(0,F.jsx)(`ul`,{className:`flex flex-col gap-0.5`,children:y.map(([e,t])=>j(`folder`,e,e,(0,F.jsx)(O,{size:14}),t))})]}),b.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`h2`,{className:`mb-1 mt-4 px-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500`,children:`Etiquetas`}),(0,F.jsx)(`ul`,{className:`flex flex-col gap-0.5`,children:b.map(e=>j(`tag`,e,e,(0,F.jsx)(A,{size:14})))})]})]}),(0,F.jsxs)(`section`,{"aria-label":`Lista de notas`,className:v?`hidden lg:block`:``,children:[(0,F.jsxs)(`div`,{className:`relative mb-2`,children:[(0,F.jsx)(_,{size:14,className:`absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500`}),(0,F.jsx)(`input`,{value:d,onChange:e=>p(e.target.value),placeholder:`Buscar en notas…`,className:`${i} w-full py-1.5 pl-8`,"aria-label":`Buscar en notas`})]}),D.length===0?(0,F.jsx)(r,{icon:`FileText`,title:a.notes.length?`Sin resultados`:`Aún no hay notas`,action:!a.notes.length&&(0,F.jsxs)(c,{size:`sm`,onClick:()=>l(!0),children:[(0,F.jsx)(f,{size:14}),` Crear la primera`]}),children:!a.notes.length&&`Usa una plantilla: concepto, bug report, test case, API, entrevista, ISTQB o bitácora.`}):(0,F.jsx)(`ul`,{className:`flex flex-col gap-1`,children:D.map(n=>(0,F.jsx)(`li`,{children:(0,F.jsxs)(`button`,{onClick:()=>t(`notes`,n.id),"aria-current":n.id===e?`true`:void 0,className:`w-full rounded-lg border px-3 py-2 text-left transition ${n.id===e?`border-emerald-400/40 bg-emerald-400/[0.05]`:`border-transparent hover:bg-white/[0.04]`}`,children:[(0,F.jsxs)(`span`,{className:`flex items-center gap-1.5 text-sm font-medium text-zinc-100`,children:[n.favorite&&(0,F.jsx)(M,{size:12,className:`shrink-0 text-amber-300`,fill:`currentColor`}),(0,F.jsx)(`span`,{className:`truncate`,children:n.title})]}),(0,F.jsx)(`span`,{className:`line-clamp-2 text-xs text-zinc-500`,children:x(n.body).slice(0,140)||`Vacía`}),(0,F.jsxs)(`span`,{className:`mt-0.5 block text-[10px] text-zinc-500`,children:[n.folder||`Sin carpeta`,` · `,w(C(new Date(n.updatedAt)))]})]})},n.id))})]}),(0,F.jsx)(`div`,{className:v?``:`hidden lg:block`,children:v?(0,F.jsx)(R,{note:v,onBack:()=>t(`notes`)},v.id):(0,F.jsx)(u,{className:`grid min-h-64 place-items-center text-center`,children:(0,F.jsxs)(`div`,{children:[(0,F.jsx)(n,{size:26,className:`mx-auto mb-2 text-zinc-500`}),(0,F.jsx)(`p`,{className:`text-sm text-zinc-400`,children:`Selecciona una nota o crea una nueva.`}),a.notes.length>0&&(0,F.jsx)(`p`,{className:`mt-1 text-xs text-zinc-500`,children:`Tip: Ctrl K también busca dentro de tus notas.`})]})})})]}),(0,F.jsx)(L,{open:s,onClose:()=>l(!1),onPick:k})]})}export{z as default};
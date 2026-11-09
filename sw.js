// Generado por scripts/pwa-plugin.js en el build. No editar a mano.
const CACHE = 'qa-tracker-1b01083f1cb3'
const PRECACHE = ["./","./assets/index-DNfzw_B-.js","./assets/Achievements-BuKKgDFh.js","./assets/ApiLab-AZyE7j9A.js","./assets/Assistant-DRRQw2M9.js","./assets/Automation-BLocq6YP.js","./assets/Career-C7hZ2vLV.js","./assets/CommandPalette-DLTedKFL.js","./assets/DataSettings-DAEYtJ-D.js","./assets/DateNav-CHfQ4crN.js","./assets/DevCareer-Cy-06_wk.js","./assets/Flashcards-hBYNBghI.js","./assets/Goals-BoSA790q.js","./assets/Guide-DMEWJz6J.js","./assets/Habits-CdOvS0Um.js","./assets/Istqb-C8MPG6dn.js","./assets/Lab-DJ_cN62M.js","./assets/Markdown-i-A03dQy.js","./assets/Notes-DlwsY2G4.js","./assets/Planner-C-I-S9MO.js","./assets/QuestionCard-BP0N_9Yw.js","./assets/Reports-DodjZxE_.js","./assets/ResourceList-DBLIB95Y.js","./assets/Roadmap-DU3ShcmT.js","./assets/Settings-Bun_4zil.js","./assets/Shell-BIp1P4ee.js","./assets/StepLinks-DOy_am6y.js","./assets/StudyPlan-B4cwCcro.js","./assets/StudyToday-D-vDKxdP.js","./assets/TaskEditor-DOU-sqYm.js","./assets/Tasks-ScQb4bjN.js","./assets/Time-X8hWT4Ph.js","./assets/WeeklyReview-BV4UDwgj.js","./assets/arrow-left-CEfTRbYx.js","./assets/automation-CQdGw_a4.js","./assets/calendar-clock-DlmFO0l0.js","./assets/calendar-days-BwAXs5Da.js","./assets/chevron-left-BYFEi9yw.js","./assets/chevron-right-DFcGDyAE.js","./assets/circle-x-FaXqGaYV.js","./assets/clock-Dl4g6GwS.js","./assets/csharpQuestions-DCzqs982.js","./assets/curriculum-DlxG-mfD.js","./assets/date-C94hA2Y9.js","./assets/defaults-C3I_CEVH.js","./assets/dist-CVPAM7_G.js","./assets/external-link-Dokjr6tn.js","./assets/flag-DU10ZjWT.js","./assets/istqb-NJyKy1-5.js","./assets/list-plus-B8eY4Aey.js","./assets/lock-BymPQMpn.js","./assets/mastery-DLT4OGzX.js","./assets/mentor-DZcUsDZe.js","./assets/notebook-pen-DrL0tdVa.js","./assets/notifications-C-VGXy62.js","./assets/pencil-D5o_0ByL.js","./assets/practice-BUnTSAGf.js","./assets/refresh-cw-DhQRZr4o.js","./assets/repeat-CrpBKN4S.js","./assets/rotate-ccw-hY-UOAb_.js","./assets/search-Btb81J43.js","./assets/shield-check-SG5CZ-Zj.js","./assets/studyPlan-DviH7aOq.js","./assets/trash-CsdCitOS.js","./assets/ui-BsCd6iEL.js","./assets/weekly-D0NEFgwx.js","./assets/index-CH7dmCrC.css","./assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2","./assets/inter-cyrillic-wght-normal-DqGufNeO.woff2","./assets/inter-greek-ext-wght-normal-DlzME5K_.woff2","./assets/inter-greek-wght-normal-CkhJZR-_.woff2","./assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./icons/apple-touch-icon.png"]

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)))
})

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('qa-tracker-') && k !== CACHE) await caches.delete(k)
    await self.clients.claim()
  })())
})

self.addEventListener('message', (e) => { if (e.data === 'SKIP_WAITING') self.skipWaiting() })

self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return
  if (req.mode === 'navigate') {
    e.respondWith(caches.match('./', { ignoreSearch: true, ignoreVary: true }).then((r) => r ?? fetch(req)))
    return
  }
  // ignoreVary: los servidores responden "Vary: Origin" y los <script type="module"> envían Origin; sin esto,
  // la copia precacheada (pedida sin Origin) no coincide y la app no abre sin internet.
  e.respondWith(caches.match(req, { ignoreVary: true }).then((hit) => hit ?? fetch(req).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)) }
    return res
  })))
})

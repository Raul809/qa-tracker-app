// Generado por scripts/pwa-plugin.js en el build. No editar a mano.
const CACHE = 'qa-tracker-fdb930fef15f'
const PRECACHE = ["./","./assets/index-Di8RfnI3.js","./assets/Achievements-CBgAeBKW.js","./assets/ApiLab-DgscWwCf.js","./assets/Assistant-CsS0_I1u.js","./assets/Automation-cNY5xOwq.js","./assets/Career-BWPucEkL.js","./assets/Certifications-Bo6QC30W.js","./assets/CommandPalette-AOANFWHX.js","./assets/DataSettings-hKlDl05I.js","./assets/DateNav-zvk-ycdz.js","./assets/DevCareer-Bff6QAVY.js","./assets/Flashcards-DXzBotR_.js","./assets/Goals-CWTOnEnA.js","./assets/Guide--Lzpsev9.js","./assets/Habits-OFEYEV2I.js","./assets/Istqb-J4YfdZYa.js","./assets/Lab-DsYPSQky.js","./assets/Life-DBJasBFK.js","./assets/Markdown-C6HtvXsA.js","./assets/Notes-CWOhB2dE.js","./assets/Planner-DST5a7oC.js","./assets/QuestionCard-798vuoSr.js","./assets/Reports-C_SgKZ6Y.js","./assets/ResourceList-BxTtVsUO.js","./assets/RevealCard-CL15IvBJ.js","./assets/Roadmap-BPs1ONCe.js","./assets/Settings-6W0f_rAe.js","./assets/Shell-CNggHIyl.js","./assets/StepLinks-CpBM2751.js","./assets/StudyPlan-DFynvcLq.js","./assets/StudyToday-Rq1VX22T.js","./assets/TaskEditor-_Q1f6HM-.js","./assets/Tasks-DqZkKs1m.js","./assets/Time-B_2heNZW.js","./assets/WeeklyReview--RBhnwa-.js","./assets/arrow-left-ttiixiHW.js","./assets/automation-CQdGw_a4.js","./assets/calendar-clock-C2VEk-mu.js","./assets/career-kLTSrNBG.js","./assets/certs-v6Ztiegk.js","./assets/charts-BfV3FP1e.js","./assets/chevron-down-D7Ze-Rra.js","./assets/chevron-left-BqZ2D56S.js","./assets/chevron-right-C_U8e5SY.js","./assets/circle-x-DOCVqRzI.js","./assets/clock-DeC0ramO.js","./assets/csharpQuestions-DCzqs982.js","./assets/curriculum-DlxG-mfD.js","./assets/date-C94hA2Y9.js","./assets/defaults-BlzgoZC3.js","./assets/dist-CVPAM7_G.js","./assets/external-link-TIDdAF0X.js","./assets/eye-DnCVWaxw.js","./assets/flag-CJ7xHs-k.js","./assets/list-plus-D2GSXUdH.js","./assets/lock-B36U3ULj.js","./assets/mastery-BXBItTVU.js","./assets/mentor-SwQXns7y.js","./assets/notifications-B3lKPR9E.js","./assets/pencil-C5uWNrfl.js","./assets/planLinks-CaZdUNVj.js","./assets/practice-B54ag0r2.js","./assets/refresh-cw-BN-zlMxe.js","./assets/repeat-Cq_d5aQE.js","./assets/rotate-ccw-DIlqxPSu.js","./assets/search-CT6a-4RY.js","./assets/shield-check-Dg3gvDJz.js","./assets/star-Czj_HGvz.js","./assets/studyPlan-CQCehaJa.js","./assets/trash-DTyz6cuA.js","./assets/ui-DCXjIZTI.js","./assets/weekly-SifotGRg.js","./assets/index-CFVdPcFG.css","./assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2","./assets/inter-cyrillic-wght-normal-DqGufNeO.woff2","./assets/inter-greek-ext-wght-normal-DlzME5K_.woff2","./assets/inter-greek-wght-normal-CkhJZR-_.woff2","./assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./icons/apple-touch-icon.png"]

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

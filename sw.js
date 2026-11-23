// Generado por scripts/pwa-plugin.js en el build. No editar a mano.
const CACHE = 'qa-tracker-13e827e24b1a'
const PRECACHE = ["./","./assets/index-BEPibw7W.js","./assets/Achievements-CLxQVKBR.js","./assets/ApiLab-Dxm132T4.js","./assets/Assistant-RPfD-Z2q.js","./assets/Automation-DRKCDE-9.js","./assets/Career-B3xY1Ijd.js","./assets/Certifications-1Itdol6I.js","./assets/CommandPalette-CxQpmHVP.js","./assets/DataSettings-BSRiFqdR.js","./assets/DateNav-CHQjUDKO.js","./assets/DevCareer-BD9Ve4z_.js","./assets/English-CwHYrqyL.js","./assets/Flashcards-DWsc3B0K.js","./assets/Goals-CEdlc0X2.js","./assets/Guide-IQODdR8Q.js","./assets/Habits-JEEWCQBv.js","./assets/Istqb-3FpqfKvO.js","./assets/Lab-BulaBs9P.js","./assets/Life-BqjHxhBo.js","./assets/Markdown-D-jA5-hD.js","./assets/Notes-B1wwS3TV.js","./assets/Planner-3VFj1nfr.js","./assets/PronounceBar-XUi8W8-Z.js","./assets/QuestionCard-CM23AFNS.js","./assets/Reports-CNAzEvsJ.js","./assets/ResourceList-2z5uczEL.js","./assets/RevealCard-dzj7Z-6z.js","./assets/Roadmap-C_3-fDcM.js","./assets/Settings-uN786xqj.js","./assets/Shell-D9jmjkQU.js","./assets/StepLinks-BCnz6Fbt.js","./assets/StudyPlan-BlG8fi0f.js","./assets/StudyToday-CuW8BxUn.js","./assets/TaskEditor-TrjBwKea.js","./assets/Tasks-C5rQ2FYb.js","./assets/Time-CH2NS4u_.js","./assets/WeeklyReview-liwQazTY.js","./assets/arrow-left-CfY89-03.js","./assets/automation-CQdGw_a4.js","./assets/calendar-clock-C0c2tldx.js","./assets/career-kLTSrNBG.js","./assets/certs-v6Ztiegk.js","./assets/charts-DpLPmjQb.js","./assets/chevron-down-CgUGbPLW.js","./assets/chevron-left-B42uJUfm.js","./assets/chevron-right-vngyf2a5.js","./assets/circle-x-B3Y225kL.js","./assets/clock-CoL4l-Er.js","./assets/csharpQuestions-DCzqs982.js","./assets/curriculum-D9r45lPx.js","./assets/date-C94hA2Y9.js","./assets/defaults-BlzgoZC3.js","./assets/external-link-srKw4T5f.js","./assets/eye-DD8qPrQC.js","./assets/flag-Cw4eXBMs.js","./assets/list-plus-BdNrrLsQ.js","./assets/lock-CHcz3J0Y.js","./assets/mastery-iJGrY7dN.js","./assets/mentor-DbKvlHnH.js","./assets/mic-CulKxg7K.js","./assets/notifications-B0SXYlM4.js","./assets/pencil-B9TtOz_H.js","./assets/planLinks-CaZdUNVj.js","./assets/plus-Bi5OR_xT.js","./assets/practice-B54ag0r2.js","./assets/refresh-cw-CbGZxaSG.js","./assets/repeat-Ch8sg3Xq.js","./assets/rotate-ccw-txBscm5A.js","./assets/route-CetwEVT1.js","./assets/search-BoBsOtCd.js","./assets/shield-check-D57-kulp.js","./assets/square-CtCuqXLC.js","./assets/star-DI-GMWdb.js","./assets/studyPlan-to-4eHmE.js","./assets/trash-CqXXEYIO.js","./assets/ui-CjeDNdpo.js","./assets/weekly-CyjmGZtj.js","./assets/index-C4Tk2hCP.css","./assets/inter-latin-wght-normal-Dx4kXJAl.woff2","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./icons/apple-touch-icon.png"]

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

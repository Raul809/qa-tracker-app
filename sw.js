// Generado por scripts/pwa-plugin.js en el build. No editar a mano.
const CACHE = 'qa-tracker-2ef6b1747264'
const PRECACHE = ["./","./assets/index-DXkY-T1v.js","./assets/Achievements-BpexpcEv.js","./assets/ApiLab-CQOhPd2P.js","./assets/Assistant-DRjDfA2K.js","./assets/Automation-BMgMugx1.js","./assets/Career-CYDiM3Du.js","./assets/CommandPalette-rqKS2kGN.js","./assets/DataSettings-D9DdOv9O.js","./assets/DateNav-DillpMxE.js","./assets/DevCareer-BUIMY-qy.js","./assets/Flashcards-SL731xXG.js","./assets/Goals-Be_rdpQP.js","./assets/Guide-DIZU20Xs.js","./assets/Habits-C1OQ3lH9.js","./assets/Istqb-Bc7YlATC.js","./assets/Lab-BSC8BrIk.js","./assets/Markdown-DcT5rCir.js","./assets/Notes-CW5zDc3Q.js","./assets/Planner-BzwzTayJ.js","./assets/QuestionCard-D8pHIeqw.js","./assets/Reports-BHUiGHn2.js","./assets/ResourceList-Def6U-eN.js","./assets/Roadmap-Dcj_w3rZ.js","./assets/Settings-CHTOGmTp.js","./assets/Shell-ExGXVcii.js","./assets/StepLinks-BePp-ySp.js","./assets/StudyPlan-BRDhn6KF.js","./assets/StudyToday-Xo1L12FI.js","./assets/TaskEditor-0WHsSzSN.js","./assets/Tasks-CfnLHthW.js","./assets/Time-BT-A8dj2.js","./assets/WeeklyReview-B8pQoBGf.js","./assets/arrow-left-D3OyJjxS.js","./assets/automation-CQdGw_a4.js","./assets/calendar-clock-3BGQxoq4.js","./assets/calendar-days-B1Is7hUN.js","./assets/chevron-left-4nJGGS0c.js","./assets/chevron-right-D6KGV3yC.js","./assets/circle-x-CtpzUVCD.js","./assets/clock-C00KqfPN.js","./assets/curriculum-DlxG-mfD.js","./assets/dailyPlan-gyEp6MJQ.js","./assets/date-C94hA2Y9.js","./assets/defaults-C3I_CEVH.js","./assets/dist-CVPAM7_G.js","./assets/external-link-Dn65ZEn_.js","./assets/flag-B9TStWeY.js","./assets/istqb-NJyKy1-5.js","./assets/list-plus-CxKkPTI-.js","./assets/lock-CZf2FC26.js","./assets/mastery-DLT4OGzX.js","./assets/mentor-CEyqY0LN.js","./assets/notebook-pen-CCoh6a4f.js","./assets/notifications-DmgDs7Q6.js","./assets/pencil-B-0bC-lt.js","./assets/practice-BUnTSAGf.js","./assets/refresh-cw-CGlFcaWf.js","./assets/repeat-CmbtYGtB.js","./assets/rotate-ccw-DclQzsL-.js","./assets/search-CpdmJAfv.js","./assets/shield-check-D5A48Scy.js","./assets/studyPlan-DviH7aOq.js","./assets/trash-BtSriB7o.js","./assets/ui-DnR0Sl5_.js","./assets/weekly-DIUGpCfa.js","./assets/index-DZsi5s8P.css","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./icons/apple-touch-icon.png"]

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

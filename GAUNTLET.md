# Boxing Tracker — capped Gauntlet

Build a boxing tracker I can install on my Android phone.

After training I log what I actually did today: jab, cross, hook, uppercut, stance (orthodox/southpaw), rounds, and a short note. Fast to tap. History of days. Feels like a real gym app, not a form.

Quality bar: the running UI on a phone-sized viewport, compared with apps people actually log training in (Strong, Hevy, a good boxing round timer). A separate critic with fresh context inspects the real running app, not a description. If the bar wins, name the biggest gap and send it back.

This is a CAPPED Gauntlet, not ultracode: split into independently judged pieces (logging, session model, history, installability). Max two critic rounds per piece, then stop that piece. No backend. Local-first. No extra features.

Ship something I can install on Android from this repo: a PWA with web app manifest + service worker that Chrome on Android can Install, plus a README with exact install steps. If Android SDK is already on this Mac and a debug APK is cheap, also produce that.

Keep a short workbench.md of each round. Do not ask questions. Just build, then stop.

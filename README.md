# Corner — Boxing Tracker

Corner is a phone-first, local-only boxing and conditioning training app. Build mixed workouts, follow training videos, and keep session history on your device. There is no account and no backend.

Live app: **https://superrich.github.io/corner/**

## Install on Android

The app must be opened from an HTTPS address (or `localhost`) for Chrome to offer installation.

1. Open **https://superrich.github.io/corner/** on your Android phone.
2. Open that HTTPS URL in **Chrome on Android**.
3. Tap the Chrome menu (⋮), then **Install app**. On some Chrome versions this reads **Add to Home screen** → **Install**.
4. Open **Corner** from your home screen. After the first successful load it works offline.

Do not use Incognito mode: Chrome does not keep the local training history there. Clearing the site's Chrome storage also clears the log.

## Run locally

Requires Node.js 18 or newer.

```sh
npm run dev
```

Open `http://127.0.0.1:5173`. To create the deployment bundle, run `npm run build`.

## APK

No APK is included because this Mac did not have an Android SDK, Java runtime, Gradle, or an existing Android wrapper. The installable PWA is the Android deliverable.

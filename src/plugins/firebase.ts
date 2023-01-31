import { initializeApp } from 'firebase/app'
import { initializeFirestore, FirestoreSettings } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    measurementId: config.measurementId,
  }

  const app = initializeApp(firebaseConfig)
  const setting: FirestoreSettings = {
    experimentalAutoDetectLongPolling: true,
  }
  const db = initializeFirestore(app, setting)

  return {
    provide: {
      db: () => db,
    },
  }
})

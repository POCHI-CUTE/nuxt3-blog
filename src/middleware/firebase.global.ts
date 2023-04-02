import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get, child } from 'firebase/database'
import { dbState } from '~/public/types/article'
import { getAnalytics, logEvent } from 'firebase/analytics'

export default defineNuxtRouteMiddleware(async () => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    measurementId: config.measurementId,
    databaseURL: config.databaseURL,
  }

  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
  logEvent(analytics, 'access')

  const database = getDatabase(app)
  const dbRef = ref(database)
  await get(child(dbRef, `articles`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        useState<dbState>('article', () => {
          return snapshot.val() as dbState
        })
      } else {
        console.log('No data available')
      }
    })
    .catch((error) => {
      console.error(error)
    })
})

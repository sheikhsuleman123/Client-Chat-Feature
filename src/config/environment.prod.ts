import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyBgc2EDSXvhSZHgHXr6wG2vS99L4p0iHdQ',
    authDomain: 'players-directory.firebaseapp.com',
    databaseURL: 'https://players-directory.firebaseio.com',
    projectId: 'players-directory',
    storageBucket: 'players-directory.appspot.com',
    messagingSenderId: '1087430463694'
  },
  settings: {
    enabledOAuthLogin: true,
    appName: 'Players Directory',
    defaultProfileCover:
      'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}

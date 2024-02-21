# Project-Requirements
## node version -- v18.17.0
## npm version -- 9.6.7
## react native cli -- 0.70.10

In the project android directory, you can add:

#### `google-services.json`

[project settings](https://console.firebase.google.com/project/delat-8a359/settings/general/android:com.delat)

### Install

Install yarn or npm. Below commands assume you are using yarn.
```
npm install
```

```
yarn
```

### Run

```
npx react-native run-android
```

### Debug

```
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```
```
cd android
```
```
gradlew assembleDebug
```

### Release

```
cd android
```
```
gradlew clean 
```

```
gradlew bundleRelease 
```
```
npx react-native run-android --variant=release
```
# Graphql-Queries

## Mutations

GraphQL Operation that allows you to insert new data or modify the existing data on the server-side.

### Register Mutation

`Query`

```graphql
mutation Mutation($userInput: UserInput) {
  register(userInput: $userInput) {
    username
    email
    photoUrl
  }
}
```

 `Variables`

```json
{
  "userInput": {
    "username": "",
    "email": "",
    "password": "",
    "photoUrl": ""
  }
}
```
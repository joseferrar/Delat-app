# Project-Requirements
## node version -- v18.17.0
## npm version -- 9.6.7
## react native cli -- 0.70.10

### Install

Install yarn or npm. Below commands assume you are using yarn.

```
npm install
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
<div align="center">
  <br />
  <h1>Grand Canyon West Companion App</h1>
  <br />
</div>
---
## 👋 Intro

This project was built upon the [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate).

---

## 🚀 Getting Started

<b>IOS</b>:

```command
npx pod-install # to install pod dependencies
npm run ios     # to run the iOS application
```

<b>Android</b>:

```command
# Make sure the ANDROID_HOME environment variable is configured properly

npm run android # to run the Android application
```

Start the server:
```command
npm start
```

---

## WSL2 Issues
On Windows:
```command
adb tcpip 5555
```

Then on WSL 2:
```command
adb connect [ip device]:5555
```

If it's the first time, it's going to ask you for permission in your phone, make sure to check the box to always grant permission. Then restart adb and connect again:
```command
adb kill-server
adb connect [ip device]:5555
```

---
## 📖 Docs
- [Editing Pages/Routes - Coming Soon...]
- [Building Components - Coming Soon...]
- [Tests & testing](documentation/testing.md)
- [Understanding the file structure](documentation/file-structure.md)

---
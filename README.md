# React DevTools for ClojureScript wrappers

> ⚠️ _EXPERIMENTAL_

https://github.com/roman01la/cljs-react-devtools/assets/1355501/5f41198c-c0f5-409a-bb4d-3fd6cc4c375d

## Features
- React component tree
- Props inspector
- Hooks inspector
- Reagent reactions inspector
- re-frame subscriptions inspector
- Click on a value to log it to the console

Supported React wrappers:
- UIx
- Reagent

## Setup
1. Install the library via Git deps
2. Initialize DevTools
```clojure
(cljs-react-devtools.core/init!
  {:root (js/document.getElementById "root")
   :shortcut "Control-Shift-Meta-R"}) ;; toggles DevTools visibility
```

## Run example in this repo
1. Install NPM deps
2. Run `clojure -A:examples -M -m shadow.cljs.devtools.cli watch examples`
3. Open `http://localhost:3000/`

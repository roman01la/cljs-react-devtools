# React DevTools for ClojureScript wrappers

> ⚠️ _EXPERIMENTAL_

https://github.com/roman01la/cljs-react-devtools/assets/1355501/5f41198c-c0f5-409a-bb4d-3fd6cc4c375d

Supported React wrappers:
- UIx
- Reagent

## Setup
1. Install the library via Git deps
2. Initialize DevTools
```clojure
(cljs-react-devtools.core/init!
         ;; DOM node where React app is rendered
  {:root (js/document.getElementById "root")}) 
```

## Run example in this repo
1. Install NPM deps
2. Run `clojure -A:examples -M -m shadow.cljs.devtools.cli watch examples`
3. Open `http://localhost:3000/`

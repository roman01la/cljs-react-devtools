# React DevTools for ClojureScript wrappers

> ⚠️ _EXPERIMENTAL_

<video src="./demo.mp4" controls />

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
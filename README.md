# React DevTools for ClojureScript wrappers

> ⚠️ _EXPERIMENTAL_

https://github.com/roman01la/cljs-react-devtools/assets/1355501/c3bd8d6d-1127-4459-89ac-3b551d47da36

[*Live demo*](https://roman01la.github.io/cljs-react-devtools/)

## Features
- React components & DOM nodes tree
- Visual picking and highlighting
- Props, hooks, Reagent reactions and re-frame subscriptions inspector
- Update reactions and subscriptions from the inspector
- Click on a value in the inspector to log it to the console
- Press a shortcut to toggle DevTools visibility
- Bottom, left, right docking and undocking into a separate window

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

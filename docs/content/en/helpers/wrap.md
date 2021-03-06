---
title: wrapProperty
description: 'You can create a custom helper for any Vue instance property.'
category: API
fullscreen: True
position: 40
version: 0.201
---

You might want to create a custom helper to 'convert' a non-Composition API property to a Composition-ready one. `wrapProperty` enables you to do that easily, returning either a computed or a bare property as required.

(The second argument is a boolean indicating whether the helper function should return a computed property or not, and it defaults to `true`.)

```ts
import { defineComponent, wrapProperty } from '@nuxtjs/composition-api'

// For example, for used with https://github.com/danielroe/typed-vuex
const useAccessor = wrapProperty('$accessor', false)

export default defineComponent({
  setup() {
    const accessor = useAccessor()
    // You can now access a fully typed store accessor in your component
  },
})
```

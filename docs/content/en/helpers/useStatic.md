---
title: useStatic
description: 'You can define async calls that will be produce static JSON on site generation.'
category: API
position: 39
---

You can pre-run expensive functions using `useStatic`.

```ts
import {
  defineComponent,
  useContext,
  useStatic,
  computed,
} from '@nuxtjs/composition-api'
import axios from 'axios'

export default defineComponent({
  setup() {
    const { params } = useContext()
    const id = computed(() => params.value.id)
    const post = useStatic(
      id => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
      id,
      'post'
    )

    return { post }
  },
})
```

## SSG

If you are generating the whole app (or just prerendering some routes with `nuxt build && nuxt generate --no-build`) the following behaviour will be unlocked:

- On generate, the result of a `useStatic` call will be saved to a JSON file and copied into the `/dist` directory.
- On hard-reload of a generated page, the JSON will be inlined into the page and cached.
- On client navigation to a generated page, this JSON will be fetched - and once fetched it will be cached for subsequent navigations. If for whatever reason this JSON doesn't exist, such as if the page _wasn't_ pre-generated, the original factory function will be run on client-side.

<alert>

If you are pregenerating some pages in your app note that you may need to increase `generate.interval`. (See [setup instructions](/getting-started/setup).)

</alert>

## SSR

If the route is not pre-generated (including in dev mode), then:

- On a hard-reload, the server will run the factory function and inline the result in `nuxtState` - so the client won't rerun the API request. The result will be cached between requests.
- On client navigation, the client will run the factory function.

In both of these cases, the return result of `useStatic` is a `null` ref that is filled with the result of the factory function or JSON fetch when it resolves.

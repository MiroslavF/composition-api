import {
  Middleware,
  Plugin,
  Module,
  ServerMiddleware,
  NuxtConfig,
} from '@nuxt/types'

export const defineNuxtPlugin = (plugin: Plugin) => plugin
export const defineNuxtMiddleware = (middleware: Middleware) => middleware
export const defineNuxtModule = <T extends Record<string, unknown>>(
  module: Module<T>
) => module
export const defineNuxtServerMiddleware = (
  serverMiddleware: ServerMiddleware
) => serverMiddleware
export const defineNuxtConfig = (config: NuxtConfig) => config

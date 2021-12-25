import type { TokenAuth } from '@exobase/auth'

export type PlatformTokenAuth = TokenAuth<{
  platformId: string
}>
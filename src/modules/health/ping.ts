import _ from 'radash'
import type { Props } from '@exobase/core'
import { useLambda } from '@exobase/lambda'


interface Args {}
interface Services {}
interface Response {
  message: 'pong'
}

// @ts-ignore
async function pingEndpoint(props: Props<Args, Services>): Promise<Response> {
  return {
    message: 'pong'
  }
}

export default _.compose(
  useLambda(),
  pingEndpoint
)
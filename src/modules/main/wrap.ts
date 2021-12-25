import _ from 'radash'
import type { Props } from '@exobase/core'
import { useLambda } from '@exobase/lambda'


interface Args {}
interface Services {}

// @ts-ignore
async function wrapInIFrame(props: Props<Args, Services>) {
  return {
    ...props.response,
    headers: {
      'Content-Type': 'text/html'
    },
    json: `<html><body><h1>pong</h1></body></html>`
  }
}

export default _.compose(
  useLambda(),
  wrapInIFrame
)
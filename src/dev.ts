import { getFunctionMap, start } from '@exobase/local'

const run = () => start({
  port: '7700',
  functions: getFunctionMap(process.cwd()).map((f) => ({
    ...f,
    func: require(f.paths.import).default
  }))
}, (port) => {
  console.log(`API running at http://localhost:${port}`)
})

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
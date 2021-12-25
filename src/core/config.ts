
const get = <T = string>(name: string, defaultValue: T = null, cast: (v: any) => T = (v) => v): T => {
    const val = process.env[name]
    if (!val) return defaultValue
    return cast(val)
}

const config = {
    env: get('EXO_ENV'),
    logLevel: get('LOG_LEVEL')
}

export type Config = typeof config

export default config
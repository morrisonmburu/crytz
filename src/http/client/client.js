import axios from 'axios'

/**
 * Axios basic configuration
 */
const config = {
  baseURL: 'http://127.0.0.1:8000'
}

/**
 * Creating the instance of Axios
 * It is because, in large scale application we may need
 * to consume APIs from more than single server,
 */
const client = axios.create(config)

/**
 * Auth interceptors
 * @description Add auth tokens to every outgoing requests.
 * @param {*} config
 */
const authInterceptor = config => {
  config.headers.common.Accept = 'Application/json'
  return config
}

/**
 * Logger interceptors
 * @description Log app requests.
 * @param {*} config
 */
const loggerInterceptor = config =>
/** Add logging here */
  config

/** Adding the request interceptors */
client.interceptors.request.use(authInterceptor)
client.interceptors.request.use(loggerInterceptor)

/** Adding the response interceptors */
client.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    // Event.$emit('ApiError', 500, error.response.data.message)
    throw error
    // Promise.reject(error)
  }
)

export default client

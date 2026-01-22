type RetryOptions = {
  baseDelay?: number
  expo?: number
  attempts?: number
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function autoRetry({ baseDelay = 2000, expo = 2, attempts = 5 }: RetryOptions = {}) {
  return async function retry<T>(
    callback: () => Promise<T>,
    depth = attempts,
    lastError: any = null
  ): Promise<T> {

    if (depth === 0) throw lastError

    try {
      return await callback()
    } catch (error) {
      const attemptIndex = attempts - depth
      const delay = baseDelay * expo ** attemptIndex

      await sleep(delay)

      return retry(callback, depth - 1, error)
    }
  }
}
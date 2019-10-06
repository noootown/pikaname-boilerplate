import decode from 'jwt-decode'
import * as R from 'ramda'
import { UserAuth } from './types'

const decodeWithErrorHandling = (token: string): UserAuth => {
  try {
    return decode(token)
  } catch (error) {
    return {
      userId: '',
      role: '',
    }
  }
}

export const getTokenAuth = R.pipe<
string,
UserAuth,
UserAuth
>(
  decodeWithErrorHandling,
  R.pick(['userId', 'role']),
)

export const getTokenExpirationDate = (token: string): Date | null => {
  const decoded: UserAuth = decodeWithErrorHandling(token)
  if (!decoded.exp) {
    return null
  }
  const date = new Date(0) // The 0 here is the key, which sets the date to the epoch
  date.setUTCSeconds(decoded.exp)
  return date
}

export const isTokenExpired = (token: string): boolean => {
  const date = getTokenExpirationDate(token)
  const offsetSeconds = 0
  if (date === null) {
    return false
  }
  return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000)
}

import * as R from 'ramda'
import ReactGA from 'react-ga'
import { Config } from './Service'

class GoogleAnalyticsService {
  shouldTrack = false

  constructor ({
    trackingId,
  }: Config) {
    this.shouldTrack = !R.isNil(trackingId)
    if (this.shouldTrack) {
      ReactGA.initialize(trackingId)
    }
  }

  pageview (...args: any[]) {
    if (this.shouldTrack) {
      // @ts-ignore
      ReactGA.pageview(...args)
    }
  }

  event (...args: any[]) {
    if (this.shouldTrack) {
      // @ts-ignore
      ReactGA.event(...args)
    }
  }
}

export default GoogleAnalyticsService

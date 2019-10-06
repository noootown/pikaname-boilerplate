import config from 'config'
import {
  GoogleAnalyticsService as CommonGoogleAnalyticsService,
  LocalStorageService as CommonLocalStorageService,
} from '@pikaname/service'

export const GoogleAnalyticsService = new CommonGoogleAnalyticsService(config.ga)
export const LocalStorageService = new CommonLocalStorageService()

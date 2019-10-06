class LocalStorageService {
  static AUTH_TOKEN = 'AUTH_TOKEN'

  getItem (key: string) {
    return localStorage.getItem(key)
  }

  setItem (key: string, value: string) {
    return localStorage.setItem(key, value)
  }

  remove (key: string) {
    return localStorage.removeItem(key)
  }

  clear () {
    return localStorage.clear()
  }

  getJWTToken () {
    return this.getItem(LocalStorageService.AUTH_TOKEN)
  }

  refreshJWTToken (token?: string) {
    if (token) {
      this.setItem(LocalStorageService.AUTH_TOKEN, token)
    } else {
      this.remove(LocalStorageService.AUTH_TOKEN)
    }
  }
}

export default LocalStorageService

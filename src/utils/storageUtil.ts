class LocalStorageUtil {
  private static instance: LocalStorageUtil;
  static getInstance () {
    if (!LocalStorageUtil.instance) {
      LocalStorageUtil.instance = new LocalStorageUtil()
    }
    return LocalStorageUtil.instance
  }

  public getItem (key: string) {
    return localStorage.getItem(key)
  }

  public setItem (key: string, value: string) {
    return localStorage.setItem(key, value)
  }

  public removeItem (key: string) {
    return localStorage.removeItem(key)
  }

  public clear () {
    return localStorage.clear()
  }
}
export default LocalStorageUtil

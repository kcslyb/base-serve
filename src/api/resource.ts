import http from '@/config/axios'

class Resource {
  public prefix: string

  constructor (path: string) {
    this.prefix = path
  }

  public add (params: any) {
    return http.post(`${this.prefix}`, params)
  }

  public getById (id: string) {
    return http.post(`${this.prefix}/${id}`)
  }

  public edit (params: any) {
    return http.put(`${this.prefix}`, params)
  }

  public page (params: any) {
    return http.get(`${this.prefix}/query/pager`, { params: params })
  }

  public delete (id: string) {
    return http.delete(`${this.prefix}/${id}`)
  }

  public deletes (ids: any) {
    return http.delete(`${this.prefix}/deletes`, ids)
  }
}

export default Resource

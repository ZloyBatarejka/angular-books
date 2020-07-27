export type AuthType = 'signUp' | 'signInWithPassword'
export interface Enviroment {
  production: boolean,
  fbApiKey: string,
  fbDbUrl: string,
  fbAuthUrl: string,
  googleApiKey: string,
  googleUrl: string
}

export interface IUser {
  email: string,
  password: string,
  returnSecureToken: boolean
}

export interface ISearchData{
  title: string,
  queue: string,
  startIndex: number
}
export interface IGoogleApiResponse {
  kind: string,
  totalItems: number,
  items: any[]
}

export interface IBookPreview {
  id:string,
  title:string,
  author: string,
  date: string,
  img: string,
  fbId?:string
}

export interface IBook {
  id:string,
  title:string,
  author: string[],
  date: string,
  img: string,
  description: string,
  pagesCount: string,
  link: string
}
export interface IDbAnswer {
  name: string
}

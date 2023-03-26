export interface dbState {
  [k: string]: {
    content: string
    createdDate: string
    title: string
    titleId: string
    updatedDate?: string
  }
}

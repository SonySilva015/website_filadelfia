// src/access/isEditor.ts
import { Access } from 'payload'

export const isAutor: Access = ({ req: { user } }) => {
  return user?.role === 'autor'
}
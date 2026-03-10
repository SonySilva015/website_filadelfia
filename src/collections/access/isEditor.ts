// src/access/isEditor.ts
import { Access } from 'payload'

export const isEditor: Access = ({ req: { user } }) => {
  return user?.role === 'editor'
}
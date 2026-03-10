// acesso/eAdmin.ts
import { Access } from 'payload'

// Retorna true APENAS se o usuário for admin
export const isAdmin: Access = ({ req: { user } }) => {
  // Retorna true se o usuário existe e tem a role 'admin'
  return user?.role === 'admin'
}
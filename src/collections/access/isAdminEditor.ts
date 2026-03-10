// acesso/eAdminOuEditor.ts
import { Access } from 'payload'

export const isAdminOuEditor: Access = ({ req: { user } }) => {
  // Verifica se a role do usuário é 'admin' OU 'editor'
  return user?.role === 'admin' || user?.role === 'editor'
}
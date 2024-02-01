import React from 'react'
import { AuthContext } from '~/contexts/AuthContext'
import { IAuthContextProps } from '~/global/interfaces/interface'

const useAuth = () => {
  return React.useContext(AuthContext) as IAuthContextProps
}

export default useAuth

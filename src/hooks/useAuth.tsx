import React from 'react'
import { AuthContext } from '~/contexts/AuthContext'
import { IAuthContextProps } from '~/global/interface'

const useAuth = () => {
  return React.useContext(AuthContext) as IAuthContextProps
}

export default useAuth

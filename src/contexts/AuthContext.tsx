import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '~/components/loading/Loading'
import { EMPTY } from '~/global/constants'
import { IAuthContextProps, IAuthProviderProps, IUserInfoProps } from '~/global/interface'
import { notifyError, notifySuccess } from '~/global/toastify'

const initialContext: IAuthContextProps = {
  user: {
    id: EMPTY,
    email: EMPTY,
    password: EMPTY,
    firstName: EMPTY,
    lastName: EMPTY,
    avatar: EMPTY,
    role: EMPTY,
    staffCode: EMPTY
  },
  idToken: null,
  login: async () => {
    return
  },
  logout: async () => {
    return
  }
}
export const AuthContext = createContext<IAuthContextProps>(initialContext)
const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [idToken, setIdToken] = useState<string | null>(null)
  const [user, setUser] = useState<IUserInfoProps | undefined>()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!idToken && !loading) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, idToken])

  initialContext.login = async () => {
    setLoading(true)
    try {
      notifySuccess('Đăng nhập thành công')
    } catch (error) {
      console.error()
      notifyError('Lỗi!')
    }
    setLoading(false)
  }

  initialContext.logout = async () => {
    setLoading(true)
    try {
      console.log('Log out!')
    } catch (error) {
      console.error()
    }
    setIdToken(null)
    setUser(undefined)
    setLoading(false)
  }

  initialContext.user = user
  initialContext.idToken = idToken
  return !loading ? <AuthContext.Provider value={initialContext}>{children}</AuthContext.Provider> : <Loading />
}

export default AuthProvider

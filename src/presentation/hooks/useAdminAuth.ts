import { useEffect, useState } from 'react'
import { isSupabaseConfigured, supabase } from '../../lib/supabase'

export const useAdminAuth = () => {
  const [adminAuthenticated, setAdminAuthenticated] = useState(false)

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      return
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setAdminAuthenticated(Boolean(session))
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAdminAuthenticated(Boolean(session))
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleAdminLogin = () => {
    setAdminAuthenticated(true)
  }

  const handleAdminLogout = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut()
    }
    setAdminAuthenticated(false)
  }

  return {
    adminAuthenticated,
    handleAdminLogin,
    handleAdminLogout,
  }
}

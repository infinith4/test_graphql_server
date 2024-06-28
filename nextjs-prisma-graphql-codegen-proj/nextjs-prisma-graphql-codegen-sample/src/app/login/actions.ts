'use server'

import { signIn } from '@/auth'

export async function authenticate(prevState: boolean, formData: FormData) {
  try {
    console.log('-----------------------------formData')
    console.log(formData)
    await signIn('credentials', Object.fromEntries(formData))
    return true
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return false
    }
    throw error
  }
}

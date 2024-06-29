'use client';

import { login } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(login, undefined);

  return (
    <form action={dispatch} className='w-full'>
      <div className='w-full rounded-lg bg-gray-50 pt-6 pb-4 px-6'>
        <div>
          <label htmlFor='email' className='block mb-2 text-gray-800'>
            Email
          </label>
          <input
            className='block w-full rounded-md border border-gray-200 pl-2 py-2 outline-2'
            id='email'
            type='email'
            name='email'
            placeholder='メールアドレス'
            required
          />
        </div>

        <div className='mt-4'>
          <label htmlFor='password' className='block mb-2 text-gray-800'>
            Password
          </label>
          <input
            className='block w-full rounded-md border border-gray-200 pl-2 py-2 outline-2'
            id='password'
            type='password'
            name='password'
            placeholder='パスワード'
            required
          />
        </div>

        <button className='mt-8 w-full rounded-lg bg-blue-500 text-white h-10 hover:bg-blue-400 focus-visible:outline-offset-2'>
          ログイン
        </button>
        <div className='flex h-8 items-end space-x-1'>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        </div>
      </div>
    </form>
  );
}
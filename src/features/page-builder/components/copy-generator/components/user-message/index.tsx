import type { FC } from 'react'

import type { UserMessageProps } from './types'

export const UserMessage: FC<UserMessageProps> = ({ message }) => {
  return (
    <div className="roundes-sm flex w-full items-start gap-3 bg-neutral-100 p-2">
      {/* <figure className="h-10 w-10 rounded-sm">
        <Image
          alt="User Profile Image"
          className="h-10 w-10 rounded-sm object-cover"
          height={80}
          src="https://1.gravatar.com/avatar/5a71b39d060b6f8a6122f3c3b2878c21d272d8ff0f8fc337999a34d6f1c7e5f0?size=256"
          width={80}
        />
      </figure> */}
      <p className="w-full flex-1 text-sm text-neutral-600">{message}</p>
    </div>
  )
}

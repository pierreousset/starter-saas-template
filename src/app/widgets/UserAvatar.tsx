import { User } from '@prisma/client';
import { AvatarProps } from '@radix-ui/react-avatar';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { UserIcon } from '@heroicons/react/20/solid';

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, 'image' | 'name'>;
}

const UserAvatar = ({ user, ...props }: UserAvatarProps) => (
  <Avatar {...props}>
    {user.image ? (
      <AvatarImage alt='Picture' src={user.image} />
    ) : (
      <AvatarFallback>
        <span className='sr-only'>{user.name}</span>
        <UserIcon className='h-4 w-4' />
      </AvatarFallback>
    )}
  </Avatar>
);

export default UserAvatar;

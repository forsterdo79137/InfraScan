import Image from 'next/image'
import Link from 'next/link'
import HeaderLogout from '@/components/Dashboard/Header/HeaderLogout'
import { auth } from '@/auth'
import { getDictionary } from '@/locales/dictionary'

export default async function HeaderProfileNav() {
  const session = await auth()
  const dict = await getDictionary()

  return (
    <nav className="flex items-center gap-4">
      <Link href="#" className="text-sm">
        {dict.profile.settings.items.profile}
      </Link>
      <Link href="#" className="text-sm">
        {dict.profile.settings.items.settings}
      </Link>
      <HeaderLogout>
        <button className="text-sm" type="button">
          {dict.profile.logout}
        </button>
      </HeaderLogout>
      <div className="relative h-8 w-8">
        {session && (
          <Image
            fill
            sizes="32px"
            className="rounded-full"
            src={(session as any).user?.avatar}
            alt={(session as any).user?.email ?? 'user'}
          />
        )}
      </div>
    </nav>
  )
}
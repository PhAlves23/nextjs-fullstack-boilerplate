import { GalleryVerticalEnd, Settings, User2 } from 'lucide-react'

export const sidebarData = {
  user: {
    name: 'Admin',
    email: 'adm@cogna.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Cogna Educação',
      logo: GalleryVerticalEnd,
      plan: 'Empresa',
    },
  ],
  navMain: [
    {
      title: 'Usuário',
      url: '/admin/user',
      icon: User2,
      isActive: true,
      items: [
        {
          title: 'Listagem',
          url: '/admin/user/list',
        },
      ],
    },
    {
      title: 'Configurações',
      url: '/admin/settings',
      icon: Settings,
      items: [
        {
          title: 'Geral',
          url: '/admin/settings',
        },

        {
          title: 'Usuários',
          url: '/admin/settings',
        },
        {
          title: 'Permissões',
          url: '/admin/settings',
        },
      ],
    },
  ],
}

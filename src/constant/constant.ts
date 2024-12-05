interface SidebarItem {
  id: number
  link: string
  value: string
}
export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    link: '/store',
    value: 'Store',
  },
  {
    id: 2,
    link: '/weather',
    value: 'Weather',
  },
]

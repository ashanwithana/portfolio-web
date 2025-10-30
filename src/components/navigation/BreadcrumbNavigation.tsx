import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbNavigationProps {
  items?: BreadcrumbItem[]
}

export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({
  items,
}) => {
  const router = useRouter()

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items

    const pathSegments = router.asPath.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', href: '/' }]

    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const name = segment.charAt(0).toUpperCase() + segment.slice(1)
      breadcrumbs.push({ name, href })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  if (breadcrumbs.length <= 1) return null

  return (
    <Breadcrumb
      spacing='8px'
      separator='/'
      fontSize='sm'
      color='gray.600'
      mb={4}
    >
      {breadcrumbs.map((breadcrumb, index) => (
        <BreadcrumbItem
          key={breadcrumb.href}
          isCurrentPage={index === breadcrumbs.length - 1}
        >
          {index === breadcrumbs.length - 1 ? (
            <span>{breadcrumb.name}</span>
          ) : (
            <BreadcrumbLink as={NextLink} href={breadcrumb.href}>
              {breadcrumb.name}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

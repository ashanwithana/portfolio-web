export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  coverImage?: string
  publishedAt: string
  tags: string[]
  readingTime: number
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Web Applications with Laravel',
    excerpt:
      'Exploring best practices for building robust and scalable web applications using Laravel framework.',
    content: `
# Building Scalable Web Applications with Laravel

Laravel has become one of the most popular PHP frameworks for building web applications. In this post, I'll share my experience and best practices for building scalable applications.

## Key Principles

1. **MVC Architecture**: Laravel's MVC pattern helps organize code effectively
2. **Database Design**: Proper database relationships and indexing
3. **Caching Strategies**: Using Redis and Laravel's built-in caching
4. **Queue System**: Handling heavy tasks asynchronously

## Performance Optimization

- Use eager loading to prevent N+1 queries
- Implement proper caching layers
- Optimize database queries
- Use CDN for static assets

Laravel provides excellent tools for building maintainable and scalable applications when used correctly.
    `,
    coverImage: '/img/blog/laravel-scalable.jpg',
    publishedAt: '2024-10-15',
    tags: ['Laravel', 'PHP', 'Web Development', 'Backend'],
    readingTime: 5,
    slug: 'building-scalable-web-applications-with-laravel',
  },
  {
    id: '2',
    title: 'Modern Python Development with FastAPI',
    excerpt:
      'Discover how FastAPI is revolutionizing Python web development with its modern approach.',
    content: `
# Modern Python Development with FastAPI

FastAPI has emerged as a game-changer in the Python web development ecosystem. Let's explore why it's gaining so much traction.

## Why FastAPI?

- **Performance**: One of the fastest Python frameworks
- **Type Safety**: Built-in support for Python type hints
- **Automatic Documentation**: Interactive API docs out of the box
- **Modern Standards**: Built on modern Python features

## Getting Started

\`\`\`python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"Hello": "World"}
\`\`\`

FastAPI makes it incredibly easy to build robust APIs with minimal boilerplate code.
    `,
    coverImage: '/img/blog/fastapi-modern.jpg',
    publishedAt: '2024-10-20',
    tags: ['Python', 'FastAPI', 'API Development', 'Backend'],
    readingTime: 4,
    slug: 'modern-python-development-with-fastapi',
  },
  {
    id: '3',
    title: 'Mastering .NET Core for Enterprise Applications',
    excerpt:
      'Learn how to leverage .NET Core for building enterprise-grade applications with best practices.',
    content: `
# Mastering .NET Core for Enterprise Applications

.NET Core has transformed the .NET ecosystem, making it cross-platform and more performant than ever.

## Enterprise Features

- **Dependency Injection**: Built-in DI container
- **Configuration Management**: Flexible configuration system
- **Logging**: Structured logging out of the box
- **Health Checks**: Monitor application health

## Best Practices

1. Use repository pattern for data access
2. Implement proper error handling
3. Use async/await for I/O operations
4. Follow SOLID principles

.NET Core provides everything needed for enterprise applications while maintaining high performance.
    `,
    coverImage: '/img/blog/dotnet-enterprise.jpg',
    publishedAt: '2024-10-25',
    tags: ['.NET Core', 'C#', 'Enterprise', 'Backend'],
    readingTime: 6,
    slug: 'mastering-dotnet-core-for-enterprise-applications',
  },
  {
    id: '4',
    title: 'Building Modern UIs with Next.js and TypeScript',
    excerpt:
      'Explore the power of Next.js combined with TypeScript for creating type-safe, performant web applications.',
    content: `
# Building Modern UIs with Next.js and TypeScript

The combination of Next.js and TypeScript creates a powerful foundation for modern web applications.

## Why This Combination Works

- **Type Safety**: Catch errors at compile time
- **Performance**: Next.js optimizations
- **Developer Experience**: Excellent tooling
- **SEO**: Server-side rendering capabilities

## Key Features

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

export async function getStaticProps() {
  const users: User[] = await fetchUsers();
  return { props: { users } };
}
\`\`\`

This combination provides both type safety and excellent performance characteristics.
    `,
    coverImage: '/img/blog/nextjs-typescript.jpg',
    publishedAt: '2024-10-28',
    tags: ['Next.js', 'TypeScript', 'React', 'Frontend'],
    readingTime: 7,
    slug: 'building-modern-uis-with-nextjs-and-typescript',
  },
]

export const getAllTags = (): string[] => {
  const tags = blogPosts.flatMap((post) => post.tags)
  return ['all', ...Array.from(new Set(tags))]
}

export const getPostsByTag = (tag: string): BlogPost[] => {
  if (tag === 'all') return blogPosts
  return blogPosts.filter((post) => post.tags.includes(tag))
}

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug)
}

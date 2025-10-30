export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
  archived: boolean
  fork: boolean
  private: boolean
  size: number
}

export interface ProcessedRepo {
  id: number
  name: string
  description: string
  url: string
  homepage: string | null
  language: string
  stars: number
  forks: number
  topics: string[]
  lastUpdated: string
  isArchived: boolean
  isFork: boolean
}

const GITHUB_API_URL = 'https://api.github.com'

export const fetchGitHubRepos = async (
  username: string
): Promise<ProcessedRepo[]> => {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${username}/repos?sort=updated&per_page=100`
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()

    // Filter and process repositories
    const processedRepos: ProcessedRepo[] = repos
      .filter((repo) => !repo.private) // Only public repos
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description available',
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language || 'Unknown',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics || [],
        lastUpdated: repo.updated_at,
        isArchived: repo.archived,
        isFork: repo.fork,
      }))
      .sort(
        (a, b) =>
          new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      )

    return processedRepos
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error)
    return []
  }
}

export const getLanguageColor = (language: string): string => {
  const colors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    PHP: '#777bb4',
    'C#': '#239120',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#1572b6',
    Vue: '#4fc08d',
    React: '#61dafb',
    Laravel: '#ff2d20',
    'Next.js': '#000000',
    Dart: '#00B4AB',
    Go: '#00ADD8',
    Rust: '#dea584',
    C: '#555555',
    'C++': '#f34b7d',
    Shell: '#89e051',
    Unknown: '#6c757d',
  }

  return colors[language] || colors.Unknown
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) return '1 day ago'
  if (diffDays < 30) return `${diffDays} days ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}

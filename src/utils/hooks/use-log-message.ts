import { useEffect } from 'react'

/**
 * Log the portfolio Github repo.
 */
export const useLogMessage = (): void => {
  useEffect(() => {
    console.info(
      `%c
    ╔═══════════════════════════════════════════════════╗
    ║             ASHAN WITHANA                         ║
    ║      Software Engineer & Backend Developer        ║
    ║                                                   ║
    ║  🚀 Crafting robust backend solutions             ║
    ║  💻 Laravel | .NET | Python                       ║
    ║  📍 Sri Lanka                                     ║
    ║                                                   ║
    ║  Portfolio: https://ashanwithana.dev              ║
    ║  Source: https://github.com/ashanwithana          ║
    ╚═══════════════════════════════════════════════════╝
        `,
      'color: #38B2AC; font-weight: bold; font-family: monospace;'
    )
  }, [])
}

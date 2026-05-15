import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Student Deadline Panic Predictor',
  description: 'Predict student stress levels before burnout. Built for academic advisors and student success coordinators.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ec03e341-c168-419e-bcb6-a1519f89edf1"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

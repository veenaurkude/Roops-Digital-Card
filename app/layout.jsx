import './globals.css'

export const metadata = {
  title: 'ROOPs 3D Impressions | Digital Card',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


// import type { Metadata } from 'next'
// import './globals.css'

// export const metadata: Metadata = {
//   title: 'ROOPs 3D Impressions | Digital Card',
//   description: 'Created with v0',
//   generator: 'v0.dev',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }

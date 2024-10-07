import './globals.css'


export const metadata = {
  title: 'seballus website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

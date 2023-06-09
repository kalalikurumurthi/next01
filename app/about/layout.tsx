import styles from './styles.module.css'
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <nav>About Navabar
            <main className={styles.main}>
                {children}
            </main>
        </nav>
        </>

    )
}
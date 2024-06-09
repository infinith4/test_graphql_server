// app/dir1/layout.tsx

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div>nested layout</div>
      <div>{children}</div>
    </section>
  )
}

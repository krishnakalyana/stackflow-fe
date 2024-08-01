export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-full flex justify-center items-center">{children}</main>
  );
}

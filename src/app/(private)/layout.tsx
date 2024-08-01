import PrivateLay from "@/components/common/Layouts/PrivateLayout";

export default function PrivateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PrivateLay>{children}</PrivateLay>;
}

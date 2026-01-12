import Sidebar from "@/components/Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-7xl mx-auto">
      <Sidebar />
      <div className="flex-1 lg:pl-64">
        <div className="max-w-3xl mx-auto px-6 py-10">
          {children}
        </div>
      </div>
    </div>
  );
}

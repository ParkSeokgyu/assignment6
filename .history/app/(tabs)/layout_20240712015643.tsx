import TabBar from "@/components/tab-bar";

export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center">
      {children}
      <TabBar />
    </div>
  );
}
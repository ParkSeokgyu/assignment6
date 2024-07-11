import TabBar from "@/components/tab-bar";

export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="y-auto">
      {children}
      <TabBar />
    </div>
  );
}
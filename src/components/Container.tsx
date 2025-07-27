export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-1 sm:px-4 h-full">{children}</div>
  );
}

export function RecTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-solid border-gold text-gold border-2 px-1 sm:px-2 py-1 w-full text-center rounded-md text-sm">
      {children}
    </div>
  );
}

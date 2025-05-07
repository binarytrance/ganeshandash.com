export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`flex py-16 w-full px-[15vw] ${className}`}>
      {children}
    </section>
  );
}

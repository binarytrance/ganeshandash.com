export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`flex pt-16 pb-4 mx-[20vw] ${className}`}>
      {children}
    </section>
  );
}

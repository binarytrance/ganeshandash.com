export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id ? id : ""}
      aria-label="section"
      className={`flex flex-col py-8 sm:py-16 w-full px-[10vw] sm:px-[15vw] ${className}`}
    >
      {children}
    </section>
  );
}

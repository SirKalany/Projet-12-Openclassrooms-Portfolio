export default function Section({
  id,
  bg,
  children,
  alignItems = "items-center",
  textAlign = "text-center",
  maxWidth = "max-w-5xl",
}) {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full flex flex-col justify-center ${alignItems} bg-cover bg-center`}
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div
        className={`relative z-10 px-8 ${maxWidth} text-white ${textAlign} space-y-6`}
      >
        {children}
      </div>
    </section>
  );
}

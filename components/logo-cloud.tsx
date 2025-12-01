export function LogoCloud() {
  const logos = ["LOGOIPSUM", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"]

  return (
    <section className="container mx-auto px-4 py-12 md:px-6">
      <p className="text-center text-sm text-muted-foreground mb-8">Teams Who Value Flexibility</p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-2 text-muted-foreground/60">
            <div className="h-6 w-6 rounded-full bg-muted-foreground/20" />
            <span className="text-lg font-semibold">{logo}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

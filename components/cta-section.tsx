export function CtaSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Transform
          <br />
          Your Workflow?
        </h2>
        <p className="text-background/80 mb-8 max-w-2xl mx-auto">
          Join thousands of teams who have already revolutionized their productivity with Tasky. Start your free trial
          today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
            Get Started Free
          </button>
          <button className="bg-transparent border border-background text-background px-8 py-3 rounded-full font-medium hover:bg-background/10 transition-colors">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  )
}

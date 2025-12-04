import { Briefcase, Rocket, Users, Clock } from "lucide-react"

const benefits = [
  {
    icon: Briefcase,
    title: "Busy Professionals",
    description: "Stay on top of multiple projects, prioritize tasks, and meet deadlines with ease.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    description: "Manage your workload, delegate tasks, and grow your business with Connectstream.",
  },
  {
    icon: Users,
    title: "Collaborators",
    description: "Work together seamlessly with Whatsapp Api features.",
  },
  {
    icon: Clock,
    title: "Freelancers",
    description: "Stay organized, manage multiple clients, and meet deadlines with Tasky.",
  },
]

export function BenefitSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who Can Benefit From Connectstream?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Our AI-powered Whatsapp Api platform is perfect for individuals and teams from various backgrounds and
          industries.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-left hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

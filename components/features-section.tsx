import { Card } from "@/components/ui/card"
import { Sparkles, AlertCircle, BarChart3, Users } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Next AI-Powered Workflow",
    description: "Streamline your workflow by automating repetitive tasks.",
  },
  {
    icon: AlertCircle,
    title: "Automated Prioritization",
    description: "Prioritization system to focus on the most critical tasks first.",
  },
  {
    icon: BarChart3,
    title: "Performance metrics",
    description: "Providing valuable insights into task completion rates.",
  },
  {
    icon: Users,
    title: "Collaborate in real-time",
    description: "Enhance remote teamwork and overall productivity.",
  },
]

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:px-6">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Revolutionize Your <span className="text-primary">Task Management</span>
          </h2>
        </div>
        <div>
          <p className="text-muted-foreground leading-relaxed">
            Our AI-powered task management solution helps you automate repetitive tasks, prioritize focus areas, and
            optimize your workflow for maximum efficiency.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 bg-card hover:shadow-md transition-shadow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

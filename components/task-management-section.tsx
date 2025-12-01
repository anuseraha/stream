import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Video, Clock } from "lucide-react"

export function TaskManagementSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance mb-4">
          Unlock <span className="text-primary">Efficient</span> Task Management
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Tasky is designed to help you streamline your workflow, enhance teamwork, and boost productivity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Meeting Schedule Card */}
        <Card className="p-5 bg-card">
          <div className="mb-4">
            <h3 className="font-semibold text-sm">Meeting Schedule</h3>
            <p className="text-xs text-muted-foreground">Your upcoming meeting schedule</p>
          </div>

          <div className="space-y-3">
            <div className="border rounded-lg p-3">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-100 text-blue-600">
                  <Video className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Progress Report - Week 1</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" /> 01:30 AM - 02:00 AM
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <Avatar className="h-5 w-5 border-2 border-background">
                          <AvatarImage src="/woman-face-1.jpg" />
                          <AvatarFallback>U1</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-5 w-5 border-2 border-background">
                          <AvatarImage src="/man-face-1.jpg" />
                          <AvatarFallback>U2</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-5 w-5 border-2 border-background">
                          <AvatarImage src="/woman-face-2.png" />
                          <AvatarFallback>U3</AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-xs text-muted-foreground">+3</span>
                    </div>
                    <span className="text-xs text-primary font-medium">starts in 3 minutes</span>
                  </div>
                </div>
              </div>
              <Button size="sm" className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white text-xs">
                🎥 Join Meeting
              </Button>
            </div>
          </div>
        </Card>

        {/* Log Time Card */}
        <Card className="p-5 bg-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-sm">Log Time</h3>
              <p className="text-xs text-muted-foreground">12 December 2030</p>
            </div>
            <Button size="sm" className="h-7 bg-primary hover:bg-primary/90 text-xs">
              ⏱️ Clock In
            </Button>
          </div>

          <div className="flex justify-center py-8">
            <div className="relative h-32 w-32">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-border"
                />
                {/* Clock marks */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 - 90) * (Math.PI / 180)
                  const x1 = 50 + 38 * Math.cos(angle)
                  const y1 = 50 + 38 * Math.sin(angle)
                  const x2 = 50 + 42 * Math.cos(angle)
                  const y2 = 50 + 42 * Math.sin(angle)
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-muted-foreground"
                    />
                  )
                })}
                {/* Hour hand */}
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="25"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-foreground"
                />
                {/* Minute hand */}
                <line
                  x1="50"
                  y1="50"
                  x2="70"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-muted-foreground"
                />
                {/* Center dot */}
                <circle cx="50" cy="50" r="3" fill="currentColor" className="text-primary" />
              </svg>
            </div>
          </div>
        </Card>

        {/* Summary of Work Card */}
        <Card className="p-5 bg-card">
          <div className="mb-4">
            <h3 className="font-semibold text-sm">Summary of Work</h3>
            <p className="text-xs text-muted-foreground">Review your task progress</p>
          </div>

          <div className="flex justify-center items-end gap-1 pt-4 h-32">
            {[40, 60, 45, 80, 55, 70, 50, 65, 75, 45, 85, 60, 70, 55, 80, 65].map((height, index) => (
              <div key={index} className="w-3 rounded-t bg-green-500" style={{ height: `${height}%` }} />
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

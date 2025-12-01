import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star, MessageCircle, FileText, Clock, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 md:px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
          >
            <span className="mr-2">📈</span> Revolutionize Your Workflow Now
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            AI-Powered <span className="text-primary">Task Automation</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Boost productivity and streamline workflows with our intelligent task management solution.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Make a Task
            </Button>
            <Button size="lg" variant="outline" className="group bg-transparent">
              Preview Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>4.5/5 stars on G2 for Task Automation</span>
          </div>
        </div>

        {/* Right side - Cards */}
        <div className="relative">
          <div className="grid gap-4">
            {/* Top row cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Task Card */}
              <Card className="p-4 space-y-4 bg-card shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge className="bg-blue-500 text-white text-xs">Wireframes</Badge>
                    <Badge variant="outline" className="text-xs text-primary border-primary">
                      UX
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <FileText className="h-3 w-3" /> BDG - 21
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-sm">Basic Wireframes for Task Automation</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Please include a detailed design brief and wireframes in your submission.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="flex h-5 w-5 items-center justify-center rounded bg-primary/10">
                    <span className="text-primary text-[10px] font-bold">T</span>
                  </div>
                  <span>Tasky</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">80%</span>
                  </div>
                  <Progress value={80} className="h-1.5" />
                </div>

                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">📝 Brief</span>
                  <span className="flex items-center gap-1">📋 Client's notes</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" /> 20
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="h-3 w-3" /> 4
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarImage src="/professional-woman-face.png" />
                        <AvatarFallback>U1</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarImage src="/man-face-professional.jpg" />
                        <AvatarFallback>U2</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarImage src="/person-face-professional.jpg" />
                        <AvatarFallback>U3</AvatarFallback>
                      </Avatar>
                    </div>
                    <span className="text-xs text-muted-foreground">+3</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">📅 Due to 18 Aug</span>
                  </div>
                </div>
              </Card>

              {/* User Profile Card */}
              <Card className="p-4 space-y-4 bg-card shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/professional-man-red-hair.jpg" />
                      <AvatarFallback>AX</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">Alex</p>
                      <p className="text-xs text-muted-foreground">UI UX Design</p>
                    </div>
                  </div>
                  <Button size="sm" className="h-7 bg-green-500 hover:bg-green-600 text-white text-xs">
                    💬 Chat
                  </Button>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <FileText className="h-3 w-3" /> 21 Task
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 36h 12m
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" /> 72%
                  </span>
                </div>

                {/* File Attachment Section */}
                <div className="border rounded-lg p-3 space-y-2">
                  <p className="text-xs font-medium">File Attachment</p>
                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold">
                        PDF
                      </div>
                      <div>
                        <p className="text-xs font-medium">Mind Mapping 01.pdf</p>
                        <p className="text-[10px] text-muted-foreground">4.5MB</p>
                      </div>
                    </div>
                    <div className="flex gap-2 text-muted-foreground">
                      <button className="hover:text-foreground">⬇️</button>
                      <button className="hover:text-foreground">🗑️</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded bg-orange-100 flex items-center justify-center text-orange-500 text-xs font-bold">
                        PPT
                      </div>
                      <div>
                        <p className="text-xs font-medium">User Flow Diagram.ppt</p>
                        <p className="text-[10px] text-muted-foreground">4.5MB</p>
                      </div>
                    </div>
                    <div className="flex gap-2 text-muted-foreground">
                      <button className="hover:text-foreground">⬇️</button>
                      <button className="hover:text-foreground">🗑️</button>
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="border rounded-lg p-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-muted-foreground">Task Completion</p>
                      <p className="text-2xl font-bold text-primary">1.234</p>
                      <div className="flex items-center gap-1 text-[10px] text-green-500">
                        <span>↑ +8%</span>
                        <div className="h-4 w-16">
                          <svg viewBox="0 0 60 20" className="w-full h-full">
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              points="0,15 10,12 20,14 30,8 40,10 50,5 60,8"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">Distribution</p>
                      <p className="text-2xl font-bold">456</p>
                      <div className="flex items-center gap-1 text-[10px] text-red-500">
                        <span>↓ -11%</span>
                        <div className="h-4 w-16">
                          <svg viewBox="0 0 60 20" className="w-full h-full">
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              points="0,8 10,5 20,10 30,8 40,12 50,14 60,15"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

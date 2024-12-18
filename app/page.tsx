import Image from "next/image"
import { Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { ClubTryouts } from "./components/club-tryouts"
import { NavigationMenu } from "./components/navigation-menu"
import { SiteFooter } from "./components/site-footer"
import { YouthCamps } from "./components/youth-camps"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Contact Bar */}
      <div className="bg-primary px-4 py-2 text-primary-foreground">
        <div className="container flex items-center justify-end gap-2">
          <Phone className="h-4 w-4" />
          <span className="text-sm font-medium">
            Questions? Call us: 204-471-1111 EXT. 1
          </span>
        </div>
      </div>

      {/* Navigation */}
      <NavigationMenu />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  UNLOCK EXCLUSIVE VOLLEYBALL BENEFITS!
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join Volleyball Winnipeg and gain access to premium training,
                  early registration, and special discounts—all while being part
                  of a community that's dedicated to your growth.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="font-bold">
                  Register Today
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span className="font-bold">Only 50 memberships available</span>
                <span className="rounded-full bg-primary/10 px-2 py-1 text-sm font-semibold">
                  Limited Time
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/women.jpg"
                alt="Volleyball players"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Cards */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Subscribe to Our Programs
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/train_program.jpg"
                  alt="Training program"
                  width={400}
                  height={300}
                  className="mb-4 rounded-lg object-cover"
                />
                <h3 className="mb-2 text-xl font-bold">Training Programs</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Expert-led volleyball training programs for all skill levels.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/fit.jpg"
                  alt="Fitness program"
                  width={400}
                  height={300}
                  className="mb-4 rounded-lg object-cover"
                />
                <h3 className="mb-2 text-xl font-bold">
                  Fitness & Conditioning
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Specialized fitness programs designed for volleyball players.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/team.jpeg"
                  alt="Team events"
                  width={400}
                  height={300}
                  className="mb-4 rounded-lg object-cover"
                />
                <h3 className="mb-2 text-xl font-bold">Team Events</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Regular tournaments and team building activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Register for Our Newsletter
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Don't miss any of our upcoming blogs. Receive our DISCOUNTS &
                SPECIAL OFFERS.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="max-w-lg flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <main>
        <ClubTryouts />
        <YouthCamps />
      </main>
      <SiteFooter />
    </div>
  )
}

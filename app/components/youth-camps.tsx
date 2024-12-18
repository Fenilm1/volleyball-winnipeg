import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function YouthCamps() {
  const camps = [
    {
      title: "YOUTH ACADEMY",
      description: "for beginners",
      age: "7-12 years old",
      image: "/youth-academy.jpg",
    },
    {
      title: "SKILLS CAMPS",
      description: "for beginners-intermediary players",
      age: "12-18 years old",
      image: "/skills-camps.jpg",
    },
    {
      title: "SEASONAL CAMPS",
      description: "Boys & Girls in Grades 7-12",
      age: "",
      image: "/seasonal-camps.jpg",
    },
    {
      title: "ELITE ACADEMY",
      description: "Boys & Girls in Grades 7-12",
      age: "",
      image: "/elite-academy.jpg",
    },
    {
      title: "DROP IN",
      description: "for beginners-intermediary players",
      age: "12-18 years old",
      image: "/drop-in.jpg",
    },
    {
      title: "PRIVATE VOLLEYBALL LESSONS",
      description: "Available year-round",
      age: "",
      image: "/private-lessons.jpg",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-blue-600">YOUTH CAMPS</h2>
          <p className="text-2xl font-bold">FOR BOYS & GIRLS IN GRADES 3-12</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {camps.map((camp) => (
            <Card key={camp.title} className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={camp.image}
                  alt={camp.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">{camp.title}</h3>
                    <p className="text-sm opacity-90">{camp.description}</p>
                    {camp.age && (
                      <p className="text-sm opacity-90">{camp.age}</p>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <Button className="w-full" asChild>
                  <Link href="/">REGISTER NOW!</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

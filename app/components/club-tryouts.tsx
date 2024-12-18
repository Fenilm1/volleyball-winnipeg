import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ClubTryouts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative aspect-video">
            <Image
              src="/volleyball-tryouts.jpg"
              alt="Club Tryouts"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 rounded-lg">
              <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                CLUB TRYOUTS
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-blue-600">
              INTERESTED IN CLUB VOLLEYBALL?
            </h2>
            <div className="space-y-2">
              <p className="text-lg">
                <span className="font-bold">VISION VOLLEYBALL CLUB</span> will
                be hosting <span className="font-bold">THREE</span> teams per
                age class (13/14U and 15/16U)
              </p>
              <p className="text-lg">
                <span className="font-bold">VISION ELITE</span> will be hosting{" "}
                <span className="font-bold">ONE</span> team per age class
                (12u-18u)
              </p>
            </div>
            <div className="pt-4">
              <Link href="/">
                <Button size="lg" className="font-bold">
                  Visit our TRYOUTS PAGE!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Facebook, Instagram, Mail, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="container px-4 py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              VOLLEYBALL WINNIPEG
            </h3>
            <div className="space-y-2">
              <h4 className="font-bold">OUR ADDRESS:</h4>
              <p>3 Myles Robinson Way</p>
              <p>Winnipeg, Manitoba, Canada</p>
              <p>R3X 1M6</p>
              <div className="pt-4">
                <h4 className="font-bold">CALL US:</h4>
                <p>(204) 471-1111</p>
              </div>
            </div>
            <div className="pt-6">
              <h4 className="font-bold text-blue-600 mb-4">CONNECT WITH US!</h4>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-blue-600">
                  <Mail className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-blue-600">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-blue-600">
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-blue-600">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">SITE MAP</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold mb-2">Our programs:</h4>
                <ul className="space-y-2">
                  {[
                    "Youth Academy",
                    "Elite Volleyball Academy",
                    "Skill Camps",
                    "Seasonal Camps",
                    "Drop-in Camps",
                    "Private Sessions",
                  ].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-blue-600">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Our leagues:</h4>
                <ul className="space-y-2">
                  {[
                    "Youth League",
                    "Adult Co-Ed League",
                    "Adult Men's League",
                  ].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-blue-600">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Our clubs:</h4>
                <ul className="space-y-2">
                  {[
                    "Vision Elite Volleyball Club",
                    "Vision Volleyball Club",
                    "Warriors Club Volleyball",
                  ].map((item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-blue-600">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Register Today!",
                "Calendar",
                "Contact Us",
                "VISION Store",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <h4 className="font-bold mb-2">Resources:</h4>
              <ul className="space-y-2">
                {[
                  "Athlete Resources",
                  "Coach Resources",
                  "Parent Resources",
                  "Volunteer Resources",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-blue-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Terms and Policies:</h3>
            <ul className="space-y-2">
              {[
                "Waiver Form",
                "Refund Policy",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container px-4 py-6 text-center text-sm">
          <p>
            This website is powered by SportsEngine's{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Sports Relationship Management
            </Link>{" "}
            (SRM) software, but is owned by and subject to the Volleyball
            Winnipeg privacy policy.
          </p>
          <p className="mt-2">
            ©2024{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              SportsEngine, Inc.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

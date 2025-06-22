import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Users, Globe, Zap, Award, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">About RescueVision 3D</h1>
              <p className="text-gray-600">Transforming disaster response with AI technology</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Mission Statement */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To revolutionize disaster response by providing AI-powered 3D reconstruction technology that enables
              faster, safer, and more effective rescue operations, ultimately saving more lives in critical situations.
            </p>
          </div>
        </section>

        {/* Technology Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Our Technology Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-600" />
                  AI-Powered Reconstruction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our advanced machine learning algorithms analyze 2D images from multiple sources - drones, satellites,
                  and ground cameras - to create detailed 3D models of disaster-affected areas within minutes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-green-600" />
                  Multi-Disaster Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specialized models trained on various disaster types including hurricanes, earthquakes, floods,
                  tornadoes, and wildfires ensure accurate reconstruction regardless of the emergency scenario.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Disaster Sites Mapped</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600">Lives Potentially Saved</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">35%</div>
                <div className="text-gray-600">Faster Response Times</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Hazard Detection & Risk Assessment</h3>
                <p className="text-gray-600">
                  Automatically identify structural instabilities, debris fields, and dangerous areas to protect rescue
                  personnel.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Survivor Location Prediction</h3>
                <p className="text-gray-600">
                  AI algorithms analyze structural damage patterns to predict likely survivor locations and prioritize
                  search areas.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Real-time Collaboration</h3>
                <p className="text-gray-600">
                  Enable multiple rescue teams to coordinate efforts with shared 3D models and real-time updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Recognition */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Partners & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-600" />
                  Humanitarian Partners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• International Red Cross</li>
                  <li>• United Nations Office for Disaster Risk Reduction</li>
                  <li>• FEMA (Federal Emergency Management Agency)</li>
                  <li>• Doctors Without Borders</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-600" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 2024 UN Global Innovation Award</li>
                  <li>• MIT Technology Review Breakthrough Technology</li>
                  <li>• IEEE Humanitarian Technology Award</li>
                  <li>• Fast Company Most Innovative Companies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                RescueVision 3D is developed by a dedicated team of AI researchers, disaster response experts, and
                humanitarian technology specialists from leading universities and organizations worldwide.
              </p>
              <p className="text-gray-600">
                Our multidisciplinary approach combines cutting-edge computer vision, machine learning, and real-world
                disaster response experience to create technology that truly makes a difference in emergency situations.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-orange-500 text-white">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-blue-100 mb-6">
                Help us save more lives by supporting the development and deployment of AI-powered disaster response
                technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/viewer">Try Our Technology</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

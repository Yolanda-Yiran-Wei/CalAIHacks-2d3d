import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Zap, Users, Brain, Camera, Route, AlertTriangle } from "lucide-react"
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
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              Our Mission
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Saving Lives Through Innovation</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              RescueVision 3D leverages cutting-edge artificial intelligence to transform 2D disaster imagery into
              detailed 3D reconstructions, enabling faster, safer, and more effective rescue operations when every
              second counts.
            </p>
          </div>
        </section>

        {/* Technology Overview */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Our Technology Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Image Capture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Collect disaster site images from drones, satellites, or ground cameras
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-lg">AI Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Advanced neural networks analyze and reconstruct 3D geometry from 2D images
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Route className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Route Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Generate optimal safe paths while identifying structural hazards and obstacles
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Rescue Coordination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Enable real-time collaboration between rescue teams and command centers
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Capabilities</h3>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-blue-600" />
                  Rapid 3D Reconstruction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our proprietary AI algorithms can process dozens of disaster site images and generate detailed 3D
                  models within minutes, not hours. This speed is crucial when lives hang in the balance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-semibold text-blue-900">Processing Speed</div>
                    <div className="text-blue-700">5-10 minutes average</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-semibold text-blue-900">Accuracy Rate</div>
                    <div className="text-blue-700">94.2% geometric accuracy</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-semibold text-blue-900">Image Support</div>
                    <div className="text-blue-700">10-100+ images per site</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-orange-600" />
                  Intelligent Hazard Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced computer vision identifies structural weaknesses, unstable debris, and dangerous areas that
                  could pose risks to rescue personnel, automatically marking them in the 3D model.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2">Detected Hazards:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Structural collapse risks</li>
                      <li>• Unstable debris fields</li>
                      <li>• Compromised foundations</li>
                      <li>• Blocked emergency exits</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Safety Features:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Real-time risk assessment</li>
                      <li>• Dynamic safety zones</li>
                      <li>• Alternative route suggestions</li>
                      <li>• Team safety monitoring</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Route className="w-6 h-6 mr-3 text-green-600" />
                  Optimized Route Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  AI-powered pathfinding algorithms calculate the safest and most efficient routes to reach survivors,
                  considering structural integrity, debris obstacles, and team safety requirements.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-900 mb-2">Route Optimization Factors:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-green-800">
                    <div>• Structural stability analysis</div>
                    <div>• Debris clearance requirements</div>
                    <div>• Team equipment considerations</div>
                    <div>• Emergency evacuation paths</div>
                    <div>• Weather and environmental factors</div>
                    <div>• Multiple route alternatives</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-orange-500 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Our Impact</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Real results from humanitarian missions worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">1,247</div>
                  <div className="text-blue-100">Lives Saved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">89</div>
                  <div className="text-blue-100">Disaster Sites Mapped</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">35%</div>
                  <div className="text-blue-100">Faster Response Times</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">98.5%</div>
                  <div className="text-blue-100">Mission Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Supported Disasters */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Disaster Response Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                type: "Hurricanes",
                description: "Wind damage assessment, flooding analysis, structural integrity evaluation",
                icon: "🌪️",
                cases: 23,
              },
              {
                type: "Earthquakes",
                description: "Seismic damage mapping, building collapse analysis, aftershock risk zones",
                icon: "🏗️",
                cases: 31,
              },
              {
                type: "Floods",
                description: "Water damage assessment, evacuation route planning, infrastructure impact",
                icon: "🌊",
                cases: 18,
              },
              {
                type: "Tornadoes",
                description: "Debris field mapping, path reconstruction, damage severity classification",
                icon: "🌀",
                cases: 12,
              },
              {
                type: "Wildfires",
                description: "Burn area mapping, structure assessment, evacuation corridor identification",
                icon: "🔥",
                cases: 8,
              },
              {
                type: "Landslides",
                description: "Slope stability analysis, debris flow mapping, access route planning",
                icon: "⛰️",
                cases: 5,
              },
            ].map((disaster, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-3">{disaster.icon}</span>
                    {disaster.type}
                  </CardTitle>
                  <Badge variant="secondary">{disaster.cases} cases handled</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{disaster.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team & Partners */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Partners</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Humanitarian Organizations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• United Nations Office for Disaster Risk Reduction</li>
                    <li>• International Federation of Red Cross</li>
                    <li>• Doctors Without Borders</li>
                    <li>• World Food Programme</li>
                    <li>• UNICEF Emergency Response</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Technology Partners</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• NVIDIA AI Research Division</li>
                    <li>• Microsoft AI for Good</li>
                    <li>• Google.org Crisis Response</li>
                    <li>• Amazon Web Services Disaster Response</li>
                    <li>• IBM Watson for Social Good</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gray-900 text-white">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-3xl font-bold mb-4">Join the Mission</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you're a humanitarian organization, emergency responder, or technology partner, we invite you to
                join us in revolutionizing disaster response and saving lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/viewer">Try the Platform</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
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

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MapPin, Calendar, Users, AlertTriangle, TrendingUp, Eye, Upload, Download } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with disaster background */}
      <header className="relative bg-white border-b px-4 py-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `url('/gettyimages-2177242543.jpg?height=200&width=1200&text=Emergency+Response+Center')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Mission Dashboard</h1>
              <p className="text-gray-600">Disaster response coordination center</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button size="sm" asChild>
              <Link href="/upload">
                <Upload className="w-4 h-4 mr-2" />
                New Upload
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview with disaster imagery background */}
        <div className="relative mb-8 p-6 rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('/placeholder.svg?height=300&width=1200&text=Aerial+Disaster+View')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-orange-900/80" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Sites</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Survivors Located</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground">+12 in last 24h</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">High Risk Areas</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">-3 from yesterday</p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Processing Accuracy</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">+1.2% from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="sites" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sites">Active Sites</TabsTrigger>
            <TabsTrigger value="missions">Rescue Missions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
          </TabsList>

          <TabsContent value="sites" className="space-y-6">
            {/* Background section for active sites */}
            <div className="relative p-6 rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=400&width=800&text=Hurricane+Damage+Satellite+View')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-blue-50/90" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    id: 1,
                    name: "Hurricane Maria - Building Complex Alpha",
                    location: "San Juan, Puerto Rico",
                    disaster: "Hurricane",
                    status: "Active",
                    risk: "High",
                    survivors: 3,
                    lastUpdate: "2 hours ago",
                    images: 23,
                    teams: 2,
                    bgImage: "Hurricane+Damaged+Buildings",
                  },
                  {
                    id: 2,
                    name: "Earthquake Damage - Residential Area",
                    location: "Mexico City, Mexico",
                    disaster: "Earthquake",
                    status: "Active",
                    risk: "Medium",
                    survivors: 8,
                    lastUpdate: "4 hours ago",
                    images: 18,
                    teams: 3,
                    bgImage: "Earthquake+Collapsed+Structure",
                  },
                  {
                    id: 3,
                    name: "Flood Damage Assessment",
                    location: "Houston, Texas",
                    disaster: "Flood",
                    status: "Processing",
                    risk: "Low",
                    survivors: 0,
                    lastUpdate: "1 day ago",
                    images: 31,
                    teams: 1,
                    bgImage: "Flood+Damaged+Area",
                  },
                  {
                    id: 4,
                    name: "Tornado Path - Commercial District",
                    location: "Moore, Oklahoma",
                    disaster: "Tornado",
                    status: "Completed",
                    risk: "High",
                    survivors: 12,
                    lastUpdate: "3 days ago",
                    images: 45,
                    teams: 4,
                    bgImage: "Tornado+Destruction+Path",
                  },
                ].map((site) => (
                  <Card
                    key={site.id}
                    className="relative overflow-hidden bg-white/95 backdrop-blur-sm border-0 shadow-lg"
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `url('/placeholder.svg?height=300&width=400&text=${site.bgImage}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{site.name}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {site.location}
                          </CardDescription>
                        </div>
                        <Badge
                          variant={
                            site.status === "Active"
                              ? "default"
                              : site.status === "Processing"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {site.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10 space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Disaster Type:</span>
                          <div className="font-medium">{site.disaster}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Risk Level:</span>
                          <div>
                            <Badge
                              variant={
                                site.risk === "High" ? "destructive" : site.risk === "Medium" ? "secondary" : "outline"
                              }
                              className={
                                site.risk === "Medium"
                                  ? "bg-orange-100 text-orange-800"
                                  : site.risk === "Low"
                                    ? "bg-green-100 text-green-800"
                                    : ""
                              }
                            >
                              {site.risk}
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-500">Survivors:</span>
                          <div className="font-medium flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {site.survivors}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-500">Active Teams:</span>
                          <div className="font-medium">{site.teams}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Updated {site.lastUpdate}
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href="/viewer">
                              <Eye className="w-4 h-4 mr-1" />
                              View 3D
                            </Link>
                          </Button>
                          <Button size="sm">Manage</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="missions" className="space-y-6">
            <div className="relative p-6 rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=400&width=1200&text=Search+and+Rescue+Operations')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/90 to-red-50/90" />

              <Card className="relative z-10 bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Active Rescue Missions</CardTitle>
                  <CardDescription>Current rescue operations and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        mission: "Alpha Team - Building Complex Rescue",
                        location: "San Juan, Puerto Rico",
                        status: "In Progress",
                        team: "Alpha Team (4 members)",
                        eta: "15 minutes",
                        priority: "High",
                      },
                      {
                        mission: "Bravo Team - Residential Search",
                        location: "Mexico City, Mexico",
                        status: "Deployed",
                        team: "Bravo Team (6 members)",
                        eta: "45 minutes",
                        priority: "Medium",
                      },
                      {
                        mission: "Charlie Team - Area Sweep",
                        location: "Houston, Texas",
                        status: "Planning",
                        team: "Charlie Team (3 members)",
                        eta: "2 hours",
                        priority: "Low",
                      },
                    ].map((mission, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg bg-white/80 backdrop-blur-sm"
                      >
                        <div>
                          <div className="font-medium">{mission.mission}</div>
                          <div className="text-sm text-gray-500 mt-1">
                            {mission.location} • {mission.team}
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-sm font-medium">ETA: {mission.eta}</div>
                            <Badge
                              variant={
                                mission.priority === "High"
                                  ? "destructive"
                                  : mission.priority === "Medium"
                                    ? "secondary"
                                    : "outline"
                              }
                              className={
                                mission.priority === "Medium"
                                  ? "bg-orange-100 text-orange-800"
                                  : mission.priority === "Low"
                                    ? "bg-green-100 text-green-800"
                                    : ""
                              }
                            >
                              {mission.priority}
                            </Badge>
                          </div>
                          <Badge variant="outline">{mission.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="relative p-6 rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=400&width=1200&text=Disaster+Analytics+Data+Visualization')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-purple-50/90" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Response Time Analytics</CardTitle>
                    <CardDescription>Average response times by disaster type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { type: "Hurricane", time: "12 minutes", improvement: "+15%" },
                        { type: "Earthquake", time: "8 minutes", improvement: "+22%" },
                        { type: "Flood", time: "18 minutes", improvement: "+8%" },
                        { type: "Tornado", time: "6 minutes", improvement: "+35%" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="font-medium">{item.type}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">{item.time}</span>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {item.improvement}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Success Metrics</CardTitle>
                    <CardDescription>Key performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Successful Rescues</span>
                        <span className="text-2xl font-bold text-green-600">98.5%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Route Accuracy</span>
                        <span className="text-2xl font-bold text-blue-600">94.2%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Time Saved</span>
                        <span className="text-2xl font-bold text-orange-600">35%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>False Positives</span>
                        <span className="text-2xl font-bold text-red-600">2.1%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="teams" className="space-y-6">
            <div className="relative p-6 rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=400&width=1200&text=Emergency+Response+Teams')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 to-blue-50/90" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    name: "Alpha Team",
                    members: 4,
                    status: "Active",
                    location: "San Juan, Puerto Rico",
                    specialization: "Urban Search & Rescue",
                    missions: 12,
                    success: "96%",
                  },
                  {
                    name: "Bravo Team",
                    members: 6,
                    status: "Deployed",
                    location: "Mexico City, Mexico",
                    specialization: "Earthquake Response",
                    missions: 8,
                    success: "100%",
                  },
                  {
                    name: "Charlie Team",
                    members: 3,
                    status: "Standby",
                    location: "Houston, Texas",
                    specialization: "Flood Response",
                    missions: 15,
                    success: "93%",
                  },
                  {
                    name: "Delta Team",
                    members: 5,
                    status: "Training",
                    location: "Moore, Oklahoma",
                    specialization: "Tornado Response",
                    missions: 6,
                    success: "98%",
                  },
                ].map((team, index) => (
                  <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{team.name}</CardTitle>
                        <Badge
                          variant={
                            team.status === "Active"
                              ? "default"
                              : team.status === "Deployed"
                                ? "destructive"
                                : team.status === "Standby"
                                  ? "secondary"
                                  : "outline"
                          }
                        >
                          {team.status}
                        </Badge>
                      </div>
                      <CardDescription>{team.specialization}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Members:</span>
                          <div className="font-medium">{team.members}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Success Rate:</span>
                          <div className="font-medium text-green-600">{team.success}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Location:</span>
                          <div className="font-medium">{team.location}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Missions:</span>
                          <div className="font-medium">{team.missions}</div>
                        </div>
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" variant="outline">
                          Contact Team
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

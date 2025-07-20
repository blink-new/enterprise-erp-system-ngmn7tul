import { useState } from 'react'
import { 
  LayoutDashboard, 
  DollarSign, 
  Users, 
  Package, 
  ShoppingCart, 
  Truck, 
  Factory, 
  UserCheck, 
  FolderKanban, 
  BarChart3, 
  Settings,
  Bell,
  Search,
  Menu,
  ChevronDown,
  Plus,
  Filter,
  Download,
  TrendingUp,
  TrendingDown,
  Activity,
  Calendar,
  Clock
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Badge } from './components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Separator } from './components/ui/separator'
import { Progress } from './components/ui/progress'

const modules = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-600' },
  { id: 'finance', name: 'Finance', icon: DollarSign, color: 'text-green-600' },
  { id: 'hr', name: 'Human Resources', icon: Users, color: 'text-purple-600' },
  { id: 'inventory', name: 'Inventory', icon: Package, color: 'text-orange-600' },
  { id: 'sales', name: 'Sales', icon: ShoppingCart, color: 'text-pink-600' },
  { id: 'procurement', name: 'Procurement', icon: Truck, color: 'text-indigo-600' },
  { id: 'manufacturing', name: 'Manufacturing', icon: Factory, color: 'text-gray-600' },
  { id: 'crm', name: 'CRM', icon: UserCheck, color: 'text-cyan-600' },
  { id: 'projects', name: 'Projects', icon: FolderKanban, color: 'text-yellow-600' },
  { id: 'reports', name: 'Reports', icon: BarChart3, color: 'text-red-600' },
]

const kpiData = [
  { title: 'Total Revenue', value: '$2,847,392', change: '+12.5%', trend: 'up', icon: DollarSign },
  { title: 'Active Projects', value: '47', change: '+3', trend: 'up', icon: FolderKanban },
  { title: 'Inventory Value', value: '$1,234,567', change: '-2.1%', trend: 'down', icon: Package },
  { title: 'Employee Count', value: '284', change: '+8', trend: 'up', icon: Users },
]

const recentActivities = [
  { action: 'New purchase order created', user: 'Sarah Chen', time: '2 minutes ago', type: 'procurement' },
  { action: 'Invoice #INV-2024-001 paid', user: 'System', time: '15 minutes ago', type: 'finance' },
  { action: 'Project milestone completed', user: 'Mike Johnson', time: '1 hour ago', type: 'project' },
  { action: 'New employee onboarded', user: 'HR Team', time: '2 hours ago', type: 'hr' },
  { action: 'Inventory alert: Low stock', user: 'System', time: '3 hours ago', type: 'inventory' },
]

function App() {
  const [activeModule, setActiveModule] = useState('dashboard')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const activeModuleData = modules.find(m => m.id === activeModule)

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`bg-white border-r border-border transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            {!sidebarCollapsed && (
              <div>
                <h1 className="font-semibold text-lg">Enterprise ERP</h1>
                <p className="text-xs text-muted-foreground">Business Management</p>
              </div>
            )}
          </div>
        </div>
        
        <Separator />
        
        <nav className="p-2">
          {modules.map((module) => {
            const Icon = module.icon
            const isActive = activeModule === module.id
            
            return (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                  isActive 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-secondary text-foreground'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : module.color}`} />
                {!sidebarCollapsed && (
                  <span className="font-medium">{module.name}</span>
                )}
              </button>
            )
          })}
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <Separator className="mb-4" />
          <button
            onClick={() => setActiveModule('settings')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-secondary transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-600" />
            {!sidebarCollapsed && (
              <span className="font-medium">Administration</span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              
              <div className="flex items-center gap-2">
                {activeModuleData && (
                  <>
                    <activeModuleData.icon className={`w-6 h-6 ${activeModuleData.color}`} />
                    <h2 className="text-xl font-semibold">{activeModuleData.name}</h2>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="pl-10 w-80"
                />
              </div>
              
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
              
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/api/placeholder/32/32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Administrator</p>
                </div>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          {activeModule === 'dashboard' && (
            <div className="space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpiData.map((kpi, index) => {
                  const Icon = kpi.icon
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          {kpi.title}
                        </CardTitle>
                        <Icon className="w-4 h-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{kpi.value}</div>
                        <div className="flex items-center gap-1 text-xs">
                          {kpi.trend === 'up' ? (
                            <TrendingUp className="w-3 h-3 text-green-600" />
                          ) : (
                            <TrendingDown className="w-3 h-3 text-red-600" />
                          )}
                          <span className={kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                            {kpi.change}
                          </span>
                          <span className="text-muted-foreground">from last month</span>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activities */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Activities</CardTitle>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.action}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                              <span>by {activity.user}</span>
                              <span>•</span>
                              <span>{activity.time}</span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {activity.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Frequently used operations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Invoice
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Employee
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      New Purchase Order
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Project
                    </Button>
                    <Separator />
                    <Button className="w-full justify-start" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Reports
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Project Status & Performance */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Status Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Website Redesign</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Mobile App Development</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>ERP Implementation</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Data Migration</span>
                        <span>30%</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>System Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-green-600" />
                        <span className="text-sm">System Status</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Operational</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Uptime</span>
                      </div>
                      <span className="text-sm font-medium">99.9%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">Last Backup</span>
                      </div>
                      <span className="text-sm font-medium">2 hours ago</span>
                    </div>
                    <Separator />
                    <div className="text-center">
                      <Button variant="outline" size="sm">
                        View Detailed Metrics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Other Module Placeholders */}
          {activeModule !== 'dashboard' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                {activeModuleData && <activeModuleData.icon className={`w-8 h-8 ${activeModuleData.color}`} />}
              </div>
              <h3 className="text-lg font-semibold mb-2">{activeModuleData?.name} Module</h3>
              <p className="text-muted-foreground mb-6">
                This module will contain all {activeModuleData?.name.toLowerCase()} related functionality including data management, reporting, and workflow automation.
              </p>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
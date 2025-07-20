import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  DollarSign, 
  Users, 
  Package, 
  ShoppingCart, 
  Truck, 
  Factory, 
  UserCheck, 
  FolderOpen, 
  BarChart3,
  Settings,
  Search,
  Bell,
  User,
  Menu,
  X,
  TrendingUp,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Download,
  Upload,
  Filter,
  Calendar,
  Mail,
  Phone,
  Globe,
  Zap,
  Target,
  Award,
  Briefcase
} from 'lucide-react';

const modules = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard, color: 'from-blue-500 to-blue-600' },
  { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-emerald-500 to-emerald-600' },
  { id: 'hr', name: 'Human Resources', icon: Users, color: 'from-purple-500 to-purple-600' },
  { id: 'inventory', name: 'Inventory', icon: Package, color: 'from-amber-500 to-orange-500' },
  { id: 'sales', name: 'Sales', icon: ShoppingCart, color: 'from-pink-500 to-rose-500' },
  { id: 'procurement', name: 'Procurement', icon: Truck, color: 'from-cyan-500 to-blue-500' },
  { id: 'manufacturing', name: 'Manufacturing', icon: Factory, color: 'from-indigo-500 to-purple-500' },
  { id: 'crm', name: 'CRM', icon: UserCheck, color: 'from-teal-500 to-cyan-500' },
  { id: 'projects', name: 'Projects', icon: FolderOpen, color: 'from-violet-500 to-purple-500' },
  { id: 'reports', name: 'Reports', icon: BarChart3, color: 'from-red-500 to-pink-500' },
];

const kpiCards = [
  { 
    title: 'Total Revenue', 
    value: '$2.4M', 
    change: '+12.5%', 
    icon: DollarSign, 
    gradient: 'kpi-card-1',
    trend: 'up'
  },
  { 
    title: 'Active Projects', 
    value: '47', 
    change: '+8.2%', 
    icon: FolderOpen, 
    gradient: 'kpi-card-2',
    trend: 'up'
  },
  { 
    title: 'Inventory Value', 
    value: '$890K', 
    change: '-2.1%', 
    icon: Package, 
    gradient: 'kpi-card-3',
    trend: 'down'
  },
  { 
    title: 'Total Employees', 
    value: '324', 
    change: '+5.7%', 
    icon: Users, 
    gradient: 'kpi-card-4',
    trend: 'up'
  },
];

const recentActivities = [
  { id: 1, type: 'sale', message: 'New order #12345 received from Acme Corp', time: '2 min ago', icon: ShoppingCart, color: 'text-emerald-600' },
  { id: 2, type: 'inventory', message: 'Low stock alert: Product SKU-789', time: '15 min ago', icon: AlertCircle, color: 'text-amber-600' },
  { id: 3, type: 'hr', message: 'New employee onboarding completed', time: '1 hour ago', icon: Users, color: 'text-blue-600' },
  { id: 4, type: 'finance', message: 'Invoice #INV-2024-001 paid', time: '2 hours ago', icon: DollarSign, color: 'text-purple-600' },
  { id: 5, type: 'project', message: 'Project milestone achieved: Phase 2', time: '3 hours ago', icon: Target, color: 'text-pink-600' },
];

const quickActions = [
  { name: 'New Order', icon: Plus, color: 'from-blue-500 to-purple-600' },
  { name: 'Add Employee', icon: Users, color: 'from-emerald-500 to-teal-600' },
  { name: 'Generate Report', icon: BarChart3, color: 'from-amber-500 to-orange-600' },
  { name: 'Create Project', icon: FolderOpen, color: 'from-pink-500 to-rose-600' },
];

const projects = [
  { name: 'ERP Implementation', progress: 85, status: 'On Track', color: 'from-emerald-400 to-emerald-500' },
  { name: 'Website Redesign', progress: 60, status: 'In Progress', color: 'from-blue-400 to-blue-500' },
  { name: 'Mobile App Development', progress: 30, status: 'Starting', color: 'from-amber-400 to-orange-500' },
  { name: 'Data Migration', progress: 95, status: 'Almost Done', color: 'from-purple-400 to-purple-500' },
];

const systemStatus = [
  { name: 'Database', status: 'online', uptime: '99.9%', color: 'status-online' },
  { name: 'API Gateway', status: 'online', uptime: '99.8%', color: 'status-online' },
  { name: 'File Storage', status: 'warning', uptime: '98.5%', color: 'status-warning' },
  { name: 'Email Service', status: 'online', uptime: '99.7%', color: 'status-online' },
];

function App() {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full sidebar-gradient transition-all duration-300 z-50 ${
        sidebarCollapsed ? 'w-16' : 'w-64'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            {!sidebarCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">ERP System</h1>
                  <p className="text-xs text-white/70">Enterprise Solution</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              {sidebarCollapsed ? <Menu className="w-5 h-5 text-white" /> : <X className="w-5 h-5 text-white" />}
            </button>
          </div>

          <nav className="space-y-2">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                    activeModule === module.id
                      ? 'bg-white/20 backdrop-blur-sm shadow-lg'
                      : 'hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${module.color} shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {!sidebarCollapsed && (
                    <span className="text-white font-medium">{module.name}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        {/* Header */}
        <header className="header-gradient border-b border-white/20 p-4 sticky top-0 z-40">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {modules.find(m => m.id === activeModule)?.name || 'Dashboard'}
              </h2>
              <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                />
              </div>
              
              <button className="relative p-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/90 transition-all duration-200 hover:scale-105">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center shadow-lg">3</span>
              </button>
              
              <button className="flex items-center space-x-2 p-2 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/90 transition-all duration-200 hover:scale-105">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">John Doe</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activeModule === 'dashboard' && (
            <div className="space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpiCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <div key={index} className={`${card.gradient} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`flex items-center space-x-1 text-white/90 ${
                          card.trend === 'up' ? 'text-white' : 'text-white/70'
                        }`}>
                          <TrendingUp className={`w-4 h-4 ${card.trend === 'down' ? 'rotate-180' : ''}`} />
                          <span className="text-sm font-medium">{card.change}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white/80 text-sm font-medium mb-1">{card.title}</h3>
                        <p className="text-3xl font-bold text-white">{card.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <div className="lg:col-span-2 gradient-card p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Recent Activity</h3>
                    <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">View All</button>
                  </div>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => {
                      const Icon = activity.icon;
                      return (
                        <div key={activity.id} className="activity-item p-4 rounded-xl">
                          <div className="flex items-start space-x-4">
                            <div className={`p-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 ${activity.color}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-800 font-medium">{activity.message}</p>
                              <p className="text-gray-500 text-sm mt-1">{activity.time}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="gradient-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Quick Actions</h3>
                  <div className="space-y-3">
                    {quickActions.map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <button
                          key={index}
                          className={`w-full flex items-center space-x-3 p-4 bg-gradient-to-r ${action.color} text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{action.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Project Progress */}
                <div className="gradient-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">Project Progress</h3>
                  <div className="space-y-4">
                    {projects.map((project, index) => (
                      <div key={index} className="activity-item p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-800">{project.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${project.color} transition-all duration-500`}
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-600">{project.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Status */}
                <div className="gradient-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">System Status</h3>
                  <div className="space-y-4">
                    {systemStatus.map((system, index) => (
                      <div key={index} className="activity-item p-4 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              system.status === 'online' ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' :
                              system.status === 'warning' ? 'bg-gradient-to-r from-amber-400 to-orange-500' :
                              'bg-gradient-to-r from-red-400 to-red-500'
                            } shadow-lg`} />
                            <span className="font-medium text-gray-800">{system.name}</span>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${system.color} shadow-lg`}>
                              {system.status.charAt(0).toUpperCase() + system.status.slice(1)}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">{system.uptime} uptime</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Module Placeholders */}
          {activeModule !== 'dashboard' && (
            <div className="gradient-card p-8 rounded-2xl text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                {React.createElement(modules.find(m => m.id === activeModule)?.icon || LayoutDashboard, {
                  className: "w-10 h-10 text-white"
                })}
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                {modules.find(m => m.id === activeModule)?.name} Module
              </h3>
              <p className="text-gray-600 mb-6">This module is under development. Full functionality coming soon!</p>
              <button className="gradient-button px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Configure Module
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
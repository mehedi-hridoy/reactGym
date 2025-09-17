import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';

const GymAnalyticsDashboard = () => {
  const [activeChart, setActiveChart] = useState('overview');

  const gymStats = [
    {
      "id": 1,
      "name": "Downtown Fitness Club",
      "total_members": 320,
      "active_members": 280,
      "trainers": 12,
      "monthly_revenue_usd": 14500,
      "group_classes_per_week": 18,
      "avg_member_age": 29
    },
    {
      "id": 2,
      "name": "PowerHouse Gym",
      "total_members": 450,
      "active_members": 390,
      "trainers": 15,
      "monthly_revenue_usd": 21800,
      "group_classes_per_week": 22,
      "avg_member_age": 31
    },
    {
      "id": 3,
      "name": "Flex & Burn Studio",
      "total_members": 210,
      "active_members": 170,
      "trainers": 8,
      "monthly_revenue_usd": 9800,
      "group_classes_per_week": 12,
      "avg_member_age": 26
    },
    {
      "id": 4,
      "name": "Elite Performance Center",
      "total_members": 600,
      "active_members": 520,
      "trainers": 20,
      "monthly_revenue_usd": 32500,
      "group_classes_per_week": 28,
      "avg_member_age": 34
    },
    {
      "id": 5,
      "name": "Urban Strength Gym",
      "total_members": 280,
      "active_members": 240,
      "trainers": 10,
      "monthly_revenue_usd": 12600,
      "group_classes_per_week": 15,
      "avg_member_age": 27
    }
  ];

  const colors = {
    primary: '#8B5CF6',
    secondary: '#EC4899',
    accent: '#06B6D4',
    success: '#10B981',
    warning: '#F59E0B',
    gradient: ['#8B5CF6', '#EC4899', '#06B6D4', '#10B981', '#F59E0B']
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-800">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const chartTabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'members', label: 'Members', icon: '👥' },
    { id: 'revenue', label: 'Revenue', icon: '💰' },
    { id: 'performance', label: 'Performance', icon: '🎯' }
  ];

  const renderOverviewChart = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Members vs Revenue */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Members vs Revenue</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={gymStats}>
            <defs>
              <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.primary} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={colors.primary} stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.secondary} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={colors.secondary} stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="total_members"
              stroke={colors.primary}
              fillOpacity={1}
              fill="url(#colorMembers)"
              name="Total Members"
            />
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="monthly_revenue_usd"
              stroke={colors.secondary}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              name="Monthly Revenue ($)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Trainers Distribution */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Trainers Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={gymStats}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name.split(' ')[0]}: ${value}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="trainers"
            >
              {gymStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors.gradient[index % colors.gradient.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderMembersChart = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Membership Analytics</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={gymStats} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="total_members" fill={colors.primary} name="Total Members" radius={[4, 4, 0, 0]} />
          <Bar dataKey="active_members" fill={colors.success} name="Active Members" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const renderRevenueChart = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Revenue Analysis</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={gymStats} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="monthly_revenue_usd" 
            stroke={colors.secondary} 
            strokeWidth={3}
            dot={{ fill: colors.secondary, strokeWidth: 2, r: 6 }}
            name="Monthly Revenue ($)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const renderPerformanceChart = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Classes per Week */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Weekly Group Classes</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={gymStats}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="group_classes_per_week" fill={colors.accent} name="Classes per Week" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Average Age */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Average Member Age</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={gymStats}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="avg_member_age" 
              stroke={colors.warning} 
              strokeWidth={3}
              dot={{ fill: colors.warning, strokeWidth: 2, r: 6 }}
              name="Average Age"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderChart = () => {
    switch(activeChart) {
      case 'members': return renderMembersChart();
      case 'revenue': return renderRevenueChart();
      case 'performance': return renderPerformanceChart();
      default: return renderOverviewChart();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Gym Analytics 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Dashboard</span>
          </h1>
          <p className="text-gray-600">Comprehensive fitness center performance metrics</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {chartTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveChart(tab.id)}
                className={`px-6 py-3 mx-1 rounded-lg font-semibold transition-all duration-300 ${
                  activeChart === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

       

        {/* Charts */}
        <div className="mb-8">
          {renderChart()}
        </div>
      </div>
    </div>
  );
};

export default GymAnalyticsDashboard;
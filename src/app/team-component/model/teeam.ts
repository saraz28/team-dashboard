export interface Team {
  id: number;
  avatar: string;
  name: string;
  role: string;
  email: string;
  status: string;
  teamName: string;
  period: string;
  totalTasks: number;
  completedTasks: number;
  efficiencyRate: number;
  avgResolutionTime: number;
  satisfactionScore: number;
  goalAchievementRate: number;
  kpi: TeamKPI;
}
export interface TeamKPI {
  id: number;
  teamName: string;
  efficiencyRate: number;
  avgResolutionTime: number;
  satisfactionScore: number;
  goalAchievementRate: number;
}

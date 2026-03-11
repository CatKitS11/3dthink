// #### dashboard-ex type ####
export interface StatisticsCardData {
  icon: React.ReactNode;
  value: string;
  title: string;
  changePercentage: string;
}
 
export interface EarningData {
  img: string;
  platform: string;
  technologies: string;
  earnings: string;
  progressPercentage: number;
}
 
export interface TransactionItem {
  id: string;
  avatar: string;
  avatarFallback: string;
  name: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed' | 'processing';
  email: string;
  paidBy: string;
}
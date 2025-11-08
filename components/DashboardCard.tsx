import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { commonStyles } from '@/lib/design-system';

interface DashboardCardProps {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
    iconColor?: string;
}

/**
 * 仪表板导航卡片组件
 * 使用统一的设计系统
 */
export default function DashboardCard({ 
    title, 
    description, 
    href, 
    icon: Icon,
    iconColor = 'text-yellow-400' 
}: DashboardCardProps) {
    return (
        <Link 
            href={href}
            className={cn(
                commonStyles.card.interactive,
                'group relative overflow-hidden'
            )}
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-full blur-2xl transition-all duration-300 group-hover:scale-150" />
            
            <div className="relative z-10">
                <div className={cn(
                    'inline-flex p-3 rounded-lg bg-gray-800/50 border border-gray-700 mb-4',
                    iconColor
                )}>
                    <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-yellow-400 transition-colors">
                    {title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>
                
                <div className="mt-4 flex items-center text-yellow-400 text-sm font-medium">
                    <span className="group-hover:translate-x-1 transition-transform">
                        Explore
                    </span>
                    <svg 
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}

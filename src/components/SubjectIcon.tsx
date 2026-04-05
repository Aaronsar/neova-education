import {
  Ruler,
  FlaskConical,
  Dna,
  BarChart3,
  Globe,
  Monitor,
  Languages,
  Library,
  Settings,
  PenTool,
  Lightbulb,
  Map,
  Microscope,
  MessageCircle,
  Mic,
  BookOpen,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ruler: Ruler,
  'flask-conical': FlaskConical,
  dna: Dna,
  'bar-chart-3': BarChart3,
  globe: Globe,
  monitor: Monitor,
  languages: Languages,
  library: Library,
  settings: Settings,
  'pen-tool': PenTool,
  lightbulb: Lightbulb,
  map: Map,
  microscope: Microscope,
  'message-circle': MessageCircle,
  mic: Mic,
}

export function SubjectIcon({
  name,
  className = 'h-5 w-5',
}: {
  name: string
  className?: string
}) {
  const Icon = iconMap[name] || BookOpen
  return <Icon className={className} />
}

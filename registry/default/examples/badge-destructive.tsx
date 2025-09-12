import { Badge } from "@/components/ui/badge"

export default function BadgeDestructive() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full flex-wrap gap-2">
        <Badge variant="destructive">Destructive</Badge>
        
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="destructive"
        >
          99
        </Badge>
      </div>
    </div>
  )
}

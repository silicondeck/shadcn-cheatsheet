import { Badge } from "@/components/ui/badge"
import { BadgeCheckIcon } from "lucide-react"

export default function BadgeSecondary() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="secondary">Secondary</Badge>
      <Badge
        variant="secondary"
        className="bg-blue-500 text-white dark:bg-blue-600"
      >
        <BadgeCheckIcon />
        Verified
      </Badge>
      </div>
  )
}

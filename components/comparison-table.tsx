import { Check, X } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Feature</TableHead>
            <TableHead>Runway ML</TableHead>
            <TableHead>Synthesia</TableHead>
            <TableHead>D-ID</TableHead>
            <TableHead>Pika Labs</TableHead>
            <TableHead>HeyGen</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Text-to-Video</TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <X className="h-5 w-5 text-muted-foreground" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <X className="h-5 w-5 text-muted-foreground" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Image-to-Video</TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <X className="h-5 w-5 text-muted-foreground" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <X className="h-5 w-5 text-muted-foreground" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">AI Presenters</TableCell>
            <TableCell>
              <X className="h-5 w-5 text-muted-foreground" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <X className="h-5 w-5 text-muted-foreground" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Video Editing</TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <X className="h-5 w-5 text-muted-foreground" />
            </TableCell>
            <TableCell>
              <X className="h-5 w-5 text-muted-foreground" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Free Tier</TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <X className="h-5 w-5 text-muted-foreground" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
            <TableCell>
              <Check className="h-5 w-5 text-primary" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}


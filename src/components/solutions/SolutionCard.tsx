
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Hand, Volume2 } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  action: string;
  gesture?: string;
  voiceCommand?: string;
}

export const SolutionCard = ({
  title,
  description,
  icon,
  badge,
  action,
  gesture,
  voiceCommand
}: SolutionCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="bg-ekalNari-cream p-3 rounded-lg">
            {icon}
          </div>
          {badge && (
            <Badge variant={badge === "Emergency" ? "destructive" : "default"}>
              {badge}
            </Badge>
          )}
        </div>
        <h3 className="text-lg font-semibold mt-4 text-ekalNari-dark">{title}</h3>
        <p className="text-sm text-ekalNari-brown mt-2 mb-4">{description}</p>
        <div className="space-y-2">
          <Button className="w-full">{action}</Button>
          {(gesture || voiceCommand) && (
            <div className="flex items-center justify-between text-xs text-ekalNari-brown mt-2">
              {gesture && (
                <span className="flex items-center gap-1">
                  <Hand className="h-3 w-3" />
                  {gesture}
                </span>
              )}
              {voiceCommand && (
                <span className="flex items-center gap-1">
                  <Volume2 className="h-3 w-3" />
                  {voiceCommand}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

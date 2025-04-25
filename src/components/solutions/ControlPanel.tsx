
import { Button } from "@/components/ui/button";
import { Volume2, Hand } from "lucide-react";

interface ControlPanelProps {
  isListening: boolean;
  onStartListening: () => void;
  onStopListening: () => void;
}

export const ControlPanel = ({ isListening, onStartListening, onStopListening }: ControlPanelProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={isListening ? onStopListening : onStartListening}
      >
        <Volume2 className="h-4 w-4" />
        {isListening ? "Stop Voice Control" : "Start Voice Control"}
      </Button>
      <Button variant="outline" className="flex items-center gap-2">
        <Hand className="h-4 w-4" />
        Show Gesture Guide
      </Button>
    </div>
  );
};

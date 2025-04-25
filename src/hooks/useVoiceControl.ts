
import { useState, useCallback } from 'react';

export const useVoiceControl = () => {
  const [isListening, setIsListening] = useState(false);

  const startListening = useCallback(() => {
    try {
      setIsListening(true);
      // Initialize voice recognition here when we have the API key
      console.log('Voice control started');
    } catch (error) {
      console.error('Error starting voice control:', error);
      setIsListening(false);
    }
  }, []);

  const stopListening = useCallback(() => {
    setIsListening(false);
    console.log('Voice control stopped');
  }, []);

  return {
    isListening,
    startListening,
    stopListening
  };
};

export const speakText = (text: string) => {
  if (!('speechSynthesis' in window)) return;
  
  window.speechSynthesis.cancel(); // Cancela falas anteriores
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  window.speechSynthesis.speak(utterance);
};

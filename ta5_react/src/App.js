import React, { useState } from 'react';

function App() {
 
  const [isVisible, setIsVisible] = useState(false);

 
  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {isVisible ? 'Ocultar texto' : 'Mostrar texto'}
      </button>
      {/* Mostrar el texto solo si isVisible es true */}
      {isVisible && <p>Este es el texto</p>}
    </div>
  );
}

export default App;

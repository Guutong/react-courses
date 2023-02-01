import React from 'react';
function App() {
  const isLoading = true;

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Loaded</p>}
      {/* or */}
      {isLoading && <p>Loading...</p>}
      {!isLoading && <p>Loaded</p>}
    </div>
  );
}

export default App;

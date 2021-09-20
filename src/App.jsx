import React from 'react';
import PageContainer from './styles/PageContainer';
import PageTitle from './components/PageTitle';

import saloonBackground from './assets/backgrounds/saloonBackground.jpg';

function App() {
  return (
    <PageContainer background={saloonBackground} bgOpacity={0.5}>
      <PageTitle title="Pist leros" hasBarillet />
    </PageContainer>
  );
}

export default App;

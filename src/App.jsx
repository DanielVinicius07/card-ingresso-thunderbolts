import './App.css'

import './App.css'

function App() {
  return (
    <div className="app">
      <div className="ticket-card">
        <img
          src="https://recreio.com.br/media/_versions/marvel/thunderbolts_widelg.jpg"
          alt="Thunderbolts"
          className="ticket-image"
        />
        <div className="ticket-content">
          <h2>🎬 Thunderbolts</h2>
          <p><strong>Shopping:</strong> Rio Mar Kennedy</p>
          <p><strong>Data</strong> 03/05/2025</p> 
          <p><strong>Horário:</strong> 19:30 | <strong>Sala:</strong> 03 </p>
          <p className="ticket-price">💰 R$ 28,00</p>
          <button>Comprar Ingresso</button>
        </div>
      </div>
    </div>
  )
}

export default App
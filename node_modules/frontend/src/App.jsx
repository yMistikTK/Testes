export default function App() {
  return (
    <div className="login-bg">
      {/* Top bar */}
    <div className="topbar">
  {/* Novo bloco Fatec estilizado */}
  <div className="logo-fatec-wrap">
    <img src="/images/LogoFatecZonaLeste.png" alt="Fatec Zona Leste" />
  </div>

  <div className="topbar-title">SISTEMA GERENCIADOR DE P.I</div>

  <img className="logo-top-right" src="/images/LogoSGPI.png" alt="SGPI" />
</div>

      {/* Card principal dividido em 2 colunas */}
      <main className="login-shell">
        
        {/* Lado esquerdo (vermelho) — versão livre */}
        <section className="left-pane left-free">
          {/* LOGO independente */}
          <img className="left-logo" src="/images/LogoSGPI.png" alt="SGPI" />

          {/* CARD de texto independente */}
          <div className="left-card">
            <p>
              <strong>Bem vindo ao SGPI</strong>, um sistema centralizado
              para gerenciar os projetos integradores dos alunos de DSM
              da FATEC Zona Leste
            </p>
          </div>

          {/* BOTÃO independente */}
          <button className="left-cta">CADASTRAR</button>
        </section>

        {/* Lado direito (cinza azulado) */}
        <section className="right-pane">
          <form className="form">
            <label className="pill-input">
              <span className="icon">
                <img src="/images/IconeUsuario.png" alt="" />
              </span>
              <input
                type="email"
                placeholder="Email institucional"
                autoComplete="username"
                required
              />
            </label>

            <label className="pill-input">
              <span className="icon">
                <img src="/images/IconeCadeado.png" alt="" />
              </span>
              <input
                type="password"
                placeholder="Senha"
                autoComplete="current-password"
                required
              />
            </label>

            <div className="actions">
              <a href="#" className="forgot">Esqueci a Senha</a>
              <button type="submit" className="btn-solid">Login</button>
            </div>
          </form>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bottombar">
        <div className="copy">© Copyright: Fatec-ZonaLeste</div>
        <img className="logo-cps" src="/images/LogoCPS.png" alt="CPS" />
      </footer>
    </div>
  );
}

import "./styles.scss";

export default function Card({name, username}) {
  return (
    <div className="characterCard">
      <img
        src={`/img/${username}.png`}
        alt={name}
      />
      <div className="characterVotingData">
        <h4>50,00%</h4>
        <h6>123.123 votos</h6>
      </div>
      <div className="characterProfile">
        <h4>{name}</h4>
        <h6>Não Eleito</h6>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import Card from "./Card";
import { fetchCharacters } from "../../Api";

export default function CardList() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetchCharacters().then((response) => setCharacterList(response.data));
  }, []);

  return (
    <div className="characterList">
      {characterList.map((char) => {
          console.log(char);
        return <Card 
        key={char.id} 
        name={char.name}
        username={char.username} />;
      })}
    </div>
  );
}

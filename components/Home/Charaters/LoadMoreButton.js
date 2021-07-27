import { useContext, useState } from "react";
import { Button } from "antd";
import CharacterContext from "./../../../store/CharacterContext.js";
import classes from "./Character.module.css";
import { getCharacters } from "./../../../lib/services";

function LoadMoreButton() {
  const characterCtx = useContext(CharacterContext);

  const [loading, setLoading] = useState(false);

  const loadData = async (currentPage) => {
    setLoading(true);
    var data = await getCharacters(currentPage + 1);
    if (data) {
      characterCtx.setData(data);
      setLoading(false);
    }
  };

  return (
    <div className={classes.loadButton}>
      <CharacterContext.Consumer>
        {({ currentPage }) => (
          <Button
            disable={loading}
            onClick={() => loadData(currentPage)}
            className={classes.button}
          >
            Load More..
          </Button>
        )}
      </CharacterContext.Consumer>
    </div>
  );
}

export default LoadMoreButton;

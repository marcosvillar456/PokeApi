import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByName } from "../../redux/actions/index";
import CardMore from "../../components/Card_More/Card_More";
import Loading from "../../components/Loading/Loading";
import "../../components/Card_More//Card_More.scss";

export default function More_Name(props) {
  const dispatch = useDispatch();
  const pokemonSearch = useSelector((state) => state.pokemonSearch);

  useEffect(() => {
    dispatch(getPokemonByName(props.match.params.name));
  }, [props.match.params.name]); // eslint-disable-line react-hooks/exhaustive-deps
  if (pokemonSearch.name != props.match.params.name) {
    return (
      <Fragment>
        <Loading />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <CardMore pokemon={pokemonSearch} />
      </Fragment>
    );
  }
}

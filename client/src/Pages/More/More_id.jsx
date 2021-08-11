import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../redux/actions/index";
import Loading from "../../components/Loading/Loading";
import CardMore from "../../components/Card_More/Card_More";

import "../../components/Card_More//Card_More.scss";

export default function MoreId(props) {
  const dispatch = useDispatch();
  const pokemonSearch = useSelector((state) => state.pokemonSearch);
  useEffect(() => {
    dispatch(getPokemonById(props.match.params.id));
  }, [props.match.params.id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (pokemonSearch.id != props.match.params.id) {
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

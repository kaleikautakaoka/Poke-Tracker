import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,  
} from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { REMOVE_POKEMON  } from "../utils/mutations";


const savedPokemons = () => {
  const { loading, data } = useQuery(GET_ME);
  let userData = data?.me || {};
  const [removePokemon] = useMutation(REMOVE_POKEMON );
  const handDeletePokemon = async (pokemonId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      const { data } = await removePokemon({ variables: { pokemonId } });
      if (!data) {
        throw new Error("something went wrong!");
      }
      removePokemonId(pokemonId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>wait...</h2>;
  }
  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing saved Pokemon!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedPokemons?.length
            ? `Viewing ${userData.savedPokemons.length} saved ${
                userData.savedPokemons.length === 1 ? "pokemon" : "pokemon"
              }:`
            : "You have no saved pokemon!"}
        </h2>
        <CardColumns>
          {userData.savedPokemons?.map((pokemon) => {
            return (
              <Card key={pokemon.pokemonId} border="dark">
                {pokemon.image ? (
                  <Card.Img
                    src={pokemon.image}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handDeletePokemon(pokemon.pokemonId)}
                  >
                    Delete this Pokemon!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default savedPokemons;

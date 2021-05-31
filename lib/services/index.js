import { gql } from "@apollo/client";
import client from './apoloClient.js';

const basicCharacterData = `name gender id image`;

export async function getCharacters(page = 1) {
  const { data } = await client.query({
    query: gql`query{
            characters(page:${page}){
              info{
                pages
              }
              results{
               ${basicCharacterData}
              }
            }
          }`,


  });
  return data.characters.results;
}

export async function getCharacterByID(id) {
  const { data } = await client.query({
    query: gql`query{
      character(id:${id}){
          name
          gender
          id
          image
          status
          species
      }
    }`,


  });
  return data.character;
}
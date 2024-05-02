

const fetchCharacters = async () =>{
    const url = 'https://rickandmortyapi.com/api/character'

    const response = await fetch(url)

    const data = response.json()

    return data.results

}


const CharacterPage = async  () => {
    const characters = await fetchCharacters()

  return (
    <>
        <h1 className="text-3xl text-center">Characters Page</h1>

        {/* <ol>
            {characters.map(character => {
                return <li key={character.id}>{character.name}</li>
            })}
        </ol> */}
  </>
  )
}

export default CharacterPage 
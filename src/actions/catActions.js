export const fetchCats = () => {
    return ( (dispatch)=> {
        dispatch({type: "LOADING_CATS"})
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
        return response.json()
        }).then(responseJSON => {
        // instead of logging here, call dispatch and send the cat JSON data to your store
        dispatch({type: "ADD_CATS", cats: responseJSON.images})
        })
    })
}
const initState = {
    posts: [
        {id: '1', title: 'Example Title 1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        {id: '2', title: 'Example Title 2', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        {id: '3', title: 'Example Title 3', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
    ]
}

const rootReducer = (state = initState, action) => {

    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id
        })

        return {
            ...state,
            posts: newPosts
        }
    }

    return state;    
}

export default rootReducer
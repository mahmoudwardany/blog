import {createSlice} from '@reduxjs/toolkit'
const initialState={
posts:[],
postCount:null,
postCat:[],
isLoading:false,
isPostCreated:false,
post:null,
isCommented:false
}

const PostSlice=createSlice({
    name:"post",
    initialState,
    reducers:{
    setPosts(state,actions){
        state.isLoading=false
        state.posts=actions.payload
    },
    setCount(state,actions){
        state.postCount=actions.payload
    }, setPostCat(state,actions){
        state.postCat=actions.payload
    },
    setLoading(state){
        state.isLoading=true
    },
    clearLoading(state){
        state.isLoading=false
    },
    setPostCreate(state){
        state.isLoading=false;
        state.isPostCreated=true
    },
    clearPostCreated(state){
        state.isPostCreated=false
    },
    setPostDetails(state,action){
        state.post=action.payload
    },
    setLike(state,action){
        state.post.likes=action.payload.likes
    },
    deletPost(state,action){
        state.posts=state.posts.filter(p=> p._id !== action.payload)
    },
    addComment(state,action){
        state.isCommented=true
        state.post.comments.push(action.payload)
    },
    clearCommented(state){
        state.isCommented=false
    },
    updateComment(state,action){
        //map array comment and if comment we want to update = uploaded Comment 
        //make comment array = new comment
        state.post.comments=state.post.comments.map(c=> c._id === action.payload._id?action.payload:c);
        state.isLoading=true

    },
    deleteComment(state,action){
        state.post.comments=state.post.comments.filter(c => c._id !== action.payload._id)
        state.isCommentDeleted=true
    }
    },
})
const postReducer=PostSlice.reducer
const postAction=PostSlice.actions
export {postReducer,postAction}
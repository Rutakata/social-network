import profileReducer, {addNewPost, deletePost} from "./profileReducer";


let state = {
    postMessages: [
        {id: 1, message: "Обожнюю Майнкрафт", likes: 0},
        {id: 2, message: "Лаби Шолохова - пекло", likes: 0},
        {id: 3, message: "Вивчаю React", likes: 0}
    ]
}

it('Posts array length to be increased', () => {
    let action = addNewPost('post testing')
    let newState = profileReducer(state, action)
    expect(newState.postMessages.length).toBe(4)
})

it('New post should be added', () => {
    let action = addNewPost('post testing')
    let newState = profileReducer(state, action)
    expect(newState.postMessages.length).toBe(4)
    expect(newState.postMessages[3].message).toBe('post testing')
    expect(newState.postMessages[3].likes).toBe(0)
})

it('New post likes count to be 0', () => {
    let action = addNewPost('post testing')
    let newState = profileReducer(state, action)
    expect(newState.postMessages[3].likes).toBe(0)
})

it('Posts array length should be decreased', () => {
    let action = deletePost(2)
    let newState = profileReducer(state, action)
    expect(newState.postMessages.length).toBe(2)
});
it('Posts array length shouldnt be decreased', () => {
    let action = deletePost(100)
    let newState = profileReducer(state, action)
    expect(newState.postMessages.length).toBe(3)
});
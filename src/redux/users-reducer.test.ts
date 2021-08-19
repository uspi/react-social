import usersReducer, { actions, InitialStateType } from './users-reducer'

let state: InitialStateType

// before each test set default state
beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: 'John 0',
        followed: false,
        photos: {
          small: null,
          large: null,
        },
        status: 'status 0',
      },
      {
        id: 1,
        name: 'John 1',
        followed: false,
        photos: {
          small: null,
          large: null,
        },
        status: 'status 1',
      },
      {
        id: 2,
        name: 'John 2',
        followed: true,
        photos: {
          small: null,
          large: null,
        },
        status: 'status 2',
      },
      {
        id: 3,
        name: 'John 3',
        followed: true,
        photos: {
          small: null,
          large: null,
        },
        status: 'status 3',
      },
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [], // array of users id
  }
})

test('follow success should change user only by delegated id', () => {
  const followId = 1
  const newState = usersReducer(state, actions.followSuccess(followId))

  expect(newState.users[0].followed).toBeFalsy()
  expect(newState.users[1].followed).toBeTruthy() // changed follow flag
  expect(newState.users[2].followed).toBeTruthy()
  expect(newState.users[3].followed).toBeTruthy()
})

test('unfollow success should change user only by delegated id', () => {
  const unfollowId = 3
  const newState = usersReducer(state, actions.unfollowSuccess(unfollowId))

  expect(newState.users[0].followed).toBeFalsy()
  expect(newState.users[1].followed).toBeFalsy()
  expect(newState.users[2].followed).toBeTruthy()
  expect(newState.users[3].followed).toBeFalsy() // changed follow flag
})

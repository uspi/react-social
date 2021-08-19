import { ResultCodeEnum } from '../api/api'
import { usersAPI } from '../api/users-api'
import { actions, follow, unfollow } from './users-reducer'
import { ResponseType } from '../api/api'

jest.mock('../api/users-api')
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const apiResult: ResponseType = {
  resultCode: ResultCodeEnum.Success,
  messages: [], // no error messages
  data: {},
}

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
  dispatchMock.mockClear()
  getStateMock.mockClear()
})

usersAPIMock.follow.mockReturnValue(Promise.resolve(apiResult))
usersAPIMock.unfollow.mockReturnValue(Promise.resolve(apiResult))

test('follow thunk', async () => {
  const userId: number = 1
  const thunk = follow(userId)

  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    actions.toggleFollowingProgress(true, 1)
  )
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    actions.toggleFollowingProgress(false, 1)
  )
})

test('unfollow thunk', async () => {
  const userId: number = 1
  const thunk = unfollow(userId)

  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    actions.toggleFollowingProgress(true, 1)
  )
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    actions.toggleFollowingProgress(false, 1)
  )
})

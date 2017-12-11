import { put, takeEvery, all, fork, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { watchFile } from 'fs';

export function* helloSaga() {
    console.log('Hello Sagas!')
  }

  // Our worker Saga: will perform the async increment task
export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}
  
// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export function* rootSaga() {
    yield fork(() => watchIncrementAsync())
}
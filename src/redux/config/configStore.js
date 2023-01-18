import { combineReducers, createStore } from 'redux';
import counter from '../modules/counter';
// 1. createStore()
// 리덕스의 가장 핵심이 되는 스토어를 만드는 메소드입니다.
// 리덕스는 단일 스토어로 모든 상태 트리를 관리합니다.
// 리덕스를 사용할 시 createStore를 호출할 일은 한 번 밖에 없다.

// 2. combineReducer()
// 리덕스는 action -> dispatch -> reducer 순으로 독작한다.
// 이 때 앱이 복잡해직 되면 reducer 부분을 여러 개로 나눠야 하는 경우가 발생한다.
// combineReducer는 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어 준다.

const rootReducer = combineReducers({
  counter: counter,
});
const store = createStore(rootReducer);

export default store;

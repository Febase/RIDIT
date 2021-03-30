// 로컬 데이터 저장/삭제/수정(저장할 링크 관련 추가 데이터)
// 링크가 저장될때 타이틀이랑 이름이랑, 북마크의 이름(링크), 읽음, 삭,,    ,,,    링크 각각의 아이디를 부여, 크롬스토리지에 저장될때는 id값으로 저장, id가 맵핑
// id가 맵핑되어 상태값들 불러옴

// 북마크를 저장했다? -> 

export const ChromeLocalStorage = Object.freeze({
  setLocalState(state) {
    return new Promise(resolve => {
      chrome.storage.local.set({ 1: state })
    })
  },
  getLocalState() {
    return new Promise(resolve => 
      chrome.storage.local.get(['state'], ({ state }) => resolve(state))
    )
  },
  clearLocalState(id) {
    return new Promise(resolve => 
      chrome.storage.local.clear({ id })
    )
  },
  removeLocalState(ids) {
    return new Promise(resolve => 
      chrome.storage.local.remove([...ids])
    )
  }
})

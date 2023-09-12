# Movie App

> from Grip_React_YangChanMo

## Install & Start

```
 yarn
```

> install node_modules

```
yarn dev
```

> execute app in local as dev mode

## Tech Stack

- react-boilerplate : using `vite`
- routing : `react-router`
- style & design(ui)
  - `styled-components`
  - `styled-reset`
  - `react-icons`
- state-management
  - server-state : `swr`
  - client-state : `recoil`
- etc
  - `axios`
  - `lodash`

## Structure

```
src
 ├── apis        # api layer
 ├── components  # each component of a page
 ├── hooks       # custom hooks collection
 ├── pages       # pages component
 ├── store       # state collection
 ├── styles      # style files
 |
 ├── main.tsx    # entry point file
 └── router.tsx  # routes specification file
```

- apis : server-state를 관리를 위한 엔드포인트 및 SWR훅이 존재
- store : client-state를 관리를 위한 recoil의 atom과 atom에 대한 CRUD 커스텀 훅

## Features

- [x] 상단의 검색바 구현

  → 공통 컴퍼넌트로서 페이지에 관계없이 검색 가능, 즐겨찾기 페이지에서 검색시 검색(홈) 페이지로 이동하여 결과 노출

- [x] 하단의 투 탭(검색(홈) / 즐겨찾기) 네비게이션 구현

- [x] 검색 페이지 노출 화면 3가지로 구성 (시점과 검색 결과에 따라서 구분)

  - 최초 진입 화면
  - 검색 결과 없는 화면
  - 검색 결과 있는 화면

- [x] 검색 결과 그리드 2 컬럼 레이아웃으로 노출

- [x] 각 영화 카드마다 영화 정보 노출 (포스터 / 제목 / 연도 / 타입 )

  → 애니메이션을 통한 정보 노출

  → 포스터가 없는 영화의 경우 기본 이미지 생성하여 추가

- [x] 검색 결과에 대한 무한 스크롤 기능

- [x] 영화 카드 상단에 별아이콘 토글을 통해서 즐겨찾기 추가/제거 기능

- [x] 영화의 즐겨찾기 여부는 filled/outline 스타일의 별을 통해서 구분

- [x] 즐겨찾기한 영화들은 즐겨찾기 탭에서 노출

- [x] 즐겨찾기한 영화는 로컬스토리지에 저장되어 앱 재시작시 초기값으로 사용 가능

  → 로컬스토리지는 즐겨찾기의 변경상태를 지속적으로 저장

- [x] 즐겨찾기 페이지에서 각 영화의 상단에 별을 클릭하면 모달이 뜨고 즐겨찾기를 제거할지 여부 선택 가능

- [ ] 즐겨찾기 페이지에서 드래그앤드랍을 이용한 목록 순서 조정

## 전반적인 구현 의도(+ 생각)

- UI/UX

  - 전반적인 핏이 앱스러운 느낌을 주기 위해 노력하였습니다.(단 완전한 반응형을 고려하진않았지만, 모바일에서 볼 때, 불편함이 없는 정도까지 표현해보았습니다.(부족하지만, PC에서 모바일보기로 체크))

  - 전반적인 색상은 [그립 홈페이지](https://grip.show/)를 참고해보았습니다.

  - 영화 카드의 인터렉션은 좁은 화면에 많은 정보를 담기 위한 하나의 방법으로서 사용해보았습니다. (단 빠르게 정보를 보는데 있어서는 인터렉션이 불편함이 있는지에 대한 의문은 살짝 있었습니다. 😅)

- 상태관리

  - atom으로 관리하는 것이 두가지 있습니다. `검색 키워드`와 `즐겨찾기한 영화 목록`입니다.

  - 검색 키워드를 전역으로 관리한 이유

    - `lifting-state-up`을 통해서 Home 컴퍼넌트에서 키워드 상태를 관리함으로서 onChange와 onSubmit을 props로 SearchBar 컴퍼넌트로 내려보내는 상황을 마주하게 되었습니다.

    - value의 변경에 따라서 Home 컴퍼넌트 전체가 `리랜더링(부모의 리랜더링)`이 일어나게 됨으로서 성능상 좋지 못하다고 판단하였습니다. 또한 각 컴퍼넌트에서 필요한 상태가 `colocate` 되지 않는다고 생각하였습니다.

    - value 하나로 관리하던 상태를 `input에서의 local state(value)`와 submit 이후의 값은 `keyword로서 global state`로 분리함으로서 각각 컴퍼넌트마다 역할과 상태를 분리하여 관리할 수 있게 변경해보았습니다.

    - 키워드는 전역으로 관리되기 때문에 `한 번 검색한 키워드는 탭이 변경되더라도 리셋되지 않습니다`. 이런 상황을 시뮬레이션해보았습니다. 검색을 하고 즐겨찾기에 원하는 영화를 추가하고 즐겨찾기 탭으로 이동하였다가 `다시 검색탭으로 돌아왔을 때, 기존 검색한 값이 노출되어야할지`에 대한 것입니다. UX적으로 기존 값이 유지되는 것이 좋다고 판단하였습니다. 단, 상단의 로고를 클릭시 리셋되도록 해놓았습니다.(최초의 홈으로 돌아가는 기능)

- 즐겨찾기 CRUD

  - 홈 페이지에서 각 영화 아이템의 상단의 별을 통해서 즐겨찾기를 `추가/삭제(토글링)`를 할 수 있습니다. 이 때는 자유롭고 빠르게 토글링을 진행할 수 있습니다.

  - 즐겨찾기 페이지에서 즐겨찾기된 영화를 제거할 수 있습니다. 이 때는 상단의 별을 클릭하면 제거 여부를 확인하는 `모달`이 뜨고 액션을 행하면 실행됩니다. 이렇게 제거할 때는 모달을 통해 추가적인 플로우를 넣은 이유는 일반적인 UX 관점에서 제거를 좀 더 조심스럽게(?) 접근(재차 확인의 의도)하고 다시 돌릴 수 없기 때문입니다.

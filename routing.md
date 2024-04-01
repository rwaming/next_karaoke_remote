# Dynamic routing

## 무엇을 수집해야하는가?

### 수집할 것

1. 유저가 무엇을 검색했는지(homekono/keyword, homekono/search/keyword)
1. 유저가 무슨 비디오를 많이 시청했는지 (homekono/id방문 횟수)

### Soultion

유저가 검색한 링크 이름을 받아서 api에 검색.

#### Process

1. 유저가 'domain/homekono/특정키워드' 에 접속을 시도한다.
1. domain/homekono/[idkeyword]로 이동한다.
1. slug => id에 넣어서 검색해본다. (이땐 금영이 아니어도 되도록 한다.)
   1. 해당 영상이 있다. => setVideo뫄뫄 해서 종료
   1. 영상이 발견되지 않았다.
      1. slug => q에 넣어서 검색한다.
         1. 영상이 발견되지 않았다 => homekono/no-video
         1. 영상이 발견됐다.
            1. 첫번째 영상의 제목과 가수를 확인한다.
            1. 유저키워드, 제목&가수 => 한글, 숫자, 영어만 뽑는다.
               - `resultString.replace(/[^a-zA-Z0-9가-힣]/g, '')`
            1. 제목가수가 유저키워드를 포함하는지 확인한다.
               1. 일치하지 않는다 => 일치하는 검색 결과가 없다는 페이지를 보여준다.
               1. 일치하는 글자가 있다. => domain/homekono/해당비디오의아이디 로 이동

<br>

## Directory

#### domain/ (방문 횟수 수집)

- app/layout.tsx (공통.)
- app/page.tsx (방문하자마자 홈코노로 이동)

#### domain/homekono (홈코노 방문 횟수 수집)

- app/homekono/layout.tsx (홈코노 공통 레이아웃. 아이프레임 하나에 app/search/를 갖고있음)
- app/homekono/page.tsx (빈 플레이어)

### Video

#### domain/homekono/[keyword] (유저가 접속 시도한 키워드 수집)

- app/homekono/[keyword]/page.tsx (유저가 입력한 키워드 검색 -> domain/homekono/play/[videoId], 혹은, domain/homekono/no-video로 이동)

#### domain/homekono/play/[videoId] (유저가 선곡한 노래 수집)

- app/homekono/play/[videoId]/page.tsx (유저가 선택한 영상 플레이어)

#### domain/homekono/no-video

- app/homekono/no-video/page.tsx (검색된 비디오가 없음을 알리는 페이지)

### Search

#### domain/homekono/search/

- app/search/layout.tsx (검색창 레이아웃)
- app/search/page.tsx (검색 리스트 - 비어있음)

#### domain/homekono/search/[keyword] (유저가 검색한 키워드 수집)

- app/search/[keyword]/layout.tsx (검색 리스트 레이아웃)
- app/search/[keyword]/page.tsx (검색 리스트 - 채워져있음. 클릭시 브라우저페이지가 domain/homekono/play/[videoId]로 이동)

<br>

## ~~플레이어만 변경시킬 수 있는 방법이 있는가?~~ : 초안으로 A안 채택

### A안 - next의 layout.tsx기능 집중, 그러나 방문시 이동 필요

#### domain/

- app/layout.tsx (공통.)
- app/page.tsx (방문하자마자 홈코노로 이동)

#### domain/homekono

- app/homekono/layout.tsx (홈코노 공통 레이아웃. 아이프레임 하나에 app/search/를 갖고있음)
- app/homekono/page.tsx (빈 플레이어)

#### domain/homekono/[keyword] (유저가 방문한 키워드 수집)

- app/homekono/[idkeyword]/page.tsx (유저가 입력한 키워드 검색 -> domain/homekono/[videoId], 혹은, domain/homekono/no-video로 이동)

#### domain/homekono/[videoId] (유저가 선곡한 비디오 수집)

- app/homekono/[idkeyword]/page.tsx (유저가 선택한 영상 플레이어)

#### domain/homekono/no-video

- app/homekono/no-video/page.tsx (검색된 비디오가 없음을 알리는 페이지)

#### domain/homekono/search/

- app/search/layout.tsx (검색창 레이아웃)
- app/search/page.tsx (검색 리스트 - 비어있음)

#### domain/homekono/search/[idkeyowrd] (유저가 검색한 키워드 수집)

- app/search/[idkeyword]/layout.tsx (검색 리스트 레이아웃)
- app/search/[idkeyword]/page.tsx (검색 리스트 - 채워져있음)

---

### ~~B안 - 불필요한 이동이 없는 것에 집중, 그러나 홈코노의 레이아웃을 활용하기 어려움~~

#### domain/

- app/layout.tsx (공통)
- app/page.tsx (홈코노 공통 레이아웃. 아이프레임 두개가 있는데 하나는 app/video/, 하나는 app/search/를 갖고있음)
- app/player.tsx (홈코노의 플레이어 - 비어있음)

#### domain/[keyword] (유저가 방문한 키워드 수집)

- app/[idkeyword]/page.tsx (유저가 입력한 키워드 검색 -> domain/[videoId], 혹은, domain/no-video로 이동)

#### domain/[videoId] (유저가 선곡한 비디오 수집)

- app/[idkeyword]/page.tsx (유저가 선택한 영상 플레이어)

#### domain/no-video (유저 키워드에 검색 실패율 수집)

- app/homekono/no-video/page.tsx (검색된 비디오가 없음을 알리는 페이지)

#### domain/search/

- app/search/layout.tsx (검색창 레이아웃)
- app/search/page.tsx (검색 리스트 - 비어있음)

#### domain/search/[idkeyowrd] (유저가 검색한 키워드 수집)

- app/search/[idkeyword]/layout.tsx (검색 리스트 레이아웃)
- app/search/[idkeyword]/page.tsx (검색 리스트 - 채워져있음)

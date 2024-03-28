# ⌨️ react_karaoke_remote

This file is updated mostly in **[Issues](#issues)**.

## 🙌 Intro

### Trigger

It is the reason why to start this project that I had wanted to sing with **karaoke remote control**, whenever enjoyed singing home.

### Goal <a id="goal"></a>

This app should have functions for users to enjoy singing at home when they want it.

#### Branch

1. A branch must have only one function unit.
2. A function means that
   - A target element group
   - one function with something like element(input...) or event.

#### Function

At least

1. This App must have fucntions of karaoke remote control

   - Those is like "backward", "forward", "applause"...

2. It is essential to use some media contents which show karaoke screen and play MR, like YouTube(TJ channel).

   - YouTube API have to be checked.
   - I have to study how to use API, if it is possible to use YouTube API.

Foremore

1. It can be used though the user uses App with a mobile phone and a desktop.

   - Server
     - Node.js - Express

2. It has function to save some setting like pitch in either

   - LocalStorage or
   - Server

## 📖 Information

### Stack

- HTML
- CSS
- JavaScript
- TypeScript
- TailwindCSS
- React
- Next.js
- React Transition Group
- ESLint
- Prettier
- Stylelint
- _Node.js Express_ (expected)
- ~~SASS~~ conflicts with TailwindCSS: uninstalled

<br>

## ✨ Issues <a id="issues"></a>

Issues are listed by completion date, written since [_2024.03.15.fri_](#issues_1).

<br>

> _2024.03.28.thu_

#### #84 - Make UI ready before visited(change way to import gapi)

- It is completed, but I'll use Suspense and Use(?).

#### #85 - Improve styling for uniformity

- Waiting tor #84

#### ~~#86 - Fix error that ref.current is not applied in some case~~

- Loading AppProvider after Main jsx element with ref loaded is the reason.
- Render order

  1.  Elements of parent component
  2.  Child component
      => This make controller which has `ref={controllerRef}` contribute render **before 'controllerRef' is rendered**.

- Way to Fix
  - I think there are a lot of methods, but I choose this way
    => Make controller child component which has same priority to component having to use controller.

<br>

> _2024.03.27.wed_

#### ~~#82 - Manage api key with env file~~

- Best to use .env.local is to request information in server-side.
- For now, make .env.local data enable to be used in client-side, until others are made mostly.

#### ~~#80 - Change pattern of Context API~~

- Reference: Velog [How to use Context API well](https://velog.io/@velopert/react-context-tutorial)

#### ~~#78 - Change all ID styling to Class styling~~

- Complete!

<br>

> _2024.03.26.tue_

#### ~~#77 - Fix no autoplay in mobile~~

- GPT says, mobile autoplay is prevented to save energy and data.

<br>

> _2024.03.25.mon_

#### ~~#75 - Make more Next.js-like~~

- **Structure**

1. layout.tsx
   - This means the page, has parts, which never change in app, like frame of blow.
     - header
     - footer
     - nav
     - quick
2. page.tsx
   - This means the page, has contents of one page.
   - A page is **not** a component. It means a page to which a user move.

- After some learning, I realized this project needs no more page.tsx.
  The first to do is to check todo to get direction.

#### ~~#73 - Check if TailwindCSS treeshake can be applied(devDependencies)~~

- Tailwind CSS offical document says, if some classes is not used, those'll be removed in build process.
- If to delete some classes must be prevented, the way is to lay classes out of @layer.

#### ~~#72 - Select hosting service, considering to use Github Page~~

- I'm searching for hosting services I'll use.
- Select 'Vercel'!

  - It is recommended by official document of Next.js.

- Error is logged in [Log](#log2) <a id="log2_"></a>

- This stops until this project is made more Next-like.

#### ~~#49 - Styling with Tailwind, @media and React Transition Group~~

- Install 'prettier-plugin-tailwindcss'.
- Design overall UI, though needed more, I've close this issues for now to prevent to loose focus.

<br>

> _2024.03.24.sun_

#### ~~#61 - Use Semantic tag like H1~6, main~~

- Check elements in chapter 4.3 of [HTML Standard](https://html.spec.whatwg.org/multipage/#toc-semantics)
- References
  - [codingEverybody](https://codingeverybody.kr/)
  - [MDN](https://developer.mozilla.org/en-US/)
- I think it is done as basic structure??

#### ~~#66 - Fix case that title can be shown on 'number' in search list from 61~~

- If title is on number, Make the text moves onto title, in a search list.

<br>

> _2024.03.23.sat_

#### ~~#56 - Change video when a song of list clicked~~

- I've made all functions I think is essential!!

#### ~~#57 - Arrange file structure from 56~~

- Use folders, /components, /controller and /utils, in /app
- I divided folders and files, checking readablity myself!

#### ~~#58 - Search how to use api folder in Next.js (to use YouTube API in it)~~

- I get to know request in client (like fetch, or using gapi) don't use '/api' is for sever-side.

<br>

> _2024.03.22.fri_

#### ~~#41 - Show list after users search videos~~

- I didn't know making search function is difficult than some I thought it. haha~~~

- How to Make

  - ✔️ ~~List functions~~

    1.  Put the search keyword user typed in variable to search.

    1.  Using that, get video information of KY channel in about 20 maximum.

    1.  Get the title, artist, KY number from each information.

    1.  Put them in objects.

    1.  Using 'for', 'map' and \[...listed, newInfo] syntactics, make list.

    1.  Insert list into #search-list.

  - ✔️ ~~Example layout~~ : Designed in [Figma](https://www.figma.com/file/bWBc481GrR9erjuLyfiLUf/Untitled?type=design&node-id=0%3A1&mode=design&t=oP5zdSk853glap8W-1)

    1.  Button and Input elements

        1. Pop-up: Only button + Show pop-up to type
        1. On the top of controller

           - Button and type box
           - Only button + Show input box when focused

    2.  List

        1. Layout

           - Pop-up
           - Appear from back of controller
           - Appear below the input element
           - To prepare the space for list

        1. List Style

           - YouTube thumbnail
           - Text
           - or Able to select one of both

        1. Way to Slide
           - Horizontal
           - Vertical

    - I may need to use **Figma** to select this properly.

#### ~~#53 - Split functions of controllerFunctions.ts into new file.ts~~

- Make a new folder and put them in.

<br>

> _2024.03.21.thu_

#### ~~#51 - Move information on the top of video (title / artist / KY number), using fixed~~

- Complete, using absolute

#### ~~#50 - Store and show the videos a user sang~~

- Canceled

<br>

> _2024.03.20.wed_

#### ~~#40 - Check if It is possible to remove controller on YouTube player~~

- YouTube API serves a method to select controller visibility.

#### ~~#43 - Split code of controllerButton.tsx is too complicated~~

- It's better to read codes than whole codes stay together.

#### ~~#39 - Clap button~~

- I found a applause mp3 file has no copyright!
- _in progress_
- It has functions that
  1. Find a idle audio => play
  1. Find a oldest audio => play
  1. Find a oldest audio in 2~4 => replay
  1. 2~4 are newer => replay 1

#### ~~#42 - Fix clap button code (null issue)~~

- It was the cause of the error that I put in useRef in 'ref' attributes, using 'if'.

#### ~~#35 - Test if it is possible to split gapi.client.init code into a new file~~

- It's possible! Moved it.

#### ~~#34 - Stop~~

- Complete to make button, Stop

#### ~~#32 - Speed buttons~~

- Complete to make buttons

  - Speed Down
  - Speed Up

<br>

> _2024.03.19.tue_

#### ~~#31 - Volume buttons~~

- Complete to make buttons

  - Volume Up
  - Volume Down
  - Mute

#### ~~#22 - Try using Web Audio~~ canceled

- [pending](#log1)<a id="log1_"></a>

#### ~~#29 - Move button's function code to new file controller~~

- It wasn't difficult to complete!

#### ~~#26 - Make buttons to Component, considering how to maximize reusability~~

- Split controller button into new component file(tsx)

#### ~~#23 - Backward, Forward~~

- It must be preceded that functions, able to be used in Web APP, are listed.
- Make both buttons, backward and forward

#### ~~#24 - Fix error next/font (no module "plugins")~~

- _Render do never work_ with error of title.

- **Way**

  1. Search

  Fail. Is it unique an issue?

  1. Reinstall Next.js, and Try file copy and replace.

  1. Origin to New(so replace): Error

     = node_modules is OK

  1. New to Origin(replace): Error

     = some tsx file, config or pagckage.json..?

     After repeated..

- **Find**

      I got the cause, **postcss.config.js**.

  Setting option 'plugins' is nested.... I did it...!

<br>

> _2024.03.18.mon_

#### ~~#20 - Check ESLint that doesn't work~~

- I knew TypeScript would replace ESLint. But I think something wrong must be there... So I'll check it.
- Check :
  1. ESLint setting
  1. Error by ESLint rules
  1. Error by TypeScript
  1. Conflict between Tailwind and PostCSS

#### ~~#12 - Pause, Play~~

- Oh, TJ prevents to use their video... But KY allows those of them.
- I thought to show YouTube player is considered to do at first. Make #13
- Complete to make function Pause and Play!

#### ~~#13 - Show YouTube player to use API from 12~~

- Accomplish access to YouTube API and get value.
- But the quota is exceeded... It must be pended by 4pm
- Some layout is changed, and complete goal to load YouTube video in a Component.

#### ~~#14 - Make layout in Mobile, Tablet, Desktop to use @media from 13~~

- I decided to make the main layout before the quota reset.
- Make simple layout use @media, only div.app scope.
- And It is now possible to use YouTube API to create one more project in Google Cloud.

<br>

> _2024.03.17.sun_

#### ~~#10 - Install React transition group~~

- In addition, describe what I use in this project.

#### ~~#8 - Set up rules and rough plan(how to use languages)~~

1.  ✔️ **HTML(Next.js)**

    - Use Semantic tag, looking for that in Docs.
    - Mix elements and Components properly.

2.  ✔️ **CSS(SCSS)**

    1.  ✔️ Tailwind : Use TailwindCSS at first.

        - I caught how to use Tailwind especially about theme

    2.  ✔️ MASCSS(Base, Module) : When Tailwind classes of an element too long, a class name in Base of Module unit is used for some elements which has similar style.
    3.  ✔️ BEM(UI, Hierarchy) : When it is considered a specific element should have a kind of own UI name, name a class according to BEM.

    - ~~OOCSS : When classes in an element is too long to read easily, name according to OOCSS. : It is the way I wanted~~

3.  ✔️ **TypeScript**

    I am a user to use Typescript at first. So... The document of it and to study it is needed.

    - ✔️ [Write the concepts and sytactics](#ts)<a id="ts_"></a>

4.  ✔️ **React, Next.js**

    This is same to TypeScript.

    - ✔️ [Write React hook I didn't know](#react)<a id="react_"></a>
    - ✔️ [Write Next.js main function](#next)<a id="next_"></a>

<br>

> _2024.03.16.sat_

#### ~~#4 - Set SASS, ESLint and Prettier, Stylelint, PostCSS sorting or CSS declaration sorter~~

- ✔️ PostCSS Sorting in VScode
- I realized that PostCSS sorting and CSS declaration sorter is definitely different.

<br>
<a id="issues_1"></a>

> _2024.03.15.fri_

#### ~~#3 - Select React-Like framework and bundler~~

-

It will be made with React, but I heard official React document say "Don't use create-react-app".

- I must choose what type of React to apply this project
  - ✔️ Next.js : It is mostly used in a lot ofcompany.
  - Remix
  - Gatsby
  - ~~Expo~~ is only for React Native
- Install Next.js

#### ~~#1 - Set up basis of project~~

- Update plan especially at [Goal](#goal)

<br>

## Log

> _2024.03.19.tue_

### [Can't manipulate pitch or others](#log1_) <a id="log1"></a>

#### Detail issues

- Never access to elements in iframe in just my web app
- YouTube API gives simple functions, no function to set pitch.
  = I can't manipulate to **use just only web**.

#### Consideration

- Make **Chrome Extension** to have access to iframe in browser.

  But, I must prepare when I fail to make Chrome Extension.

#### Conclusion

1. At first, Make Web APP have buttons which work in it.
1. Try making Chrome Extension for Web APP and connecting Web APP to Chrome Extension as make buttons one by one.

- If it is thought impossible now, close this project with no functions about 2.

<br>

> _2024.03.25.mon_

### [Error in build](#log2_) <a id="log2"></a>

`ReferenceError: window is not defined`

- I guess the reason why error occurs would be '**gapi**'.

  - at 7605 (/Users/rwam/project/next-karaoke-remote/.next/server/app/page.js:1:6619)
    - "gapi=**window**.gapi=**window**.gapi" is cought.

1. **Search for way to fix**

   Component, needed no server-side rendering, use the options below.

   1. Use `if (typeof window !== "undefined") {`
      => fail

   1. Render in **useEffect**

   ```
   const Conponent = () => {
     useEffect(() => {
       return (JSX)
     })
   }
   ```

   => fail

   - Then, how about to remove only code about gapi?
     => done

   1. Import component to use **dynamic**

   ```
   const Component = dynamic(
   () => {
     return import("@/path")
   }, { ssr: false }
   )
   ```

   - Make gapi Script component imported by dynamic
     => fail

   - Then, add `if (typeof window !== "undefined") {`?
     => fail

   - How about no youtubeApi, but GapiScript?
     => done

   - If only use just Script, except for youtubeApi?
     => It's OK!

     **The reason** is **_ONLY_** way to import "**youtubeAPI.ts**".

1. **Try import in useEffect and make condition like below**

   ```
   const loadGapi = useCallback(async (): Promise<void> => {
     await import('gapi-script')
     gapi.load('client', () => {
       void gapi.client.init({
         apiKey: '____',
         discoveryDocs: [
           'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
         ],
         clientId:
           '____',
         scope: 'profile',
       })
     })
   }, [])
   useEffect(() => {
     void loadGapi()
   }, [loadGapi])
   ```

   But fail..

- I found it is possible that something against next convention would cause this error. So, It will be puased until this project get more next(react)-like.

- Fix this to make gapi script imported in useEffect and components imported with dynamic(ssr: false).

<br>

# Memo

## [TypeScript](#ts_)<a id="ts"></a>

### Type

0. [**Basic type**](#ts_types)

1. **Interface**

   Defines the structure of Object.

2. **type**

   Defines new custumized type.

   - Union types
     - `type Type1 = number | string | ...`
     - `type Type2 = "a" | "b" | ...`
   - Interaction types
     - `type Type3 = { x: number... }`
     - `type Type4 = { x: number } & { y: string }`
   - Generic Types (defined after declaration, but making structure)
     - `type Type5<K, V> = { [key: K]: V };`<br>
       `const value1: Type5<string, number> = {"str": 0, ...}`

3. Be careful about asynchronous function(Next.js has a lot of asynchronous functions)

### Table of Contents

1. **[Types](#ts_types)** <a id="ts_types_"></a>
2. **[Variable declaration](#ts_variable)** <a id="ts_variable_"></a>
3. **[Function declaration](#ts_function)** <a id="ts_function_"></a>
4. **[Nickname for type](#ts_nickname)** <a id="ts_nickname_"></a>
5. **[Generic type](#ts_generic)** <a id="ts_generic_"></a>
6. **[Type Assertion](#ts_assertion)** <a id="ts_assertion_"></a>
7. **[Optional Parameters](#ts_param)** <a id="ts_param_"></a>
8. **[Enums](#ts_enums)** <a id="ts_enums_"></a>
9. **[Modules](#ts_modules)** <a id="ts_modules_"></a>
10. **[Type Utilities](#ts_utilities)** <a id="ts_utilities_"></a>

### Contents

1. **[Types](#ts_types_)** <a id="ts_types"></a>

   - number, string, boolean, null, undefined...

   - `any`, `void`, `never`, `unknown`...

     - `void` : no return
     - `never` : never return
       1. Throw only error
       2. Infinite loop function
     - `unknown` : For use, It is needed what type of this value is.

   - `typeName[]`, `Array<typeName>`

   - { key: _typeName_ }, interface Name { _keyName_: _typeName_,...}

2. **[Variable declaration](#ts_variable_)** <a id="ts_variable"></a>
   `const variableName: type = typeName;`

3. **[Function declaration](#ts_function_)** <a id="ts_function"></a>
   `function f1(param1: typeName, param2: typeName): typeNameofReturn {}`

4. **[Nickname for type](#ts_nickname_)** <a id="ts_nickname"></a>

- `type typeNickname = typeName;`

5. **[Generic type](#ts_generic_)** <a id="ts_generic"></a>

   Generic type means the value is confirmed when the function called.

   ```
   function f1<GenericType>(arg1: GenericType): typeNameofReturn {...}

   const useReturn = f1<argTypeName>(value)
   ```

6. **[Type Assertion](#ts_assertion_)** <a id="ts_assertion"></a>

   ```
   const str1: string = "this is string";
   const srtLength: number = (str1 as string).legnth; // it cannot be used in JSX
   const srtLengthBracket: number = (<string>str1).legnth;
   ```

7. **[Optional Parameters](#ts_param_)** <a id="ts_param"></a>

   `function f1(param1?: typeName) {...}`

   ?(optional parameter) means this parameter can"t be sent when the function called.

8. **[Enums](#ts_enums)** <a id="ts_enums"></a>

   ```
   enum IsGood {
     never, //0
     bad = 3, //3
     normal, //4
     good, //5
     best //6
   }
   ```

9. **[Modules](#ts_modules)** <a id="ts_modules"></a>

   export

   ```
   // in export file1
   export module M1 {
   export f1(p: typename): typeNameOfReturn {...}
   }
   ```

   ```
   // in export file2
   export default module M2 {
   export f1(p: typename): typeNameOfReturn {...}
   }
   ```

   import

   ```
   // in another file
   import { M1 } from "./file1"
   import M2 from "./file2"
   ```

10. **[Type Utilities](#ts_utilities_)** <a id="ts_utilities"></a>

    It is a kind of of type tools.

    - Concepts
      - T : write type name, means value of type (for transfer)
      - K : write type name
      - U : type2

    1. Partial\<T\>

       makes T be able to be included.

    2. Readonly\<T\>

       makes types and value disable to change values and properties in a new variable with Readonly.

    3. Required\<T>
    4. Pick\<T, K>

       ```
       interface Car {
         brand: string;
         model: string;
         year: number;
       }

       type CarSummary = Pick<Car, "brand" | "model">;

       const car: CarSummary = {
         brand: "Toyota",
         model: "Camry"
       };
       ```

    5. Omit\<T, K>

       make a new type(nickname) which omit keys you write at K.

       ```
       interface Car {
         brand: string;
         model: string;
         year: number;
       }

       type PersonWithoutGender = Omit<Person, "gender">;
       ```

    6. Record\<K, T>

       makes a new Record type which is a kind of TypeScript"s type.
       It is so similar Object, Map or Dictionary, but Record type can use only the type of key and value you set at first.

       ```
       type Weekday = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"; // It implies the type is String

       //
       const dayToHours: Record<Weekday, number> = {
         Monday: 8,
         Tuesday: 8,
         Wednesday: 8,
         Thursday: 8,
         Friday: 8
       };
       ```

    7. Exclude\<T, U>
    8. Extract\<T, U>
    9. NonNullable\<T>
    10. ReturnType\<T>
    11. Parameters\<T>

## [React](#react_)<a id="react"></a>

1. **useRef**

   A React selector or a storage for values without causing re-renders.

   1. `const refName = useRef(null);`

      1. Select

         2. `<tag ref={refName}>`
         3. `refName.current.elementMethod();`

      2. Value

         1. `refName.current = value`;

1. **useMemo**

   Variable not to update continuously but to render when dependencies changed.

1. **useCallback**

   Returns a memoized callback function, preventing unnecessary renders.

1. **useState**

   Manages state with continuous updates triggering re-renders; changes are immediately visible with setState.

1. **useReducer**

   Similar to useState but dispatch return value of reducer(function).

   1. Make `function rd1(state, v)` as reducer
   2. Use `cosnt [state, dispatch] = useReducer(reducer, initialState)`
   3. In `<a onClick={() => dispatch(v)}>content</a>`, dispatch updates the state with the return value of `function rd1` when onclick run.

1. **useEffect**

   Runs after state changes or component mounting, asynchronously.

1. **useLayoutEffect**

   Runs after state changes or component mounting, synchronously; occurs **after rendering but before screen repaint**.

1. **useContext**

   Provides access to data stored in a context without unnecessary prop drilling.

## [Next.js](#next_)<a id="next"></a>

1. SSR(Server-Side Rendering)

   Render in server before send HTML

2. SSG(Static Site Generation)

   Build in server before send pages

3. Dynamic routing

   ```
   // pages/posts/[id].js
   // [id].js처럼 대괄호로 감싼 파일명 사용할 것
   // post에서 사용한 컴포넌트당 1.js, 2.js..로 간주한다

   import { useRouter } from 'next/router';

   const Post = () => {
     const router = useRouter(); // useRouter Hook로 경로 정보를 가져옴
     const { id } = router.query; // 파일명(상수)을 변수에 할당하여 사용 가능

     return <p>Post ID: {id}</p>;
   };

   export default Post;
   ```

4. Custum routing

5. API routing

   API routing work in pages/api/...

   ```
   // pages/api/hello.js

   export default (req, res) => {
     res.status(200).json({ message: 'Hello' });
   };
   ```

6. CSS Modules and CSS-in-JS

   1. Module

      ```
      /* in styles.module.css */

      .title {
        color: red;
      }
      ```

      ```
      // in some conponent
      import styles from './styles.module.css';

      function MyComponent() {
        return <h1 className={styles.title}>Hello World</h1>;
      }
      ```

   2. CSS-in-JS

      ```
      import styled from 'styled-components';

      const Title = styled.h1`
        color: red;
      `;

      function MyComponent() {
        return <Title>Hello World</Title>;
      }
      ```

7. .env.local

   will be update to the next time.

### Next with TypeScript

1. function f1(): NextPage\<type> {...}

2. API routing

   ```
   // pages/api/hello.tsx
   import { NextApiRequest, NextApiResponse } from 'next';

   type T1 = {
     key: valueType;
   }

   // Set type of function and params
   export default function handler1(req: NextApiRequest, res:NextApiRequist<Data>) {
    // send client json file as response
     res.statur(200).json({ message: 'Hello' });
   }
   ```

   - 200: OK
   - 201: Created
   - 400: Bad Request
   - 401: Unauthorized
   - 404: Not Found

<br>

## Plus

1. **Progressive Enhancment**

   Make function at first, is able to work on old browsers, before newer function.

2. **Graceful Degradation**

   Give all function, include basic functions for old browsers, degrading gracefully.

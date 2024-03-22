# ⌨️ react_karaoke_remote

This file be update mostly in [Issues](#issues).

## 🙌 Intro

### Trigger

It is the reason why to start this project that I had wanted to sing with **karaoke remote control**, whenever enjoyed singing home.

### Goal

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

2. It is essencial to use some media contents which show karaoke screen and play MR, like Youtube(TJ channel).

   - Youtube API have to be checked.
   - I have to study how to use API, if it is possible to use Youtube API.

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
- Node.js Express (expected)
- ~~SASS~~ conflicts with TailwindCSS: uninstalled

<br>

## Log

> _2024.03.19.tue_

### [Can't manipulate pitch or others](#log1_) <a id="log1"></a>

#### Detail issues

- Never access to elements in iframe in just my web app
- Youtube API gives simple functions, no function to set ptich.
  = I can't manipulate to **use just only web**.

#### Consideration

- Make **Chrome Extention** to have access to iframe in browser.

  But, I must prepare when I fail to make Chrome extention.

#### Conclusion

1. At first, Make Web APP have buttons which work in it.
1. Try making Chrome Extention for Web APP and connecting Web APP to Chrome Extention as make buttons one by one.

- If it is thought impossible now, close this project with no functions about 2

<br>

## ✨ Issues <a id="issues"></a>

Issues are listed by completion date.

<br>

> _2024.03.22.fri_

#### ~~#53 - Split functions of controllerFunctions.ts into new file.ts~~

- Make a new folder and put them in.

<br>

> _2024.03.21.thu_

#### #41 - Show list after users search videos

- in progress
- How to Make

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
           - Horizonal
           - Vertical

    - I may need to use **Figma** to select this properly.

#### ~~#51 - Move information on the top of video (title / artist / KY number), using fixed~~

- Complete, using absolute

#### #49 - Styling with Tailwind, @media and React Transition Group

- in wait

#### #50 - Store and show the videos a user sang

- in wait

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

  Fail. Is it unique a issue?

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

- Accomplish access to YoutubeAPI and get value.
- But the qouta is exceeded... It must be pended by 4pm
- Some layout is changed, and complete goal to load YouTube video in a Component.

#### ~~#14 - Make layout in Mobile, Tablet, Desktop to use @media from 13~~

- I decided to make the main layout before the quota reset.
- Make simple layout use @media, only div.app scope.
- And It is now possible to use Youtube API to create one more project in Google Cloude.

<br>

> _2024.03.17.sun_

#### ~~#10 - Install React transition group~~

- In addition, describe what I use in this project.

#### ~~#8 - Set up rules and rough plan(how to use languages)~~

1.  ✔️ **HTML(Next.js)**

    - Use Semantic tag, looking for that in Docs.
    - Mix elements and Compoenets properly.

2.  ✔️ **CSS(SCSS)**

    1.  ✔️ Tailwind : Use TailwindCSS at first.

        - I caught how to use Tailwind especially about theme

    2.  ✔️ MASCSS(Base, Module) : When Tailwind classes of a element too long, a class name in Base of Module unit is used for some elements which has similar style.
    3.  ✔️ BEM(UI, Hierarchy) : When it is considered a specific element should have a kind of own UI name, name a class according to BEM.

    - ~~OOCSS : When classes in a element is too long to read easily, name according to OOCSS. : It is the way I wanted~~

3.  ✔️ **TypeScript**

    I am a user to use Typescript at first. so... The document of it and to study it is needed.

    - ✔️ [Write the concepts and sytactics](#ts)<a id="ts_"></a>

4.  ✔️ **React, Next.js**

    This is same to TypeScript.

    - ✔️ [Write React hook I didn"t know](#react)<a id="react_"></a>
    - ✔️ [Write Next.js" main function](#next)<a id="next_"></a>

<br>

> _2024.03.16.sat_

#### ~~#4 - Set SASS, ESLint and Prettier, Stylelint, PostCSS sorting or CSS declaration sorter~~

- ✔️ PostCSS Sorting in VScode
- I realized that PostCSS sorting and CSS declaration sorter is definetely different.

<br>

> _2024.03.15.fri_

#### ~~#3 - Seclect React-Like framework and bundler~~

-

It will be made with React, but I heard offical React document say "Don"t use create-react-app".

- I must choose what type of React to apply this project
  - ✔️ Next.js : It is mostly used in a lot ofcompany.
  - Remix
  - Gatsby
  - ~~Expo~~ is only for React Native
- Install Next.js

#### ~~#1 - Set up basis of project~~

- Update plan especially at [Goal v.1.0](#v1_0)

<br>

# Memo

## [TypeScript's Main Syntactics](#ts_)<a id="ts"></a>

### Most Usages

1. Interface

   Defines the structure of Object.

2. type

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

   - number, string, bllean, null, undefined...
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

# react_karaoke_remote

This file be update mostly in [Issues](#issues).

## Trigger

It is the reason why to start this project that I had wanted to sing with **karaoke remote control**, whenever enjoyed singing home.

## Goal

This app should have functions for users to enjoy singing at home when they want it.

### v1.0<span id="v1_0"></span>

#### Framework<a name="framework"></a>

It will be made with React, but I heard offical React document say "Don"t use create-react-app".

- I must choose what type of React to apply this project
  - ✔️ Next.js : It is mostly used in a lot ofcompany.
  - Remix
  - Gatsby
  - ~~Expo~~ is only for React Native

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

## Issues <span id="issues"></span>

> _2024.03.16.sat_

#### #8 Set up rules and rough plan(how to use languages)

- _In process..._

1.  ✔️ **HTML(Next.js)**

- Use Semantic tag, looking for that in Docs.
- Mix elements and Compoenets properly.

2.  ✔️ **CSS(SCSS)**

    1.  ✔️ Tailwind : Use TailwindCSS at first.

        - I caught how to use Tailwind especially about theme

    2.  ✔️ MASCSS(Base, Module) : When Tailwind classes of a element too long, a class name in Base of Module unit is used for some elements which has similar style.
    3.  ✔️ BEM(UI, Hierarchy) : When it is considered a specific element should have a kind of own UI name, name a class according to BEM.

    - ~~OOCSS : When classes in a element is too long to read easily, name according to OOCSS. : It is the way I wanted~~

3.  **TypeScript**

    I am a user to use Typescript at first. so... The document of it and to study it is needed.

    - ✔️ [Write the concepts and sytactics](#ts)<span id="ts_"></span>.

4.  **React, Next.js**

    This is same to TypeScript.

    - Write React hook I didn"t know
    - Write Next.js" main function

#### ~~#4 - Set SASS, ESLint and Prettier, Stylelint, PostCSS sorting or CSS declaration sorter~~

- ✔️ PostCSS Sorting in VScode
- I realized that PostCSS sorting and CSS declaration sorter is definetely different.

> _2024.03.15.fri_

#### ~~#3 - Seclect React-Like framework and bundler~~

- Update details at [Framework](#framework)
- Install Next.js

#### ~~#1 - Set up basis of project~~

- Update plan especially at [Goal v.1.0](#v1_0)

---

# Memo

## [TypeScript Main Syntactics](#ts_)<span id="ts"></span>

### Table of Contents

1. [Types](#ts_types) <span id="ts_types_"></span>
2. [Variable declaration](#ts_variable) <span id="ts_variable_"></span>
3. [Function declaration](#ts_function) <span id="ts_function_"></span>
4. [Nickname for type](#ts_nickname) <span id="ts_nickname_"></span>
5. [Generic type](#ts_generic) <span id="ts_generic_"></span>
6. [Type Assertion](#ts_assertion) <span id="ts_assertion_"></span>
7. [Optional Parameters](#ts_param) <span id="ts_param_"></span>
8. [Enums](#ts_enums) <span id="ts_enums_"></span>
9. [Modules](#ts_modules) <span id="ts_modules_"></span>
10. [Type Utilities](#ts_utilities) <span id="ts_utilities_"></span>

### Contents

1. [Types](#ts_types_) <span id="ts_types"></span>

   - number, string, bllean, null, undefined...
   - `any`, `void`, `never`, `unknown`...
     - `void` : no return
     - `never` : never return
       1. Throw only error
       2. Infinite loop function
     - `unknown` : For use, It is needed what type of this value is.
   - `typeName[]`, `Array<typeName>`
   - { key: _typeName_ }, interface Name { _keyName_: _typeName_,...}

2. [Variable declaration](#ts_variable_) <span id="ts_variable"></span>
   `const variableName: type = typeName;`

3. [Function declaration](#ts_function_) <span id="ts_function"></span>
   `function f1(param1: typeName, param2: typeName): typeNameofReturn {}`

4. [Nickname for type](#ts_nickname_) <span id="ts_nickname"></span>

- `type typeNickname = typeName;`

5.  [Generic type](#ts_generic_) <span id="ts_generic"></span>
    Generic type means the value is confirmed when the function called.

    ```
    function f1<GenericType>(arg1: GenericType): typeNameofReturn {...}

    const useReturn = f1<argTypeName>(value)
    ```

6.  [Type Assertion](#ts_assertion_) <span id="ts_assertion"></span>

    ```
    const str1: string = "this is string";
    const srtLength: number = (str1 as string).legnth; // it cannot be used in JSX
    const srtLengthBracket: number = (<string>str1).legnth;
    ```

7.  [Optional Parameters](#ts_param_) <span id="ts_param"></span>

    `function f1(param1?: typeName) {...}`

    ?(optional parameter) means this parameter can"t be sent when the function called.

8.  [Enums](#ts_enums) <span id="ts_enums"></span>

    ```
    enum IsGood {
      never, //0
      bad = 3, //3
      normal, //4
      good, //5
      best //6
    }
    ```

9.  [Modules](#ts_modules) <span id="ts_modules"></span>

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

10. [Type Utilities](#ts_utilities_) <span id="ts_utilities"></span>

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

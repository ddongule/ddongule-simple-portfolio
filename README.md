<div align="center">
<img src="./public/readme/images/ddongule-simple-portfolio.png" alt="logo"/>
</div>
<br />
<div align="center">
<a href=''>
  <img src='https://img.shields.io/badge/license-MIT-red' alt='license' />
  <img src='https://img.shields.io/badge/version-1.0.0-yellow' alt='license' />
 </a>
</div>

<div align="center">✨ Make your own portfolio! Easy and Fast. ✨</div>
<br />

[🇰🇷 한국어로 보기 🇰🇷](./README.ko.md)

# 💫 ddongule-simple-portfolio

🌟 This is a simple-portfolio template for Developers. You can customize this template to make your own portfolio. You don't have to understand the code. Just edit `db.json` and some assets(`images`, `markdowns`) then it's all done!

## 💛 See Example! 👉 ([ddongule's portfolio](https://www.ddongule.com))

## 🌿 Features

- 🔥 One Page Layout
- 🔥 Responsive Web
- 🔥 Dark/Light Theme
- 🔥 Language Support (Korean/English)

## 🪜 How To Use

### 1. Clone this repository

```
$ git clone https://github.com/ddongule/ddongule-simple-portfolio
```

### 2. Go into the repository

```
$ cd ddongule-simple-portfolio
```

### 3. Install Dependencies and Start Development Server

- Using NPM

  ```
  $ npm install

  $ npm start
  ```

- Using Yarn

  ```
    $ yarn

    $ yarn start
  ```

### 4. 🌎 Start Developing! Let's Go!

## 🚀 Quick Start

> If you do not want to use any of the items below, feel free to delete it from `db.json`! It will work fine!

- example)
  You can choose sections that you want to use! Just delete it from `db.json`

  - `src/db.json`

    ```
      {
        "aboutMe": {
          "name": "그루밍",
          "nickName": "nickName!",
          "profileImg": "../assets/images/me.gif",
          "email": "mnk918p@gmail.com",
          "githubUrl": "https://github.com/ddongule",
          "blogUrl": "https://mingule.tistory.com/",
          "linkedInUrl": "https://www.linkedin.com/"
        },

        "timestamp": [
          {
            "title": "우아한 횽제들",
            "when": "21.12 ~ ",
            "organizer": "우아한 횽제들",
            "tags": ["company"]
          }
        ]
      }
    ```

### 🇰🇷🇺🇸 0. Select Default Language!

Default Language : **English**

**🔥 You can Select whether to use English or Korean**

  <img src="./public/readme/images/language-select.png" alt="example-image"/>

- Go to `/src/db.json`

  #### 🇺🇸 [Default] Set Default Language as English

  ```
      "meta": {
        ...
        "defaultLanguage": "English"
        ...
      }
  ```

  #### 🇰🇷 Set Default: Korean

  > If you want to use Korean as your default language, just copy and paste the code below the line.

  ```
      "meta": {
        ...
        "defaultLanguage": "Korean"
        ...
      }
  ```

### 👉 1. Main Title Section.

  <img src="./public/readme/images/mainTitle.png" alt="example-image"/>

- Go to `/src/db.json`

  ```
      "aboutMe": {
        ...
        "nickName": "type your own title!"
        ...
      }
  ```

### 👉 2. About Me Section.

  <img src="./public/readme/images/AboutMe.png" alt="example-image"/>

- Change Main Image

1. Put your image to `/public/assets/images`

   - `jpg`, `gif`, `png`

2. Go to `/src/db.json`
   ```
     "aboutMe": {
       ...
       "profileImg": "../assets/images/yourImageFileName"
       ...
     }
   ```

- Change Introduction Text

- 🇺🇸 Go to `/src/assets/static/markdown/aboutMySelf.english.md`

  - (+) To use the Korean version, you should write `aboutMySelf.korean.md` too.

  > **Write With Markdown! Then You'll See..**

  <img src="./public/readme/images/example-markdown.png" alt="example-image"/>

  > The Result will be like this!

  <img src="./public/readme/images/example.png" alt="example-image"/>

  1. h1, h2, h3

     ```
       # h1

       ## h2

       ### h3
     ```

  2. Bold text with Highlight

     - yellow

       ```
         **Hi, my name is ddongule**
       ```

     - red
       ```
         +R+Hi, my name is ddongule+R+
       ```
     - blue

       ```
         +B+Hi, my name is ddongule+B+
       ```

     - green
       ```
         +G+Hi, my name is ddongule+G+
       ```

  3. Enter

     ```
       <br />
     ```

  4. Code

     ```
       `React.js`
       `HTML/CSS(SASS)`
       `Javascript`
     ```

  5. CheckList (Black & White)

     ```
       & Check List(Black & White)
     ```

  6. CheckList (HighLight)

     ```
       - Check List(Black & White)
     ```

  7. Ordered List

     ```
       1. Ordered List
       2. Ordered List
       3. Ordered List
       4. Ordered List
     ```

  8. Link

     ```
       [TextToShow](https://www.your.link)
     ```

### 👉 3. Skill Sets Section.

  <img src="./public/readme/images/SkillSets.png" alt="example-image"/>

Write down your **Professional Skill Sets** here!

> ✨ Customize your own SkillSets Section!

- Go to `/src/db.json`

```

    "skillSets": [
      {
        "category": "Front End Skills",
        "skills": [
          { "skill": "Javascript", "level": "5" },
          ...
        ]
      },
      ...
    ]

```

### 👉 4. Projects Section.

  <img src="./public/readme/images/Projects.png" alt="example-image"/>

Write down the **Projects** you have made!

> ✨ Customize your own Projects Section!

- Go to `/src/db.json`

```

    "projects": [
      {
        "imgUrl": "/assets/images/exmaple.png",
        "githubUrl": "https://github.com/ddongule",
        "projectUrl": "www.ddongule.com",
        "title": "ddongule-simple-portfolio",
        "term": "21.02.02 v1.3.0",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia ..",
        "attribution": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia ..",
        "tags": [] // Even if there are no tags to write, you should leave the empty array as is.
      },
      ...
    ]

```

### 👉 5. Timestamp Section.

  <img src="./public/readme/images/Timestamp.png" alt="example-image"/>

Write down your **Timestamps** you have made!

> ✨ Customize your own Timestamp Section!

- Go to `/src/db.json`

```

    "timestamp": [
      {
        "title": "Woowa Sisters",
        "when": "21.12 ~ ",
        "organizer": "Woowa Sisters",
        "tags": ["company"] // Even if there are no tags to write, you should leave the empty array as is.
      },
      ...
    ]

```

### 👉 6. Experiences Section.

  <img src="./public/readme/images/Experiences.png" alt="example-image"/>

Write down your **Experiences** that you have!

> ✨ Customize your own Experiences Section!

- Go to `/src/db.json`

```

    "experiences": [
      {
        "imgUrl": "/assets/images/exmaple.png",
        "title": "[Software Engineer] Woowa Sisters Co.",
        "term": "21.02 - 현재 진행 중",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia ..",
        "experienceUrl": "https://woowacourse.github.io/"
      },
      ...
    ]

```

### 👉 7. Education Section.

 <img src="./public/readme/images/Education.png" alt="example-image"/>

Write down your **Educations**!

> ✨ Customize your own Education Section!

- Go to `/src/db.json`

```

    "educations": [
      {
        "title": "Woowa University",
        "term": "2013.03 - 2017.03",
        "description": "[Graduated] Computer Science and Engineering"
      },
      ...
    ]

```

## 🐞 Bug Reporting

- [Make Issue!](https://github.com/ddongule/ddongule-simple-portfolio/issues)

## How to Contribute?

1. **Fork** this repository
2. **Create** your own branch: `git checkout -b new-feature`
3. **Add** and **Commit**: `git commit -am 'feat: add new feature`
4. **Push** to your branch: `git push origin new-feature`
5. **Submit** a Pull Request!🌟

## License

- [`MIT License`]('./LICENSE')

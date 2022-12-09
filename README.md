# 🎅 Advent-Of-Code ⭐
My Advent Of Code adventure

</br>

## ✔️ Before start
---
* Make sure you got **node.js** installed on your machine, if you don't, go to the [official website](https://nodejs.org/en/download/)

```shell
$ npm -v
```
</br>

## 🚀 Launch project
---
* Clone the repository

```shell
$ # With SSH
$ git clone git@github.com:JeanM38/Advent-Of-Code.git advent_of_code

$ # With HTTPS
$ git clone https://github.com/JeanM38/Advent-Of-Code.git advent_of_code
```

* Get into your local repository
```shell
$ cd advent_of_code
```

* Link bin commands to allow them
```shell
$ npm link
```
</br>

## 🛠️ Create a new day
---

Each day, a new algorithm, a template is here to help you, just run this command to create a new folder

```shell
$ new-day {YEAR} {DAY}
```

If you run `new-day 2022 01` , new folder tree will be

```
  2021/
  2022/
    .../
    01/
      input.txt
      problem1.js
      problem2.js
      README.md
  .../
```
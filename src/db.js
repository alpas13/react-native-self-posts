import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('post.db');

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tr) => {
        tr.executeSql(
            'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT, date TEXT, booked INT)',
            [],
            resolve,
            (_, error) => {
              reject(error)
            })
      })
    });
  }

  static getPosts() {
    return new Promise((resolve, reject) => {
      db.transaction((tr) => {
        tr.executeSql(
            'SELECT * FROM posts',
            [],
            (_, result) => resolve(result.rows._array),
            (_, error) => {
              reject(error)
            })
      })
    })
  }

  static addPost(post) {
    return new Promise((resolve, reject) => {
      db.transaction((tr) => {
        tr.executeSql(
            'INSERT INTO posts (text, date, booked, img) VALUES (?,?,?,?)',
            [post.text, post.date, post.booked, post.img],
            (_, result) => resolve(result.insertId),
            (_, error) => {
              reject(error);
            }
            )
      })
    })
  }

  static updatePost(post) {
    return new Promise((resolve, reject) => {
      db.transaction((tr) => {
        tr.executeSql(
            'UPDATE posts SET booked = ? WHERE id = ?',
            [post.booked ? 0 : 1, post.id],
            resolve,
            (_, error) => {
              reject(error);
            }
        )
      })
    })
  }

  static removePost(id) {
    return new Promise((resolve, reject) => {
      db.transaction((tr) => {
        tr.executeSql(
            'DELETE FROM posts WHERE id = ?',
            [id],
            resolve,
            (_, error) => {
              reject(error);
            }
        )
      })
    })
  }
}

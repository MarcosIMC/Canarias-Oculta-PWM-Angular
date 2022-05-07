import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Article} from "../class/article";
import {map, Observable} from "rxjs";
import {collection, collectionData, getFirestore, where} from "@angular/fire/firestore";
import {query} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private dbPath = '/articles';
  //articlesRef:AngularFirestoreCollection<Article>;

  constructor(private db:AngularFirestore) {
    //this.articlesRef = db.collection(this.dbPath);
  }

  getAll(){
    return new Promise<any>((resolve) => {
      this.db.collection('articles').valueChanges({idField: 'id'})
        .subscribe(articles => resolve(articles));
    })
  }

  getAllByIsland(island:String){
    return new Promise<any>((resolve) => {
      this.db.collection("articles", ref =>
      ref.where('island', '==', island))
        .valueChanges().subscribe(articles => resolve(articles))
    })
  }

  getArticleByName(title:String){
    return new Promise<any>((resolve) => {
      this.db.collection("articles", ref =>
        ref.where('title', '==', title))
        .valueChanges().subscribe(articles => resolve(articles))
    })
  }

  getArticleMainByRating(island:String){
    return new Promise<any>((resolve) => {
      this.db.collection("articles", ref =>
        ref.where('island', '==', island).where('rating', '>=', 1).orderBy('rating').limit(1))
        .valueChanges().subscribe(articles => resolve(articles))
    })
  }

}

 import { Component,EventEmitter,Output } from '@angular/core';

 import { Post } from '../post.model'

 @Component({
     selector:'app-post-create',
    templateUrl:'./post-create.component.html'
 })
export class PostCreateComponent {
  /*   enteredValue=''
    newPost='No content';
    onAddPost(postInput:HTMLTextAreaElement){
       //this.newPost=postInput.value; 
       this.newPost=this.enteredValue;
    } */
    enteredTitle="";
    enteredContent="";
  @Output()  postCreated=new EventEmitter<Post>();

  onAddPost(){
        const post:Post={
            title:this.enteredTitle,
            content:this.enteredContent
        };
       
        this.postCreated.emit(post);
        }
        
    }

    
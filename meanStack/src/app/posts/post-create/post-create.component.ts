 import { Component,EventEmitter,Output } from '@angular/core';
 import { NgForm } from '@angular/forms';

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

  onAddPost(form:NgForm){

    if (form.invalid) {
        return;
    }
        const post:Post={
            title:form.value.title,
            content:form.value.content
        };
       
        this.postCreated.emit(post);
        }
        
    }

    
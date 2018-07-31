import { Component,Input } from '@angular/core'

//importing interface Post from Post model so that exact authencity of initial posts is maintained
import { Post } from '../post.model'

@Component({
    selector :'app-post-list',
    templateUrl :'./post-list.component.html',
    styleUrls:['./post-list.component.css']
})

export class PostList {
/*  posts=[
      { title:"First Post", content:"This is first post" },
      { title:"Second Post",content:"This is second post"},
      { title:"Third Post",content:"This is third post"}
 ]; */

@Input() posts:Post[]=[];
}

//Password for Mongodb
//nBhmkiXU2Ux9Ya16
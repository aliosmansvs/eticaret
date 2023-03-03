import {
    Component, Input, OnChanges,
    OnInit, Output, Pipe, PipeTransform,
    SimpleChanges
} from '@angular/core';

import {ConfirmationService, MessageService, TreeNode} from "primeng/api";




@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    providers: [MessageService],

})

export class CommentComponent  implements OnInit{



    @Input()comments!:any[];
    @Input()comments2!:any;

    commentss:any[]=[];


    constructor() {


    }

    ngOnInit(): void {
        console.log("sdsd",this.comments);
        this.commentss=this.comments;
    }
















    transform(comments: Comment[], id:number,parentId:number,userId:number): any {
        return this.filterNodes(comments, id, parentId, userId);
    }

    filterNodes(value: Comment[], id:number,parentId:number,parentValue:any):any[]{
        return value.filter((node)=>{
            // @ts-ignore
            return node[parentId] == parentValue;

        }).map((node)=>{
            // @ts-ignore
            node["items"] = this.filterNodes(value,id,parentId,node[id]);
            return node;
        });
    }


}




